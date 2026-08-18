import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";

const TITLE = "What Is Gold Rummy? New Rummy App Launching Aug 19";
const DESCRIPTION =
  "Gold Rummy launches August 19, 2026 on the Yono network. Here's what's confirmed, what to expect at launch, and how it compares to other rummy apps.";
const URL = "https://allyonoarcade.com/blog/what-is-gold-rummy";
const IMAGE = "https://allyonoarcade.com/images/guides/what-is-gold-rummy.jpg";
const PUBLISHED = "2026-08-18";
const LAST_REVIEWED = "2026-08-18";

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
  headline: "What Is Gold Rummy? New Rummy App Launching August 19, 2026",
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
        eyebrow="New Platform"
        title="What Is Gold Rummy? New Rummy App Launching August 19"
        answer="Gold Rummy is a new rummy platform scheduled to launch on the Yono network at 8:00 AM IST on August 19, 2026 — here's everything actually confirmed about it so far."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: August 18, 2026 · Last reviewed: August 18, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/what-is-gold-rummy.jpg"
        alt="What Is Gold Rummy — new rummy app launching August 19, 2026"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What Gold Rummy actually is, so far">
        <p>
          Based on its name and category listing, Gold Rummy is positioned as a rummy-focused
          platform, joining a growing list of similarly-named apps in this space —
          AllYonoArcade already tracks{" "}
          <Link href="/all-games/win-rummy">Win Rummy</Link>,{" "}
          <Link href="/all-games/dhangame">DhanGame</Link>, Yono 777, and others that follow a
          comparable naming pattern. What sets any of these apps apart from one another in
          practice — table formats, entry-fee structure, promo mechanics — can&apos;t be
          assessed from a name alone, and Gold Rummy hasn&apos;t launched yet, so none of that
          is confirmed for this specific app.
        </p>
        <p>
          What is confirmed: the name, the rummy category, and the August 19 launch window.
          That&apos;s the complete list. Any other claim about Gold Rummy circulating before
          launch — bonus amounts, download counts, specific game modes — should be treated as
          unverified until the app is actually live and can be checked directly.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Nothing beyond name, category, and date is confirmed" badge="pending">
        <p>
          This page reflects what was known on August 18, 2026 — the day before Gold Rummy&apos;s
          scheduled launch. It will be rewritten into a real listing once the app is live and can
          be independently reviewed.
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
          Whether Gold Rummy follows this same structure is unconfirmed and will be reviewed
          once the app launches.
        </p>
      </ContentSection>

      <ContentSection heading="Gold Rummy vs. other apps on this network">
        <p>
          It&apos;s tempting to compare a new app to established ones before it launches, but
          that comparison can&apos;t be done honestly yet — AllYonoArcade&apos;s existing
          comparison content, like the{" "}
          <Link href="/blog/win-rummy-vs-yono-arcade">Win Rummy vs. Yono Arcade breakdown</Link>,
          is based on actually testing both apps&apos; download links, feature sets, and promo
          mechanics side by side. Since Gold Rummy doesn&apos;t have a working download yet,
          there&apos;s nothing to test. Once it launches, this space is where a real comparison —
          covering download reliability, table variety, and promo-code behavior against apps
          like Win Rummy and DhanGame — will go.
        </p>
      </ContentSection>

      <ContentSection heading="What to expect on launch day">
        <p>
          Based on how DhanGame&apos;s and Win Rummy&apos;s own launches played out on this
          network — again, not a claim about Gold Rummy specifically — a typical launch day
          usually brings:
        </p>
        <BulletList
          items={[
            "A working download link, generally hosted on the app's own domain.",
            "An initial promo code or welcome bonus announcement, though the accuracy of pre-launch marketing claims varies and is worth independently checking.",
            "A short window — often a few days — before independent reviewers can confirm whether advertised bonus figures and promo codes actually hold up in practice.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why there's no download button here yet">
        <p>
          AllYonoArcade doesn&apos;t publish download links for apps that haven&apos;t launched,
          because there&apos;s nothing to verify — a &quot;download&quot; link circulating before
          an official launch date is either a placeholder or unrelated to the real app. This
          listing will switch to a full review, complete with a working download link, the
          moment Gold Rummy is confirmed live.
        </p>
      </ContentSection>

      <ContentSection heading="How to find out when it's live">
        <p>
          Check back on this page after 8:00 AM IST on August 19, 2026 — this is where the
          listing will be updated first. AllYonoArcade.com is an independent guide and is not
          affiliated with, endorsed by, or an official distributor of Gold Rummy or any other
          app covered here.
        </p>
      </ContentSection>

      <ContentSection heading="Bottom line">
        <p>
          Gold Rummy is a name and a launch date right now — nothing more. The most useful thing
          this page can do before August 19 is set accurate expectations rather than guess at
          features, bonuses, or comparisons that can&apos;t be verified yet. Once it&apos;s live,
          this post gets rewritten into a real review.
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
            question: "What is Gold Rummy?",
            answer:
              "Gold Rummy is a rummy-focused platform scheduled to launch on the Yono network at 8:00 AM IST on August 19, 2026. Beyond its name, category, and launch date, no other details are confirmed yet.",
          },
          {
            question: "When can I download Gold Rummy?",
            answer:
              "Not yet. A working download link doesn't exist before the app's official launch. This page will be updated with a verified link once Gold Rummy is live.",
          },
          {
            question: "Is Gold Rummy the same as Rummy Gold?",
            answer:
              "No — Gold Rummy and Rummy Gold are different, unrelated apps despite the similar name. Rummy Gold is an existing, established rummy platform; Gold Rummy is a new, separate app launching August 19, 2026.",
          },
          {
            question: "How does Gold Rummy compare to Win Rummy or DhanGame?",
            answer:
              "Not yet possible to say honestly — a real comparison requires testing both apps' download links and features directly, and Gold Rummy hasn't launched. This page will be updated with a genuine comparison once it does.",
          },
        ]}
      />
    </>
  );
}
