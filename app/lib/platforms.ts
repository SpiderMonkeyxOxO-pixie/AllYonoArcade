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
    name: "567 Slots",
    image: "/images/platforms/567-slots.webp",
    description:
      "The \"567\" in 567 Slots reads like a lucky-number branding choice common in slot-style apps — here's our 567 Slots download and promo code guide.",
    downloadUrl: "https://join567slots.cc/?code=9UXNF2XJ68V&t=1781948821",
  },
  {
    name: "777 Game",
    image: "/images/platforms/777game.webp",
    description:
      "777 Game leans on the classic slot-machine jackpot number for its name — this guide tracks the 777 Game APK download and promo code status.",
    downloadUrl: "https://www.777game2.com/?code=H53WZ731GKT&t=1781948890",
  },
  {
    name: "789 Jackpot",
    image: "/images/platforms/789-jackpot.webp",
    description:
      "789 Jackpot's name points squarely at a jackpot/slots format — see what we've verified about the 789 Jackpot APK and any promo codes.",
    downloadUrl: "https://join789jackpots.cc/?code=VJJL7DL96SG&t=1781948943",
  },
  {
    name: "ABC Rummy",
    image: "/images/platforms/abc-rummy.webp",
    description:
      "ABC Rummy's alphabet-style name suggests a beginner-facing rummy app, though we haven't confirmed that — here's the ABC Rummy APK and promo code guide.",
    downloadUrl: "https://www.11abcrummy.com/?code=6X4TN4LWGST&t=1781949033",
  },
  {
    name: "Bet 213",
    image: "/images/platforms/bet-213.webp",
    description:
      "Bet 213 is named plainly as a betting app rather than a specific game format — this page covers its download source and any promo code activity we can verify.",
    downloadUrl: "https://www.bet213app.com/?code=2QTMHNTC4J9&t=1781949147",
  },
  {
    name: "Bingo 101",
    image: "/images/platforms/bingo-101.webp",
    description:
      "Bingo 101 pairs a bingo format with an introductory-sounding \"101\" — here's what we know about the Bingo 101 download and promo code status.",
    downloadUrl: "https://bingo101.info/?code=3WFYXGESSL8&t=1781949273",
  },
  {
    name: "Boss Rummy",
    image: "/images/platforms/boss-rummy.webp",
    description:
      "Boss Rummy's name suggests a competitive or high-stakes rummy format — this guide tracks the Boss Rummy APK download and promo code status.",
    downloadUrl: "https://www.bossrummyv.com/?code=9HF54MYMV8X&t=1781969528",
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
    name: "Game Rummy",
    image: "/images/platforms/game-rummy.webp",
    description:
      "Game Rummy uses about the most generic rummy branding possible — this page covers what we've verified about its APK download and promo codes.",
    downloadUrl: "https://gamerummyq.com/?code=GAF5Y5CUMVU&t=1781950990",
  },
  {
    name: "Gogo Rummy",
    image: "/images/platforms/gogo-rummy.webp",
    description:
      "Gogo Rummy's repeated syllable suggests a fast-paced take on rummy — here's the Gogo Rummy APK download and promo code guide.",
    downloadUrl: "https://www.gogorummy30.com/?code=V4U7LU1TUDZ&t=1781951275",
  },
  {
    name: "Hi Rummy",
    image: "/images/platforms/hi-rummy.webp",
    description:
      "Hi Rummy opens with a casual greeting-style name — this guide tracks its APK download and any verified promo code activity.",
    downloadUrl: "https://joinhirummy.cc/?code=RX37ZA9H7G7&t=1781952763",
  },
  {
    name: "Hindi777",
    image: "/images/platforms/hindi777.webp",
    description:
      "Hindi777 combines a language cue with the classic \"777\" slots number — see what we know about the Hindi777 download and promo codes.",
    downloadUrl: "https://www.hindi777agent4.com/?code=7LFAXV7ZFX2&t=1781953691",
  },
  {
    name: "INR Rummy",
    image: "/images/platforms/inr-rummy.webp",
    description:
      "INR Rummy names its currency directly, pointing at a real-money rummy app — here's the INR Rummy APK and promo code guide.",
    downloadUrl: "https://inrrummysvip.net/?code=JMQK62EW7RW&t=1781969140",
  },
  {
    name: "Ind Bingo",
    image: "/images/platforms/ind-bingo.webp",
    description:
      "Ind Bingo pairs a bingo format with an India-specific abbreviation — this page covers its download source and promo code status.",
  },
  {
    name: "Ind Club",
    image: "/images/platforms/ind-club.webp",
    description:
      "Ind Club's name is broad and doesn't pin down a specific game type on its own — here's what we've verified about its APK and promo codes.",
    downloadUrl: "https://indclub38.com/?code=W231VYT9S4K&t=1781953944",
  },
  {
    name: "Ind Rummy",
    image: "/images/platforms/ind-rummy.webp",
    description:
      "Ind Rummy is named directly for the Indian rummy market — this guide tracks its APK download and promo code activity.",
    downloadUrl: "https://indrummyvip30.com/?code=2BAB6MWU1ST&t=1781954340",
  },
  {
    name: "Ind Slots",
    image: "/images/platforms/ind-slots.webp",
    description:
      "Ind Slots pairs a slots format with an India-specific abbreviation — see our Ind Slots download and promo code notes.",
    downloadUrl: "https://www.indslotsgame.com/?code=T2QAZY5XRX5&t=1781954995",
  },
  {
    name: "Jaiho Arcade",
    image: "/images/platforms/jaiho-arcade.webp",
    description:
      "Jaiho Arcade belongs to the separate \"Jaiho\" family of apps rather than Yono's — this guide covers the Jaiho Arcade APK download and promo code status specifically.",
    downloadUrl: "https://www.jaihoarcade48.com/?code=74SY92P3WEB&t=1781955258",
  },
  {
    name: "Jaiho Rummy",
    image: "/images/platforms/jaiho-rummy.webp",
    description:
      "Jaiho Rummy extends the Jaiho branding into the rummy format — here's what we know about its download and promo codes.",
    downloadUrl: "https://jaihorummyagent.club/?code=3NPMVPS8ECT&t=1781957652",
  },
  {
    name: "Jaiho Slot",
    image: "/images/platforms/jaiho-slot.webp",
    description:
      "Jaiho Slot applies the Jaiho name to a slots-style app — this page tracks its APK download and promo code activity.",
    downloadUrl: "https://www.jaihoslots24.com/?code=QJS2Y15LD48&t=1781957788",
  },
  {
    name: "Jaiho Spin",
    image: "/images/platforms/jaiho-spin.webp",
    description:
      "Jaiho Spin points at a spin/wheel format under the Jaiho name — see our Jaiho Spin download and promo code guide.",
    downloadUrl: "https://7jaihospinagent.com/?code=4168H4BCEUT&t=1781958114",
  },
  {
    name: "Jaiho Win",
    image: "/images/platforms/jaiho-win.webp",
    description:
      "Jaiho Win's name is outcome-focused rather than genre-specific — here's what we've verified about its APK download and promo codes.",
    downloadUrl: "https://www.jaihowin11.com/?code=XZD1DCCQ3N4&t=1781958256",
  },
  {
    name: "Jaiho91",
    image: "/images/platforms/jaiho91.webp",
    description:
      "Jaiho91 pairs the Jaiho name with a numeric suffix — this guide covers its download source and promo code status.",
    downloadUrl: "https://jaiho91agents.com/?code=C42CFSG9NU1&t=1781970545",
  },
  {
    name: "Jaiho 777",
    image: "/images/platforms/jaiho-777.webp",
    description:
      "Jaiho 777 combines the Jaiho name with the classic slots jackpot number — here's the Jaiho 777 APK and promo code guide.",
    downloadUrl: "https://jaiho77790.com/?code=RZP8TTL2EXP&t=1781955169",
  },
  {
    name: "Joy Rummy",
    image: "/images/platforms/joy-rummy.webp",
    description:
      "Joy Rummy brands itself around a light, casual rummy experience — this page tracks its download and promo code activity.",
    downloadUrl: "https://www.joyrummy8.com/?code=J5KZREFFUG5&t=1781969686",
  },
  {
    name: "Love Rummy",
    image: "/images/platforms/love-rummy.webp",
    description:
      "Love Rummy uses friendly, casual branding for its take on rummy — see what we know about its APK download and promo codes.",
    downloadUrl: "https://www.loverummy88.com/?code=R6KTL37DEVW&t=1781958746",
  },
  {
    name: "Max Rummy",
    image: "/images/platforms/max-rummy.webp",
    description:
      "Max Rummy's name suggests a higher-stakes or bigger-rewards angle, though that's not something we've verified — here's the Max Rummy download and promo code guide.",
    downloadUrl: "https://www.maxrummy99.com/?code=QUMV1MBQR7L&t=1783566019",
  },
  {
    name: "MBM Bet",
    image: "/images/platforms/mbm-bet.webp",
    description:
      "MBM Bet is branded plainly as a betting app rather than one specific game — this guide covers its APK download and any promo code activity.",
    downloadUrl: "https://www.mbmbet21.com/?code=UPHZHE49PH6&t=1781958952",
  },
  {
    name: "Maha Games",
    image: "/images/platforms/maha-games.webp",
    description:
      "Maha Games uses a broad, multi-game framing instead of naming one specific format — here's what we've verified about downloading it.",
    downloadUrl: "https://mahagames-a.com/?code=J245HMNW4C3&t=1781958855",
  },
  {
    name: "Neta Vip",
    image: "/images/platforms/neta-vip.webp",
    description:
      "Neta Vip pairs a political-sounding name with VIP-tier branding — this page tracks its APK download and promo code status.",
    downloadUrl: "https://neta7.vip/?code=DR0TFBX29CG&t=1781959176",
  },
  {
    name: "OK Rummy",
    image: "/images/platforms/ok-rummy.webp",
    description:
      "OK Rummy keeps its branding deliberately plain and simple — see our OK Rummy download and promo code guide.",
    downloadUrl: "https://www.okrummy48.com/?code=H2GNJTTB4TP&t=1781959294",
  },
  {
    name: "Rumble Rummy",
    image: "/images/platforms/rumble-rummy.webp",
    description:
      "Rumble Rummy's name suggests a tournament-style or competitive rummy format — here's what we know about its APK download and promo codes.",
    downloadUrl: "https://www.rumblerummy333.net/?code=82MDH43NXH9&t=1781961857",
  },
  {
    name: "Rummy 91",
    image: "/images/platforms/rummy-91.webp",
    description:
      "Rummy 91 pairs the rummy format with India's international dialing code — this guide covers its download and promo code activity.",
    downloadUrl: "https://www.rummy91q.bet/?code=UXT67QH88MK&t=1781963162",
  },
  {
    name: "Rummy Ludo",
    image: "/images/platforms/rummy-ludo.webp",
    description:
      "Rummy Ludo's name suggests it may combine rummy with ludo-style gameplay — see what we've verified about its APK before installing.",
    downloadUrl: "https://www.rummyludo1.com/?code=UWPCL2TP9N3&t=1781963324",
  },
  {
    name: "Rummy77",
    image: "/images/platforms/rummy77.webp",
    description:
      "Rummy77 pairs the rummy format with \"77,\" a number often used in lucky-themed app branding — here's the Rummy77 download and promo code guide.",
    downloadUrl: "https://rummy77z.vip/?code=F3VMY7HUKLD&t=1781962775",
  },
  {
    name: "Rummy888",
    image: "/images/platforms/rummy888.webp",
    description:
      "Rummy888 uses \"888,\" a number tied to luck and prosperity in casino branding, alongside the rummy format — this page tracks its APK and promo codes.",
    downloadUrl: "https://rummy888vip37.com/?code=TPUREFESN3G&t=1781963064",
  },
  {
    name: "Saga Slots",
    image: "/images/platforms/saga-slots.webp",
    description:
      "Saga Slots frames itself as an ongoing slots series rather than a single game — here's what we know about downloading it and its promo code status.",
    downloadUrl: "https://www.sagaslots23.com/?code=0QHQQDQR832&t=1781963464",
  },
  {
    name: "Share Slots",
    image: "/images/platforms/share-slots.webp",
    description:
      "Share Slots' name hints at a referral or social-sharing mechanic, though we haven't confirmed that — see our Share Slots APK and promo code guide.",
    downloadUrl: "https://share977.com/?code=YAZ4PR9XNK4&t=1781964196",
  },
  {
    name: "Slot Spin",
    image: "/images/platforms/slot-spin.webp",
    description:
      "Slot Spin combines two of the most common casino-app terms into one name — this guide covers its download and promo code status.",
    downloadUrl: "https://slotsspiny.com/?code=C1A3LUE98Y9&t=1781964366",
  },
  {
    name: "Slots Winner",
    image: "/images/platforms/slots-winner.webp",
    description:
      "Slots Winner frames itself around outcomes rather than a specific gameplay style — here's what we've verified about its APK download.",
    downloadUrl: "https://slotswinnerk.com/?code=PGVZ35PE57E&t=1781965038",
  },
  {
    name: "Spin 101",
    image: "/images/platforms/spin-101.webp",
    description:
      "Spin 101 pairs a spin-wheel format with an introductory-sounding \"101\" — see our Spin 101 download and promo code guide.",
    downloadUrl: "https://spin101-f.com/?code=Z9BRWVJXE7T&t=1781966141",
  },
  {
    name: "Spin 777",
    image: "/images/platforms/spin-777.webp",
    description:
      "Spin 777 combines the spin format with the classic slots jackpot number — this page tracks its APK download and promo code status.",
  },
  {
    name: "Spin Crush",
    image: "/images/platforms/spin-crush.webp",
    description:
      "Spin Crush's name suggests a fast, high-energy take on spin-wheel games — here's what we know about downloading it.",
    downloadUrl: "https://spincrush61.com/?code=ADE75XVN5W2&t=1782646860",
  },
  {
    name: "Spin Gold",
    image: "/images/platforms/spin-gold.webp",
    description:
      "Spin Gold ties its spin format to premium \"gold-tier\" branding — see our Spin Gold APK and promo code guide.",
    downloadUrl: "https://spingoldvipagent.cc/?code=S9VSKRLMRJB&t=1781965765",
  },
  {
    name: "Spin Lucky",
    image: "/images/platforms/spin-lucky.webp",
    description:
      "Spin Lucky leans directly on luck-themed branding for its spin format — this guide covers its download and promo code status.",
  },
  {
    name: "Spin Winner",
    image: "/images/platforms/spin-winner.webp",
    description:
      "Spin Winner, like other \"Winner\"-branded apps in this set, frames itself around outcomes — here's what we've verified about its APK.",
    downloadUrl: "https://spinwinner-y.com/?code=QVT5YKQQ4ZZ&t=1781966029",
  },
  {
    name: "Top Rummy",
    image: "/images/platforms/top-rummy.webp",
    description:
      "Top Rummy brands itself as a leading option among rummy apps — this page tracks its download and promo code activity.",
    downloadUrl: "https://www.toprummy.cc/?code=M4GW3PJNE81&t=1781967667",
  },
  {
    name: "Win Rummy",
    image: "/images/platforms/win-rummy.webp",
    description:
      "Win Rummy pairs an outcome-focused name with a crown-and-slot-reel icon similar to others in this family — here's what we'll confirm about its download and promo codes once it's live.",
    comingSoon: true,
    releaseDate: "2026-07-29T08:00:00+05:30",
  },
  {
    name: "Yes Spin",
    image: "/images/platforms/yes-spin.webp",
    description:
      "Yes Spin keeps its spin-format branding simple and affirmative — see our Yes Spin APK and promo code guide.",
    downloadUrl: "https://www.yesspinclub.com/?code=47TPM5YAUBY&t=1781968075",
  },
  {
    name: "Yn 777",
    image: "/images/platforms/yn-777.webp",
    description:
      "Yn 777 is a shortened variant name paired with the classic slots jackpot number — here's what we know about downloading it.",
    downloadUrl: "https://www.y754.com/?code=4SW8P8RDE8P&t=1781968442",
  },
  {
    name: "Yono 777",
    image: "/images/platforms/yono-777.webp",
    description:
      "Yono 777 combines the Yono name with the classic slots jackpot number — this guide covers its APK download and promo code status.",
    downloadUrl: "https://uono777.co/?code=F9MPD4LNMMX&t=1781970461",
  },
  {
    name: "Yono Games",
    image: "/images/platforms/yono-games.webp",
    description:
      "Yono Games uses the broadest possible framing within the Yono family, rather than naming one game type — here's what we've verified about its download.",
    downloadUrl: "https://yonogamese.com/?code=GK19NGYEZT2&t=1781968659",
  },
  {
    name: "Yono Rummy",
    image: "/images/platforms/yono-rummy.webp",
    description:
      "Yono Rummy applies the Yono branding specifically to the rummy format — see our Yono Rummy APK and promo code guide.",
    downloadUrl: "https://yonorummy044.com/?code=VIPDW9AGUXM&t=1781968802",
  },
  {
    name: "Yono Slots",
    image: "/images/platforms/yono-slots.webp",
    description:
      "Yono Slots applies the Yono branding to a slots format — this page tracks its download and promo code activity.",
    downloadUrl: "https://www.uonoslots.fun/?code=59YLFBFUNDL&t=1781968918",
  },
  {
    name: "Yono Vip",
    image: "/images/platforms/yono-vip.webp",
    description:
      "Yono Vip pairs the Yono name with VIP-tier branding — here's what we know about its APK download and promo codes.",
    downloadUrl: "https://uonovipplay.vip/?code=9U8GYEWZ9LN&t=1781969008",
  },
];

/**
 * Manually curated front-of-grid order (site owner's call, not alphabetical).
 * To bump a new platform to #1, add its exact `name` to the front of this
 * list — everything else shifts down automatically, no array surgery needed.
 * Entries not listed here keep their existing relative order, after these.
 */
const FEATURED_ORDER = ["Win Rummy", "DhanGame", "Max Rummy", "Yono Rummy", "Yono Games", "Yono 777"];

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
