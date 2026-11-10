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
          Appearing in the same network listing is the extent of what connects them today — nothing
          confirms a closer relationship than that.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Everything below reflects the state of things on November 10, 2026. An &quot;Active&quot;
          status and a &quot;Not Yet Verified&quot; classification aren&apos;t the same as an
          inspected APK — package name, permissions and signing certificate for Spin Winner remain
          unchecked, and no welcome bonus or promo code has turned up for it anywhere.
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
        <p>Nothing verified supports that. Different names, different branding, different websites — that holds regardless of the Active status.</p>
        <p>
          A listing in the same directory doesn&apos;t establish who actually owns or operates
          anything; this corner of the app ecosystem has plenty of lookalikes from unrelated
          publishers. The <Link href="/all-games">Yono Arcade games list</Link> is where this site
          keeps what&apos;s actually confirmed. One more thing worth flagging here specifically: Spin
          Winner often gets searched alongside a similarly-named &quot;Spin Crush,&quot; but no
          catalogue entry for a distinct Spin Crush app exists anywhere in this network — don&apos;t
          treat the two names as interchangeable or connected.
        </p>
        <p>Fields that would need to line up before assuming a connection:</p>
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
        <p>No match, no connection worth assuming.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          Being listed Active doesn&apos;t extend to rewards — Spin Winner has no public promo code
          on file anywhere this site checks, and its Not Yet Verified classification elsewhere in the
          network reflects exactly that gap.
        </p>
        <p>
          Yono Arcade takes a different approach: a{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets checked three times daily and
          states &quot;Not released yet&quot; plainly instead of leaving visitors guessing.
        </p>
        <p>
          If Spin Winner ever does publish a figure, what would actually matter is eligibility,
          minimum deposit, how long it&apos;s valid, any wagering strings attached, and whether it
          pays out as real cash or stays locked as in-app balance — none of it exists to check yet.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. How much is actually on record</p>
            <p>This site has a Mall guide, an APK guide and live promo-code tracking for Yono Arcade. Spin Winner has an Active/Not-Yet-Verified status elsewhere, but no operator, deposit figure or bonus amount to go with it.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Whether rewards get checked regularly</p>
            <p>No promo code has ever surfaced for Spin Winner. Yono Arcade&apos;s gets rechecked on a schedule, so even &quot;nothing released&quot; is an answer that's actually been verified.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Range of games covered</p>
            <p>Spin Winner stays within the spin category. Yono Arcade covers rummy, slots, spin and arcade titles together.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>Steps worth taking before installing either app:</p>
        <BulletList
          items={[
            "Verify you're on the current download domain, not an old or mirrored one.",
            "Pull the package ID and publisher name from the APK itself.",
            "Go through every requested permission before accepting it.",
            "Don't assume a \"Spin Crush\" offer has anything to do with Spin Winner — that link isn't confirmed anywhere.",
            "Keep OTPs, passwords and payment PINs out of any screen outside the app.",
          ]}
        />
        <p>
          For a wider review of this site&apos;s own subject, read{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Spin Winner and Yono Arcade stay separate platforms by every measure currently available.
          Spin Winner carries an Active listing and its own download domain, but the Not Yet Verified
          tag attached to it and the absence of any public promo code say a lot about how far that
          documentation actually goes. Yono Arcade simply has more built out here — a Mall guide, an
          APK guide and promo-code tracking that gets maintained.
        </p>
        <p>
          Read that as a gap in verification, not a ranking of which app is the safer bet.
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
            answer: "No — different name, different branding, different website, and no instance of a matching package ID, publisher or signing certificate between the two.",
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
            answer: "Right now, yes — Yono Arcade has a Mall guide, an APK guide and promo-code tracking already live on this site, while Spin Winner has no matching write-up here yet.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No — this is an unofficial, independent guide. It doesn't run Spin Winner or Yono Arcade, and it has no hand in either one's accounts, deposits or withdrawals.",
          },
        ]}
      />
    </>
  );
}
