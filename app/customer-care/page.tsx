import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Yono Arcade Customer Care & Support",
  description:
    "How to find legitimate support for Yono Arcade, and why we don't publish an unverified phone number.",
  alternates: { canonical: "https://allyonoarcade.com/customer-care" },
  openGraph: {
    title: "Yono Arcade Customer Care & Support",
    description:
      "How to find legitimate support for Yono Arcade, and why we don't publish an unverified phone number.",
    url: "https://allyonoarcade.com/customer-care",
  },
  twitter: {
    title: "Yono Arcade Customer Care & Support",
    description:
      "How to find legitimate support for Yono Arcade, and why we don't publish an unverified phone number.",
  },
};

export default function CustomerCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer Care"
        title="Yono Arcade Customer Care"
        answer="We don't publish a phone number or email for Yono Arcade on this page, because we can't verify one belongs to the actual developer — and a wrong number here could send you to a scam line instead of real support."
      />

      <RelatedLinks />

      <Callout tone="warning" title="Why we're not listing a contact number" badge="unverified">
        <p>
          Searches for "customer care number" around apps like this are frequently targeted by
          fake support numbers designed to phish account or payment details. Publishing a number
          we haven't verified as genuinely belonging to the developer would put readers at risk,
          so we're not doing it.
        </p>
      </Callout>

      <ContentSection heading="Where to look for real support">
        <BulletList
          items={[
            "Inside the app itself — most apps in this category have a help, support, or contact section under settings.",
            "The app's official store listing, if one exists, which usually lists a verified developer contact.",
            "Any confirmation email or in-app message you received when you first signed up, which sometimes includes support details.",
          ]}
        />
        <GuideImage
          src="/images/guides/support-menu.webp"
          alt="Where to find the Settings → Help/Support menu inside an app like this"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="If you're dealing with a specific problem">
        <p>
          For login trouble, see our <a href="/login">Login Help</a> guide first — a real support
          contact usually can't do more than point you back to the same recovery flow you can use
          yourself. For a payment or withdrawal dispute, document everything (screenshots,
          transaction IDs, timestamps) before reaching out through the app's official channel.
        </p>
      </ContentSection>

      <FAQSection
        heading="Support questions"
        items={[
          {
            question: "Do you have a Yono Arcade customer care number?",
            answer:
              "No — we deliberately don't publish one we can't verify. Use the in-app support option or the official store listing instead.",
          },
          {
            question: "I found a customer care number online — is it legitimate?",
            answer:
              "Treat any number found outside the app or its official store listing as unverified by default. Scam support lines are a known pattern in this app category.",
          },
        ]}
      />
    </>
  );
}
