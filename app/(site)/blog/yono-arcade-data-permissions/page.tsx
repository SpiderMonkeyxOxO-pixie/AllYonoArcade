import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import Callout from "../../../components/sections/Callout";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";

const TITLE = "Yono Arcade Data Permissions: What the APK Actually Requests";
const META_TITLE = "Yono Arcade Permissions: What the APK Really Asks For";
const DESCRIPTION =
  "The Yono Arcade APK requests 9 permissions, none flagged sensitive, per our direct inspection. Here's how to verify this yourself and what would be a red flag.";
const URL = "https://allyonoarcade.com/blog/yono-arcade-data-permissions";
const IMAGE = "https://allyonoarcade.com/images/guides/yono-arcade-data-permissions.webp";
const PUBLISHED = "2026-10-30";
const LAST_REVIEWED = "2026-10-30";

const ANSWER =
  "Here's the verified fact up front: our own direct inspection of the Yono Arcade APK (package com.arcade.games.yo, version 1.1.9, code 119) found 9 total permissions requested, and none of them fall into the categories typically flagged as sensitive on Android.";

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
    { "@type": "ListItem", position: 3, name: "Yono Arcade Data Permissions", item: URL },
  ],
};

export default function YonoArcadeDataPermissionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader eyebrow="App Guide" title={TITLE} answer={ANSWER} />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 30, 2026 · Last reviewed: October 30, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src="/images/guides/yono-arcade-data-permissions.webp"
        alt="The 9 permissions requested by the Yono Arcade APK, none flagged sensitive, per direct inspection."
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What &quot;9 permissions, none sensitive&quot; actually means">
        <p>
          Android groups permissions into tiers based on privacy and security risk. The sensitive
          tier &mdash; the one that triggers runtime permission prompts and genuine privacy concern
          &mdash; includes things like SMS read/send access, contacts access, call logs, precise
          location, microphone, and camera. Our inspection found none of these in the app&apos;s
          permission set. The 9 permissions it does request fall into Android&apos;s more routine
          categories: things like network access (required for any app that connects to a server,
          which this one obviously does for real-money gameplay), storage access (for caching game
          assets, consistent with its Cocos2d-x architecture and ~34 MB footprint), and similar
          infrastructure-level permissions apps need just to function.
        </p>
      </ContentSection>

      <ContentSection heading="Why this matters, and why we're flagging it specifically">
        <p>
          In this app category, permission over-reach is one of the most common and serious red
          flags &mdash; plenty of real-money gaming APKs circulating outside official stores do
          request SMS or contacts access, which has nothing to do with running a card or slot game
          and everything to do with harvesting data or enabling fraud (SMS access, for instance, can
          be abused to intercept OTP codes). The fact that this app&apos;s confirmed permission set
          excludes both is a genuinely positive, checkable signal &mdash; not a vague reassurance,
          but something you can verify on the exact file you download.
        </p>
      </ContentSection>

      <ContentSection heading="What WOULD be a red flag, specifically">
        <p>
          If you inspect a copy of this app and find any of the following, treat it as a serious
          warning sign that the file may have been tampered with or isn&apos;t the genuine release:
        </p>
        <p>
          <strong>SMS permissions</strong> (read, receive, or send) &mdash; no legitimate reason for
          a card/slot gaming app to need these. <strong>Contacts access</strong> &mdash; gaming apps
          don&apos;t need your address book. <strong>Call log access</strong> &mdash; same logic.{" "}
          <strong>Accessibility service requests</strong> &mdash; a permission category sometimes
          abused by malicious repackaged APKs to read screen content or simulate taps, and not part
          of the verified baseline for this app. A <strong>permission count dramatically higher than
          9</strong>, especially with several of the above included.
        </p>
      </ContentSection>

      <ContentSection heading="How to check this yourself">
        <p>
          1. Download a free, reputable APK permission viewer or analyzer tool (several exist for
          Android and desktop). 2. Open the APK file you&apos;re considering installing. 3. Review
          the full permission list and compare it against the confirmed baseline here &mdash; 9
          permissions, none sensitive. 4. Cross-check the package name (com.arcade.games.yo) and, if
          your tool supports it, the signing certificate against the known &quot;lamislot&quot;
          self-signed fingerprint, as covered in our{" "}
          <Link href="/blog/yono-arcade-apk-guide">APK guide</Link>.
        </p>
        <p>
          This same verification habit is worth applying to any variant file you encounter,
          including anything branded as{" "}
          <Link href="/blog/yono-arcade-plus-apk">Yono Arcade Plus</Link> or distributed through an{" "}
          <Link href="/blog/yono-arcade-agent-apk">agent</Link> link &mdash; a mismatched permission
          list on a variant file is one of the clearest signs it isn&apos;t the genuine app.
        </p>
      </ContentSection>

      <ContentSection heading="Bottom line">
        <p>
          This is one of the few claims on this site backed by a fully reproducible technical check:
          you don&apos;t have to trust us, you can confirm the permission count and sensitivity level
          yourself on the exact file in front of you. That&apos;s a meaningfully stronger basis for a
          safety judgment than any review&apos;s general impression &mdash; see our broader{" "}
          <Link href="/is-yono-arcade-safe">is Yono Arcade safe</Link> piece for how this fits into
          the full picture.
        </p>
      </ContentSection>

      <Callout tone="info" title="18+ responsible gaming">
        <p>
          This app enables real-money gameplay once installed. This is 18+ content: a clean
          permission profile reduces one category of risk but says nothing about gambling risk
          itself &mdash; set a budget regardless.
        </p>
      </Callout>

      <FAQSection
        items={[
          {
            question: "How many permissions does the Yono Arcade APK request?",
            answer: "Our direct inspection found 9 total permissions, none in Android's sensitive category.",
          },
          {
            question: "Does Yono Arcade ask for SMS or contacts access?",
            answer:
              "No — not in the version we inspected. If a copy of the app you've downloaded requests either, treat that as a strong warning sign.",
          },
          {
            question: "How can I check the app's permissions myself?",
            answer:
              "Use any reputable APK permission viewer tool, open the file, and compare its permission list against the 9-permission, no-sensitive-access baseline documented here.",
          },
          {
            question: "Does a clean permission list mean the app is totally safe?",
            answer:
              "It rules out one real risk category (data/privacy abuse) but says nothing about financial risk from real-money gameplay — see our full safety review for the complete picture.",
          },
        ]}
      />
    </>
  );
}
