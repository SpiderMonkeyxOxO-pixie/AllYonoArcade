import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaWin Download APK, Promo Code & Guide";
const META_TITLE = "DiwaWin Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaWin APK download link, what its 777-reel icon actually shows, and today's promo code status — plus what's still unconfirmed before you install it.";
const URL = "https://allyonoarcade.com/blog/diwawin-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwawin.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwawinshare.one?pid=396584296&channel=2020007&pkg=com.diwawin007.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaWin is a real-money gaming app whose icon leads with a gold 777 slot reel, and our sponsored download link is below. It's an independent listing in the same visually-branded network as several other Diwa-named apps, not a confirmed product of the same developer as Yono Arcade. No welcome bonus or promo code has been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "DiwaWin APK Download", item: URL },
  ],
};

export default function DiwaWinApkDownloadPage() {
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
          src="/images/platforms/diwawin.webp"
          alt="DiwaWin app icon — gold 777 slot reel above a two-tone Diwa Win wordmark with a gold star accent"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaWin">
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
            Download DiwaWin (sponsored link)
          </a>
        </p>
        <p>
          The package behind this link identifies itself as <strong>com.diwawin007.app</strong> &mdash; note the
          &quot;007&quot; sitting inside the package name itself, which is worth knowing if you&apos;re comparing
          this install against a copy from somewhere else.
        </p>
      </ContentSection>

      <ContentSection heading="What the 777 reel on the icon actually means">
        <p>
          DiwaWin&apos;s icon is built around a gold three-reel slot graphic showing <strong>777 across all
          three reels</strong> &mdash; a straight triple-seven line, not a mixed set of symbols. On mechanical
          slot machines, a triple-seven result is traditionally the classic top jackpot combination, which is
          almost certainly why it was chosen for this icon: it signals &quot;biggest win&quot; at a glance before
          you&apos;ve opened the app.
        </p>
        <p>
          That&apos;s a detail specific to DiwaWin among the apps in this family. Two other Diwa-branded listings
          we&apos;ve covered, DiwaWow and DiwaX, use a cherry-bell-seven reel instead of a pure triple-777 &mdash;
          so if you&apos;re trying to tell these icons apart before installing, the reel symbols themselves are
          one real way to do it.
        </p>
        <p>
          Standard disclosure: the word &quot;Win&quot; in the app&apos;s name, and the jackpot imagery on its
          icon, is marketing and branding &mdash; not a guarantee of any outcome. Treat it the same way you&apos;d
          treat any slot-themed branding.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaWin is not listed under that name on the Play Store &mdash; search results there show only
          unrelated apps, which is the same pattern we&apos;ve found for most platforms in this family. We
          haven&apos;t yet independently inspected the APK&apos;s version number or signing certificate beyond
          the package name itself. DiwaWin is an <strong>independent listing</strong> and is not confirmed to be
          built by the same developer as Yono Arcade.
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
            question: "What does the 777 on the DiwaWin icon mean?",
            answer:
              "It's a slot-reel graphic showing triple sevens, the classic top jackpot combination on mechanical slot machines. It's branding and imagery, not a confirmed feature or outcome inside the app.",
          },
          {
            question: "Is DiwaWin available for download now?",
            answer: "Yes — our sponsored link is above.",
          },
          {
            question: "Is DiwaWin made by the same developer as Yono Arcade?",
            answer:
              "That isn't confirmed. DiwaWin is an independent listing we track in the same visually-branded network, not a verified product of Yono Arcade's developer.",
          },
          {
            question: "Is there a promo code for DiwaWin?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
