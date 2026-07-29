"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DownloadIcon, ExternalLinkIcon } from "../icons/Icons";
import { getCurrentPeriod } from "../../lib/promo-time";

type Period = "morning" | "afternoon" | "evening";

const PERIODS: { key: Period; label: string; short: string }[] = [
  { key: "morning", label: "Morning", short: "AM" },
  { key: "afternoon", label: "Afternoon", short: "PM" },
  { key: "evening", label: "Evening", short: "Eve" },
];

export default function PromoCard({
  name,
  image,
  href,
  featured = false,
  highlighted = false,
  isExternal = false,
  morning = null,
  afternoon = null,
  evening = null,
}: {
  name: string;
  image: string;
  href: string;
  featured?: boolean;
  /** Lighter-weight highlight for the current #1 platform — a "New" badge
   *  and glow, without the bigger layout/CTA the Yono Arcade `featured`
   *  card gets (that treatment is reserved for the site's own subject). */
  highlighted?: boolean;
  /** True when `href` is a third-party site rather than an internal guide page. */
  isExternal?: boolean;
  morning?: string | null;
  afternoon?: string | null;
  evening?: string | null;
}) {
  const [active, setActive] = useState<Period>("morning");
  const [copied, setCopied] = useState(false);
  const [nowPeriod, setNowPeriod] = useState<Period | null>(null);
  const codes: Record<Period, string | null> = { morning, afternoon, evening };
  const activeCode = codes[active];

  useEffect(() => {
    const current = getCurrentPeriod();
    setNowPeriod(current);
    setActive(current);
  }, []);

  function handleCopy() {
    if (!activeCode) return;
    navigator.clipboard.writeText(activeCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      className={
        featured
          ? "cabinet glow-cyan relative px-4 pb-4 pt-9 sm:px-5 sm:pb-5 sm:pt-10"
          : highlighted
          ? "cabinet-interactive glow-cyan relative rounded-lg border border-white/10 bg-[var(--color-panel-800)] p-3"
          : "cabinet-interactive rounded-lg border border-white/10 bg-[var(--color-panel-800)] p-3"
      }
    >
      {/* Corner brackets are deliberately skipped on the featured card —
          the "Featured" tag already marks it as distinct. The tag sits
          fully INSIDE the card (top-2.5, not a negative offset) because
          .cabinet has overflow:hidden — a tag hanging outside the card's
          own box, as a child of that same element, gets its top half
          clipped off by that overflow rule. Learned that one the hard way. */}
      {featured && (
        <span
          className="absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
            color: "#05060c",
          }}
        >
          Featured
        </span>
      )}
      {highlighted && !featured && (
        <span
          className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
            color: "#05060c",
          }}
        >
          New
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <Image
          src={image}
          alt={`${name} app icon`}
          width={featured ? 44 : 28}
          height={featured ? 44 : 28}
          sizes={featured ? "44px" : "28px"}
          className={featured ? "h-11 w-11 shrink-0 rounded-lg object-cover" : "h-7 w-7 shrink-0 rounded-md object-cover"}
        />
        <span className={featured ? "truncate font-display text-[15px] font-semibold text-[#f3f5ff]" : "truncate text-[13px] font-semibold text-[#f3f5ff]"}>
          {name}
        </span>
      </div>

      <div className="mt-2.5 flex gap-1 rounded-md bg-white/[0.04] p-0.5">
        {PERIODS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setActive(p.key)}
            title={p.key === nowPeriod ? `${p.label} is the current window` : undefined}
            className="relative min-w-0 flex-1 rounded-md py-1 text-center text-[10px] font-semibold uppercase tracking-wide transition sm:text-[11px]"
            style={
              active === p.key
                ? { background: "rgba(53,242,255,0.1)", color: "var(--color-cyan-400)", border: "1px solid rgba(53,242,255,0.4)" }
                : { color: "var(--color-ink-400)" }
            }
          >
            {p.key === nowPeriod && (
              <span
                className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ background: "var(--color-mint-400)" }}
                aria-hidden="true"
              />
            )}
            {p.short}
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 rounded-md bg-white/[0.03] px-2.5 py-2">
        <div className="min-w-0">
          <p className="text-[9px] font-medium text-[var(--color-ink-400)]">
            {PERIODS.find((p) => p.key === active)?.label}
          </p>
          <p
            className={
              activeCode
                ? "truncate font-mono text-[11px] font-semibold text-[var(--color-cyan-400)]"
                : "truncate font-mono text-[11px] font-semibold text-[var(--color-ink-400)]"
            }
          >
            {activeCode ?? "Not released yet"}
          </p>
        </div>
        {activeCode && (
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold transition"
            style={{ background: "rgba(53,242,255,0.1)", color: "var(--color-cyan-400)" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-center text-[11px] font-semibold transition"
          style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}
        >
          <DownloadIcon size={12} />
          Download
          <ExternalLinkIcon size={10} />
        </a>
      ) : (
        <Link
          href={href}
          className={
            featured
              ? "btn-brand mt-3 flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-2.5 text-center text-[13px] font-semibold"
              : "mt-2 flex w-full items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-center text-[11px] font-semibold transition"
          }
          style={
            featured
              ? { background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))", color: "#1a0e00" }
              : { background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }
          }
        >
          <DownloadIcon size={featured ? 14 : 12} />
          {featured ? "Get the Download Guide" : "Download"}
        </Link>
      )}
    </div>
  );
}
