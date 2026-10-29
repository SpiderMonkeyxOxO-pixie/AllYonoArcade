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
    slug: "/blog/jaiho-play-vs-jaiho-arcade",
    title: "Jaiho Play vs Jaiho Arcade: How to Tell Them Apart",
    description:
      "Jaiho Play (rummy and Teen Patti, Yonotech Pvt. Ltd.) and Jaiho Arcade share a first word, not a confirmed owner. See how to tell them apart.",
    icon: "swap",
    image: "/images/platforms/jaiho-play.webp",
    keyword: "jaiho play vs jaiho arcade",
    volume: "new",
    verificationStatus: "unverified",
    publishedAt: "2026-10-15",
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
  {
    slug: "/blog/jeet-spin-apk-download",
    title: "Jeet Spin APK Download, Promo Code & Launch Day Review",
    description:
      "Jeet Spin launches 30 Sep 2026 as the newest spin app on the Yono network. Download status, promo code, app features and an honest first look.",
    icon: "gamepad",
    image: "/images/guides/jeet-spin-apk-download.webp",
    keyword: "jeet spin apk download",
    volume: "new listing",
    verificationStatus: "verified",
    publishedAt: "2026-09-29",
  },
  {
    slug: "/blog/allyono-allyonogames-allyonogame-art-which-site",
    title: "AllYono, AllYonoGames, AllYonoGame.art: Which Site Is Which?",
    description:
      "Several sites use names like AllYono, AllYonoGames and AllYonoGame. What each one showed on 10 October 2026, and how to tell them apart from AllYonoArcade.com.",
    icon: "gamepad",
    image: "/images/guides/allyono-allyonogames-allyonogame-art-which-site.webp",
    keyword: "allyono",
    volume: "27k impressions/28d",
    verificationStatus: "verified",
    publishedAt: "2026-10-10",
  },
  {
    slug: "/blog/yonoarcadehelp-live-chat-telegram-fake-support",
    title: "YonoArcadeHelp: Live Chat, Telegram and Fake Support (2026 Check)",
    description:
      "What \"yonoarcadehelp\" refers to: the live chat domain on the operator's site, a Telegram contact with the same name, and why a matching name proves little.",
    icon: "gamepad",
    image: "/images/guides/yonoarcadehelp-live-chat-telegram-fake-support.webp",
    keyword: "yonoarcadehelp",
    volume: "2.7k impressions/28d",
    verificationStatus: "verified",
    publishedAt: "2026-10-11",
  },
  {
    slug: "/blog/rummy-91-promo-code-what-is-real",
    title: "Rummy 91 Promo Code: What Is Real? (2026 Check)",
    description:
      "Looking for a Rummy 91 promo code? What a code can and can't do, where our code status is shown, and what we found on Rummy 91's download site and on Google Play.",
    icon: "gamepad",
    image: "/images/guides/rummy-91-promo-code-what-is-real.webp",
    keyword: "rummy 91 promo code",
    volume: "40 impressions/28d",
    verificationStatus: "verified",
    publishedAt: "2026-10-12",
  },
  {
    slug: "/blog/promo-codes-for-other-yono-apps-which-we-track",
    title: "Promo Codes for Other Yono Apps: Which Ones We Track",
    description:
      "Is there one promo code for all Yono games? No. Which apps this site tracks codes for, how the morning, afternoon and evening slots work, and why a code only works in its own app.",
    icon: "gamepad",
    image: "/images/guides/promo-codes-for-other-yono-apps-which-we-track.webp",
    keyword: "yono 777 promo code",
    volume: "60 impressions/28d",
    verificationStatus: "verified",
    publishedAt: "2026-10-13",
  },
  {
    slug: "/blog/yono-arcade-plus-apk",
    title: "Yono Arcade Plus: How It Differs From the Standard App",
    description:
      "An unofficial look at what \"Yono Arcade Plus\" changes versus the standard app — distribution channel, features, or just a label — and how to check yourself.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-plus-apk.webp",
    keyword: "yono arcade plus apk",
    volume: "3.5K/mo",
    verificationStatus: "unverified",
    publishedAt: "2026-10-18",
  },
  {
    slug: "/blog/yono-arcade-ios",
    title: "Does Yono Arcade Work on iPhone?",
    description:
      "APK files are Android-only by format. Here's what iPhone users searching for Yono Arcade iOS actually find, and why \"iOS APK\" claims don't hold up.",
    icon: "phone",
    image: "/images/guides/yono-arcade-ios.webp",
    keyword: "yono arcade ios",
    volume: "700+/mo",
    verificationStatus: "verified",
    publishedAt: "2026-10-19",
  },
  {
    slug: "/blog/yono-arcade-reviews",
    title: "Yono Arcade Reviews: Which Ones to Trust",
    description:
      "A guide to evaluating Yono Arcade reviews — Play Store ratings, blog reviews, and paid review farms — plus how AllYonoArcade discloses its own method.",
    icon: "shield",
    image: "/images/guides/yono-arcade-reviews.webp",
    keyword: "yono arcade reviews",
    volume: "200/mo",
    verificationStatus: "verified",
    publishedAt: "2026-10-20",
  },
  {
    slug: "/blog/yono-arcade-agent-apk",
    title: "What Is a Yono Arcade \"Agent APK\"?",
    description:
      "\"Agent APK\" refers to referral-tagged install files promoters distribute. Here's how that model works and what it means for your safety before installing.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-agent-apk.webp",
    keyword: "yono arcade agent apk",
    volume: "300/mo combined",
    verificationStatus: "verified",
    publishedAt: "2026-10-21",
  },
  {
    slug: "/blog/yono-arcade-online",
    title: "Can You Play Yono Arcade Without Installing an APK?",
    description:
      "No official browser-based Yono Arcade is known to exist. Here's what \"play online now\" pages are actually offering, and how to avoid misleading ones.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-online.webp",
    keyword: "yono arcade online",
    volume: "1.4K/mo combined",
    verificationStatus: "unverified",
    publishedAt: "2026-10-22",
  },
  {
    slug: "/blog/yono-arcade-777",
    title: "Yono Arcade 777: Separate Game or Same App?",
    description:
      "Is \"Yono Arcade 777\" a mode inside the app, a separate product, or keyword-stuffing? Here's how to check the claim yourself before trusting any page.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-777.webp",
    keyword: "yono arcade 777",
    volume: "400/mo",
    verificationStatus: "unverified",
    publishedAt: "2026-10-23",
  },
  {
    slug: "/blog/yono-arcade-vs-rummy-91",
    title: "Yono Arcade vs Rummy 91: Same Network?",
    description:
      "No confirmed shared ownership between Yono Arcade and Rummy 91. Here's how to check developer, signing certificate, and support contact yourself.",
    icon: "swap",
    image: "/images/guides/yono-arcade-vs-rummy-91.webp",
    keyword: "yono arcade vs rummy 91",
    volume: "low, comparison",
    verificationStatus: "unverified",
    publishedAt: "2026-10-24",
  },
  {
    slug: "/blog/yono-arcade-vs-club-inr",
    title: "Yono Arcade vs Club INR: Telling the Apps Apart",
    description:
      "Yono Arcade and Club INR aren't confirmed to share ownership. Here's how to independently check developer, signing certificate, and support details.",
    icon: "swap",
    image: "/images/guides/yono-arcade-vs-club-inr.webp",
    keyword: "yono arcade vs club inr",
    volume: "low, comparison",
    verificationStatus: "unverified",
    publishedAt: "2026-10-25",
  },
  {
    slug: "/blog/yono-arcade-refer-and-earn",
    title: "Yono Arcade Refer and Earn: How It Works",
    description:
      "How refer-and-earn programs in apps like Yono Arcade generally work — unique codes, invitee deposit triggers — with honest limits on what's verified.",
    icon: "gift",
    image: "/images/guides/yono-arcade-refer-and-earn.webp",
    keyword: "yono arcade refer and earn",
    volume: "low, rising",
    verificationStatus: "verified",
    publishedAt: "2026-10-26",
  },
  {
    slug: "/blog/yono-arcade-minimum-deposit",
    title: "Yono Arcade Minimum Deposit: What the App Shows",
    description:
      "Typical minimum deposit ranges seen across apps like Yono Arcade, and why you should confirm the exact current figure inside the app, not from any blog post.",
    icon: "shield",
    image: "/images/guides/yono-arcade-minimum-deposit.webp",
    keyword: "yono arcade minimum deposit",
    volume: "low, transactional",
    verificationStatus: "verified",
    publishedAt: "2026-10-27",
  },
  {
    slug: "/blog/yono-arcade-kyc",
    title: "Yono Arcade KYC: Does It Ask for ID?",
    description:
      "Phone-based verification vs document KYC in apps like Yono Arcade — what typically triggers each, and when ID checks usually appear at withdrawal.",
    icon: "shield",
    image: "/images/guides/yono-arcade-kyc.webp",
    keyword: "yono arcade kyc",
    volume: "low, transactional",
    verificationStatus: "verified",
    publishedAt: "2026-10-28",
  },
  {
    slug: "/blog/yono-arcade-account-suspension",
    title: "Yono Arcade Account Suspension: Common Reasons Apps Give",
    description:
      "Why real-money gaming apps like Yono Arcade suspend accounts — multiple accounts, payment disputes, suspected automation — and how to seek reinstatement.",
    icon: "shield",
    image: "/images/guides/yono-arcade-account-suspension.webp",
    keyword: "yono arcade account suspended",
    volume: "low, support",
    verificationStatus: "verified",
    publishedAt: "2026-10-29",
  },
  {
    slug: "/blog/yono-arcade-data-permissions",
    title: "Yono Arcade Data Permissions: What the APK Actually Requests",
    description:
      "The Yono Arcade APK requests 9 permissions, none flagged sensitive, per our direct inspection. Here's how to verify this yourself and what would be a red flag.",
    icon: "shield",
    image: "/images/guides/yono-arcade-data-permissions.webp",
    keyword: "yono arcade permissions",
    volume: "low, trust",
    verificationStatus: "verified",
    publishedAt: "2026-10-30",
  },
  {
    slug: "/blog/yono-arcade-tournament-mode",
    title: "Yono Arcade Tournament Mode: What's Confirmed",
    description:
      "Tournament and leaderboard modes are common across this app category. Here's what's actually confirmed for Yono Arcade specifically versus assumed.",
    icon: "gamepad",
    image: "/images/guides/yono-arcade-tournament-mode.webp",
    keyword: "yono arcade tournament mode",
    volume: "low, rising",
    verificationStatus: "unverified",
    publishedAt: "2026-10-31",
  },
  {
    slug: "/blog/vip-rummy-apk-download",
    title: "VIP Rummy APK Download: Launch-Day Status",
    description:
      "VIP Rummy launches 20 October 2026. Here's what's confirmed about the APK, what isn't yet, and how to verify the real file once it's available.",
    icon: "download",
    image: "/images/guides/vip-rummy-apk-download.webp",
    keyword: "vip rummy apk download",
    volume: "new listing",
    verificationStatus: "unverified",
    publishedAt: "2026-10-20",
  },
  {
    slug: "/blog/is-jaiho-play-a-yono-game",
    title: "Is Jaiho Play a Yono Game? What We Found",
    description:
      "Jaiho Play launched 15 October 2026 with rummy and Teen Patti. Here's whether it's part of Yono Arcade or the wider \"Yono\" family, and how to tell apps apart.",
    icon: "gamepad",
    image: "/images/guides/is-jaiho-play-a-yono-game.webp",
    keyword: "jaihoplay yono game",
    volume: "new listing",
    verificationStatus: "verified",
    publishedAt: "2026-10-24",
  },
  {
    slug: "/blog/money-rummy-apk-download",
    title: "Money Rummy APK Download: What's Confirmed So Far",
    description:
      "Money Rummy launched 9 September 2026. Here's the download link, what's confirmed about the app, and what's still unverified before you install it.",
    icon: "download",
    image: "/images/guides/money-rummy-apk-download.webp",
    keyword: "money rummy apk",
    volume: "new listing",
    verificationStatus: "unverified",
    publishedAt: "2026-10-25",
  },
  {
    slug: "/blog/101z-apk-download",
    title: "101z APK Download: What's Confirmed & Promo Code Status",
    description:
      "101z APK download link, what we've verified about the app, and today's promo code status — plus what's still unconfirmed before you install it.",
    icon: "download",
    image: "/images/guides/101z-apk-download.webp",
    keyword: "101z apk",
    volume: "low, rising",
    verificationStatus: "unverified",
    publishedAt: "2026-10-28",
  },
  {
    slug: "/blog/club-inr-apk-download",
    title: "Club INR APK Download & Promo Code: What's Confirmed So Far",
    description:
      "Club INR isn't on the Play Store — here's the direct download link, what the promo code actually unlocks, and what we could and couldn't confirm.",
    icon: "download",
    image: "/images/guides/club-inr-apk-download.webp",
    keyword: "club inr apk download",
    volume: "low, rising",
    verificationStatus: "unverified",
    publishedAt: "2026-10-29",
  },
];

/** Blog posts that are live now (scheduled ones appear from 07:00 IST on their date). */
export function livePillars(): BlogPillar[] {
  if (process.env.SCHEDULE_PREVIEW === "1") return BLOG_PILLARS; // local preview only
  const now = Date.now();
  return BLOG_PILLARS.filter((p) => !p.publishedAt || now >= Date.parse(`${p.publishedAt}T01:30:00Z`));
}

export const TOP_NAV_SLUGS = ["/download", "/game-apk", "/promo-codes", "/is-yono-arcade-safe", "/login"];

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
];
