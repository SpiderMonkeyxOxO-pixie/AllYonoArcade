import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import PromoCodeGrid from "../components/sections/PromoCodeGrid";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import PromoCountdown from "../components/sections/PromoCountdown";
import GuideImage from "../components/sections/GuideImage";
import { getPromoCodes } from "../lib/promo-codes";

export const metadata: Metadata = {
  title: "Yono Arcade Promo Codes — Morning, Afternoon & Evening Status",
  description:
    "Yono Arcade promo code status by release period, checked regularly. No codes are shown unless independently verified — see why below.",
  alternates: { canonical: "https://allyonoarcade.com/promo-codes" },
  openGraph: {
    title: "Yono Arcade Promo Codes — Morning, Afternoon & Evening Status",
    description:
      "Yono Arcade promo code status by release period, checked regularly. No codes are shown unless independently verified — see why below.",
    url: "https://allyonoarcade.com/promo-codes",
  },
  twitter: {
    title: "Yono Arcade Promo Codes — Morning, Afternoon & Evening Status",
    description:
      "Yono Arcade promo code status by release period, checked regularly. No codes are shown unless independently verified — see why below.",
  },
};

// promo-code.txt is hand-edited throughout the day — re-render periodically
// instead of freezing this page at build time.
export const revalidate = 300;

export default function PromoCodesPage() {
  const { entries, lastUpdated } = getPromoCodes();
  const activeCount = Array.from(entries.values()).filter(
    (e) => e.morning || e.afternoon || e.evening
  ).length;
  const lastCheckedLabel = lastUpdated
    ? lastUpdated.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "not yet available";

  return (
    <>
      <PageHeader
        eyebrow="Promo Codes"
        title="Yono Arcade Promo Code Status"
        answer="Codes for apps like this typically release up to three times a day — morning, afternoon, and evening. We track all three periods, but only publish a code once we can verify it ourselves, which is why you'll see “Not released yet” below rather than a guessed value."
      />

      <div className="mb-4">
        <PromoCountdown />
      </div>

      <PromoCodeGrid />

      <RelatedLinks exclude="promo-codes" />

      <Callout tone="info" title={`Last checked: ${lastCheckedLabel}`}>
        <p>
          {activeCount > 0
            ? `${activeCount} app${activeCount === 1 ? " has" : "s have"} a verified code live right now — check the relevant card above for the exact period it applies to.`
            : "No active, verified promo codes at this time."}{" "}
          This page is checked regularly; if that hasn't happened recently, treat any code you find
          elsewhere with skepticism.
        </p>
      </Callout>

      <ContentSection heading="How promo codes typically work in apps like this">
        <BulletList
          items={[
            "Codes are usually entered from a dedicated \"redeem\" or \"promo code\" field inside account or wallet settings.",
            "Codes are commonly time-limited or single-use, which is why lists that aren't actively maintained go stale fast.",
            "Legitimate codes come from the app's own official channels — in-app notices, verified social accounts — not from random third-party pages.",
          ]}
        />
        <GuideImage
          src="/images/guides/promo-code-redeem-field.webp"
          alt="How promo codes typically work: entered from a redeem field, time-limited, sourced from official channels"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="Watch for fake “code” scams">
        <p>
          A common scam pattern asks you to enter personal or payment details to "unlock" a
          promo code. A real in-app promo code never requires that — it's entered directly in the
          app and validated there.
        </p>
      </Callout>

      <FAQSection
        heading="Promo code questions"
        items={[
          {
            question: "Why does every card say “Not released yet”?",
            answer:
              "Because we haven't independently verified an active code for any of these apps yet. We'd rather show that honestly than publish expired or copied codes, which is unfortunately common on pages targeting this search term.",
          },
          {
            question: "What do the Morning / Afternoon / Evening tabs mean?",
            answer:
              "Apps in this category often rotate codes up to three times a day. We track all three release windows separately so a code we publish is tagged to the period it's actually valid for, instead of one stale value shown all day.",
          },
          {
            question: "Where do official Yono Arcade promo codes come from?",
            answer:
              "Treat the app's own official channels as the source of truth. Anything from an unrelated third-party page — including this one, if we haven't verified it — should be checked in-app before you rely on it.",
          },
          {
            question: "Do the other app cards mean they're related to Yono Arcade?",
            answer:
              "No. They're separately branded apps shown here for reference only — see our Alternatives guide for what we do and don't know about how they relate to Yono Arcade.",
          },
        ]}
      />
    </>
  );
}
