import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Jaiho Play APK Download: What We've Verified So Far";
const META_TITLE = "Jaiho Play APK Download: What We've Verified So Far";
const DESCRIPTION =
  "Jaiho Play launched 15 October 2026 on the Yono network with rummy and Teen Patti. Here is the download link, what is confirmed, and what still is not.";
const URL = "https://allyonoarcade.com/blog/jaiho-play-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/jaiho-play-apk-download.webp";
const PUBLISHED = "2026-11-25";
const LAST_REVIEWED = "2026-11-25";
const REFERRAL_LINK = "https://jaihogo.com/?code=E4VW58CDZFY&t=1792035058";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Jaiho Play launched 15 October 2026 on the Yono network with rummy and Teen Patti. The sponsored download link is below. No welcome bonus or promo code has been independently confirmed, and the APK's package name, permissions, and signing certificate haven't been inspected yet.";

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
    { "@type": "ListItem", position: 3, name: "Jaiho Play APK Download", item: URL },
  ],
};

export default function JaihoPlayApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 25, 2026 &middot; Last reviewed: November 25, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/jaiho-play-apk-download.webp"
        alt="Jaiho Play app download screen on a smartphone, a real-money rummy and Teen Patti app that launched 15 October 2026"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is Jaiho Play?">
        <p>
          Jaiho Play is a real-money rummy and Teen Patti app that opened on 15 October 2026 as part of
          the Yono network (the same loose family of similarly branded apps that includes Spin Rummy,
          123 Rummy, and Yono Arcade itself). It has been live for about six weeks now. The app names
          Yonotech Pvt. Ltd. as its operator, a claim we have not independently verified. For the wider
          list of apps in this network, see our <Link href="/blog/all-yono-games">all Yono games
          directory</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Download Jaiho Play">
        <p>
          Our sponsored referral link is below. It is not an official store link, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate Jaiho Play.
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
            Download Jaiho Play (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          At launch, Jaiho Play shipped as version 1.0.0 with two games: Rummy and Teen Patti. The app
          showed a minimum deposit around &#8377;50&ndash;&#8377;100 and a minimum withdrawal of
          &#8377;100, with UPI, Paytm, and BHIM listed as payment methods. None of this comes from our
          own testing. It&apos;s what the app displayed at launch, recorded once and not yet re-checked.
        </p>
      </ContentSection>

      <ContentSection heading="What's still unverified">
        <p>
          A welcome bonus somewhere between &#8377;50 and &#8377;500 appeared in the app, but the
          conditions attached to it were never recorded, so treat that range as unconfirmed rather than a
          number you can rely on. We also haven&apos;t inspected the APK&apos;s package name, permission
          list, or signing certificate. That&apos;s the same check we run on every app in this category,
          described in our <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology.
          There is still no official website or store listing for Jaiho Play, which makes that
          verification harder to complete than it is for apps with a first-party page to check against.
        </p>
      </ContentSection>

      <ContentSection heading="Jaiho Play vs. Jaiho Arcade">
        <p>
          Searches for Jaiho Play regularly turn up Jaiho Arcade instead, because the two apps share a
          first word and nothing else confirmed. We cover the distinction in detail in{" "}
          <Link href="/blog/jaiho-play-vs-jaiho-arcade">Jaiho Play vs Jaiho Arcade</Link> and{" "}
          <Link href="/blog/jaiho-play-vs-yono-arcade">Jaiho Play vs Yono Arcade</Link>. If you&apos;ve
          seen a claim that Jaiho Play is &quot;the new&quot; version of either app, that&apos;s a name
          assumption, not something either operator has stated.
        </p>
      </ContentSection>

      <ContentSection heading="Promo code status">
        <p>
          No fixed Jaiho Play promo code has been confirmed. Check our{" "}
          <Link href="/promo-codes">promo codes page</Link> for current codes across all platforms. If
          one surfaces for Jaiho Play, it gets added there.
        </p>
      </ContentSection>

      <ContentSection heading="Before you install it">
        <p>
          Confirm the link above, or whatever source you&apos;re using, actually matches the operator
          name and version listed here. Once installed, check what permissions the app asks for; a card
          game has no real reason to want your contacts or SMS. Any bonus or code is worth trusting only
          once the app itself confirms it, not a page that promises it in advance.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything,
          regardless of how established a platform looks.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Has Jaiho Play launched?",
            answer: "Yes. It opened 15 October 2026 and has been live for about six weeks.",
          },
          {
            question: "Is Jaiho Play safe to install?",
            answer:
              "Not fully verified either way. We haven't inspected the APK's package name, permissions, or signing certificate yet.",
          },
          {
            question: "Is there a Jaiho Play promo code?",
            answer: "None confirmed as of this review. Check our promo codes page for the current status.",
          },
          {
            question: "Is Jaiho Play the same app as Jaiho Arcade?",
            answer:
              "No evidence shows that. They share a first word and nothing else confirmed. See our comparison guide for how to tell them apart.",
          },
          {
            question: "What games does Jaiho Play have?",
            answer: "Rummy and Teen Patti, as seen at launch. No other games have been confirmed since.",
          },
        ]}
      />
    </>
  );
}
