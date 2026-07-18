import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import AppInfoCard from "../components/sections/AppInfoCard";
import PlatformGrid from "../components/sections/PlatformGrid";
import ComingSoonCard from "../components/sections/ComingSoonCard";
import Reveal from "../components/sections/Reveal";
import { PLATFORMS } from "../lib/platforms";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "Yono Arcade: Full Games List (Updated)",
  description:
    "The game categories inside Yono Arcade based on what players actually search for, kept current as we verify each title.",
  alternates: { canonical: "https://allyonoarcade.com/all-games" },
  openGraph: {
    title: "Yono Arcade: Full Games List (Updated)",
    description:
      "The game categories inside Yono Arcade based on what players actually search for, kept current as we verify each title.",
    url: "https://allyonoarcade.com/all-games",
  },
  twitter: {
    title: "Yono Arcade: Full Games List (Updated)",
    description:
      "The game categories inside Yono Arcade based on what players actually search for, kept current as we verify each title.",
  },
};

export default function AllGamesPage() {
  return (
    <>
      <PageHeader
        eyebrow="All Games"
        title="Yono Arcade: All Games"
        answer="This page tracks the game categories inside Yono Arcade. We're building it out title-by-title as each one is verified, rather than publishing an unconfirmed list."
      />

      <RelatedLinks exclude="all-games" />

      <AppInfoCard
        categories={["Coin-op Games", "Rummy-style"]}
        description="A mobile games app in the coin-op / rummy category, popular in India. This card and the rest of the page describe what's publicly known — see the verification notice below."
      />

      <Callout tone="warning" title="This list is still being verified" badge="unverified">
        <p>
          Publicly searched terms point to several game categories inside Yono Arcade — rummy,
          slots, and spin/wheel-style games among them. We haven't independently confirmed the
          complete, current catalog yet, so we're not listing exact titles, bet limits, or RTP
          figures until we can verify them directly in the app.
        </p>
      </Callout>

      <ContentSection heading="Game categories people search for">
        <p>Based on search patterns, these are the categories most associated with the app:</p>
        <BulletList
          items={[
            "Rummy-style card games",
            "Slot / spin-wheel games",
            "Coin-op arcade titles",
          ]}
        />
        <p>
          Treat this as a starting orientation, not a confirmed catalog — we'll expand each
          category into its own verified entry as we complete review.
        </p>
      </ContentSection>

      <ContentSection heading="What we check before listing a game">
        <BulletList
          items={[
            "The game is actually present in a current build of the app.",
            "Any stated odds, RTP, or bonus mechanics can be verified rather than copied from another site.",
            "Whether the game involves real-money mechanics, and if so, what that means for your state's rules.",
          ]}
        />
      </ContentSection>

      {PLATFORMS.filter((p) => p.comingSoon && p.releaseDate).map((p) => (
        <Reveal key={p.slug} mode="mount" className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-6">
          <ComingSoonCard
            name={p.name}
            image={p.image}
            releaseDate={p.releaseDate!}
            description={p.description}
            blogHref={p.blogHref}
          />
        </Reveal>
      ))}

      <PlatformGrid />

      <FAQSection
        heading="All games questions"
        items={[
          {
            question: "Why isn't there a full list of games yet?",
            answer:
              "We'd rather publish a shorter, verified list than a long one copied from unconfirmed sources. This page will expand as each category is checked directly in the app.",
          },
          {
            question: "Does Yono Arcade involve real-money games?",
            answer:
              "Some searches (deposit, withdrawal, promo code) suggest real-money mechanics may be involved for at least part of the app. If so, rules around real-money gaming vary by Indian state — confirm local legality before playing, independent of anything this site says.",
          },
          {
            question: "Are the other apps listed on this page games inside Yono Arcade?",
            answer:
              "No — they're separately branded apps from the same visual family, not confirmed sub-games or modes within Yono Arcade itself. See our Alternatives guide for what we do and don't know about how they relate.",
          },
        ]}
      />
    </>
  );
}
