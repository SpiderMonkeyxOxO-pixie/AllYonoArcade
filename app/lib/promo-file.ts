import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

/**
 * Single source of truth for promo-code.txt, shared by the public
 * /promo-codes page (read) and the admin panel on code.allyonoarcade.com
 * (read + write).
 *
 * Format, one app per line:   App Name | Morning | Afternoon | Evening
 * with a single "-" for a slot that has no verified code.
 *
 * In production set PROMO_FILE to a path OUTSIDE the git checkout so a deploy
 * can never overwrite today's codes. If that file doesn't exist yet it is
 * seeded from the repo copy on first use.
 */

const REPO_FILE = join(process.cwd(), "promo-code.txt");

export type PromoRow = {
  name: string;
  morning: string;
  afternoon: string;
  evening: string;
};

export const MAX_CODE_LENGTH = 40;
// Domains and links are never published as "codes".
export const LOOKS_LIKE_URL =
  /^https?:\/\/|^www\.|\.(com|net|org|vip|top|cc|club|bet|fun|website|info|one|co)\b/i;

const DEFAULT_HEADER = `# AllYonoArcade — Promo Codes
# Managed by the admin panel (code.allyonoarcade.com); edits go live on the
# next page request. Format:  App Name | Morning | Afternoon | Evening
# A single  -  means no verified code yet ("Not released yet" on the site).
`;

export function getPromoFilePath(): string {
  return process.env.PROMO_FILE?.trim() || REPO_FILE;
}

/** IST calendar date (YYYY-MM-DD). */
export function todayIst(now: Date = new Date()): string {
  return new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
}

function seedIfMissing(file: string): void {
  if (file === REPO_FILE || existsSync(file)) return;
  mkdirSync(dirname(file), { recursive: true });
  if (existsSync(REPO_FILE)) copyFileSync(REPO_FILE, file);
}

const clean = (v?: string) => (!v || v.trim() === "-" ? "" : v.trim());

export function readPromoSheet(): { rows: PromoRow[]; savedAt?: string } {
  const file = getPromoFilePath();
  seedIfMissing(file);
  let raw = "";
  try {
    raw = readFileSync(file, "utf-8");
  } catch {
    return { rows: [] };
  }
  const rows: PromoRow[] = [];
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const [name, m, a, e] = line.split("|").map((p) => p.trim());
    if (!name) continue;
    rows.push({ name, morning: clean(m), afternoon: clean(a), evening: clean(e) });
  }
  let savedAt: string | undefined;
  try {
    savedAt = statSync(file).mtime.toISOString();
  } catch {
    savedAt = undefined;
  }
  return { rows, savedAt };
}

/** Why a single code is unacceptable, or null if fine. */
export function codeProblem(value: string): string | null {
  if (!value) return null;
  if (value.length > MAX_CODE_LENGTH) return `longer than ${MAX_CODE_LENGTH} characters`;
  if (/[|\u0000-\u001f\u007f]/.test(value)) return 'contains a "|" or control character';
  if (value === "-") return 'is just "-" (leave the box empty instead)';
  if (LOOKS_LIKE_URL.test(value)) return "looks like a link/domain, not a promo code";
  return null;
}

/** Atomic rewrite; keeps the comment header and a one-deep .bak of the previous file. */
export function writePromoSheet(rows: PromoRow[]): void {
  const file = getPromoFilePath();
  seedIfMissing(file);

  let header = DEFAULT_HEADER;
  if (existsSync(file)) {
    const kept: string[] = [];
    for (const l of readFileSync(file, "utf-8").split(/\r?\n/)) {
      if (l.trim() && !l.trim().startsWith("#")) break;
      kept.push(l);
    }
    const joined = kept.join("\n").trim();
    if (joined.startsWith("#")) header = `${joined}\n`;
    copyFileSync(file, `${file}.bak`);
  }

  const dash = (v: string) => v || "-";
  const body = rows
    .map((r) => `${r.name} | ${dash(r.morning)} | ${dash(r.afternoon)} | ${dash(r.evening)}`)
    .join("\n");

  const tmp = `${file}.tmp`;
  writeFileSync(tmp, `${header}\n${body}\n`, "utf-8");
  renameSync(tmp, file);
}
