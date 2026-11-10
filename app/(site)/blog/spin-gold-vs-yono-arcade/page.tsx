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

const TITLE = "Spin Gold vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Spin Gold vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/spin-gold-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/spin-gold-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-12";
const LAST_REVIEWED = "2026-11-12";

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
    { "@type": "ListItem", position: 3, name: "Spin Gold vs Yono Arcade", item: URL },
  ],
};

export default function SpinGoldVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Spin Gold vs Yono Arcade: Games, Features and Key Differences"
        answer="Spin Gold is a spin-category app distributed from spingoldvipagent.cc, with its own developer and account system separate from every other listing tracked across this network — but no confirmed welcome bonus, deposit range or operator name. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 12, 2026 · Last reviewed: November 12, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/spin-gold-vs-yono-arcade-comparison.webp"
        alt="Spin Gold vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          Spin Gold is a spin-category app in the wider Yono-network directory, currently distributed
          from spingoldvipagent.cc. Its own listing explicitly describes a developer and account
          system separate from every other app tracked alongside it — a notable disclosure, since
          several apps in this space share infrastructure or branding. Yono Arcade, the subject of
          this site, is documented in more depth: a broader arcade-style app covering rummy, slots
          and spin-style games, built around an in-app Mall section.
        </p>
        <p>
          Being tracked in the same directory is the only real connection between them right now —
          it puts both names on this site, nothing more.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          Everything here reflects the public record as of November 10, 2026. The APK itself —
          package name, permissions, signing certificate — hasn&apos;t had an independent look yet,
          and despite the separate-account claim, Spin Gold still hasn&apos;t published a bonus
          figure or a working promo code anywhere this directory tracks.
        </p>
      </Callout>

      <ContentSection heading="Spin Gold vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Spin Gold", "Yono Arcade"]}
          rows={[
            ["Main position", "Spin-category app, own developer/account system claimed", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "spingoldvipagent.cc", "Tracked separately on this site"],
            ["Welcome bonus", "Not confirmed yet", "Not currently listed, checked regularly"],
            ["Login method", "Phone number + SMS OTP, inside the app", "Handled inside the app"],
            ["In-app Mall", "Not documented", "Documented as an in-app section"],
            ["Game categories", "Spin", "Rummy, slots, spin, arcade"],
            ["APK verification", "Not independently completed", "Guide published, naming variants documented"],
            ["Confirmed connection between platforms", "None", "None"],
          ]}
        />
        <p>
          Read this as a snapshot of what&apos;s public, not a safety approval or a claim that every
          advertised feature exists in the current build of either app.
        </p>
      </ContentSection>

      <ContentSection heading="Is Spin Gold the same as Yono Arcade?">
        <p>No. Everything about the two — name, branding, the site each is distributed from — points in different directions, and nothing on record links them.</p>
        <p>
          One clarification worth making first, since it&apos;s a more common mix-up than the Yono
          Arcade question: &quot;Gold Spin&quot; and &quot;Spin Gold&quot; are the same app with the
          word order flipped, not two different products — this guide treats both spellings as one
          listing. As for Yono Arcade specifically, a shared network directory doesn&apos;t establish
          common ownership on its own; plenty of similarly-styled apps here come from entirely
          different publishers. The <Link href="/all-games">Yono Arcade games list</Link> is the
          place to check what this site has actually confirmed rather than assumed.
        </p>
        <p>Fields that would need to match before any connection is worth taking seriously:</p>
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
        <p>No match on those, no reason to treat them as related.</p>
      </ContentSection>

      <ContentSection heading="Reward figures: what's actually confirmed">
        <p>
          Despite the separate-account setup, Spin Gold hasn&apos;t put a number behind any reward —
          no bonus figure, no promo code, nothing this site has managed to independently verify.
        </p>
        <p>
          Yono Arcade works differently on this front: a{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets rechecked three times a day
          and will openly say &quot;Not released yet&quot; instead of leaving the status ambiguous.
        </p>
        <p>
          Should Spin Gold eventually publish something concrete, the questions worth asking are
          eligibility, minimum deposit, how long it runs, wagering requirements, and whether it pays
          out as real withdrawable money or gets locked inside the app as credit — none of which can
          be answered yet.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. What's actually documented</p>
            <p>Yono Arcade comes with a Mall guide, an APK guide and live promo-code tracking on this site. Spin Gold has a status entry elsewhere in the network and its separate-account disclosure, but nothing on operator identity, deposit size or bonus terms.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward transparency</p>
            <p>No bonus figure exists for Spin Gold anywhere. Yono Arcade&apos;s rewards get checked on a set schedule, so &quot;not released&quot; is still a verified answer rather than silence.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>Spin Gold sticks to the spin category. Yono Arcade covers rummy, slots, spin and arcade titles under one roof.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>Worth running through, whichever app you&apos;re looking at:</p>
        <BulletList
          items={[
            "Make sure the domain you end up on is actually the current one.",
            "Pull the package ID and publisher name out of the APK before trusting it.",
            "Go through the permission requests one by one.",
            "A bonus nobody's confirmed shouldn't be treated as a real offer.",
            "No app should ever ask for your OTP, password or payment PIN outside itself.",
          ]}
        />
        <p>
          This site&apos;s broader safety guide covers Yono Arcade specifically:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Treat Spin Gold and Yono Arcade as unconnected platforms — nothing currently says
          otherwise. Spin Gold explicitly runs its own developer and account infrastructure
          separately from the rest of the apps it&apos;s listed alongside, but still hasn&apos;t
          disclosed an operator name, a deposit range or a bonus amount. Yono Arcade, meanwhile,
          already has the fuller public record here: a Mall guide, an APK guide, and promo-code
          tracking that actually gets updated.
        </p>
        <p>
          It&apos;s a documentation gap, not a verdict on which one is the safer or better choice.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Spin Gold or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Spin Gold vs Yono Arcade questions"
        items={[
          {
            question: "Is Spin Gold the same as Yono Arcade?",
            answer: "No. The two run under different names and branding on different websites, and there's never been a matching package ID, publisher or signing certificate found between them.",
          },
          {
            question: "Is Spin Gold the same as Gold Spin?",
            answer: "Yes — this is a reversed-word-order variant of the same app's own name, not a separate product.",
          },
          {
            question: "Does Spin Gold have a published welcome bonus amount?",
            answer: "No — as of this review, Spin Gold hasn't confirmed a welcome bonus figure or promo code.",
          },
          {
            question: "What games does Spin Gold offer?",
            answer: "Spin-category games, per its own listing.",
          },
          {
            question: "Does Yono Arcade have more documentation than Spin Gold?",
            answer: "At this point, yes — this site already has a Mall guide, an APK guide and promo-code tracking built for Yono Arcade, and nothing close exists yet for Spin Gold.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "Neither one. This site is an independent, unofficial guide only — no account handling, payments or withdrawals for Spin Gold or Yono Arcade happen here.",
          },
        ]}
      />
    </>
  );
}
