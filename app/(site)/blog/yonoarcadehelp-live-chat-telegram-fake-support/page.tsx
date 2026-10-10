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
import { OPERATOR_CHECKED } from "../../../lib/legal";

const TITLE = "YonoArcadeHelp: Live Chat, Telegram and Fake Support (2026 Check)";
const DESCRIPTION =
  "What \"yonoarcadehelp\" refers to: the live chat domain on the operator's site, a Telegram contact with the same name, and why a matching name proves little.";
const SLUG = "yonoarcadehelp-live-chat-telegram-fake-support";
const URL = `https://allyonoarcade.com/blog/${SLUG}`;
const IMAGE = `https://allyonoarcade.com/images/guides/${SLUG}.webp`;
const PUBLISHED = "2026-10-12";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: [{ url: IMAGE }] },
  twitter: { title: TITLE, description: DESCRIPTION },
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
    { "@type": "ListItem", position: 3, name: "YonoArcadeHelp", item: URL },
  ],
};

export default function YonoArcadeHelpPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <PageHeader
        eyebrow="Support"
        title={TITLE}
        answer={
          "\"yonoarcadehelp\" appears in two places we found: the live-chat domain that the Yono Arcade operator's site links to for support, and a Telegram contact with the same name. We could not verify that the Telegram account is run by the operator. The operator publishes no phone number, so treat any support number as unofficial."
        }
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 12, 2026 · Checked on October 10, 2026
      </div>

      <RelatedLinks />

      <GuideImage
        src={`/images/guides/${SLUG}.webp`}
        alt="A phone showing a support chat next to a warning shield and a question mark over a Telegram contact"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      <ContentSection heading="What we found (checked 10 October 2026)">
        <ComparisonTable
          headers={["Where", "What we observed", "What it shows"]}
          rows={[
            [
              "Operator site (YonoArcade.com)",
              `Lists an email, support@yonoarcade.com, and a 24/7 live chat hosted on yonoarcadehelp.com (checked ${OPERATOR_CHECKED}). Its page title reads "Yonoarcade | Yono Arcade | Cumulative registered users 50 million".`,
              "The operator links to this chat domain",
            ],
            [
              "yonoarcadehelp.com, opened directly",
              "Did not load a page when we visited the address on its own on 10 October 2026. Chat tools often load only inside the operator's site, so this does not prove the chat is down.",
              "Nothing either way",
            ],
            [
              "t.me/yonoarcadehelp",
              "A Telegram contact page exists under this name. We found nothing on it, or on the operator's site, that links the two.",
              "The name is taken, not who runs it",
            ],
          ]}
        />
        <p>
          The full list of contacts the operator publishes is on our{" "}
          <Link href="/customer-care">customer care page</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="Why a matching name proves little">
        <p>
          Anyone can register a Telegram name that matches a brand&apos;s support domain. A name that
          looks right is not an identity. The operator&apos;s own channels, as listed on its site, are
          announcement channels. Personal accounts offering &quot;help&quot; are a known scam pattern
          in this app category.
        </p>
      </ContentSection>

      <ContentSection heading="What to do">
        <BulletList
          items={[
            "Start from the operator's site or the app. Use the support link there, not a name from a search or a message.",
            "Write by email and keep copies: support@yonoarcade.com, with screenshots and transaction IDs.",
            "Never share an OTP or UPI PIN, and never pay to \"unlock\" a withdrawal. Support does not ask for either.",
            "If you have been defrauded, report it on 1930 or at cybercrime.gov.in.",
          ]}
        />
        <p>
          For login trouble, see our <Link href="/login">login help</Link>. For who runs the app, see{" "}
          <Link href="/blog/who-operates-yono-arcade">who operates Yono Arcade</Link>.
        </p>
      </ContentSection>

      <Callout tone="info" title="Independent, unofficial guide">
        <p>
          AllYonoArcade.com is not affiliated with Yono Arcade or Yono Tech Private Limited and is
          not a support channel. We cannot access accounts, reset passwords or recover funds. Read
          our <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </Callout>

      <FAQSection
        heading="Support questions"
        items={[
          {
            question: "Is @yonoarcadehelp on Telegram official?",
            answer:
              "We cannot confirm it. A Telegram contact with that name exists, but nothing we checked links it to the operator.",
          },
          {
            question: "Is yonoarcadehelp.com the official support chat?",
            answer: `The operator's site links to it, as of our check on ${OPERATOR_CHECKED}. When we opened the address directly on 10 October 2026, no page loaded.`,
          },
          {
            question: "What is the Yono Arcade helpline number?",
            answer: "The operator publishes none. Any number you find is unofficial.",
          },
        ]}
      />
    </>
  );
}
