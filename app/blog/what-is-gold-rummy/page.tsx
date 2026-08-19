import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";

const TITLE = "What Is Gold Rummy? Now Live on the Yono Network";
const DESCRIPTION =
  "Gold Rummy launched August 19, 2026 on the Yono network. Here's what's confirmed at launch, what's still unverified, and how it compares to other rummy apps.";
const URL = "https://allyonoarcade.com/blog/what-is-gold-rummy";
const IMAGE = "https://allyonoarcade.com/images/guides/what-is-gold-rummy.jpg";
const PUBLISHED = "2026-08-18";
const LAST_REVIEWED = "2026-08-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Gold Rummy? Now Live on the Yono Network",
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
    { "@type": "ListItem", position: 3, name: "What Is Gold Rummy?", item: URL },
  ],
};

export default function WhatIsGoldRummyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Newly Launched"
        title="What Is Gold Rummy? Now Live on the Yono Network"
        answer="Gold Rummy launched on the Yono network at 8:00 AM IST on August 19, 2026, with a working download link — here's what's confirmed and what's still unverified."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: August 18, 2026 · Last reviewed: August 19, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/what-is-gold-rummy.jpg"
        alt="What Is Gold Rummy — new rummy app launching August 19, 2026"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What Gold Rummy actually is, now that it's live">
        <p>
          Gold Rummy launched on the Yono network at 8:00 AM IST on August 19, 2026, joining a
          list of similarly-named apps in this space — AllYonoArcade already tracks{" "}
          <Link href="/all-games/win-rummy">Win Rummy</Link>,{" "}
          <Link href="/all-games/dhangame">DhanGame</Link>, Yono 777, and others that follow a
          comparable naming pattern. A working download link is now available, but what sets
          Gold Rummy apart in practice — table formats, entry-fee structure, promo mechanics —
          hasn&apos;t been independently tested yet.
        </p>
        <p>
          What is confirmed: the name, the rummy category, a working download link, and the
          August 19 launch date. No welcome bonus or promo code has been announced. Any other
          claim about Gold Rummy circulating right now — bonus amounts, download counts, specific
          game modes — should be treated as unverified until it can be checked directly.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Launched, but in-app details are still unverified" badge="pending">
        <p>
          The download link is live and working. Its feature set, table formats, and any bonus
          terms have not yet been independently tested — this page will be updated as those
          checks are completed.
        </p>
      </Callout>

      <ContentSection heading="How rummy apps in this category typically work">
        <p>
          Without claiming this applies to Gold Rummy specifically, it&apos;s useful context:
          most rummy apps in this directory, including Win Rummy and DhanGame, run the same
          three standard formats:
        </p>
        <BulletList
          items={[
            "Points Rummy — single-deal rounds, settled quickly.",
            "Pool Rummy — extended play up to a 101 or 201 point ceiling.",
            "Deals Rummy — a fixed number of rounds, decided by chip count.",
          ]}
        />
        <p>
          Whether Gold Rummy follows this same structure hasn&apos;t been independently checked
          yet and will be reviewed as the app is tested.
        </p>
      </ContentSection>

      <ContentSection heading="Gold Rummy vs. other apps on this network">
        <p>
          A real comparison — like AllYonoArcade&apos;s existing{" "}
          <Link href="/blog/win-rummy-vs-yono-arcade">Win Rummy vs. Yono Arcade breakdown</Link> —
          requires testing both apps&apos; download links, feature sets, and promo mechanics side
          by side. Gold Rummy has only just launched, so that testing hasn&apos;t happened yet.
          This space is where a genuine comparison — covering download reliability, table
          variety, and promo-code behavior against apps like Win Rummy and DhanGame — will go
          once it&apos;s been done.
        </p>
      </ContentSection>

      <ContentSection heading="Is there a welcome bonus or promo code?">
        <p>
          No welcome bonus or promo code was announced at launch. That&apos;s not unusual — some
          platforms in this directory, like DhanGame, launched the same way, with bonus details
          following later rather than being part of the initial release. Any bonus figure
          circulating for Gold Rummy right now should be treated as unverified until it can be
          confirmed.
        </p>
      </ContentSection>

      <ContentSection heading="Where to download Gold Rummy">
        <p>
          A working download link is now live on{" "}
          <Link href="/all-games/gold-rummy">Gold Rummy&apos;s listing page</Link>. AllYonoArcade
          does not host the file itself — the link leads directly to Gold Rummy&apos;s own site.
          What the app actually installs, its permissions, and its in-app feature set have not
          yet been independently reviewed.
        </p>
      </ContentSection>

      <ContentSection heading="Bottom line">
        <p>
          Gold Rummy is live, with a working download link and no bonus or promo code announced
          yet. Everything beyond that — verified table formats, bonus terms, an independent
          comparison against Win Rummy and DhanGame — will be added to this page as it can be
          checked, the same process every other app on this network went through at its own
          launch.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial listing">
        <p>
          AllYonoArcade.com does not operate Gold Rummy. Read our full{" "}
          <Link href="/disclaimer">disclaimer</Link> for how we handle third-party app
          information, affiliate links and verification labels.
        </p>
      </Callout>

      <FAQSection
        heading="Gold Rummy questions"
        items={[
          {
            question: "Has Gold Rummy launched?",
            answer:
              "Yes — Gold Rummy launched on the Yono network at 8:00 AM IST on August 19, 2026, and a working download link is now live.",
          },
          {
            question: "Where can I download Gold Rummy?",
            answer:
              "A working download link is available on Gold Rummy's listing page. AllYonoArcade does not host the file — the link leads directly to Gold Rummy's own site.",
          },
          {
            question: "Is Gold Rummy the same as Rummy Gold?",
            answer:
              "No — Gold Rummy and Rummy Gold are different, unrelated apps despite the similar name. Rummy Gold is an existing, established rummy platform; Gold Rummy is the newly launched, separate app covered here.",
          },
          {
            question: "Does Gold Rummy have a welcome bonus?",
            answer:
              "No welcome bonus or promo code was announced at launch. Any figure circulating for Gold Rummy right now should be treated as unverified.",
          },
          {
            question: "How does Gold Rummy compare to Win Rummy or DhanGame?",
            answer:
              "Not yet possible to say honestly — a real comparison requires testing all three apps' features directly, and that hasn't happened yet. This page will be updated with a genuine comparison once it has.",
          },
        ]}
      />
    </>
  );
}
