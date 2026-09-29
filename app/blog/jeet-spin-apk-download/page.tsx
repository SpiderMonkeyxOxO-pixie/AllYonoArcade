import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import BulletList from "../../components/sections/BulletList";
import ComparisonTable from "../../components/sections/ComparisonTable";
import { requirePublished } from "../../lib/schedule";

const TITLE = "Jeet Spin APK Download, Promo Code & Launch Day Review";
const META_TITLE = "Jeet Spin APK Download & Promo Code — Launch Day Review 2026";
const DESCRIPTION =
  "Jeet Spin launches 30 Sep 2026 as the newest spin-and-win app on the Yono network. Download link, promo code status, app features and an honest first look.";
const URL = "https://allyonoarcade.com/blog/jeet-spin-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/jeet-spin-apk-download.webp";
const PUBLISHED = "2026-09-29";

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
        answer="Jeet Spin is a spin-and-win app launching on 30 September 2026 as part of the Yono network. No APK download link or promo code has been confirmed yet — this page will update with verified details once the app goes live."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: September 29, 2026 · Pre-launch listing — details will be updated after the app goes live
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/jeet-spin-apk-download.webp"
        alt="Jeet Spin APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is Jeet Spin?">
        <p>
          Jeet Spin is a spin-format gaming app scheduled to launch on 30 September 2026. Its branding
          follows the green-diamond icon style used across other apps in the Yono network, and early
          promotional material positions it as a &quot;victory-themed&quot; spin-and-win platform.
        </p>
        <p>
          The name combines &quot;Jeet&quot; (Hindi for victory) with &quot;Spin&quot;, suggesting a
          lucky-wheel or reel-spin mechanic. As a pre-launch listing, we have not yet installed or
          tested the app — everything on this page comes from publicly available promotional material
          and is subject to change.
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
            ["APK download link", "Not yet available", "Will be added after launch"],
            ["Google Play listing", "Not found", "As of 29 September 2026"],
            ["Expected launch", "30 September 2026", "Date from promotional material"],
            ["File size", "Not yet known", "Will be verified post-launch"],
            ["Minimum Android", "Not yet confirmed", "Likely Android 5.0+"],
            ["Category", "Spin / Slots", "Reel-and-spin format"],
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
          No Jeet Spin promo code has been announced as of 29 September 2026. Many apps in the Yono
          network offer a welcome bonus or first-deposit promo code at launch, but nothing has been
          confirmed for Jeet Spin.
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

      <Callout tone="warning" title="Before you download" badge="pending">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Wait for the official launch before downloading. Pre-launch APK links claiming to be Jeet
            Spin are not from the official source.
          </li>
          <li>
            Once available, compare the package name and signer certificate to confirm authenticity —
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
            question: "When does Jeet Spin launch?",
            answer:
              "Jeet Spin is expected to launch on 30 September 2026. This page will be updated with a download link and full review once the app goes live.",
          },
          {
            question: "Is there a Jeet Spin promo code?",
            answer:
              "No promo code has been announced yet. Check our promo codes page after launch for the latest codes across all platforms.",
          },
          {
            question: "Where can I download the Jeet Spin APK?",
            answer:
              "The download link is not yet available. Once live, the Download button on this page will link to Jeet Spin's own website. AllYonoArcade.com does not host APK files.",
          },
          {
            question: "Is Jeet Spin safe to download?",
            answer:
              "We cannot assess app safety before launch. Once the APK is available, we will inspect its package name, signer certificate and permissions and update this page.",
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
