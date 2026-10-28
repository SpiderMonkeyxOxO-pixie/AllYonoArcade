import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "101z APK Download: What's Confirmed & Promo Code Status";
const META_TITLE = "101z APK Download: What's Confirmed & Promo Code Status";
const DESCRIPTION =
  "101z APK download link, what we've verified about the app, and today's promo code status — plus what's still unconfirmed before you install it.";
const URL = "https://allyonoarcade.com/blog/101z-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/101z-apk-download.webp";
const PUBLISHED = "2026-10-28";
const LAST_REVIEWED = "2026-10-28";
const REFERRAL_LINK = "https://101z19.com/?code=398FMU1E4UC&t=1781948650";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "101z is live, with our sponsored download link below. The name is short and code-like, which is why people often assume it's a promo code rather than an app — it's a standalone platform with its own download page. The APK itself hasn't been independently inspected yet, and no welcome bonus or promo code has been confirmed.";

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
    { "@type": "ListItem", position: 3, name: "101z APK Download", item: URL },
  ],
};

export default function HundredOneZApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 28, 2026 &middot; Last reviewed: October 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/101z-apk-download.webp"
        alt="101z app download screen on a smartphone, a platform in the same network as Yono Arcade"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download 101z">
        <p>
          Our sponsored referral link is below. It is not an official store link, and we may earn a commission if
          you use it.
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
            Download 101z (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Is &quot;101z&quot; a promo code or an app?">
        <p>
          It's an app. The short, code-like name leads some people to search for &quot;101z&quot; expecting a
          promo code for a different platform, but 101z is a standalone download with its own sign-up and
          referral system &mdash; the same green-diamond branding used elsewhere in this network, with its own
          separate download link.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          101z is not listed under that name on the Play Store &mdash; search results there show only unrelated
          apps, which is the same pattern we&apos;ve found for most platforms in this family. We haven&apos;t yet
          independently inspected the APK&apos;s package name, version number, or signing certificate.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a rummy-and-arcade app has no legitimate reason to
          request SMS or contacts access. 3. Treat any claimed promo code as unverified until it&apos;s confirmed
          inside the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4. Read our{" "}
          <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever the name
          of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is 101z a promo code?",
            answer:
              "No. 101z is the name of a standalone app, not a promo code. If you're looking for a code to redeem inside a different app, check that app's own promo code page instead.",
          },
          {
            question: "Is 101z available for download now?",
            answer: "Yes — our sponsored link is above.",
          },
          {
            question: "Is 101z on the Play Store?",
            answer: "Not under that name — search results there show only unrelated apps. The download comes from its own website.",
          },
          {
            question: "Is there a promo code for 101z?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
