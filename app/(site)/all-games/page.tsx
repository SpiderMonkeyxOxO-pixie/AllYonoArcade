import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import AppInfoCard from "../../components/sections/AppInfoCard";
import PlatformGrid from "../../components/sections/PlatformGrid";
import ComingSoonCard from "../../components/sections/ComingSoonCard";
import Reveal from "../../components/sections/Reveal";
import { PLATFORMS } from "../../lib/platforms";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import ComparisonTable from "../../components/sections/ComparisonTable";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import { LAW_SENTENCE, OPERATOR_CHECKED } from "../../lib/legal";
import { isPublished } from "../../lib/publish-gate";
import ScheduledLink from "../../components/sections/ScheduledLink";
import { DownloadIcon } from "../../components/icons/Icons";

const TITLE = "Yono Arcade Games List (2026) & All Yono Game Apps APK";
const DESCRIPTION =
  "The Yono Arcade games list and APK info, as YonoArcade.com names it: Rummy, Ludo, Poker, Crash, Andar Bahar, Roulette and more, its 25+ games claim, and which are games of chance.";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/all-games" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/all-games" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const GAMES: [string, string, string][] = [
  ["Rummy", "13-card rummy against other players", "Mostly skill"],
  ["Ludo", "Board game; moves set by dice rolls", "Skill and chance"],
  ["Poker", "Card game against other players", "Skill and chance"],
  ["Crash", "Bet on a rising multiplier and cash out before it crashes (Aviator-style)", "Chance"],
  ["Andar Bahar", "Bet on which side a matching card lands", "Chance"],
  ["Wingo Lottery", "Bet on a drawn colour or number", "Chance"],
  ["7 Up Down", "Bet on the total of two dice", "Chance"],
  ["Dragon & Tiger", "Bet on which of two cards is higher", "Chance"],
  ["Jhandi Munda", "Bet on dice symbols", "Chance"],
  ["Roulette", "Bet on where a wheel stops", "Chance"],
];

export default function AllGamesPage() {
  return (
    <>
      <PageHeader
        eyebrow="All Games"
        title="Yono Arcade Games List"
        answer={`YonoArcade.com says the app has "25+ games" and names ten of them on its homepage: Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda and Roulette. Seven of those ten are games of chance. Checked ${OPERATOR_CHECKED}.`}
      />

      <Reveal mode="mount" className="mx-auto max-w-[760px] px-4 sm:px-6 py-2 flex justify-center">
        <Link
          href="/download"
          className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
            color: "#1a0e00",
          }}
        >
          <DownloadIcon size={15} />
          Get the Yono Arcade APK
        </Link>
      </Reveal>

      <RelatedLinks exclude="all-games" />

      <AppInfoCard
        categories={["Card games", "Casino-style", "Real-money"]}
        description="Yono Arcade is an Android app distributed as an APK from YonoArcade.com, which names Yono Tech Private Limited as its operator. The games below are the ones its own website names."
      />

      <ContentSection heading={`The 10 games YonoArcade.com names (checked ${OPERATOR_CHECKED})`}>
        <p>
          This is the list the operator itself publishes under &quot;Top Games&quot;. We describe
          how each game works and whether results depend on skill or chance, because the
          website&apos;s claim that &quot;all games are skill-based&quot; does not match the list.
        </p>
        <ComparisonTable headers={["Game", "How it works", "Skill or chance"]} rows={GAMES} />
        <p>
          Elsewhere on the same website, Yono Arcade also mentions Teen Patti, Slots, Aviator,
          Domino, UNO and Baccarat, plus Pool, Carrom and fantasy cricket in its About text. We have
          not confirmed which of these are in the current app build.
        </p>
      </ContentSection>

      <Callout tone="warning" title="How many games are in Yono Arcade?" badge="pending">
        <p>
          The only count the operator gives is &quot;25+ games&quot;. Other sites quote much higher
          totals, sometimes counting every table or bet level as a separate game. We list a game
          here only when the operator names it, and we have not counted the in-app catalogue
          ourselves. Treat any exact number you see elsewhere as unverified.
        </p>
      </Callout>

      <ContentSection heading="Yono Arcade is a real-money app">
        <p>
          YonoArcade.com advertises &quot;Real Cash Games&quot;, deposit bonuses (&quot;Add
          Cash&quot;) and withdrawals to bank accounts and UPI. {LAW_SENTENCE} See our{" "}
          <Link href="/is-yono-arcade-safe">safety review</Link> for what else the operator&apos;s own
          pages say, and{" "}
          <ScheduledLink href="/blog/is-yono-arcade-banned-in-india" date="2026-09-29">Is Yono Arcade banned in India?</ScheduledLink>{" "}
          for the law.
        </p>
      </ContentSection>

      <ContentSection heading="Is there a Yono Arcade old version APK?">
        <p>
          No archived old-version APK. YonoArcade.com does not offer a version history or older
          builds to download — the only version we&apos;ve independently confirmed is the current
          one: build 1.1.9 (code 119), uploaded 18 September 2026, package{" "}
          <code>com.arcade.games.yo</code>, signed with the &quot;lamislot&quot; certificate. There
          is no iOS app as of 28 September 2026. See our{" "}
          <Link href="/blog/yono-arcade-old-version-apk">full old-version APK write-up</Link> for
          what we checked and why no archive exists.
        </p>
      </ContentSection>

      <ContentSection heading="Where's the full list of all Yono apps?">
        <p>
          &quot;All Yono&quot; is a name for the wider family of Yono-branded apps, not a single app.
          The apps below are separately branded and separately downloaded; they are not games
          inside Yono Arcade. Our{" "}
          <Link href="/blog/all-yono-games">complete All Yono apps list guide</Link> explains why
          different lists show different totals. Several unrelated sites also use names like AllYono and
          AllYonoGames; see{" "}
          <ScheduledLink href="/blog/allyono-allyonogames-allyonogame-art-which-site" date="2026-10-10">
            which site is which
          </ScheduledLink>
          .
        </p>
        <BulletList
          items={[
            "Yono Arcade: one app with the games listed above.",
            "Other Yono-family apps: separate APKs with their own operators and download sites.",
            "The Mall inside Yono Arcade: a hub that lists other apps; see our Mall guide.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Looking for VIP Rummy, Cash Rummy, Rummy 91 or Club INR specifically?">
        <p>
          A few names from the grid below get searched for on their own often enough to point to
          directly. See the{" "}
          <Link href="/blog/vip-rummy-apk-download">VIP Rummy APK download and promo code guide</Link>{" "}
          or its{" "}
          <Link href="/all-games/vip-rummy">dedicated VIP Rummy page</Link>, the{" "}
          <Link href="/blog/cash-rummy-apk-download">Cash Rummy APK download and promo code guide</Link>{" "}
          or its{" "}
          <Link href="/all-games/cash-rummy">dedicated Cash Rummy page</Link>, the{" "}
          <Link href="/blog/rummy-91-promo-code-what-is-real">Rummy 91 promo code reality check</Link>{" "}
          or its{" "}
          <Link href="/all-games/rummy-91">dedicated Rummy 91 page</Link>, and the{" "}
          <Link href="/blog/club-inr-apk-download">Club INR APK download and promo code guide</Link>{" "}
          or its{" "}
          <Link href="/all-games/club-inr">dedicated Club INR page</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="More comparisons: other names searched alongside Yono Arcade">
        <p>
          These names don&apos;t have a dedicated page on this site yet, but each gets compared to
          Yono Arcade directly in its own guide:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          {[
            { slug: "bingo-101-vs-yono-arcade", label: "Bingo 101 vs Yono Arcade", date: "2026-11-10" },
            { slug: "boss-rummy-vs-yono-arcade", label: "Boss Rummy vs Yono Arcade", date: "2026-11-11" },
            { slug: "spin-gold-vs-yono-arcade", label: "Spin Gold vs Yono Arcade", date: "2026-11-12" },
            { slug: "spin-winner-vs-yono-arcade", label: "Spin Winner vs Yono Arcade", date: "2026-11-13" },
            { slug: "jaiho-spin-vs-yono-arcade", label: "Jaiho Spin vs Yono Arcade", date: "2026-11-14" },
            { slug: "yn-777-vs-yono-arcade", label: "Yn 777 vs Yono Arcade", date: "2026-11-15" },
            { slug: "joy-rummy-vs-yono-arcade", label: "Joy Rummy vs Yono Arcade", date: "2026-11-16" },
            { slug: "mbm-bet-vs-yono-arcade", label: "MBM Bet vs Yono Arcade", date: "2026-11-17" },
          ]
            .filter((item) => isPublished(item.date))
            .map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`}>{item.label}</Link>
              </li>
            ))}
        </ul>
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
            question: "How many games are in Yono Arcade?",
            answer:
              "YonoArcade.com says \"25+ games\" and names ten on its homepage: Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda and Roulette. Higher totals quoted elsewhere are not confirmed.",
          },
          {
            question: "Are Yono Arcade games skill-based?",
            answer:
              "Not all of them. The website says all its games are skill-based, but Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda, Roulette and Crash are games of chance.",
          },
          {
            question: "Does Yono Arcade have Aviator?",
            answer:
              "YonoArcade.com lists Aviator in its page title and names a Crash game on its homepage. Crash and Aviator-style games are games of chance.",
          },
          {
            question: "Is Yono Arcade a real-money app?",
            answer: `Yes, by its own description: it advertises real cash games, deposits and withdrawals. ${LAW_SENTENCE}`,
          },
          {
            question: "Are the other apps listed on this page games inside Yono Arcade?",
            answer:
              "No. They're separately branded apps from the same visual family, not sub-games or modes within Yono Arcade. See our Alternatives guide for what we do and don't know about how they relate.",
          },
        ]}
      />
    </>
  );
}
