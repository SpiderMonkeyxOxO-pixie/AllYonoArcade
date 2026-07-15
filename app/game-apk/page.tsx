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
  title: "Yono Arcade Game APK: What It Is & How It Differs",
  description:
    "What people mean by the Yono Arcade \"Game APK,\" how it differs from the Mall and Pure APK naming, and how to check a file before installing.",
  alternates: { canonical: "https://allyonoarcade.com/game-apk" },
  openGraph: {
    title: "Yono Arcade Game APK: What It Is & How It Differs",
    description:
      "What people mean by the Yono Arcade \"Game APK,\" how it differs from the Mall and Pure APK naming, and how to check a file before installing.",
    url: "https://allyonoarcade.com/game-apk",
  },
  twitter: {
    title: "Yono Arcade Game APK: What It Is & How It Differs",
    description:
      "What people mean by the Yono Arcade \"Game APK,\" how it differs from the Mall and Pure APK naming, and how to check a file before installing.",
  },
};

export default function GameApkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Game APK"
        title="Yono Arcade Game APK"
        answer="“Game APK” is how most people refer to the core Yono Arcade installer file — the .apk package that contains the app itself, as opposed to a specific in-app section or an alternate mirror."
      />

      <RelatedLinks />

      <ContentSection heading="What “APK” actually means">
        <p>
          APK (Android Package Kit) is simply the file format Android apps are packaged and
          distributed in. Every Android app is an APK under the hood — the Play Store installs
          them automatically, while sideloading means installing that same file type manually
          from a source outside the Store.
        </p>
        <GuideImage
          src="/images/guides/play-store-vs-sideload.webp"
          alt="Side-by-side diagram comparing a Play Store install to a sideloaded APK install and where each file comes from"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="Game APK vs. other Yono Arcade naming">
        <BulletList
          items={[
            <>
              <strong>Game APK</strong> — the general term for the app's installer. This is
              what our <Link href="/download">download guide</Link> covers step by step.
            </>,
            <>
              <strong>Pure APK</strong> — a separate naming pattern that usually signals a
              third-party mirror. See the <Link href="/pure-apk">Pure APK guide</Link> before
              treating it as equivalent.
            </>,
            <>
              <strong>Mall</strong> — based on the term itself, this looks like a section inside
              the app rather than a different installer. See <Link href="/mall">Arcade Mall</Link>.
            </>,
          ]}
        />
      </ContentSection>

      <Callout tone="info" title="Confirm version details in-app, not from a search result">
        <p>
          Version numbers, file size, and permission lists change between releases and between
          mirrors. Rather than publishing figures that go stale, we'd point you to checking these
          details directly on the install screen before you confirm.
        </p>
      </Callout>

      <FAQSection
        heading="Game APK questions"
        items={[
          {
            question: "Is the Game APK different from the main Yono Arcade app?",
            answer:
              "Based on how the terms are used in search, \"Game APK\" and the main app refer to the same core installer. The naming variation mostly comes from different pages and mirrors describing the same file differently.",
          },
          {
            question: "How do I know if a Game APK file is current?",
            answer:
              "Check the version number shown on the install/download screen against what's listed on the app's official page, if one is available, rather than trusting the filename alone.",
          },
        ]}
      />
    </>
  );
}
