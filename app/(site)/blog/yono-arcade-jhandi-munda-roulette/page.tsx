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

const PUBLISHED = "2026-10-08";
const PATH = "/blog/yono-arcade-jhandi-munda-roulette";
const IMAGE = "/images/guides/yono-arcade-jhandi-munda-roulette.webp";
const H1 = "Jhandi Munda and Roulette in Yono Arcade: Rules and Odds";
const TITLE = "Jhandi Munda & Roulette in Yono Arcade: Rules and Real Odds";
const DESCRIPTION =
  "How Jhandi Munda (6 dice, 6 symbols) and Roulette work in Yono Arcade, the real odds of each bet, and why both are games of chance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function JhandiMundaRoulettePage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Jhandi Munda & Roulette in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer="Both are named by YonoArcade.com, and both are pure chance. In Jhandi Munda, six dice with six symbols are rolled and you win if your symbol appears; it appears at least once 66.5% of the time, but payouts are set so the game wins overall. In Roulette you bet on where a ball lands; a single number wins 1 time in 37 on a single-zero wheel."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 8, 2026 · Odds calculated for fair dice and a fair wheel
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Jhandi Munda symbol dice and a roulette wheel" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Jhandi Munda">
        <p>
          A traditional Indian and Nepali dice game, also called Langur Burja. It uses six dice, each
          with six symbols: heart, spade, diamond, club, flag (jhandi) and crown (munda).
        </p>
        <BulletList
          items={[
            "Pick a symbol and place a bet.",
            "All six dice are rolled.",
            "The more dice showing your symbol, the higher the payout.",
          ]}
        />
        <ComparisonTable
          headers={["Your symbol shows on", "Chance", "What it means"]}
          rows={[
            ["0 dice", "33.5%", "You lose the bet"],
            ["Exactly 1 die", "40.2%", "The most common win, usually the smallest payout"],
            ["2 or more dice", "26.3%", "Bigger payouts, less often"],
          ]}
        />
        <p>
          &quot;Two out of three rolls win&quot; sounds good, but the most common win is a single die,
          which usually pays the least.
        </p>
      </ContentSection>

      <ContentSection heading="Roulette">
        <ComparisonTable
          headers={["Bet", "Chance (single-zero wheel)", "Usual payout"]}
          rows={[
            ["Single number", "1 in 37 (2.7%)", "36x"],
            ["Red / Black", "18 in 37 (48.6%)", "2x"],
            ["Odd / Even", "18 in 37 (48.6%)", "2x"],
          ]}
        />
        <p>
          The green zero is where the edge comes from: on a single-zero wheel the house keeps about
          2.7% of every bet over time, and on a double-zero wheel about 5.3%. Yono Arcade doesn&apos;t
          say which it uses.
        </p>
      </ContentSection>

      <ContentSection heading="Systems that don't work">
        <p>
          Martingale (doubling after a loss), &quot;hot numbers&quot; and &quot;a symbol due to
          appear&quot; all assume past results affect the next one. They don&apos;t. See the other games
          in our <Link href="/all-games">Yono Arcade games list</Link>.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Both are games of chance">
        <p>
          Online money games are prohibited in India since 1 May 2026. If gaming is affecting your
          money or mood, call the free Tele-MANAS helpline on <strong>14416</strong>.
        </p>
      </Callout>

      <FAQSection
        heading="Jhandi Munda and Roulette questions"
        items={[
          { question: "What is Jhandi Munda?", answer: "A six-dice game with heart, spade, diamond, club, flag and crown symbols. You win if your chosen symbol appears." },
          { question: "What are the odds in Jhandi Munda?", answer: "Your symbol appears at least once 66.5% of the time, but on exactly one die (usually the lowest payout) 40.2% of the time." },
          { question: "What is the house edge in roulette?", answer: "About 2.7% on a single-zero wheel and about 5.3% on a double-zero wheel." },
          { question: "Are Jhandi Munda and Roulette skill games?", answer: "No. Both are games of chance." },
        ]}
      />
    </>
  );
}
