import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/sections/Hero";
import KeyTakeaways from "./components/sections/KeyTakeaways";
import ClusterGrid from "./components/sections/ClusterGrid";
import PlatformGrid from "./components/sections/PlatformGrid";
import FAQSection from "./components/sections/FAQSection";
import Reveal from "./components/sections/Reveal";
import { ShieldCheckIcon, ArrowRightIcon } from "./components/icons/Icons";

export const metadata: Metadata = {
  title: "Yono Arcade — Download Guide, All Games & Safety Review",
  description:
    "Independent guide to Yono Arcade: how to download, the full games list, login help, promo codes, and an honest safety review. Not affiliated with the app developer.",
  alternates: { canonical: "https://allyonoarcade.com" },
};

const FAQ_ITEMS = [
  {
    question: "What is Yono Arcade?",
    answer:
      "Yono Arcade is a mobile coin-op games app popular in India, offering slots, rummy, and arcade-style titles. This site is an independent, unofficial guide to the app — we cover installation, features, and safety questions, but we don't operate or represent the app itself.",
  },
  {
    question: "Is Yono Arcade the same as Jaiho Arcade or Arcade 91?",
    answer:
      "No. These are separately named apps that show up in the same searches, which causes confusion. See our Alternatives guide for how to tell them apart before you download anything.",
  },
  {
    question: "Where can I download Yono Arcade?",
    answer:
      "Our Download Guide walks through the installation steps and explains the difference between the main app, the \"Game APK\" build, and third-party \"Pure APK\" mirrors, so you know what you're actually installing.",
  },
  {
    question: "Is Yono Arcade safe to install?",
    answer:
      "That depends on which build you install and from where. Our Safety Review lays out the specific questions worth asking — permissions requested, distribution source, and account/payment handling — rather than giving a blanket yes or no.",
  },
  {
    question: "How often are the promo codes updated?",
    answer:
      "Weekly at minimum. Promo code pages go stale fast, so treat any list — including ours — as time-sensitive and verify inside the app before relying on it.",
  },
];

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AllYonoArcade.com",
  url: "https://allyonoarcade.com",
  description:
    "Independent guide to Yono Arcade: download steps, the full games list, login help, promo codes, and an honest safety review.",
  publisher: {
    "@type": "Organization",
    name: "AllYonoArcade.com",
    url: "https://allyonoarcade.com",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <Hero />
      <KeyTakeaways />
      <ClusterGrid />

      {/* Trust teaser */}
      <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-6 sm:py-10">
        <Reveal className="cabinet cabinet-interactive relative overflow-hidden p-6 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <div className="cabinet-corner tl" />
          <div className="cabinet-corner br" />
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: "rgba(255,63,176,0.08)", color: "var(--color-magenta-400)" }}
          >
            <ShieldCheckIcon size={26} />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-[19px] sm:text-[23px] font-semibold tracking-tight mb-2">
              We don't rubber-stamp "safe."
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-400)] max-w-2xl">
              Coin-op and rummy-style apps come with real questions — permissions, distribution
              source, and account handling. Our safety review walks through what to actually
              check, instead of a one-line verdict.
            </p>
          </div>
          <Link
            href="/is-yono-arcade-safe"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13.5px] font-semibold text-[#f3f5ff] hover:border-[var(--color-cyan-400)]/60 transition-colors w-full sm:w-auto"
          >
            Read the review
            <ArrowRightIcon size={14} />
          </Link>
        </Reveal>
      </section>

      <PlatformGrid />

      <FAQSection items={FAQ_ITEMS} />
    </>
  );
}
