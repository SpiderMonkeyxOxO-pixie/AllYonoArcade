import PromoEditor, { type EditorApp } from "../../components/admin/PromoEditor";
import { requireAdmin } from "../../lib/admin-auth";
import { adminApps } from "../../lib/admin-apps";
import { readPromoSheet, todayIst } from "../../lib/promo-file";

export const dynamic = "force-dynamic";

export default async function AdminPromoCodesPage() {
  await requireAdmin();
  const sheet = readPromoSheet();
  const byName = new Map(sheet.rows.map((r) => [r.name.toLowerCase(), r] as const));

  const apps: EditorApp[] = adminApps().map((a) => {
    const r = byName.get(a.name.toLowerCase());
    return { ...a, morning: r?.morning ?? "", afternoon: r?.afternoon ?? "", evening: r?.evening ?? "" };
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-2xl font-bold">Daily promo codes</h1>
      <p className="mt-1 text-sm text-slate-600">
        Enter each app&apos;s Morning / Afternoon / Evening code, then press Save. Changes appear on{" "}
        <a
          href="https://allyonoarcade.com/promo-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          allyonoarcade.com/promo-codes
        </a>{" "}
        immediately — no rebuild.
      </p>
      <PromoEditor apps={apps} today={todayIst()} savedAt={sheet.savedAt} />
    </main>
  );
}
