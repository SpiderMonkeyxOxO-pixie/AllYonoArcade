"use client";

import { useEffect, useState } from "react";
import { getCurrentPeriod, getNextWindow, formatDuration, PERIOD_WINDOWS } from "../../lib/promo-time";

/**
 * Live "which window are we tracking right now" indicator. Framed around
 * when *this site* checks each period, not a claim about the app's own
 * release schedule — we don't have that confirmed.
 */
export default function PromoCountdown() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const current = getCurrentPeriod(now);
  const next = getNextWindow(now);

  return (
    <div className="mx-auto max-w-[760px] px-4 sm:px-6">
      <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12.5px]">
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: "var(--color-mint-400)" }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--color-mint-400)" }} />
        </span>
        <span className="text-[var(--color-ink-200)]">
          Currently tracking the <strong className="text-[#f3f5ff]">{PERIOD_WINDOWS[current].label}</strong> window
        </span>
        <span className="text-[var(--color-ink-400)]">
          · {PERIOD_WINDOWS[next.period].label} window in {formatDuration(next.msUntil)}
        </span>
      </div>
    </div>
  );
}
