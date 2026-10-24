import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import BulletList from "../../../components/sections/BulletList";
import { requirePublished } from "../../../lib/schedule";

const TITLE = "Is Jaiho Play a Yono Game? What We Found";
const DESCRIPTION =
  "Jaiho Play launched 15 October 2026 with rummy and Teen Patti. Here's whether it's part of Yono Arcade or the wider \"Yono\" family, and how to tell apps apart.";
const SLUG = "is-jaiho-play-a-yono-game";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-10-24";

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
    { "@type": "ListItem", position: 3, name: "Is Jaiho Play a Yono game?", item: URL },
  ],
};

export default function JaihoPlayYonoGamePage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Identity"
        title={TITLE}
        answer={
          "No. Jaiho Play is not a game inside Yono Arcade, and it isn't published by whoever runs Yono Arcade. It's a separately distributed app that uses \"Yono\"-style green-diamond branding, the same way several unrelated apps in this space do. Installing Jaiho Play has no effect on Yono Arcade or any other app."
        }
      />

      <RelatedLinks />

      <GuideImage
        src={`/images/guides/${SLUG}.webp`}
        alt="Jaiho Play and Yono Arcade app icons side by side with a question mark between them"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What Jaiho Play actually is">
        <p>
          Jaiho Play launched on 15 October 2026 with rummy and Teen Patti, pairing the Jaiho name
          with a slot-reel &quot;PLAY&quot; banner and card-suit icons on a green-diamond background —
          the same visual family several apps in this space share. It is downloaded, installed, and
          operated separately from Yono Arcade.
        </p>
        <p>
          &quot;Yono&quot; itself is not one company or app — it's a naming pattern used across many
          independent sites and apps, which is why names and visual styles overlap without the apps
          being related. See our{" "}
          <Link href="/blog/allyono-allyonogames-allyonogame-art-which-site">
            AllYono, AllYonoGames, AllYonoGame.art guide
          </Link>{" "}
          for how widespread this naming overlap is.
        </p>
      </ContentSection>

      <ContentSection heading="How Jaiho Play relates to other Jaiho-branded apps">
        <p>
          Jaiho Play is also not the same app as Jaiho Arcade, despite the shared &quot;Jaiho&quot;
          name — see our{" "}
          <Link href="/blog/jaiho-play-vs-jaiho-arcade">Jaiho Play vs Jaiho Arcade</Link> breakdown for
          how to tell them apart, and{" "}
          <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade vs Yono Arcade</Link> for how
          that separate app compares to this one.
        </p>
      </ContentSection>

      <ContentSection heading="How to tell apps apart">
        <BulletList
          items={[
            "A shared name or visual style does not mean a shared operator — check the app's own listed developer, not just its branding.",
            "Jaiho Play, Jaiho Arcade, and Yono Arcade each have their own download link, account system, and promo codes.",
            "Installing one of these apps has no effect on any of the others.",
            "For Yono Arcade specifically, see our guide to its official source and how to spot fakes.",
          ]}
        />
        <p>
          For what we cover on Yono Arcade itself, see the{" "}
          <Link href="/all-games">Yono Arcade games list</Link> and{" "}
          <Link href="/blog/who-operates-yono-arcade">who operates Yono Arcade</Link>.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Jaiho Play, Jaiho Arcade, or any other app named in
          this article. Online money games are prohibited in India since 1 May 2026. Read our{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Jaiho Play questions"
        items={[
          {
            question: "Is Jaiho Play part of Yono Arcade?",
            answer:
              "No. Jaiho Play is a separate app with its own download link, account system, and promo codes. It is not a game mode or feature inside Yono Arcade.",
          },
          {
            question: "Is Jaiho Play the same as Jaiho Arcade?",
            answer:
              "No, they are two different apps that share the \"Jaiho\" name. See our Jaiho Play vs Jaiho Arcade guide for the differences.",
          },
          {
            question: "When did Jaiho Play launch?",
            answer:
              "15 October 2026, with rummy and Teen Patti.",
          },
        ]}
      />
    </>
  );
}
