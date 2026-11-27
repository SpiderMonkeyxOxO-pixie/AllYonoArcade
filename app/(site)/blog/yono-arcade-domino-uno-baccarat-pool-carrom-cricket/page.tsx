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
import { OPERATOR_CHECKED } from "../../../lib/legal";

const TITLE = "Domino, UNO, Baccarat, Pool, Carrom & Fantasy Cricket in Yono Arcade: What's Actually Confirmed";
const META_TITLE = "Yono Arcade's Domino, UNO, Baccarat & More: What's Confirmed";
const DESCRIPTION =
  "YonoArcade.com's About text names Domino, UNO, Baccarat, Pool, Carrom and fantasy cricket — none appear on its own homepage games list. Here's what we checked.";
const SLUG = "yono-arcade-domino-uno-baccarat-pool-carrom-cricket";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-11-27";
const LAST_REVIEWED = "2026-11-27";

const ANSWER =
  `YonoArcade.com's About text names six games — Domino, UNO, Baccarat, Pool, Carrom and fantasy cricket — that don't appear anywhere in the operator's own 10-game "Top Games" homepage list. We checked both pages on ${OPERATOR_CHECKED}. None of the six is itemised, screenshotted, or linked to a rules page anywhere else on the site, so we can't confirm any of them actually exists in the current app build. Treat all six as unconfirmed until the operator documents them directly.`;

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: META_TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  author: { "@type": "Organization", name: "AllYonoArcade.com", url: "https://allyonoarcade.com" },
  publisher: {
    "@type": "Organization",
    name: "AllYonoArcade.com",
    url: "https://allyonoarcade.com",
    logo: { "@type": "ImageObject", url: "https://allyonoarcade.com/logo.png" },
  },
  datePublished: PUBLISHED,
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Domino, UNO, Baccarat, Pool, Carrom & Fantasy Cricket in Yono Arcade",
      item: URL,
    },
  ],
};

export default function YonoArcadeDominoUnoBaccaratPoolCarromCricketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Games" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 27, 2026 &middot; Operator claims checked {OPERATOR_CHECKED}
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-domino-uno-baccarat-pool-carrom-cricket.webp"
        alt="Domino, UNO, Baccarat, Pool, Carrom and fantasy cricket claim check for Yono Arcade"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Where these six names actually appear">
        <p>
          YonoArcade.com&apos;s homepage names ten games under &quot;Top Games&quot;: Rummy, Ludo, Poker, Crash,
          Andar Bahar, Wingo Lottery, 7 Up Down, Dragon &amp; Tiger, Jhandi Munda and Roulette — the same list
          documented in our <Link href="/all-games">all games guide</Link>. Teen Patti, Slots and Aviator are each
          named separately on the same site and each already have a confirmed write-up:{" "}
          <Link href="/blog/yono-arcade-teen-patti">Teen Patti</Link>,{" "}
          <Link href="/blog/yono-arcade-slots-guide">Slots</Link> and{" "}
          <Link href="/blog/yono-arcade-aviator-guide">Aviator</Link>.
        </p>
        <p>
          Domino, UNO and Baccarat appear only in the operator&apos;s About-page text, in the same sentence as Teen
          Patti, Slots and Aviator. Pool, Carrom and fantasy cricket appear in a separate line of that same text.
          Neither group is repeated on the homepage, in the games grid, or in the APK resources we inspected (see our{" "}
          <Link href="/blog/yono-arcade-apk-review">APK review</Link>). That&apos;s the entire extent of where these
          six names show up: one paragraph of marketing copy, checked {OPERATOR_CHECKED}.
        </p>
      </ContentSection>

      <ContentSection heading="What that does and doesn't tell us">
        <p>
          Being named in About-page copy is weaker evidence than appearing on the homepage&apos;s own games table,
          and weaker still than appearing inside the APK itself. It doesn&apos;t tell us whether any of the six
          currently loads as a playable game, was removed in an earlier version, or is boilerplate copied across
          other apps in this network without a check against the current build.
        </p>
        <p>We have not found any of the six in:</p>
        <BulletList
          items={[
            "The homepage's own 10-game table.",
            "Any in-app screenshot the operator has published.",
            <>
              The permission/resource strings reviewed in the{" "}
              <Link href="/blog/yono-arcade-apk-review">APK review</Link>.
            </>,
            "Any rules/odds/terms page specific to one of these six names.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Claim vs. verified reality">
        <ComparisonTable
          headers={["What the About text says", "What we verified", "Checked"]}
          rows={[
            [
              "“Domino, UNO and Baccarat” are part of the app",
              "Named once in About-page copy; absent from the homepage's 10-game table",
              OPERATOR_CHECKED,
            ],
            [
              "“Pool, Carrom” are part of the app",
              "Named once in About-page copy; absent from the homepage's 10-game table",
              OPERATOR_CHECKED,
            ],
            [
              "“fantasy cricket” is part of the app",
              "Named once in About-page copy; absent from the homepage's 10-game table",
              OPERATOR_CHECKED,
            ],
            [
              "Operator separately claims “25+ games” total",
              "Only 10 are itemised anywhere found; the other 15+ are never named",
              OPERATOR_CHECKED,
            ],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Skill, chance, and one name that's legally different from the rest">
        <p>
          Where a game is itemised on the homepage table, YonoArcade.com classifies its skill/chance mix directly —
          the basis for our <Link href="/blog/yono-arcade-ludo">Ludo</Link> and{" "}
          <Link href="/blog/yono-arcade-poker">Poker</Link> write-ups. None of these six gets that treatment, so
          what follows is general public classification, not the operator&apos;s own:
        </p>
        <BulletList
          items={[
            "Domino and Carrom are tile/board games generally treated as skill-weighted in casual play.",
            "UNO mixes card-draw luck with some strategy.",
            "Pool (cue billiards) is skill-dominant in its standard form.",
            <>
              Baccarat is a fixed-rule banking card game with no player decisions after bets are placed — the same
              chance-dominant category as{" "}
              <Link href="/blog/yono-arcade-dragon-tiger">Dragon &amp; Tiger</Link>,{" "}
              <Link href="/blog/yono-arcade-andar-bahar">Andar Bahar</Link> and{" "}
              <Link href="/blog/yono-arcade-jhandi-munda-roulette">Roulette</Link>, already confirmed in the app.
            </>,
            "Fantasy cricket is the one name here that Indian courts have specifically addressed: the Punjab and Haryana High Court (Varun Gumber v. Union of India, 2017) held fantasy-sports contests predominantly skill-based, and the Supreme Court declined to disturb that finding.",
          ]}
        />
        <p>
          That skill finding doesn&apos;t change what happens if a real-money version is offered to Indian users
          through this app. Since 1 May 2026, the Promotion and Regulation of Online Gaming Act, 2025 prohibits
          offering, advertising and processing payments for online money games anywhere in India, whether the game
          is based on skill, chance or both. A skill classification from unrelated litigation doesn&apos;t exempt a
          real-money version of any of these six names if one turns out to exist. See{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Why this matters more than it looks like it does">
        <p>
          Four of six — Domino, UNO, Pool, Carrom — aren&apos;t typically real-money wagering formats anywhere in
          this app category; they&apos;re usually free, casual games. Seeing them in the same sentence as Teen Patti
          and Baccarat, inside an app that advertises &quot;Real Cash Games&quot; and UPI withdrawals, is a mismatch
          worth noting — consistent with boilerplate About-copy never re-checked against the build, the same
          pattern already flagged for the operator&apos;s contradictory &quot;all games are skill-based&quot; claim
          in the <Link href="/blog/yono-arcade-poker">Poker</Link> and{" "}
          <Link href="/blog/yono-arcade-ludo">Ludo</Link> posts.
        </p>
      </ContentSection>

      <ContentSection heading="How to check this yourself">
        <p>
          Open the app after logging in via the <Link href="/login">login guide</Link> and look for any of these
          six names in the games menu directly. If one appears, note its exact name and whether it&apos;s marked
          real-money — stronger evidence than anything verifiable from outside the app.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This page is for readers 18 and older doing due diligence — it&apos;s not confirmation that any of these
          six games exists in the current app, and nothing here is an invitation to deposit money. Online money
          games are prohibited in India since 1 May 2026, regardless of a game&apos;s skill or chance
          classification. If gaming is affecting your money or mood, call the free Tele-MANAS helpline on{" "}
          <strong>14416</strong>.
        </p>
      </Callout>

      <FAQSection
        heading="Domino, UNO, Baccarat, Pool, Carrom & fantasy cricket questions"
        items={[
          {
            question: "Does Yono Arcade have Domino, UNO, Baccarat, Pool, Carrom or fantasy cricket?",
            answer:
              "Unconfirmed. All six are named once in the operator's About-page text but are absent from the homepage's 10-game list, any published screenshot, or the APK resources we inspected.",
          },
          {
            question: "Where did these six names come from?",
            answer: `The operator's own About page on YonoArcade.com, checked ${OPERATOR_CHECKED}.`,
          },
          {
            question: "Is fantasy cricket legal in India?",
            answer:
              "Courts have found fantasy-sports contests predominantly skill-based, but that doesn't exempt a real-money version from the Online Gaming Act, 2025's nationwide prohibition on online money games since 1 May 2026.",
          },
          {
            question: "Is Baccarat the same kind of game as Dragon & Tiger or Roulette?",
            answer:
              "Yes. Baccarat is a fixed-rule banking card game with no player decisions after bets are placed — the same chance-dominant category as Dragon & Tiger, Andar Bahar and Roulette, all of which are confirmed in the app.",
          },
          {
            question: "Why doesn't AllYonoArcade just say whether these six games exist?",
            answer:
              "Because it hasn't been independently verified. Stating a guess as fact is the overreach this site avoids elsewhere.",
          },
        ]}
      />
    </>
  );
}
