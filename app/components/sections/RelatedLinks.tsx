import Link from "next/link";
import Reveal from "./Reveal";
import { StoreIcon, GiftIcon, ArrowRightIcon } from "../icons/Icons";

const LINKS = [
  {
    href: "/all-games",
    icon: StoreIcon,
    title: "All Games List",
    description: "Every similarly branded app we've catalogued, one page.",
  },
  {
    href: "/promo-codes",
    icon: GiftIcon,
    title: "Promo Codes",
    description: "Morning, afternoon & evening code status, checked regularly.",
  },
] as const;

/**
 * Dropped near the bottom of every inner/guide page so the two hub
 * pages (All Games, Promo Codes) always have an in-content path back
 * to them, not just the persistent nav/footer.
 */
export default function RelatedLinks({ exclude }: { exclude?: "all-games" | "promo-codes" }) {
  const links = LINKS.filter((l) => !exclude || !l.href.endsWith(exclude));
  if (links.length === 0) return null;

  return (
    <Reveal className="mx-auto max-w-[760px] px-4 sm:px-6 py-4">
      <div className={links.length === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-1 gap-3"}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="cabinet cabinet-interactive flex items-center gap-3 rounded-2xl p-4"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}
              >
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold text-[#f3f5ff]">{link.title}</span>
                <span className="block truncate text-[12px] text-[var(--color-ink-400)]">{link.description}</span>
              </span>
              <ArrowRightIcon size={16} className="shrink-0 text-[var(--color-ink-400)]" />
            </Link>
          );
        })}
      </div>
    </Reveal>
  );
}
