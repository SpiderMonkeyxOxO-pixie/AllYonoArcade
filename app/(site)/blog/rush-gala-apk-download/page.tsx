import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Rush Gala APK Download & Promo Code — Live Now";
const META_TITLE = "Rush Gala APK Download & Promo Code — Live Now";
const DESCRIPTION =
  "Rush Gala launched 23 Nov 2026 as a multi-game casino-style app on the Yono network: Slots, Fishing, Fly and Roulette. Download link, bonus range, and an honest first look.";
const URL = "https://allyonoarcade.com/blog/rush-gala-apk-download";
const IMAGE = "https://allyonoarcade.com/images/guides/rush-gala-apk-download.webp";
const PUBLISHED = "2026-11-22";
const LAST_REVIEWED = "2026-11-23";
const REFERRAL_LINK = "https://rushgala.club/?code=MBZQC5NXWUP&t=1795408331";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Rush Gala is a multi-game casino-style app on the Yono network, built around four formats (Slots, Fishing, Fly and Roulette) rather than the single rummy format most of this directory tracks. It went live 23 November 2026 at 8:00 AM IST, and we haven't installed or tested it ourselves yet, so everything below the download link reflects what the operator's own listing says rather than anything we've confirmed first-hand.";

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
  dateModified: LAST_REVIEWED,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allyonoarcade.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allyonoarcade.com/blog" },
    { "@type": "ListItem", position: 3, name: "Rush Gala APK Download", item: URL },
  ],
};

export default function RushGalaApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 22, 2026 &middot; Last reviewed: November 23, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/rush-gala-apk-download.webp"
        alt="Rush Gala APK download and launch day review — promo code status, app features and first look"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What is Rush Gala?">
        <p>
          Rush Gala sits apart from most of what&apos;s tracked on this site. Where the bulk of the
          Yono network is built around rummy in one form or another, Rush Gala is a multi-game
          casino-style app: four formats bundled into a single install, Slots, Fishing, Fly and
          Roulette, with no rummy table in sight. It went live 23 November 2026 at 8:00 AM IST.
        </p>
        <p>
          For the rest of the network, see the{" "}
          <Link href="/blog/all-yono-games">all Yono games directory</Link>. The sections below
          describe what Rush Gala&apos;s own listing claims about itself; none of it comes from
          hands-on testing on our side just yet.
        </p>
      </ContentSection>

      <ContentSection heading="Download Status">
        <p>
          Download Rush Gala here. It&apos;s not an official store listing, and we may earn a
          commission if you use it. AllYonoArcade.com does not host APK files or operate Rush Gala.
          At 33.4 MB, the install is noticeably lighter than most multi-game apps in this category
          tend to run.
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
            Download Rush Gala
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Welcome Bonus — A Range, Not a Fixed Figure">
        <p>
          Rs.50 to Rs.500 is the stated welcome bonus, but it isn&apos;t one guaranteed number: the
          operator&apos;s listing says the amount gets assigned at random the moment an account is
          created. Deposits start as low as Rs.50 and the minimum tops out around Rs.100, while
          taking money back out requires at least Rs.100 sitting in the account. None of those three
          figures come from anything we checked ourselves; they&apos;re what Rush Gala&apos;s own
          listing claims.
        </p>
      </ContentSection>

      <ContentSection heading="Promo Code Status">
        <p>
          No fixed Rush Gala promo code exists as far as we can tell. Check our{" "}
          <Link href="/promo-codes">promo codes page</Link> for daily-updated codes across all
          platforms; if one surfaces for Rush Gala, it will be added there.
        </p>
      </ContentSection>

      <ContentSection heading="Game Lineup">
        <p>
          Four formats make up the app. Slots work the way they do everywhere else: spin a set of
          reels and match symbols for a payout, and like most slot titles they&apos;re chance-based
          by design. Fishing casts the player as a shooter aiming at fish on screen, with heavier or
          rarer targets worth more on a hit; this genre usually leans skill-based, since aim and
          timing affect the outcome more directly than a pure chance mechanic would. Fly is a
          crash-style game built around a rising multiplier that the player tries to cash out of
          before it drops, chance-based like most games built on that mechanic. Roulette follows the
          familiar wheel-and-ball format and is chance-based as well.
        </p>
        <p>
          That skill-versus-chance split is general knowledge about how these genres typically
          behave, not a confirmed claim about Rush Gala&apos;s own implementation of each game.
        </p>
      </ContentSection>

      <ContentSection heading="What's Still Unverified">
        <p>
          We don&apos;t yet know which of the four games are actually playable at launch versus still
          being rolled out. The APK itself hasn&apos;t been through our usual technical check either:
          package name, permission list, signing certificate, the same standard covered in our{" "}
          <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> methodology. This page will be
          updated once that work is done.
        </p>
      </ContentSection>

      <Callout tone="info" title="Pre-launch listing no longer applies">
        <p>
          AllYonoArcade.com does not develop, host, or operate Rush Gala or any other app in this
          directory. This page was originally a pre-launch listing; it now reflects the live app and
          will keep updating as package, permission, and bonus details get checked.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Has Rush Gala launched?",
            answer: "Yes, it went live 23 November 2026 at 8:00 AM IST. The download link is above.",
          },
          {
            question: "Where can I download Rush Gala?",
            answer:
              "The link is now live. Use the download button in the \"Download Status\" section above.",
          },
          {
            question: "What games does Rush Gala include?",
            answer: "Four: Slots, Fishing, Fly and Roulette. See the \"Game Lineup\" section above for how each works.",
          },
          {
            question: "What is Rush Gala's welcome bonus?",
            answer:
              "Rs.50 to Rs.500 per the operator's own listing, assigned randomly at signup rather than a fixed amount. Not independently verified on our end.",
          },
          {
            question: "Is there a Rush Gala promo code?",
            answer: "No fixed code has turned up yet. Check our promo codes page for the current status.",
          },
          {
            question: "How big is the Rush Gala app?",
            answer: "33.4 MB per the operator's own listing.",
          },
        ]}
      />
    </>
  );
}
