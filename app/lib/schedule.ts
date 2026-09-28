import { notFound } from "next/navigation";

/** Scheduled posts go live at 07:00 IST (01:30 UTC) on their publish date.
 *  Pages that use this must be `dynamic = "force-dynamic"` so the date is checked per request. */
export function publishTime(date: string): number {
  return Date.parse(`${date}T01:30:00Z`);
}

export function isPublished(date?: string): boolean {
  if (process.env.SCHEDULE_PREVIEW === "1") return true; // local preview only
  return !date || Date.now() >= publishTime(date);
}

/** Call at the top of a scheduled post: returns a 404 until its publish time. */
export function requirePublished(date: string): void {
  if (!isPublished(date)) notFound();
}
