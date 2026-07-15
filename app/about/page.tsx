import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import RelatedLinks from "../components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "About AllYonoArcade.com",
  description: "Who runs AllYonoArcade.com, our editorial approach, and what we do and don't do.",
  alternates: { canonical: "https://allyonoarcade.com/about" },
  openGraph: {
    title: "About AllYonoArcade.com",
    description: "Who runs AllYonoArcade.com, our editorial approach, and what we do and don't do.",
    url: "https://allyonoarcade.com/about",
  },
  twitter: {
    title: "About AllYonoArcade.com",
    description: "Who runs AllYonoArcade.com, our editorial approach, and what we do and don't do.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About AllYonoArcade.com"
        answer="AllYonoArcade.com is an independent information guide covering the Yono Arcade app — downloads, features, and safety questions. We are not affiliated with, endorsed by, or an official distributor for the app."
      />

      <RelatedLinks />

      <ContentSection heading="What we do">
        <BulletList
          items={[
            "Explain the different Yono Arcade build names circulating in search (Game APK, Pure APK, Mall) so you know what you're actually looking at.",
            "Lay out a safety-review framework rather than a one-line verdict.",
            "Keep time-sensitive pages like promo codes checked on a regular cadence, and say so plainly when something is unverified.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="What we don't do">
        <BulletList
          items={[
            "We don't host, mirror, or link directly to APK files.",
            "We don't publish contact numbers, promo codes, or account-recovery steps we can't verify.",
            "We don't give legal or financial advice — real-money gaming rules vary by Indian state and change over time.",
          ]}
        />
      </ContentSection>
    </>
  );
}
