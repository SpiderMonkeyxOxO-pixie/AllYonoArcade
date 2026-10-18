import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";

const TITLE = "Yono Arcade Refer and Earn: How It Works";
const META_TITLE = "Yono Arcade Refer and Earn: How It Typically Works";
const DESCRIPTION =
  "How refer-and-earn programs in apps like Yono Arcade generally work — unique codes, invitee deposit triggers — with honest limits on what's verified.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-refer-and-earn";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-refer-and-earn.webp";
const PUBLISHED = "2026-10-26";
const LAST_REVIEWED = "2026-10-26";

const ANSWER =
  "Refer-and-earn is a standard feature across this entire app category, and the general mechanics are well understood even where this specific app's exact numbers aren't something we can independently confirm.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: META_TITLE,
    description: DESCRIPTION,
  },
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
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Yono Arcade Refer and Earn", item: URL },
  ],
};

export default function YonoArcadeReferAndEarnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="App Guide" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 26, 2026 · Last reviewed: October 26, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-refer-and-earn.webp"
        alt="How the Yono Arcade refer and earn program typically works."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="The general pattern these programs follow">
        <p>
          Across real-money gaming apps like this one, refer-and-earn programs typically work the
          same basic way:
        </p>
        <BulletList
          items={[
            <>
              <strong>You get a unique referral code or link</strong>, generated inside your own
              account after you sign up and log in. Our{" "}
              <Link href="/login">login guide</Link> covers account access if you&apos;re setting
              this up for the first time.
            </>,
            <>
              <strong>You share that code</strong> with someone who doesn&apos;t already have an
              account &mdash; through a direct link, a manually entered code at sign-up, or
              sometimes an agent-style tagged APK file, the mechanism we detail in our{" "}
              <Link href="/blog/yono-arcade-agent-apk">agent APK</Link> post.
            </>,
            <>
              <strong>The invitee signs up and typically must make a qualifying first deposit</strong>{" "}
              for the referral to &quot;convert.&quot; Apps in this category almost always gate the
              reward behind a real deposit rather than a free sign-up, specifically to deter
              fake-account farming.
            </>,
            <>
              <strong>You receive a reward</strong> &mdash; commonly a percentage of that first
              deposit, a flat bonus amount, or in some programs an ongoing small percentage of the
              invitee&apos;s activity. Which model (if any) this specific app uses in its current
              version is not something we have independently verified.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="What this connects to in the app's confirmed technical design">
        <p>
          One detail that is directly verified, from our own APK inspection documented in the{" "}
          <Link href="/blog/yono-arcade-apk-review">APK guide</Link>: the app&apos;s signing block
          carries a per-download channel/vid tag. This is exactly the kind of infrastructure that
          supports referral attribution at scale &mdash; letting the backend know which code or
          channel led to a given install. That&apos;s a confirmed structural fact, separate from
          (and more reliable than) any specific reward figure we might repeat from a promo page.
        </p>
      </ContentSection>

      <ContentSection heading="What we have not verified, and why we're saying so plainly">
        <p>
          We have not independently confirmed: the exact reward amount per successful referral,
          whether rewards are flat or percentage-based, any minimum deposit threshold that triggers
          payout, how quickly rewards are credited, or whether multi-level (recruiting a
          referrer&apos;s referrals) earning exists in the current version. Any page stating
          precise numbers for this program without showing a source is repeating something it
          likely can&apos;t verify either &mdash; screenshots and figures from these programs
          change frequently and aren&apos;t reliably documented publicly. If you want current,
          accurate numbers, the only trustworthy source is the program&apos;s terms as displayed
          inside your own account in the app itself.
        </p>
      </ContentSection>

      <ContentSection heading="A caution specific to refer-and-earn programs">
        <p>
          Because these programs reward recruitment rather than skill or luck in the game itself,
          they create an incentive to encourage friends or followers to deposit money &mdash; which
          is a different kind of pressure than ordinary gameplay. If you participate, be
          transparent with the people you refer: they deserve to know the program exists and that
          you benefit from their deposit, not just the headline bonus. Our own{" "}
          <Link href="/promo-codes">promo code</Link> coverage discloses the same kind of
          relationship for the same reason.
        </p>
      </ContentSection>

      <ContentSection heading="Bottom line">
        <p>
          The structural mechanism (unique codes, deposit-gated conversion, tagged distribution) is
          well-established and, in part, directly verified for this app. The specific
          dollar-and-cent numbers are not something we can confirm from outside the app, and
          we&apos;d rather tell you that clearly than guess.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This program only pays out around real-money deposits. This is 18+ content: don&apos;t
          refer anyone, or accept a referral, under pressure to deposit more than you&apos;d
          already planned to spend.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "How much does Yono Arcade pay for each referral?",
            answer:
              "We haven't independently verified a specific figure. Check the referral terms displayed inside your own account for current numbers.",
          },
          {
            question: "Does my friend need to deposit money for my referral to count?",
            answer:
              "In this app category, that's the typical pattern — a qualifying first deposit is usually required, though we can't confirm this app's exact threshold.",
          },
          {
            question: "Is the referral tracking technically real, or just a marketing claim?",
            answer:
              "It's technically real in this case — our own APK inspection confirmed a per-download channel/vid tag built into the app's signing block.",
          },
          {
            question: "Should I refer people to earn money?",
            answer:
              "Only if you're transparent with them about the program and your interest in it, and only within whatever budget guidance you'd give them anyway as an 18+ activity.",
          },
        ]}
      />
    </>
  );
}
