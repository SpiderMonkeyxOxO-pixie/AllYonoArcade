import type { MetadataRoute } from "next";
import { CLUSTER_PAGES, BLOG_PILLARS } from "./lib/site-data";
import { PLATFORMS } from "./lib/platforms";

const BASE = "https://allyonoarcade.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const clusterPages: MetadataRoute.Sitemap = CLUSTER_PAGES.map((page) => ({
    url: `${BASE}${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.slug === "/promo-codes" ? ("daily" as const) : ("weekly" as const),
    priority: 0.8,
  }));

  const platformPages: MetadataRoute.Sitemap = PLATFORMS.map((platform) => ({
    url: `${BASE}/all-games/${platform.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const blogPillars: MetadataRoute.Sitemap = BLOG_PILLARS.map((pillar) => ({
    url: `${BASE}${pillar.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...clusterPages, ...platformPages, ...blogPillars];
}
