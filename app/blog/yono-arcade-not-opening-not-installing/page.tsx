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

const TITLE = "Yono Arcade Not Opening or Not Installing? Causes and Fixes";
const META_TITLE = "Yono Arcade Not Opening or APK Not Installing? Fixes (2026)";
const DESCRIPTION =
  "Fix Yono Arcade \"App not installed\", parse errors, Play Protect blocks, crashes on launch and endless loading, based on what the official APK actually requires.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-not-opening-not-installing";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-install-flow.webp";
const PUBLISHED = "2026-10-02";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade Not Opening or Not Installing", item: URL },
  ],
};

export default function YonoArcadeNotOpeningPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Troubleshooting"
        title={TITLE}
        answer={"Most Yono Arcade install failures come from an incomplete download, an existing copy signed by someone else, or a phone older than Android 5.0. Most \"not opening\" problems come from the connection, a stale cache or an outdated build. Match your error to the tables below."}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 2, 2026 · Based on the Yono Arcade 1.1.9 APK served by YonoArcade.com on September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-install-flow.webp"
        alt="Yono Arcade not opening or not installing: common errors and fixes"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What the APK needs">
        <BulletList
          items={[
            "Android 5.0 or later (the current build targets Android 15).",
            "An ARM phone (arm64-v8a or armeabi-v7a). Almost all Android phones qualify; some emulators and Chromebooks don't.",
            "About 34 MB for the download, plus free space for installing and for game content. Keep at least 200 MB free to be safe.",
            "Permission for your browser or file manager to install apps (\"Install unknown apps\").",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Yono Arcade APK not installing">
        <ComparisonTable
          headers={["Error", "Likely cause", "Fix"]}
          rows={[
            ["\"There was a problem parsing the package\"", "Incomplete download, or Android older than 5.0", "Delete the file and download again on a stable connection; check your Android version"],
            ["\"App not installed\"", "A Yono Arcade copy signed by someone else is already on the phone, or you're installing an older version over a newer one", "Check the installed app's package name and version; don't install files from mirror sites"],
            ["\"App not installed as package conflicts\"", "Same as above: signature mismatch", "The new file isn't from the same source as your installed app"],
            ["\"For your security, your phone is not allowed to install unknown apps\"", "Install permission not granted", "Allow it for your browser in Settings → Apps → Special access → Install unknown apps"],
            ["Play Protect blocks or warns", "Google flags the app as harmful or unrecognised", "Take the warning seriously; we don't recommend turning Play Protect off"],
            ["\"Insufficient storage\"", "Not enough free space", "Free up space and retry"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Yono Arcade not opening, crashing or stuck loading">
        <ComparisonTable
          headers={["What you see", "Likely cause", "Fix"]}
          rows={[
            ["Closes straight after launch", "Corrupt cache or a bad install", "Clear cache; if that fails, reinstall the current build from YonoArcade.com"],
            ["Stuck on the loading screen", "Slow connection while game content downloads, or a VPN", "Switch between Wi-Fi and mobile data, turn off VPN, wait on the first launch"],
            ["\"Network error\" everywhere", "Your connection, or the service can't be reached", "Test other apps; if only Yono Arcade fails, the problem is on its side"],
            ["\"Update required\"", "Your build is outdated", "Install the current version; old versions are refused"],
            ["Opens, then logs you out", "Wrong date and time, or battery optimisation", "Set automatic date and time; exempt the app from battery saver"],
          ]}
        />
        <p>
          For sign-in problems specifically, see our <Link href="/login">Yono Arcade login help</Link>.
        </p>
      </ContentSection>

      <Callout tone="warning" title="When no fix will work">
        <p>
          Online money games have been prohibited in India since 1 May 2026, and the government can
          order access to such services blocked. If Yono Arcade can&apos;t connect on any network
          while everything else works, the service itself may be unreachable, and reinstalling or
          switching versions won&apos;t change that. Don&apos;t pay anyone who offers to &quot;fix&quot;
          or &quot;unlock&quot; your account. See{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </Callout>

      <ContentSection heading="Check you have the real app">
        <p>
          The official build is package <code>com.arcade.games.yo</code>. Several apps called
          &quot;Yono Arcade&quot; on Google Play are different apps with different package names, and
          they won&apos;t behave like the YonoArcade.com app. Our{" "}
          <Link href="/blog/yono-arcade-apk-review">APK review</Link> lists what the genuine file
          contains.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade or Yono Tech Private Limited. Read our{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Troubleshooting questions"
        items={[
          {
            question: "Why is Yono Arcade not installing?",
            answer:
              "Usually an incomplete download (a parse error), a Yono Arcade copy signed by someone else already on the phone (\"App not installed\"), missing permission to install unknown apps, or Android older than 5.0.",
          },
          {
            question: "Why is Yono Arcade not opening?",
            answer:
              "Most often a corrupt cache, a slow connection during the first content download, a VPN, or an outdated build the server refuses. Clear the cache, switch networks, and install the current version from YonoArcade.com.",
          },
          {
            question: "Why does Yono Arcade say App not installed?",
            answer:
              "Android refuses to install a file signed by a different developer over an existing app, or an older version over a newer one. Check the installed app's package name is com.arcade.games.yo and use the current official file.",
          },
          {
            question: "Should I turn off Play Protect to install Yono Arcade?",
            answer:
              "We don't recommend it. A Play Protect warning is a signal to stop and check the file, not an obstacle to work around.",
          },
          {
            question: "What Android version does Yono Arcade need?",
            answer: "Android 5.0 or later, for version 1.1.9 served on 28 September 2026.",
          },
        ]}
      />
    </>
  );
}
