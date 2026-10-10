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

const TITLE = "AllYono, AllYonoGames, AllYonoGame.art: Which Site Is Which?";
const DESCRIPTION =
  "Several sites use names like AllYono, AllYonoGames and AllYonoGame. What each one showed on 10 October 2026, and how to tell them apart from AllYonoArcade.com.";
const SLUG = "allyono-allyonogames-allyonogame-art-which-site";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-10-11";

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
    { "@type": "ListItem", position: 3, name: "Which AllYono site is which?", item: URL },
  ],
};

export default function AllYonoLookalikeSitesPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Identity"
        title={TITLE}
        answer={
          "\"AllYono\" is not one website. Several unrelated sites use names that differ by a letter or an ending, and Google shows them for the same searches. AllYonoArcade.com is an independent guide to Yono Arcade and is not affiliated with any of the sites below. We cannot tell you whether those sites are related to one another, because none of the pages we checked names an operator."
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 11, 2026 · Sites checked on October 10, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src={`/images/guides/${SLUG}.webp`}
        alt="Several similar-looking website names under a magnifying glass, with a question mark over each"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What we found (checked 10 October 2026)">
        <ComparisonTable
          headers={["Address", "What it showed", "Same as AllYonoArcade.com?"]}
          rows={[
            ["allyonoarcade.com", "This site: an independent guide to Yono Arcade.", "This is the site you are reading"],
            [
              "allyonogames.com",
              "Page title \"All Yono Games Download App & Get ₹ 450 Bonus Free\". It lists apps such as Yono Rummy, Rummy Ludo and Yono 777.",
              "No, a separate site",
            ],
            [
              "allyonogame.art",
              "Page title \"55+ YONO GAMES Download new yono game\". It lists apps including Diwa games.",
              "No, a separate site",
            ],
            [
              "allyanogame.com",
              "Page title \"All Yono Game 2026 – Download New Apps + 51-500 free Play Coins | Review\".",
              "No, a separate site",
            ],
            ["allyono.com", "Did not return a normal page when we tried it.", "Nothing to compare"],
          ]}
        />
        <p>We loaded the pages directly and downloaded no files.</p>
      </ContentSection>

      <ContentSection heading="Why there are so many look-alikes">
        <p>
          People type &quot;allyono&quot;, &quot;allyuno&quot;, &quot;ally yono&quot; and &quot;allyona
          game&quot; for the same thing. Sites pick up those spellings, and the result is a set of
          near-identical names with different owners. A name that looks like another does not make
          it the same site.
        </p>
      </ContentSection>

      <ContentSection heading="How to tell which site you are on">
        <BulletList
          items={[
            "Read the address bar, not the page title. A title can say anything.",
            "Look for a named operator and working legal pages. Most of the pages we checked name neither.",
            "Treat bonus figures as marketing. ₹450 and \"51-500 free coins\" appear as page titles, not as terms.",
            "Do not install from a page that only says \"download\". Check the package name and publisher after installing.",
          ]}
        />
        <p>
          For the Yono Arcade app itself, see how to tell it apart from lookalike apps in our{" "}
          <Link href="/blog/yono-arcade-apps">Yono Arcade apps guide</Link> and{" "}
          <Link href="/blog/who-operates-yono-arcade">who operates Yono Arcade</Link>. For a list of
          the apps we cover, see the <Link href="/all-games">Yono Arcade games list</Link>.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade, Yono Tech Private Limited, or any
          website named in this article. Online money games are prohibited in India since 1 May
          2026. Read our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Which-site questions"
        items={[
          {
            question: "Is AllYonoArcade.com the same as AllYonoGames.com?",
            answer:
              "No. They are separate sites. AllYonoArcade.com is an independent guide to Yono Arcade and is not affiliated with any other site named in this article.",
          },
          {
            question: "Which is the official AllYono site?",
            answer:
              "We found no site with a verified claim to that name. This is an independent directory, not the official site of any app.",
          },
          {
            question: "Is allyonogame.art safe?",
            answer:
              "We cannot call it safe or unsafe. We checked only what the page showed on 10 October 2026.",
          },
        ]}
      />
    </>
  );
}
