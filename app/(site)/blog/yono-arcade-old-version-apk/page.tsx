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
import ScheduledLink from "../../../components/sections/ScheduledLink";

const TITLE = "Yono Arcade Old Version APK: Should You Install One?";
const META_TITLE = "Yono Arcade Old Version APK: Latest vs Old, and the Risks";
const DESCRIPTION =
  "Looking for a Yono Arcade old version APK? The current version, why older builds fail or can't be installed, and how to tell a genuine older file from a repackaged one.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-old-version-apk";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-latest-version-vs-old-version.webp";
const PUBLISHED = "2026-10-01";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade Old Version APK", item: URL },
  ],
};

export default function YonoArcadeOldVersionPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Versions"
        title={TITLE}
        answer={"Usually not. YonoArcade.com offers only its current build (version 1.1.9 on 28 September 2026) and no archive of older versions, so an \"old version APK\" always comes from a third-party site. Older builds may be refused by the app's servers, can't be installed over a newer one, and are easy to repackage."}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 1, 2026 · Version details from the APK served by YonoArcade.com on September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-latest-version-vs-old-version.webp"
        alt="Yono Arcade latest version vs old version comparison"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="The current version">
        <ComparisonTable
          headers={["Detail", "Current build", "How to check yours"]}
          rows={[
            ["Version", "1.1.9 (code 119)", "Settings → Apps → Yono Arcade → App details"],
            ["Uploaded", "18 September 2026", "Not shown on the phone; compare the version number"],
            ["Package name", "com.arcade.games.yo", "Same App details screen"],
            ["Signer", "\"lamislot\" certificate", "An update signed by anyone else won't install"],
            ["Minimum Android", "Android 5.0", "Settings → About phone → Android version"],
          ]}
        />
        <p>
          The full technical breakdown is in our{" "}
          <Link href="/blog/yono-arcade-apk-review">Yono Arcade APK review</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Why people look for an old version">
        <BulletList
          items={[
            "The new version won't install on an old phone. Version 1.1.9 supports Android 5.0 and later, so this is rarely the real cause; see our not-installing guide.",
            "An update broke something (crashes, endless loading). Clearing the cache or reinstalling the current build usually fixes it.",
            "A claim that an older version \"pays more\" or has \"better luck\". In real-money apps like this, results and balances are handled on the operator's servers, not decided by the version on your phone.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why an old version usually fails">
        <ComparisonTable
          headers={["Problem", "What happens", "Why"]}
          rows={[
            ["Server rejects it", "\"Please update\" screen or login fails", "Apps like this stop accepting outdated builds"],
            ["Can't install over a newer one", "\"App not installed\"", "Android blocks installing a lower version over a higher one"],
            ["Different signer", "\"App not installed\" or signature error", "The file was re-signed, so it isn't from the same source"],
            ["Uninstall to force it", "Local data and settings are lost", "And you are then running a file you can't verify"],
          ]}
        />
      </ContentSection>

      <Callout tone="warning" title="How to tell a genuine older build from a repackaged one" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            The package name must be <code>com.arcade.games.yo</code>. Anything else is a different
            app.
          </li>
          <li>
            It must install as an update over your current Yono Arcade without uninstalling. If
            Android refuses because of the signature, it was signed by someone else.
          </li>
          <li>
            Sites offering &quot;old version&quot;, &quot;mod&quot; or &quot;hack&quot; APKs commonly
            re-sign files. Treat any file that needs you to uninstall first as unverified.
          </li>
        </ul>
      </Callout>

      <ContentSection heading="Is there a Yono Arcade old version for iPhone?">
        <p>
          No. On 28 September 2026 there was no Yono Arcade app on the Apple App Store, and
          YonoArcade.com&apos;s download script only serves an Android APK file, which can&apos;t be
          installed on an iPhone. A page offering a Yono Arcade iOS download, old or new, is not from
          the operator.
        </p>
      </ContentSection>

      <ContentSection heading="What to do instead">
        <p>
          Get the current build from YonoArcade.com and fix the underlying problem. Our{" "}
          <ScheduledLink href="/blog/yono-arcade-not-opening-not-installing" date="2026-10-02">not opening or not installing</ScheduledLink>{" "}
          guide covers the common errors. Keep in mind that Yono Arcade describes itself as a
          real-money app, and online money games are prohibited in India since 1 May 2026; see{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade or Yono Tech Private Limited. We do not
          host or link to APK files. Read our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Old version questions"
        items={[
          {
            question: "What is the latest Yono Arcade version?",
            answer:
              "Version 1.1.9 (code 119) was the build YonoArcade.com served on 28 September 2026, uploaded on 18 September 2026.",
          },
          {
            question: "Where can I download a Yono Arcade old version APK?",
            answer:
              "YonoArcade.com offers only the current build and no archive, so every old version APK comes from a third-party site. Check the package name is com.arcade.games.yo and that it installs over your current app without uninstalling.",
          },
          {
            question: "Why does my old Yono Arcade version say update required?",
            answer:
              "Apps like this stop accepting outdated builds on their servers. Install the current version from YonoArcade.com.",
          },
          {
            question: "Can I install an older Yono Arcade version over a newer one?",
            answer:
              "No. Android blocks installing a lower version over a higher one. You'd have to uninstall first, which removes local data, and you'd be running a file you can't easily verify.",
          },
          {
            question: "Is there a Yono Arcade old version for iOS?",
            answer:
              "No. There was no Yono Arcade app on the App Store on 28 September 2026, and the official download is an Android APK only.",
          },
        ]}
      />
    </>
  );
}
