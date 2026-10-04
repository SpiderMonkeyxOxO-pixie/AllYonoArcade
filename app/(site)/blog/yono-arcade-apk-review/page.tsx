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

const TITLE = "Yono Arcade APK Review: Package, Version, Signer and Permissions";
const META_TITLE = "Yono Arcade APK Review: Package, Version 1.1.9 & Permissions";
const DESCRIPTION =
  "We inspected the official Yono Arcade APK: package com.arcade.games.yo, version 1.1.9, the \"lamislot\" signing certificate, 9 permissions and a per-download tracking tag.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-apk-review";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-apk-review.webp";
const PUBLISHED = "2026-09-30";
const CERT_SHA256 = "5c:bb:22:5f:ff:2a:b9:db:2c:e0:18:bc:ba:db:d3:78:15:1f:7e:d8:fc:bd:3e:c9:db:ea:e6:cc:1c:a8:ee:ea";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade APK Review", item: URL },
  ],
};

export default function YonoArcadeApkReviewPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="APK Review"
        title={TITLE}
        answer={"The official Yono Arcade APK from YonoArcade.com is package com.arcade.games.yo, version 1.1.9, about 34 MB. It is signed with a self-issued certificate named \"lamislot\", not Yono Tech Private Limited, asks for 9 permissions (none for SMS, contacts, location, camera or storage), and every download carries a hidden tracking tag."}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: September 30, 2026 · APK downloaded from YonoArcade.com and inspected on September 28, 2026 (not installed)
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-apk-review.webp"
        alt="Yono Arcade APK review: package name, version, signing certificate and permissions"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="How we checked">
        <p>
          On 28 September 2026 we downloaded the APK twice from YonoArcade.com&apos;s download
          button: once through the site&apos;s per-visitor download script, and once from the
          fallback file it uses when that script fails. We read each file&apos;s manifest and signing
          certificate with a standard APK analysis tool. We did not install or run the app.
        </p>
      </ContentSection>

      <ContentSection heading="The APK at a glance">
        <ComparisonTable
          headers={["Field", "What we found", "Why it matters"]}
          rows={[
            ["App name", "Yono Arcade", "Matches the website"],
            ["Package name", "com.arcade.games.yo", "The app's permanent ID; use it to spot lookalikes"],
            ["Version", "1.1.9 (version code 119)", "The build YonoArcade.com served on 28 Sep 2026"],
            ["File size", "About 34 MB (35,790,365 bytes)", "Much larger or smaller files are a different build"],
            ["Fallback file date", "18 September 2026", "When the current build was uploaded"],
            ["Android support", "Android 5.0 and later; targets Android 15", "Very old phones can't install it"],
            ["Game engine", "Cocos2d-x (JavaScript)", "The games run inside one app, not as separate APKs"],
            ["Signature schemes", "APK signature v1 and v2", "Standard for a sideloaded app"],
          ]}
        />
      </ContentSection>

      <ContentSection heading={'Who signed it: the "lamislot" certificate'}>
        <p>
          Every Android app is signed by its developer, and Android only lets an update replace an
          app if both are signed with the same certificate. That makes the signer the most reliable
          way to tell whether two Yono Arcade files come from the same source.
        </p>
        <ComparisonTable
          headers={["Certificate field", "Value", "Note"]}
          rows={[
            ["Name (CN, O, OU)", "lamislot", "Not Yono Tech Private Limited, the operator YonoArcade.com names"],
            ["Location fields", "ls / ls / country \"65\"", "Placeholder values; \"65\" is not a valid country code"],
            ["Issued by", "Itself (self-signed)", "Normal for sideloaded apps; no outside authority vouches for it"],
            ["Valid", "27 Apr 2020 to 21 Apr 2045", "The key has been in use since 2020"],
            ["SHA-256 fingerprint", "5c:bb:22:5f … a8:ee:ea", "Full value below"],
          ]}
        />
        <p className="break-all text-[13px]">
          Full SHA-256 certificate fingerprint: <code>{CERT_SHA256}</code>
        </p>
        <p>
          A self-signed certificate with placeholder details is common for APKs distributed outside
          Google Play, and on its own it doesn&apos;t mean the file is harmful. But it means nothing
          in the file links it to Yono Tech Private Limited, and the name &quot;lamislot&quot; appears
          nowhere on YonoArcade.com.
        </p>
      </ContentSection>

      <ContentSection heading="Permissions: what the app can access">
        <p>
          The manifest requests 9 permissions. None of them gives access to your SMS, contacts, call
          log, location, camera, microphone or files.
        </p>
        <ComparisonTable
          headers={["Permission", "What it allows", "Concern"]}
          rows={[
            ["INTERNET, ACCESS_NETWORK_STATE", "Go online and check the connection", "Normal"],
            ["POST_NOTIFICATIONS", "Show notifications (Android 13+ asks first)", "Normal; can be turned off"],
            ["VIBRATE, WAKE_LOCK", "Vibrate; keep the phone awake during play", "Normal"],
            ["c2dm RECEIVE, READ_GSERVICES", "Receive push messages via Google services", "Normal for push notifications"],
            ["AD_ID", "Read your advertising ID", "Used for ad and install tracking; you can reset or delete it in Android settings"],
            ["BIND_GET_INSTALL_REFERRER_SERVICE", "Read how the app was installed", "Used to credit the install to a referral"],
          ]}
        />
        <p>
          One mismatch: the privacy policy on YonoArcade.com says the app may access your contacts
          to send referral invitations, but this build does not request the contacts permission. The
          policy is broader than what version 1.1.9 can actually do. For how permissions work in
          general, see <Link href="/is-yono-arcade-safe">Is Yono Arcade safe?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Every download is tagged to you">
        <p>
          The download page runs a FingerprintJS script, which creates an ID for your device and
          browser, and asks a download script for a file. The APK it returns carries a small block of
          data inside its signature area, for example:
        </p>
        <p>
          <code>{`{"channel":"8J0CAPRW5FT","vid":"79361210",...}`}</code>
        </p>
        <p>
          That tag doesn&apos;t change the app&apos;s code: apart from it, our two downloads were
          identical, file for file. It lets the operator link your install to your visit and to any
          referral channel. It also means two people&apos;s downloads never have the same checksum,
          so a checksum can&apos;t confirm a file is genuine. Compare the signer fingerprint instead.
        </p>
      </ContentSection>

      <Callout tone="warning" title="How to check a Yono Arcade APK you already have" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Package name: Settings → Apps → Yono Arcade → App details. It should be{" "}
            <code>com.arcade.games.yo</code>. The Google Play apps called Yono Arcade use other
            package names.
          </li>
          <li>Version: shown on the same App details screen. 1.1.9 was current on 28 September 2026.</li>
          <li>
            Signer: if a file won&apos;t install over your existing Yono Arcade with &quot;App not
            installed&quot; or a &quot;signatures don&apos;t match&quot; error, it was signed by
            someone else. Don&apos;t uninstall to force it.
          </li>
        </ul>
      </Callout>

      <ContentSection heading="What this review can't tell you">
        <BulletList
          items={[
            "Whether the app treats your money fairly. Game outcomes and withdrawals run on the operator's servers, not in the APK.",
            "What the app loads after install. Games built on Cocos2d-x can download new content, so the installed app can change without a new APK.",
            "Whether it is legal to use for money. Online money games are prohibited in India since 1 May 2026; see our India status guide.",
          ]}
        />
        <p>
          For the operator and the lookalike Google Play apps, see{" "}
          <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link> For the legal
          position, see <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade or Yono Tech Private Limited. We do not
          host APK files. Read our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Yono Arcade APK questions"
        items={[
          {
            question: "What is the Yono Arcade package name?",
            answer:
              "com.arcade.games.yo, for the APK downloaded from YonoArcade.com on 28 September 2026. The apps named Yono Arcade on Google Play use different package names.",
          },
          {
            question: "What is the latest Yono Arcade APK version?",
            answer:
              "Version 1.1.9 (version code 119) was the build YonoArcade.com served on 28 September 2026. The file was uploaded on 18 September 2026 and is about 34 MB.",
          },
          {
            question: "Who signs the Yono Arcade APK?",
            answer:
              "A self-signed certificate named \"lamislot\", valid from 2020 to 2045. It does not name Yono Tech Private Limited. The SHA-256 fingerprint starts 5c:bb:22:5f and ends a8:ee:ea.",
          },
          {
            question: "What permissions does Yono Arcade need?",
            answer:
              "Nine: internet and network state, notifications, vibrate, wake lock, Google push messaging, advertising ID and install referrer. It does not request SMS, contacts, location, camera, microphone or storage.",
          },
          {
            question: "Why is my Yono Arcade APK a different size or checksum?",
            answer:
              "Each download carries a small visitor and channel tag, so checksums differ between downloads. A size far from about 34 MB, or a different package name or signer, means a different build.",
          },
        ]}
      />
    </>
  );
}
