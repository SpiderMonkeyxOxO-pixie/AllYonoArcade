import { NextResponse, type NextRequest } from "next/server";

/**
 * Host-based routing. code.allyonoarcade.com is served by this same app:
 * every request on that host is rewritten under /admin (so the browser sees
 * "/promo-codes" while the file lives at app/admin/promo-codes). On the public
 * host, /admin is not reachable at all.
 *
 * ADMIN_HOST can be overridden; "code.localhost" works for local testing.
 */
const ADMIN_HOSTS = new Set(
  [process.env.ADMIN_HOST ?? "code.allyonoarcade.com", "code.localhost"].map(
    (h) => h.toLowerCase(),
  ),
);

export function proxy(request: NextRequest) {
  const host = (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    ""
  )
    .split(",")[0]
    .split(":")[0]
    .trim()
    .toLowerCase();
  const { pathname } = request.nextUrl;
  const isAdminHost = ADMIN_HOSTS.has(host);

  if (!isAdminHost) {
    if (pathname === "/admin" || pathname.startsWith("/admin/")) {
      return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
    }
    return NextResponse.next();
  }

  if (pathname === "/robots.txt") {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain" },
    });
  }
  // Static files (icons etc.) are served as-is.
  if (/\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/admin${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const config = {
  matcher: ["/((?!_next/|images/).*)"],
};
