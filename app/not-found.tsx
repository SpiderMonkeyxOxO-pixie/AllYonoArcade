import Link from "next/link";
import { ArrowRightIcon, GamepadIcon } from "./components/icons/Icons";
import { CLUSTER_PAGES } from "./lib/site-data";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 arcade-grid-bg opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-[720px] px-4 sm:px-6 text-center">
        <span
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,63,176,0.08)", color: "var(--color-magenta-400)" }}
        >
          <GamepadIcon size={28} />
        </span>
        <h1 className="font-display text-[32px] sm:text-[44px] font-semibold tracking-tight">
          <span className="text-neon">404</span> — Page not found
        </h1>
        <p className="mt-3 text-[14.5px] text-[var(--color-ink-400)] max-w-md mx-auto leading-relaxed">
          That page doesn't exist, or it's been moved. Try one of the core guides below.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {CLUSTER_PAGES.slice(0, 4).map((page) => (
            <Link key={page.slug} href={page.slug} className="cabinet relative flex items-center justify-between p-4">
              <span className="text-[13.5px] font-medium text-[#f3f5ff]">{page.label}</span>
              <ArrowRightIcon size={14} className="text-[var(--color-cyan-400)]" />
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[var(--color-cyan-400)]"
        >
          Back to homepage
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  );
}
