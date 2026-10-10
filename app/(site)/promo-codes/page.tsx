import type { Metadata } from "next";
import PageHeader from "../../components/sections/PageHeader";
import PromoCodeGrid from "../../components/sections/PromoCodeGrid";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import PromoCountdown from "../../components/sections/PromoCountdown";
import GuideImage from "../../components/sections/GuideImage";
import { getPromoCodes } from "../../lib/promo-codes";
import ComparisonTable from "../../components/sections/ComparisonTable";
import { LAW_SENTENCE } from "../../lib/legal";
import ScheduledLink from "../../components/sections/ScheduledLink";

const TITLE = "Yono Arcade Promo Code Today: Morning, Afternoon & Evening";
const DESCRIPTION =
  "Yono Arcade promo code status for today, by release period. We only list codes we have checked ourselves, and mark each as verified, expired or unsupported.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/promo-codes" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/promo-codes" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

// promo-code.txt is hand-edited throughout the day. A plain fs.readFileSync
// isn't a signal Next.js's static analysis picks up (unlike fetch/cookies/
// headers), so without this the page gets fully static-generated once at
// build time and only refreshes on a 5-minute ISR window — stale for most
// of the day. force-dynamic renders fresh on every single request instead.
export const dynamic = "force-dynamic";

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
        answer={`Codes for apps like this typically release up to three times a day: morning, afternoon and evening. We track all three periods and only publish a code once we have checked it ourselves${activeCount > 0 ? ` (${activeCount} app${activeCount === 1 ? "" : "s"} with a checked code right now)` : ""}. A period with no checked code shows “Not released yet” instead of a guessed value.`}
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
        <p className="mt-4">
          There is no single code for every Yono app; see{" "}
          <ScheduledLink href="/blog/promo-codes-for-other-yono-apps-which-we-track" date="2026-10-12">
            which apps we track codes for
          </ScheduledLink>{" "}
          and{" "}
          <ScheduledLink href="/blog/rummy-91-promo-code-what-is-real" date="2026-10-13">
            what is real for Rummy 91
          </ScheduledLink>
          .
        </p>
        <GuideImage
          src="/images/guides/promo-code-redeem-field.webp"
          alt="How promo codes typically work: entered from a redeem field, time-limited, sourced from official channels"
          className="mt-4"
        />
      </ContentSection>

      <ContentSection heading="How we label a code: verified, expired or unsupported">
        <ComparisonTable
          headers={["Label", "What it means", "What you should do"]}
          rows={[
            ["Verified", "We checked it for the stated release period", "It may still run out early; codes are often limited"],
            ["Expired", "The period has passed or the code was rejected", "Don't use it; lists that keep old codes go stale fast"],
            ["Unsupported", "Seen on another site or channel, but not checked by us", "Treat it as unconfirmed; we don't publish these"],
          ]}
        />
        <p>
          A code only ever changes an in-app reward. It can&apos;t unlock withdrawals, raise limits or
          guarantee winnings, whatever a page claims.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Watch for fake “code” scams">
        <p>
          A common scam pattern asks you to enter personal or payment details to "unlock" a
          promo code. A real in-app promo code never requires that — it's entered directly in the
          app and validated there.
        </p>
      </Callout>

      <Callout tone="info" title="18+ only. Online money games are prohibited in India">
        <p>
          {LAW_SENTENCE} This page reports code status for reference; it is not an invitation to
          deposit or play for money. See our <a href="/disclaimer">disclaimer</a>.
        </p>
      </Callout>

      <FAQSection
        heading="Promo code questions"
        items={[
          {
            question: "Why do some cards say “Not released yet”?",
            answer:
              "Because we haven't checked an active code for that app and period yet. We'd rather show that honestly than publish expired or copied codes, which is common on pages targeting this search term.",
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
          {
            question: "What is the Yono Arcade promo code today?",
            answer:
              "Check the Yono Arcade card at the top of this page. It shows today's morning, afternoon and evening status; a period shows \"Not released yet\" until we have checked a code for it.",
          },
          {
            question: "Is there one promo code for all Yono games?",
            answer:
              "No. Each Yono-family app (Yono Arcade, 101Z, Rummy 91, Yono 777 and others) releases its own codes, and a code works only in the app it was issued for. That's why this page has a separate card per app.",
          },
          {
            question: "Yono game ka promo code kahan milega?",
            answer:
              "Har app ka apna promo code hota hai, aur din mein teen baar (morning, afternoon, evening) release ho sakta hai. Is page par har app ka card aaj ka status dikhata hai. Code sirf app ke andar redeem field mein daalein; OTP ya UPI PIN kabhi share na karein.",
          },
          {
            question: "Where do I enter a Yono Arcade game promo code?",
            answer:
              "Inside the app, in the redeem or promo code field (usually under the wallet, rewards or account screen). Never enter a code on a website that asks for your login, OTP or payment details.",
          },
          {
            question: "Why doesn't my Yono Arcade promo code work?",
            answer:
              "Codes are time-limited and often capped, so a code from an earlier period or one already used up will be rejected. Check that you're entering it in the right app and in the current release period.",
          },
        ]}
      />
    </>
  );
}
