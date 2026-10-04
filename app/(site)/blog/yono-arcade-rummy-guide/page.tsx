import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ArticleSchema from "../../../components/sections/ArticleSchema";
import ScheduledLink from "../../../components/sections/ScheduledLink";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const PATH = "/blog/yono-arcade-rummy-guide";
const IMAGE = "/images/guides/rummy-guide-featured.webp";
const H1 = "Yono Arcade Rummy: Rules, Variants and the \"Yono Rummy\" Apps";
const TITLE = "Yono Arcade Rummy: Rules, Variants & Yono Rummy App Confusion";
const DESCRIPTION =
  "How rummy works in Yono Arcade (13-card and 21-card), how it differs from the separate Yono Rummy apps on Android, and what the 2025 law means for money rummy.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function RummyGuidePage() {
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published="2026-07-15" modified="2026-09-28" crumb="Yono Arcade Rummy" />

      <PageHeader
        eyebrow="Blog"
        title={H1}
        answer="Rummy is one of the 10 games YonoArcade.com names, and its terms describe 13-card and 21-card rummy. It's a game inside Yono Arcade, not a separate app. “Yono Rummy” on Android is a different set of apps from other developers."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Updated: September 28, 2026 · Sources: YonoArcade.com and Google Play, checked September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Yono Arcade rummy rules and variants guide" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Rummy in Yono Arcade vs “Yono Rummy” apps">
        <ComparisonTable
          headers={["Name", "What it is", "Source"]}
          rows={[
            ["Rummy in Yono Arcade", "A game inside the Yono Arcade app", "YonoArcade.com APK (com.arcade.games.yo)"],
            ["\"Yono Rummy\" on Google Play", "Separate apps from other developers, e.g. DAYALA TECH ENTERPRISES; one listing describes a 3-card table game", "Google Play, checked 28 Sep 2026"],
            ["Yono Rummy APK sites", "Another Yono-network app with its own download site", "Separate operator"],
          ]}
        />
        <p>
          If you searched &quot;yono rummy games for android&quot;, check which one you mean:
          installing a Play Store &quot;Yono Rummy&quot; doesn&apos;t give you Yono Arcade. See{" "}
          <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link> for how to check
          an app&apos;s identity.
        </p>
      </ContentSection>

      <ContentSection heading="How 13-card rummy works">
        <BulletList
          items={[
            "Each player gets 13 cards and draws and discards one card per turn.",
            "Goal: arrange all cards into valid groups and declare.",
            "Sequence: 3 or more consecutive cards of the same suit (5♥ 6♥ 7♥).",
            "Pure sequence: a sequence with no joker. At least one is required to declare.",
            "Set: 3 or 4 cards of the same rank in different suits (8♠ 8♦ 8♣).",
            "Valid declaration: at least two sequences, one of them pure; the rest in sequences or sets.",
            "Points: unmatched cards count against you (face cards and aces usually 10 points).",
          ]}
        />
      </ContentSection>

      <ContentSection heading="21-card rummy">
        <p>
          Yono Arcade&apos;s terms also mention 21-card rummy: more cards, usually three decks,
          typically three pure sequences needed and extra-value jokers. Exact rules vary by table, so
          read the in-app rules screen, which the operator says is available as text and video.
        </p>
      </ContentSection>

      <ContentSection heading="Common rummy terms">
        <ComparisonTable
          headers={["Term", "Meaning", "Tip"]}
          rows={[
            ["Wild joker", "A random card chosen each game that acts as a joker", "Can't be used in a pure sequence"],
            ["Printed joker", "The joker card in the deck", "Same rule as the wild joker"],
            ["Drop", "Leaving a hand early for a fixed point penalty", "Cheaper early than late"],
            ["Declare", "Showing your completed hand to end the round", "A wrong declaration is penalised"],
            ["Deadwood", "Unmatched cards left in your hand", "These are your points against"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Skill, chance and the law">
        <p>
          Indian courts have long treated rummy as a game of skill. That no longer matters for money
          play: since 1 May 2026, the Online Gaming Act, 2025 prohibits online money games
          &quot;irrespective of whether such game is based on skill, chance, or both&quot;. Yono
          Arcade&apos;s rummy is played for real cash, per its own website. See{" "}
          <ScheduledLink href="/blog/is-yono-arcade-banned-in-india" date="2026-09-29">Is Yono Arcade banned in India?</ScheduledLink>
        </p>
      </ContentSection>

      <FAQSection
        heading="Rummy questions"
        items={[
          {
            question: "Does Yono Arcade have rummy?",
            answer:
              "Yes. Rummy is one of the 10 games YonoArcade.com names, and its terms describe 13-card and 21-card rummy.",
          },
          {
            question: "Is Yono Arcade the same as Yono Rummy?",
            answer:
              "No. Yono Rummy apps on Google Play come from other developers; Yono Arcade's rummy is inside the Yono Arcade APK.",
          },
          {
            question: "What is a pure sequence?",
            answer:
              "Three or more consecutive cards of the same suit with no joker. You need at least one to declare.",
          },
          {
            question: "Is online rummy for money legal in India?",
            answer:
              "No. Since 1 May 2026 online money games are prohibited, whether they're skill-based or not.",
          },
        ]}
      />
    </>
  );
}
