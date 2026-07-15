import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import RelatedLinks from "../components/sections/RelatedLinks";

// NOTE: standard boilerplate — have this reviewed against your actual
// analytics/ad stack and applicable law (India DPDP Act, etc.) before launch.

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AllYonoArcade.com handles data, cookies, and analytics.",
  alternates: { canonical: "https://allyonoarcade.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | AllYonoArcade.com",
    description: "How AllYonoArcade.com handles data, cookies, and analytics.",
    url: "https://allyonoarcade.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy | AllYonoArcade.com",
    description: "How AllYonoArcade.com handles data, cookies, and analytics.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        answer="This page explains what data AllYonoArcade.com collects, how it's used, and your choices around it."
      />

      <RelatedLinks />

      <ContentSection heading="What we collect">
        <BulletList
          items={[
            "Standard analytics data (pages visited, approximate location, device/browser type) to understand site usage.",
            "Any information you voluntarily submit through a contact form or email.",
            "We do not collect account credentials, payment details, or in-app data from Yono Arcade or any third-party app — we have no access to that system.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Cookies">
        <p>
          We use cookies for basic analytics and site functionality. You can disable cookies in
          your browser settings; doing so may affect some site features but won't block your
          ability to read content.
        </p>
      </ContentSection>

      <ContentSection heading="Third parties">
        <p>
          We may use third-party analytics or advertising services. These providers may collect
          data according to their own privacy policies, which we encourage you to review
          separately.
        </p>
      </ContentSection>

      <ContentSection heading="Your choices">
        <p>
          We don't sell personal data. For questions about data we may hold, reach out via our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </ContentSection>
    </>
  );
}
