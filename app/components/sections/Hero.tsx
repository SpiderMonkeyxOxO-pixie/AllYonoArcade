import Link from "next/link";
import Image from "next/image";
import { DownloadIcon, ShieldCheckIcon, GamepadIcon, ArrowRightIcon } from "../icons/Icons";
import { REFERRAL_REL, YONO_ARCADE_REFERRAL_URL } from "../../lib/platforms";

const CHIPS = [
  { icon: ShieldCheckIcon, label: "Independent review" },
  { icon: GamepadIcon, label: "Full games list" },
  { icon: DownloadIcon, label: "Step-by-step install" },
];

const STATS = [
  { value: "3", label: "APK Variants Explained" },
  { value: "10", label: "In-Depth Guides" },
  { value: "Weekly", label: "Promo Code Checks" },
  { value: "100%", label: "Independent" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20">
      {/* Ambient glow + grid — signature arcade-marquee background, not a stock gradient */}
      <div className="pointer-events-none absolute inset-0 arcade-grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] sm:w-[620px] sm:h-[620px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-cyan), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-0 h-[280px] w-[280px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-magenta), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          <div className="flex-1 min-w-0">
            <div className="hero-rise hero-rise-1 flex flex-wrap items-center gap-2 mb-5">
              {CHIPS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-ink-200)]"
                >
                  <Icon size={13} className="text-[var(--color-cyan-400)]" />
                  {label}
                </span>
              ))}
            </div>

            <h1 className="hero-rise hero-rise-2 hero-headline font-display font-semibold tracking-tight max-w-3xl">
              Everything about <span className="text-neon">Yono Arcade</span>,
              <br className="sm:hidden" /> in one place.
            </h1>

            {/* Answer-first block — the 40-80 word direct answer AI Overviews / PAA quote */}
            <p className="hero-rise hero-rise-2 mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[var(--color-ink-200)]">
              Yono Arcade is a mobile coin-op games app popular in India, covering slots, rummy, and
              arcade-style titles. AllYonoArcade.com is an independent guide covering how to download
              it, every game inside it, login help, current promo codes, and an honest look at
              whether it's safe to install — checked and updated regularly.
            </p>

            <div className="hero-rise hero-rise-3 mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 max-w-md sm:max-w-none">
              <a
                href={YONO_ARCADE_REFERRAL_URL}
                target="_blank"
                rel={REFERRAL_REL}
                className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 sm:py-3 text-[14px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
                  color: "#1a0e00",
                }}
              >
                <DownloadIcon size={16} />
                Download Yono Arcade
              </a>
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 sm:py-3 text-[14px] font-semibold text-[#f3f5ff] hover:border-[var(--color-cyan-400)]/60 transition-colors"
              >
                Download Guide
                <ArrowRightIcon size={15} />
              </Link>
              <Link
                href="/promo-codes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 sm:py-3 text-[14px] font-semibold text-[#f3f5ff] hover:border-[var(--color-cyan-400)]/60 transition-colors"
              >
                Promo Codes
                <ArrowRightIcon size={15} />
              </Link>
            </div>
            <p className="hero-rise hero-rise-4 mt-3 max-w-md text-[11px] leading-relaxed text-[var(--color-ink-400)] sm:max-w-none">
              &ldquo;Download Yono Arcade&rdquo; is a referral link — it opens an external site, and we may earn a
              commission. See our <Link href="/disclaimer" className="underline">affiliate disclosure</Link>.
            </p>

            {/* Disclaimer strip — the trust/independence signal belongs in
                the hero itself, not just the footer. */}
            <div className="hero-rise hero-rise-5 mt-6 flex max-w-md items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:max-w-none">
              <ShieldCheckIcon size={15} className="mt-0.5 shrink-0 text-[var(--color-cyan-400)]" />
              <p className="text-[11.5px] leading-relaxed text-[var(--color-ink-400)]">
                AllYonoArcade.com is not affiliated with, endorsed by, or an official distributor
                of Yono Arcade. <strong className="text-[var(--color-coin-400)]">18+</strong> · Some
                apps may be restricted in certain states.
              </p>
            </div>
          </div>

          {/* Pre-composited splash screen — the phone mockup and the
              bonus/reward decoration are baked into one image now, so no
              separate floating badge overlays are needed here anymore.
              Rendered at full opacity immediately (this is the LCP
              element): only a transform-only ambient bob loops on top,
              which never hides it while it animates. */}
          <div className="mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:mx-0 lg:w-[460px] shrink-0">
            <div className="hero-phone-bob">
              <Image
                src="/images/yono-arcade-home-screen.webp"
                alt="Yono Arcade app home screen with bonus rewards"
                width={2000}
                height={1920}
                priority
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 440px, 460px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="hero-rise hero-rise-5 mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 border-t border-white/[0.06] pt-8 sm:gap-x-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-neon font-display text-[22px] sm:text-[28px] font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] text-[var(--color-ink-400)] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
