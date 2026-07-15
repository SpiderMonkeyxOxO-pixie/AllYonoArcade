import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "How to Download Yono Arcade (APK & Install Guide)",
  description:
    "A step-by-step guide to downloading and installing Yono Arcade, plus how to tell the main app apart from Game APK, Pure APK, and Mall builds.",
  alternates: { canonical: "https://allyonoarcade.com/download" },
  openGraph: {
    title: "How to Download Yono Arcade (APK & Install Guide)",
    description:
      "A step-by-step guide to downloading and installing Yono Arcade, plus how to tell the main app apart from Game APK, Pure APK, and Mall builds.",
    url: "https://allyonoarcade.com/download",
  },
  twitter: {
    title: "How to Download Yono Arcade (APK & Install Guide)",
    description:
      "A step-by-step guide to downloading and installing Yono Arcade, plus how to tell the main app apart from Game APK, Pure APK, and Mall builds.",
  },
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="How to Download Yono Arcade"
        answer="Yono Arcade is distributed as an Android APK. Before you install anything, it helps to know which build you're looking at — searches for “Yono Arcade” turn up several differently named variants, and they aren't interchangeable."
      />

      <RelatedLinks />

      <ContentSection heading="Which build are you looking for?">
        <p>
          If you searched for a specific variant, jump straight to its guide instead of guessing:
        </p>
        <BulletList
          items={[
            <>
              <strong>Game APK</strong> — the core installer file most people mean by
              "yono arcade apk." See our <Link href="/game-apk">Game APK guide</Link>.
            </>,
            <>
              <strong>Pure APK</strong> — a naming pattern usually associated with third-party
              mirrors distributed outside official app stores. Read the safety notes first:{" "}
              <Link href="/pure-apk">Pure APK guide</Link>.
            </>,
            <>
              <strong>Mall</strong> — appears to be a section within the app rather than a
              separate download. See <Link href="/mall">Arcade Mall</Link>.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="General steps for installing an Android APK">
        <p>
          These are standard Android precautions that apply to any APK, not just this app:
        </p>
        <BulletList
          items={[
            "Confirm the publisher name on the download page matches what you expect before installing anything.",
            "Android will warn you when installing from outside the Play Store (\"unknown sources\") — read that warning, don't dismiss it automatically.",
            "Check the permissions the app requests during install. An arcade/games app asking for contacts, SMS, or call logs is worth pausing on.",
            "Keep Google Play Protect enabled — it scans sideloaded APKs for known malware signatures.",
            "Update through the same source you installed from; mixing update sources is a common way people end up on fake mirrors.",
          ]}
        />
        <GuideImage
          src="/images/guides/yono-arcade-install-flow.webp"
          alt="The Android install flow: allow installation, review permissions, install and wait, then open and confirm"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="We don't host or link to APK files directly">
        <p>
          AllYonoArcade.com is an information guide, not a download mirror. We're not able to
          verify the integrity of any specific APK file circulating online, including files
          calling themselves "official," "pure," or "latest version." Treat every sideloaded
          APK with the same scrutiny, regardless of what it's named.
        </p>
      </Callout>

      <FAQSection
        heading="Download questions"
        items={[
          {
            question: "Is there an official iOS version of Yono Arcade?",
            answer:
              "We're not aware of a verified official iOS release. Search volume for \"yono arcade ios download\" exists, but we'd treat any iOS-specific installer with extra caution until an official source confirms it.",
          },
          {
            question: "What does \"old version\" mean in these searches?",
            answer:
              "People often search for older APK builds after an update changes something they preferred, or when a device can't run the latest version. Older builds carry higher security risk since they miss subsequent fixes.",
          },
          {
            question: "Why are there so many differently named APKs for one app?",
            answer:
              "This is common in the coin-op/rummy app category — multiple unofficial mirrors upload the same or similar files under different names. It doesn't necessarily mean any one of them is malicious, but it does mean the name alone isn't a reliable signal.",
          },
        ]}
      />
    </>
  );
}
