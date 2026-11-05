import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Cash Rummy APK Download & Promo Code — Live Now";
const META_TITLE = "Cash Rummy APK Download & Promo Code — Live Now";
const DESCRIPTION =
  "Cash Rummy launched 5 Nov 2026 as a 10-game platform on the Yono network — a structurally similar model to Yono Arcade. Download status, bonus terms, and an honest first look.";
const URL = "https://allyonoarcade.com/blog/cash-rummy-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/cash-rummy-apk-download.webp";
const PUBLISHED = "2026-11-05";
const LAST_REVIEWED = "2026-11-05";
const REFERRAL_LINK = "https://www.cashrummy99.com/?code=RS9XV2AA&t=1793849345";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Cash Rummy launched 5 November 2026 at 8:00 AM IST — structurally similar to Yono Arcade's own multi-game model, though independently operated with no connection to it. The app's own listing states a ₹50–500 welcome bonus and ₹100 minimum withdrawal, neither independently verified.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: IMAGE }],
  },
  twitter: {
    title: META_TITLE,
    description: DESCRIPTION,
  },
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
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Cash Rummy APK Download", item: URL },
  ],
};

export default function CashRummyApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 5, 2026 &middot; Last reviewed: November 5, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/cash-rummy-apk-download.webp"
        alt="Cash Rummy APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Status">
        <p>
          Download Cash Rummy here. It is not an official store link, and we may earn a commission if you use it.
          AllYonoArcade.com does not host APK files or operate Cash Rummy.
        </p>
        <p>
          <a
            href={REFERRAL_LINK}
            {...EXTERNAL}
            className="btn-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            Download Cash Rummy
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Welcome Bonus — A Range, Not a Fixed Figure">
        <p>
          ₹50–500, rather than one confirmed number. Likely means the actual amount depends on factors not
          spelled out &mdash; account type, deposit size, timing. Minimum withdrawal ₹100.
        </p>
      </ContentSection>

      <ContentSection heading="Promo Code Status">
        <p>
          No fixed code &mdash; up to three releases a day per the operator&apos;s stated pattern, same cadence as
          elsewhere on this network. Check our <Link href="/promo-codes">promo codes page</Link> for daily-updated
          codes across all platforms.
        </p>
      </ContentSection>

      <ContentSection heading="Before You Download">
        <p>
          Expect a larger footprint and broader permissions than a single-game app &mdash; but no legitimate reason
          to request contacts, SMS, or call logs.
        </p>
      </ContentSection>

      <ContentSection heading="What We Can and Can't Verify">
        <p>
          We have not confirmed which of the ten listed games are actually playable at launch, or tested
          data-retention/permission-handling practices.
        </p>
      </ContentSection>

      <ContentSection heading="Game Lineup vs. Yono Arcade's Own Roster">
        <div className="not-prose overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[420px] border-collapse text-[13px] sm:text-[14px]">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="px-3 sm:px-4 py-3 text-left font-semibold text-[#f3f5ff] whitespace-nowrap">
                  Cash Rummy Game
                </th>
                <th className="px-3 sm:px-4 py-3 text-left font-semibold text-[#f3f5ff] whitespace-nowrap">Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rummy", "Skill"],
                ["Crash", "Chance"],
                ["Andar Bahar", "Chance"],
                ["Wingo Lottery", "Chance"],
                ["Dragon & Tiger", "Chance"],
                ["Jhandi Munda", "Chance"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/[0.06]">
                  <td className="px-3 sm:px-4 py-3 font-medium text-[var(--color-ink-200)]">{row[0]}</td>
                  <td className="px-3 sm:px-4 py-3 text-[var(--color-ink-400)]">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <Callout tone="info" title="Pre-launch listing no longer applies">
        <p>
          AllYonoArcade.com does not develop, host, or operate Cash Rummy or any other app in this directory.
          Structurally similar to Yono Arcade&apos;s own multi-game model, but independently operated with no
          connection to it.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is Cash Rummy the same kind of app as Yono Arcade?",
            answer:
              "Structurally similar — both bundle multiple games — but independently operated, no connection.",
          },
          {
            question: "What games does Cash Rummy include?",
            answer:
              "Ten: Rummy, Ludo, Poker, Crash, Andar Bahar, Wingo Lottery, 7 Up Down, Dragon & Tiger, Jhandi Munda, Roulette.",
          },
          {
            question: "What is Cash Rummy's welcome bonus?",
            answer: "₹50–500, a range per the app's own listing, not independently verified.",
          },
          {
            question: "Is there a fixed promo code?",
            answer: "No — released up to three times daily per the operator's own stated pattern.",
          },
        ]}
      />
    </>
  );
}
