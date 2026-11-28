import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Complete List of All Yono-Network Apps (2026), Newest First";
const DESCRIPTION =
  "All 33 Yono-network apps we track, in one list — category, launch date and current status for each, newest arrivals first. Independent, unofficial.";
const URL = "https://allyonoarcade.com/blog/complete-list-of-all-yono-apps";
const IMAGE = "https://allyonoarcade.com/images/guides/complete-list-of-all-yono-apps.webp";
const PUBLISHED = "2026-11-28";

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
  headline: "Every Yono-Network App We Track: The Complete List, Newest First",
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
    { "@type": "ListItem", position: 3, name: "Every Yono-Network App We Track: The Complete List", item: URL },
  ],
};

const DIWA_URL = "https://allyonoarcade.com/blog/diwa-apps-list-which-is-which";

const APP_ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Every Yono-Network App We Track, Newest First",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: 33,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "Spin Dost", url: "https://allyonoarcade.com/blog/spin-dost-apk-download" } },
    { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Rush Gala", url: "https://allyonoarcade.com/blog/rush-gala-apk-download" } },
    { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "123 Rummy", url: "https://allyonoarcade.com/blog/123-rummy-apk-download" } },
    { "@type": "ListItem", position: 4, item: { "@type": "Thing", name: "Cash Rummy", url: "https://allyonoarcade.com/blog/cash-rummy-apk-download" } },
    { "@type": "ListItem", position: 5, item: { "@type": "Thing", name: "Spin Rummy", url: "https://allyonoarcade.com/blog/spin-rummy-apk-download" } },
    { "@type": "ListItem", position: 6, item: { "@type": "Thing", name: "VIP Rummy", url: "https://allyonoarcade.com/blog/vip-rummy-apk-download" } },
    { "@type": "ListItem", position: 7, item: { "@type": "Thing", name: "Jaiho Play", url: "https://allyonoarcade.com/blog/jaiho-play-apk-download" } },
    { "@type": "ListItem", position: 8, item: { "@type": "Thing", name: "Jeet Spin", url: "https://allyonoarcade.com/blog/jeet-spin-apk-download" } },
    { "@type": "ListItem", position: 9, item: { "@type": "Thing", name: "Money Rummy", url: "https://allyonoarcade.com/blog/money-rummy-apk-download" } },
    { "@type": "ListItem", position: 10, item: { "@type": "Thing", name: "Gold Rummy" } },
    { "@type": "ListItem", position: 11, item: { "@type": "Thing", name: "101z" } },
    { "@type": "ListItem", position: 12, item: { "@type": "Thing", name: "Club INR" } },
    { "@type": "ListItem", position: 13, item: { "@type": "Thing", name: "DhanGame" } },
    { "@type": "ListItem", position: 14, item: { "@type": "Thing", name: "Rummy 91" } },
    { "@type": "ListItem", position: 15, item: { "@type": "Thing", name: "Win Rummy" } },
    { "@type": "ListItem", position: 16, item: { "@type": "Thing", name: "Yono 777" } },
    { "@type": "ListItem", position: 17, item: { "@type": "Thing", name: "Diwa777", url: DIWA_URL } },
    { "@type": "ListItem", position: 18, item: { "@type": "Thing", name: "DiwaAce", url: DIWA_URL } },
    { "@type": "ListItem", position: 19, item: { "@type": "Thing", name: "DiwaBonus", url: DIWA_URL } },
    { "@type": "ListItem", position: 20, item: { "@type": "Thing", name: "DiwaFun", url: DIWA_URL } },
    { "@type": "ListItem", position: 21, item: { "@type": "Thing", name: "DiwaGame", url: DIWA_URL } },
    { "@type": "ListItem", position: 22, item: { "@type": "Thing", name: "DiwaKing", url: DIWA_URL } },
    { "@type": "ListItem", position: 23, item: { "@type": "Thing", name: "DiwaLucky", url: DIWA_URL } },
    { "@type": "ListItem", position: 24, item: { "@type": "Thing", name: "DiwaPlay", url: DIWA_URL } },
    { "@type": "ListItem", position: 25, item: { "@type": "Thing", name: "DiwaRummy", url: DIWA_URL } },
    { "@type": "ListItem", position: 26, item: { "@type": "Thing", name: "DiwaSlot", url: DIWA_URL } },
    { "@type": "ListItem", position: 27, item: { "@type": "Thing", name: "DiwaSpin", url: DIWA_URL } },
    { "@type": "ListItem", position: 28, item: { "@type": "Thing", name: "DiwaTop", url: DIWA_URL } },
    { "@type": "ListItem", position: 29, item: { "@type": "Thing", name: "DiwaVIP", url: DIWA_URL } },
    { "@type": "ListItem", position: 30, item: { "@type": "Thing", name: "DiwaWin", url: DIWA_URL } },
    { "@type": "ListItem", position: 31, item: { "@type": "Thing", name: "DiwaWow", url: DIWA_URL } },
    { "@type": "ListItem", position: 32, item: { "@type": "Thing", name: "DiwaX", url: DIWA_URL } },
    { "@type": "ListItem", position: 33, item: { "@type": "Thing", name: "Goodslots", url: DIWA_URL } },
  ],
};

export default function CompleteListOfAllYonoAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_ITEM_LIST_SCHEMA) }} />

      <PageHeader
        eyebrow="App Guide"
        title="Every Yono-Network App We Track: The Complete List, Newest First"
        answer={
          "We track 33 separately-branded apps that share the same visual family as Yono Arcade. None are confirmed to be affiliated with Yono Arcade or with each other. Nine are rummy apps, three use “Spin” in the name, two are slot apps, and nineteen fall outside those patterns. The newest is Rush Gala, launched 23 November 2026; the next is Spin Dost, launching 1 December 2026."
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/complete-list-of-all-yono-apps.webp"
        alt="A long vertical list of app icons from the Yono-network family, ordered from newest launch at the top to oldest at the bottom"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="33 apps, one list">
        <p>
          Thirty-three separately-branded apps currently sit in the directory we maintain
          alongside Yono Arcade&apos;s own listing. Every one of them already has its own page on
          this site — an APK-download guide, a promo-code guide, or both. What hasn&apos;t
          existed until now is a single place that lists all 33 together, in the order they
          actually launched.
        </p>
        <p>
          That ordering matters more than it sounds. A handful of these apps are weeks old; a few
          are days old; one hasn&apos;t launched yet. Lists that don&apos;t track launch order
          tend to bury the newest arrivals under apps that have had a page for months, which is
          exactly backwards for anyone trying to find out what&apos;s new.
        </p>
      </ContentSection>

      <ContentSection heading="The full list, newest to oldest">
        <ComparisonTable
          headers={["App", "Launched", "Category"]}
          rows={[
            ["Spin Dost", "Launching 1 Dec 2026 (not live yet)", "Spin"],
            ["Rush Gala", "23 Nov 2026", "Games"],
            ["123 Rummy", "16 Nov 2026", "Rummy"],
            ["Cash Rummy", "5 Nov 2026", "Rummy"],
            ["Spin Rummy", "30 Oct 2026", "Rummy"],
            ["VIP Rummy", "20 Oct 2026", "Rummy"],
            ["Jaiho Play", "15 Oct 2026", "Games"],
            ["Jeet Spin", "30 Sep 2026", "Spin"],
            ["Money Rummy", "9 Sep 2026", "Rummy"],
            ["Gold Rummy", "19 Aug 2026", "Rummy"],
            ["101z", "Launch date not published", "Games"],
            ["Club INR", "Launch date not published", "Games"],
            ["DhanGame", "Launch date not published", "Games"],
            ["Rummy 91", "Launch date not published", "Rummy"],
            ["Win Rummy", "Launch date not published", "Rummy"],
            ["Yono 777", "Launch date not published", "Games"],
            [
              "Diwa777, DiwaAce, DiwaBonus, DiwaFun, DiwaGame, DiwaKing, DiwaLucky, DiwaPlay, DiwaRummy, DiwaSlot, DiwaSpin, DiwaTop, DiwaVIP, DiwaWin, DiwaWow, DiwaX, Goodslots (17 apps)",
              "Launch dates not published",
              "Mixed — see dedicated list below",
            ],
          ]}
        />
        <p className="text-[14px] text-[var(--color-ink-400)]">
          The first ten rows have confirmed launch dates straight from each app&apos;s own page
          copy. The next six (101z through Yono 777) and the 17-app Diwa family don&apos;t have a
          publicly stated launch date anywhere we&apos;ve checked — that&apos;s stated as a fact,
          not filled in with a guess.
        </p>
      </ContentSection>

      <ContentSection heading="The 9 most recent arrivals">
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Spin Dost</strong> — scheduled for 1 December 2026. No download link, bonus
            or promo code yet; see our{" "}
            <Link href="/blog/spin-dost-apk-download">Spin Dost APK download page</Link> for live
            status.
          </li>
          <li>
            <strong>Rush Gala</strong> — launched 23 November 2026, a multi-game casino-style app.{" "}
            <Link href="/blog/rush-gala-apk-download">Full APK download and promo code guide</Link>.
          </li>
          <li>
            <strong>123 Rummy</strong> — launched 16 November 2026.{" "}
            <Link href="/blog/123-rummy-apk-download">Full APK download and promo code guide</Link>.
          </li>
          <li>
            <strong>Cash Rummy</strong> — launched 5 November 2026, a 10-game real-money platform
            structurally similar to Yono Arcade&apos;s own multi-game model, though independently
            operated.{" "}
            <Link href="/blog/cash-rummy-apk-download">Full APK download and promo code guide</Link>.
          </li>
          <li>
            <strong>Spin Rummy</strong> — launched 30 October 2026.{" "}
            <Link href="/blog/spin-rummy-apk-download">Current download status</Link>.
          </li>
          <li>
            <strong>VIP Rummy</strong> — launched 20 October 2026.{" "}
            <Link href="/blog/vip-rummy-apk-download">Launch-day status</Link>.
          </li>
          <li>
            <strong>Jaiho Play</strong> — launched 15 October 2026 with rummy and Teen Patti.{" "}
            <Link href="/blog/jaiho-play-apk-download">What we&apos;ve verified so far</Link>.
          </li>
          <li>
            <strong>Jeet Spin</strong> — launched 30 September 2026.{" "}
            <Link href="/blog/jeet-spin-apk-download">
              APK download, promo code and launch-day review
            </Link>
            .
          </li>
          <li>
            <strong>Money Rummy</strong> — launched 9 September 2026, reported (by its own
            operator, not independently confirmed) as the 57th app on the Yono network.{" "}
            <Link href="/blog/money-rummy-apk-download">What&apos;s confirmed so far</Link>.
          </li>
        </ol>
        <p>
          Gold Rummy, launched 19 August 2026, is the oldest app on this site with a confirmed
          public launch date; everything before it in our directory — 101z, Club INR, DhanGame,
          Rummy 91, Win Rummy, Yono 777, and the 17-app Diwa family — predates when we started
          recording launch dates at all, so we list them by category instead of date below.
        </p>
      </ContentSection>

      <ContentSection heading="By category">
        <p>
          We sort each app into a category by a simple, mechanical rule: a keyword match on the
          name itself (does it contain &ldquo;rummy,&rdquo; &ldquo;spin,&rdquo;
          &ldquo;slot,&rdquo; and so on), not a judgment about what&apos;s actually inside the
          app. That keeps the sorting consistent, but it also means a name like Spin Rummy lands
          under Rummy, not Spin, because the rule checks for &ldquo;rummy&rdquo; first. Treat the
          category column as a naming-pattern label, not a verified feature list.
        </p>
        <ul className="list-disc pl-5 space-y-1 [&>li]:flex-none">
          <li>
            <strong>Rummy (9):</strong> Rummy 91, Win Rummy, Gold Rummy, Money Rummy, VIP Rummy,
            Cash Rummy, 123 Rummy, Spin Rummy, DiwaRummy
          </li>
          <li>
            <strong>Spin (3):</strong> Jeet Spin, Spin Dost, DiwaSpin
          </li>
          <li>
            <strong>Slots (2):</strong> DiwaSlot, Goodslots
          </li>
          <li>
            <strong>Games — everything else (19):</strong> 101z, Club INR, DhanGame, Yono 777,
            Jaiho Play, Rush Gala, Diwa777, DiwaAce, DiwaBonus, DiwaFun, DiwaGame, DiwaKing,
            DiwaLucky, DiwaPlay, DiwaTop, DiwaVIP, DiwaWin, DiwaWow, DiwaX
          </li>
        </ul>
      </ContentSection>

      <ContentSection heading="The 17-app Diwa family counts as one block here">
        <p>
          Seventeen of the 33 apps on this list — Diwa777, DiwaAce, DiwaBonus, DiwaFun, DiwaGame,
          DiwaKing, DiwaLucky, DiwaPlay, DiwaRummy, DiwaSlot, DiwaSpin, DiwaTop, DiwaVIP, DiwaWin,
          DiwaWow, DiwaX and Goodslots — share a name root and, in most cases, the same gold
          wordmark and tricolor swoosh. We&apos;ve already broken those 17 down one by one,
          including Android package names and what&apos;s visually different about each: see our{" "}
          <Link href="/blog/diwa-apps-list-which-is-which">full Diwa apps list</Link>. This page
          counts them as a single group so the list above stays readable; that one has the
          per-app detail.
        </p>
      </ContentSection>

      <ContentSection heading="What &ldquo;tracked&rdquo; does and doesn&apos;t mean">
        <p>
          Being on this list means an app shares branding, a naming pattern, or a claimed network
          connection with others in this family — not that we&apos;ve confirmed a shared
          developer, shared ownership, or any connection to Yono Arcade specifically. Our{" "}
          <Link href="/blog/yono-arcade-apps">Yono Arcade Apps identity guide</Link> covers the
          six checks we&apos;d want to see matched — developer name, package ID, installation
          source, privacy policy, permissions, and cross-referenced support details — before
          treating any two of these apps as the same thing.{" "}
          <Link href="/blog/who-operates-yono-arcade">Who actually operates Yono Arcade</Link>{" "}
          covers that question for the app this site is about.
        </p>
        <p>
          This list also isn&apos;t the same thing as the games inside Yono Arcade itself — Rummy,
          Ludo, Poker, Crash and the rest. Those are covered, with which are skill vs. chance, on
          our <Link href="/all-games">Yono Arcade games list</Link>. None of the 33 apps above are
          modes or sub-games inside Yono Arcade; they are separately installed Android apps with
          their own download pages.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Play Store status gets stale fast">
        <p>
          We last checked Google Play listings on 28 September 2026. The six apps checked then —
          101z, Club INR, DhanGame, Rummy 91, Win Rummy, and Yono 777 — were not listed under
          their own names; search results returned unrelated apps or lookalikes from unconnected
          developers. Every app that launched after that date — Jeet Spin onward, including Rush
          Gala and Spin Dost — has not had its Play Store presence checked yet. Treat &ldquo;not
          checked yet&rdquo; as exactly that, not as confirmation either way.
        </p>
      </Callout>

      <Callout tone="info" title="Independent, unofficial listing">
        <p>
          AllYonoArcade.com does not operate any app named on this page and has no confirmed
          ownership link between them. This is 18+ real-money gaming content; online money games
          are prohibited under the Promotion and Regulation of Online Gaming Act, 2025, in force
          since 1 May 2026. Read our full <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Complete list questions"
        items={[
          {
            question: "How many Yono-network apps does AllYonoArcade track?",
            answer:
              "33, as of 28 November 2026 — Rush Gala is the newest live launch, and Spin Dost is the next one scheduled.",
          },
          {
            question: "What's the newest app on this list?",
            answer:
              "Rush Gala, launched 23 November 2026. Spin Dost is scheduled to launch 1 December 2026 and isn't live yet.",
          },
          {
            question: "Are all 33 apps made by the same developer?",
            answer:
              "Not confirmed. Shared branding, a shared name pattern, or a claimed network connection isn't proof of shared ownership — see our Yono Arcade Apps identity checklist for what we'd want to see matched instead.",
          },
          {
            question: "Does this list include the games inside Yono Arcade itself?",
            answer:
              "No. This is a list of separately installed apps, not playable titles or modes inside Yono Arcade. See our Yono Arcade games list for what's actually inside the app.",
          },
          {
            question: "Where are the 17 Diwa-branded apps on this list?",
            answer:
              "Counted together as one 17-app group in the category breakdown above. For the package name and visual differences of each one individually, see our full Diwa apps list.",
          },
        ]}
      />
    </>
  );
}
