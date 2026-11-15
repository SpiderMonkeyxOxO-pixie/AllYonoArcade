import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaRummy Download APK, Promo Code & Guide";
const META_TITLE = "DiwaRummy Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaRummy APK download link, today's promo code status, and what's actually confirmed about this independently listed rummy app before you install it.";
const URL = "https://allyonoarcade.com/blog/diwarummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwarummy.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK =
  "https://diwarummyshare.cyou?pid=336927528&channel=2010005&pkg=com.diwarummytg.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaRummy is a real-money rummy app listed in the same gold-wordmark, tricolor-swoosh family as its sibling Diwa-branded platforms. Our sponsored download link is below. It's an independent listing — not confirmed to be built by the same developer as Yono Arcade — and the APK itself hasn't been independently inspected yet, so treat any bonus or promo code claim as unverified until it's confirmed inside the app.";

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
    { "@type": "ListItem", position: 3, name: "DiwaRummy APK Download", item: URL },
  ],
};

export default function DiwaRummyApkDownloadPage() {
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
        src="/images/platforms/diwarummy.webp"
        alt="DiwaRummy app icon, a gold wordmark with a tricolor swoosh"
        width={96}
        height={96}
        className="mx-auto rounded-2xl mt-2"
      />

      <ContentSection heading="Download DiwaRummy">
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
            Download DiwaRummy (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Is DiwaRummy connected to Yono Arcade?">
        <p>
          No confirmed connection. DiwaRummy is an independent listing we track because readers search for it, not
          a product built or operated by the same developer as Yono Arcade. We haven&apos;t independently inspected
          the APK&apos;s package name (<strong>com.diwarummytg.app</strong>), version number, or signing certificate,
          and no welcome bonus or promo code has been confirmed for it.
        </p>
      </ContentSection>

      <ContentSection heading="DiwaRummy vs. every other &quot;Rummy&quot; app">
        <p>
          &quot;DiwaRummy&quot; is one of dozens of apps across this wider market using a &quot;[Word]Rummy&quot;
          naming pattern &mdash; Win Rummy, Cash Rummy, VIP Rummy, and others we&apos;ve covered on this site
          separately. Sharing the word &quot;Rummy&quot; only means these apps share a game <em>format</em>. It
          doesn&apos;t mean they share an operator, a bonus structure, a withdrawal policy, or any relationship to
          each other at all. If you&apos;ve used a different Rummy-named app before, don&apos;t assume DiwaRummy&apos;s
          terms, support, or payout behavior work the same way &mdash; each listing has to be checked on its own.
        </p>
        <p>
          Separately, rummy as a card format is widely treated in India as a game of skill rather than pure chance,
          a classification that&apos;s been upheld in various legal contexts for rummy specifically. That distinction
          is about the game format, not about any individual app&apos;s legitimacy, and it doesn&apos;t change this
          site&apos;s standard 18+ and responsible-gaming disclosure below.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a rummy app has no legitimate reason to request SMS or
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
            question: "Is DiwaRummy made by the same team as Yono Arcade?",
            answer:
              "No confirmed connection. DiwaRummy is an independent listing we track, not a product built or operated by the same developer as Yono Arcade.",
          },
          {
            question: "Is DiwaRummy the same as other Rummy-named apps like Win Rummy or Cash Rummy?",
            answer:
              "No. Sharing the word \"Rummy\" only means they share a game format — it doesn't mean the same operator, bonus terms, or withdrawal policy. Each app has to be checked separately.",
          },
          {
            question: "Is rummy legal in India?",
            answer:
              "Rummy is widely treated as a game of skill in India, a classification upheld in various legal contexts for the format itself. That's separate from any individual app's verification status, which is why our 18+ disclosure still applies regardless.",
          },
          {
            question: "Is there a promo code for DiwaRummy?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
