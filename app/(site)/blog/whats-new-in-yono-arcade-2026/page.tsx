import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import Callout from "../../../components/sections/Callout";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ScheduledLink from "../../../components/sections/ScheduledLink";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const TITLE = "Yono Arcade 2026: What's New (Version 1.1.9, New Rules, Lookalikes)";
const DESCRIPTION =
  "What changed for Yono Arcade in 2026: the latest APK version (1.1.9), the Online Gaming Act in force from 1 May, new lookalike apps on Google Play, and new Yono-network releases.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/blog/whats-new-in-yono-arcade-2026" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/blog/whats-new-in-yono-arcade-2026" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function WhatsNewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="What's New in Yono Arcade (2026)"
        answer="The biggest Yono Arcade changes in 2026: online money games have been prohibited across India since 1 May 2026; the current APK is version 1.1.9, uploaded on 18 September 2026; and seven lookalike apps named “Yono Arcade” appeared on Google Play, most updated in September. This log lists only changes we have checked, with dates."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Last updated: September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/whats-new-2026-featured.webp"
        alt="What's New in Yono Arcade 2026 featured graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Yono Arcade 2026 changelog">
        <ComparisonTable
          headers={["Date", "What changed", "How we know"]}
          rows={[
            ["1 May 2026", "The Online Gaming Act, 2025 and its 2026 Rules came into force, prohibiting online money games across India", "The Act (MeitY) and Rules notification"],
            ["19 Aug 2026", "Gold Rummy launched on the Yono network", "Tracked on our Gold Rummy page"],
            ["9 Sep 2026", "Money Rummy launched, reported as the 57th Yono-network release", "Tracked on our Money Rummy page"],
            ["Sep 2026", "Seven Google Play apps named \"Yono Arcade\" from six developers, most updated between 14 and 27 September", "Google Play, checked 28 Sep"],
            ["18 Sep 2026", "Current Yono Arcade APK uploaded: version 1.1.9 (code 119), about 34 MB", "File date on YonoArcade.com's download server"],
            ["28 Sep 2026", "Found: every download is tagged with a visitor ID and channel code", "Our inspection of two official downloads"],
            ["28 Sep 2026", "YonoArcade.com still lists 10 excluded states and does not mention the 2025 Act", "Its Terms page"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Latest version: what 1.1.9 is">
        <BulletList
          items={[
            "Package com.arcade.games.yo, version 1.1.9, about 34 MB, from YonoArcade.com only.",
            "Runs on Android 5.0 and later; there is no iPhone version.",
            "Asks for 9 permissions, none for SMS, contacts, location, camera or storage.",
            "Signed with a self-issued \"lamislot\" certificate, valid since April 2020; it does not name the operator.",
          ]}
        />
        <p>
          Full details: <ScheduledLink href="/blog/yono-arcade-apk-review" date="2026-09-30">Yono Arcade APK review</ScheduledLink>.
          If you're looking for an earlier build, read{" "}
          <ScheduledLink href="/blog/yono-arcade-old-version-apk" date="2026-10-01">Yono Arcade old version APK</ScheduledLink>{" "}
          first.
        </p>
      </ContentSection>

      <Callout tone="warning" title="The 2026 change that matters most" badge="verified">
        <p>
          YonoArcade.com describes Yono Arcade as a real-cash gaming app. Since 1 May 2026, offering,
          advertising and processing payments for online money games is prohibited in India, whether
          they are based on skill or chance. Players aren&apos;t penalised, but deposits and
          withdrawals can fail. See{" "}
          <ScheduledLink href="/blog/is-yono-arcade-banned-in-india" date="2026-09-29">Is Yono Arcade banned in India?</ScheduledLink>
        </p>
      </Callout>

      <ContentSection heading="“Yono Arcade 2026” claims we could not confirm">
        <BulletList
          items={[
            "\"Version 10.320\" on an APK mod site: the official file is 1.1.9.",
            "\"75+\" or \"60+\" games: the operator itself says \"25+\" and names 10.",
            "\"New 2026 version with bigger bonus\": bonus figures on download pages range from ₹41 to ₹700 and don't match the operator's own offers.",
            "An iOS version: there is no Yono Arcade app on the App Store.",
          ]}
        />
        <p>
          For what's inside the app today, see the <Link href="/all-games">games list</Link> and the{" "}
          <Link href="/mall">Mall</Link>. For today's codes, see <Link href="/promo-codes">promo codes</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="How we decide what goes in this log">
        <p>
          An entry needs a date and a source we can check: the operator&apos;s own website, the
          APK file itself, a Google Play listing, or an official government document. Claims repeated
          across download pages don&apos;t count on their own. When something changes, we add a
          dated row rather than rewriting history.
        </p>
      </ContentSection>

      <FAQSection
        heading="Yono Arcade 2026 questions"
        items={[
          {
            question: "What is the latest Yono Arcade version in 2026?",
            answer:
              "Version 1.1.9 (code 119), uploaded to YonoArcade.com's download server on 18 September 2026 and still current on 28 September 2026.",
          },
          {
            question: "What's new in Yono Arcade 2026?",
            answer:
              "The main changes: the Online Gaming Act banning online money games took effect on 1 May 2026, version 1.1.9 arrived in September, downloads are tagged per visitor, and several lookalike apps named Yono Arcade appeared on Google Play.",
          },
          {
            question: "Is Yono Arcade 2026 on Google Play?",
            answer:
              "Not officially. The apps named Yono Arcade on Google Play come from six other developers. The official APK comes only from YonoArcade.com.",
          },
          {
            question: "Is this the official Yono Arcade changelog?",
            answer:
              "No. AllYonoArcade.com is an independent guide, not affiliated with Yono Arcade or Yono Tech Private Limited. We log changes we can check from the outside.",
          },
        ]}
      />
    </>
  );
}
