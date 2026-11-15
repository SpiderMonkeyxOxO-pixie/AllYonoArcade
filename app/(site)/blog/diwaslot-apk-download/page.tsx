import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaSlot Download APK, Promo Code & Guide";
const META_TITLE = "DiwaSlot Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaSlot APK download link, today's promo code status, and how spin-based slot apps actually work before you install this independently listed platform.";
const URL = "https://allyonoarcade.com/blog/diwaslot-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwaslot.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK =
  "https://sharediwaslot.vip?pid=274077973&channel=2030401&pkg=com.diwaslotdiwa001.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaSlot names its game format directly in its branding, pairing the plain gold wordmark used across its network with the word \"Slot.\" Our sponsored download link is below. It's an independent listing — not confirmed to be built by the same developer as Yono Arcade — and no payout rate, RTP figure, or bonus term has been independently verified for it.";

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
    { "@type": "ListItem", position: 3, name: "DiwaSlot APK Download", item: URL },
  ],
};

export default function DiwaSlotApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="New Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <Image
        src="/images/platforms/diwaslot.webp"
        alt="DiwaSlot app icon, a gold wordmark naming the slot game format"
        width={96}
        height={96}
        className="mx-auto rounded-2xl mt-2"
      />

      <ContentSection heading="Download DiwaSlot">
        <p>
          Our sponsored referral link is below. It is not an official store link, and we may earn a commission if
          you use it.
        </p>
        <p>
          <a
            href={REFERRAL_LINK}
            {...EXTERNAL}
            className="btn-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            Download DiwaSlot (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Is DiwaSlot connected to Yono Arcade?">
        <p>
          No confirmed connection. DiwaSlot is an independent listing we track because readers search for it, not a
          product built or operated by the same developer as Yono Arcade. We haven&apos;t independently inspected
          the APK&apos;s package name (<strong>com.diwaslotdiwa001.app</strong>), version number, or signing
          certificate.
        </p>
      </ContentSection>

      <ContentSection heading="How slot-style apps actually work">
        <p>
          Worth understanding before you install anything with &quot;slot&quot; in the name: a slot app is built
          around spinning reels that land on a random combination of symbols. Unlike rummy, which involves ongoing
          decisions &mdash; which cards to hold, discard, or group &mdash; a slot round is a single spin with a
          chance-driven outcome. There&apos;s no hand to play out, no skill element in the result, and nothing you
          do mid-spin changes what the reels land on.
        </p>
        <p>
          That makes DiwaSlot a genuinely different kind of app from a rummy or card-game listing, even within the
          same Diwa-branded family. It&apos;s worth knowing which type of app you&apos;re actually installing before
          you put money into it. None of that said, we still haven&apos;t independently verified DiwaSlot&apos;s
          specific payout rate, RTP figure, or any bonus terms &mdash; so treat those as unconfirmed regardless of
          how the format itself works.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a slot app has no legitimate reason to request SMS or
          contacts access. 3. Treat any claimed bonus or promo code as unverified until it&apos;s confirmed inside
          the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4. Read our{" "}
          <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever the name
          of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is DiwaSlot made by the same team as Yono Arcade?",
            answer:
              "No confirmed connection. DiwaSlot is an independent listing we track, not a product built or operated by the same developer as Yono Arcade.",
          },
          {
            question: "Is DiwaSlot a game of skill, like rummy?",
            answer:
              "No. Slot-style apps are spin-based and chance-driven — there's no hand to play out and nothing you do mid-spin changes the outcome. That's a real distinction from a rummy-format app.",
          },
          {
            question: "What's DiwaSlot's payout rate or RTP?",
            answer:
              "Not independently verified. We haven't confirmed any payout rate, RTP figure, or bonus term for this app, so treat any such claim you see elsewhere as unconfirmed.",
          },
          {
            question: "Is there a promo code for DiwaSlot?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
