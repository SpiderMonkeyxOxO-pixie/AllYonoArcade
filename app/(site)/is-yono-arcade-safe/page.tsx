import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import ComparisonTable from "../../components/sections/ComparisonTable";
import ScheduledLink from "../../components/sections/ScheduledLink";
import { LAW_SENTENCE, LAW_STATES, LAW_PLAYERS, OPERATOR_CHECKED } from "../../lib/legal";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Is Yono Arcade Safe? Operator Claims & 2026 Checks",
  description:
    "Is Yono Arcade safe? What YonoArcade.com says about its operator, games and data collection, where its claims conflict, and the checks to run before installing.",
  alternates: { canonical: "https://allyonoarcade.com/is-yono-arcade-safe" },
  openGraph: {
    title: "Is Yono Arcade Safe? Operator Claims & 2026 Checks",
    description:
      "Is Yono Arcade safe? What YonoArcade.com says about its operator, games and data collection, where its claims conflict, and the checks to run before installing.",
    url: "https://allyonoarcade.com/is-yono-arcade-safe",
  },
  twitter: {
    title: "Is Yono Arcade Safe? Operator Claims & 2026 Checks",
    description:
      "Is Yono Arcade safe? What YonoArcade.com says about its operator, games and data collection, where its claims conflict, and the checks to run before installing.",
  },
};

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Safety Review"
        title="Is Yono Arcade Safe?"
        answer="We haven't run independent security testing on Yono Arcade, so we won't give it a flat yes/no. What follows is the actual checklist worth working through yourself — most of it takes five minutes and applies to any coin-op or rummy-style app, not just this one."
      />

      <RelatedLinks />

      <Callout tone="warning" title="This is a framework, not a verdict" badge="pending">
        <p>
          Anyone claiming a confident "100% safe" or "definitely a scam" about an app they haven't
          tested is guessing. Use the checklist below to form your own judgment, and weigh it
          against your own risk tolerance — especially if real money is involved.
        </p>
      </Callout>

      <ContentSection heading="1. Where did you get the file?">
        <BulletList
          items={[
            "Play Store installs get automated malware scanning and a verified developer account behind them.",
            "Sideloaded APKs — including anything calling itself \"pure,\" \"official,\" or \"latest version\" — skip that scanning entirely. See our Pure APK guide for more.",
            "If a site pressures you to disable Play Protect or \"unknown sources\" warnings without explaining why, treat that as a red flag on its own.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="2. What permissions does it ask for?">
        <p>
          A games app has no functional reason to request access to your contacts, SMS messages,
          or call logs. During install (or in your phone's app settings afterward), check the
          permission list against what the app actually needs to function.
        </p>
        <GuideImage
          src="/images/guides/permissions-screen.webp"
          alt="Android app permissions screen showing what to check before installing"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="3. If money is involved">
        <BulletList
          items={[
            "Guaranteed-win or guaranteed-return language is a hard red flag for any real-money game — legitimate skill/chance games don't promise outcomes.",
            "Withdrawal problems reported by other users (search the app name plus \"withdrawal\") are worth weighing before you deposit anything.",
            `${LAW_SENTENCE} ${LAW_STATES}`,
          ]}
        />
      </ContentSection>

      <ContentSection heading={`5. What YonoArcade.com says about itself (checked ${OPERATOR_CHECKED})`}>
        <p>
          The operator&apos;s own website is the best evidence of what the app is. Here is what it
          states, and where its claims conflict with each other. For what the APK file itself
          contains, see our{" "}
          <ScheduledLink href="/blog/yono-arcade-apk-review" date="2026-09-30">Yono Arcade APK review</ScheduledLink>; for
          the legal position, see{" "}
          <ScheduledLink href="/blog/is-yono-arcade-banned-in-india" date="2026-09-29">Is Yono Arcade banned in India?</ScheduledLink>.
        </p>
        <ComparisonTable
          headers={["Topic", "What YonoArcade.com says", "Why it matters"]}
          rows={[
            ["Operator", "Owned and operated by Yono Tech Private Limited", "The only company name it gives; no address or registration number is listed"],
            ["Type of app", "\"Real Cash Games\", deposits (\"Add Cash\") and withdrawals to bank or UPI", "That makes it an online money game under the 2025 Act"],
            ["Games", "Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda, Roulette", "Several of these are games of chance, not skill"],
            ["Skill claim", "\"All games on YonoArcade are skill-based\"", "Contradicts its own game list; the Act does not exempt skill games anyway"],
            ["Where it operates", "India except Telangana, Assam, Orissa, Gujarat, Maharashtra, Delhi, Andhra Pradesh, Tamil Nadu, Nagaland and Sikkim", "A pre-2025 state list; it does not mention the national Act"],
            ["Experience", "Both \"10+ years\" and \"the last sixteen years\" on the same page", "Inconsistent claims about its own history"],
            ["Data collected", "Bank and card details, PAN, date of birth, phone, and contacts for referral invites", "Sensitive financial data, which raises the stakes if the app is not what it claims"],
            ["Website copy", "Homepage text includes paragraphs about \"Gamezy\", a different fantasy-cricket brand", "Copied marketing text is a weak sign of how carefully the site is maintained"],
            ["Age", "18+ only", "Consistent with the rest of the category"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="4. Developer transparency">
        <p>
          Check whether the app lists a real developer/publisher name, a support contact, and a
          privacy policy — either on its store listing or within the app itself. Missing all
          three isn't automatically disqualifying, but it does mean you have fewer ways to get
          help if something goes wrong. For the operator and support details YonoArcade.com
          publishes, see <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link>
        </p>
      </ContentSection>

      <FAQSection
        heading="Safety questions"
        items={[
          {
            question: "Is Yono Arcade a scam?",
            answer:
              "We don't have evidence to call it one, and we don't have evidence to clear it either — we haven't tested it directly. Work through the checklist above rather than relying on any single site's verdict, including ours.",
          },
          {
            question: "Is Yono Arcade legal in India?",
            answer:
              `YonoArcade.com describes Yono Arcade as a real-cash gaming platform. ${LAW_SENTENCE} ${LAW_PLAYERS} This page isn't legal advice.`,
          },
          {
            question: "What's the single biggest red flag to watch for?",
            answer:
              "Any request for an upfront payment to \"unlock\" winnings, a bonus, or a withdrawal. Legitimate apps don't charge you to receive money you've already won.",
          },
        ]}
      />
    </>
  );
}
