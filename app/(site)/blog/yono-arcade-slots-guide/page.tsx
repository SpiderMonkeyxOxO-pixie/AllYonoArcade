import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ArticleSchema from "../../../components/sections/ArticleSchema";
import ScheduledLink from "../../../components/sections/ScheduledLink";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const PATH = "/blog/yono-arcade-slots-guide";
const IMAGE = "/images/guides/slots-guide-featured.webp";
const H1 = "Yono Arcade Slots: What's Actually in the App";
const TITLE = "Yono Arcade Slots: Which Games Exist, RTP & \"Slot Tricks\"";
const DESCRIPTION =
  "Does Yono Arcade have slots? What YonoArcade.com lists, the slot-style games it does name (Roulette, Wingo, 7 Up Down), why slot tricks don't work, and the legal position.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SlotsGuidePage() {
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published="2026-07-15" modified="2026-09-28" crumb="Yono Arcade Slots" />

      <PageHeader
        eyebrow="Blog"
        title={H1}
        answer="YonoArcade.com uses “Slots” in its page title, but none of the 10 games on its homepage is a slot machine. The closest games it names are Roulette, Wingo Lottery, 7 Up Down and Crash, all games of chance. Slot games may exist inside the app; we haven't counted the in-app catalogue."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Updated: September 28, 2026 · Source: YonoArcade.com, checked September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Yono Arcade slots and slot-style games guide" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="Slots and slot-style games Yono Arcade names">
        <ComparisonTable
          headers={["Game", "Named where", "Type"]}
          rows={[
            ["\"Slots\"", "Page title only", "Not named in the games list"],
            ["Roulette", "Homepage games list", "Wheel, chance"],
            ["Wingo Lottery", "Homepage games list", "Colour/number draw, chance"],
            ["7 Up Down", "Homepage games list", "Dice, chance"],
            ["Crash", "Homepage games list", "Multiplier, chance"],
            ["Jhandi Munda", "Homepage games list", "Dice, chance"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="How slot games work">
        <BulletList
          items={[
            "Each spin's result comes from a random number generator on the operator's server.",
            "RTP (return to player) is the long-run share of stakes paid back. Below 100% means players lose on average. Yono Arcade publishes no RTP figures.",
            "Spins are independent: a machine isn't \"due\" to pay after a losing streak.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why “slot tricks” and “hacks” don't work">
        <BulletList
          items={[
            "Timing your spins, changing bet size or playing at \"lucky hours\" doesn't affect a server-side random result.",
            "\"Hack\" or \"mod\" APKs can't change what the server decides; they're often repackaged apps used to take logins or payments. Check the package name is com.arcade.games.yo.",
            "\"Slot signal\" Telegram groups sell the same thing as Aviator predictors: nothing.",
          ]}
        />
        <p>
          How to check the genuine file:{" "}
          <ScheduledLink href="/blog/yono-arcade-apk-review" date="2026-09-30">Yono Arcade APK review</ScheduledLink>.
        </p>
      </ContentSection>

      <ContentSection heading="Other slot apps in the Yono network">
        <p>
          Separate apps in the same family, such as <Link href="/all-games/yono-777">Yono 777</Link>,
          focus on slots. They&apos;re different apps with their own download sites and operators, not
          part of Yono Arcade. See the <Link href="/all-games">Yono Arcade games list</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="The legal position">
        <p>
          Slots are games of chance, and Yono Arcade presents its games as real-cash games. Since 1
          May 2026, online money games are prohibited in India. If gaming is affecting your money or
          mood, call the free Tele-MANAS helpline on <strong>14416</strong>.
        </p>
      </ContentSection>

      <FAQSection
        heading="Slots questions"
        items={[
          {
            question: "Does Yono Arcade have slots?",
            answer:
              "Its website uses \"Slots\" in its title but doesn't name a slot game among its 10 listed games. Roulette, Wingo Lottery, 7 Up Down and Crash are the closest.",
          },
          {
            question: "What is the RTP of Yono Arcade slots?",
            answer: "The operator doesn't publish RTP figures.",
          },
          {
            question: "Do slot tricks work in Yono Arcade?",
            answer:
              "No. Results come from a random number generator on the operator's server.",
          },
          {
            question: "Are Yono Arcade slots real money?",
            answer:
              "The operator presents its games as real-cash games; online money games are prohibited in India since 1 May 2026.",
          },
        ]}
      />
    </>
  );
}
