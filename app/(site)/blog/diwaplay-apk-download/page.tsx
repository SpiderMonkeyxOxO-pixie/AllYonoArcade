import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "DiwaPlay Download APK, Promo Code & Guide";
const META_TITLE = "DiwaPlay Download APK, Promo Code & Guide";
const DESCRIPTION =
  "DiwaPlay APK download link, the exact package name to confirm before you install anything, and today's promo code status for this app.";
const URL = "https://allyonoarcade.com/blog/diwaplay-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/diwaplay.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const DOWNLOAD_LINK = "https://diwaplayshare.cyou?pid=381588617&channel=2010001&pkg=com.diwaplay.app";
const PACKAGE_NAME = "com.diwaplay.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "DiwaPlay's download link is below. It's an independent listing in the same visual network as Yono Arcade, not confirmed to be built by the same developer. The name is one of the plainest in its family — just \"play,\" no theme word attached — which is exactly why the package name below matters more than usual here.";

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
    { "@type": "ListItem", position: 3, name: "DiwaPlay APK Download", item: URL },
  ],
};

export default function DiwaPlayApkDownloadPage() {
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
          src="/images/platforms/diwaplay.webp"
          alt="DiwaPlay app icon, a plain gold wordmark"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download DiwaPlay">
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
            Download DiwaPlay
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="A generic name like &quot;Play&quot; is easy to mix up &mdash; check the package name">
        <p>
          DiwaPlay has one of the plainest names in its family: no theme word, no claim, just &quot;play.&quot;
          That's harder to search for and distinguish than a more distinctive name &mdash; a search for an app
          called &quot;Play&quot; or &quot;DiwaPlay&quot; can surface unrelated apps, clones, or lookalikes
          using a similar name. Before you install anything that claims to be this app, confirm its package
          name matches <strong>{PACKAGE_NAME}</strong>, the one tied to our link above. A different package
          name means a different app, regardless of what the listing calls itself.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed about DiwaPlay so far">
        <p>
          DiwaPlay is an independent listing in the same visual network as Yono Arcade &mdash; the plain gold
          wordmark matches the branding style used across that family, with no game-type word attached to the
          name. It is <strong>not confirmed to be built by the same developer as Yono Arcade</strong>. We
          haven't yet independently inspected the APK's version number or signing certificate, and DiwaPlay
          isn't listed under that name on the Play Store &mdash; search there turns up only unrelated results,
          a pattern we've found for most apps in this family. No welcome bonus, launch date, or promo code has
          been confirmed yet.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Verify the package name reads <strong>{PACKAGE_NAME}</strong> before installing &mdash; this
          matters more for a plain name like this one than for most other apps we cover. 2. Once installed,
          check the requested permissions; a rummy-and-arcade app has no legitimate reason to ask for SMS or
          contacts access. 3. Treat any claimed promo code as unverified until it's confirmed inside the app
          itself &mdash; see <Link href="/promo-codes">today&apos;s promo code status</Link> across the apps
          we track. 4. Read our <Link href="/is-yono-arcade-safe">general safety checklist</Link> before
          sharing any account details.
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
            question: "Is DiwaPlay related to Yono Arcade?",
            answer:
              "It's an independent listing in the same visual network — same branding style — but it is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Why does the package name matter so much for DiwaPlay specifically?",
            answer:
              `Because "Play" is a generic, widely reused word, a search for DiwaPlay can surface unrelated apps using a similar name. Confirming the package reads ${PACKAGE_NAME} is the reliable way to know you have the right app.`,
          },
          {
            question: "What's the package name for DiwaPlay?",
            answer: `${PACKAGE_NAME}, the package tied to our download link above.`,
          },
          {
            question: "Is there a promo code for DiwaPlay?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
