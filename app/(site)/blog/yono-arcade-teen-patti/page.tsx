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

const PUBLISHED = "2026-11-19";
const PATH = "/blog/yono-arcade-teen-patti";
const IMAGE = "/images/guides/yono-arcade-teen-patti.webp";
const H1 = "Does Yono Arcade Include Teen Patti?";
const TITLE = "Does Yono Arcade Have Teen Patti? Fact-Checked (2026)";
const DESCRIPTION =
  'Does Yono Arcade have Teen Patti? YonoArcade.com\'s own 10-game "Top Games" list doesn\'t include it — see what\'s actually there, why the confusion happens, and how to check before you download.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function TeenPattiPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Does Yono Arcade Include Teen Patti?" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer={
          'Not confirmed as a playable game. YonoArcade.com names ten games under its own "Top Games" list — Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda and Roulette — and Teen Patti isn\'t one of them. The same site mentions "Teen Patti" elsewhere in passing text, but we haven\'t found it listed as a playable table, and we haven\'t confirmed it\'s in the current app build. The closest confirmed games are Rummy and Poker, both real-money card games against other players. Checked 28 September 2026.'
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 19, 2026 · Operator claims checked 28 September 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Teen Patti cards next to the Yono Arcade app, asking whether the game is actually included" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="What's actually in Yono Arcade's “Top Games” list">
        <p>
          YonoArcade.com names ten games directly on its own homepage. Here&apos;s how each one works and whether
          the operator classifies it as skill, chance, or both.
        </p>
        <ComparisonTable
          headers={["Game", "How it works", "Skill or chance"]}
          rows={[
            ["Rummy", "13-card rummy against other players", "Mostly skill"],
            ["Ludo", "Board game; moves set by dice rolls", "Skill and chance"],
            ["Poker", "Card game against other players", "Skill and chance"],
            ["Crash", "Bet on a rising multiplier and cash out before it crashes (Aviator-style)", "Chance"],
            ["Andar Bahar", "Bet on which side a matching card lands", "Chance"],
            ["Wingo Lottery", "Bet on a drawn colour or number", "Chance"],
            ["7 Up Down", "Bet on the total of two dice", "Chance"],
            ["Dragon & Tiger", "Bet on which of two cards is higher", "Chance"],
            ["Jhandi Munda", "Bet on dice symbols", "Chance"],
            ["Roulette", "Bet on where a wheel stops", "Chance"],
          ]}
        />
        <p>
          Teen Patti isn&apos;t on this list. YonoArcade.com does mention &quot;Teen Patti&quot; elsewhere on its
          site in passing text, alongside Slots, Aviator, Domino, UNO and Baccarat — but none of those appear as a
          named, playable table the way the ten games above do, and we haven&apos;t confirmed any of them are in the
          current app build. See the full <Link href="/all-games">Yono Arcade games list</Link> for the complete
          breakdown.
        </p>
      </ContentSection>

      <ContentSection heading="Why the Teen Patti confusion happens">
        <p>
          Teen Patti is India&apos;s best-known real-money card game, so it&apos;s a reasonable first guess for any
          rummy-adjacent app — most visitors searching &quot;Yono Arcade Teen Patti&quot; are assuming it&apos;s
          there before checking. Two things make that assumption stick:
        </p>
        <BulletList
          items={[
            <>
              Sibling-network branding: <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade</Link> —
              confirmed to share Yono Arcade&apos;s APK signing certificate and hosting — and{" "}
              <Link href="/blog/is-jaiho-play-a-yono-game">Jaiho Play</Link>, which launched with rummy and Teen
              Patti, both sit in the same visual family. Someone who&apos;s used one expects the lobby icons to
              carry over to the other.
            </>,
            "Teen Patti and rummy use the same cards and a similar table layout, so a rummy lobby can look, at a glance, like it could include Teen Patti even when it doesn't.",
            'The operator\'s own site drops the words "Teen Patti" into unrelated text elsewhere on YonoArcade.com, which is enough for a skim-read or a search snippet to imply it\'s a listed game.',
          ]}
        />
        <p>
          See our <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade vs Yono Arcade</Link> write-up for what
          we verified about the shared certificate and host, and{" "}
          <Link href="/blog/is-jaiho-play-a-yono-game">Is Jaiho Play a Yono game?</Link> for the Teen Patti detail on
          that sibling app specifically.
        </p>
      </ContentSection>

      <ContentSection heading="How to verify what's really in an app before downloading">
        <p>
          The same pattern that creates Teen Patti confusion here shows up across every app in this network — a
          page title, a search snippet, or a lookalike APK listing implies a game that isn&apos;t actually on the
          operator&apos;s own list. A quick check before downloading anything:
        </p>
        <BulletList
          items={[
            "Go to the operator's own homepage or games page directly and read its named list — not a search result, app-store description, or third-party “X APK download” page quoting it secondhand.",
            <>
              Treat a page title or meta description as marketing, not an ingredients list — our{" "}
              <Link href="/blog/yono-arcade-slots-guide">Slots guide</Link> found the same gap: &quot;Slots&quot;
              appears in YonoArcade.com&apos;s page title, but no slot game is named on its homepage.
            </>,
            "Check the package name matches what the operator states (Yono Arcade is com.arcade.games.yo) before installing anything — a mismatched package is the clearest sign of a repackaged or lookalike file.",
            'Be skeptical of any APK advertised by a game name the operator itself doesn\'t list — that\'s exactly the "Yono Arcade Teen Patti APK" pattern below.',
          ]}
        />
        <p>
          For the safety questions people ask before installing at all, see our{" "}
          <Link href="/is-yono-arcade-safe">Yono Arcade safety review</Link>.
        </p>
      </ContentSection>

      <Callout tone="warning" title='"Yono Arcade Teen Patti APK" is a lookalike-bait search pattern'>
        <p>
          Searches like &quot;Yono Arcade Teen Patti APK&quot; or &quot;Yono Arcade Teen Patti download&quot;
          target a game the operator&apos;s own site doesn&apos;t list under Yono Arcade. Files advertised under
          that exact name are worth treating with the same skepticism as &quot;slot hack&quot; or
          &quot;predictor&quot; APKs — they&apos;re often unrelated apps, repackaged files, or a different operator
          entirely, using a name people are already searching for. Verify the package name and the operator&apos;s
          own games list before installing anything that claims to add Teen Patti to Yono Arcade specifically.
        </p>
      </Callout>

      <FAQSection
        heading="Yono Arcade Teen Patti questions"
        items={[
          {
            question: "Does Yono Arcade have Teen Patti?",
            answer:
              'Not on the operator\'s own list. YonoArcade.com names ten games under "Top Games" — Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda and Roulette — and Teen Patti isn\'t one of them. The site mentions "Teen Patti" elsewhere in passing, but it isn\'t listed as a playable table and we haven\'t confirmed it\'s in the current app build.',
          },
          {
            question: "What games are actually in Yono Arcade?",
            answer:
              "Ten confirmed games: Rummy and Poker (card games against other players), Ludo (dice-based board game), and seven games of chance — Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda and Roulette. See the full games list for how each one works.",
          },
          {
            question: "Why do people think Yono Arcade has Teen Patti?",
            answer:
              "Mainly sibling-app branding. Jaiho Arcade shares Yono Arcade's APK signing certificate and hosting, and Jaiho Play — another app in the same family — launched with rummy and Teen Patti. Visitors who've used one of those apps reasonably expect the same lobby in Yono Arcade.",
          },
          {
            question: 'Is "Yono Arcade Teen Patti APK" a real download?',
            answer:
              "Treat it as unverified. The operator's own site doesn't list Teen Patti as a Yono Arcade game, so any APK advertised specifically under that name should be checked against the real package name (com.arcade.games.yo) before installing — the same way we'd treat a \"slot hack\" or \"predictor\" app.",
          },
          {
            question: "Which Yono Arcade game is closest to Teen Patti?",
            answer:
              'Rummy and Poker. Both are real-money card games played against other real players rather than the house, the same basic structure as Teen Patti elsewhere. YonoArcade.com classifies Rummy as "mostly skill" and Poker as "skill and chance."',
          },
        ]}
      />
    </>
  );
}
