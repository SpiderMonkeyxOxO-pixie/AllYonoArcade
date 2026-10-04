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

const PUBLISHED = "2026-10-05";
const PATH = "/blog/yono-arcade-dragon-tiger";
const IMAGE = "/images/guides/yono-arcade-dragon-tiger.webp";
const H1 = "Dragon Tiger in Yono Arcade: Rules, Odds and \"Predict GPT\" Claims";
const TITLE = "Dragon Tiger in Yono Arcade: Rules, Odds & \"Predict GPT\" Claims";
const DESCRIPTION =
  "How Dragon Tiger works in Yono Arcade, the real odds of Dragon, Tiger and Tie, and why \"Dragon Tiger predict GPT\" tools can't know the next card.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function DragonTigerPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Dragon Tiger in Yono Arcade" />

      <PageHeader
        eyebrow="Games"
        title={H1}
        answer="Dragon Tiger is a two-card game named by YonoArcade.com. One card goes to Dragon and one to Tiger, and the higher card wins. Dragon and Tiger each win about 46% of hands, and a tie happens about 6 to 8% of the time. No AI or “predict GPT” tool can know the next card."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 5, 2026 · Odds for standard 52-card decks
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Dragon Tiger card game with Dragon, Tie and Tiger zones" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Rules">
        <BulletList
          items={[
            "One card is dealt to Dragon and one to Tiger. The higher rank wins; Ace is low and King is high.",
            "Players bet on Dragon, Tiger or Tie before the cards are dealt.",
            "On a tie, Dragon and Tiger bets usually lose half their stake. Check the rules screen in the app.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="The real odds">
        <ComparisonTable
          headers={["Bet", "Chance", "Where the house edge comes from"]}
          rows={[
            ["Dragon (usually pays 2x)", "About 46%", "Losing half the stake on a tie"],
            ["Tiger (usually pays 2x)", "About 46%", "Losing half the stake on a tie"],
            ["Tie (usually pays 8x to 11x)", "About 6 to 8%", "Pays far below the true odds; the worst bet on the table"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why “predict GPT” tools can't work">
        <BulletList
          items={[
            "Cards are dealt by the operator's server; nothing on your phone sees them before they show.",
            "AI chatbots can't read game servers. A \"Dragon Tiger GPT\" is a normal chatbot or a fake app with a new name.",
            "Card counting doesn't help in online versions, which often shuffle or deal from a fresh set every hand.",
          ]}
        />
        <p>
          The same applies to crash-game predictors; see{" "}
          <Link href="/blog/yono-arcade-aviator-guide">Yono Aviator APK and predictor apps</Link>.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Dragon Tiger is a game of chance">
        <p>
          Online money games are prohibited in India since 1 May 2026. Report paid &quot;prediction&quot;
          scams on <strong>1930</strong> or at cybercrime.gov.in.
        </p>
      </Callout>

      <FAQSection
        heading="Dragon Tiger questions"
        items={[
          { question: "How does Dragon Tiger work?", answer: "One card each goes to Dragon and Tiger; the higher card wins." },
          { question: "What are the odds of a tie in Dragon Tiger?", answer: "About 6 to 8%, depending on how many decks are used." },
          { question: "Can Dragon Tiger predict GPT tools really predict?", answer: "No. Cards are dealt on the server and no tool can see them in advance." },
          { question: "Is Dragon Tiger skill or chance?", answer: "Chance. You pick a side before the cards are dealt." },
        ]}
      />
    </>
  );
}
