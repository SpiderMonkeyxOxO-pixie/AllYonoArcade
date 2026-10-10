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

const TITLE = "Promo Codes for Other Yono Apps: Which Ones We Track";
const DESCRIPTION =
  "Is there one promo code for all Yono games? No. Which apps this site tracks codes for, how the morning, afternoon and evening slots work, and why a code only works in its own app.";
const SLUG = "promo-codes-for-other-yono-apps-which-we-track";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-10-14";

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
    { "@type": "ListItem", position: 3, name: "Promo codes for other Yono apps", item: URL },
  ],
};

const TRACKED = [
  "Yono Arcade",
  "101Z",
  "Club INR",
  "DhanGame",
  "Rummy 91",
  "Win Rummy",
  "Yono 777",
  "Gold Rummy",
  "Money Rummy",
  "Jeet Spin",
];

export default function PromoCodesOtherAppsPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Promo codes"
        title={TITLE}
        answer={
          "There is no single promo code for all Yono games. Each app issues its own, and a code works only in the app it was made for. This site tracks Yono Arcade and nine other apps, listed below. Anything not on that list is not tracked here, so a page claiming to have today's code for every Yono app should be treated with suspicion."
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 14, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src={`/images/guides/${SLUG}.webp`}
        alt="Ten app cards on a phone, each with three small time slots for morning, afternoon and evening codes"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Apps tracked on our promo codes page">
        <ComparisonTable
          headers={["App", "Where to see its status", "Slots"]}
          rows={TRACKED.map((name): [string, string, string] => [
            name,
            "Card on the promo codes page",
            "Morning, afternoon, evening",
          ])}
        />
        <p>
          All of these are on one page: <Link href="/promo-codes">Yono Arcade promo codes</Link>.
          The Rummy 91 card has its own explainer in{" "}
          <Link href="/blog/rummy-91-promo-code-what-is-real">Rummy 91 promo code: what is real</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="How the slots work">
        <p>
          Each card has three tabs: Morning (AM), Afternoon (PM) and Evening (Eve). Apps in this
          category often release codes up to three times a day. A slot with no checked code shows
          &quot;Not released yet&quot;, rather than a guessed value.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before using any code">
        <BulletList
          items={[
            "Is it for the app you have? A Yono 777 code does not work in Yono Arcade.",
            "Is it for today and this slot? An older code is usually expired.",
            "Does the page ask for anything first? An OTP, payment or login to reveal a code is a scam sign.",
          ]}
        />
      </ContentSection>

      <Callout tone="info" title="18+ only. Online money games are prohibited in India">
        <p>
          Online money games are prohibited under the Promotion and Regulation of Online Gaming Act,
          2025, in force since 1 May 2026. Code status is reported for reference only and is not an
          invitation to deposit or play for money. See our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Promo code questions"
        items={[
          {
            question: "Is there one promo code for all Yono games?",
            answer: "No. Each app issues its own.",
          },
          {
            question: "Where do I enter a promo code?",
            answer:
              "Inside the app, usually in a redeem or promo field in the wallet, rewards or account section.",
          },
          {
            question: "Why does my code say invalid?",
            answer:
              "It may be expired, capped, for new accounts only, or for a different app.",
          },
        ]}
      />
    </>
  );
}
