import {
  createHmac,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Single-admin authentication for code.allyonoarcade.com. There is no sign-up:
 * the one account lives in environment variables.
 *
 *   ADMIN_USERNAME        login name
 *   ADMIN_PASSWORD_HASH   output of `npm run admin:hash` (scrypt, salted)
 *   ADMIN_SESSION_SECRET  random 32+ char string used to sign the cookie
 *
 * Sessions are stateless signed cookies (HttpOnly, SameSite=Strict, Secure in
 * production, 8h). Changing ADMIN_SESSION_SECRET logs everyone out.
 */

const COOKIE = "aa_admin";
const SESSION_MS = 8 * 60 * 60 * 1000;

export function authConfigured(): boolean {
  return Boolean(
    process.env.ADMIN_USERNAME &&
      process.env.ADMIN_PASSWORD_HASH &&
      (process.env.ADMIN_SESSION_SECRET?.length ?? 0) >= 32,
  );
}

function sign(payload: string): string {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "")
    .update(payload)
    .digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/** Hash format: `scrypt:<salt hex>:<hash hex>` */
export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt:${salt.toString("hex")}:${hash.toString("hex")}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [scheme, saltHex, hashHex] = stored.split(":");
  if (scheme !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(password, Buffer.from(saltHex, "hex"), expected.length);
  return timingSafeEqual(actual, expected);
}

// ---- brute-force throttle (in-memory; the app runs as one PM2 process) ----
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60 * 1000;
const fails = new Map<string, { count: number; first: number }>();

async function clientKey(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-real-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export async function isLockedOut(): Promise<boolean> {
  const rec = fails.get(await clientKey());
  if (!rec) return false;
  if (Date.now() - rec.first > LOCK_MS) {
    fails.delete(await clientKey());
    return false;
  }
  return rec.count >= MAX_FAILS;
}

async function recordFailure(): Promise<void> {
  const key = await clientKey();
  const rec = fails.get(key);
  if (!rec || Date.now() - rec.first > LOCK_MS) {
    fails.set(key, { count: 1, first: Date.now() });
  } else {
    rec.count += 1;
  }
}

export async function attemptLogin(
  username: string,
  password: string,
): Promise<boolean> {
  if (!authConfigured()) return false;
  if (await isLockedOut()) return false;

  // Always run the scrypt check so timing doesn't reveal a valid username.
  const passwordOk = verifyPassword(password, process.env.ADMIN_PASSWORD_HASH!);
  const userOk = safeEqual(username, process.env.ADMIN_USERNAME!);
  if (!(passwordOk && userOk)) {
    await recordFailure();
    return false;
  }

  fails.delete(await clientKey());
  const exp = Date.now() + SESSION_MS;
  const payload = `${exp}.${randomBytes(12).toString("base64url")}`;
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MS / 1000,
  });
  return true;
}

export async function isAuthenticated(): Promise<boolean> {
  if (!authConfigured()) return false;
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return false;
  const i = token.lastIndexOf(".");
  if (i < 0) return false;
  const payload = token.slice(0, i);
  if (!safeEqual(token.slice(i + 1), sign(payload))) return false;
  return Number(payload.split(".")[0]) > Date.now();
}

/** Call at the top of every admin page and server action. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAuthenticated())) redirect("/login");
}

export async function logout(): Promise<void> {
  (await cookies()).delete(COOKIE);
}
