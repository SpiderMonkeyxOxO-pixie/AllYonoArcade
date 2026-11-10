import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import { notFound } from "next/navigation";
import { isPublished } from "../../../lib/publish-gate";

const TITLE = "MBM Bet vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare MBM Bet vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/mbm-bet-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/mbm-bet-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-17";
const LAST_REVIEWED = "2026-11-17";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: [{ url: IMAGE }] },
  twitter: { title: TITLE, description: DESCRIPTION },
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
    { "@type": "ListItem", position: 3, name: "MBM Bet vs Yono Arcade", item: URL },
  ],
};

export default function MbmBetVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="MBM Bet vs Yono Arcade: Games, Features and Key Differences"
        answer="MBM Bet is a card-game app distributed from mbmbet21.com. Its promo code has been recorded elsewhere in this network as Expired, last reviewed 17 June 2026, alongside a tracked welcome bonus of ₹195 and ₹100 minimum withdrawal from the same review — no deposit range or operator name is confirmed. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 17, 2026 · Last reviewed: November 17, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/mbm-bet-vs-yono-arcade-comparison.webp"
        alt="MBM Bet vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          MBM Bet is a card-game app in the wider Yono-network directory, currently distributed from
          mbmbet21.com. A promo-code tracker elsewhere in this network last recorded its code as
          Expired, alongside a tracked welcome bonus of ₹195 and a ₹100 minimum withdrawal, both
          reviewed 17 June 2026 — the most recent status check this site is aware of. Yono
          Arcade, the subject of this site, is documented in more depth: a broader arcade-style app
          covering rummy, slots and spin-style games, built around an in-app Mall section.
        </p>
        <p>
          A spot in the same network directory is what brought these two into the same comparison —
          nothing confirmed ties them together beyond that.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Current as of November 10, 2026. The ₹195 bonus figure below is real, but it&apos;s also
          old — dated 17 June 2026 and never rechecked since — and nobody has independently inspected
          MBM Bet&apos;s APK (package name, permissions, signing certificate) at all.
        </p>
      </Callout>

      <ContentSection heading="MBM Bet vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "MBM Bet", "Yono Arcade"]}
          rows={[
            ["Main position", "Card-game app", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "mbmbet21.com", "Tracked separately on this site"],
            ["Promo code status", "Expired, last reviewed 17 Jun 2026 (per network tracking)", "Checked regularly, published even when \"not released\""],
            ["Welcome bonus", "₹195, per the same 17 Jun 2026 review", "Not currently listed, checked regularly"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Card games", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Read this as a snapshot of what&apos;s public, not a safety approval or a claim that every
          advertised feature exists in the current build of either app.
        </p>
      </ContentSection>

      <ContentSection heading="Is MBM Bet the same as Yono Arcade?">
        <p>No. Two different names, two different brand identities, two different websites — a dated bonus record doesn&apos;t change any of that.</p>
        <p>
          A listing in the same network directory doesn&apos;t make two apps related; this space has
          plenty of similarly-styled products from unconnected publishers. The{" "}
          <Link href="/all-games">Yono Arcade games list</Link> on this site is where what&apos;s
          actually confirmed gets tracked.
        </p>
        <p>What would need to match before assuming any connection:</p>
        <BulletList
          items={[
            "Package ID",
            "APK signing certificate",
            "Publisher or developer name",
            "Support contact details",
            "Privacy-policy owner",
            "Download domain",
          ]}
        />
        <p>No match, no reason to assume a link.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          Everything on record for MBM Bet traces back to one review, dated 17 June 2026: a promo
          code that&apos;s since gone Expired, plus a tracked ₹195 welcome bonus and a ₹100 minimum
          withdrawal from that same check. Nothing here has been revisited since, so read it as a
          historical snapshot rather than today&apos;s status.
        </p>
        <p>
          Yono Arcade runs reward tracking differently — a{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets rechecked three times daily
          and will say &quot;Not released yet&quot; outright rather than leave the answer stale.
        </p>
        <p>
          If MBM Bet&apos;s terms ever get rechecked, what would matter is current eligibility,
          minimum deposit, validity period, wagering conditions, and whether the payout is real
          withdrawable cash or restricted in-app credit — none of that is something this dated record
          can answer.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. Freshness of documentation</p>
            <p>Yono Arcade&apos;s Mall guide, APK guide and promo-code tracker on this site all stay current. MBM Bet&apos;s one data point — that ₹195 bonus — is nearly five months old by comparison, with no operator name or deposit figure ever added.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward status</p>
            <p>MBM Bet&apos;s only recorded code is expired, tied to that same 17 June review. Yono Arcade&apos;s promo status gets rechecked on a schedule, so &quot;not released&quot; still counts as current information.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>MBM Bet stays within card games. Yono Arcade spans rummy, slots, spin and arcade titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>Worth doing before relying on anything here, old or new:</p>
        <BulletList
          items={[
            "Confirm the download domain is the one currently in use.",
            "Pull the package ID and publisher name from the APK.",
            "Review every permission it requests before accepting.",
            "Don't treat an expired code or a five-month-old bonus figure as a live offer.",
            "Keep OTPs, passwords and payment PINs out of anything outside the app.",
          ]}
        />
        <p>
          AllYonoArcade.com&apos;s broader safety guide goes further on this:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          MBM Bet and Yono Arcade have nothing confirmed connecting them, so treat them as entirely
          separate platforms. MBM Bet&apos;s own download domain, its ₹195 bonus and its expired code
          all trace back to a single check from 17 June 2026 — no operator name or deposit range has
          ever been added, and nothing&apos;s been revisited since. Yono Arcade, by contrast, has
          documentation that actually gets maintained: a Mall guide, an APK guide and live promo-code
          tracking.
        </p>
        <p>
          That&apos;s a gap in how current each one&apos;s information is, not a verdict on which app
          is safer to use.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate MBM Bet or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="MBM Bet vs Yono Arcade questions"
        items={[
          {
            question: "Is MBM Bet the same as Yono Arcade?",
            answer: "No — separate names, separate branding, separate websites, and no instance of a matching package ID, publisher or signing certificate between the two.",
          },
          {
            question: "Does MBM Bet have an active promo code?",
            answer: "No — its only recorded code elsewhere in this network is marked Expired, last reviewed 17 June 2026.",
          },
          {
            question: "What games does MBM Bet offer?",
            answer: "Card games, per its own listing.",
          },
          {
            question: "Does Yono Arcade have more documentation than MBM Bet?",
            answer: "Yes, and it's current too — this site maintains a Mall guide, an APK guide and promo-code tracking for Yono Arcade, while MBM Bet's one data point here is already months old.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No, it operates neither. This is an independent, unofficial guide — no accounts, payments or withdrawals for MBM Bet or Yono Arcade are handled here.",
          },
        ]}
      />
    </>
  );
}
