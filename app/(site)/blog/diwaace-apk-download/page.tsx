import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaAce Download APK, Promo Code & Guide";
const META_TITLE = "DiwaAce Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaAce APK download link, a look at its queen-ace-king card icon, and the current promo code status — plus what's still unconfirmed before you install it.";
const URL = "https://allyonoarcade.com/blog/diwaace-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwaace.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwaaceshare.win?pid=307328239&channel=2010003&pkg=com.diwaace003.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaAce is a newly listed platform in the Diwa-branded family we track. Our sponsored download link is below. Its icon stands out from the plain wordmark used by most apps in this group — an ornate gold crown frame built around a Queen of Hearts, Ace of Spades, and King of Diamonds — but no bonus amount or promo code has been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "DiwaAce APK Download", item: URL },
  ],
};

export default function DiwaAceApkDownloadPage() {
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
          src="/images/platforms/diwaace.webp"
          alt="DiwaAce app icon: a gold crown-topped slot-reel frame holding a Queen of Hearts, Ace of Spades, and King of Diamonds"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaAce">
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
            Download DiwaAce (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What the queen-ace-king icon actually shows">
        <p>
          DiwaAce&apos;s icon is more elaborate than the plain gold wordmark used across most of this app family: an
          ornate crown sits on top of a gold slot-reel frame, and instead of fruit or number symbols inside that
          frame, the icon shows three playing-card faces &mdash; a Queen of Hearts, an Ace of Spades, and a King of
          Diamonds.
        </p>
        <p>
          It&apos;s worth being precise about what that does and doesn&apos;t tell you. The frame itself is styled
          like a slot reel, with the cards sitting where reel symbols would normally go &mdash; so the icon reads as
          a slot-style design borrowing card imagery, not necessarily proof that the app itself is a card or rummy
          game. We haven&apos;t opened the app to confirm whether its actual game mode is rummy, a card-themed slot,
          or something else entirely. Treat the icon as a visual cue, not a confirmed description of the mechanic.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaAce is an independent listing we&apos;re tracking under this network&apos;s branding; it is not
          confirmed to be built by the same developer as Yono Arcade. We have not independently inspected the
          APK&apos;s package name beyond what&apos;s visible in the download link
          (<code>com.diwaace003.app</code>), its version number, or its signing certificate, and it is not listed
          under this name on the Play Store.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; there&apos;s no legitimate reason for a card or slots
          app to request SMS or contacts access. 3. Treat any promo code you see for DiwaAce as unverified until
          it&apos;s confirmed inside the app itself &mdash; see{" "}
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
            question: "Is DiwaAce the same app as Yono Arcade?",
            answer:
              "No — DiwaAce is an independent listing in a similarly branded network. It is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Does DiwaAce's card icon mean it's a rummy app?",
            answer:
              "Not necessarily. The icon frames three playing cards inside a slot-reel-style design, which borrows card imagery without confirming the actual in-app game mode. We haven't verified whether DiwaAce runs as rummy, a card-themed slot, or something else.",
          },
          {
            question: "Is there a confirmed promo code for DiwaAce?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
          {
            question: "Is DiwaAce available on the Play Store?",
            answer: "Not under that name — it distributes through its own download link rather than the Play Store.",
          },
        ]}
      />
    </>
  );
}
