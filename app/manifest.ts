import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AllYonoArcade — Yono Arcade Download Guide & Safety Review",
    short_name: "AllYonoArcade",
    description:
      "Independent guide to Yono Arcade: download steps, all games, login help, promo codes, and an honest safety review.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060c",
    theme_color: "#05060c",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
