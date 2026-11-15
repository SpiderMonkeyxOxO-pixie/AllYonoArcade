import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaLucky Download APK, Promo Code & Guide";
const META_TITLE = "DiwaLucky Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaLucky APK download link, what its cherry-and-bell slot icon tells you about the app, and the current promo code status — plus what's still unconfirmed.";
const URL = "https://allyonoarcade.com/blog/diwalucky-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwalucky.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://share1diwaluck.vip?pid=482834010&channel=2010002&pkg=com.diwalucky2.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaLucky is a newly listed platform in the Diwa-branded family we track. Our sponsored download link is below. Its icon uses the same ornate gold crown-and-gem framing seen on DiwaAce, but fills the reel with a classic cherry-bell-cherry symbol set instead of playing cards. No welcome bonus or promo code has been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "DiwaLucky APK Download", item: URL },
  ],
};

export default function DiwaLuckyApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2">
        <Image
          src="/images/platforms/diwalucky.webp"
          alt="DiwaLucky app icon: a gold ornate slot-reel frame holding a cherry, a bell, and a cherry symbol"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaLucky">
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
            Download DiwaLucky (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What the cherry-and-bell icon tells you">
        <p>
          DiwaLucky shares the same ornate gold crown-and-gem frame used elsewhere in this network, but what&apos;s
          inside that frame is different from DiwaAce&apos;s playing cards: a cherry, a bell, and a second cherry
          &mdash; the classic three-symbol set lifted straight from mechanical fruit-machine slots.
        </p>
        <p>
          Unlike card imagery, which can be read multiple ways, cherries and bells are a fairly unambiguous,
          long-standing visual shorthand for a chance-based slot format rather than a skill or card game. That
          makes this icon genuinely informative context about what kind of game you&apos;re likely installing,
          even though we still haven&apos;t opened the app ourselves to confirm the reel mechanics, paylines, or
          odds. One thing the icon does <em>not</em> tell you: the word &quot;Lucky&quot; in the app&apos;s name is
          branding, not a claim about win probability or payout rate.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaLucky is an independent listing we&apos;re tracking under this network&apos;s branding; it is not
          confirmed to be built by the same developer as Yono Arcade. We haven&apos;t independently inspected the
          APK&apos;s package name beyond what&apos;s visible in the download link
          (<code>com.diwalucky2.app</code>), its version number, or its signing certificate, and it is not listed
          under this name on the Play Store.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a slots app has no legitimate reason to request SMS
          or contacts access. 3. Treat any claimed promo code as unverified until it&apos;s confirmed inside the
          app itself &mdash; see <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we
          track. 4. Read our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any
          account details.
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
            question: "Is DiwaLucky the same app as Yono Arcade?",
            answer:
              "No — DiwaLucky is an independent listing in a similarly branded network. It is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Does DiwaLucky's name mean the odds are better?",
            answer:
              "No. \"Lucky\" is branding, not a confirmed payout or probability claim. We haven't verified any odds or RTP figures for this app.",
          },
          {
            question: "What does the cherry-and-bell icon actually mean?",
            answer:
              "It's the classic mechanical fruit-machine symbol set, a genuine visual signal that DiwaLucky is presented as a chance-based slot format — distinct from DiwaAce's card-themed icon.",
          },
          {
            question: "Is there a confirmed promo code for DiwaLucky?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
