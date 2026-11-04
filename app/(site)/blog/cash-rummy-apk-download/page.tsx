import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import { requirePublished } from "../../../lib/schedule";

const TITLE = "Cash Rummy APK Download & Promo Code — Launching 5 November 2026";
const META_TITLE = "Cash Rummy APK Download & Promo Code — Launching 5 Nov 2026";
const DESCRIPTION =
  "Cash Rummy launches 5 Nov 2026, 8:00 AM IST, as the newest real-money rummy app on the Yono network. What's confirmed so far, and what to check once it goes live.";
const URL = "https://allyonoarcade.com/blog/cash-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/cash-rummy.webp";
const PUBLISHED = "2026-11-04";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: META_TITLE, description: DESCRIPTION, url: URL, images: [{ url: IMAGE }] },
  twitter: { title: META_TITLE, description: DESCRIPTION },
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
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Cash Rummy APK Download", item: URL },
  ],
};

export default function CashRummyApkDownloadPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Launching Soon"
        title={TITLE}
        answer="Cash Rummy is a real-money rummy app launching 5 November 2026 at 8:00 AM IST as part of the Yono network. No APK download link or promo code has been confirmed yet — this page will update with verified details once the app goes live."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 4, 2026 · Pre-launch listing — details will be updated after the app goes live
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/platforms/cash-rummy.webp"
        alt="Cash Rummy APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is Cash Rummy?">
        <p>
          Cash Rummy is a real-money rummy app scheduled to launch on 5 November 2026 as the newest
          entry in the Yono network. As a pre-launch listing, we have not yet installed or tested the
          app — everything on this page comes from what&apos;s publicly confirmed so far, which is
          limited to the app name, category, and launch date.
        </p>
        <p>
          For the full list of apps in the network, see the{" "}
          <Link href="/blog/all-yono-games">all Yono games directory</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Download status">
        <ComparisonTable
          headers={["Field", "Status", "Note"]}
          rows={[
            ["App name", "Cash Rummy", "Real-money rummy app"],
            ["APK download link", "Not yet available", "Will be added after launch"],
            ["Google Play listing", "Not found", "As of 4 November 2026"],
            ["Expected launch", "5 November 2026, 8:00 AM IST", "Date and time as announced"],
            ["File size", "Not yet known", "Will be verified post-launch"],
            ["Minimum Android", "Not yet confirmed", "Likely Android 5.0+"],
            ["Category", "Rummy", "Real-money card game"],
          ]}
        />
        <p>
          This table will be updated with verified details once the APK becomes available. Download
          links on AllYonoArcade.com always point to the platform&apos;s own website — we do not host
          APK files.
        </p>
      </ContentSection>

      <ContentSection heading="Promo code status">
        <p>
          No Cash Rummy promo code has been announced as of 4 November 2026. Many apps in the Yono
          network offer a welcome bonus or first-deposit promo code at launch, but nothing has been
          confirmed for Cash Rummy.
        </p>
        <p>
          Check our <Link href="/promo-codes">promo codes page</Link> for daily-updated codes across
          all platforms. If a Cash Rummy code is released, it will be added there.
        </p>
      </ContentSection>

      <Callout tone="info" title="Pre-launch listing">
        <p>
          AllYonoArcade.com does not develop, host, or operate Cash Rummy or any other app in this
          directory. This page is a pre-launch listing based on publicly available information and
          will be updated with tested, verified details once the app is live.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "When does Cash Rummy launch?",
            answer: "Cash Rummy is scheduled to launch on 5 November 2026 at 8:00 AM IST.",
          },
          {
            question: "Where can I download Cash Rummy?",
            answer:
              "The download link is not yet available. Once Cash Rummy launches, the official download link will be added to this page.",
          },
          {
            question: "Is there a Cash Rummy promo code?",
            answer:
              "No code has been announced yet. Check our promo codes page after launch for the current status.",
          },
          {
            question: "What is Cash Rummy's welcome bonus?",
            answer:
              "No welcome bonus has been confirmed yet. This page will be updated once that's announced.",
          },
        ]}
      />
    </>
  );
}
