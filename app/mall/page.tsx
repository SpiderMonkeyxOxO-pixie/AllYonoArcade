import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import ComparisonTable from "../components/sections/ComparisonTable";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";
import { OPERATOR_CHECKED } from "../lib/legal";

const TITLE = "Yono Arcade Mall: What It Is, Mall APK & App Checks";
const DESCRIPTION =
  "What the Yono Arcade Mall is, whether a separate Yono Arcade Mall APK or app exists, and how a Mall listing differs from the main app and from individual game APKs.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/mall" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/mall" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function MallPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mall"
        title="Yono Arcade Mall"
        answer="The Yono Arcade Mall is a screen inside the Yono Arcade app, reached from the bottom navigation bar, that lists other apps from the same family. It is not a separate app: there is no official Yono Arcade Mall APK, and no Mall app on Google Play."
      />

      <RelatedLinks />

      <ContentSection heading="What the Mall does">
        <p>
          Opening the Mall shows a &quot;Welcome to Yono Arcade — all your favorite apps, one
          place&quot; screen. It works like a small app store inside Yono Arcade: listings are
          grouped by category (All, Top Apps, Games, Utilities, Entertainment and more), and each
          listing shows a star rating and an Install button.
        </p>
        <BulletList
          items={[
            "Top Apps carousel: a curated shortlist (apps such as Yono Play, Yono Chat, Yono Store and Yono Rewards have appeared here).",
            "Category filters: All, Top Apps, Games, Utilities, Entertainment, and a More tab.",
            "Wallet balance in the top bar, because some listings can be paid for from the in-app wallet.",
            "\"Secure Access\" and \"Verified\" badges on the Mall's own promotional material. These are the operator's labels, not an independent check.",
          ]}
        />
        <GuideImage
          src="/images/guides/mall-app-mockup.webp"
          alt="Illustration of the Yono Arcade Mall screen with the Top Apps carousel, category filters and wallet balance"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="Is there a Yono Arcade Mall APK?">
        <p>
          No official one. The Mall ships inside the main Yono Arcade app, so the only file you need
          is the Yono Arcade APK from YonoArcade.com. On {OPERATOR_CHECKED}, Google Play had no app
          called &quot;Yono Arcade Mall&quot;, and YonoArcade.com offered no separate Mall download.
        </p>
        <p>
          A file or page offering a &quot;Yono Arcade Mall APK&quot;, &quot;Mall app latest
          version&quot; or &quot;Mall mod&quot; is therefore either a repackaged copy of the main app
          or a different app using the name. Check its package name and publisher before installing
          anything; our <Link href="/blog/who-operates-yono-arcade">operator and identity guide</Link>{" "}
          lists the lookalike Google Play apps we have found.
        </p>
      </ContentSection>

      <ContentSection heading="Main app vs Mall vs individual app APKs">
        <p>
          Three different things are often called &quot;Yono Arcade&quot;. Knowing which one you are
          looking at tells you what to check.
        </p>
        <ComparisonTable
          headers={["What it is", "Where it comes from", "What to check"]}
          rows={[
            ["Yono Arcade app", "One APK from YonoArcade.com (not Google Play)", "Download domain, package name, operator Yono Tech Private Limited"],
            ["The Mall", "A screen inside the Yono Arcade app", "Nothing extra to download; ignore sites selling a \"Mall APK\""],
            ["An app listed in the Mall", "A separate app with its own install", "Its own developer, package name and permissions, before you install it"],
            ["A game inside Yono Arcade", "Part of the main app (Rummy, Crash, Roulette…)", "No separate APK; see our games list"],
          ]}
        />
        <p>
          Installing an app from the Mall installs a separate app with its own permissions and its
          own terms. Being listed in the Mall does not make it part of Yono Arcade or tell you who
          operates it. See the <Link href="/all-games">Yono Arcade games list</Link> for what is
          inside the main app.
        </p>
      </ContentSection>

      <Callout tone="info" title="Not a separate download" badge="verified">
        <p>
          The Mall isn&apos;t its own app or APK. It&apos;s a screen inside Yono Arcade, reached from
          the bottom navigation bar alongside Home, Rewards, Wallet and Profile.
        </p>
      </Callout>

      <Callout tone="warning" title="Before installing an app from the Mall">
        <p>
          Check the permissions it asks for (a game has no need for your SMS or contacts), and never
          share an OTP or UPI PIN to &quot;unlock&quot; an app or a bonus. If you have been
          defrauded, report it on 1930 or at cybercrime.gov.in.
        </p>
      </Callout>

      <FAQSection
        heading="Mall questions"
        items={[
          {
            question: "Is the Yono Arcade Mall a separate app?",
            answer:
              "No. It's a section inside the main Yono Arcade app, reachable from the bottom navigation bar. There's nothing extra to download to open it.",
          },
          {
            question: "Is there a Yono Arcade Mall APK?",
            answer: `No official one. On ${OPERATOR_CHECKED} there was no Yono Arcade Mall app on Google Play and no separate Mall download on YonoArcade.com. A \"Mall APK\" from another site is a copy of the main app or a different app.`,
          },
          {
            question: "What can I do in the Mall?",
            answer:
              "Browse other apps in the same family by category, see their ratings, and install them. Each one installs as a separate app with its own permissions.",
          },
          {
            question: "Are apps in the Mall part of Yono Arcade?",
            answer:
              "No. They are separate apps. Being listed in the Mall does not tell you who operates an app, so check its developer and package name before installing.",
          },
        ]}
      />
    </>
  );
}
