import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaTop Download APK, Promo Code & Guide";
const META_TITLE = "DiwaTop Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaTop APK download link, what we have and haven't verified about this app, and today's promo code status — including why its name isn't a ranking claim.";
const URL = "https://allyonoarcade.com/blog/diwatop-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwatop.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const DOWNLOAD_LINK = "https://diwatopshare.win?pid=526974857&channel=2010001&pkg=com.diwatop.app";
const PACKAGE_NAME = "com.diwatop.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaTop's download link is below. It's an independent listing in the same visual network as Yono Arcade and is not confirmed to be built by the same developer. Before anything else: the word \"Top\" in its name is self-chosen branding, not a ranking from any app store, review site, or from this guide.";

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
    { "@type": "ListItem", position: 3, name: "DiwaTop APK Download", item: URL },
  ],
};

export default function DiwaTopApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2 flex justify-center">
        <Image
          src="/images/platforms/diwatop.webp"
          alt="DiwaTop app icon, a plain gold wordmark"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaTop">
        <p>
          Our link is below. It is not an official app store listing, and we may earn a commission if you use
          it.
        </p>
        <p>
          <a
            href={DOWNLOAD_LINK}
            {...EXTERNAL}
            className="btn-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            Download DiwaTop
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Does &quot;Top&quot; mean it's ranked above other apps?">
        <p>
          No. &quot;Top&quot; in the name DiwaTop is self-chosen branding, the same as the word &quot;best,&quot;
          &quot;number one,&quot; or &quot;king&quot; in countless other app names &mdash; it isn't a ranking
          issued by the Play Store, a review platform, or anyone outside the app's own marketing. We want to be
          direct about this: <strong>we have not independently ranked or compared DiwaTop against other apps
          in this guide</strong>, and nothing here should be read as a comparative endorsement. Treat the name
          as a label, not a verdict.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed about DiwaTop so far">
        <p>
          DiwaTop is an independent listing in the same visual network as Yono Arcade &mdash; the plain gold
          wordmark matches the branding style used across that family. It is{" "}
          <strong>not confirmed to be built by the same developer as Yono Arcade</strong>. The package name
          associated with the download link above is <strong>{PACKAGE_NAME}</strong>. We haven't yet
          independently inspected the APK's version number or signing certificate, and DiwaTop isn't listed
          under that name on the Play Store &mdash; search there turns up only unrelated results, a pattern
          we've found for most apps in this family. No welcome bonus, launch date, or promo code has been
          confirmed yet.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm the package name reads <strong>{PACKAGE_NAME}</strong> before installing anything that
          claims to be DiwaTop. 2. Once installed, check the requested permissions; a rummy-and-arcade app has
          no legitimate reason to ask for SMS or contacts access. 3. Treat any claimed promo code as
          unverified until it's confirmed inside the app itself &mdash; see{" "}
          <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps we track. 4. Read
          our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account
          details.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever the
          name of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is DiwaTop related to Yono Arcade?",
            answer:
              "It's an independent listing in the same visual network — same branding style — but it is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Has DiwaTop actually been ranked \"top\" by anyone?",
            answer:
              "No. That's self-chosen branding, not a ranking from the Play Store, a review platform, or this site. We haven't independently ranked or compared this app against others in this guide.",
          },
          {
            question: "What's the package name for DiwaTop?",
            answer: `The package associated with our download link is ${PACKAGE_NAME}. Confirm this matches before installing anything else claiming to be this app.`,
          },
          {
            question: "Is there a promo code for DiwaTop?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
