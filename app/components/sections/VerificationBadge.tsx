export type VerificationStatus = "verified" | "unverified" | "pending";

const CONFIG: Record<VerificationStatus, { label: string; color: string; bg: string; border: string }> = {
  verified: {
    label: "Verified",
    color: "var(--color-mint-400)",
    bg: "rgba(60,230,164,0.12)",
    border: "rgba(60,230,164,0.35)",
  },
  unverified: {
    label: "Unverified",
    color: "var(--color-coin-400)",
    bg: "rgba(255,176,46,0.12)",
    border: "rgba(255,176,46,0.35)",
  },
  pending: {
    label: "Pending Verification",
    color: "var(--color-violet-400)",
    bg: "rgba(139,107,255,0.14)",
    border: "rgba(139,107,255,0.35)",
  },
};

/**
 * Small status pill making the site's own verification stance a visible,
 * scannable design element instead of something only stated in prose.
 */
export default function VerificationBadge({ status }: { status: VerificationStatus }) {
  const c = CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap"
      style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} aria-hidden="true" />
      {c.label}
    </span>
  );
}
