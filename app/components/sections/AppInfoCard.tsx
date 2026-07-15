import Image from "next/image";
import Reveal from "./Reveal";

export default function AppInfoCard({
  categories,
  description,
}: {
  categories: string[];
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://allyonoarcade.com/images/yono-arcade-icon.webp",
    name: "Yono Arcade app icon",
    description: "Official app icon for Yono Arcade, a coin-op/rummy-style games app.",
  };

  return (
    <Reveal mode="mount" className="mx-auto max-w-[760px] px-4 sm:px-6 py-2">
      <div className="cabinet relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-5 sm:p-6">
        <div className="cabinet-corner tl" />
        <div className="cabinet-corner br" />

        <Image
          src="/images/yono-arcade-icon.webp"
          alt="Yono Arcade app icon"
          width={96}
          height={96}
          sizes="96px"
          className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h2 className="font-display text-[16px] sm:text-[18px] font-semibold text-[#f3f5ff]">
              Yono Arcade
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                  style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[13px] leading-relaxed text-[var(--color-ink-400)]">{description}</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Reveal>
  );
}
