import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import { requirePublished } from "../../../lib/schedule";

const TITLE = "Jeet Spin APK Download, Promo Code & Launch Day Review";
const META_TITLE = "Jeet Spin APK Download & Promo Code — Launch Day Review 2026";
const DESCRIPTION =
  "Jeet Spin launched 30 Sep 2026 and is live on the Yono network. Download link, promo code status, app features and an honest review.";
const URL = "https://allyonoarcade.com/blog/jeet-spin-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/jeet-spin-apk-download.webp";
const PUBLISHED = "2026-09-29";
const LAST_REVIEWED = "2026-11-04";
const DOWNLOAD_URL = "https://www.jeetspin12.com/?code=SYHPBD5M972&t=1790735445";

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
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Jeet Spin APK Download", item: URL },
  ],
};

export default function JeetSpinApkDownloadPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Launch Review"
        title={TITLE}
        answer="Jeet Spin launched on 30 September 2026 as part of the Yono network. The APK download is live; no welcome bonus or promo code has been confirmed for it yet."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: September 29, 2026 · Last reviewed: November 4, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/jeet-spin-apk-download.webp"
        alt="Jeet Spin APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is Jeet Spin?">
        <p>
          Jeet Spin is a spin-format gaming app that launched on 30 September 2026. Its branding
          follows the green-diamond icon style used across other apps in the Yono network, and it's
          positioned as a &quot;victory-themed&quot; spin-and-win platform.
        </p>
        <p>
          The name combines &quot;Jeet&quot; (Hindi for victory) with &quot;Spin&quot;, suggesting a
          lucky-wheel or reel-spin mechanic. We have not independently tested the app ourselves — the
          details below come from the operator's own listing, not a hands-on review.
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
            ["App name", "Jeet Spin", "Victory-themed spin platform"],
            ["APK download link", "Live", "See the download link below"],
            ["Google Play listing", "Not found", "As of this review"],
            ["Launched", "30 September 2026", "Per the operator's own listing"],
            ["File size", "Not confirmed", "Not stated by the operator"],
            ["Minimum Android", "Not confirmed", "Not stated by the operator"],
            ["Category", "Spin / Slots", "Reel-and-spin format"],
          ]}
        />
        <p>
          <a href={DOWNLOAD_URL} target="_blank" rel="sponsored nofollow noopener noreferrer">
            Get Jeet Spin
          </a>{" "}
          goes directly to Jeet Spin&apos;s own site. AllYonoArcade.com does not host APK files, and
          this is not an endorsement — verify the package name and permissions yourself before
          installing.
        </p>
      </ContentSection>

      <ContentSection heading="Promo code status">
        <p>
          No welcome bonus or promo code has been confirmed for Jeet Spin as of this review. Many apps
          in the Yono network offer one, but nothing has been announced for Jeet Spin specifically.
        </p>
        <p>
          Check our <Link href="/promo-codes">promo codes page</Link> for daily-updated codes across
          all platforms. If a Jeet Spin code is released, it will be added there.
        </p>
      </ContentSection>

      <ContentSection heading="What to expect from the app">
        <p>
          Based on patterns across other spin-category apps in the Yono network:
        </p>
        <BulletList
          items={[
            "A spin-wheel or reel-based main game mechanic",
            "Welcome bonus on first registration (amount unconfirmed)",
            "First-deposit bonus (percentage and cap unconfirmed)",
            "UPI and bank transfer withdrawal options",
            "Referral program with per-invite rewards",
            "Daily login rewards and lucky-spin features",
          ]}
        />
        <p>
          These are expectations based on how similar apps in the network operate, not confirmed Jeet
          Spin features. Treat promotional claims from any platform with appropriate caution.
        </p>
      </ContentSection>

      <ContentSection heading="How Jeet Spin fits into the Yono network">
        <p>
          Jeet Spin follows a familiar pattern: green-diamond branding, a similar APK distribution
          model (sideloaded from the platform&apos;s own site, not Google Play), and a spin-format
          game mechanic. If it follows the same build pattern as Yono Arcade and others, it is likely
          built on Cocos2d-x or a similar framework.
        </p>
        <p>
          For more on how these apps share infrastructure and branding, see our{" "}
          <Link href="/blog/money-rummy-and-yono-network-lookalikes">
            network lookalike analysis
          </Link>.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Before you download" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Only download from the link on this page or Jeet Spin&apos;s own site. Any other site
            claiming to offer the Jeet Spin APK is not an official source.
          </li>
          <li>
            Compare the package name and signer certificate to confirm authenticity before installing —
            see our <Link href="/blog/yono-arcade-apk-review">APK review guide</Link> for how.
          </li>
          <li>
            Online money games are prohibited in India since 1 May 2026 under the Online Gaming Act,
            2025. Free spin games with no money or stakes are not affected.
          </li>
        </ul>
      </Callout>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Jeet Spin, Yono Arcade, or any app operator. We do
          not host APK files. Read our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Jeet Spin questions"
        items={[
          {
            question: "When did Jeet Spin launch?",
            answer:
              "Jeet Spin launched on 30 September 2026, per the operator's own listing.",
          },
          {
            question: "Is there a Jeet Spin promo code?",
            answer:
              "No welcome bonus or promo code has been confirmed as of this review. Check our promo codes page for the latest codes across all platforms.",
          },
          {
            question: "Where can I download the Jeet Spin APK?",
            answer:
              "The download link on this page goes directly to Jeet Spin's own website. AllYonoArcade.com does not host APK files.",
          },
          {
            question: "Is Jeet Spin safe to download?",
            answer:
              "We have not independently tested the app. Compare the package name and signer certificate against what's shown on Jeet Spin's own site before installing, and review the permissions it requests.",
          },
          {
            question: "Is Jeet Spin the same as other Yono spin apps?",
            answer:
              "Jeet Spin is a separate app with its own branding, but it shares the green-diamond icon style used across the Yono network. Whether it shares infrastructure or code with other spin apps has not been confirmed.",
          },
        ]}
      />
    </>
  );
}
