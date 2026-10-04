import type { Metadata } from "next";
import Link from "next/link";
import { logoutAction } from "./actions";
import { isAuthenticated } from "../lib/admin-auth";

export const metadata: Metadata = {
  title: { absolute: "Admin — AllYonoArcade" },
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAuthenticated();
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-800 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">
              AllYonoArcade <span className="text-cyan-300">Admin</span>
            </span>
            {authed && (
              <nav className="hidden text-sm sm:block" aria-label="Admin">
                <Link href="/promo-codes" className="rounded px-2 py-1 hover:bg-white/10">
                  Promo codes
                </Link>
              </nav>
            )}
          </div>
          {authed && (
            <form action={logoutAction}>
              <button
                type="submit"
                className="min-h-9 rounded-lg border border-white/30 px-3 text-sm hover:bg-white/10"
              >
                Log out
              </button>
            </form>
          )}
        </div>
      </header>
      {children}
    </div>
  );
}
