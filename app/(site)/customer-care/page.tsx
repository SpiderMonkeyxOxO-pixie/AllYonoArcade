import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import Callout from "../../components/sections/Callout";
import ComparisonTable from "../../components/sections/ComparisonTable";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import { OPERATOR_CHECKED } from "../../lib/legal";

const TITLE = "Yono Arcade Customer Care: Official Contacts vs Fake Numbers";
const DESCRIPTION =
  "The support contacts YonoArcade.com itself publishes (email, live chat, social channels), why it lists no phone number, and how to spot a fake Yono Arcade customer care number.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/customer-care" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/customer-care" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function CustomerCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer Care"
        title="Yono Arcade Customer Care"
        answer={`YonoArcade.com lists two support routes: the email support@yonoarcade.com and a 24/7 live chat hosted on yonoarcadehelp.com. It publishes no customer care phone number, so any "Yono Arcade helpline number" you find elsewhere did not come from the operator. Checked ${OPERATOR_CHECKED}.`}
      />

      <RelatedLinks />

      <ContentSection heading={`Contacts published by YonoArcade.com (checked ${OPERATOR_CHECKED})`}>
        <ComparisonTable
          headers={["Contact", "Where it is listed", "Use it for"]}
          rows={[
            ["support@yonoarcade.com", "YonoArcade.com homepage", "Account, deposit and withdrawal issues, in writing"],
            ["Live chat on yonoarcadehelp.com", "\"Customer Service\" links on YonoArcade.com", "Quick questions; save a copy of the chat"],
            ["Telegram and WhatsApp channels", "Side menu on YonoArcade.com", "Announcements only; channels are broadcast, not support"],
            ["Facebook page (facebook.com/UonoArcadeCom)", "Side menu on YonoArcade.com", "Announcements; note the page name is spelt \"Uono\""],
            ["Phone number", "None published", "Treat any number as unofficial"],
          ]}
        />
        <p>
          In-app help, if the app shows one, should lead to the same email or chat. For who runs the
          app and how to tell it apart from lookalikes, see{" "}
          <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link>
        </p>
      </ContentSection>

      <Callout tone="warning" title="How to spot a fake Yono Arcade support contact" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>It gives a phone number. The operator publishes none.</li>
          <li>It asks for your OTP, UPI PIN, card number or password. Real support never needs these.</li>
          <li>It asks you to pay a fee, tax or &quot;verification charge&quot; to release a withdrawal.</li>
          <li>It asks you to install a screen-sharing or remote-access app such as AnyDesk.</li>
          <li>It contacts you first on WhatsApp or Telegram from a personal account.</li>
        </ul>
      </Callout>

      <ContentSection heading="Where to look inside the app">
        <p>
          Most apps in this category put help under the profile or settings screen. Use the in-app
          route first, because it ties your message to your account.
        </p>
        <GuideImage
          src="/images/guides/support-menu.webp"
          alt="Where to find the Settings → Help/Support menu inside an app like this"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="If you're dealing with a specific problem">
        <p>
          For login trouble, see our <Link href="/login">Login Help</Link> guide first. For a
          payment or withdrawal dispute, keep screenshots, transaction IDs and timestamps before
          contacting support by email, so you have a written record.
        </p>
        <p>
          If you have been defrauded, report it on the national cyber crime helpline{" "}
          <strong>1930</strong> or at cybercrime.gov.in, and tell your bank straight away.
        </p>
      </ContentSection>

      <FAQSection
        heading="Support questions"
        items={[
          {
            question: "What is the Yono Arcade customer care number?",
            answer:
              "YonoArcade.com publishes no customer care phone number. Its official routes are the email support@yonoarcade.com and a live chat on yonoarcadehelp.com. Treat any phone number as unofficial.",
          },
          {
            question: "What is the Yono Arcade support email?",
            answer: "support@yonoarcade.com, as listed on YonoArcade.com.",
          },
          {
            question: "Is the Yono Arcade Telegram or WhatsApp channel support?",
            answer:
              "No. YonoArcade.com links a Telegram folder and a WhatsApp channel, but channels are for announcements. A personal WhatsApp or Telegram account offering help is not official support.",
          },
          {
            question: "I found a customer care number online — is it legitimate?",
            answer:
              "No number is published by the operator, so treat it as unofficial. Scam support lines are a known pattern in this app category. Never share an OTP or UPI PIN with anyone claiming to be support.",
          },
        ]}
      />
    </>
  );
}
