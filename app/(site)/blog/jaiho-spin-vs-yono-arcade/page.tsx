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

const TITLE = "Jaiho Spin vs Yono Arcade: Games, Features and Key Differences";
const DESCRIPTION =
  "Compare Jaiho Spin vs Yono Arcade by game category, reward transparency, APK status and verification level before using either platform.";
const URL = "https://allyonoarcade.com/blog/jaiho-spin-vs-yono-arcade";
const IMAGE = "https://allyonoarcade.com/images/guides/jaiho-spin-vs-yono-arcade-comparison.webp";
const PUBLISHED = "2026-11-14";
const LAST_REVIEWED = "2026-11-14";

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
    { "@type": "ListItem", position: 3, name: "Jaiho Spin vs Yono Arcade", item: URL },
  ],
};

export default function JaihoSpinVsYonoArcadePage() {
  if (!isPublished(PUBLISHED)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Comparisons"
        title="Jaiho Spin vs Yono Arcade: Games, Features and Key Differences"
        answer="Jaiho Spin is a spin-category app in the Jaiho-branded family, distributed from jaihospinss.com, with phone-and-OTP login handled inside the app — but no confirmed welcome bonus, deposit range or operator name. Yono Arcade has a documented Mall section, APK guide and promo-code tracker on this site."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 14, 2026 · Last reviewed: November 14, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/jaiho-spin-vs-yono-arcade-comparison.webp"
        alt="Jaiho Spin vs Yono Arcade comparison graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Overview">
        <p>
          Jaiho Spin is one of several Jaiho-branded apps tracked across the wider Yono-network
          directory, currently distributed from jaihospinss.com, with phone-number-and-SMS-OTP login
          handled entirely inside the app. The Jaiho name covers multiple separately branded apps in
          this space — Jaiho Play, Jaiho Arcade, Jaiho Rummy and others among them — and this guide
          treats Jaiho Spin as its own listing rather than assuming it&apos;s interchangeable with
          any of them. Yono Arcade, the subject of this site, is documented in more depth: a broader
          arcade-style app covering rummy, slots and spin-style games, built around an in-app Mall
          section.
        </p>
        <p>
          Showing up in the same directory listing is what put these two side by side here — it
          doesn&apos;t establish anything beyond that.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Some details remain provisional" badge="pending">
        <p>
          What follows holds as of November 10, 2026. The shared domain with Jaiho91 raises more
          questions than it answers, and until someone actually inspects the APK — package name,
          permissions, signing certificate — those questions stay open. No welcome bonus or promo
          code has turned up for Jaiho Spin either.
        </p>
      </Callout>

      <ContentSection heading="Jaiho Spin vs Yono Arcade: quick comparison">
        <ComparisonTable
          headers={["Comparison point", "Jaiho Spin", "Yono Arcade"]}
          rows={[
            ["Main position", "Spin-category app in the Jaiho-branded family", "Coin-operated arcade-style app"],
            ["Operator named in app", "Not stated", "Not stated in these terms"],
            ["Current download domain", "jaihospinss.com", "Tracked separately on this site"],
            ["Login method", "Phone number + SMS OTP, inside the app", "Handled inside the app"],
            ["Welcome bonus", "Not confirmed yet", "Not currently listed, checked regularly"],
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

      <ContentSection heading="Is Jaiho Spin the same as Yono Arcade?">
        <p>No — not by anything that&apos;s actually been verified. Different name, different branding, different website.</p>
        <p>
          A listing in the same network isn&apos;t evidence of shared ownership; this is a crowded
          space where unrelated publishers end up looking alike. The{" "}
          <Link href="/all-games">Yono Arcade games list</Link> on this site is the place to check
          what&apos;s confirmed rather than guess. The more relevant mix-up here is actually within
          the Jaiho family itself: Jaiho Play, Jaiho Arcade and Jaiho Rummy are all separate apps
          under the same umbrella name, and a listing elsewhere called &quot;Jaiho91&quot; shares the
          exact download domain given above for Jaiho Spin. This guide sticks to Jaiho Spin alone and
          doesn&apos;t assume those other names are the same product just because they share a prefix
          or a domain.
        </p>
        <p>Before treating any of these Jaiho-branded names as connected, check:</p>
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
          Shared domain aside, Jaiho Spin stands apart from Jaiho91 on one thing: neither has a
          reward figure to show. No bonus, no promo code, nothing independently checked for Jaiho
          Spin specifically.
        </p>
        <p>
          Yono Arcade takes a different approach — a{" "}
          <Link href="/promo-codes">promo-code status page</Link> gets rechecked morning, afternoon
          and evening, and states &quot;Not released yet&quot; outright instead of leaving the
          question hanging.
        </p>
        <p>
          If Jaiho Spin does eventually publish terms, the things worth scrutinizing are eligibility,
          minimum deposit, how long the offer lasts, wagering conditions, and whether it&apos;s
          withdrawable cash or stuck as in-app balance. None of that exists yet to check.
        </p>
      </ContentSection>

      <ContentSection heading="Key differences">
        <div className="space-y-4">
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">1. Documentation depth</p>
            <p>This site has built out a Mall guide, an APK guide and live promo-code tracking for Yono Arcade. Jaiho Spin has a status entry elsewhere in the network and a noted domain overlap with Jaiho91 — not much else.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">2. Reward transparency</p>
            <p>No welcome-bonus figure has ever surfaced for Jaiho Spin. Yono Arcade&apos;s promo-code status gets checked on a schedule, so &quot;not released&quot; still counts as a verified answer.</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-[#f3f5ff]">3. Game-category breadth</p>
            <p>Jaiho Spin stays within the spin category. Yono Arcade spans rummy, slots, spin and arcade titles.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Checks before accessing either app">
        <p>Before installing anything in the Jaiho family or elsewhere, it&apos;s worth:</p>
        <BulletList
          items={[
            "Verifying the download domain matches what's current, not an old mirror.",
            "Pulling the package ID and publisher name from inside the APK.",
            "Reading through requested permissions before accepting them.",
            "Not assuming a Jaiho91 offer automatically applies to Jaiho Spin, or vice versa.",
            "Never sharing an OTP, password or payment PIN outside the app.",
          ]}
        />
        <p>
          AllYonoArcade.com&apos;s own safety write-up covers this in more depth:{" "}
          <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Final verdict">
        <p>
          Jaiho Spin and Yono Arcade remain unconnected platforms as far as anything verified goes.
          Jaiho Spin has its own download domain and login flow on record, plus that unresolved
          overlap with Jaiho91 worth keeping an eye on, but still no operator name, deposit range or
          bonus figure. Yono Arcade is simply further along on documentation here — a Mall guide, an
          APK guide and promo-code tracking that's actually maintained.
        </p>
        <p>
          That&apos;s about how much has been verified for each, not which one is the safer pick.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial comparison">
        <p>
          AllYonoArcade.com does not operate Jaiho Spin or Yono Arcade. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app information
          and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Jaiho Spin vs Yono Arcade questions"
        items={[
          {
            question: "Is Jaiho Spin the same as Yono Arcade?",
            answer: "No. The two use different names and branding on different websites, and no package ID, publisher or signing certificate has ever matched between them.",
          },
          {
            question: "Is Jaiho Spin the same as other Jaiho-branded apps?",
            answer: "Not necessarily. The Jaiho name covers several separately branded apps (Jaiho Play, Jaiho Arcade, Jaiho Rummy among them). This guide covers Jaiho Spin specifically and does not assume shared ownership with the others without matching package IDs or publisher details.",
          },
          {
            question: "Does Jaiho Spin have a published welcome bonus amount?",
            answer: "No — as of this review, Jaiho Spin hasn't confirmed a welcome bonus figure or promo code.",
          },
          {
            question: "What games does Jaiho Spin offer?",
            answer: "Spin-category games, per its own listing.",
          },
          {
            question: "Does Yono Arcade have more documentation than Jaiho Spin?",
            answer: "At the moment, yes — this site already has a Mall guide, an APK guide and promo-code tracking for Yono Arcade, with nothing comparable yet written for Jaiho Spin.",
          },
          {
            question: "Does AllYonoArcade.com operate either platform?",
            answer: "No, neither. This is an independent, unofficial guide — it doesn't run Jaiho Spin or Yono Arcade and has no part in either one's accounts, payments or withdrawals.",
          },
        ]}
      />
    </>
  );
}
