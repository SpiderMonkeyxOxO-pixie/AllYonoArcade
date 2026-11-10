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

const TITLE = "Yn 777 vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Yn 777 vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/yn-777-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/yn-777-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";

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
    { "@type": "ListItem", position: 3, name: "Yn 777 vs Yono Arcade", item: URL },
  ],
};

export default function Yn777VsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Yn 777 vs Yono Arcade: Games, Features and Key Differences"
        answer="Yn 777 is a slots-category app distributed from y754.com. A promo code has been reported elsewhere in this network but not independently confirmed, and no welcome bonus or operator name is verified. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 · Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yn-777-vs-yono-arcade-comparison.webp"
        alt="Yn 777 vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          Yn 777 is a slots-category app in the wider Yono-network directory, currently distributed
          from y754.com. A promo code has been reported elsewhere in this network, but that status is
          recorded as &quot;reported,&quot; not independently confirmed — treat it as unverified
          until it shows up on a checked tracker. Yono Arcade, the subject of this site, is documented
          in more depth: a broader arcade-style app covering rummy, slots and spin-style games, built
          around an in-app Mall section.
        </p>
        <p>
          Both names turning up in the same directory is what prompted this comparison — it&apos;s
          not evidence of any closer tie between them.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Everything here holds as of November 10, 2026. &quot;Reported&quot; is doing a lot of work
          in that promo-code line below — nobody has independently confirmed it — and Yn 777&apos;s
          APK (package name, permissions, signing certificate) hasn&apos;t been inspected at all.
        </p>
      </Callout>

      <ContentSection heading="Yn 777 vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Yn 777", "Yono Arcade"]}
          rows={[
            ["Main position", "Slots-category app", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "y754.com", "Tracked separately on this site"],
            ["Promo code status", "Reported, not independently confirmed", "Checked regularly, published even when \"not released\""],
            ["Welcome bonus", "Not currently confirmed", "Not currently listed, checked regularly"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Slots", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Read this as a snapshot of what&apos;s public, not a safety approval or a claim that every
          advertised feature exists in the current build of either app.
        </p>
      </ContentSection>

      <ContentSection heading="Is Yn 777 the same as Yono Arcade?">
        <p>No, not based on anything confirmed. Two separate names, two separate brand identities, two separate websites.</p>
        <p>
          A &quot;777&quot; in the name or a spot in the same network directory doesn&apos;t mean
          common ownership — this corner of the app space is full of similarly-numbered products from
          entirely different publishers. What this site has actually documented and checked lives on
          the <Link href="/all-games">Yono Arcade games list</Link>.
        </p>
        <p>Fields worth checking before assuming any link:</p>
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
        <p>No match, no reason to connect the two.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          &quot;Reported&quot; is the key word for Yn 777&apos;s promo code — it shows up elsewhere in
          this network, but nobody has independently confirmed it works, so this site treats it as
          unverified rather than a real offer. No bonus figure exists for it at all.
        </p>
        <p>
          Yono Arcade handles this differently, through a{" "}
          <Link href="/promo-codes">promo-code status page</Link> checked morning, afternoon and
          evening that will openly say &quot;Not released yet&quot; rather than leave things vague.
        </p>
        <p>
          Once something confirmed does exist for Yn 777, the details worth checking are eligibility,
          minimum deposit, how long it runs, wagering conditions, and whether it&apos;s real
          withdrawable cash or just in-app balance — none of which can be verified right now.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. How much has actually been verified</p>
            <p>Yono Arcade comes with a Mall guide, an APK guide and live promo-code tracking here. Yn 777 has a status entry elsewhere with an unconfirmed reported code, but no operator name or deposit figure to go with it.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reported vs. confirmed</p>
            <p>Yn 777&apos;s only reward lead is a reported, unverified code. Yono Arcade&apos;s promo status gets rechecked on a schedule, so &quot;not released&quot; is still a confirmed answer rather than a guess.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>Yn 777 stays within slots. Yono Arcade spans rummy, slots, spin and arcade titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>Steps worth taking before trusting either app:</p>
        <BulletList
          items={[
            "Make sure the download domain is the current one, not an outdated mirror.",
            "Check the package ID and publisher name from inside the APK.",
            "Go through every permission it asks for before granting it.",
            "A \"reported\" code is not the same as a confirmed, working one — treat it that way.",
            "Never hand over an OTP, password or payment PIN outside the app.",
          ]}
        />
        <p>
          This site&apos;s own safety write-up covers Yono Arcade in more depth:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Yn 777 and Yono Arcade stay separate platforms by every available measure. Yn 777 has its
          own download domain and a promo code floating around that&apos;s only ever been reported,
          never confirmed — no operator, deposit range or bonus has been verified beyond that. Yono
          Arcade simply has the deeper public record on this site: a Mall guide, an APK guide and
          promo-code tracking that gets maintained.
        </p>
        <p>
          That comes down to documentation, not which app is the safer or better one to use.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Yn 777 or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Yn 777 vs Yono Arcade questions"
        items={[
          {
            question: "Is Yn 777 the same as Yono Arcade?",
            answer: "No — separate names, separate branding, separate websites, with no package ID, publisher or signing certificate that's ever matched between the two.",
          },
          {
            question: "Does Yn 777 have a confirmed promo code?",
            answer: "No — a code has been reported elsewhere in this network, but that status is recorded as reported, not independently confirmed.",
          },
          {
            question: "What games does Yn 777 offer?",
            answer: "Slots-category games, per its own listing.",
          },
          {
            question: "Does Yono Arcade have more documentation than Yn 777?",
            answer: "Right now, yes — this site already runs a Mall guide, an APK guide and promo-code tracking for Yono Arcade, with no equivalent yet written for Yn 777.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No to both. This is an independent, unofficial guide — it has no role in running Yn 777 or Yono Arcade, and doesn't touch either one's accounts, payments or withdrawals.",
          },
        ]}
      />
    </>
  );
}
