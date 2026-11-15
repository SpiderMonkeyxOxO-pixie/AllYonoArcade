import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaBonus Download APK, Promo Code & Guide";
const META_TITLE = "DiwaBonus Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaBonus's official download link and what we've actually verified about the app — including why a name with \"bonus\" in it isn't proof of a bigger bonus.";
const URL = "https://allyonoarcade.com/blog/diwabonus-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwabonus.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwabonusshare.win?pid=498064801&channel=2010003&pkg=com.diwabonus003.com";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaBonus is an independent real-money gaming listing, not confirmed to be built by the same developer as Yono Arcade. Its download link is below. The word \"Bonus\" is part of the brand name, not a verified claim — we haven't confirmed any specific bonus amount, launch date, or feature beyond what's stated here.";

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
    { "@type": "ListItem", position: 3, name: "DiwaBonus APK Download", item: URL },
  ],
};

export default function DiwaBonusApkDownloadPage() {
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
          src="/images/platforms/diwabonus.webp"
          alt="DiwaBonus app icon — plain gold wordmark logo"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaBonus">
        <p>
          Our sponsored download link is below. It is not an official app store link, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate DiwaBonus.
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
            Download DiwaBonus (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Does the name &quot;DiwaBonus&quot; mean a bigger bonus?">
        <p>
          Not by itself. Most apps in this category describe their incentive somewhere in their
          marketing copy or on-screen banners; DiwaBonus just puts that word directly in its brand name
          instead. That's a naming choice the operator made, not evidence that its welcome bonus is
          larger, more reliable, or easier to claim than any other app's.
        </p>
        <p>
          Whatever terms DiwaBonus actually offers &mdash; amount, eligibility, wagering conditions, if
          any &mdash; are set entirely by the app's own operator and haven't been independently verified
          by this site. Treat the name as a label, not a guarantee, the same way you would for any other
          listing here.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaBonus&apos;s icon is a plain gold wordmark, consistent with the branding style used across
          its network. Its Android package name is <code>com.diwabonus003.com</code>. We haven&apos;t yet
          independently inspected the APK&apos;s signing certificate or version history, and no bonus
          figure, launch date, or specific feature has been confirmed beyond what&apos;s stated here.
        </p>
      </ContentSection>

      <ContentSection heading="Before you install DiwaBonus">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2.
          Once installed, check the app&apos;s requested permissions &mdash; a real-money gaming app has
          no legitimate reason to ask for SMS or contacts access. 3. Treat any bonus figure you see
          advertised elsewhere as unverified until it&apos;s confirmed inside the app itself &mdash; see{" "}
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
            question: "Does DiwaBonus actually offer a bigger bonus because of its name?",
            answer:
              "No. The name is a marketing choice by the app's own operator, not verified proof of a larger or more reliable bonus than any other app in this category.",
          },
          {
            question: "Is DiwaBonus available for download now?",
            answer: "Yes — our sponsored download link is above.",
          },
          {
            question: "Is DiwaBonus built by the same developer as Yono Arcade?",
            answer:
              "Not confirmed. DiwaBonus is an independent listing in our directory, with no verified connection to Yono Arcade or its developer.",
          },
          {
            question: "What is DiwaBonus's actual welcome bonus amount?",
            answer:
              "Not independently confirmed. Any figure advertised inside the app or elsewhere hasn't been verified by this site — check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
