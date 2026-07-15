"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DownloadIcon, ShieldCheckIcon, GamepadIcon, ArrowRightIcon } from "../icons/Icons";

const CHIPS = [
  { icon: ShieldCheckIcon, label: "Independent review" },
  { icon: GamepadIcon, label: "Full games list" },
  { icon: DownloadIcon, label: "Step-by-step install" },
];

const STATS = [
  { value: "55+", label: "Related Apps Tracked" },
  { value: "10", label: "In-Depth Guides" },
  { value: "Weekly", label: "Promo Code Checks" },
  { value: "100%", label: "Independent" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();

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
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex-1 min-w-0"
          >
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-5">
              {CHIPS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-ink-200)]"
                >
                  <Icon size={13} className="text-[var(--color-cyan-400)]" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={item} className="hero-headline font-display font-semibold tracking-tight max-w-3xl">
              Everything about <span className="text-neon">Yono Arcade</span>,
              <br className="sm:hidden" /> in one place.
            </motion.h1>

            {/* Answer-first block — the 40-80 word direct answer AI Overviews / PAA quote */}
            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[var(--color-ink-200)]"
            >
              Yono Arcade is a mobile coin-op games app popular in India, covering slots, rummy, and
              arcade-style titles. AllYonoArcade.com is an independent guide covering how to download
              it, every game inside it, login help, current promo codes, and an honest look at
              whether it's safe to install — checked and updated regularly.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
              <Link
                href="/all-games"
                className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 sm:py-3 text-[14px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
                  color: "#1a0e00",
                }}
              >
                <GamepadIcon size={16} />
                All Games
              </Link>
              <Link
                href="/promo-codes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 sm:py-3 text-[14px] font-semibold text-[#f3f5ff] hover:border-[var(--color-cyan-400)]/60 transition-colors"
              >
                Promo Codes
                <ArrowRightIcon size={15} />
              </Link>
            </motion.div>

            {/* Disclaimer strip — the trust/independence signal belongs in
                the hero itself, not just the footer. */}
            <motion.div
              variants={item}
              className="mt-6 flex max-w-md items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:max-w-none"
            >
              <ShieldCheckIcon size={15} className="mt-0.5 shrink-0 text-[var(--color-cyan-400)]" />
              <p className="text-[11.5px] leading-relaxed text-[var(--color-ink-400)]">
                AllYonoArcade.com is not affiliated with, endorsed by, or an official distributor
                of Yono Arcade. <strong className="text-[var(--color-coin-400)]">18+</strong> · Some
                apps may be restricted in certain states.
              </p>
            </motion.div>
          </motion.div>

          {/* Pre-composited splash screen — the phone mockup and the
              bonus/reward decoration are baked into one image now, so no
              separate floating badge overlays are needed here anymore. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:mx-0 lg:w-[460px] shrink-0"
          >
            {/* Slow ambient bob, separate from the one-shot entrance above —
                keeps the arcade energy going after the page settles. Skipped
                entirely for prefers-reduced-motion. */}
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/yono-arcade-home-screen.webp"
                alt="Yono Arcade app home screen with bonus rewards"
                width={2000}
                height={1920}
                priority
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 440px, 460px"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 border-t border-white/[0.06] pt-8 sm:gap-x-14"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
