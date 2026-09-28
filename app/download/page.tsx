import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import ComparisonTable from "../components/sections/ComparisonTable";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";
import ScheduledLink from "../components/sections/ScheduledLink";
import { LAW_SENTENCE, OPERATOR_CHECKED } from "../lib/legal";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const TITLE = "Yono Arcade Download APK: Official Source & How It Works (2026)";
const DESCRIPTION =
  "Yono Arcade APK download explained: the only official source, what the download button actually does, how to confirm you got the real file, and the latest version.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/download" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/download" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Yono Arcade Download APK"
        answer={`The official Yono Arcade APK comes only from YonoArcade.com. It is not on Google Play or the App Store. On ${OPERATOR_CHECKED} its download button served version 1.1.9 (package com.arcade.games.yo, about 34 MB). Apps named "Yono Arcade" on Google Play are other developers' apps.`}
      />

      <RelatedLinks />

      <ContentSection heading="What happens when you tap Download on YonoArcade.com">
        <p>
          We traced the official download on 28 September 2026. It works differently from a normal
          file link:
        </p>
        <ComparisonTable
          headers={["Step", "What happens", "What it means for you"]}
          rows={[
            ["1. Page loads", "A FingerprintJS script creates an ID for your device and browser", "The download is linked to your visit"],
            ["2. Button waits", "\"Wait For Apk...\" while the site asks its download server for a file", "A slow or blocked script can leave the button stuck"],
            ["3. File served", "A copy of the APK tagged with your visitor ID and a channel code", "Your file's checksum won't match anyone else's"],
            ["4. Fallback", "If the script fails, a standard copy with a default channel code is served", "Same app, same version"],
          ]}
        />
        <p>
          The tag doesn&apos;t change the app itself: our two downloads were
          identical apart from it. To confirm a file, check the package name and version rather
          than the checksum.
        </p>
      </ContentSection>

      <ContentSection heading="How to confirm you got the real file">
        <BulletList
          items={[
            "After installing, open Settings → Apps → Yono Arcade → App details. The package name should be com.arcade.games.yo.",
            "The version should be 1.1.9 or newer (1.1.9 was current on 28 September 2026).",
            "The download should be about 34 MB. A file of 47 MB or 77 MB is a different build or a different app.",
            "Future updates must install over it without uninstalling. A signature error means the update came from someone else.",
          ]}
        />
        <GuideImage
          src="/images/guides/yono-arcade-install-flow.webp"
          alt="The Android install flow: allow installation, review permissions, install and wait, then open and confirm"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="Which build are you looking for?">
        <BulletList
          items={[
            <>
              <strong>&quot;Yono Arcade games all APK&quot;</strong>: the same single APK; every game
              is inside it. See our <Link href="/game-apk">Game APK guide</Link>.
            </>,
            <>
              <strong>&quot;Pure APK&quot;</strong>: usually the APKPure listing, which is a different
              app. See the <Link href="/pure-apk">Pure APK guide</Link>.
            </>,
            <>
              <strong>&quot;Old version&quot;</strong>: the operator offers no archive. See{" "}
              <ScheduledLink href="/blog/yono-arcade-old-version-apk" date="2026-10-01">
                Yono Arcade old version APK
              </ScheduledLink>
              .
            </>,
            <>
              <strong>&quot;Mall APK&quot;</strong>: doesn&apos;t exist; the Mall is inside the app.
              See <Link href="/mall">Yono Arcade Mall</Link>.
            </>,
          ]}
        />
      </ContentSection>

      <Callout tone="warning" title="Before you download">
        <p>
          Yono Arcade describes itself as a real-cash gaming app. {LAW_SENTENCE} Only users aged 18+
          are allowed by the operator. AllYonoArcade.com is an information guide: we don&apos;t host
          or link to APK files, and we can&apos;t vouch for any copy circulating on other sites.
        </p>
      </Callout>

      <FAQSection
        heading="Download questions"
        items={[
          {
            question: "Where is the Yono Arcade official APK download?",
            answer:
              "Only on YonoArcade.com. It is not on Google Play or the App Store; the Google Play apps named Yono Arcade come from other developers.",
          },
          {
            question: "What is the latest Yono Arcade APK version?",
            answer:
              "Version 1.1.9 (code 119), about 34 MB, was served by YonoArcade.com on 28 September 2026.",
          },
          {
            question: "Why does the Yono Arcade download button say Wait For Apk?",
            answer:
              "The page runs a script that requests a download link tied to your visit. If the script is slow or blocked, the button stays on Wait For Apk. The page has a fallback file for when the script fails.",
          },
          {
            question: "Is there an official iOS version of Yono Arcade?",
            answer:
              "No. On 28 September 2026 there was no Yono Arcade app on the App Store, and the official download is an Android APK only.",
          },
          {
            question: "Why are there so many differently named Yono Arcade APKs?",
            answer:
              "Third-party sites relabel the same file (\"Pure\", \"Plus\", \"2.0\") or use the name for different apps. The package name com.arcade.games.yo is the reliable check, not the file name.",
          },
        ]}
      />
    </>
  );
}
