import Link from "next/link";
import { isPublished } from "../../lib/schedule";

/** A link to a scheduled post: plain text until the post's publish time, then a normal link.
 *  Pages using it must re-render after that time (force-dynamic, or `revalidate`). */
export default function ScheduledLink({
  href,
  date,
  children,
}: {
  href: string;
  date: string;
  children: React.ReactNode;
}) {
  return isPublished(date) ? <Link href={href}>{children}</Link> : <>{children}</>;
}
