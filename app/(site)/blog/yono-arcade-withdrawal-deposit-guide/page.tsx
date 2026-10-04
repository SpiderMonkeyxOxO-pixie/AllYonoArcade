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
import ScheduledLink from "../../../components/sections/ScheduledLink";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const PATH = "/blog/yono-arcade-withdrawal-deposit-guide";
const IMAGE = "/images/guides/yono-arcade-withdrawal-kyc-tds.webp";
const H1 = "Yono Arcade Withdrawal Problems, KYC and TDS";
const TITLE = "Yono Arcade Withdrawal Problem, KYC & TDS Explained (2026)";
const DESCRIPTION =
  "Yono Arcade withdrawal pending or failed? What its own terms say about KYC, PAN and TDS, why payments can fail since the 2026 law, and how to avoid withdrawal scams.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `https://allyonoarcade.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://allyonoarcade.com${PATH}` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function WithdrawalDepositGuidePage() {
  return (
    <>
      <ArticleSchema headline={H1} description={DESCRIPTION} path={PATH} image={IMAGE} published="2026-07-15" modified="2026-09-28" crumb="Yono Arcade Withdrawal, KYC & TDS" />

      <PageHeader
        eyebrow="Blog"
        title={H1}
        answer="YonoArcade.com says withdrawals go to your bank account or UPI and are “instant, 24x7”. Its own terms also require a valid PAN, deduct 30% TDS on large wins, and let it forfeit winnings if details are missing. Since 1 May 2026, banks and payment services are barred from processing money-game payments, so withdrawals can also fail for reasons neither you nor the app can fix."
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 -mt-2 mb-2 text-[12.5px] text-[var(--color-ink-400)]">
        Updated: September 28, 2026 · Operator details from YonoArcade.com, checked September 28, 2026
      </div>

      <RelatedLinks />

      <GuideImage src={IMAGE} alt="Yono Arcade withdrawal, KYC and TDS guide" className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2" />

      <ContentSection heading="What YonoArcade.com says (checked 28 September 2026)">
        <ComparisonTable
          headers={["Topic", "What the operator states", "What it means"]}
          rows={[
            ["Withdrawal methods", "Bank transfer and UPI", "No wallets or cards mentioned"],
            ["Speed", "\"Instant Withdrawals of Winnings in 24X7\"", "A marketing claim; not verifiable from outside"],
            ["Deposit bonus", "\"5% Bonus on every Add Cash up to ₹100,000\"", "Bonus money usually can't be withdrawn directly"],
            ["PAN", "A valid PAN is required for wins that attract TDS", "No PAN, no payout on those wins"],
            ["TDS", "30% TDS on winnings over ₹10,000 in a single game", "See the tax note below"],
            ["Forfeiture", "Can forfeit winnings if required details aren't provided", "Read before depositing anything"],
          ]}
        />
        <p>
          <strong>Tax note:</strong> since 1 April 2023, Income Tax Act section 194BA requires 30% TDS
          on net winnings from online games, with no ₹10,000 threshold. Yono Arcade&apos;s terms still
          describe the older threshold rule.
        </p>
      </ContentSection>

      <ContentSection heading="Yono games KYC kaise kare?">
        <p>Apps in this network usually ask for:</p>
        <BulletList
          items={[
            "PAN (name and number, matching your bank account).",
            "A bank account or UPI ID in your own name.",
            "Sometimes Aadhaar or a selfie.",
          ]}
        />
        <p>
          Do KYC only inside the app, never on a website or through a WhatsApp &quot;agent&quot;. Real
          KYC never needs your OTP, UPI PIN or card PIN.
        </p>
        <p>
          KYC sirf app ke andar karein. PAN aur bank account aapke apne naam par hone chahiye. Koi bhi
          &quot;agent&quot; jo OTP ya UPI PIN maange, woh fraud hai.
        </p>
      </ContentSection>

      <ContentSection heading="Why a Yono Arcade withdrawal is pending or failed">
        <ComparisonTable
          headers={["What you see", "Likely cause", "What to do"]}
          rows={[
            ["\"Pending\" for hours or days", "Manual review, or the payment provider declined it", "Wait for the stated time, then email support@yonoarcade.com with the transaction ID"],
            ["\"Failed\", money back in the app", "Bank or UPI rejected the transfer", "Check name, account and IFSC match your KYC"],
            ["\"KYC required\"", "PAN or bank not verified", "Complete KYC inside the app"],
            ["Withdrawal amount blocked", "Bonus or unplayed deposit money", "Only \"winnings\" balances are usually withdrawable"],
            ["Account frozen", "Operator review", "Email support in writing; keep copies"],
            ["Nothing works on any network", "Payment channel or service blocked", "See the legal note below"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Withdrawal scams to expect">
        <BulletList
          items={[
            "A \"support agent\" asks for a fee, \"tax\" or \"GST\" to release your withdrawal.",
            "A caller asks for your OTP or UPI PIN to \"verify\" you.",
            "Someone asks you to install AnyDesk or another screen-sharing app.",
            "A Telegram group promises to \"unlock\" frozen balances for a fee.",
          ]}
        />
        <p>
          The operator publishes no phone number, so every caller is unofficial. See{" "}
          <Link href="/customer-care">Yono Arcade customer care</Link> for the official contacts.
        </p>
      </ContentSection>

      <Callout tone="warning" title="Never pay to receive your own money">
        <p>
          If you&apos;ve lost money, call <strong>1930</strong>, report at cybercrime.gov.in, and
          inform your bank immediately.
        </p>
      </Callout>

      <ContentSection heading="The legal position">
        <p>
          Section 7 of the Online Gaming Act, 2025 bars banks and payment services from processing
          payments for online money games, in force since 1 May 2026. Players aren&apos;t penalised,
          but deposits can be declined and withdrawals delayed or reversed, and there&apos;s no
          regulator to claim from. See{" "}
          <ScheduledLink href="/blog/is-yono-arcade-banned-in-india" date="2026-09-29">Is Yono Arcade banned in India?</ScheduledLink>
        </p>
      </ContentSection>

      <FAQSection
        heading="Withdrawal and KYC questions"
        items={[
          {
            question: "Why is my Yono Arcade withdrawal pending?",
            answer:
              "Usually a review, an unverified KYC, or a declined bank or UPI transfer. Email support@yonoarcade.com with the transaction ID and keep a record.",
          },
          {
            question: "How do I do Yono games KYC?",
            answer:
              "Inside the app, with your PAN and a bank account or UPI ID in your own name. Never through an agent or a website.",
          },
          {
            question: "How much TDS does Yono Arcade deduct?",
            answer:
              "Its terms say 30% on winnings over ₹10,000 in a game. Under section 194BA, TDS of 30% applies to net winnings with no threshold.",
          },
          {
            question: "Is a withdrawal unlock fee real?",
            answer: "No. Any request to pay before you receive money is a scam.",
          },
          {
            question: "Can Yono Arcade withdrawals fail because of the new law?",
            answer:
              "Yes. Banks and payment services are barred from processing money-game payments since 1 May 2026.",
          },
        ]}
      />
    </>
  );
}
