// Registry of similarly-branded game platforms from the same visual
// "network" as Yono Arcade. Names come directly from the source asset
// filenames (or the logo artwork itself for two mislabeled duplicates) —
// nothing here is inferred or invented. Category is a mechanical keyword
// match on the name, used only for internal grouping (never shown as
// repeated prose). Each `description` is hand-written and unique per
// platform — describing what the name/icon itself suggests, hedged as
// unverified, never a fill-in-the-blank sentence.
//
// downloadUrl points to each platform's own site/agent link, provided
// directly by the site owner. These are external, third-party
// destinations we have not independently verified — every card using
// one is marked as an external link (new tab, rel=nofollow noopener
// noreferrer) rather than presented as something this site vouches for.
// Entries with no downloadUrl fall back to the internal guide page.
//
// These are NOT confirmed to be built by the same developer as Yono
// Arcade. Every inner page says so explicitly.

export type PlatformCategory =
  | "Rummy"
  | "Slots"
  | "Spin"
  | "Bingo"
  | "Betting"
  | "Arcade"
  | "Jackpot"
  | "Games";

/** One accent color per category so the grid reads at a glance, not just via the filter pill text. */
export const CATEGORY_COLORS: Record<PlatformCategory, string> = {
  Rummy: "var(--color-cyan-400)",
  Slots: "var(--color-coin-400)",
  Spin: "var(--color-magenta-400)",
  Bingo: "var(--color-violet-400)",
  Betting: "var(--color-danger-400)",
  Arcade: "var(--color-mint-400)",
  Jackpot: "var(--color-coin-500)",
  Games: "var(--color-ink-200)",
};

export type Platform = {
  slug: string;
  name: string;
  image: string;
  category: PlatformCategory;
  /** Unique, hand-written short description — never templated. */
  description: string;
  /** External download/agent link, if provided. Unverified third party. */
  downloadUrl?: string;
  /** Not yet released — hides the Download CTA in favor of a countdown, and
   *  excludes the entry from the promo codes grid until it actually exists. */
  comingSoon?: boolean;
  /** ISO 8601 timestamp (with offset) for comingSoon entries only. */
  releaseDate?: string;
  /** Optional link to a full blog write-up (bonus/promo code details, etc). */
  blogHref?: string;
};

function categorize(name: string): PlatformCategory {
  const n = name.toLowerCase();
  if (n.includes("rummy")) return "Rummy";
  if (n.includes("bingo")) return "Bingo";
  if (n.includes("jackpot")) return "Jackpot";
  if (n.includes("arcade")) return "Arcade";
  if (n.includes("bet")) return "Betting";
  if (n.includes("slot")) return "Slots";
  if (n.includes("spin")) return "Spin";
  return "Games";
}

/** SEO title formula requested for every inner page: "{Name} Download APK, Promo Code & Guide" */
export function targetKeyword(name: string): string {
  return `${name} Download APK, Promo Code & Guide`;
}

// PHASE 3 WAVE 1 (see phase3/ALLYONOARCADE_COM_WAVE1_IMPLEMENTATION.md): 51 of the
// original 57 entries were removed here — every unassigned-brand entry that carried
// zero recorded GSC clicks/impressions across the full three-month Phase 2 window,
// per phase2/PORTFOLIO_WIDE_FINAL_DISPOSITION.md §16 Wave 1 and the confirmed-zero-signal
// list in phase2/ALLYONOARCADE_COM_PHASE2_DISPOSITION.md §7 row 8. The 6 remaining
// entries (101z, Club INR, DhanGame, Rummy 91, Win Rummy, Yono 777) were each confirmed
// to carry real GSC signal, or are themselves held pending cross-domain coordination
// (DhanGame, Win Rummy) — see phase3/HIGH_EQUITY_MIGRATION_HOLD.md — and are therefore
// explicitly NOT removed by this pass.
const RAW_PLATFORMS: {
  name: string;
  image: string;
  description: string;
  downloadUrl?: string;
  comingSoon?: boolean;
  releaseDate?: string;
  blogHref?: string;
}[] = [
  {
    name: "101z",
    image: "/images/platforms/101z.webp",
    description:
      "101z pairs a short, code-like name with the same green-diamond icon style as its network — this page covers the 101z APK download and what we've verified about its promo codes.",
    downloadUrl: "https://101z19.com/?code=398FMU1E4UC&t=1781948650",
  },
  {
    name: "Club INR",
    image: "/images/platforms/club-inr.webp",
    description:
      "Club INR names its currency directly, pointing at a real-money games app rather than one specific title — see our Club INR download and promo code notes.",
    downloadUrl: "https://clubinr2.top/?code=WZJ9KYQMY2X&t=1781949863",
  },
  {
    name: "DhanGame",
    image: "/images/platforms/dhangame.webp",
    description:
      "DhanGame pairs a crown-and-slot-reel icon with “Dhan” — Hindi for wealth — for its branding; here's the DhanGame APK download and what we've verified about its welcome bonus and promo codes.",
    downloadUrl: "https://dhanwinplay.com/?code=L2VRQRRF2UK&t=1784778249",
    blogHref: "/blog/dhangame-promo-code-bonus-guide",
  },
  {
    name: "Rummy 91",
    image: "/images/platforms/rummy-91.webp",
    description:
      "Rummy 91 pairs the rummy format with India's international dialing code — this guide covers its download and promo code activity.",
    downloadUrl: "https://www.rummy91q.bet/?code=UXT67QH88MK&t=1781963162",
  },
  {
    name: "Win Rummy",
    image: "/images/platforms/win-rummy.webp",
    description:
      "Win Rummy pairs an outcome-focused name with a crown-and-card-suit icon similar to others in this family — here's the Win Rummy APK download and what we've verified about its promo codes.",
    downloadUrl: "https://www.winrummy10.com/?code=8JT9D83WCC3&t=1785293043",
  },
  {
    name: "Yono 777",
    image: "/images/platforms/yono-777.webp",
    description:
      "Yono 777 combines the Yono name with the classic slots jackpot number — this guide covers its APK download and promo code status.",
    downloadUrl: "https://yononewgames.vip/?code=SCHFQRY8DAS",
  },
  {
    name: "Gold Rummy",
    image: "/images/platforms/gold-rummy.png",
    description:
      "Gold Rummy launched August 19, 2026 — here's the Gold Rummy APK download. No welcome bonus or promo code has been announced yet, and this page will update once that's confirmed.",
    downloadUrl: "https://goldrummy20.com/?code=JLX7LRP2YTG&t=1787111858",
    blogHref: "/blog/what-is-gold-rummy",
  },
];

/**
 * Manually curated front-of-grid order (site owner's call, not alphabetical).
 * To bump a new platform to #1, add its exact `name` to the front of this
 * list — everything else shifts down automatically, no array surgery needed.
 * Entries not listed here keep their existing relative order, after these.
 *
 * PHASE 3 WAVE 1: "Max Rummy", "Yono Rummy", and "Yono Games" were removed from
 * this list because those platforms were removed from RAW_PLATFORMS above.
 */
const FEATURED_ORDER = ["Gold Rummy", "Win Rummy", "Yono 777", "DhanGame"];

export const PLATFORMS: Platform[] = RAW_PLATFORMS.map((p) => ({
  slug: p.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, ""),
  name: p.name,
  image: p.image,
  category: categorize(p.name),
  description: p.description,
  downloadUrl: p.downloadUrl,
  comingSoon: p.comingSoon,
  releaseDate: p.releaseDate,
  blogHref: p.blogHref,
})).sort((a, b) => {
  const ai = FEATURED_ORDER.indexOf(a.name);
  const bi = FEATURED_ORDER.indexOf(b.name);
  if (ai === -1 && bi === -1) return 0;
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});

export function getPlatform(slug: string): Platform | undefined {
  return PLATFORMS.find((p) => p.slug === slug);
}

/** Whichever platform currently sits at #1 in FEATURED_ORDER — highlighted
 *  in the grid and on the promo codes page. Follows FEATURED_ORDER
 *  automatically, so it never needs updating by hand. */
export const TOP_FEATURED_SLUG = PLATFORMS[0]?.slug;
