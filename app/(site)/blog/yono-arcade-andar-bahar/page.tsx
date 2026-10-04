import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import Callout from "../../../components/sections/Callout";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ArticleSchema from "../../../components/sections/ArticleSchema";
import { requirePublished } from "../../../lib/schedule";

export const dynamic = "force-dynamic";

const PUBLISHED = "2026-10-06";
const PATH = "/blog/yono-arcade-andar-bahar";
const IMAGE = "/images/guides/yono-arcade-andar-bahar.webp";
const H1 = "Andar Bahar: Meaning, Rules and Odds in Yono Arcade";
const TITLE = "Andar Bahar Meaning, Rules & Odds (Yono Arcade Guide)";
const DESCRIPTION =
  "Andar Bahar meaning in English and Hindi, how the card game works in Yono Arcade, the real odds of Andar vs Bahar, and why tricks don't work.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function AndarBaharPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Andar Bahar in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer="“Andar Bahar” is Hindi for “inside, outside”. It's a traditional Indian card game, also called Katti, and one of the 10 games YonoArcade.com names. A middle card is shown, and you bet on whether a matching card will land on the Andar (inside) or Bahar (outside) side first. It's almost a 50/50 guess."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 6, 2026 · Game list from YonoArcade.com, checked September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Andar Bahar card table with the Andar (inside) and Bahar (outside) sides" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Andar Bahar meaning">
        <ComparisonTable
          headers={["Word", "Hindi", "English"]}
          rows={[
            ["Andar", "अंदर", "Inside"],
            ["Bahar", "बाहर", "Outside"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Rules">
        <BulletList
          items={[
            "One card is placed face up in the middle (the \"joker\" or game card).",
            "Players bet on Andar or Bahar.",
            "The dealer deals cards one at a time, alternating between the two sides.",
            "The first side to receive a card of the same rank as the middle card wins.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="The odds">
        <BulletList
          items={[
            "The side that receives the first card has a small advantage and wins slightly more than half the time, about 51 to 52%.",
            "Apps usually balance that by paying a little less on that side, for example 1.9x instead of 2x.",
            "Side bets, such as how many cards are dealt before the match, pay more but lose more often.",
          ]}
        />
        <p>
          Over time, the app keeps a share of every bet. The exact payouts are on the in-app rules
          screen. See the other card games in our <Link href="/all-games">Yono Arcade games list</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Tricks that don't work">
        <p>
          Picking the side that &quot;won last time&quot;, or tracking colours or suits, doesn&apos;t
          change the next deal. Every hand is dealt fresh.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Andar Bahar is a game of chance when played for money">
        <p>
          Online money games are prohibited in India since 1 May 2026. See{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </Callout>

      <FAQSection
        heading="Andar Bahar questions"
        items={[
          { question: "What is the meaning of Andar Bahar in English?", answer: "Andar means \"inside\" and Bahar means \"outside\"." },
          { question: "How do you play Andar Bahar?", answer: "Bet on the side where a card matching the middle card will appear first." },
          { question: "Is Andar Bahar skill or luck?", answer: "Luck. Once you pick a side, the deal decides everything." },
          { question: "Which side wins more in Andar Bahar?", answer: "The side dealt first wins slightly more often, about 51 to 52%, which is why apps often pay slightly less on it." },
        ]}
      />
    </>
  );
}
