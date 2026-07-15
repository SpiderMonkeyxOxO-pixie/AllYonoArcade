import Link from "next/link";
import Image from "next/image";
import { CLUSTER_PAGES, FOOTER_LINKS } from "../../lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[var(--color-void-900)]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="Yono Arcade logo"
                width={28}
                height={28}
                sizes="28px"
                className="h-7 w-7 rounded-md object-contain"
              />
              <span className="font-display font-semibold text-[14px]">
                Yono<span className="text-neon">Arcade</span>
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed text-[var(--color-ink-400)]">
              AllYonoArcade.com is an independent, unofficial information guide. We are not
              affiliated with, endorsed by, or an official distributor of the Yono Arcade app.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-semibold text-[#f3f5ff] mb-3">Guides</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {CLUSTER_PAGES.slice(0, 5).map((l) => (
                <li key={l.slug}>
                  <Link href={l.slug} className="text-[13px] text-[var(--color-ink-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                    {l.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-semibold text-[#f3f5ff] mb-3">Support</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {CLUSTER_PAGES.slice(5).map((l) => (
                <li key={l.slug}>
                  <Link href={l.slug} className="text-[13px] text-[var(--color-ink-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                    {l.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-semibold text-[#f3f5ff] mb-3">Site</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[var(--color-ink-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--color-ink-400)]">
            © {year} AllYonoArcade.com — All trademarks belong to their respective owners.
          </p>
          <p className="text-[11px] text-[var(--color-ink-400)] max-w-md leading-relaxed">
            18+ only. Games referenced may involve financial risk depending on the app's mechanics
            and your jurisdiction. Verify local rules before playing. See our{" "}
            <Link href="/disclaimer" className="underline hover:text-[var(--color-cyan-400)]">
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
