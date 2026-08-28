import Link from "next/link";
import {
  DownloadIcon,
  GamepadIcon,
  StoreIcon,
  ShieldCheckIcon,
  LogInIcon,
  GiftIcon,
  PhoneIcon,
  SwapIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "../icons/Icons";
import { CLUSTER_PAGES, type IconKey } from "../../lib/site-data";
import Reveal from "./Reveal";

const ICONS: Record<IconKey, (props: { size?: number; className?: string }) => React.ReactElement> = {
  download: DownloadIcon,
  gamepad: GamepadIcon,
  store: StoreIcon,
  shield: ShieldCheckIcon,
  login: LogInIcon,
  gift: GiftIcon,
  phone: PhoneIcon,
  swap: SwapIcon,
};

export default function ClusterGrid() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-16">
      <Reveal className="mb-6 max-w-xl">
        <h2 className="font-display text-[24px] sm:text-[32px] font-semibold tracking-tight">
          Every Yono Arcade topic, covered
        </h2>
        <p className="mt-2.5 text-[13.5px] sm:text-[15px] text-[var(--color-ink-400)] leading-relaxed">
          Eleven focused guides instead of one thin overview — tap any topic to preview it, then
          read the full guide.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-3">
        {CLUSTER_PAGES.map((page) => {
          const Icon = ICONS[page.icon];
          return (
            <details
              key={page.slug}
              className="cabinet cabinet-interactive group relative overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 group-open:bg-[rgba(255,63,176,0.1)]"
                  style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}
                >
                  <Icon size={16} />
                </span>
                <span className="min-w-0 flex-1 truncate font-display text-[14.5px] font-semibold text-[#f3f5ff]">
                  {page.label}
                </span>
                <span className="shrink-0 text-[10.5px] font-medium text-[var(--color-ink-400)]">
                  {page.volume}
                </span>
                <ChevronDownIcon
                  size={15}
                  className="shrink-0 text-[var(--color-ink-400)] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="accordion-content px-4 pb-4 pl-16">
                <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-400)]">
                  {page.description}
                </p>
                <Link
                  href={page.slug}
                  className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-magenta-400)] transition-colors hover:text-[var(--color-cyan-400)]"
                >
                  Read guide
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </details>
          );
        })}
      </Reveal>
    </section>
  );
}
