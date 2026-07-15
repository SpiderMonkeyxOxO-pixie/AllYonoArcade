import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Is Yono Arcade Safe? An Honest Look",
  description:
    "We don't give Yono Arcade a one-line safe/unsafe verdict. Here's the actual framework we use — permissions, distribution source, and financial red flags — so you can check for yourself.",
  alternates: { canonical: "https://allyonoarcade.com/is-yono-arcade-safe" },
  openGraph: {
    title: "Is Yono Arcade Safe? An Honest Look",
    description:
      "We don't give Yono Arcade a one-line safe/unsafe verdict. Here's the actual framework we use — permissions, distribution source, and financial red flags — so you can check for yourself.",
    url: "https://allyonoarcade.com/is-yono-arcade-safe",
  },
  twitter: {
    title: "Is Yono Arcade Safe? An Honest Look",
    description:
      "We don't give Yono Arcade a one-line safe/unsafe verdict. Here's the actual framework we use — permissions, distribution source, and financial red flags — so you can check for yourself.",
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
            "Real-money gaming legality varies by Indian state. Confirm your state's current rules independently — this isn't something any single site can certify for you.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="4. Developer transparency">
        <p>
          Check whether the app lists a real developer/publisher name, a support contact, and a
          privacy policy — either on its store listing or within the app itself. Missing all
          three isn't automatically disqualifying, but it does mean you have fewer ways to get
          help if something goes wrong.
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
              "Real-money gaming legality in India is set at the state level and changes over time. If the app involves real-money mechanics, confirm current rules for your specific state before playing — this page isn't legal advice.",
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
