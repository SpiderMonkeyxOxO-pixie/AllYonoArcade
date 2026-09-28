import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import ComparisonTable from "../../components/sections/ComparisonTable";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import ArticleSchema from "../../components/sections/ArticleSchema";
import { requirePublished } from "../../lib/schedule";

export const dynamic = "force-dynamic";

const PUBLISHED = "2026-10-07";
const PATH = "/blog/jaiho-arcade-vs-yono-arcade";
const IMAGE = "/images/guides/jaiho-arcade-vs-yono-arcade.webp";
const H1 = "Jaiho Arcade vs Yono Arcade: Are They the Same App?";
const TITLE = "Jaiho Arcade vs Yono Arcade: Same App? We Checked the APKs";
const DESCRIPTION =
  "Jaiho Arcade and Yono Arcade use different names and packages, but their APKs are signed with the same certificate and served from the same host. What that means.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function JaihoVsYonoPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Jaiho Arcade vs Yono Arcade" />

      <PageHeader
        eyebrow="Comparison"
        title={H1}
        answer="They're separate apps with different names and package IDs, so both can sit on one phone. But on 28 September 2026 both official APKs were signed with the same “lamislot” certificate, served from the same download host and built the same way. Whoever holds the signing key for one also holds it for the other."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: October 7, 2026 · Both APKs downloaded from their official sites and inspected on September 28, 2026 (not installed)
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Jaiho Arcade vs Yono Arcade comparison" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="What we compared (28 September 2026)">
        <ComparisonTable
          headers={["Check", "Yono Arcade", "Jaiho Arcade"]}
          rows={[
            ["Download site", "yonoarcade.com", "jaihoarcade48.com"],
            ["Package", "com.arcade.games.yo", "com.jaiho.fun.games"],
            ["Version", "1.1.9", "1.1.6"],
            ["Signing certificate", "\"lamislot\", SHA-256 5c:bb:22…a8:ee:ea", "Identical: same certificate, same fingerprint"],
            ["APK download host", "d1bjlwgcobo9al.cloudfront.net", "Identical"],
            ["Game engine", "Cocos2d-x", "Same"],
            ["Permissions", "9", "The same 9"],
            ["Download script", "FingerprintJS + getapk.php", "Same"],
            ["Per-download tag", "Channel code + visitor ID", "Same format"],
            ["Live chat", "yonoarcadehelp.com", "jaihoarcadehelp.com (same chat system)"],
            ["Games listed", "Rummy, Ludo, Poker, Crash, Andar Bahar…", "Rummy, Ludo, Poker, Crash, Andar Bahar…"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="What it means">
        <BulletList
          items={[
            "Same key, same builder. Android apps are signed with a private key. Two apps carrying the identical certificate were signed by whoever controls that key.",
            "Separate accounts and balances. Different packages mean separate apps; an account or balance in one doesn't carry over to the other.",
            "Different claims. YonoArcade.com names Yono Tech Private Limited as its operator. Jaiho Arcade's site says it launched in 2017 and calls itself \"ISO Certified\" with \"1 Crore+\" users; we found no operator name on it.",
          ]}
        />
        <p>
          Details of the Yono Arcade file are in our{" "}
          <Link href="/blog/yono-arcade-apk-review">Yono Arcade APK review</Link>; its operator and
          lookalike apps are covered in <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="“Jaiho Arcade game all APK”">
        <p>
          As with Yono Arcade, all Jaiho Arcade games are inside one APK. An &quot;all APK&quot; list is
          a list of other Jaiho or Yono-family apps, each a separate download. Check that any Jaiho
          Arcade file&apos;s package name is <code>com.jaiho.fun.games</code>.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Both are presented as real-money apps">
        <p>
          Online money games are prohibited in India since 1 May 2026. See{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </Callout>

      <FAQSection
        heading="Jaiho Arcade questions"
        items={[
          { question: "Is Jaiho Arcade the same as Yono Arcade?", answer: "They're separate apps with different packages, but on 28 September 2026 both APKs were signed with the same certificate and served from the same download host." },
          { question: "Can I use my Yono Arcade account in Jaiho Arcade?", answer: "No. They're separate apps with separate accounts." },
          { question: "What is the Jaiho Arcade package name?", answer: "com.jaiho.fun.games (version 1.1.6 on 28 September 2026)." },
          { question: "Is Jaiho Arcade on Google Play?", answer: "No app by that name appeared on Google Play in India on 28 September 2026." },
        ]}
      />
    </>
  );
}
