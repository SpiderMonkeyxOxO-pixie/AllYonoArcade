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

const TITLE = "Jaiho Play vs Jaiho Arcade: How to Tell Them Apart";
const META_TITLE = "Jaiho Play vs Jaiho Arcade: How to Tell Them Apart";
const DESCRIPTION =
  "Jaiho Play (rummy and Teen Patti, Yonotech Pvt. Ltd.) and Jaiho Arcade share a first word, not a confirmed owner. See how to tell them apart.";
const URL = "https://allyonoarcade.com/blog/jaiho-play-vs-jaiho-arcade";
const IMAGE = "https://allyonoarcade.com/images/platforms/jaiho-play.webp";
const PUBLISHED = "2026-10-15";
const LAST_REVIEWED = "2026-10-15";
const REFERRAL_LINK = "https://jaihogo.com/?code=E4VW58CDZFY&t=1792035058";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

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
    { "@type": "ListItem", position: 3, name: "Jaiho Play vs Jaiho Arcade", item: URL },
  ],
};

export default function JaihoPlayVsJaihoArcadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="App Guide"
        title={TITLE}
        answer="Jaiho Play and Jaiho Arcade are separate apps, and nothing shows they share an owner. Jaiho Play opened on 15 October 2026 as version 1.0.0 with rummy and Teen Patti, and names Yonotech Pvt. Ltd. as its operator. Compare the exact name, operator and package name before you treat one as the other."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 15, 2026 · Last reviewed: October 15, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/platforms/jaiho-play.webp"
        alt="Jaiho Play app icon next to the Jaiho Arcade name, illustrating how the two apps get confused."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Why the two names get mixed up">
        <p>
          &quot;Jaiho&quot; is a brand word used across a family of apps and listings, and &quot;Arcade&quot;
          and &quot;Play&quot; are generic words that can follow the same first name. Search engines also
          match partial names, so a reader looking for one often lands on pages about the other.
          Jaiho Arcade has a large search following, so a new Jaiho Play listing inherits a lot of
          accidental traffic. That is how wrong installs happen: one familiar word, assumed to mean
          one app.
        </p>
      </ContentSection>

      <ContentSection heading="Side by side">
        <ComparisonTable
          headers={["Item", "Jaiho Play", "Jaiho Arcade"]}
          rows={[
            ["Opened", "15 Oct 2026, from 8:00 AM IST", "Listed in our directory"],
            ["Version at launch", "1.0.0", "See its page"],
            ["Operator named in the app", "Yonotech Pvt. Ltd. (not independently verified)", "See its page"],
            ["Games seen", "Rummy and Teen Patti", "See its page"],
            ["Minimum deposit and withdrawal", "About ₹50–₹100 and ₹100", "See its page"],
            ["Payment methods shown", "UPI, Paytm and BHIM", "See its page"],
            ["Welcome bonus", "A range of ₹50–₹500 shown (conditions not recorded)", "See its page"],
            ["Official website or store", "None yet", "See its page"],
            ["Connection to the other", "Not confirmed", "Not confirmed"],
          ]}
        />
        <p>
          We keep the Jaiho Arcade column short on purpose. Its details live on its own page, and we
          do not restate them here. See our <Link href="/all-games">All Games list</Link> for the
          latest on both apps.
        </p>
      </ContentSection>

      <Callout tone="info" title="Not the same app" badge="unverified">
        <p>
          Jaiho Play and Jaiho Arcade are different names with no confirmed shared operator. Treating
          one as a version of the other is a name assumption, not a verified fact.
        </p>
      </Callout>

      <ContentSection heading="Three ways name mix-ups happen">
        <BulletList
          items={[
            <>
              <strong>Shared first word.</strong> Both names begin with &quot;Jaiho,&quot; so lists and videos
              blur them.
            </>,
            <>
              <strong>Copycat naming.</strong> A new app borrows a popular name with a small change.
            </>,
            <>
              <strong>Aggregator pages.</strong> A list page merges several apps under one heading.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection heading="How to tell which app you have">
        <p>Check these in order and write down what you see:</p>
        <BulletList
          items={[
            <>
              <strong>The exact name</strong> inside the app and on the page that gave you the file.
            </>,
            <>
              <strong>The operator.</strong> Jaiho Play shows Yonotech Pvt. Ltd. If the app you opened
              names a different company, it is a different app.
            </>,
            <>
              <strong>The version.</strong> Jaiho Play was 1.0.0 at launch.
            </>,
            <>
              <strong>The games.</strong> Jaiho Play has rummy and Teen Patti. An app that opens to
              different games is not it.
            </>,
            <>
              <strong>The package name.</strong> On Android a text like <code>com.example.app</code>{" "}
              identifies the app, and similar display names usually have different package names.
            </>,
            <>
              <strong>The permissions.</strong> A card game rarely needs contacts or SMS.
            </>,
          ]}
        />
        <p>
          Our <Link href="/is-yono-arcade-safe">Yono Arcade safety review</Link> walks through the
          same questions for the main app, and the{" "}
          <Link href="/blog/yono-arcade-apk-review">APK review</Link> shows how to read a file&apos;s
          details.
        </p>
      </ContentSection>

      <ContentSection heading="A case we have already covered">
        <p>
          We wrote about the same kind of confusion between Jaiho Arcade and Yono Arcade in{" "}
          <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade vs Yono Arcade</Link>. The
          lesson is identical: a shared word is not a shared owner.
        </p>
      </ContentSection>

      <ContentSection heading="No official site yet">
        <p>
          At launch there is no official website or store listing for Jaiho Play, only the
          operator&apos;s referral link, which is sponsored and not an official page. That makes
          mix-ups more likely, because you cannot compare a file against an operator page. Our{" "}
          <Link href="/download">download guide</Link> explains how to check where a file comes from.
        </p>
      </ContentSection>

      <ContentSection heading="Promo codes are tracked per app">
        <p>
          Jaiho Play promo codes are released daily. A code that works on one app tells you nothing
          about another, so check the <Link href="/promo-codes">promo codes page</Link> for each app
          separately, and verify any code inside the app.
        </p>
      </ContentSection>

      <ContentSection heading="Red flags">
        <BulletList
          items={[
            <>A page that calls Jaiho Play &quot;the new Jaiho Arcade,&quot; or the reverse</>,
            <>A file named Jaiho Play that opens an app with a different name or operator</>,
            <>Terms or support details that mention another app</>,
            <>A promo code that appears only on the page giving you the file</>,
            <>A request to pay or share an OTP to get access</>,
          ]}
        />
        <p>If any of these appear, stop and uninstall.</p>
      </ContentSection>

      <ContentSection heading="If you decide to look at Jaiho Play">
        <p>
          Our sponsored referral link is below. It is not an official store link, and we may earn a
          commission if you use it.
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
            Download Jaiho Play (sponsored link)
          </a>
        </p>
        <p>
          After installing, confirm the name, operator and version above match, and check the
          permissions.
        </p>
      </ContentSection>

      <FAQSection
        items={[
          {
            question: "Is Jaiho Play the same as Jaiho Arcade?",
            answer:
              "Not confirmed. They are different names, and no evidence shows a shared operator or file. Check the operator and package name before assuming a link.",
          },
          {
            question: "Who operates Jaiho Play?",
            answer:
              "The app names Yonotech Pvt. Ltd. We have not independently verified the company, and we have not confirmed who operates Jaiho Arcade from this page.",
          },
          {
            question: "What games does Jaiho Play have?",
            answer: "Rummy and Teen Patti, as seen at launch.",
          },
          {
            question: "Where do I download Jaiho Play?",
            answer:
              "There is no official website or store yet. The sponsored referral link above is the only route we know of.",
          },
          {
            question: "Does AllYonoArcade provide the app?",
            answer: "No. AllYonoArcade is an independent guide. It does not host or distribute any APK.",
          },
        ]}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 pb-10 text-[12.5px] text-[var(--color-ink-400)]">
        18+ only. Online games involving money carry financial risk and may be restricted where you
        live. Play responsibly. AllYonoArcade is informational and not affiliated with any app.
        Download links on this page are referral links and may earn a commission.
      </div>
    </>
  );
}
