import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";

const TITLE = "Yono Arcade KYC: Does It Ask for ID?";
const META_TITLE = "Yono Arcade KYC: When It Asks for ID Documents";
const DESCRIPTION =
  "Phone-based verification vs document KYC in apps like Yono Arcade — what typically triggers each, and when ID checks usually appear at withdrawal.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-kyc";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-kyc.webp";
const PUBLISHED = "2026-10-28";
const LAST_REVIEWED = "2026-10-28";

const ANSWER =
  'KYC ("Know Your Customer") in apps like this typically comes in two distinct tiers — a light phone-number verification at sign-up, and a heavier document-based verification that usually only triggers later, most commonly at withdrawal. Understanding which tier you’re being asked for, and when, helps you tell a normal request from a suspicious one.';

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade KYC", item: URL },
  ],
};

export default function YonoArcadeKycPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="App Guide" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 28, 2026 · Last reviewed: October 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-kyc.webp"
        alt="Phone verification vs document KYC in Yono Arcade, and when ID checks usually appear."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Tier one: phone verification">
        <p>
          Almost every app in this category requires phone number verification just to create an
          account &mdash; typically an OTP (one-time password) sent via SMS. This is standard,
          low-friction, and expected from the very first step, and it&apos;s covered as part of
          basic account setup in our <Link href="/login">login guide</Link>. Phone verification
          alone does not require any government ID and shouldn&apos;t be confused with full KYC.
        </p>
      </ContentSection>

      <ContentSection heading="Tier two: document-based KYC">
        <p>
          Full KYC &mdash; submitting a government-issued ID (commonly PAN or Aadhaar in the
          Indian market this app targets), sometimes alongside a selfie or bank account proof
          &mdash; is the heavier tier, and it typically gets triggered at a specific point rather
          than upfront: usually when a user attempts a withdrawal, particularly past a certain
          cumulative amount. This pattern exists broadly across real-money gaming and
          fintech-adjacent apps, largely because regulations in several jurisdictions tie identity
          verification requirements to money leaving a platform, not money entering it. Our{" "}
          <Link href="/blog/yono-arcade-withdrawal-deposit-guide">
            withdrawal and deposit guide
          </Link>{" "}
          covers the withdrawal process this would sit inside.
        </p>
      </ContentSection>

      <ContentSection heading="What we can verify about this app specifically, and what we can't">
        <p>
          We have not independently confirmed the exact KYC flow, document types requested, or
          withdrawal threshold that triggers full KYC in the current version of this app. What is
          directly verified, from our own APK inspection documented in the{" "}
          <Link href="/blog/yono-arcade-apk-review">APK guide</Link>, is the app&apos;s permission
          set: 9 permissions total, none flagged sensitive &mdash; explored in full in our{" "}
          <Link href="/blog/yono-arcade-data-permissions">data permissions post</Link>. That&apos;s
          relevant context here: the app&apos;s installed permissions don&apos;t include anything
          like camera-triggered document capture by default at the OS level beyond what a normal
          in-app upload flow would use, which doesn&apos;t by itself confirm or deny what KYC
          documents the service asks you to submit through its interface once you&apos;re logged
          in.
        </p>
      </ContentSection>

      <ContentSection heading="Red flags that go beyond normal KYC">
        <p>
          Standard KYC asks for identity documents through the app&apos;s own secure upload flow,
          generally at or near a withdrawal attempt. Treat these as warning signs instead of normal
          process:
        </p>
        <BulletList
          items={[
            <>
              Being asked for ID documents immediately at sign-up, before you&apos;ve deposited or
              played anything, with no stated reason.
            </>,
            <>
              Being asked to send ID photos via an external chat app (WhatsApp, Telegram) to an
              &quot;agent&quot; rather than through the app&apos;s own verification screen.
            </>,
            <>
              Requests for information that has nothing to do with identity verification &mdash;
              like your other apps&apos; passwords, OTPs for unrelated accounts, or screen-sharing
              access.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="If KYC verification stalls or gets rejected">
        <p>
          Use the app&apos;s own designated support channel first. Our{" "}
          <Link href="/customer-care">customer care number</Link> post covers how to reach support
          as documented. Avoid third parties offering to &quot;fix&quot; or &quot;speed up&quot;
          your KYC for a fee &mdash; that pattern shows up across this app category as a common
          scam vector layered on top of a legitimate process.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          KYC exists specifically because this app involves real-money withdrawals. This is 18+
          content: have your identity documents ready before you try to withdraw, and only submit
          them through the app&apos;s own official flow.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Does Yono Arcade ask for ID when you first sign up?",
            answer:
              "Typically, apps in this category only require phone verification at sign-up. Full document KYC usually triggers later, commonly at withdrawal.",
          },
          {
            question: "What documents does full KYC usually require?",
            answer:
              "Commonly a government-issued ID such as PAN or Aadhaar, sometimes with a selfie or bank proof — standard for this app category, though we haven't confirmed this app's exact current requirement.",
          },
          {
            question: "Is it normal to be asked for ID via WhatsApp or Telegram?",
            answer:
              "No — that's a red flag. Legitimate KYC should go through the app's own verification screen, not an external chat app to an individual \"agent.\"",
          },
          {
            question: "What should I do if my KYC gets rejected?",
            answer:
              "Contact support through the app's official channel, documented in our customer care post, rather than paying a third party claiming to expedite it.",
          },
        ]}
      />
    </>
  );
}
