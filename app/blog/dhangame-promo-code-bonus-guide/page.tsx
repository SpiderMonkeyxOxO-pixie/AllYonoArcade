import type { Metadata } from "next";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import ComingSoonCard from "../../components/sections/ComingSoonCard";
import { getPlatform } from "../../lib/platforms";

const TITLE = "DhanGame Promo Code, Bonus & Withdrawal Guide";
const DESCRIPTION =
  "DhanGame's pre-launch welcome bonus, minimum withdrawal, and promo code details ahead of its July 23, 2026 launch — updated as we get closer to release.";

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
        answer="DhanGame is joining the catalogue on 23 July 2026, between 8:00–9:00 AM IST. Here's what's been announced so far for its welcome bonus, minimum withdrawal, and promo codes — and how we'll keep this page updated as launch gets closer."
      />

      <RelatedLinks />

      <GuideImage
        src="/images/guides/dhangame-promo-featured.webp"
        alt="DhanGame promo code, bonus and withdrawal guide featured graphic"
        className="mx-auto max-w-[760px] px-4 sm:px-6 mt-2"
      />

      {dhanGame?.releaseDate && (
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-4">
          <ComingSoonCard
            name="DhanGame"
            image={dhanGame.image}
            releaseDate={dhanGame.releaseDate}
            description={dhanGame.description}
          />
        </div>
      )}

      <ContentSection heading="What is DhanGame?">
        <p>
          DhanGame is the newest addition to this catalogue, set to launch on 23 July 2026. The
          name pairs "Dhan" — Hindi for wealth — with the crown-and-slot-reel branding you can see
          in the icon above, putting it in the same coin-op / real-money games category as most of
          the other apps tracked on this site. It isn't live yet, so there's nothing to install or
          test right now — this page exists to collect what's been announced ahead of launch in
          one place, rather than leaving you to piece it together from scattered promotional
          posts.
        </p>
        <p>
          Unlike the 55+ similarly branded apps elsewhere in our{" "}
          <a href="/all-games">All Games directory</a> — most of which we discovered purely
          through search patterns and icon branding, with no direct line to the developer —
          DhanGame's launch is being run through the official{" "}
          <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">
            @OfficialAllYonoArcade
          </a>{" "}
          Telegram channel, which is why we're able to publish specific pre-launch figures here
          instead of the usual "unverified" framing you'll see on other listings.
        </p>
      </ContentSection>

      <ContentSection heading="DhanGame's welcome bonus">
        <p>
          Ahead of launch, DhanGame's welcome bonus is set at approximately{" "}
          <strong>₹50–₹500</strong>. That range is standard for this category of app — new
          accounts are typically credited a starting bonus automatically or after a first action
          like a deposit, rather than a single fixed figure for everyone. The exact amount within
          that range usually depends on the specific promotion running at the time you sign up.
        </p>
        <p>
          We'll confirm the exact claim process — whether it's automatic on signup, tied to a
          promo code, or requires a first deposit — once the app is actually live and we can walk
          through it ourselves rather than repeat pre-launch marketing copy as if it's a
          guarantee.
        </p>
      </ContentSection>

      <ContentSection heading="Minimum withdrawal">
        <p>
          DhanGame's minimum withdrawal is set at <strong>₹100</strong>. A minimum withdrawal
          threshold like this is standard across real-money gaming apps — it exists so that
          payment processing fees don't outweigh tiny payouts, not as a sign of anything unusual
          about this specific app.
        </p>
        <p>
          What we can't confirm yet, because the app hasn't launched: exact processing time, which
          payment methods are supported, and whether KYC verification is required before your
          first withdrawal. All of that is standard territory for this app category — see our
          general{" "}
          <a href="/blog/yono-arcade-withdrawal-deposit-guide">withdrawal &amp; deposit guide</a>{" "}
          for the checklist worth running through on any app like this, DhanGame included, once
          you actually have an account.
        </p>
      </ContentSection>

      <ContentSection heading="Promo codes, vouchers & special bonuses">
        <p>
          Once DhanGame is live, we'll track its promo codes the same way we already do for every
          other app in this catalogue — on our{" "}
          <a href="/promo-codes">Promo Codes page</a>, broken out by morning, afternoon, and
          evening release windows, with a code only published once we can verify it ourselves.
          Nothing pre-launch here should be treated as an active code.
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

      <Callout tone="info" title="Get notified the moment it launches">
        <p>
          The fastest way to catch the actual launch — and any day-one promo codes — is the
          official Telegram channel,{" "}
          <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">
            @OfficialAllYonoArcade
          </a>
          . We'll also update this page and the{" "}
          <a href="/all-games/dhangame">DhanGame catalogue page</a> as soon as it's live.
        </p>
      </Callout>

      <ContentSection heading="How to get ready before launch">
        <BulletList
          items={[
            <>
              Join <a href="https://t.me/OfficialAllYonoArcade" target="_blank" rel="nofollow noopener noreferrer">@OfficialAllYonoArcade</a> on Telegram — this is where the actual launch, and any day-one codes, get announced first.
            </>,
            "Bookmark this page and the DhanGame catalogue page — both get updated as soon as the app is live and we can verify details directly.",
            "Decide your own spending limit ahead of time, independent of whatever welcome bonus is being advertised at launch.",
            "If you're new to this category of app generally, read our Safety Review first — the same checklist applies here as everywhere else in this catalogue.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Before you play">
        <p>
          Everything above reflects what's been announced ahead of DhanGame's launch — treat
          figures as the current plan, not something locked in until the app is actually live and
          we can verify it directly, the same standard we hold every other listing on this site
          to. A few things worth checking regardless of what's promised pre-launch:
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
            question: "When does DhanGame launch?",
            answer:
              "Expected between 8:00–9:00 AM IST on 23 July 2026. That's the current schedule, not a guarantee — join the Telegram channel above for the actual launch confirmation.",
          },
          {
            question: "How much is the DhanGame welcome bonus?",
            answer:
              "Approximately ₹50–500, based on what's been announced ahead of launch. The exact amount depends on the live promotion running when you sign up — we'll confirm the precise claim process once the app is live.",
          },
          {
            question: "What's the minimum withdrawal on DhanGame?",
            answer:
              "₹100, per pre-launch details. Processing time and supported payment methods aren't confirmed yet — we'll update this once we can verify them directly.",
          },
          {
            question: "Is there a DhanGame promo code available right now?",
            answer:
              "Not yet — the app hasn't launched. Once it's live, we'll track real codes on our Promo Codes page the same way we do for every other app here, only publishing a code once we've verified it ourselves.",
          },
        ]}
      />
    </>
  );
}
