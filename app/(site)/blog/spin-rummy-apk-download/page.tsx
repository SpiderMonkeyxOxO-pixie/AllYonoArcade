import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Spin Rummy APK Download: Launch-Day Status";
const META_TITLE = "Spin Rummy APK Download: Launch-Day Status";
const DESCRIPTION =
  "Spin Rummy launched 30 October 2026. Here's the download link, what's confirmed about the APK, and what's still unverified.";
const URL = "https://allyonoarcade.com/blog/spin-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/spin-rummy-apk-download.webp";
const PUBLISHED = "2026-10-30";
const LAST_REVIEWED = "2026-10-30";
const REFERRAL_LINK = "https://spinrummy.cx/?code=31X42Q6DH9P&t=1793332810";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Spin Rummy launched 30 October 2026. Our sponsored download link is below. The APK itself hasn't been independently inspected yet — package name, permissions, and signing certificate are still unverified, and no welcome bonus or promo code has been confirmed.";

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
    { "@type": "ListItem", position: 3, name: "Spin Rummy APK Download", item: URL },
  ],
};

export default function SpinRummyApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 30, 2026 &middot; Last reviewed: October 30, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/spin-rummy-apk-download.webp"
        alt="Spin Rummy app download screen on a smartphone, a real-money rummy game that launched 30 October 2026."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Spin Rummy">
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
            Download Spin Rummy (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Spin Rummy is listed as a rummy-category real-money game, pairing a spin-wheel icon with the rummy format
          in the same green-diamond branding used elsewhere in this network. It launched 30 October 2026. We
          haven&apos;t yet independently inspected the APK&apos;s package name, version number, or signing
          certificate.
        </p>
      </ContentSection>

      <ContentSection heading="What's still unverified">
        <p>
          We&apos;ll run the same technical check we run on every app in this category &mdash; package name,
          permission list, signing certificate &mdash; and update this page once that&apos;s done, the same
          standard covered in our <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology. No
          welcome bonus or promo code has been confirmed yet either.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a rummy app has no legitimate reason to request SMS or
          contacts access. 3. Treat any claimed bonus or promo code as unverified until it&apos;s confirmed inside
          the app itself. See our <Link href="/blog/money-rummy-apk-download">Money Rummy</Link> and{" "}
          <Link href="/blog/vip-rummy-apk-download">VIP Rummy</Link> coverage for the same checks on other recent
          launches.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, regardless of how
          new a platform is.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is Spin Rummy available for download now?",
            answer: "Yes — it launched 30 October 2026. Our sponsored link is above.",
          },
          {
            question: "Is Spin Rummy safe to install?",
            answer:
              "Not yet independently verified — we haven't inspected the APK's package name, permissions, and signing certificate. Check back as we update this page.",
          },
          {
            question: "Is there a promo code at launch?",
            answer: "None has been confirmed yet. We'll update this page once (and if) one is verified.",
          },
        ]}
      />
    </>
  );
}
