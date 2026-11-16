import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "123 Rummy APK Download & Promo Code — Live Now";
const META_TITLE = "123 Rummy APK Download & Promo Code — Live Now";
const DESCRIPTION =
  "123 Rummy launched 16 Nov 2026, 8:00 AM IST, as a real-money rummy app on the Yono network. Download link, promo code status, and an honest first look.";
const URL = "https://allyonoarcade.com/blog/123-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/123-rummy.webp";
const PUBLISHED = "2026-11-10";
const LAST_REVIEWED = "2026-11-16";
const REFERRAL_LINK = "https://www.123rummy2.com/?code=HT9PS5WTMED&t=1794797556";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "123 Rummy launched 16 November 2026 at 8:00 AM IST on the Yono network. No welcome bonus or promo code has been independently confirmed yet, and the APK itself hasn't been inspected for package name, permissions, or signing certificate — this page will update as those are verified.";

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
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "123 Rummy APK Download", item: URL },
  ],
};

export default function Rummy123ApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 10, 2026 &middot; Last reviewed: November 16, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/platforms/123-rummy.webp"
        alt="123 Rummy APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is 123 Rummy?">
        <p>
          123 Rummy is a real-money rummy app that launched 16 November 2026 as the newest entry in
          the Yono network. We have not yet independently installed or tested the app — everything on
          this page beyond the download link comes from what&apos;s publicly confirmed so far, which is
          limited to the app name, category, and launch date.
        </p>
        <p>
          For the full list of apps in the network, see the{" "}
          <Link href="/blog/all-yono-games">all Yono games directory</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Download Status">
        <p>
          Download 123 Rummy here. It is not an official store link, and we may earn a commission if you use it.
          AllYonoArcade.com does not host APK files or operate 123 Rummy.
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
            Download 123 Rummy
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What's Still Unverified">
        <p>
          No welcome bonus or promo code has been independently confirmed for 123 Rummy. We also
          haven&apos;t yet run our usual technical check on the APK &mdash; package name, permission
          list, signing certificate &mdash; the same standard covered in our{" "}
          <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology. This page will be
          updated once that&apos;s done.
        </p>
      </ContentSection>

      <ContentSection heading="Promo Code Status">
        <p>
          No fixed 123 Rummy promo code has been confirmed yet. Check our{" "}
          <Link href="/promo-codes">promo codes page</Link> for daily-updated codes across all
          platforms &mdash; if a 123 Rummy code is released, it will be added there.
        </p>
      </ContentSection>

      <Callout tone="info" title="Pre-launch listing no longer applies">
        <p>
          AllYonoArcade.com does not develop, host, or operate 123 Rummy or any other app in this
          directory. This page was originally a pre-launch listing; it now reflects the live app and
          will keep updating as package, permission, and bonus details get verified.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Has 123 Rummy launched?",
            answer: "Yes — it launched 16 November 2026 at 8:00 AM IST. The download link is above.",
          },
          {
            question: "Where can I download 123 Rummy?",
            answer:
              "The link is now live — use the download button in the \"Download Status\" section above.",
          },
          {
            question: "Is there a 123 Rummy promo code?",
            answer:
              "No code has been independently confirmed yet. Check our promo codes page for the current status.",
          },
          {
            question: "What is 123 Rummy's welcome bonus?",
            answer:
              "No welcome bonus has been independently confirmed yet. This page will be updated once that's verified.",
          },
        ]}
      />
    </>
  );
}
