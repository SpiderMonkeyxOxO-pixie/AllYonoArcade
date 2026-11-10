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

const TITLE = "Boss Rummy vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Boss Rummy vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/boss-rummy-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/boss-rummy-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-11";
const LAST_REVIEWED = "2026-11-11";

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
    { "@type": "ListItem", position: 3, name: "Boss Rummy vs Yono Arcade", item: URL },
  ],
};

export default function BossRummyVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Boss Rummy vs Yono Arcade: Games, Features and Key Differences"
        answer="Boss Rummy is a rummy-category card-game app distributed from bossrummyv.com — no confirmed welcome bonus, deposit range or operator name. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 11, 2026 · Last reviewed: November 11, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/boss-rummy-vs-yono-arcade-comparison.webp"
        alt="Boss Rummy vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          Boss Rummy is a rummy-and-card-game app in the wider Yono-network directory, currently
          distributed from bossrummyv.com. Note the word order: it&apos;s documented under &quot;Boss
          Rummy,&quot; not &quot;Rummy Boss&quot; — the reversed phrasing shows up often in search
          traffic but refers to the same app. Yono Arcade, the subject of this site, is documented in
          more depth: a broader arcade-style app covering rummy, slots and spin-style games, built
          around an in-app Mall section.
        </p>
        <p>
          The comparison exists because both names show up in the same directory, not because of
          anything stronger than that — no shared ownership, infrastructure or branding has been
          established between them.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Figures below are current as of November 10, 2026. Nobody on this site has pulled apart
          Boss Rummy&apos;s APK yet — package name, requested permissions, signing certificate are
          all still open questions — and neither a bonus amount nor a promo code has surfaced for it
          anywhere this directory checks.
        </p>
      </Callout>

      <ContentSection heading="Boss Rummy vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Boss Rummy", "Yono Arcade"]}
          rows={[
            ["Main position", "Rummy and card-game app", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "bossrummyv.com", "Tracked separately on this site"],
            ["Welcome bonus", "Not confirmed yet", "Not currently listed, checked regularly"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Rummy, card games", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Read this as a snapshot of what&apos;s public, not a safety approval or a claim that every
          advertised feature exists in the current build of either app.
        </p>
      </ContentSection>

      <ContentSection heading="Is Boss Rummy the same as Yono Arcade?">
        <p>Short answer: nothing on record links them. Separate names, separate branding, separate websites, and that&apos;s where the evidence currently stops.</p>
        <p>
          A shared spot in the same network directory means they get listed near each other, not
          that they share an owner. Plenty of apps in this category look similar or launch under
          similar naming patterns while coming from entirely different publishers — the{" "}
          <Link href="/all-games">Yono Arcade games list</Link> on this site is the place to check
          what&apos;s actually been documented rather than assumed.
        </p>
        <p>Before treating the two as related, the fields worth lining up are:</p>
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
        <p>Treat them as unrelated platforms until those actually line up.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          There&apos;s nothing to put in a comparison column for Boss Rummy on rewards — no bonus
          amount, no promo code, nothing this site has been able to independently check anywhere.
        </p>
        <p>
          Yono Arcade handles this differently: its{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets checked morning, afternoon and
          evening and will say &quot;Not released yet&quot; outright rather than leaving the question
          open.
        </p>
        <p>
          If a real figure for Boss Rummy ever surfaces, the details that would actually matter are
          eligibility rules, minimum deposit, how long the offer runs, any wagering conditions, and
          whether it pays out as withdrawable cash or gets stuck as in-app credit. None of that
          exists to evaluate yet.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. How much is actually documented</p>
            <p>This site runs a Mall guide, an APK guide and a live promo-code tracker for Yono Arcade. Boss Rummy, by contrast, is just a status entry elsewhere in the network — no operator, no deposit figure, no bonus figure, nothing resembling a Mall guide.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Whether rewards get checked on a schedule</p>
            <p>Nobody&apos;s confirmed a welcome bonus for Boss Rummy at all. Yono Arcade&apos;s side gets rechecked on a schedule, so even a &quot;nothing released&quot; answer is a current one rather than a guess.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. How many game types each one covers</p>
            <p>Boss Rummy stays in its lane — rummy and card games. Yono Arcade stretches across rummy, slots, spin and arcade titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>A short list worth running through before installing either one:</p>
        <BulletList
          items={[
            "Double-check the download domain you actually land on.",
            "Look inside the APK for the package ID and publisher name.",
            "Read through the permissions it asks for before accepting any.",
            "If no bonus has been confirmed, don't treat a claimed one as real.",
            "OTPs, passwords and payment PINs never belong outside the app itself.",
          ]}
        />
        <p>
          AllYonoArcade.com&apos;s own safety write-up goes into more depth:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Nothing ties these two together beyond sitting in the same network directory, so they
          should be read as separate platforms. Boss Rummy has its own download domain on record
          elsewhere, but no operator name, deposit range or bonus figure has made it this far. Yono
          Arcade is simply the better-documented of the two on this particular site, with a Mall
          guide, an APK guide and promo-code tracking already built out.
        </p>
        <p>
          That gap is about documentation, not a claim that one app is safer or better than the
          other — it isn&apos;t.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Boss Rummy or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Boss Rummy vs Yono Arcade questions"
        items={[
          {
            question: "Is Boss Rummy the same as Yono Arcade?",
            answer: "Nothing points to that. Different names, different branding, different websites, and no package ID, publisher name or signing certificate has ever matched between them.",
          },
          {
            question: "Is Boss Rummy the same as Rummy Boss?",
            answer: "Yes — this is the same app searched with the words reversed; the app's own documentation uses \"Boss Rummy.\"",
          },
          {
            question: "Does Boss Rummy have a published welcome bonus amount?",
            answer: "No — as of this review, Boss Rummy hasn't confirmed a welcome bonus figure or promo code.",
          },
          {
            question: "Does Yono Arcade have more documentation than Boss Rummy?",
            answer: "For now, yes — this site has already built out a Mall guide, an APK guide and a promo-code tracker for Yono Arcade. Nothing comparable exists here for Boss Rummy.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No to both. This is an independent, unofficial guide — it doesn't run Boss Rummy or Yono Arcade, and it never touches accounts, deposits or withdrawals for either.",
          },
        ]}
      />
    </>
  );
}
