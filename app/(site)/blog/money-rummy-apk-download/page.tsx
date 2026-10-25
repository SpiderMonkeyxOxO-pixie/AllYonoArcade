import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Money Rummy APK Download: What's Confirmed So Far";
const META_TITLE = "Money Rummy APK Download: What's Confirmed So Far";
const DESCRIPTION =
  "Money Rummy launched 9 September 2026. Here's the download link, what's confirmed about the app, and what's still unverified before you install it.";
const URL = "https://allyonoarcade.com/blog/money-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/money-rummy.jpg";
const PUBLISHED = "2026-10-25";
const LAST_REVIEWED = "2026-10-25";
const REFERRAL_LINK = "https://moneyrummyff.com/?code=T1XR7S7YJ9T&t=1788922546";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Money Rummy launched 9 September 2026. Our sponsored download link is below. The APK itself hasn't been independently inspected yet — package name, permissions, and signing certificate are still unverified, and no welcome bonus or promo code has been confirmed.";

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
    { "@type": "ListItem", position: 3, name: "Money Rummy APK Download", item: URL },
  ],
};

export default function MoneyRummyApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 25, 2026 &middot; Last reviewed: October 25, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/platforms/money-rummy.jpg"
        alt="Money Rummy app icon, a real-money rummy game that launched 9 September 2026."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Money Rummy">
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
            Download Money Rummy (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Money Rummy is listed as a rummy-category real-money game that launched 9 September 2026. It has been
          reported to be the 57th platform on the Yono network, a claim made by the app&apos;s own operator and not
          independently verified by us. We haven&apos;t yet independently inspected the APK&apos;s package name,
          version number, or signing certificate.
        </p>
      </ContentSection>

      <ContentSection heading="What's still unverified">
        <p>
          We&apos;ll run the same technical check we run on every app in this category &mdash; package name,
          permission list, signing certificate &mdash; and update this page once that&apos;s done, the same
          standard covered in our <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology. No
          welcome bonus or promo code has been confirmed yet either, despite figures circulating on other sites.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a rummy app has no legitimate reason to request SMS or
          contacts access. 3. Treat any claimed bonus or promo code as unverified until it&apos;s confirmed inside
          the app itself. See our <Link href="/all-games/rummy-91">Rummy 91</Link> and{" "}
          <Link href="/blog/vip-rummy-apk-download">VIP Rummy</Link> coverage for the same checks on other recent
          launches.
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
            question: "Is Money Rummy available for download now?",
            answer: "Yes — it launched 9 September 2026. Our sponsored link is above.",
          },
          {
            question: "Is Money Rummy really the 57th Yono platform?",
            answer:
              "That's a claim made by the app's own operator, not something we've independently verified.",
          },
          {
            question: "Is Money Rummy safe to install?",
            answer:
              "Not yet independently verified — we haven't inspected the APK's package name, permissions, and signing certificate. Check back as we update this page.",
          },
          {
            question: "Is there a promo code for Money Rummy?",
            answer: "None has been confirmed yet. We'll update this page once (and if) one is verified.",
          },
        ]}
      />
    </>
  );
}
