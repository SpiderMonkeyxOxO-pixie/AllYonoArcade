import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Yono Arcade Rummy: Games Guide",
  description:
    "What the rummy-style games inside Yono Arcade look like, based on naming and icon patterns — an honest look at what's confirmed versus still unverified.",
  alternates: { canonical: "https://allyonoarcade.com/blog/yono-arcade-rummy-guide" },
  openGraph: {
    title: "Yono Arcade Rummy: Games Guide",
    description:
      "What the rummy-style games inside Yono Arcade look like, based on naming and icon patterns — an honest look at what's confirmed versus still unverified.",
    url: "https://allyonoarcade.com/blog/yono-arcade-rummy-guide",
  },
  twitter: {
    title: "Yono Arcade Rummy: Games Guide",
    description:
      "What the rummy-style games inside Yono Arcade look like, based on naming and icon patterns — an honest look at what's confirmed versus still unverified.",
  },
};

export default function RummyGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Yono Arcade Rummy"
        answer="Rummy is one of the most consistent themes across the wider Yono-branded app family — including several of the 55+ similarly named apps we track separately. This page covers what's actually known about rummy inside Yono Arcade itself, and how to avoid confusing it with a different app entirely."
      />

      <RelatedLinks />

      <GuideImage
        src="/images/guides/rummy-guide-featured.webp"
        alt="Yono Arcade Rummy games guide featured graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <Callout tone="warning" title="Full breakdown pending" badge="pending">
        <p>
          We haven't independently verified the specific rummy variants, table stakes, or entry
          fees inside Yono Arcade yet. This page will expand once that's confirmed directly in the
          app rather than inferred from naming and branding alone.
        </p>
      </Callout>

      <ContentSection heading="Why rummy is everywhere in this naming family">
        <p>
          If you've searched around this space at all, you've probably noticed that “rummy” pairs
          with “Yono” in an unusually large number of app names — not just Yono Arcade, but a whole
          cluster of separately branded apps that share visual DNA: similar diamond-shaped logos,
          similar green-and-gold color schemes, similar card-suit iconography. That's not a
          coincidence of one developer's output; it reflects how crowded and templated the Indian
          rummy-app market has become, where dozens of apps compete for the same search terms using
          near-identical branding.
        </p>
        <p>
          That crowding is exactly why we keep a dedicated page comparing these look-alikes rather
          than assuming they're all the same product. If you arrived here looking for a specific
          app you saw mentioned somewhere — “Yono Rummy,” “Jaiho Rummy,” or any of the other
          variants — it's worth double-checking you've landed on the one you actually meant before
          you install or deposit anything.
        </p>
      </ContentSection>

      <ContentSection heading="How rummy variants generally work">
        <p>
          Sticking to general, verifiable information for a moment: Indian rummy apps typically
          offer some combination of three formats. Points Rummy is a single-round format where
          points accumulate based on the cards left in your hand when someone declares, and the
          entry fee is usually multiplied by a fixed point value to determine the payout. Pool
          Rummy runs across multiple rounds, eliminating players once they cross a points
          threshold (commonly 101 or 201), with the last player standing taking the pool. Deals
          Rummy is played over a fixed number of hands agreed upfront, with chips redistributed
          each round regardless of points.
        </p>
        <p>
          These formats are industry-standard — they're not unique to any single app — so
          understanding them generically is useful groundwork. What we can't tell you yet is which
          of these formats Yono Arcade actually offers, what the entry fees look like, or whether
          it supports all three. Until that's verified, treat any specific numbers you see quoted
          elsewhere as unconfirmed.
        </p>
        <p>
          Rummy is also legally distinct from most other card and slot games in India in one
          important way: courts have generally classified rummy as a game of skill rather than
          pure chance, which has historically kept it in a different regulatory category than
          pure-chance games. That classification doesn't mean it's automatically legal everywhere
          or for everyone — several states still restrict or ban real-money rummy outright, and the
          legal landscape keeps shifting, so this is a starting point for your own research, not a
          green light.
        </p>
      </ContentSection>

      <ContentSection heading="Common rummy terms you'll run into">
        <p>
          A handful of terms show up across nearly every Indian rummy app, Yono Arcade's family
          included, so it's worth knowing them regardless of which specific app you end up playing
          on. The Boot Amount is the fixed stake every player contributes to enter a round. A Pure
          Sequence is three or more consecutive cards of the same suit with no joker used — at least
          one is required to make a valid declaration in most rulesets. An Impure Sequence allows a
          joker to substitute for a missing card. First Drop and Middle Drop refer to exiting a hand
          early — before or after seeing more cards — usually at a lower points penalty than being
          stuck with a full hand when someone else declares. A Wild Joker is a randomly selected
          rank that can substitute for any card that round, separate from the printed joker card
          itself.
        </p>
        <p>
          None of this is specific to Yono Arcade — it's standard terminology across the format —
          but knowing it makes it much easier to evaluate whatever rules screen the app itself shows
          you, rather than taking an unfamiliar interface on faith.
        </p>
      </ContentSection>

      <ContentSection heading="Don't confuse Yono Arcade rummy with the rest of the family">
        <BulletList
          items={[
            "Several separately branded apps in the same visual family also use “Rummy” in their name — those are different products, not sub-modes of Yono Arcade.",
            "“Yono Rummy” as a standalone term may or may not refer to the same product as Yono Arcade itself — we haven't confirmed that either way.",
            "Check the publisher/developer name on the store listing before assuming two similarly named apps share a company.",
            "If someone sent you a link or referral code for “Yono Rummy,” confirm it's actually for the app you meant before entering any payment details.",
          ]}
        />
        <p>
          See <Link href="/alternatives">Yono Arcade vs. Look-Alikes</Link> for the full breakdown
          of how to tell these apps apart, or <Link href="/all-games">All Games</Link> for the
          current full list we track.
        </p>
      </ContentSection>

      <Callout tone="warning" title="State-by-state legality still applies">
        <p>
          Even where rummy is treated as a game of skill, real-money mechanics attached to it are
          still subject to state-level regulation in India, and a handful of states restrict it
          regardless of the skill classification. Confirm your own state's current rules before
          playing for money — this page isn't legal advice.
        </p>
      </Callout>

      <FAQSection
        heading="Rummy questions"
        items={[
          {
            question: "Is Yono Arcade Rummy the same as Yono Rummy (separate app)?",
            answer:
              "We haven't confirmed a relationship either way. Treat them as separate products until you can verify the publisher information yourself on each app's own store listing.",
          },
          {
            question: "What rummy variants does Yono Arcade support?",
            answer:
              "We don't have this independently confirmed yet — Points, Pool, and Deals Rummy are the standard formats across this app category, but which ones Yono Arcade specifically offers is still unverified.",
          },
          {
            question: "Is rummy legal to play for real money in India?",
            answer:
              "Rummy has generally been treated as a game of skill by Indian courts, which affects its regulatory treatment, but several states still restrict real-money rummy and rules change over time. Confirm your specific state's current law independently.",
          },
          {
            question: "How do I know if a rummy app referral is legitimate?",
            answer:
              "Confirm the app name, publisher, and icon match exactly what you expect before entering a referral code or payment details — a huge number of similarly branded rummy apps exist specifically because confusion drives installs.",
          },
        ]}
      />
    </>
  );
}
