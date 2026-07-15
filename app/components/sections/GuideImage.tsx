import Image from "next/image";

/**
 * Frames a guide illustration in the site's own cabinet motif (gradient
 * top edge, panel background, corner brackets) so images with their own
 * internal branding/color story still read as "this site's content"
 * rather than a foreign asset dropped into the page.
 */
export default function GuideImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  /** Applied to the outer positioning wrapper (centering, max-width, page
   *  padding, margins) — kept separate from the card's own uniform bezel
   *  padding so the two never collide on the same element. */
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="cabinet glow-cyan relative p-1.5">
        <div className="cabinet-corner tl" />
        <div className="cabinet-corner br" />
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full rounded-[13px]"
        />
      </div>
    </div>
  );
}
