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

const TITLE = "Spin Winner vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Spin Winner vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/spin-winner-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/spin-winner-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-13";
const LAST_REVIEWED = "2026-11-13";

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
    { "@type": "ListItem", position: 3, name: "Spin Winner vs Yono Arcade", item: URL },
  ],
};

export default function SpinWinnerVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Spin Winner vs Yono Arcade: Games, Features and Key Differences"
        answer="Spin Winner is a spin-category app distributed from spinwinneree.com, listed as Active and confirmed by administrators elsewhere in this network, with a classification of Not Yet Verified and no public promo code. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 13, 2026 · Last reviewed: November 13, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/spin-winner-vs-yono-arcade-comparison.webp"
        alt="Spin Winner vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          Spin Winner is a spin-category app in the wider Yono-network directory, currently
          distributed from spinwinneree.com. A listing elsewhere in this network records it as
          Active, confirmed by site administrators, with a classification of Not Yet Verified and no
          public promo code on file. Yono Arcade, the subject of this site, is documented in more
          depth: a broader arcade-style app covering rummy, slots and spin-style games, built around
          an in-app Mall section.
        </p>
        <p>
          Both sit in the same wider Yono-network directory, which is why they get compared. That
          doesn&apos;t mean they&apos;re connected — there&apos;s currently no evidence either way.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          This comparison reflects what&apos;s publicly available as of November 10, 2026. Spin
          Winner&apos;s APK (package name, permissions, signing certificate) hasn&apos;t been
          independently inspected, and no welcome bonus or promo code has been confirmed for it.
        </p>
      </Callout>

      <ContentSection heading="Spin Winner vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Spin Winner", "Yono Arcade"]}
          rows={[
            ["Main position", "Spin-category app, listed Active", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "spinwinneree.com", "Tracked separately on this site"],
            ["Classification elsewhere in network", "Not Yet Verified", "N/A"],
            ["Welcome bonus", "Not confirmed, no public code", "Not currently listed, checked regularly"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Spin", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Read this as a snapshot of what&apos;s public, not a safety approval or a claim that every
          advertised feature exists in the current build of either app. &quot;Active&quot; refers to
          the listing status only — it does not mean the app is official, licensed or recommended.
        </p>
      </ContentSection>

      <ContentSection heading="Is Spin Winner the same as Yono Arcade?">
        <p>No verified evidence currently shows that they are. They use separate names, separate branding and separate websites.</p>
        <p>
          Sharing a Yono-network listing isn&apos;t proof of common ownership — plenty of apps in
          this space look alike while coming from different publishers. Readers can check the
          maintained <Link href="/all-games">Yono Arcade games list</Link> for what&apos;s currently
          documented on this site. Also worth noting: a similarly-named &quot;Spin Crush&quot; has
          been searched for alongside Spin Winner, but no catalogue record of a distinct Spin Crush
          app has been confirmed anywhere in this network — treat any claim pairing the two names as
          unverified.
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
          No public promo code is on record for Spin Winner anywhere this site has checked, and its
          classification elsewhere in this network is Not Yet Verified. There is currently nothing to
          compare on reward terms because nothing has been confirmed.
        </p>
        <p>
          Yono Arcade&apos;s rewards are tracked differently — through a{" "}
          <Link href="/promo-codes">promo-code status page</Link> checked across morning, afternoon
          and evening periods, which publishes &quot;Not released yet&quot; rather than guessing when
          nothing is verified.
        </p>
        <p>
          Whenever a reward figure does appear for either app, what matters is eligibility, minimum
          deposit, validity period, wagering conditions and whether the reward is withdrawable cash
          or a restricted in-app balance — none of which is public for Spin Winner yet.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. Depth of documentation</p>
            <p>Yono Arcade has a Mall guide, an APK guide and a promo-code tracker. Spin Winner currently has a status listing elsewhere in this network but no operator name, deposit figure, bonus figure or Mall-equivalent guide.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward transparency</p>
            <p>Spin Winner has no public promo code on record. Yono Arcade&apos;s promo-code status is checked and published on a schedule, even when the answer is &quot;not released.&quot;</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>Spin Winner is documented under the spin category only. Yono Arcade spans rummy, slots, spin and arcade-style titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <BulletList
          items={[
            "Confirm the final download domain before installing.",
            "Check the package ID and publisher name inside the APK.",
            "Review requested permissions before granting them.",
            "Don't assume a \"Spin Crush\" offer refers to Spin Winner — no link between the two names is confirmed.",
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
          Spin Winner and Yono Arcade should be treated as separate platforms until proven otherwise.
          Spin Winner is documented elsewhere in this network as an Active listing with its own
          download domain, but it carries a Not Yet Verified classification and no public promo code
          has been confirmed. Yono Arcade currently has the more complete public documentation on
          this site — a Mall guide, APK guide and active promo-code tracking.
        </p>
        <p>
          That&apos;s a difference in how much has been verified, not a judgment on which app is
          better or safer to use.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Spin Winner or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Spin Winner vs Yono Arcade questions"
        items={[
          {
            question: "Is Spin Winner the same as Yono Arcade?",
            answer: "No verified evidence currently shows that they are the same app. They use separate names, branding and websites, and no shared package ID, publisher or signing certificate has been confirmed.",
          },
          {
            question: "Is Spin Winner the same as Spin Crush?",
            answer: "No link is confirmed. No catalogue record of a distinct \"Spin Crush\" app exists in this network, despite the two names being searched together.",
          },
          {
            question: "Does Spin Winner have a public promo code?",
            answer: "No — no public promo code is on record for it anywhere this site has checked.",
          },
          {
            question: "Does Yono Arcade have more documentation than Spin Winner?",
            answer: "Yes, currently. AllYonoArcade.com has a published Mall guide, APK guide and promo-code tracker for Yono Arcade; equivalent documentation for Spin Winner doesn't yet exist here.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No. AllYonoArcade.com is an independent, unofficial information guide. It does not operate Spin Winner or Yono Arcade and does not process accounts, payments or withdrawals.",
          },
        ]}
      />
    </>
  );
}
