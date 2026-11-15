import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Yono 777 APK Download: What's Confirmed & Promo Code Status";
const META_TITLE = "Yono 777 APK Download: What's Confirmed & Promo Code Status";
const DESCRIPTION =
  "Yono 777 APK download link, what we've verified about the app, and today's promo code status — plus why its name doesn't connect it to Yono Arcade.";
const URL = "https://allyonoarcade.com/blog/yono-777-apk-download";
const IMAGE = "https://allyonoarcade.com/images/platforms/yono-777.webp";
const PUBLISHED = "2026-11-15";
const LAST_REVIEWED = "2026-11-15";
const REFERRAL_LINK = "https://yononewgames.vip/?code=SCHFQRY8DAS";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const ANSWER =
  "Yono 777 is live, with our sponsored download link below. The name pairs the shared “Yono” branding with the classic slots jackpot number 777 — it's a separate, standalone app from Yono Arcade, not a feature or mode inside it. No welcome bonus or promo code has been independently confirmed yet.";

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
    { "@type": "ListItem", position: 3, name: "Yono 777 APK Download", item: URL },
  ],
};

export default function Yono777ApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="Live Platform" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 15, 2026 &middot; Last reviewed: November 15, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/platforms/yono-777.webp"
        alt="Yono 777 app download screen on a smartphone, a platform in the same network as Yono Arcade"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="Download Yono 777">
        <p>
          Our sponsored referral link is below. It is not an official store link, and we may earn a commission if
          you use it.
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
            Download Yono 777 (sponsored link)
          </a>
        </p>
      </ContentSection>

      <ContentSection heading="Is Yono 777 part of Yono Arcade?">
        <p>
          No. Despite sharing the &quot;Yono&quot; name and a similar green-diamond visual style used across this
          network, Yono 777 is a separately branded, separately downloaded app with its own sign-up, its own
          referral system, and its own promo codes. A Yono 777 promo code will not work inside Yono Arcade, and
          vice versa &mdash; see our full list of{" "}
          <Link href="/blog/promo-codes-for-other-yono-apps-which-we-track">
            which apps&apos; promo codes we track
          </Link>{" "}
          if you&apos;re not sure which app a code belongs to. We are not confirming or denying common ownership
          between Yono 777 and Yono Arcade; we simply haven&apos;t found evidence either way.
        </p>
      </ContentSection>

      <ContentSection heading="What's confirmed so far">
        <p>
          Yono 777 is not listed under that name on the Play Store &mdash; searches there return only unrelated
          777-themed casino apps, the same pattern we&apos;ve found for most platforms in this family (checked 28
          September 2026). We haven&apos;t yet independently inspected the Yono 777 APK&apos;s package name,
          version number, or signing certificate, so we can&apos;t confirm whether it shares infrastructure with
          any other app in this network.
        </p>
      </ContentSection>

      <ContentSection heading="What to check before you install it">
        <p>
          1. Confirm you&apos;re using the link above or another source you can verify as official. 2. Once
          installed, check the app&apos;s requested permissions &mdash; a slots/777-style app has no legitimate
          reason to request SMS or contacts access. 3. Treat any claimed promo code as unverified until it&apos;s
          confirmed inside the app itself &mdash; see{" "}
          <Link href="/blog/promo-codes-for-other-yono-apps-which-we-track">today&apos;s promo code status</Link>{" "}
          across the apps we track. 4. Read our{" "}
          <Link href="/is-yono-arcade-safe">general safety checklist</Link> before sharing any account or payment
          details with any app in this family.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This is 18+ real-money gaming content. Set a spending limit before you play anything, whatever the name
          of the platform.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "Is Yono 777 the same app as Yono Arcade?",
            answer:
              "No. They share the \"Yono\" branding convention and visual style used across this network, but Yono 777 is a separate app with its own download link and its own account system. We haven't confirmed common ownership either way.",
          },
          {
            question: "Is Yono 777 available for download now?",
            answer: "Yes — our sponsored link is above.",
          },
          {
            question: "Is Yono 777 on the Play Store?",
            answer:
              "Not under that name — search results there show only unrelated 777-themed casino apps. The download comes from its own website.",
          },
          {
            question: "Is there a promo code for Yono 777?",
            answer:
              "None has been independently confirmed yet. Check our promo codes tracker for the current status, and note that a Yono 777 code will not work inside Yono Arcade.",
          },
          {
            question: "Why does Yono 777 use the number 777?",
            answer:
              "777 is the classic top jackpot symbol on slot machines, which is likely why it's paired with the \"Yono\" name here — this is a branding observation, not confirmation of what games the app actually contains.",
          },
        ]}
      />
    </>
  );
}
