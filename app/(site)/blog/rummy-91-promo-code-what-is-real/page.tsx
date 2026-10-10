import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import { requirePublished } from "../../../lib/schedule";

const TITLE = "Rummy 91 Promo Code: What Is Real? (2026 Check)";
const DESCRIPTION =
  "Looking for a Rummy 91 promo code? What a code can and can't do, where our code status is shown, and what we found on Rummy 91's download site and on Google Play.";
const SLUG = "rummy-91-promo-code-what-is-real";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-10-13";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: [{ url: IMAGE }] },
  twitter: { title: TITLE, description: DESCRIPTION },
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
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Rummy 91 promo code", item: URL },
  ],
};

export default function Rummy91PromoCodePage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Promo codes"
        title={TITLE}
        answer={
          "This article does not list a Rummy 91 code. Codes are time-limited and change by release period, so we show today's status for each app on our promo codes page, and only when a code has been supplied. A code does not guarantee a bonus, and a website that always has a code for every app is usually inventing them."
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 13, 2026 · Sites checked on October 10, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src={`/images/guides/${SLUG}.webp`}
        alt="A phone showing a promo code field with a question mark and a checklist beside it"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Today's Rummy 91 code status">
        <p>
          The Rummy 91 card on our <Link href="/promo-codes">promo codes page</Link> shows the
          morning, afternoon and evening slots. If a slot says &quot;Not released yet&quot;, we have
          no checked code for that period. The app&apos;s own page is{" "}
          <Link href="/all-games/rummy-91">Rummy 91</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="What we found (checked 10 October 2026)">
        <ComparisonTable
          headers={["Where", "What we observed", "What it means"]}
          rows={[
            [
              "Download site on our Rummy 91 page",
              "rummy91q.bet, page heading \"Join in Rummy 91!\". It says \"Play over 60+ Games and Win Cash\", links to no privacy policy or terms, and loads a FingerprintJS script.",
              "A template page that names no operator",
            ],
            [
              "Google Play",
              "Four different apps named Rummy 91, from DAYALA TECH ENTERPRISES, DROPTI EDUCATION ACADEMY, Ridhi siddhi enterprise and 3NEX GLOBAL INDIA PRIVATE LIMITED (checked 28 September 2026).",
              "The name alone does not identify an app",
            ],
          ]}
        />
        <p>We checked the pages directly and downloaded no files.</p>
      </ContentSection>

      <ContentSection heading="What a promo code can and cannot do">
        <BulletList
          items={[
            "A code can change an in-app reward, such as extra play credit. It cannot raise limits, speed up a withdrawal or guarantee winnings.",
            "A code is tied to one app, one account type and often one release period (morning, afternoon or evening).",
            "It can stop working without notice.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why codes fail">
        <BulletList
          items={[
            "It expired, or a redemption cap was reached.",
            "It was for new accounts or a first deposit only.",
            "It belonged to a different app that shares the name. There are four Rummy 91 apps on Google Play alone.",
          ]}
        />
      </ContentSection>

      <Callout tone="warning" title="Fake codes">
        <p>
          Be cautious of any page that asks for your OTP, a fee, or a download in order to
          &quot;reveal&quot; a code. A real code is entered inside the app and never costs money.
        </p>
      </Callout>

      <Callout tone="info" title="18+ only. Online money games are prohibited in India">
        <p>
          Online money games are prohibited under the Promotion and Regulation of Online Gaming Act,
          2025, in force since 1 May 2026. This page reports code status for reference; it is not an
          invitation to deposit or play for money. See our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Rummy 91 promo code questions"
        items={[
          {
            question: "What is today's Rummy 91 promo code?",
            answer:
              "Check the Rummy 91 card on our promo codes page. If it says \"Not released yet\", we have no checked code for that period.",
          },
          {
            question: "Does a promo code guarantee a bonus?",
            answer:
              "No. It depends on the operator's current terms and your account.",
          },
          {
            question: "Is Rummy 91 legal in India?",
            answer:
              "Online money games are prohibited under the Promotion and Regulation of Online Gaming Act, 2025.",
          },
        ]}
      />
    </>
  );
}
