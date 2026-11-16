import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Win Rummy APK Download: Promo Code & Guide";
const META_TITLE = "Win Rummy APK Download: Promo Code & Guide";
const DESCRIPTION =
  "Win Rummy APK download link, what we've verified about the app, and today's promo code status — plus what's still unconfirmed before you install it.";
const URL = "https://allyonoarcade.com/blog/win-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/win-rummy-apk-download.webp";
const PUBLISHED = "2026-11-16";
const LAST_REVIEWED = "2026-11-16";
const REFERRAL_LINK = "https://www.winrummy10.com/?code=8JT9D83WCC3&t=1785293043";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Win Rummy is live, with our sponsored download link below. The name is outcome-focused, paired with a crown-and-card-suit icon similar to others in this network — it's a standalone app with its own sign-up and referral system. No welcome bonus or promo code has been independently confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "Win Rummy APK Download", item: URL },
  ],
};

export default function WinRummyApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 16, 2026 &middot; Last reviewed: November 16, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/win-rummy-apk-download.webp"
        alt="Win Rummy app branding with crown-and-card-suit logo on a smartphone download screen"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Win Rummy">
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
            Download Win Rummy (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Win Rummy is not listed under that name on the Play Store &mdash; search results there show only
          unrelated apps, the same pattern we&apos;ve found for most platforms in this family. We haven&apos;t yet
          independently inspected the Win Rummy APK&apos;s package name, version number, or signing certificate,
          so we can&apos;t confirm whether it shares infrastructure with any other app in this network. The name
          pairs an outcome-focused word (&quot;Win&quot;) with a crown-and-card-suit icon similar to others in this
          family, but that&apos;s a branding observation, not confirmation of common ownership.
        </p>
      </ContentSection>

      <ContentSection heading="Is there a Win Rummy promo code?">
        <p>
          Not confirmed. We have not verified a welcome bonus amount, a working promo code, or a specific game
          count for Win Rummy &mdash; if you see a figure quoted elsewhere, treat it as unverified until it&apos;s
          confirmed inside the app itself. See{" "}
          <Link href="/blog/promo-codes-for-other-yono-apps-which-we-track">
            today&apos;s promo code status
          </Link>{" "}
          across the apps we track, and note that a Win Rummy code will not work inside Yono Arcade or any other
          app in this family, and vice versa.
        </p>
      </ContentSection>

      <ContentSection heading="Win Rummy vs Yono Arcade">
        <p>
          If you&apos;re trying to work out how Win Rummy&apos;s games and app features actually compare to Yono
          Arcade&apos;s &mdash; rather than just getting the APK &mdash; see our full{" "}
          <Link href="/blog/win-rummy-vs-yono-arcade">Win Rummy vs Yono Arcade comparison</Link>, which covers game
          types, access, and Mall tools side by side.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s requested permissions &mdash; a rummy app has no legitimate reason to
          request SMS or contacts access. 3. Treat any claimed promo code or bonus figure as unverified until
          it&apos;s confirmed inside the app itself &mdash; see{" "}
          <Link href="/blog/promo-codes-for-other-yono-apps-which-we-track">today&apos;s promo code status</Link>{" "}
          across the apps we track. 4. Read our{" "}
          <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account or payment
          details with any app in this family.
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
          { question: "Is Win Rummy available for download now?", answer: "Yes — our sponsored link is above." },
          {
            question: "Is Win Rummy on the Play Store?",
            answer:
              "Not under that name — search results there show only unrelated apps. The download comes from its own website.",
          },
          {
            question: "Is there a promo code for Win Rummy?",
            answer:
              "None has been independently confirmed yet. Check our promo codes tracker for the current status, and note that a Win Rummy code will not work inside Yono Arcade or other apps in this family.",
          },
          {
            question: "Is Win Rummy the same as Yono Arcade?",
            answer:
              "No. They share some visual branding conventions used across this network, but Win Rummy is a separate app with its own download link and account system. See our full Win Rummy vs Yono Arcade comparison for the detailed differences.",
          },
          {
            question: "Has the Win Rummy APK been independently inspected?",
            answer:
              "Not yet — we haven't verified its package name, version number, or signing certificate, so we can't confirm whether it shares infrastructure with any other app in this family.",
          },
        ]}
      />
    </>
  );
}
