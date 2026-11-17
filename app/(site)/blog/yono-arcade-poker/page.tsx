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

const PUBLISHED = "2026-11-17";
const PATH = "/blog/yono-arcade-poker";
const IMAGE = "/images/guides/yono-arcade-poker.webp";
const H1 = "Poker in Yono Arcade: How It Works, Skill vs Chance, and Legal Status";
const TITLE = "Poker in Yono Arcade: Skill vs Chance & Legal Status (2026)";
const DESCRIPTION =
  "How poker works inside Yono Arcade, why its own games list calls Poker \"skill and chance\" rather than pure skill, and what the 2025 Act means for real-money poker in India.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PokerPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Poker in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer={
          'Poker is one of the 10 games YonoArcade.com names on its own homepage, played as a card game against other real players for real cash. The operator\'s own games table classifies Poker as "skill and chance" — not pure skill — even though the same website separately claims all its games are skill-based. YonoArcade.com does not publish which poker variant, hand rankings, or rake it uses. Checked 28 September 2026.'
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 17, 2026 · Operator claims checked 28 September 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Poker table inside Yono Arcade with cards and chips" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="What YonoArcade.com confirms about its poker game">
        <BulletList
          items={[
            "Poker is one of the 10 games YonoArcade.com names on its own homepage “Top Games” list.",
            "The operator's own games table describes it as a “Card game against other players” — multiplayer, not a bet against the house, the same structure as its rummy tables.",
            "That same table classifies Poker's outcome as “Skill and chance” — not pure skill.",
            <>
              Yono Arcade is distributed as an APK from YonoArcade.com, operated by Yono Tech Private Limited (package
              com.arcade.games.yo). The site advertises &quot;Real Cash Games&quot; with &quot;Add Cash&quot; deposits
              and withdrawals to bank accounts and UPI, and nothing on the site singles poker out as different from
              that real-money model. See our{" "}
              <Link href="/is-yono-arcade-safe">full operator breakdown</Link> for the rest of what YonoArcade.com
              states about itself.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="What the operator doesn't say">
        <p>
          Where other games on this site get detailed treatment — Dragon Tiger&apos;s card odds, Jhandi
          Munda&apos;s dice probabilities, rummy&apos;s full rulebook — poker gets a one-line entry. Here&apos;s
          specifically what&apos;s missing.
        </p>
        <BulletList
          items={[
            "Which poker variant is played — Texas Hold'em, Omaha, a Teen Patti-style format, or something else.",
            "Hand rankings, blind structure, table stakes, or a minimum/maximum buy-in for poker specifically.",
            "Any rake percentage or house take on poker pots.",
            "An exact count of poker tables, separate from the operator's unitemised “25+ games” claim.",
          ]}
        />
        <p>
          We have not found a rules page, FAQ, or terms section describing poker in the detail YonoArcade.com gives
          rummy (see our <Link href="/blog/yono-arcade-rummy-guide">rummy guide</Link>). Treat any variant name, rake
          percentage, or odds figure you see about Yono Arcade poker on third-party sites as unverified unless it
          cites the operator directly.
        </p>
      </ContentSection>

      <ContentSection heading="Claim vs. verified reality">
        <ComparisonTable
          headers={["Operator claim", "What we verified", "Checked"]}
          rows={[
            [
              "All games on YonoArcade are skill-based",
              "The operator's own games table classifies Poker as “Skill and chance” — not pure skill, by its own description",
              "28 Sep 2026",
            ],
            [
              "Poker is part of “25+ games”",
              "Poker is named directly on the homepage's 10-game list; the fuller 25+ total is not itemised anywhere we found",
              "28 Sep 2026",
            ],
            [
              "“Real Cash Games” with Add Cash deposits and bank/UPI withdrawals",
              "This is stated site-wide, not confirmed per game; no poker-specific terms, rake disclosure, or odds page exists",
              "28 Sep 2026",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Poker's classification — and why it doesn't change the law">
        <p>
          Yono Arcade&apos;s poker is a real-money card game, by the operator&apos;s own description elsewhere on its
          site — Real Cash Games, Add Cash deposits, bank and UPI withdrawals. Since 1 May 2026, the Online
          Gaming Act, 2025 prohibits offering, advertising and processing payments for online money games anywhere in
          India, whether the game is based on skill, chance or both. Poker&apos;s &quot;skill and chance&quot;
          classification — by the operator&apos;s own table — doesn&apos;t create an exception: the Act
          applies regardless of how a game is classified. It also means YonoArcade.com&apos;s blanket &quot;all games
          are skill-based&quot; marketing line is both internally inconsistent with its own poker/Ludo entries and
          legally irrelevant either way. See{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link> for the fuller
          legal picture, and our <Link href="/is-yono-arcade-safe">safety review</Link> for what else the operator's
          own pages say.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Poker in Yono Arcade is real-money — and prohibited in India since 1 May 2026">
        <p>
          This page is for readers 18 and older doing due diligence — it&apos;s not a how-to-play guide, and
          nothing here is an invitation to deposit money. Online money games are prohibited in India since 1 May
          2026, regardless of whether a game is skill-based, chance-based, or — like Yono Arcade&apos;s own
          poker — both. If gaming is affecting your money or mood, call the free Tele-MANAS helpline on{" "}
          <strong>14416</strong>.
        </p>
      </Callout>

      <FAQSection
        heading="Poker in Yono Arcade questions"
        items={[
          {
            question: "Does Yono Arcade have poker?",
            answer:
              "Yes. Poker is one of the 10 games YonoArcade.com names on its own homepage list, played as a card game against other players for real cash.",
          },
          {
            question: "Is poker in Yono Arcade skill or chance?",
            answer:
              "Mixed, by the operator's own classification. YonoArcade.com's games table lists Poker as \"skill and chance,\" not pure skill — even though the same website also claims \"all games on YonoArcade are skill-based.\" The two statements contradict each other.",
          },
          {
            question: "What poker variant does Yono Arcade use?",
            answer:
              "Not stated. Unlike its rummy terms, which spell out 13-card and 21-card rules, YonoArcade.com doesn't publish a rules page naming a specific poker variant, hand rankings, or stakes for poker. We have not found that information.",
          },
          {
            question: "Does Yono Arcade publish poker odds or a rake percentage?",
            answer:
              "No. The site discloses no rake, house take, or odds table for poker, unlike the odds it publishes for games such as Dragon Tiger and Roulette. Treat any rake or odds figure you see elsewhere as unverified.",
          },
          {
            question: "Is it legal to play poker for money on Yono Arcade in India?",
            answer:
              "No. Since 1 May 2026, the Online Gaming Act, 2025 prohibits online money games nationwide \"irrespective of whether such game is based on skill, chance, or both,\" so poker's mixed classification doesn't exempt it.",
          },
        ]}
      />
    </>
  );
}
