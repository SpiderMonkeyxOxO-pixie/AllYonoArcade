import { PLATFORMS } from "./platforms";

export type AdminApp = { name: string; logo: string; hasDownload: boolean };

/** The apps shown in the admin editor: Yono Arcade first, then the live platform cards. */
export function adminApps(): AdminApp[] {
  return [
    { name: "Yono Arcade", logo: "/images/yono-arcade-icon.webp", hasDownload: true },
    ...PLATFORMS.filter((p) => !p.comingSoon).map((p) => ({
      name: p.name,
      logo: p.image,
      hasDownload: Boolean(p.downloadUrl),
    })),
  ];
}
