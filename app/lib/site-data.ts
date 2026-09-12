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
};

/** The 5 blog pillars — matching the content plan's "slots/aviator/rummy
 * walkthroughs + monthly refresh" scope for /blog, backed by the keyword
 * export (google_in_yono-arcade_matching-terms_2026-07-14.md). */
export const BLOG_PILLARS: BlogPillar[] = [
  {
    slug: "/blog/yono-arcade-slots-guide",
    title: "Yono Arcade Slots: Games Guide",
    description:
      "What the slot-style games inside Yono Arcade look like, based on search patterns and icon branding — what we've verified and what's still unconfirmed.",
    icon: "gamepad",
    image: "/images/guides/slots-guide-featured.webp",
    keyword: "yono arcade slots",
    volume: "600/mo",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/yono-arcade-rummy-guide",
    title: "Yono Arcade Rummy: Games Guide",
    description:
      "What the rummy-style games inside Yono Arcade look like, based on naming and icon patterns — an honest look at what's confirmed versus still unverified.",
    icon: "gamepad",
    image: "/images/guides/rummy-guide-featured.webp",
    keyword: "yono arcade rummy",
    volume: "290/mo combined",
    verificationStatus: "pending",
  },
  {
    slug: "/blog/yono-arcade-aviator-guide",
    title: "Yono Arcade Aviator: Game Guide",
    description:
      "Does Yono Arcade have an Aviator-style crash game? What search patterns suggest, plus why \"predictor\" and \"hack\" tools for this genre are a red flag.",
    icon: "gamepad",
    image: "/images/guides/aviator-guide-featured.webp",
    keyword: "yono arcade aviator",
    volume: "low, rising",
    verificationStatus: "unverified",
  },
  {
    slug: "/blog/yono-arcade-withdrawal-deposit-guide",
    title: "Yono Arcade Withdrawal & Deposit Guide",
    description:
      "How deposits and withdrawals are expected to work in an app like Yono Arcade, common problems people report, and what to check before you add funds.",
    icon: "shield",
    image: "/images/guides/withdrawal-deposit-guide-featured.webp",
    keyword: "yono arcade withdrawal",
    volume: "low, transactional",
    verificationStatus: "unverified",
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
    image: "/images/guides/yono-arcade-apps-verification.webp",
    keyword: "all yono games",
    volume: "new listing",
    verificationStatus: "pending",
  },
];

export const TOP_NAV_SLUGS = ["/download", "/game-apk", "/is-yono-arcade-safe", "/login"];

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
];
