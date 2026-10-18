import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";

const TITLE = "Yono Arcade vs Club INR: Telling the Apps Apart";
const META_TITLE = "Yono Arcade vs Club INR: How to Tell Them Apart";
const DESCRIPTION =
  "Yono Arcade and Club INR aren't confirmed to share ownership. Here's how to independently check developer, signing certificate, and support details.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-vs-club-inr";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-vs-club-inr.webp";
const PUBLISHED = "2026-10-25";
const LAST_REVIEWED = "2026-10-25";

const ANSWER =
  "As with similar comparisons on this site, the honest starting point is: we have found no confirmed evidence that Yono Arcade and Club INR are operated by the same company or network. They sit in the same broad category — real-money casino/card-style apps distributed via APK outside major app stores — but category overlap is not proof of a shared operator, and we're not going to present it as one.";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade vs Club INR", item: URL },
  ],
};

export default function YonoArcadeVsClubInrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="App Guide" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 25, 2026 · Last reviewed: October 25, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-vs-club-inr.webp"
        alt="Checking whether Yono Arcade and Club INR share an operator or network."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Why these two get compared">
        <p>
          Searchers often group apps like this together because they discover them through the
          same channels: Telegram groups, referral chains, and download aggregator sites that list
          multiple similar apps side by side, sometimes with cross-promotion. That proximity in
          distribution is real, but it reflects shared marketing channels, not necessarily shared
          ownership. We make this same distinction in our{" "}
          <Link href="/blog/yono-arcade-vs-rummy-91">Yono Arcade vs Rummy 91</Link> comparison.
        </p>
      </ContentSection>

      <ContentSection heading="What's actually confirmed about Yono Arcade">
        <p>
          Everything we state about Yono Arcade here comes from our own direct technical review,
          laid out in full in the <Link href="/blog/yono-arcade-apk-review">APK guide</Link>:
          package name <code>com.arcade.games.yo</code>, version 1.1.9 (code 119), approximately
          34 MB, self-signed &quot;lamislot&quot; certificate, Cocos2d-x engine, 9 permissions with
          none flagged sensitive (see our dedicated{" "}
          <Link href="/blog/yono-arcade-data-permissions">data permissions post</Link>), and a
          per-download channel/vid tag in the signing block consistent with referral/agent
          distribution (see our{" "}
          <Link href="/blog/yono-arcade-agent-apk">agent APK</Link> explainer). We have not
          performed the same direct inspection of Club INR for this piece, so any claim about
          shared signing identity or developer account between the two would be speculation
          &mdash; and we won&apos;t present speculation as fact.
        </p>
      </ContentSection>

      <ContentSection heading="The checklist for comparing any two apps like this">
        <BulletList
          items={[
            <>
              <strong>Package name.</strong> Different package names mean different apps, even
              with similar UI or game selection.
            </>,
            <>
              <strong>Signing certificate fingerprint.</strong> Worth comparing if you can extract
              both &mdash; matching fingerprints are a meaningful (not absolute) signal; mismatched
              ones are not proof of zero connection, since one operator could use multiple signing
              keys across products.
            </>,
            <>
              <strong>Support channel overlap.</strong> Identical phone numbers, emails, or chat
              handles across both apps&apos; help sections is one of the more direct signals
              available to an ordinary user, without needing technical tools.
            </>,
            <>
              <strong>Explicit cross-promotion.</strong> If either app&apos;s promo materials
              directly reference the other (a joint bonus, a &quot;sister app&quot; claim, a shared
              referral program), that&apos;s a stated relationship rather than an inferred one
              &mdash; and still worth verifying rather than taking at face value, the same way
              we&apos;d treat any unverified promo claim.
            </>,
            <>
              <strong>Independent reputation.</strong> A safety or payout concern with one app
              doesn&apos;t automatically apply to the other absent a demonstrated operational link
              &mdash; see our approach to this question in{" "}
              <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link>.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="Our bottom line on this comparison">
        <p>
          Until we see verifiable overlap in developer identity, signing lineage, or an explicit
          stated relationship, we treat Yono Arcade and Club INR as separate products that happen
          to compete in the same space. If you come across a page confidently asserting
          they&apos;re &quot;the same network,&quot; ask what specific evidence backs that claim
          &mdash; and apply the checklist above yourself.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          Both apps involve real-money gameplay. This is 18+ content. Regardless of which app
          you&apos;re evaluating, independently verify its identity and safety profile before
          depositing anything, and set a spending limit in advance.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is Club INR made by the same company as Yono Arcade?",
            answer:
              "We have no confirmed evidence of that. They're in the same category but that doesn't establish shared ownership.",
          },
          {
            question: "Why are these two apps often mentioned together?",
            answer:
              "Likely because they're distributed through similar channels (Telegram, referral links, aggregator sites), not necessarily because they're operated by the same team.",
          },
          {
            question: "What's the quickest way I can check for a real connection?",
            answer:
              "Compare support contact details (phone, email, chat handles) across both apps' help sections — that's checkable without any technical tools.",
          },
          {
            question: "Does AllYonoArcade cover Club INR's APK the same way it covers Yono Arcade's?",
            answer:
              "No, our verified technical claims in this comparison are specific to Yono Arcade, based on our own direct inspection.",
          },
        ]}
      />
    </>
  );
}
