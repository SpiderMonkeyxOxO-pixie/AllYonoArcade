import type { Metadata } from "next";
import { DownloadIcon, ExternalLinkIcon } from "../../components/icons/Icons";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import { getPlatform } from "../../lib/platforms";

const TITLE = "DhanGame Promo Code, Bonus & Withdrawal Guide";
const DESCRIPTION =
  "DhanGame's welcome bonus, minimum withdrawal, and promo code details, now that it's live — download the app and see what we've verified so far.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/blog/dhangame-promo-code-bonus-guide" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://allyonoarcade.com/blog/dhangame-promo-code-bonus-guide",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function DhanGamePromoGuidePage() {
  const dhanGame = getPlatform("dhangame");

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="DhanGame Promo Code, Bonus & Withdrawal Guide"
        answer="DhanGame launched on 23 July 2026. Here's what we've verified so far for its welcome bonus, minimum withdrawal, and promo codes, plus the download link."
      />

      <RelatedLinks />

      <GuideImage
        src="/images/guides/dhangame-promo-featured.webp"
        alt="DhanGame promo code, bonus and withdrawal guide featured graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      {dhanGame?.downloadUrl && (
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-4">
          <a
            href={dhanGame.downloadUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            <DownloadIcon size={16} />
            Download DhanGame
            <ExternalLinkIcon size={13} />
          </a>
        </div>
      )}

      <ContentSection heading="What is DhanGame?">
        <p>
          DhanGame is the newest addition to this catalogue, live as of 23 July 2026. The name
          pairs "Dhan" — Hindi for wealth — with the crown-and-slot-reel branding you can see in
          the icon above, putting it in the same coin-op / real-money games category as most of
          the other apps tracked on this site.
        </p>
        <p>
          Unlike the 55+ similarly branded apps elsewhere in our{" "}
          <a href="/all-games">All Games directory</a> — most of which we discovered purely
          through search patterns and icon branding, with no direct line to the developer —
          DhanGame's launch was run through the official{" "}
          <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">
            @OfficialAllYonoArcade
          </a>{" "}
          Telegram channel, which is why we're able to publish specific figures here instead of
          the usual "unverified" framing you'll see on other listings.
        </p>
      </ContentSection>

      <ContentSection heading="DhanGame's welcome bonus">
        <p>
          DhanGame's welcome bonus is approximately <strong>₹50–₹500</strong>. That range is
          standard for this category of app — new accounts are typically credited a starting
          bonus automatically or after a first action like a deposit, rather than a single fixed
          figure for everyone. The exact amount within that range depends on the specific
          promotion running at the time you sign up.
        </p>
        <p>
          We haven't independently walked through the exact claim process ourselves yet — whether
          it's automatic on signup, tied to a promo code, or requires a first deposit. We'll
          update this section once we've confirmed it directly rather than repeat marketing copy
          as if it's guaranteed.
        </p>
      </ContentSection>

      <ContentSection heading="Minimum withdrawal">
        <p>
          DhanGame's minimum withdrawal is <strong>₹100</strong>. A minimum withdrawal threshold
          like this is standard across real-money gaming apps — it exists so that payment
          processing fees don't outweigh tiny payouts, not as a sign of anything unusual about
          this specific app.
        </p>
        <p>
          What we haven't confirmed yet: exact processing time, which payment methods are
          supported, and whether KYC verification is required before your first withdrawal. All
          of that is standard territory for this app category — see our general{" "}
          <a href="/blog/yono-arcade-withdrawal-deposit-guide">withdrawal &amp; deposit guide</a>{" "}
          for the checklist worth running through on any app like this, DhanGame included.
        </p>
      </ContentSection>

      <ContentSection heading="Promo codes, vouchers & special bonuses">
        <p>
          We track DhanGame's promo codes the same way we already do for every other app in this
          catalogue — on our <a href="/promo-codes">Promo Codes page</a>, broken out by morning,
          afternoon, and evening release windows, with a code only published once we can verify it
          ourselves.
        </p>
        <p>
          For context on how these mechanics generally work across apps in this category: a
          welcome bonus is typically a one-time credit for new accounts, a voucher is usually a
          redeemable code entered from a wallet or rewards screen, and a "special bonus" is
          catch-all language for time-limited promotions — a launch-week boost, a festival tie-in,
          or a referral reward. None of these are unique to DhanGame; the terminology is standard
          across the whole coin-op and rummy-style app category, which is also why we don't take
          the specific wording of a promotion as proof of anything about the app's underlying
          fairness or trustworthiness.
        </p>
        <BulletList
          items={[
            "Welcome bonus — credited around signup, roughly ₹50–500 depending on the live promotion.",
            "Vouchers — periodic redeemable codes, expected to follow the same time-windowed release pattern as other apps in this family.",
            "Special bonus events — tied to launch week and ongoing promotions; we'll list specifics only once confirmed.",
          ]}
        />
      </ContentSection>

      <Callout tone="info" title="Stay updated on codes and changes">
        <p>
          The fastest way to catch new promo codes or any changes to the figures above is the
          official Telegram channel,{" "}
          <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">
            @OfficialAllYonoArcade
          </a>
          . We also keep this page and the{" "}
          <a href="/all-games/dhangame">DhanGame catalogue page</a> current as we verify more.
        </p>
      </Callout>

      <ContentSection heading="Getting started">
        <BulletList
          items={[
            "Download DhanGame using the button above, then check the publisher name and requested permissions before installing anything, same as any other app in this family.",
            <>
              Join <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">@OfficialAllYonoArcade</a> on Telegram for new promo codes as they're released.
            </>,
            "Decide your own spending limit before you start, independent of whatever welcome bonus is being advertised.",
            "If you're new to this category of app generally, read our Safety Review first — the same checklist applies here as everywhere else in this catalogue.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Before you play">
        <p>
          Everything above reflects what we've verified so far — treat any figure as subject to
          change until we can re-confirm it, the same standard we hold every other listing on this
          site to. A few things worth checking regardless:
        </p>
        <BulletList
          items={[
            "Real-money gaming legality in India is set at the state level and changes over time — confirm your own state's current rules before depositing anything.",
            "A welcome bonus or promo code should never require an upfront payment to \"unlock\" — that pattern is a scam red flag regardless of which app it's attached to.",
            "Check the permissions requested on install and the publisher name on the store listing before installing anything, same as any other app in this family.",
          ]}
        />
      </ContentSection>

      <FAQSection
        heading="DhanGame questions"
        items={[
          {
            question: "Is DhanGame available now?",
            answer:
              "Yes — it launched on 23 July 2026. Use the download button above to get it.",
          },
          {
            question: "How much is the DhanGame welcome bonus?",
            answer:
              "Approximately ₹50–500. The exact amount depends on the live promotion running when you sign up — we haven't independently confirmed the precise claim process yet and will update this once we have.",
          },
          {
            question: "What's the minimum withdrawal on DhanGame?",
            answer:
              "₹100. Processing time and supported payment methods aren't confirmed yet — we'll update this once we can verify them directly.",
          },
          {
            question: "Is there a DhanGame promo code available right now?",
            answer:
              "Check our Promo Codes page — we track DhanGame there the same way we do for every other app here, only publishing a code once we've verified it ourselves.",
          },
        ]}
      />
    </>
  );
}
