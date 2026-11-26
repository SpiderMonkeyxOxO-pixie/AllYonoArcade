import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Diwa Apps List: All 17 Names Compared (2026)";
const DESCRIPTION =
  "Diwa777, DiwaAce, DiwaRummy, Goodslots and 13 more — the full list of Diwa-branded apps we track, each one's Android package name, visual differences, and download link in one place.";
const URL = "https://allyonoarcade.com/blog/diwa-apps-list-which-is-which";
const IMAGE = "https://allyonoarcade.com/images/guides/diwa-apps-list-which-is-which.webp";
const PUBLISHED = "2026-11-26";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diwa Apps: The Full List of All 17 and How to Tell Them Apart",
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
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Diwa Apps List: All 17 Names Compared", item: URL },
  ],
};

export default function DiwaAppsListPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Guide"
        title="Diwa Apps: The Full List of All 17 and How to Tell Them Apart"
        answer={
          'There are 17 separately-branded apps in the Diwa family we track: Diwa777, DiwaAce, DiwaBonus, DiwaFun, DiwaGame, DiwaKing, DiwaLucky, DiwaPlay, DiwaRummy, DiwaSlot, DiwaSpin, DiwaTop, DiwaVIP, DiwaWin, DiwaWow, DiwaX and Goodslots. Ten share the exact same gold wordmark and Indian tricolor swoosh. Five add a slot-reel icon. One — Goodslots — looks nothing like the rest, though its package name ties it to the same family.'
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 26, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/diwa-apps-list-which-is-which.webp"
        alt="Grid comparison of all 17 Diwa-branded app icons showing the shared gold wordmark pattern and the one visual outlier, Goodslots"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="17 names, one family">
        <p>
          Seventeen apps went live on this site&apos;s listings in one batch, each with its own
          page, its own download link, and its own Android package name. None of their pages
          cross-link to the others, so if you&apos;ve only seen one — or you&apos;re trying to
          work out whether two names you&apos;ve seen are the same app — there&apos;s been no
          single place to check. This page is that place.
        </p>
      </ContentSection>

      <ContentSection heading="The full list">
        <ComparisonTable
          headers={["App", "Android package name", "What's different about it"]}
          rows={[
            [
              "Diwa777",
              "com.diwa777diwa001.app",
              'Plain gold wordmark, tricolor swoosh; "777" is just a number here, not a shared jackpot system with any other "777" app.',
            ],
            [
              "DiwaAce",
              "com.diwaace003.app",
              "Ornate gold crown icon with a queen-ace-king card reel.",
            ],
            [
              "DiwaBonus",
              "com.diwabonus003.com",
              "Plain wordmark; names the incentive directly instead of a game type.",
            ],
            [
              "DiwaFun",
              "com.diwafundiwa001.app",
              "Plain wordmark; no game-type word in the name.",
            ],
            [
              "DiwaGame",
              "com.diwagamediwa001.app",
              "Plain wordmark; the most generic name in the family.",
            ],
            [
              "DiwaKing",
              "com.diwaking0003.com",
              "Plain wordmark; royalty-themed name only.",
            ],
            [
              "DiwaLucky",
              "com.diwalucky2.app",
              "Ornate gold icon with a cherry-bell-cherry slot reel.",
            ],
            [
              "DiwaPlay",
              "com.diwaplay.app",
              "Plain wordmark; the plainest name in the family, no game-type word.",
            ],
            [
              "DiwaRummy",
              "com.diwarummytg.app",
              "Plain wordmark; names the rummy format directly.",
            ],
            [
              "DiwaSlot",
              "com.diwaslotdiwa001.app",
              "Plain wordmark; names the slot format directly.",
            ],
            [
              "DiwaSpin",
              "com.diwaspin0004.com",
              "Same wordmark style, but with a starburst flare and a heavier bevel.",
            ],
            [
              "DiwaTop",
              "com.diwatop.app",
              "Plain wordmark; no game-type word.",
            ],
            [
              "DiwaVIP",
              "com.diwavipdiwa001.app",
              "Plain wordmark; exclusivity-themed name only.",
            ],
            [
              "DiwaWin",
              "com.diwawin007.app",
              "Two-tone gold-and-silver wordmark with a 777 slot reel and a star accent.",
            ],
            [
              "DiwaWow",
              "com.diwawow.app",
              'Two-tone wordmark — gold "Diwa," red gem-textured "Wow" — with a cherry-bell-seven reel.',
            ],
            [
              "DiwaX",
              "com.diwax003.app",
              "Gold \"Diwa\" plus a large red X, with a cherry-bell-seven reel.",
            ],
            [
              "Goodslots",
              "com.goodslotsdiwa001.app",
              'Blue background, gold thumbs-up icon, tile-style "SLOTS" lettering — visually unlike the other sixteen, but its package name ties it to the same family.',
            ],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Two visual styles, one outlier">
        <p>
          Ten of the seventeen use the exact same template: a plain gold wordmark over an Indian
          tricolor swoosh, nothing else. Five more add a slot-reel icon next to a gold crown or a
          two-tone wordmark. DiwaSpin keeps the plain wordmark but adds a starburst flare and a
          heavier bevel. Goodslots is the one that breaks the pattern entirely — a blue background
          and a thumbs-up icon share no visual DNA with the other sixteen, and the only thing
          connecting it to them is the package name.
        </p>
      </ContentSection>

      <ContentSection heading="Why so many near-identical apps exist">
        <p>
          This isn&apos;t unique to Diwa. Our{" "}
          <Link href="/blog/money-rummy-and-yono-network-lookalikes">Money Rummy write-up</Link>{" "}
          covers the same pattern for a different app family, and the six-point identity checklist
          in our <Link href="/blog/yono-arcade-apps">Yono Arcade Apps guide</Link> — developer
          name, package ID, installation source, permissions — applies here too. Shared branding
          or a shared name root doesn&apos;t establish shared ownership.
        </p>
      </ContentSection>

      <ContentSection heading="How to tell them apart before you install">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Match the icon style to the row in the table above, not just the name — two reel-icon
            apps can look alike at a glance.
          </li>
          <li>
            Check the Android package name after installing; every one listed here is different,
            even where the branding looks close.
          </li>
          <li>
            Don&apos;t assume a promo code confirmed for one Diwa app works on another; see
            today&apos;s <Link href="/promo-codes">promo code status</Link> across the apps we
            track.
          </li>
          <li>
            Use the download link on that specific app&apos;s own page below, not a generic
            &quot;Diwa&quot; search result.
          </li>
        </ul>
      </ContentSection>

      <ContentSection heading="Each app's own page">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/blog/diwa777-apk-download">Diwa777</Link>
          </li>
          <li>
            <Link href="/blog/diwaace-apk-download">DiwaAce</Link>
          </li>
          <li>
            <Link href="/blog/diwabonus-apk-download">DiwaBonus</Link>
          </li>
          <li>
            <Link href="/blog/diwafun-apk-download">DiwaFun</Link>
          </li>
          <li>
            <Link href="/blog/diwagame-apk-download">DiwaGame</Link>
          </li>
          <li>
            <Link href="/blog/diwaking-apk-download">DiwaKing</Link>
          </li>
          <li>
            <Link href="/blog/diwalucky-apk-download">DiwaLucky</Link>
          </li>
          <li>
            <Link href="/blog/diwaplay-apk-download">DiwaPlay</Link>
          </li>
          <li>
            <Link href="/blog/diwarummy-apk-download">DiwaRummy</Link>
          </li>
          <li>
            <Link href="/blog/diwaslot-apk-download">DiwaSlot</Link>
          </li>
          <li>
            <Link href="/blog/diwaspin-apk-download">DiwaSpin</Link>
          </li>
          <li>
            <Link href="/blog/diwatop-apk-download">DiwaTop</Link>
          </li>
          <li>
            <Link href="/blog/diwavip-apk-download">DiwaVIP</Link>
          </li>
          <li>
            <Link href="/blog/diwawin-apk-download">DiwaWin</Link>
          </li>
          <li>
            <Link href="/blog/diwawow-apk-download">DiwaWow</Link>
          </li>
          <li>
            <Link href="/blog/diwax-apk-download">DiwaX</Link>
          </li>
          <li>
            <Link href="/blog/goodslots-apk-download">Goodslots</Link>
          </li>
        </ul>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial listing">
        <p>
          This is 18+ real-money gaming content. AllYonoArcade.com does not operate any app named
          on this page and has no confirmed ownership link between them. Set a spending limit
          before you play anything, whatever the name. Read our{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Diwa apps questions"
        items={[
          {
            question: "How many Diwa-branded apps does AllYonoArcade track?",
            answer:
              "17 — Diwa777, DiwaAce, DiwaBonus, DiwaFun, DiwaGame, DiwaKing, DiwaLucky, DiwaPlay, DiwaRummy, DiwaSlot, DiwaSpin, DiwaTop, DiwaVIP, DiwaWin, DiwaWow, DiwaX, and Goodslots.",
          },
          {
            question: "Are all 17 Diwa apps made by the same developer?",
            answer:
              "Not confirmed. Package names differ app by app, and a shared name or shared branding style is a marketing choice, not proof of common ownership.",
          },
          {
            question: "Which Diwa app is the official one?",
            answer:
              'None is confirmed as an "official" or flagship app in this family. Each has its own listing, download link, and package name.',
          },
          {
            question: "Does a promo code for one Diwa app work on another?",
            answer:
              "No bonus or promo code has been confirmed as shared between any two apps in this list. Check the promo codes page for current status.",
          },
          {
            question: "Why does Goodslots look different from the other Diwa apps?",
            answer:
              "Its visual branding breaks from the rest of the family — a blue background and a thumbs-up icon instead of the usual gold wordmark — but its Android package name, com.goodslotsdiwa001.app, ties it to the same developer network as the other sixteen.",
          },
        ]}
      />
    </>
  );
}
