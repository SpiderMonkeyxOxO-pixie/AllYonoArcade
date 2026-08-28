import type { MetadataRoute } from "next";
import { CLUSTER_PAGES, BLOG_PILLARS } from "./lib/site-data";
import { PLATFORMS } from "./lib/platforms";
import { getPromoCodes } from "./lib/promo-codes";

const BASE = "https://allyonoarcade.com";

/**
 * No per-page CMS/content timestamps are tracked in this repo, so `lastModified`
 * is only emitted where a genuine source date exists (currently: promo-code.txt's
 * own file mtime for /promo-codes). Everywhere else it's omitted rather than
 * stamped with `new Date()` on every build, which would falsely claim every page
 * changed today.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const { lastUpdated: promoCodesUpdated } = getPromoCodes();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/disclaimer`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const clusterPages: MetadataRoute.Sitemap = CLUSTER_PAGES.map((page) => ({
    url: `${BASE}${page.slug}`,
    ...(page.slug === "/promo-codes" && promoCodesUpdated ? { lastModified: promoCodesUpdated } : {}),
    changeFrequency: page.slug === "/promo-codes" ? ("daily" as const) : ("weekly" as const),
    priority: 0.8,
  }));

  const platformPages: MetadataRoute.Sitemap = PLATFORMS.map((platform) => ({
    url: `${BASE}/all-games/${platform.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const blogPillars: MetadataRoute.Sitemap = BLOG_PILLARS.map((pillar) => ({
    url: `${BASE}${pillar.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...clusterPages, ...platformPages, ...blogPillars];
}
