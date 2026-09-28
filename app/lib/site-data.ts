// Central registry of the cluster pages so Navbar, Footer, the homepage
// grid, and sitemap.ts all stay in sync with the content plan
// (content-plan_yono-arcade_2026-07-14.md) instead of drifting.

export type IconKey =
  | "download"
  | "gamepad"
  | "store"
  | "shield"
  | "login"
  | "gift"
  | "phone"
  | "swap";

export type ClusterPage = {
  slug: string;
  label: string;
  navLabel: string;
  description: string;
  icon: IconKey;
  keyword: string;
  volume: string;
};

export const CLUSTER_PAGES: ClusterPage[] = [
  {
    slug: "/download",
    label: "Download Guide",
    navLabel: "Download",
    description: "Every step to install the app, plus what each APK variant actually is.",
    icon: "download",
    keyword: "yono arcade download",
    volume: "6.9K/mo",
  },
  {
    slug: "/game-apk",
    label: "Game APK",
    navLabel: "Game APK",
    description: "What the Game APK build is and how it differs from the main app.",
    icon: "gamepad",
    keyword: "yono arcade game apk",
    volume: "11K/mo",
  },
  {
    slug: "/all-games",
    label: "All Games List",
    navLabel: "All Games",
    description: "The full, maintained list of games inside Yono Arcade.",
    icon: "store",
    keyword: "yono arcade all games",
    volume: "12K/mo",
  },
  {
    slug: "/mall",
    label: "Arcade Mall",
    navLabel: "Mall",
    description: "What the in-app \"Mall\" section is and how it fits into the app.",
    icon: "store",
    keyword: "yono arcade mall",
    volume: "7.3K/mo",
  },
  {
    slug: "/pure-apk",
    label: "Pure APK",
    navLabel: "Pure APK",
    description: "What a \"Pure APK\" build means and the safety questions to ask before installing one.",
    icon: "shield",
    keyword: "yono arcade pure apk",
    volume: "5.9K/mo",
  },
  {
    slug: "/login",
    label: "Login Help",
    navLabel: "Login",
    description: "Fixes for sign-in issues, forgotten passwords, and account access.",
    icon: "login",
    keyword: "yono arcade login",
    volume: "500/mo",
  },
  {
    slug: "/promo-codes",
    label: "Promo Codes",
    navLabel: "Promo Codes",
    description: "A living list of promo codes — checked and updated weekly.",
    icon: "gift",
    keyword: "yono arcade promo code",
    volume: "70/mo",
  },
  {
    slug: "/is-yono-arcade-safe",
    label: "Safety Review",
    navLabel: "Safety Review",
    description: "An honest look at the safety questions people actually ask before installing.",
    icon: "shield",
    keyword: "is yono arcade safe",
    volume: "growing",
  },
  {
    slug: "/customer-care",
    label: "Customer Care",
    navLabel: "Support",
    description: "How to reach support inside the app and what to do if you can't.",
    icon: "phone",
    keyword: "yono arcade customer care number",
    volume: "350/mo",
  },
  {
    slug: "/alternatives",
    label: "Yono Arcade vs. Look-Alikes",
    navLabel: "Alternatives",
    description: "Jaiho Arcade, Arcade 91, Spin Arcade — how to tell similarly named apps apart.",
    icon: "swap",
    keyword: "jaiho arcade yono",
    volume: "unclaimed",
  },
];

export type BlogPillar = {
  slug: string;
  title: string;
  description: string;
  icon: IconKey;
  image: string;
  keyword: string;
  volume: string;
  /** Matches the verification badge/callout actually shown on the pillar's own page —
   *  kept in sync by hand since none of these guides claims full verification yet. */
  verificationStatus: "verified" | "unverified" | "pending";
  /** Scheduled posts only: YYYY-MM-DD; hidden from the blog index and sitemap until 07:00 IST that day. */
  publishedAt?: string;
};

/** The 5 blog pillars — matching the content plan's "slots/aviator/rummy
 * walkthroughs + monthly refresh" scope for /blog, backed by the keyword
 * export (google_in_yono-arcade_matching-terms_2026-07-14.md). */
export const BLOG_PILLARS: BlogPillar[] = [
  {
    slug: "/blog/yono-arcade-slots-guide",
    title: "Yono Arcade Slots: What's Actually in the App",
    description:
      "Does Yono Arcade have slots? The slot-style games YonoArcade.com names, how RTP works, and why slot tricks and hack APKs don't work.",
    icon: "gamepad",
    image: "/images/guides/slots-guide-featured.webp",
    keyword: "yono arcade slots",
    volume: "600/mo",
    verificationStatus: "verified",
  },
  {
    slug: "/blog/yono-arcade-rummy-guide",
    title: "Yono Arcade Rummy: Rules & Yono Rummy Apps",
    description:
      "13-card and 21-card rummy in Yono Arcade, the rules that matter, and how it differs from the separate Yono Rummy apps on Android.",
    icon: "gamepad",
    image: "/images/guides/rummy-guide-featured.webp",
    keyword: "yono arcade rummy",
    volume: "290/mo combined",
    verificationStatus: "verified",
  },
  {
    slug: "/blog/yono-arcade-aviator-guide",
    title: "Yono Aviator APK & Aviator Predictor Apps",
    description:
      "There is no separate Yono Aviator APK: Aviator is the Crash game inside Yono Arcade. Why predictor apps (v2.1, v4.0, v6.0) can't work.",
    icon: "gamepad",
    image: "/images/guides/yono-aviator-apk-predictor.webp",
    keyword: "yono arcade aviator",
    volume: "low, rising",
    verificationStatus: "verified",
  },
  {
    slug: "/blog/yono-arcade-withdrawal-deposit-guide",
    title: "Yono Arcade Withdrawal Problems, KYC & TDS",
    description:
      "Withdrawal pending or failed? What Yono Arcade's terms say about PAN, KYC and 30% TDS, why payments can fail since 2026, and common scams.",
    icon: "shield",
    image: "/images/guides/yono-arcade-withdrawal-kyc-tds.webp",
    keyword: "yono arcade withdrawal",
    volume: "low, transactional",
    verificationStatus: "verified",
  },
  {
    slug: "/blog/whats-new-in-yono-arcade-2026",
    title: "What's New in Yono Arcade (2026)",
    description:
      "The latest Yono Arcade updates we've tracked in 2026 — new features, version changes, and search trends — refreshed regularly, not a one-time post.",
    icon: "gamepad",
    image: "/images/guides/whats-new-2026-featured.webp",
    keyword: "yono arcade 2026",
    volume: "4.6K/mo",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/dhangame-promo-code-bonus-guide",
    title: "DhanGame Promo Code, Bonus & Withdrawal Guide",
    description:
      "DhanGame's welcome bonus, minimum withdrawal, and promo code details, now that it's live — download the app and see what we've verified so far.",
    icon: "gift",
    image: "/images/guides/dhangame-promo-featured.webp",
    keyword: "dhangame promo code",
    volume: "new listing",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/win-rummy-vs-yono-arcade",
    title: "Win Rummy vs Yono Arcade: Games, Features and Key Differences",
    description:
      "Compare Win Rummy vs Yono Arcade by game types, app features, access, Mall tools and verification status before using either platform.",
    icon: "swap",
    image: "/images/guides/win-rummy-vs-yono-arcade-comparison.webp",
    keyword: "win rummy vs yono arcade",
    volume: "new listing",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/yono-arcade-apps",
    title: "Yono Arcade Apps: Mall Listings & App Checks",
    description:
      "How Mall listings differ from games and separately published apps, and the developer, package-ID and permissions checks worth running before you trust one.",
    icon: "store",
    image: "/images/guides/yono-arcade-apps-verification.webp",
    keyword: "yono arcade apps",
    volume: "growing",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/all-yono-games",
    title: "All Yono Games: Apps, Categories & Key Differences",
    description:
      "Why All Yono Games collections show different totals, how apps, categories and games differ, and where Yono Arcade fits among similarly branded apps.",
    icon: "store",
    image: "/images/guides/all-yono-games-apps-categories.jpg",
    keyword: "all yono games",
    volume: "new listing",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/who-operates-yono-arcade",
    title: "Who Operates Yono Arcade? Official Site & Fake Apps",
    description:
      "YonoArcade.com names Yono Tech Private Limited as its operator — how to tell the official source from the similarly named Google Play listings.",
    icon: "shield",
    image: "/images/guides/yono-arcade-owner-official-site-identity-check.webp",
    keyword: "yono arcade owner",
    volume: "new listing",
    verificationStatus: "verified",
  },
  {
    slug: "/blog/is-yono-arcade-banned-in-india",
    title: "Is Yono Arcade Banned in India? 2026 Status",
    description:
      "Is Yono Game banned? What the Online Gaming Act 2025 means for Yono Arcade, why its state list is out of date, and what happens to your balance.",
    icon: "shield",
    image: "/images/guides/yono-arcade-india-2026-rules-status-guide.webp",
    keyword: "yono game legal or illegal",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-09-29",
  },
  {
    slug: "/blog/yono-arcade-apk-review",
    title: "Yono Arcade APK Review: Package, Version, Signer",
    description:
      "We inspected the official Yono Arcade APK: package name, version 1.1.9, the \"lamislot\" signing certificate, its 9 permissions and the per-download tracking tag.",
    icon: "shield",
    image: "/images/guides/yono-arcade-apk-review.webp",
    keyword: "yono arcade apk",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-09-30",
  },
  {
    slug: "/blog/yono-arcade-old-version-apk",
    title: "Yono Arcade Old Version APK: Should You Install One?",
    description:
      "Why Yono Arcade old version APKs fail or get blocked, how to check which version you have, and how to tell a genuine older build from a repackaged one.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-latest-version-vs-old-version.webp",
    keyword: "yono arcade old version apk",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-01",
  },
  {
    slug: "/blog/yono-arcade-not-opening-not-installing",
    title: "Yono Arcade Not Opening or Not Installing? Fixes",
    description:
      "Fixes for Yono Arcade \"App not installed\", parse errors, crashes on launch and endless loading, based on what the official APK actually requires.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-not-opening-not-installing.webp",
    keyword: "yono arcade not opening",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-02",
  },
  {
    slug: "/blog/yono-arcade-wingo-lottery",
    title: "Wingo Lottery & \"Wingo Prediction Tool v5\"",
    description:
      "How the Wingo colour game in Yono Arcade works, and why Wingo prediction tools and result APKs can't predict the next draw.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-wingo-lottery-prediction.webp",
    keyword: "wingo prediction tool v5 apk",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-03",
  },
  {
    slug: "/blog/yono-arcade-7-up-down",
    title: "7 Up Down: Rules, Odds & \"Winning Tricks\"",
    description:
      "The real odds of 7 Up, 7 Down and exactly 7 in Yono Arcade, and why 7 up down winning tricks can't beat the dice.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-7-up-down.webp",
    keyword: "7 up down winning trick",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-04",
  },
  {
    slug: "/blog/yono-arcade-dragon-tiger",
    title: "Dragon Tiger: Rules, Odds & \"Predict GPT\" Claims",
    description:
      "How Dragon Tiger works in Yono Arcade, the odds of Dragon, Tiger and Tie, and why AI prediction tools can't know the next card.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-dragon-tiger.webp",
    keyword: "dragon tiger predict gpt",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-05",
  },
  {
    slug: "/blog/yono-arcade-andar-bahar",
    title: "Andar Bahar: Meaning, Rules & Odds",
    description:
      "Andar Bahar meaning in English and Hindi, how the card game works in Yono Arcade, and the real odds of Andar vs Bahar.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-andar-bahar.webp",
    keyword: "andar bahar meaning in english",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-06",
  },
  {
    slug: "/blog/jaiho-arcade-vs-yono-arcade",
    title: "Jaiho Arcade vs Yono Arcade: Same App?",
    description:
      "Different names and packages, but both APKs are signed with the same certificate and served from the same host. What we found.",
    icon: "swap",
    image: "/images/guides/jaiho-arcade-vs-yono-arcade.webp",
    keyword: "jaiho arcade game all apk",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-07",
  },
  {
    slug: "/blog/yono-arcade-jhandi-munda-roulette",
    title: "Jhandi Munda & Roulette: Rules and Real Odds",
    description:
      "How Jhandi Munda's six symbol dice and Roulette work in Yono Arcade, the real odds of each bet, and why both are games of chance.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-jhandi-munda-roulette.webp",
    keyword: "jhandi munda",
    volume: "autocomplete",
    verificationStatus: "verified",
    publishedAt: "2026-10-08",
  },
];

/** Blog posts that are live now (scheduled ones appear from 07:00 IST on their date). */
export function livePillars(): BlogPillar[] {
  if (process.env.SCHEDULE_PREVIEW === "1") return BLOG_PILLARS; // local preview only
  const now = Date.now();
  return BLOG_PILLARS.filter((p) => !p.publishedAt || now >= Date.parse(`${p.publishedAt}T01:30:00Z`));
}

export const TOP_NAV_SLUGS = ["/download", "/game-apk", "/is-yono-arcade-safe", "/login"];

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
];
