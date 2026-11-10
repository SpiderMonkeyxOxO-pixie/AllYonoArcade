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

const TITLE = "Joy Rummy vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Joy Rummy vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/joy-rummy-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/joy-rummy-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-16";
const LAST_REVIEWED = "2026-11-16";

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
    { "@type": "ListItem", position: 3, name: "Joy Rummy vs Yono Arcade", item: URL },
  ],
};

export default function JoyRummyVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Joy Rummy vs Yono Arcade: Games, Features and Key Differences"
        answer="Joy Rummy is a rummy-category card-game app distributed from joyrummyapp.com — no confirmed welcome bonus, deposit range or operator name. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 16, 2026 · Last reviewed: November 16, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/joy-rummy-vs-yono-arcade-comparison.webp"
        alt="Joy Rummy vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          joyrummyapp.com is currently where Joy Rummy gets distributed from — a card-game app
          sitting in the rummy corner of the wider Yono-network directory. This site&apos;s own
          subject, Yono Arcade, spreads wider: rummy, slots and spin-style games together, anchored
          by an in-app Mall section that gets its own dedicated guide here.
        </p>
        <p>
          The two get compared here simply because both names appear in the same directory — that
          proximity isn&apos;t evidence of any actual relationship between them.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Current as of November 10, 2026: nobody has pulled apart Joy Rummy&apos;s APK yet (package
          name, permissions, signing certificate all remain unchecked), and neither a bonus figure
          nor a promo code has shown up for it anywhere this site tracks.
        </p>
      </Callout>

      <ContentSection heading="Joy Rummy vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Joy Rummy", "Yono Arcade"]}
          rows={[
            ["Main position", "Rummy and card-game app", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "joyrummyapp.com", "Tracked separately on this site"],
            ["Welcome bonus", "Not confirmed yet", "Not currently listed, checked regularly"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Rummy, card games", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Treat this table as a snapshot of the public record, nothing more — it&apos;s not a safety
          sign-off, and it doesn&apos;t guarantee every feature listed actually works in either
          app&apos;s current build.
        </p>
      </ContentSection>

      <ContentSection heading="Is Joy Rummy the same as Yono Arcade?">
        <p>Nothing says they are. Separate names, separate branding, separate websites — a cheerful app name doesn&apos;t change that.</p>
        <p>
          Being listed in the same network directory isn&apos;t proof of a shared owner; plenty of
          apps here look similar while actually coming from unrelated publishers. What this site has
          actually confirmed lives on the <Link href="/all-games">Yono Arcade games list</Link>,
          worth checking before assuming anything.
        </p>
        <p>The fields that would actually need to match:</p>
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
        <p>No match there, no basis for treating them as connected.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          Nobody&apos;s found a bonus amount or a promo code attached to Joy Rummy anywhere this
          directory checks — that column simply stays blank for now.
        </p>
        <p>
          Yono Arcade works differently: its{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets checked three times a day and
          will say &quot;Not released yet&quot; outright instead of staying silent.
        </p>
        <p>
          If Joy Rummy does eventually confirm something, what would actually matter is eligibility,
          minimum deposit, how long the offer lasts, wagering conditions, and whether it pays out as
          real cash or stays locked inside the app — none of it is answerable today.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. What's actually on record</p>
            <p>A Mall guide, an APK guide and live promo-code tracking all exist for Yono Arcade on this site. Joy Rummy, meanwhile, amounts to a single status line elsewhere — operator, deposit size and bonus terms are all blank.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward transparency</p>
            <p>No bonus figure has ever been published for Joy Rummy. Yono Arcade&apos;s promo status is rechecked on a schedule, so even &quot;not released&quot; is a verified, current answer.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Range of games on offer</p>
            <p>Rummy and card games are where Joy Rummy's own listing stops. Yono Arcade's lineup runs wider — rummy, slots, spin and arcade-style titles all under one app.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>A few things worth doing before installing either app:</p>
        <BulletList
          items={[
            "Confirm you're actually on the current download domain.",
            "Pull the package ID and publisher name out of the APK first.",
            "Go through each requested permission rather than accepting them blindly.",
            "Don't treat an unconfirmed bonus claim as a guaranteed offer.",
            "Keep OTPs, passwords and payment PINs inside the app only.",
          ]}
        />
        <p>
          This site&apos;s own safety guide covers Yono Arcade specifically:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Short of anything new surfacing, Joy Rummy and Yono Arcade are two unrelated platforms.
          Joy Rummy&apos;s download domain is the one concrete thing on file for it — operator name,
          deposit range and bonus figure are all still missing. On this site specifically, Yono
          Arcade just has a bigger head start: Mall guide, APK guide, promo-code tracking, all
          already built.
        </p>
        <p>
          Read that gap as documentation catching up, not as either app being the riskier pick.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Joy Rummy or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Joy Rummy vs Yono Arcade questions"
        items={[
          {
            question: "Is Joy Rummy the same as Yono Arcade?",
            answer: "No — different names, different branding, different websites, and no case of a matching package ID, publisher or signing certificate between them.",
          },
          {
            question: "Does Joy Rummy have a published welcome bonus amount?",
            answer: "No — as of this review, Joy Rummy hasn't confirmed a welcome bonus figure or promo code.",
          },
          {
            question: "What games does Joy Rummy offer?",
            answer: "Rummy and card games, per its own listing.",
          },
          {
            question: "Does Yono Arcade have more documentation than Joy Rummy?",
            answer: "For now, yes — this site already has a Mall guide, an APK guide and promo-code tracking for Yono Arcade. Joy Rummy doesn't have anything comparable here yet.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No. This is an independent, unofficial guide only — it doesn't operate Joy Rummy or Yono Arcade and has no involvement in either one's accounts, payments or withdrawals.",
          },
        ]}
      />
    </>
  );
}
