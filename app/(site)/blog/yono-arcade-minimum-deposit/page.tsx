import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Yono Arcade Minimum Deposit: What the App Shows";
const META_TITLE = "Yono Arcade Minimum Deposit: What to Expect";
const DESCRIPTION =
  "Typical minimum deposit ranges seen across apps like Yono Arcade, and why you should confirm the exact current figure inside the app, not from any blog post.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-minimum-deposit";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-minimum-deposit.webp";
const PUBLISHED = "2026-10-27";
const LAST_REVIEWED = "2026-10-27";

const ANSWER =
  "The single most important thing to know about minimum deposit figures for an app like this: they change, they vary by payment method, and the only trustworthy source for the current number is the deposit screen inside the app itself — not this post, and not any other blog.";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade Minimum Deposit", item: URL },
  ],
};

export default function YonoArcadeMinimumDepositPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="App Guide" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 27, 2026 · Last reviewed: October 27, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-minimum-deposit.webp"
        alt="What to expect from Yono Arcade's minimum deposit screen, and why the figure should be checked in-app."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Typical minimum deposit ranges in this app category">
        <p>
          Real-money gaming apps distributed in this space, covering rummy, slots, Aviator-style
          crash games, and Andar Bahar-type titles, commonly set minimum deposits in a low range
          &mdash; frequently somewhere in the tens to low hundreds of rupees &mdash; specifically
          to lower the barrier for new users to try the platform. Minimums also often differ by
          payment method (UPI, bank transfer, e-wallet), with UPI typically supporting the lowest
          minimums because of how the rails work. This is a category-wide pattern we&apos;re
          describing, not a confirmed figure for this specific app&apos;s current version.
        </p>
      </ContentSection>

      <ContentSection heading="Why we're not quoting a specific number for this app">
        <p>
          Minimum deposit amounts are exactly the kind of detail that changes without notice
          &mdash; through routine app updates, regional pricing adjustments, or payment-processor
          changes &mdash; and get stale in published content almost immediately. A number that was
          accurate last month can be wrong today. Rather than publish a specific figure that risks
          being outdated by the time you read it, we&apos;re pointing you to where the real,
          current number lives: the app&apos;s own deposit/wallet screen, after logging in through
          the process covered in our <Link href="/login">login guide</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="How to check it yourself, step by step">
        <p>
          Open the app and log into your account. Navigate to the wallet or deposit section
          (naming varies by version, but it&apos;s typically on the main navigation or home
          screen). Select your intended payment method &mdash; the minimum often differs between
          options. The screen should display the current minimum and maximum deposit figures
          before you commit to an amount.
        </p>
        <p>
          If the app doesn&apos;t clearly display a minimum before you enter a payment amount,
          treat that as a minor transparency red flag worth noting, though not necessarily
          disqualifying on its own &mdash; see our broader{" "}
          <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> review for how we weigh
          signals like this.
        </p>
      </ContentSection>

      <ContentSection heading="How this connects to withdrawals">
        <p>
          Minimum deposit figures are sometimes confused with minimum withdrawal thresholds, which
          are typically a separate (and often higher) number. Don&apos;t assume the two match. Our
          dedicated{" "}
          <Link href="/blog/yono-arcade-withdrawal-deposit-guide">
            withdrawal and deposit guide
          </Link>{" "}
          covers both sides of this in detail, including how the two figures usually differ and
          why.
        </p>
      </ContentSection>

      <ContentSection heading="A practical note on deposit minimums and budgeting">
        <p>
          A low minimum deposit makes an app easy to try, but it can also make it easy to deposit
          repeatedly in small amounts without feeling the cumulative total. If you&apos;re tracking
          your own spending, total what you&apos;ve deposited over a week or month rather than
          judging each individual deposit against the minimum threshold alone.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This app involves real-money deposits for gameplay. This content is intended for an 18+
          audience. Set a total spending limit before you deposit anything, and treat the minimum
          deposit figure as a floor, not a target.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "What is Yono Arcade's exact minimum deposit right now?",
            answer:
              "We don't publish a specific figure because it can change without notice. Check your in-app deposit screen for the current number.",
          },
          {
            question: "Does the minimum deposit differ by payment method?",
            answer:
              "In apps of this type, yes, typically — UPI often supports the lowest minimums. Confirm per-method inside the app.",
          },
          {
            question: "Is the minimum deposit the same as the minimum withdrawal?",
            answer:
              "No, these are usually separate figures, often with withdrawal minimums set higher. See our withdrawal and deposit guide for details.",
          },
          {
            question: "Why doesn't AllYonoArcade just list the current minimum deposit?",
            answer:
              "Because these figures change frequently and we'd rather send you to the authoritative, always-current source — the app itself — than publish something that could go stale.",
          },
        ]}
      />
    </>
  );
}
