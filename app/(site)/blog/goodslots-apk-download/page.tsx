import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";

const TITLE = "Goodslots Download APK, Promo Code & Guide";
const META_TITLE = "Goodslots Download APK, Promo Code & Guide";
const DESCRIPTION =
  "Goodslots APK download link, why its branding looks nothing like its network's other apps, and the current promo code status — plus what's still unconfirmed.";
const URL = "https://allyonoarcade.com/blog/goodslots-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/goodslots.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://sharegoodslots.club?pid=512559578&channel=2030506&pkg=com.goodslotsdiwa001.app";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Goodslots is a newly listed platform, and the odd part is its branding: a blue background, a 3D gold thumbs-up, and tile-style lettering look nothing like the gold-wordmark-and-tricolor style used across the rest of this network. Our sponsored download link is below. No welcome bonus or promo code has been confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "Goodslots APK Download", item: URL },
  ],
};

export default function GoodslotsApkDownloadPage() {
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
          src="/images/platforms/goodslots.webp"
          alt="Goodslots app icon: a blue background with a gold 3D thumbs-up, the word GOOD in gold capitals, and SLOTS spelled in individual white-and-green tile letters"
          width={96}
          height={96}
          className="mx-auto rounded-2xl"
        />
      </div>

      <ContentSection heading="Download Goodslots">
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
            Download Goodslots (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Why Goodslots doesn't look like its family">
        <p>
          Every other app we track in this Diwa-branded network uses some version of the same look: a dark
          background, a gold wordmark, and often an Indian tricolor swoosh somewhere in the artwork. Goodslots
          breaks from that entirely. Its icon sits on a blue background, not black. Instead of a wordmark, there&apos;s
          a large gold 3D thumbs-up hand. &quot;GOOD&quot; appears in plain gold block capitals, and
          &quot;SLOTS&quot; is spelled out letter-by-letter on individual white tiles with green text. There&apos;s
          no tricolor swoosh anywhere on it.
        </p>
        <p>
          On looks alone, you&apos;d assume Goodslots has nothing to do with the rest of this network. But the
          Android package name behind its download link &mdash; <code>com.goodslotsdiwa001.app</code> &mdash;
          directly includes &quot;diwa,&quot; tying it to the same family despite the mismatched visual branding.
          It&apos;s a useful reminder generally: don&apos;t judge whether apps are related purely from how similar
          or different their icons look. The package name underneath is a more reliable signal than the artwork on
          top.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Goodslots is an independent listing we&apos;re tracking; it is not confirmed to be built by the same
          developer as Yono Arcade. Beyond the package name visible in the download link, we haven&apos;t
          independently inspected the APK&apos;s version number or signing certificate, and it is not listed under
          this name on the Play Store.
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
            question: "Is Goodslots the same app as Yono Arcade?",
            answer:
              "No — Goodslots is an independent listing. It is not confirmed to be built by the same developer as Yono Arcade.",
          },
          {
            question: "Why does Goodslots look so different from other apps in this network?",
            answer:
              "Its icon uses a blue background, a gold thumbs-up, and tile-style lettering instead of the dark-and-gold wordmark style used elsewhere. Despite the different look, its package name (com.goodslotsdiwa001.app) ties it to the same Diwa-branded family.",
          },
          {
            question: "Does Goodslots' different branding mean it's unrelated to the Diwa apps?",
            answer:
              "Not based on what we checked. The underlying Android package name links it to the same network, even though the artwork doesn't match.",
          },
          {
            question: "Is there a confirmed promo code for Goodslots?",
            answer:
              "None has been confirmed yet. Check our promo codes page for the current status across the apps we track.",
          },
        ]}
      />
    </>
  );
}
