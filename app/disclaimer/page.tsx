import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import RelatedLinks from "../components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for AllYonoArcade.com — independence, accuracy, and 18+ notice.",
  alternates: { canonical: "https://allyonoarcade.com/disclaimer" },
  openGraph: {
    title: "Disclaimer | AllYonoArcade.com",
    description: "Legal disclaimer for AllYonoArcade.com — independence, accuracy, and 18+ notice.",
    url: "https://allyonoarcade.com/disclaimer",
  },
  twitter: {
    title: "Disclaimer | AllYonoArcade.com",
    description: "Legal disclaimer for AllYonoArcade.com — independence, accuracy, and 18+ notice.",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disclaimer"
        title="Disclaimer"
        answer="AllYonoArcade.com is an independent, unofficial guide. Read this before treating anything on this site as verified fact or advice."
      />

      <RelatedLinks />

      <ContentSection heading="No affiliation">
        <p>
          AllYonoArcade.com is not affiliated with, endorsed by, or an official partner of Yono
          Arcade or its developer. All product names, logos, and brands referenced are the
          property of their respective owners and are used for identification purposes only.
        </p>
      </ContentSection>

      <ContentSection heading="Accuracy">
        <p>
          We make a good-faith effort to keep information current and clearly label what we
          haven't verified. App details, versions, and policies can change without notice —
          always confirm anything important directly with the app or its official channels
          before acting on it.
        </p>
      </ContentSection>

      <ContentSection heading="No financial or legal advice">
        <BulletList
          items={[
            "Nothing on this site is financial, legal, or investment advice.",
            "Real-money gaming legality in India is determined at the state level and changes over time — confirm current rules for your jurisdiction independently.",
            "We are not responsible for financial losses, account issues, or disputes arising from your use of any third-party app.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="18+ and responsible play">
        <p>
          Content on this site referencing real-money or chance-based games is intended for
          adults (18+) only. If gaming stops being enjoyable or starts affecting your finances or
          wellbeing, please seek independent support resources in your region.
        </p>
      </ContentSection>
    </>
  );
}
