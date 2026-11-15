import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "Diwa777 Download APK, Promo Code & Guide";
const META_TITLE = "Diwa777 Download APK, Promo Code & Guide";
const DESCRIPTION =
  "Diwa777's official download link, what we've verified about the app, and why the number '777' in its name doesn't connect it to any other 777-branded app.";
const URL = "https://allyonoarcade.com/blog/diwa777-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwa777.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://sharediwa777.top?pid=474948727&channel=2030501&pkg=com.diwa777diwa001.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Diwa777 is an independent real-money gaming listing, not confirmed to be built by the same developer as Yono Arcade. Its download link is below. Beyond the package name and that link, we haven't independently verified any bonus amount, launch date, or feature — and the \"777\" in the name has no connection to any other app using that number.";

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
    { "@type": "ListItem", position: 3, name: "Diwa777 APK Download", item: URL },
  ],
};

export default function Diwa777ApkDownloadPage() {
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
          src="/images/platforms/diwa777.webp"
          alt="Diwa777 app icon — gold wordmark logo with an Indian tricolor swoosh underline"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download Diwa777">
        <p>
          Our sponsored download link is below. It is not an official app store link, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate Diwa777.
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
            Download Diwa777 (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Diwa777 isn't connected to any other &quot;777&quot; app">
        <p>
          &quot;777&quot; is one of the most recycled numbers in Indian real-money gaming branding &mdash;
          it shows up in Yono 777, Jaiho 777, 777 Game, and plenty of apps that have nothing to do with
          one another beyond the digits in their name. Diwa777 is a separate, independently-branded app
          from every one of them. Sharing a number in the name is a marketing choice, not a sign of shared
          ownership, shared code, or shared payout odds.
        </p>
        <p>
          If you&apos;ve used a different &quot;777&quot; app before, nothing about that experience carries
          over here &mdash; account, balance, promo codes, and verification status are all specific to
          Diwa777 itself, confirmed only through this listing and the download link above.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Diwa777&apos;s icon is a plain gold wordmark with an Indian tricolor swoosh underline &mdash;
          no separate graphic beyond the text itself. Its Android package name is{" "}
          <code>com.diwa777diwa001.app</code>. We haven&apos;t yet independently inspected the APK&apos;s
          signing certificate or version history, and no welcome bonus, launch date, or specific feature
          has been confirmed beyond what&apos;s stated here.
        </p>
      </ContentSection>

      <ContentSection heading="Before you install Diwa777">
        <p>
          1. Use the link above, or another source you can verify as official &mdash; searching
          &quot;Diwa777&quot; generically risks landing on an unrelated app. 2. Once installed, check
          the app&apos;s requested permissions; a rummy-style real-money app has no legitimate reason to
          ask for SMS or contacts access. 3. Treat any promo code you see claimed elsewhere as unverified
          until it&apos;s confirmed inside the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4.
          Read our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any
          account details.
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
            question: "Is Diwa777 the same app as other \"777\"-named apps?",
            answer:
              "No. Diwa777 is a separate, independently-branded app from every other app using \"777\" in its name. The shared number signals nothing about ownership, safety, or payout odds.",
          },
          {
            question: "Is Diwa777 available for download now?",
            answer: "Yes — our sponsored download link is above.",
          },
          {
            question: "Is Diwa777 built by the same developer as Yono Arcade?",
            answer:
              "Not confirmed. Diwa777 is an independent listing in our directory, with no verified connection to Yono Arcade or its developer.",
          },
          {
            question: "Is there a confirmed promo code for Diwa777?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
