import { GamepadIcon } from "../icons/Icons";

type Aspect = "video" | "square" | "wide" | "tall";

const ASPECT_CLASS: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  label,
  description,
  aspect = "video",
  className = "",
}: {
  /** Short tag, e.g. "Screenshot needed" */
  label: string;
  /** Exactly what should be captured/designed for this spot */
  description: string;
  aspect?: Aspect;
  className?: string;
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed p-5 text-center ${ASPECT_CLASS[aspect]} ${className}`}
      style={{ borderColor: "rgba(53,242,255,0.3)", background: "rgba(53,242,255,0.03)" }}
    >
      <div className="pointer-events-none absolute inset-0 arcade-grid-bg opacity-40" aria-hidden="true" />
      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: "rgba(53,242,255,0.1)", color: "var(--color-cyan-400)" }}
      >
        <GamepadIcon size={18} />
      </span>
      <span
        className="relative rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
        style={{ background: "rgba(255,176,46,0.12)", color: "var(--color-coin-400)" }}
      >
        {label}
      </span>
      <p className="relative max-w-xs text-[12px] leading-snug text-[var(--color-ink-400)]">
        {description}
      </p>
    </div>
  );
}
