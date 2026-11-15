import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaFun Download APK, Promo Code & Guide";
const META_TITLE = "DiwaFun Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaFun's official download link and what we've verified about the app — including why the playful name doesn't change its real-money, 18+ classification.";
const URL = "https://allyonoarcade.com/blog/diwafun-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwafun.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwafunshare.cyou?pid=303955249&channel=2010005&pkg=com.diwafundiwa001.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaFun is an independent real-money gaming listing, not confirmed to be built by the same developer as Yono Arcade. Its download link is below. \"Fun\" describes the brand's tone, not its category — this is still a real-money app, and nothing about the casual name changes what applies before you play.";

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
    { "@type": "ListItem", position: 3, name: "DiwaFun APK Download", item: URL },
  ],
};

export default function DiwaFunApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Independent Listing" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2 mb-2 flex justify-center">
        <Image
          src="/images/platforms/diwafun.webp"
          alt="DiwaFun app icon — plain gold wordmark logo"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaFun">
        <p>
          Our sponsored download link is below. It is not an official app store link, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate DiwaFun.
        </p>
        <p>
          <a
            href={REFERRAL_LINK}
            {...EXTERNAL}
            className="btn-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            Download DiwaFun (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="A playful name, a real-money app">
        <p>
          &quot;Fun&quot; is a lighter word than most names in this category use, but it describes tone,
          not what the app actually is. DiwaFun is classified in this directory the same way every other
          app on it is &mdash; a real-money gaming platform, not a free arcade or casual game.
        </p>
        <p>
          That classification carries the same obligations regardless of branding: the 18+ age
          requirement applies, the responsible-gaming notice below applies, and the same caution about
          unverified bonus claims applies, exactly as it would for an app with a far more serious-sounding
          name.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaFun&apos;s icon is a plain gold wordmark, consistent with the branding style used across its
          network. Its Android package name is <code>com.diwafundiwa001.app</code>. We haven&apos;t yet
          independently inspected the APK&apos;s signing certificate or version history, and no bonus
          amount, launch date, or specific feature has been confirmed beyond what&apos;s stated here.
        </p>
      </ContentSection>

      <ContentSection heading="Before you install DiwaFun">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2.
          Once installed, check the app&apos;s requested permissions &mdash; a real-money gaming app has
          no legitimate reason to ask for SMS or contacts access, casual name or not. 3. Treat any
          claimed promo code as unverified until it&apos;s confirmed inside the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4.
          Read our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any
          account details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever
          the name of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is DiwaFun a casual game or a real-money app?",
            answer:
              "It's a real-money gaming app. The name's casual tone doesn't change its classification — the same 18+ and responsible-gaming rules apply as for any other listing here.",
          },
          {
            question: "Is DiwaFun available for download now?",
            answer: "Yes — our sponsored download link is above.",
          },
          {
            question: "Is DiwaFun built by the same developer as Yono Arcade?",
            answer:
              "Not confirmed. DiwaFun is an independent listing in our directory, with no verified connection to Yono Arcade or its developer.",
          },
          {
            question: "Is there a confirmed promo code for DiwaFun?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
