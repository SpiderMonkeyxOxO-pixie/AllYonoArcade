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

const TITLE = "Is Yono Arcade Banned in India? Yono Game Legal Status 2026";
const META_TITLE = "Is Yono Arcade Banned in India? Yono Game Legal Status 2026";
const DESCRIPTION =
  "Is Yono Game banned in India? What the Online Gaming Act 2025 says about real-money apps like Yono Arcade, why its state list is out of date, and what it means for players.";
const URL = "https://allyonoarcade.com/blog/is-yono-arcade-banned-in-india";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-india-2026-rules-status-guide.webp";
const PUBLISHED = "2026-09-29";

const ACT_PDF = "https://www.meity.gov.in/static/uploads/2025/10/8a7f103cefc68ed8aaa2ebc9a2ed7c13.pdf";
const PIB = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2254606";
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: META_TITLE, description: DESCRIPTION, url: URL, images: [{ url: IMAGE }] },
  twitter: { title: META_TITLE, description: DESCRIPTION },
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
    { "@type": "ListItem", position: 3, name: "Is Yono Arcade Banned in India?", item: URL },
  ],
};

export default function YonoArcadeBannedPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="India 2026"
        title={TITLE}
        answer="Online money games have been prohibited across India since 1 May 2026 under the Promotion and Regulation of Online Gaming Act, 2025. Yono Arcade's own website describes it as a real-cash gaming app, so it falls in the prohibited category. The Act does not publish a list of banned app names, and it does not penalise players."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: September 29, 2026 · Sources: the Act (MeitY) and YonoArcade.com, checked 28 September 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-india-2026-rules-status-guide.webp"
        alt="Yono Arcade in India 2026: the Online Gaming Act, the 18+ age rule and money-game classification"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What the law says">
        <p>
          The{" "}
          <a href={ACT_PDF} {...EXTERNAL}>
            Promotion and Regulation of Online Gaming Act, 2025
          </a>{" "}
          (Act No. 32 of 2025) was notified on 22 August 2025. The Online Gaming Rules, 2026 were
          notified on 22 April 2026, and both came into force on <strong>1 May 2026</strong>. The Act
          defines an &quot;online money game&quot; as a game played by paying fees or depositing money
          or other stakes in the expectation of winning money or other stakes, &quot;irrespective of
          whether such game is based on skill, chance, or both&quot;.
        </p>
        <ComparisonTable
          headers={["Section", "What it prohibits", "Maximum penalty"]}
          rows={[
            ["Section 5", "Offering or aiding an online money game", "3 years' jail and/or ₹1 crore fine"],
            ["Section 6", "Advertising or promoting one", "2 years' jail and/or ₹50 lakh fine"],
            ["Section 7", "Banks and payment services processing payments for one", "3 years' jail and/or ₹1 crore fine"],
            ["Section 14", "Lets the government block access to such services under IT Act s.69A", "Blocking order"],
          ]}
        />
        <p>
          Offences under sections 5 and 7 are cognizable and non-bailable. For the official summary,
          see the{" "}
          <a href={PIB} {...EXTERNAL}>
            government&apos;s press release
          </a>
          .
        </p>
      </ContentSection>

      <ContentSection heading="Where Yono Arcade fits">
        <p>
          We don&apos;t need to guess what kind of app Yono Arcade is: its operator says so. On 28
          September 2026, YonoArcade.com advertised &quot;Real Cash Games&quot;, deposit bonuses on
          &quot;Add Cash&quot;, and withdrawals to bank accounts and UPI. Its game list includes Andar
          Bahar, Roulette, Wingo Lottery, 7 Up Down and Crash. That is an online money game as the Act
          defines it, whether you look at the skill games or the chance games.
        </p>
        <Callout tone="warning" title="Its own terms are out of date" badge="verified">
          <p>
            Yono Arcade&apos;s terms still say the product is for India except Telangana, Assam,
            Orissa, Gujarat, Maharashtra, Delhi, Andhra Pradesh, Tamil Nadu, Nagaland and Sikkim.
            That state-by-state approach predates the 2025 Act. Since 1 May 2026 the prohibition
            applies in every state, and the terms don&apos;t mention the Act at all.
          </p>
        </Callout>
        <p>
          Its About page also says &quot;all games on YonoArcade are skill-based&quot;. That claim
          doesn&apos;t match its own game list, and under the Act it wouldn&apos;t matter anyway. See
          our <Link href="/is-yono-arcade-safe">safety review</Link> for the other claims on the
          operator&apos;s site.
        </p>
      </ContentSection>

      <ContentSection heading="Is there an official list of banned apps?">
        <p>
          No. The Act bans a category of game, not named apps, and blocking orders under section 69A
          of the IT Act are not normally published. So the absence of Yono Arcade from a news report
          or a list doesn&apos;t mean it is allowed. What decides the question is what the app does,
          and Yono Arcade describes itself as a real-money platform.
        </p>
      </ContentSection>

      <ContentSection heading="What it means if you already use Yono Arcade">
        <BulletList
          items={[
            "Players are not penalised. The Act's penalties apply to operators, advertisers and payment providers.",
            "Payments can fail. Banks and payment apps are barred from processing money-game payments, so deposits and withdrawals may be declined or reversed.",
            "Money in the app is at risk. If a platform is blocked or stops paying, there is no regulator you can claim from.",
            "Scammers follow bans. Expect fake \"withdrawal unlock\" agents and fake customer care numbers. Never pay a fee to release your own money.",
            "If you have lost money to fraud, report it on 1930 or at cybercrime.gov.in and tell your bank.",
          ]}
        />
        <p>
          If gaming is affecting your money, sleep or mood, the free Tele-MANAS mental health line is{" "}
          <strong>14416</strong> (or 1-800-891-4416), available 24/7 in Indian languages.
        </p>
      </ContentSection>

      <ContentSection heading="What the Act still allows">
        <p>
          The Act separates online money games from e-sports and online social games, which it
          promotes. A free game with no deposits, no stakes and no cash prizes is not an online money
          game. The line is money: paying in, or buying coins with money, to win money or stakes.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade or Yono Tech Private Limited, and this
          article is not legal advice. Read our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Yono Arcade legal status questions"
        items={[
          {
            question: "Is Yono Arcade banned in India?",
            answer:
              "Online money games have been prohibited across India since 1 May 2026 under the Online Gaming Act, 2025, and Yono Arcade describes itself as a real-cash gaming app. The Act bans the category rather than listing app names.",
          },
          {
            question: "Is Yono Game legal or illegal?",
            answer:
              "Playing Yono-style real-money games is not a crime for the player, but offering, advertising and processing payments for them is illegal in India since 1 May 2026, whether the games are skill-based or chance-based.",
          },
          {
            question: "Yono game band ho gaya kya?",
            answer:
              "Online money games India mein 1 May 2026 se prohibited hain (Online Gaming Act, 2025). Yono Arcade apne aap ko real-cash gaming app batata hai, isliye yeh isi category mein aata hai. Players par penalty nahi hai, lekin deposit aur withdrawal fail ho sakte hain.",
          },
          {
            question: "Will I be punished for playing Yono Arcade?",
            answer:
              "The Act has no penalty for players. Its penalties apply to operators, advertisers and banks or payment services that process money-game payments.",
          },
          {
            question: "Does the skill-game argument make Yono Arcade legal?",
            answer:
              "No. The Act covers online money games whether they are based on skill, chance or both. Yono Arcade also lists chance games such as Andar Bahar and Roulette.",
          },
          {
            question: "Why does Yono Arcade still list excluded states?",
            answer:
              "Its terms use a pre-2025 state list and do not mention the national Act. Since 1 May 2026 the prohibition applies in every state.",
          },
        ]}
      />
    </>
  );
}
