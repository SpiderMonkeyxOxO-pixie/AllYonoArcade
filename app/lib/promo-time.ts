export type Period = "morning" | "afternoon" | "evening";

export const PERIOD_WINDOWS: Record<Period, { startHour: number; endHour: number; label: string }> = {
  morning: { startHour: 6, endHour: 12, label: "Morning" },
  afternoon: { startHour: 12, endHour: 18, label: "Afternoon" },
  evening: { startHour: 18, endHour: 24, label: "Evening" },
};

const ORDER: Period[] = ["morning", "afternoon", "evening"];

/** Which of the three tracked windows the current local time falls into. */
export function getCurrentPeriod(date: Date = new Date()): Period {
  const h = date.getHours();
  if (h < 6) return "evening";
  if (h < 12) return "morning";
  if (h < 18) return "afternoon";
  return "evening";
}

/** The next window (period + ms until it starts) after the current one. */
export function getNextWindow(date: Date = new Date()): { period: Period; msUntil: number } {
  const current = getCurrentPeriod(date);
  const idx = ORDER.indexOf(current);
  const next = ORDER[(idx + 1) % ORDER.length];
  const nextStart = new Date(date);
  nextStart.setMinutes(0, 0, 0);

  if (next === "morning") {
    // Wraps to tomorrow morning if we're currently in the evening window.
    nextStart.setHours(6, 0, 0, 0);
    if (nextStart.getTime() <= date.getTime()) nextStart.setDate(nextStart.getDate() + 1);
  } else {
    nextStart.setHours(PERIOD_WINDOWS[next].startHour, 0, 0, 0);
    if (nextStart.getTime() <= date.getTime()) nextStart.setDate(nextStart.getDate() + 1);
  }

  return { period: next, msUntil: nextStart.getTime() - date.getTime() };
}

export function formatDuration(ms: number): string {
  const totalMinutes = Math.max(0, Math.round(ms / 60000));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}
