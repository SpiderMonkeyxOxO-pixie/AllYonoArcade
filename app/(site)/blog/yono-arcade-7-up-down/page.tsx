import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import Callout from "../../../components/sections/Callout";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ArticleSchema from "../../../components/sections/ArticleSchema";
import { requirePublished } from "../../../lib/schedule";

export const dynamic = "force-dynamic";

const PUBLISHED = "2026-10-04";
const PATH = "/blog/yono-arcade-7-up-down";
const IMAGE = "/images/guides/yono-arcade-7-up-down.webp";
const H1 = "7 Up Down in Yono Arcade: Rules, Odds and \"Winning Tricks\"";
const TITLE = "7 Up Down in Yono Arcade: Rules, Real Odds & \"Winning Tricks\"";
const DESCRIPTION =
  "How 7 Up Down works in Yono Arcade, the real odds of 7 Up, 7 Down and exactly 7, and why \"7 up down winning tricks\" can't beat the dice.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SevenUpDownPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="7 Up Down in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer="7 Up Down is a two-dice game named by YonoArcade.com. You bet on the total being under 7, over 7, or exactly 7. “Down” and “Up” each win 41.7% of the time and “7” wins 16.7%. Payouts are set below the true odds, so no trick can make it profitable over time."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 4, 2026 · Odds calculated from two fair dice
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="7 Up Down dice game table showing 7 Down, 7 and 7 Up" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Rules">
        <p>Two dice are rolled and added together:</p>
        <BulletList
          items={[
            "7 Down: a total of 2 to 6.",
            "7: a total of exactly 7.",
            "7 Up: a total of 8 to 12.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="The real odds">
        <ComparisonTable
          headers={["Bet", "Chance (ways out of 36)", "At the common payout"]}
          rows={[
            ["7 Down", "41.7% (15 of 36)", "2x pays back about 83% of stakes over time"],
            ["7", "16.7% (6 of 36)", "5x pays back about 83% of stakes over time"],
            ["7 Up", "41.7% (15 of 36)", "2x pays back about 83% of stakes over time"],
          ]}
        />
        <p>
          At these common payouts, the game keeps about 17 rupees of every 100 staked over time. Check
          the payout shown in the app, because it may differ.
        </p>
      </ContentSection>

      <ContentSection heading="Why “winning tricks” fail">
        <BulletList
          items={[
            "\"Bet the opposite after 3 Ups\": each roll is independent, so past rolls don't change the next one.",
            "\"Always bet 7 for the big payout\": 7 wins once in 6 rolls, and 5x doesn't cover that.",
            "\"Double after a loss\": a short losing run wipes out many small wins.",
            "Trick videos and APKs: show edited wins or push referral links.",
          ]}
        />
        <p>
          7 Up Down is one of the dice games in the <Link href="/all-games">Yono Arcade games list</Link>.
          It runs inside the main app; there&apos;s no separate APK.
        </p>
      </ContentSection>

      <Callout tone="warning" title="7 Up Down is a game of chance">
        <p>
          Online money games are prohibited in India since 1 May 2026. If gaming is affecting your
          money or mood, call the free Tele-MANAS helpline on <strong>14416</strong>.
        </p>
      </Callout>

      <FAQSection
        heading="7 Up Down questions"
        items={[
          { question: "What is the chance of 7 in 7 Up Down?", answer: "6 in 36, or 16.7%." },
          { question: "Is there a 7 up down winning trick?", answer: "No. Every roll is independent, and the payouts are below the true odds." },
          { question: "Is 7 Up Down a game of skill?", answer: "No. The result depends only on the dice." },
          { question: "Is there a separate 7 Up Down APK?", answer: "In Yono Arcade it's one of the games inside the main app, not a separate download." },
        ]}
      />
    </>
  );
}
