import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Yono Arcade Mall: What It Is",
  description:
    "The Mall is Yono Arcade's in-app hub for its other apps — browse, check ratings, and install straight from your wallet balance.",
  alternates: { canonical: "https://allyonoarcade.com/mall" },
  openGraph: {
    title: "Yono Arcade Mall: What It Is",
    description:
      "The Mall is Yono Arcade's in-app hub for its other apps — browse, check ratings, and install straight from your wallet balance.",
    url: "https://allyonoarcade.com/mall",
  },
  twitter: {
    title: "Yono Arcade Mall: What It Is",
    description:
      "The Mall is Yono Arcade's in-app hub for its other apps — browse, check ratings, and install straight from your wallet balance.",
  },
};

export default function MallPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mall"
        title="Yono Arcade Mall"
        answer="The Mall is a section inside Yono Arcade — accessible from the bottom nav bar — that works as a hub for the rest of the app family, letting you browse and install other apps without leaving Yono Arcade."
      />

      <RelatedLinks />

      <ContentSection heading="What the Mall does">
        <p>
          Opening the Mall drops you into a "Welcome to Yono Arcade — all your favorite apps, one
          place" screen. From there you can browse by category (All, Top Apps, Games, Utilities,
          Entertainment, and more), and each listing shows a star rating alongside a one-tap
          Install button — similar to a mini app store built into Yono Arcade itself.
        </p>
        <BulletList
          items={[
            "Top Apps carousel — a curated shortlist (apps like Yono Play, Yono Chat, Yono Store, and Yono Rewards have appeared here) with ratings and an Install button on each card.",
            "Category filters — All, Top Apps, Games, Utilities, Entertainment, and a More overflow tab.",
            "Wallet balance — your current balance shows in the top bar, so you can see what you have before installing anything that spends it.",
            "\"Secure Access\" and \"Verified\" badging on the Mall's own promo material, signaling the listings are meant to be trusted first-party apps rather than open third-party listings.",
          ]}
        />
        <GuideImage
          src="/images/guides/mall-app-mockup.webp"
          alt="The Yono Arcade Mall screen showing the Top Apps carousel, category filters, and wallet balance"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="info" title="Not a separate download" badge="verified">
        <p>
          The Mall isn't its own app or APK — it's a screen inside Yono Arcade, reached from the
          bottom navigation bar alongside Home, Rewards, Wallet, and Profile.
        </p>
      </Callout>

      <FAQSection
        heading="Mall questions"
        items={[
          {
            question: "Is the Mall a separate app from Yono Arcade?",
            answer:
              "No — it's a section inside the main app, reachable from the bottom nav bar. There's nothing extra to download to access it.",
          },
          {
            question: "What can I do in the Mall?",
            answer:
              "Browse other apps in the same family by category, check their ratings, and install them directly — all from inside Yono Arcade, without needing a separate store listing.",
          },
        ]}
      />
    </>
  );
}
