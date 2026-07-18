"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "../icons/Icons";

const TELEGRAM_URL = "https://t.me/OfficialAllYonoArcade";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 min-w-[52px]">
      <span className="font-display text-[18px] sm:text-[20px] font-bold tabular-nums text-[#f3f5ff]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-wide text-[var(--color-ink-400)]">{label}</span>
    </div>
  );
}

export default function ComingSoonCard({
  name,
  image,
  releaseDate,
  description,
  catalogueLabel = "All Games",
  blogHref,
}: {
  name: string;
  image: string;
  /** ISO 8601 timestamp with offset, e.g. "2026-07-23T08:00:00+05:30" */
  releaseDate: string;
  description: string;
  catalogueLabel?: string;
  /** Optional link to a full write-up (bonus/withdrawal/promo code details) */
  blogHref?: string;
}) {
  const target = new Date(releaseDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const releaseLabel = new Date(releaseDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="cabinet glow-cyan relative flex flex-col gap-4 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={`${name} app icon`}
            width={56}
            height={56}
            sizes="56px"
            className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wide text-[var(--color-violet-400)]">
              Coming Soon
            </span>
            <span className="block font-display text-[16px] sm:text-[18px] font-semibold text-[#f3f5ff]">
              {name}
            </span>
          </div>
        </div>

        {timeLeft && (
          <div className="flex gap-1.5">
            <Unit value={timeLeft.days} label="Days" />
            <Unit value={timeLeft.hours} label="Hrs" />
            <Unit value={timeLeft.minutes} label="Min" />
            <Unit value={timeLeft.seconds} label="Sec" />
          </div>
        )}
      </div>

      <div>
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
            style={{ background: "rgba(139,107,255,0.14)", color: "var(--color-violet-400)", border: "1px solid rgba(139,107,255,0.35)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-violet-400)" }} aria-hidden="true" />
            Scheduled
          </span>
        </div>
        <h3 className="font-display text-[16px] sm:text-[18px] font-semibold text-[#f3f5ff]">
          {name} is joining the {catalogueLabel} catalogue
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-ink-400)]">
          Expected between 8:00–9:00 AM IST on {releaseLabel}. {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="btn-brand inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold sm:w-auto"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
            color: "#1a0e00",
          }}
        >
          Join Telegram for launch updates
          <ExternalLinkIcon size={12} />
        </a>
        {blogHref && (
          <a href={blogHref} className="text-[12.5px] font-semibold text-[var(--color-cyan-400)] underline underline-offset-2">
            Bonus &amp; withdrawal details →
          </a>
        )}
      </div>
    </div>
  );
}
