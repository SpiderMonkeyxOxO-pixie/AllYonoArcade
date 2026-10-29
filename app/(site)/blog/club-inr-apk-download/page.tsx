import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Club INR APK Download & Promo Code: What's Confirmed So Far";
const META_TITLE = "Club INR APK Download & Promo Code: What's Confirmed So Far";
const DESCRIPTION =
  "Club INR isn't on the Play Store. Here's the direct download link, what the promo code actually unlocks, and what we could and couldn't confirm.";
const URL = "https://allyonoarcade.com/blog/club-inr-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/club-inr-apk-download.webp";
const PUBLISHED = "2026-10-29";
const LAST_REVIEWED = "2026-10-29";
const REFERRAL_LINK = "https://clubinr2.top/?code=WZJ9KYQMY2X&t=1781949863";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Club INR is a real-money games app whose name points directly at currency rather than one specific game. It isn't listed on the Play Store — our search turned up only unrelated apps using similar names. Our sponsored download link is below. The welcome bonus and minimum withdrawal haven't been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "Club INR APK Download", item: URL },
  ],
};

export default function ClubInrApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 29, 2026 &middot; Last reviewed: October 29, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/club-inr-apk-download.webp"
        alt="Club INR app icon with APK download button on a smartphone screen."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Club INR">
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
            Download Club INR (sponsored link)
          </a>
        </p>
        <p>
          The link carries a promo code parameter (<code>WZJ9KYQMY2X</code>) that should apply automatically on
          install. We haven&apos;t confirmed what it specifically unlocks beyond standard registration &mdash; don&apos;t
          assume it guarantees a particular bonus tier until you see it reflected in your own account.
        </p>
      </ContentSection>

      <ContentSection heading="Is Club INR on the Play Store?">
        <p>
          No. We checked the Play Store directly and found no official Club INR listing &mdash; only unrelated apps
          using similar names. That&apos;s consistent with how most apps in this network distribute: a direct APK
          download rather than a Play Store release.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Club INR is a real-money games app, and unlike most of its sibling apps on this network, its name points
          directly at currency rather than a specific game &mdash; a signal it&apos;s positioned as a general-purpose
          rupee-based platform rather than one title. We&apos;ve verified the download link above resolves and the
          app installs.
        </p>
      </ContentSection>

      <ContentSection heading="What's still unverified">
        <p>
          We haven&apos;t independently verified the welcome bonus amount, minimum withdrawal threshold, or KYC
          requirements inside the app &mdash; Club INR hasn&apos;t published these details anywhere we could check
          outside the app itself. We also haven&apos;t yet run our package-name, permission, and signing-certificate
          check, the same standard covered in our{" "}
          <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology. Treat any specific bonus figure
          you see elsewhere as unconfirmed until you see it inside your own account.
        </p>
      </ContentSection>

      <ContentSection heading="How Club INR compares to Yono Arcade">
        <p>
          If you&apos;re deciding between the two, see our{" "}
          <Link href="/blog/yono-arcade-vs-club-inr">Yono Arcade vs Club INR</Link> comparison for ownership and
          feature differences.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, regardless of how
          long a platform has been live.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is Club INR available on the Play Store?",
            answer: "No — it's a direct-download APK only. We found no official listing during our check.",
          },
          {
            question: "Does the promo code in the download link expire?",
            answer: "We can't confirm an expiry window. Use the link as soon as you can to be safe.",
          },
          {
            question: "Is Club INR part of Yono Arcade?",
            answer:
              "Not confirmed. See our Yono Arcade vs Club INR comparison for what we could independently check.",
          },
        ]}
      />
    </>
  );
}
