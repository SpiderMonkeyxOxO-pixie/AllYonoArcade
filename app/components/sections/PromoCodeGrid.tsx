import PromoCard from "./PromoCard";
import Reveal from "./Reveal";
import { PLATFORMS } from "../../lib/platforms";
import { getPromoCodes, findPromoEntry } from "../../lib/promo-codes";

export default function PromoCodeGrid() {
  const { entries } = getPromoCodes();
  const yonoArcade = findPromoEntry(entries, "Yono Arcade");

  return (
    <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-6 sm:py-8">
      <Reveal mode="mount" className="max-w-2xl mx-auto mb-2">
        <PromoCard
          name="Yono Arcade"
          image="/images/yono-arcade-icon.webp"
          href="/download"
          featured
          morning={yonoArcade?.morning}
          afternoon={yonoArcade?.afternoon}
          evening={yonoArcade?.evening}
        />
      </Reveal>

      <p className="mt-6 mb-4 text-[12.5px] text-[var(--color-ink-400)]">
        Related apps from the same visual family — tap any card for what we know about it.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {PLATFORMS.map((platform) => {
          const entry = findPromoEntry(entries, platform.name);
          return (
            <PromoCard
              key={platform.slug}
              name={platform.name}
              image={platform.image}
              href={platform.downloadUrl ?? `/all-games/${platform.slug}`}
              isExternal={Boolean(platform.downloadUrl)}
              morning={entry?.morning}
              afternoon={entry?.afternoon}
              evening={entry?.evening}
            />
          );
        })}
      </div>
    </section>
  );
}
