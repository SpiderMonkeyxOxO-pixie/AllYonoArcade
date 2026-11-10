/**
 * Date gating for staggered-release blog posts. A page is live from
 * 07:00 IST on its given date — matches the cutoff already used by
 * livePillars() in site-data.ts, kept here as a shared, page-level
 * version of the same check (livePillars only filters listings/sitemap,
 * it doesn't stop the page itself from rendering if visited directly).
 * Pages are static, so a daily rebuild is what actually publishes them
 * — see scripts/scheduled-publish.sh.
 */
export function isPublished(dateISO: string): boolean {
  const goLive = Date.parse(`${dateISO}T01:30:00Z`);
  if (Number.isNaN(goLive)) return true;
  return Date.now() >= goLive;
}
