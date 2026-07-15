import { AlertIcon, ShieldCheckIcon } from "../icons/Icons";
import Reveal from "./Reveal";
import VerificationBadge, { type VerificationStatus } from "./VerificationBadge";

type CalloutTone = "warning" | "info";

export default function Callout({
  tone = "info",
  title,
  badge,
  children,
}: {
  tone?: CalloutTone;
  title: string;
  /** Optional status pill next to the title — makes the site's own verification stance scannable. */
  badge?: VerificationStatus;
  children: React.ReactNode;
}) {
  const isWarning = tone === "warning";
  const Icon = isWarning ? AlertIcon : ShieldCheckIcon;
  const color = isWarning ? "var(--color-coin-400)" : "var(--color-cyan-400)";
  const bg = isWarning ? "rgba(255,176,46,0.06)" : "rgba(53,242,255,0.05)";
  const border = isWarning ? "rgba(255,176,46,0.25)" : "rgba(53,242,255,0.2)";

  return (
    <Reveal className="mx-auto max-w-[760px] px-4 sm:px-6 py-2">
      <div
        className="not-prose rounded-2xl p-4 sm:p-5 flex gap-3"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <Icon size={18} className="mt-0.5 shrink-0" />
        <div className="min-w-0 flex-1" style={{ color: "var(--color-ink-200)" }}>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <p className="text-[15px] font-semibold" style={{ color }}>
              {title}
            </p>
            {badge && <VerificationBadge status={badge} />}
          </div>
          <div className="text-[16px] leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}
