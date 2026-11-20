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

const PUBLISHED = "2026-11-20";
const PATH = "/blog/arcade-91-vs-yono-arcade";
const IMAGE = "/images/guides/arcade-91-vs-yono-arcade.webp";
const H1 = "Arcade 91 vs Yono Arcade: Is It the Same App Family?";
const TITLE = "Arcade 91 vs Yono Arcade: Same App? Here's What We Could (and Couldn't) Check";
const DESCRIPTION =
  "Arcade 91 shows up in the same searches as Yono Arcade, but we couldn't find a public app, site, or Play Store listing for it. Here's what we checked and why it's still unconfirmed.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}`, images: [{ url: `https://allyonoarcade.com${IMAGE}` }] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Arcade91VsYonoPage() {
  requirePublished(PUBLISHED);
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published={PUBLISHED} modified={PUBLISHED} crumb="Arcade 91 vs Yono Arcade" />

      <PageHeader
        eyebrow="Comparison"
        title={H1}
        answer={"We don't know, and as of 19 November 2026 we couldn't find enough to say either way. Arcade 91 shows up paired with “yono” in search data, but we couldn't locate an official Arcade 91 website, Play Store listing, developer name, or APK to actually check — so unlike our Jaiho Arcade comparison, there was nothing here to run a signing-certificate or hosting check against."}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Published: November 20, 2026 · Checked for a public Arcade 91 app, site, or store listing on November 19, 2026 — none found to inspect
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Arcade 91 vs Yono Arcade comparison" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="How we checked Jaiho Arcade, and tried to check Arcade 91 the same way">
        <p>
          For our <Link href="/blog/jaiho-arcade-vs-yono-arcade">Jaiho Arcade vs Yono Arcade</Link> comparison,
          we had two real APKs to work with. We downloaded both, then compared developer/publisher name,
          package ID, APK signing certificate, and the hosting behind each download link. That's the same
          method we tried to apply here.
        </p>
        <ComparisonTable
          headers={["Check", "Yono Arcade", "Arcade 91"]}
          rows={[
            ["Official site", "yonoarcade.com", "None found"],
            ["Package ID", "com.arcade.games.yo", "Not visible — no listing to check"],
            ["Developer/publisher name", "Yono Tech Private Limited (per yonoarcade.com)", "Not found"],
            ["APK to inspect", "Yes (our own review)", "None located"],
            ["Signing certificate", "\"lamislot\" (see our Yono Arcade APK review)", "Can't check — no APK found"],
            ["Play Store listing (India)", "No, per our checks", "No app by this name found"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Why this isn't the same kind of answer as the Jaiho Arcade post">
        <BulletList
          items={[
            "Jaiho Arcade had a real site, a real APK, and a real certificate we could read. Arcade 91 has none of those that we could find — just a name that appears alongside \"yono\" in search-suggestion and keyword-list data.",
            "That absence doesn't prove anything either way. It could mean Arcade 91 isn't a real distinct app at all (just a naming artifact that gets typed into search bars), or it could mean it exists but wasn't visible to us — some apps in this space gate their download pages by region or device the way Yono Arcade's own site does.",
            "Either way, we have zero evidence of a shared certificate, shared host, or shared operator between Arcade 91 and Yono Arcade. We also have zero evidence they're unrelated. We just don't have an app to point the same checks at.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Our honest conclusion">
        <p>
          If you came here expecting the same kind of answer we gave for Jaiho Arcade — a confirmed
          shared signing certificate and host — that's not what we found, because there was nothing to
          compare. Treat Arcade 91 as unconfirmed, not as "probably the same" or "probably different."
          If you have a link to an official Arcade 91 site, app listing, or APK, we'd genuinely like to
          see it so we can run the same checks we ran on Jaiho Arcade.
        </p>
      </ContentSection>

      <Callout tone="warning" title="If you do find an app calling itself Arcade 91">
        <p>
          Check the developer name on the install screen before granting any permissions, and don't
          assume a promo code, login, or support number from one app works on another. Online money
          games are also prohibited in India since 1 May 2026 — see{" "}
          <Link href="/blog/is-yono-arcade-banned-in-india">Is Yono Arcade banned in India?</Link>
        </p>
      </Callout>

      <FAQSection
        heading="Arcade 91 questions"
        items={[
          { question: "Is Arcade 91 the same company as Yono Arcade?", answer: "We can't confirm or deny it. We tried to run the same signing-certificate and hosting checks we used on Jaiho Arcade, but as of 19 November 2026 we couldn't find a public Arcade 91 app, website, or Play Store listing to check in the first place." },
          { question: "Where can I download Arcade 91?", answer: "We didn't find an official site, app listing, or APK for an app called Arcade 91 as of 19 November 2026. If you've seen a download link for one, treat it like any unfamiliar sideloaded APK — verify the developer name and package ID before installing anything." },
          { question: "Is this the same kind of investigation as the Jaiho Arcade comparison?", answer: "No. For Jaiho Arcade we had two live APKs and found a matching certificate and host — see that post. For Arcade 91, there's nothing public to compare yet, so this is an open question, not a confirmed answer." },
          { question: "Why does AllYonoArcade mention Arcade 91 at all if there's nothing to check?", answer: "Search data shows people pairing \"Arcade 91\" with \"Yono\" in their searches, which is why it shows up as a possible source of confusion on our Alternatives page — not because we've confirmed any relationship between the two." },
        ]}
      />
    </>
  );
}
