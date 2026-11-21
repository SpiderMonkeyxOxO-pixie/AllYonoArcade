import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../../components/sections/PageHeader";
import ContentSection from "../../../components/sections/ContentSection";
import BulletList from "../../../components/sections/BulletList";
import Callout from "../../../components/sections/Callout";
import ComparisonTable from "../../../components/sections/ComparisonTable";
import FAQSection from "../../../components/sections/FAQSection";
import RelatedLinks from "../../../components/sections/RelatedLinks";
import GuideImage from "../../../components/sections/GuideImage";
import ArticleSchema from "../../../components/sections/ArticleSchema";
import { requirePublished } from "../../../lib/schedule";

export const dynamic = "force-dynamic";

const PUBLISHED = "2026-11-21";
const PATH = "/blog/spin-arcade-vs-yono-arcade";
const IMAGE = "/images/guides/spin-arcade-vs-yono-arcade.webp";
const H1 = "Spin Arcade vs Yono Arcade: Is It the Same App Family?";
const TITLE = "Spin Arcade vs Yono Arcade: Same App? Here's What We Could (and Couldn't) Check";
const DESCRIPTION =
  "Spin Arcade shows up paired with Yono Arcade in searches, but we couldn't find a real app, site, or store listing — only SEO pages using both names. Here's what we checked.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SpinArcadeVsYonoPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Spin Arcade vs Yono Arcade" />

      <PageHeader
        eyebrow="Comparison"
        title={H1}
        answer={"We don't know, and we couldn't find enough to say either way. \"Spin Arcade\" shows up paired with \"Yono Arcade\" in search data, but when we went looking for an official Spin Arcade app, website, or Play Store listing, we found none — just a handful of low-quality pages that pair the two names together for search visibility, with no actual product behind them."}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 21, 2026 · Checked for a public Spin Arcade app, site, or store listing on November 20, 2026 — none found; only SEO pages pairing the two names
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Spin Arcade vs Yono Arcade comparison" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="How we checked Jaiho Arcade, and tried to check Spin Arcade the same way">
        <p>
          For our <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade vs Yono Arcade</Link> comparison,
          we had two real APKs to work with — we compared developer/publisher name, package ID, APK signing
          certificate, and the hosting behind each download link. We tried to run the same checks on Spin
          Arcade. There was nothing to point them at.
        </p>
        <ComparisonTable
          headers={["Check", "Yono Arcade", "Spin Arcade"]}
          rows={[
            ["Official site", "yonoarcade.com", "None found"],
            ["Package ID", "com.arcade.games.yo", "Not visible — no listing to check"],
            ["Developer/publisher name", "Yono Tech Private Limited (per yonoarcade.com)", "Not found"],
            ["APK to inspect", "Yes (our own review)", "None located"],
            ["Signing certificate", "\"lamislot\" (see our Yono Arcade APK review)", "Can't check — no APK found"],
            ["Play Store listing (India)", "No, per our checks", "No app by this name found"],
            ["What search actually turns up", "Official guides (this site)", "SEO/content-farm pages pairing \"spin arcade\" with \"yono arcade\" — no product page among them"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="What we found instead of an app: spam pages, not a product">
        <BulletList
          items={[
            "Unlike our Arcade 91 comparison — where the name simply had nothing behind it — a search for \"Spin Arcade\" turns up pages that exist specifically to pair it with \"Yono Arcade\" for search traffic. None of them are an app listing, a developer site, or a download page we could verify.",
            "That's a meaningfully different situation from \"no evidence either way.\" Content built purely to pair two names in search is a known pattern around APK download scams in this category — it doesn't prove a scam exists yet, but it's the kind of groundwork one would need.",
            "We still have zero evidence of a shared certificate, shared host, or shared operator between a real \"Spin Arcade\" and Yono Arcade — because we have no real Spin Arcade app to check. We also have zero evidence they're unrelated.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Our honest conclusion">
        <p>
          If you're looking for the same kind of answer we gave for Jaiho Arcade — a confirmed shared
          signing certificate and host — that's not available here, because there's no real Spin Arcade
          app to compare. Treat "Spin Arcade" as unconfirmed: not "probably the same," not "probably
          different," and not "probably doesn't exist" either. If you have a link to an official Spin
          Arcade site, app listing, or APK, we'd like to see it so we can run the same checks we ran on
          Jaiho Arcade.
        </p>
      </ContentSection>

      <Callout tone="warning" title='If someone offers you a "Spin Arcade" APK'>
        <p>
          Be more cautious here than with an ordinary unfamiliar app, because the search results around
          this name are already being gamed. Before installing or paying for anything: check the developer
          name on the install screen, not just the display name or icon; never trust a promo code, login,
          or support number from one app to work on another; and don't send money, KYC documents, or a
          deposit to anyone claiming to represent "Spin Arcade" without independently verifying the app
          first. Online money games are also prohibited in India since 1 May 2026 — see{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </Callout>

      <FAQSection
        heading="Spin Arcade questions"
        items={[
          { question: "Is Spin Arcade the same company as Yono Arcade?", answer: "We can't confirm or deny it. We tried to run the same signing-certificate and hosting checks we used on Jaiho Arcade, but as of 20 November 2026 we couldn't find a public Spin Arcade app, website, or Play Store listing to check in the first place." },
          { question: "Where can I download Spin Arcade?", answer: "We didn't find an official site, app listing, or APK for an app called Spin Arcade as of 20 November 2026 — only pages that mention the name alongside \"Yono Arcade\" for search purposes. If you've seen a download link for one, treat it as unverified until you've checked the developer name and package ID yourself." },
          { question: "I found a site offering a \"Spin Arcade\" APK — is it legit?", answer: "We can't vouch for it either way, but be cautious: our own search turned up pages built specifically to pair \"Spin Arcade\" with \"Yono Arcade\" for traffic, with no real product behind them. Verify the developer name on the install screen, don't reuse a login or promo code from another app, and never send a deposit or KYC documents before you've confirmed the app independently." },
          { question: "Why does AllYonoArcade mention Spin Arcade at all if there's nothing to check?", answer: "Search data shows people pairing \"Spin Arcade\" with \"Yono\" in their searches, which is why it appears as a possible source of confusion on our Alternatives page — not because we've confirmed any relationship, or even that a real Spin Arcade app exists." },
        ]}
      />
    </>
  );
}
