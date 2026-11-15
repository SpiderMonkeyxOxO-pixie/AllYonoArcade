import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaGame Download APK, Promo Code & Guide";
const META_TITLE = "DiwaGame Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaGame's official download link and what we've verified about the app — plus why its generic name makes it easy to confuse with unrelated apps.";
const URL = "https://allyonoarcade.com/blog/diwagame-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwagame.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://diwagameshare.me?pid=528775003&channel=2010005&pkg=com.diwagamediwa001.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaGame is an independent real-money gaming listing, not confirmed to be built by the same developer as Yono Arcade. Its download link is below. \"Game\" is the most generic word in the whole Diwa family's naming, which makes it easy to confuse with unrelated apps also called some variant of \"game\" — the link below is the one we've matched to this specific listing.";

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
    { "@type": "ListItem", position: 3, name: "DiwaGame APK Download", item: URL },
  ],
};

export default function DiwaGameApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Independent Listing" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2 mb-2 flex justify-center">
        <Image
          src="/images/platforms/diwagame.webp"
          alt="DiwaGame app icon — plain gold wordmark logo"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaGame">
        <p>
          Our sponsored download link is below. It is not an official app store link, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate DiwaGame.
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
            Download DiwaGame (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="The most generic name in the Diwa family">
        <p>
          Out of every app in this branding family, &quot;DiwaGame&quot; is the least specific name &mdash;
          literally &quot;the game.&quot; That genericness is exactly what makes it easy to mix up with
          an unrelated app that happens to also use some variant of the word &quot;game&quot; in its
          listing, especially once you search the name on an app store or a general search engine instead
          of going to a specific source.
        </p>
        <p>
          The safest way to avoid that mix-up is to use the exact download link above, matched to the
          package name <code>com.diwagamediwa001.app</code>, rather than searching &quot;DiwaGame&quot;
          generically and trusting whichever result looks close enough.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          DiwaGame&apos;s icon is a plain gold wordmark, consistent with the branding style used across its
          network. Its Android package name is <code>com.diwagamediwa001.app</code>. We haven&apos;t yet
          independently inspected the APK&apos;s signing certificate or version history, and no bonus
          amount, launch date, or specific feature has been confirmed beyond what&apos;s stated here.
        </p>
      </ContentSection>

      <ContentSection heading="Before you install DiwaGame">
        <p>
          1. Use the link above rather than a generic search for &quot;DiwaGame,&quot; given how common
          that naming pattern is elsewhere. 2. Once installed, check the app&apos;s requested permissions
          &mdash; a rummy-style real-money app has no legitimate reason to ask for SMS or contacts access.
          3. Treat any promo code you see claimed elsewhere as unverified until it&apos;s confirmed inside
          the app itself &mdash; see <Link href="/promo-codes">today&apos;s promo code status</Link> across
          the apps we track. 4. Read our{" "}
          <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account
          details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever
          the name of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Why is DiwaGame easy to confuse with other apps?",
            answer:
              "Its name is the most generic one in its branding family — just \"game\" — which overlaps with unrelated apps using similar wording. Use the exact download link on this page rather than searching the name generically.",
          },
          {
            question: "Is DiwaGame available for download now?",
            answer: "Yes — our sponsored download link is above.",
          },
          {
            question: "Is DiwaGame built by the same developer as Yono Arcade?",
            answer:
              "Not confirmed. DiwaGame is an independent listing in our directory, with no verified connection to Yono Arcade or its developer.",
          },
          {
            question: "Is there a confirmed promo code for DiwaGame?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
