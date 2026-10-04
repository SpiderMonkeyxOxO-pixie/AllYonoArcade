import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import ComparisonTable from "../../components/sections/ComparisonTable";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import ScheduledLink from "../../components/sections/ScheduledLink";
import { OPERATOR_CHECKED } from "../../lib/legal";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const TITLE = "Yono Arcade Games All APK: One Official APK, Every Game";
const DESCRIPTION =
  "Looking for the Yono Arcade games all APK or an all APK list? All Yono Arcade games come in one official APK. Version, size and the conflicting claims on other sites, checked.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/game-apk" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/game-apk" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function GameApkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Game APK"
        title="Yono Arcade Games All APK"
        answer={`All Yono Arcade games come inside one APK: there are no separate APKs for Rummy, Crash, Roulette or the other games. On ${OPERATOR_CHECKED} the official file from YonoArcade.com was package com.arcade.games.yo, version 1.1.9, about 34 MB. An "all APK list" is a different thing: a list of other Yono-family apps, each with its own APK.`}
      />

      <RelatedLinks />

      <ContentSection heading="One APK, all games">
        <p>
          Yono Arcade is built on the Cocos2d-x game engine, and every game it offers runs inside the
          same app. Installing the one official APK gives you the whole catalogue the operator
          names: Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon &amp;
          Tiger, Jhandi Munda and Roulette. See the <Link href="/all-games">Yono Arcade games list</Link>{" "}
          for what each one is.
        </p>
        <ComparisonTable
          headers={["Detail", "Official Yono Arcade APK", "How to check"]}
          rows={[
            ["Package name", "com.arcade.games.yo", "Settings → Apps → Yono Arcade → App details"],
            ["Version", "1.1.9 (code 119)", "Same screen"],
            ["Size", "About 34 MB", "Shown by your browser's download"],
            ["Source", "YonoArcade.com only", "Not on Google Play or the App Store"],
            ["Android", "5.0 and later", "Settings → About phone"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="What an “all APK list” actually is">
        <p>
          &quot;Yono arcade all APK list&quot; and &quot;all APK new&quot; searches usually land on
          pages that list many Yono-family apps (101Z, Yono 777, Jaiho and others), each with its
          own download. Those are separate apps with separate operators, not parts of Yono Arcade,
          and a new name on such a list is not a new Yono Arcade version.
        </p>
        <BulletList
          items={[
            "Each app on an all-APK list needs its own package-name and signer check.",
            "Lists are often copied between sites, so a \"new\" app may be a renamed old one.",
            "Download links on these lists are often referral links.",
          ]}
        />
        <p>
          Our <Link href="/blog/all-yono-games">All Yono Games guide</Link> explains why these lists
          show different totals.
        </p>
      </ContentSection>

      <ContentSection heading={`Claims on other download pages vs the official file (${OPERATOR_CHECKED})`}>
        <ComparisonTable
          headers={["Claim seen elsewhere", "What the official source shows", "Verdict"]}
          rows={[
            ["\"Version 10.320\"", "Version 1.1.9", "Not an official version"],
            ["\"75+ games\" / \"60+ games\"", "The operator says \"25+ games\" and names 10", "Inflated or unverified"],
            ["Sign-up bonus of ₹41 to ₹700", "The operator advertises different offers on its own site", "Unverified; varies by page"],
            ["\"Official APK\" hosted on the page", "The operator distributes only from YonoArcade.com", "A copy, at best"],
            ["iOS download", "No App Store app; the official file is Android-only", "Not from the operator"],
          ]}
        />
      </ContentSection>

      <GuideImage
        src="/images/guides/play-store-vs-sideload.webp"
        alt="Side-by-side diagram comparing a Play Store install to a sideloaded APK install and where each file comes from"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <Callout tone="info" title="Game APK, Pure APK and Mall: what's the difference?" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Game APK</strong>: the official installer (this page and our{" "}
            <Link href="/download">download guide</Link>).
          </li>
          <li>
            <strong>Pure APK</strong>: usually the APKPure listing, which is a different app. See the{" "}
            <Link href="/pure-apk">Pure APK guide</Link>.
          </li>
          <li>
            <strong>Mall</strong>: a screen inside the app, not a separate download. See{" "}
            <Link href="/mall">Yono Arcade Mall</Link>.
          </li>
        </ul>
      </Callout>

      <FAQSection
        heading="Game APK questions"
        items={[
          {
            question: "Is there a Yono Arcade games all APK?",
            answer:
              "Yes, in the sense that one APK contains every game. The official file from YonoArcade.com (package com.arcade.games.yo, version 1.1.9 on 28 September 2026) includes all Yono Arcade games; there are no separate game APKs.",
          },
          {
            question: "What is the Yono Arcade all APK list?",
            answer:
              "A list of other Yono-family apps such as 101Z or Yono 777, each a separate app with its own download and operator. They are not part of Yono Arcade.",
          },
          {
            question: "What is the Yono Arcade official APK version?",
            answer:
              "Version 1.1.9 (code 119), about 34 MB, served by YonoArcade.com on 28 September 2026. Claims like version 10.320 on other sites don't match the official file.",
          },
          {
            question: "Can I download the Yono Arcade all APK on iOS?",
            answer:
              "No. There was no Yono Arcade app on the App Store on 28 September 2026, and the official download is an Android APK, which iPhones can't install.",
          },
          {
            question: "Where can I see everything inside the official APK?",
            answer:
              "Our APK review lists the package, version, signing certificate and all 9 permissions of the official file.",
          },
        ]}
      />

      <p className="mx-auto max-w-[760px] px-4 sm:px-6 pb-6 text-[14px] text-[var(--color-ink-400)]">
        Full technical details:{" "}
        <ScheduledLink href="/blog/yono-arcade-apk-review" date="2026-09-30">Yono Arcade APK review</ScheduledLink>.
      </p>
    </>
  );
}
