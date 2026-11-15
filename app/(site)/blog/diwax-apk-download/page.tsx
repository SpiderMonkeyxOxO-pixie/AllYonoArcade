import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaX Download APK, Promo Code & Guide";
const META_TITLE = "DiwaX Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaX APK download link, how its icon compares to DiwaWow's near-identical reel graphic, and today's promo code status before you install it.";
const URL = "https://allyonoarcade.com/blog/diwax-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwax.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwaxshare.one?pid=510040040&channel=2010003&pkg=com.diwax003.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaX is a real-money gaming app whose icon pairs a gold cherry-bell-seven slot reel with a wordmark built around a large red \"X\". Our sponsored download link is below. It's an independent listing in the same visually-branded network as several other Diwa-named apps, not a confirmed product of the same developer as Yono Arcade. No welcome bonus or promo code has been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "DiwaX APK Download", item: URL },
  ],
};

export default function DiwaXApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2 text-center">
        <Image
          src="/images/platforms/diwax.webp"
          alt="DiwaX app icon — gold cherry, bell and seven slot reel above a wordmark pairing gold Diwa lettering with a large red X"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaX">
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
            Download DiwaX (sponsored link)
          </a>
        </p>
        <p>
          The package behind this link identifies itself as <strong>com.diwax003.app</strong> &mdash; the
          &quot;003&quot; inside the package name is worth noting if you&apos;re comparing this install against
          a copy from somewhere else.
        </p>
      </ContentSection>

      <ContentSection heading="DiwaX vs. DiwaWow: same reel graphic, different wordmark">
        <p>
          If DiwaX&apos;s icon looks familiar, that&apos;s because the slot-reel artwork &mdash; one cherry, one
          bell, one seven, across three gold reels &mdash; is identical to the reel used on DiwaWow&apos;s icon.
          The honest answer for anyone comparing the two side by side: the reel graphic itself tells you nothing
          that distinguishes them.
        </p>
        <p>
          What actually differs is the wordmark underneath it. DiwaWow pairs gold &quot;Diwa&quot; lettering with
          &quot;Wow&quot; spelled out in red, gem-textured text. DiwaX instead pairs the same gold &quot;Diwa&quot;
          lettering with a single oversized red letter, &quot;X&quot; &mdash; not a word, just the letter, styled
          noticeably larger than everything else on the icon.
        </p>
        <p>
          Worth being explicit about: a shared icon graphic across two apps in the same visually-branded family is
          common, and on its own it doesn&apos;t tell you anything meaningful about whether the apps share an
          owner, a developer, or terms of service. Treat each app as its own independent listing regardless of
          how similar the artwork looks.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaX is not listed under that name on the Play Store &mdash; search results there show only unrelated
          apps, which is the same pattern we&apos;ve found for most platforms in this family. We haven&apos;t yet
          independently inspected the APK&apos;s version number or signing certificate beyond the package name
          itself. DiwaX is an <strong>independent listing</strong> and is not confirmed to be built by the same
          developer as Yono Arcade.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s permissions &mdash; a slots-and-rummy app has no legitimate reason to
          request SMS or contacts access. 3. Treat any claimed promo code as unverified until it&apos;s confirmed
          inside the app itself &mdash; see{" "}
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
            question: "Why does DiwaX's icon look like DiwaWow's?",
            answer:
              "Both use the same cherry-bell-seven slot reel graphic. Only the wordmark differs — DiwaWow spells out \"Wow\" in red gem-textured text, while DiwaX uses a single oversized red \"X\" instead of a word.",
          },
          {
            question: "Does a shared icon mean DiwaX and DiwaWow are the same company?",
            answer:
              "Not necessarily. A shared reel graphic across apps in the same visually-branded family is common and isn't, by itself, confirmation of shared ownership or terms.",
          },
          {
            question: "Is DiwaX available for download now?",
            answer: "Yes — our sponsored link is above.",
          },
          {
            question: "Is there a promo code for DiwaX?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
