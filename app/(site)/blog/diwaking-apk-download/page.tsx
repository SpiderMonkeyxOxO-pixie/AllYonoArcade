import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaKing Download APK, Promo Code & Guide";
const META_TITLE = "DiwaKing Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaKing APK download link, the package name to verify before installing, and today's promo code status — plus what's confirmed and what isn't about this app.";
const URL = "https://allyonoarcade.com/blog/diwaking-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwaking.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const DOWNLOAD_LINK = "https://diwakingshare.info?pid=421935348&channel=2010003&pkg=com.diwaking0003.com";
const PACKAGE_NAME = "com.diwaking0003.com";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaKing is a standalone app with its own download link, below. It's an independent listing in the same visual network as Yono Arcade and is not confirmed to be built by the same developer. Beyond the link and package name, nothing about its bonus amounts, launch date, or features has been independently verified yet.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: META_TITLE,
    description: DESCRIPTION,
  },
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
    { "@type": "ListItem", position: 3, name: "DiwaKing APK Download", item: URL },
  ],
};

export default function DiwaKingApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2 flex justify-center">
        <Image
          src="/images/platforms/diwaking.webp"
          alt="DiwaKing app icon, a gold wordmark with an Indian tricolor swoosh underline"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaKing">
        <p>
          Our link is below. It is not an official app store listing, and we may earn a commission if you use it.
        </p>
        <p>
          <a
            href={DOWNLOAD_LINK}
            {...EXTERNAL}
            className="btn-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            Download DiwaKing
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Is &quot;King&quot; a claim about this app, or just a name?">
        <p>
          It's a name, not a claim. Royalty-themed words like &quot;King&quot; show up constantly across
          real-money gaming app names generally &mdash; they're a marketing choice, the same way
          &quot;Top,&quot; &quot;VIP,&quot; or &quot;Pro&quot; show up on apps that have nothing to do with
          each other. The word in DiwaKing's name isn't evidence about prize size, app quality, payout
          reliability, or any ranking against other apps. The same caution applies here as it would to any
          other app whose name includes a superlative or status word: judge the app on what you can verify,
          not on what its branding implies.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed about DiwaKing so far">
        <p>
          DiwaKing is an independent listing in the same visual network as Yono Arcade &mdash; the plain gold
          wordmark and Indian tricolor swoosh underline match the branding style used across that family.
          It is <strong>not confirmed to be built by the same developer as Yono Arcade</strong>. The package
          name associated with the download link above is <strong>{PACKAGE_NAME}</strong>. We haven't yet
          independently inspected the APK's version number or signing certificate, and DiwaKing isn't listed
          under that name on the Play Store &mdash; search there turns up only unrelated results, a pattern
          we've found for most apps in this family. No welcome bonus, launch date, or promo code has been
          confirmed yet.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Before installing anything that claims to be DiwaKing, confirm the package name matches{" "}
          <strong>{PACKAGE_NAME}</strong> &mdash; a mismatch means you're not looking at this app. 2. Once
          installed, check the requested permissions; a rummy-and-arcade app has no legitimate reason to ask
          for SMS or contacts access. 3. Treat any claimed promo code as unverified until it's confirmed
          inside the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4. Read
          our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account
          details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever the
          name of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is DiwaKing related to Yono Arcade?",
            answer:
              "It's an independent listing in the same visual network — same branding style — but it is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Does the name \"DiwaKing\" mean it offers bigger prizes or rankings?",
            answer:
              "No. \"King\" is a marketing word used widely across real-money app names and isn't evidence of prize size, quality, or any ranking. Nothing about that has been independently verified for this app.",
          },
          {
            question: "What's the package name for DiwaKing?",
            answer: `The package associated with our download link is ${PACKAGE_NAME}. Confirm this matches before installing anything else claiming to be this app.`,
          },
          {
            question: "Is there a promo code for DiwaKing?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
