import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ holds the CSS, JS and optimised images Google needs to render pages; don't block it.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://allyonoarcade.com/sitemap.xml",
  };
}
