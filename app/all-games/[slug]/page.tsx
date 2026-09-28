import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import FAQSection from "../../components/sections/FAQSection";
import { DownloadIcon, ExternalLinkIcon } from "../../components/icons/Icons";
import { PLATFORMS, PLAY_CHECKED, getPlatform, targetKeyword } from "../../lib/platforms";
import ComparisonTable from "../../components/sections/ComparisonTable";
import { getPromoCodes, findPromoEntry } from "../../lib/promo-codes";
import { LAW_SENTENCE } from "../../lib/legal";
import RelatedLinks from "../../components/sections/RelatedLinks";
import ComingSoonCard from "../../components/sections/ComingSoonCard";

// Shows today's promo code status from promo-code.txt, which is edited during the day.
export const dynamic = "force-dynamic";

function hostOf(url?: string): string | null {
  try {
    return url ? new URL(url).hostname.replace(/^www\./, "") : null;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return PLATFORMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};
  const url = `https://allyonoarcade.com/all-games/${platform.slug}`;
  return {
    title: targetKeyword(platform.name),
    description: platform.description,
    alternates: { canonical: url },
    openGraph: {
      title: targetKeyword(platform.name),
      description: platform.description,
      url,
    },
    twitter: {
      title: targetKeyword(platform.name),
      description: platform.description,
    },
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const promo = findPromoEntry(getPromoCodes().entries, platform.name);
  const periods: [string, string | null][] = [
    ["Morning", promo?.morning ?? null],
    ["Afternoon", promo?.afternoon ?? null],
    ["Evening", promo?.evening ?? null],
  ];
  const host = hostOf(platform.downloadUrl);

  const others = PLATFORMS.filter((p) => p.category === platform.category && p.slug !== platform.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow="All Games"
        title={platform.name}
        answer={platform.description}
        icon={{ src: platform.image, alt: `${platform.name} app icon` }}
      />

      <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-2">
        {platform.comingSoon && platform.releaseDate ? (
          <ComingSoonCard
            name={platform.name}
            image={platform.image}
            releaseDate={platform.releaseDate}
            description={platform.description}
            blogHref={platform.blogHref}
          />
        ) : platform.downloadUrl ? (
          <a
            href={platform.downloadUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            <DownloadIcon size={16} />
            Download {platform.name}
            <ExternalLinkIcon size={13} />
          </a>
        ) : (
          <p className="text-[13px] text-[var(--color-ink-400)]">
            No verified download source for {platform.name} yet — check back once we've confirmed one.
          </p>
        )}
      </div>

      <RelatedLinks exclude="all-games" />

      {!platform.comingSoon && (
        <>
          <ContentSection heading={`${platform.name} quick facts`}>
            <ComparisonTable
              headers={["Question", "Answer", "Checked"]}
              rows={[
                ["Where is the APK from?", host ? `Its own download site (${host}), not an app store` : "No verified download site yet", "Download link on this page"],
                ["Is it on Google Play?", platform.playCheck ?? "Not checked yet", PLAY_CHECKED],
                ["Promo code today", periods.some(([, c]) => c) ? "A checked code is listed below" : "No checked code yet today", "Updated during the day"],
                ["Is it a real-money app?", "Yono-network apps like this are presented as real-money games; online money games are prohibited in India since 1 May 2026", "Online Gaming Act, 2025"],
              ]}
            />
          </ContentSection>

          <ContentSection heading={`${platform.name} promo code today`}>
            <p>
              Codes for apps like {platform.name} are usually released up to three times a day. This is
              today&apos;s status for each release period; a period shows &quot;Not released yet&quot; until
              we have checked a code for it.
            </p>
            <ComparisonTable
              headers={["Release period", "Code", "Status"]}
              rows={periods.map(([label, code]) => [label, code ?? "—", code ? "Checked" : "Not released yet"])}
            />
            <p>
              Enter a code only inside the {platform.name} app&apos;s own redeem field. A code never
              needs your OTP, UPI PIN or a payment to &quot;unlock&quot; it. All apps in one place:{" "}
              <Link href="/promo-codes">today&apos;s promo code status</Link>. 18+ only. {LAW_SENTENCE}
            </p>
          </ContentSection>

          <Callout
            tone="warning"
            title={`We haven't verified a relationship between ${platform.name} and Yono Arcade`}
            badge="unverified"
          >
            <p>
              We don't know whether {platform.name} shares a developer, publisher, or company with
              Yono Arcade, or whether it's an entirely unrelated app that happens to use a similar
              visual style. Treat them as separate products until you can confirm otherwise on each
              app's own store listing.
            </p>
          </Callout>

          <ContentSection heading={`Is the ${platform.name} APK worth installing?`}>
            <p>
              The description above is our read of the branding and naming alone — it isn't a
              confirmed feature list, and we haven't installed or tested {platform.name} ourselves.
              Treat it as a starting point for your own research, not a verdict.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium"
              style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}>
              Category (inferred): {platform.category}
            </span>
          </ContentSection>

          <ContentSection heading="Before you install it">
            <BulletList
              items={[
                "Check the publisher/developer name on the store listing, not just the icon or app name.",
                "If someone linked you here expecting Yono Arcade specifically, confirm this is actually the app they meant.",
                "The same safety checklist applies regardless of which app in this family you're looking at — see our Safety Review.",
              ]}
            />
            <p>
              <Link href="/is-yono-arcade-safe">Read the general safety checklist</Link> or{" "}
              <Link href="/all-games">see the full list of similarly branded apps</Link>.
            </p>
          </ContentSection>
        </>
      )}

      {others.length > 0 && (
        <ContentSection heading={`Other ${platform.category.toLowerCase()}-style apps in this family`}>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/all-games/${o.slug}`}
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--color-ink-200)] hover:border-[var(--color-cyan-400)]/50 hover:text-[var(--color-cyan-400)] transition-colors"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </ContentSection>
      )}

      <FAQSection
        heading={`${platform.name} questions`}
        items={
          platform.comingSoon
            ? [
                {
                  question: `When does ${platform.name} launch?`,
                  answer: `Expected between 8:00–9:00 AM IST on ${new Date(platform.releaseDate!).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })}. That's our current schedule, not a guarantee — join the Telegram channel above for the actual launch confirmation.`,
                },
                {
                  question: `Is ${platform.name} the same as Yono Arcade?`,
                  answer: `Not as far as we've confirmed. They're separately named and branded, and we have no verified evidence connecting the two developers. Treat them as different apps.`,
                },
                {
                  question: `Will there be a download link or promo code for ${platform.name}?`,
                  answer: `Not yet — there's nothing to download until it actually launches. We'll add a verified download source, category, and any promo codes to this page once it's live and we can review it directly.`,
                },
              ]
            : [
                {
                  question: `Is ${platform.name} the same as Yono Arcade?`,
                  answer: `Not as far as we've confirmed. They're separately named and branded, and we have no verified evidence connecting the two developers. Treat them as different apps.`,
                },
                {
                  question: `Is ${platform.name} safe to install?`,
                  answer: `We haven't reviewed this specific app. Use the same checklist as our Yono Arcade safety review — permissions requested, distribution source, and any real-money claims — before installing anything.`,
                },
                {
                  question: `What is the ${platform.name} promo code today?`,
                  answer: periods.some(([, c]) => c)
                    ? `Today's checked ${platform.name} codes: ${periods.filter(([, c]) => c).map(([l, c]) => `${l} ${c}`).join(", ")}. Codes are time-limited; enter them only in the app's own redeem field.`
                    : `No ${platform.name} code has been checked yet today. Codes are usually released in the morning, afternoon and evening; this page and our promo code page update when one is checked.`,
                },
                {
                  question: `Where do I download the ${platform.name} APK?`,
                  answer: host
                    ? `${platform.name} is distributed as an APK from its own site (${host}), not from an app store. Download sites in this network change often, so check the package name after installing.`
                    : `We haven't verified a download site for ${platform.name} yet.`,
                },
                {
                  question: `Is ${platform.name} on Google Play?`,
                  answer: `${platform.playCheck ?? "Not checked yet."} (Checked ${PLAY_CHECKED}.)`,
                },
              ]
        }
      />
    </>
  );
}
