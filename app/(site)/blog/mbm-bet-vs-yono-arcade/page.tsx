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
        answer="MBM Bet is a card-game app distributed from mbmbet21.com. Its promo code has been recorded elsewhere in this network as Expired, last reviewed 17 June 2026 — no current welcome bonus, deposit range or operator name is confirmed. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
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
          Expired, reviewed 17 June 2026 — the most recent status check this site is aware of. Yono
          Arcade, the subject of this site, is documented in more depth: a broader arcade-style app
          covering rummy, slots and spin-style games, built around an in-app Mall section.
        </p>
        <p>
          Both sit in the same wider Yono-network directory, which is why they get compared. That
          doesn&apos;t mean they&apos;re connected — there&apos;s currently no evidence either way.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          This comparison reflects what&apos;s publicly available as of November 10, 2026. MBM
          Bet&apos;s APK (package name, permissions, signing certificate) hasn&apos;t been
          independently inspected, and no current welcome bonus has been confirmed for it.
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
            ["Welcome bonus", "Not currently confirmed", "Not currently listed, checked regularly"],
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
        <p>No verified evidence currently shows that they are. They use separate names, separate branding and separate websites.</p>
        <p>
          Sharing a Yono-network listing isn&apos;t proof of common ownership — plenty of apps in
          this space look alike while coming from different publishers. Readers can check the
          maintained <Link href="/all-games">Yono Arcade games list</Link> for what&apos;s currently
          documented on this site.
        </p>
        <p>Before assuming any connection, compare:</p>
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
        <p>Until those fields match, treat them as separate platforms.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          The only reward-related fact this network has on record for MBM Bet is a promo code
          marked Expired as of its last review, 17 June 2026 — not a current, usable code. No welcome
          bonus figure has been confirmed for it.
        </p>
        <p>
          Yono Arcade&apos;s rewards are tracked differently — through a{" "}
          <Link href="/promo-codes">promo-code status page</Link> checked across morning, afternoon
          and evening periods, which publishes &quot;Not released yet&quot; rather than guessing when
          nothing is verified.
        </p>
        <p>
          Whenever a current reward figure does appear for either app, what matters is eligibility,
          minimum deposit, validity period, wagering conditions and whether the reward is withdrawable
          cash or a restricted in-app balance — none of which is public for MBM Bet right now.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. Depth of documentation</p>
            <p>Yono Arcade has a Mall guide, an APK guide and a promo-code tracker. MBM Bet currently has a status listing elsewhere in this network but no operator name, deposit figure, current bonus figure or Mall-equivalent guide.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward status</p>
            <p>MBM Bet&apos;s only recorded promo code is expired. Yono Arcade&apos;s promo-code status is checked and published on a schedule, even when the answer is &quot;not released.&quot;</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>MBM Bet is documented under card games only. Yono Arcade spans rummy, slots, spin and arcade-style titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <BulletList
          items={[
            "Confirm the final download domain before installing.",
            "Check the package ID and publisher name inside the APK.",
            "Review requested permissions before granting them.",
            "Treat an expired or unpublished bonus code as unusable, not a current offer.",
            "Never share an OTP, password or payment PIN.",
          ]}
        />
        <p>
          For a wider review of this site&apos;s own subject, read{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          MBM Bet and Yono Arcade should be treated as separate platforms until proven otherwise.
          MBM Bet is documented elsewhere in this network with its own download domain, but its only
          recorded promo code is expired and no operator name, deposit range or current welcome bonus
          has been confirmed. Yono Arcade currently has the more complete public documentation on this
          site — a Mall guide, APK guide and active promo-code tracking.
        </p>
        <p>
          That&apos;s a difference in how much has been verified, not a judgment on which app is
          better or safer to use.
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
            answer: "No verified evidence currently shows that they are the same app. They use separate names, branding and websites, and no shared package ID, publisher or signing certificate has been confirmed.",
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
            answer: "Yes, currently. AllYonoArcade.com has a published Mall guide, APK guide and promo-code tracker for Yono Arcade; equivalent documentation for MBM Bet doesn't yet exist here.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No. AllYonoArcade.com is an independent, unofficial information guide. It does not operate MBM Bet or Yono Arcade and does not process accounts, payments or withdrawals.",
          },
        ]}
      />
    </>
  );
}
