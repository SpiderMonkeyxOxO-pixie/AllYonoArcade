import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import Callout from "../components/sections/Callout";
import RelatedLinks from "../components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AllYonoArcade.com.",
  alternates: { canonical: "https://allyonoarcade.com/contact" },
  openGraph: {
    title: "Contact | AllYonoArcade.com",
    description: "Get in touch with AllYonoArcade.com.",
    url: "https://allyonoarcade.com/contact",
  },
  twitter: {
    title: "Contact | AllYonoArcade.com",
    description: "Get in touch with AllYonoArcade.com.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        answer="Have a correction, a verified fact we should add, or a question about this site? Reach out below."
      />

      <RelatedLinks />

      <ContentSection heading="Email">
        <p>
          <a href="mailto:contact@allyonoarcade.com">contact@allyonoarcade.com</a>
        </p>
      </ContentSection>

      <Callout tone="info" title="This isn't Yono Arcade support">
        <p>
          We're an independent information site, not the app's developer. For account, login, or
          payment issues with the app itself, see our{" "}
          <a href="/customer-care">Customer Care guide</a> for where to actually get help.
        </p>
      </Callout>
    </>
  );
}
