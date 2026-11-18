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

const PUBLISHED = "2026-11-18";
const PATH = "/blog/yono-arcade-ludo";
const IMAGE = "/images/guides/yono-arcade-ludo.webp";
const H1 = "Ludo in Yono Arcade: How It Works, Skill vs Chance, and Legal Status";
const TITLE = "Ludo in Yono Arcade: Skill vs Chance & Legal Status (2026)";
const DESCRIPTION =
  "How Ludo works inside Yono Arcade, why its own games list calls Ludo \"skill and chance\" rather than pure skill, and what the 2025 Act means for real-money Ludo in India.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function LudoPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Ludo in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer={
          'Ludo is one of the 10 games YonoArcade.com names on its own homepage, distributed under the same Real Cash Games / Add Cash / UPI model as every other game in the app. The operator\'s own games table classifies Ludo as "skill and chance" — not pure skill — even though the same website separately frames the app as a "skill-based platform." YonoArcade.com does not publish board size, token count, player format, or dice-roll fairness/RNG information for Ludo. Checked 18 November 2026.'
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 18, 2026 · Operator claims checked 18 November 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Ludo board inside Yono Arcade with dice and tokens" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="What YonoArcade.com confirms about its Ludo game">
        <BulletList
          items={[
            "Ludo is one of the 10 games YonoArcade.com names on its own homepage “Top Games” list.",
            "The operator's own games table describes it as a “Board game; moves set by dice rolls” — a different structure from the player-vs-player card tables like Rummy and Poker, since Ludo's outcome depends partly on the dice roll itself.",
            "That same table classifies Ludo's outcome as “Skill and chance” — not pure skill, the same classification given to Poker.",
            <>
              Yono Arcade is distributed as an APK from YonoArcade.com, operated by Yono Tech Private Limited (package
              com.arcade.games.yo). The site advertises &quot;Real Cash Games&quot; with &quot;Add Cash&quot; deposits
              and withdrawals to bank accounts and UPI, and nothing on the site singles Ludo out as different from
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
          Munda&apos;s dice probabilities, rummy&apos;s full rulebook — Ludo gets a one-line entry. Here&apos;s
          specifically what&apos;s missing.
        </p>
        <BulletList
          items={[
            "Board size or token count — a standard Ludo board uses a cross-shaped track with four tokens per player, but YonoArcade.com never states whether its in-app version matches that or uses a modified layout.",
            "Player format — whether Ludo is played 2-player, 4-player, or against the app itself isn't specified anywhere on the operator's site.",
            "Dice-roll fairness or RNG disclosure — no statement of how dice outcomes are generated or audited, unlike the probability information the operator gives for some of its chance-based card games.",
            "A rules page — no page describing turn order, how tokens move, capturing, or how a round of Ludo ends.",
            "An exact count of Ludo tables or boards, separate from the operator's unitemised “25+ games” claim.",
          ]}
        />
        <p>
          We have not found a rules page, FAQ, or terms section describing Ludo in the detail YonoArcade.com gives
          rummy (see our <Link href="/blog/yono-arcade-rummy-guide">rummy guide</Link>). Treat any board size, token
          count, or RNG claim you see about Yono Arcade Ludo on third-party sites as unverified unless it cites the
          operator directly.
        </p>
      </ContentSection>

      <ContentSection heading="Claim vs. verified reality">
        <ComparisonTable
          headers={["Operator claim", "What we verified", "Checked"]}
          rows={[
            [
              "All games on YonoArcade are skill-based",
              "The operator's own games table classifies Ludo as “Skill and chance” — not pure skill, by its own description",
              "18 Nov 2026",
            ],
            [
              "Ludo is part of “25+ games”",
              "Ludo is named directly on the homepage's 10-game list; the fuller 25+ total is not itemised anywhere we found",
              "18 Nov 2026",
            ],
            [
              "“Real Cash Games” with Add Cash deposits and bank/UPI withdrawals",
              "This is stated site-wide, not confirmed per game; no Ludo-specific terms, board format, or RNG disclosure exists",
              "18 Nov 2026",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Ludo's classification — and why it doesn't change the law">
        <p>
          Yono Arcade&apos;s Ludo is a real-money board game, by the operator&apos;s own description elsewhere on its
          site — Real Cash Games, Add Cash deposits, bank and UPI withdrawals. Since 1 May 2026, the Online
          Gaming Act, 2025 prohibits offering, advertising and processing payments for online money games anywhere in
          India, whether the game is based on skill, chance or both. Ludo&apos;s &quot;skill and chance&quot;
          classification — by the operator&apos;s own table — doesn&apos;t create an exception: the Act
          applies regardless of how a game is classified. It also means YonoArcade.com&apos;s framing of itself as a
          &quot;skill-based platform&quot; is internally inconsistent with its own poker and Ludo entries, both of
          which its own table marks as mixed rather than pure skill — the same inconsistency our{" "}
          <Link href="/blog/yono-arcade-poker">Poker guide</Link> flagged yesterday, and legally irrelevant either
          way. See <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link> for the
          fuller legal picture, and our <Link href="/is-yono-arcade-safe">safety review</Link> for what else the
          operator's own pages say.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Ludo in Yono Arcade is real-money — and prohibited in India since 1 May 2026">
        <p>
          This page is for readers 18 and older doing due diligence — it&apos;s not a how-to-play guide, and
          nothing here is an invitation to deposit money. Online money games are prohibited in India since 1 May
          2026, regardless of whether a game is skill-based, chance-based, or — like Yono Arcade&apos;s own
          Ludo — both. If gaming is affecting your money or mood, call the free Tele-MANAS helpline on{" "}
          <strong>14416</strong>.
        </p>
      </Callout>

      <FAQSection
        heading="Ludo in Yono Arcade questions"
        items={[
          {
            question: "Does Yono Arcade have Ludo?",
            answer:
              "Yes. Ludo is one of the 10 games YonoArcade.com names on its own homepage list, distributed under the same Real Cash Games model as the rest of the app.",
          },
          {
            question: "Is Ludo in Yono Arcade skill or chance?",
            answer:
              "Mixed, by the operator's own classification. YonoArcade.com's games table lists Ludo as \"skill and chance,\" not pure skill — even though the same website also frames the app overall as a \"skill-based platform.\" The two statements don't line up.",
          },
          {
            question: "What Ludo format does Yono Arcade use (2-player, 4-player, board size)?",
            answer:
              "Not stated. YonoArcade.com doesn't publish a rules page naming a player format, board layout, or token count for Ludo. We have not found that information anywhere on the operator's site.",
          },
          {
            question: "Does Yono Arcade disclose dice-roll fairness or RNG for Ludo?",
            answer:
              "No. The site discloses no random-number-generation method, fairness audit, or dice-roll disclosure for Ludo. Treat any RNG or fairness claim you see elsewhere as unverified.",
          },
          {
            question: "Is it legal to play Ludo for money on Yono Arcade in India?",
            answer:
              "No. Since 1 May 2026, the Online Gaming Act, 2025 prohibits online money games nationwide \"irrespective of whether such game is based on skill, chance, or both,\" so Ludo's mixed classification doesn't exempt it.",
          },
        ]}
      />
    </>
  );
}
