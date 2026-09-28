import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import { ArrowRightIcon } from "../components/icons/Icons";
import RelatedLinks from "../components/sections/RelatedLinks";
import VerificationBadge from "../components/sections/VerificationBadge";
import { livePillars } from "../lib/site-data";

// Scheduled posts appear here from 07:00 IST on their date, so render per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yono Arcade updates, game guides, and verified deep dives.",
  alternates: { canonical: "https://allyonoarcade.com/blog" },
  openGraph: {
    title: "Blog | AllYonoArcade.com",
    description: "Yono Arcade updates, game guides, and verified deep dives.",
    url: "https://allyonoarcade.com/blog",
  },
  twitter: {
    title: "Blog | AllYonoArcade.com",
    description: "Yono Arcade updates, game guides, and verified deep dives.",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Blog"
        answer="Guides to Yono Arcade's identity, APK, games, safety and India status, newest first. Each one says what we have verified and what is still unconfirmed."
      />

      <RelatedLinks />

      <section className="mx-auto max-w-[760px] px-4 sm:px-6 py-4">
        <div className="flex flex-col gap-3">
          {[...livePillars()].reverse().map((pillar) => (
            <Link
              key={pillar.slug}
              href={pillar.slug}
              className="cabinet cabinet-interactive relative flex items-start gap-3 p-4 sm:p-5"
            >
              <Image
                src={pillar.image}
                alt={`${pillar.title} featured graphic`}
                width={128}
                height={72}
                sizes="128px"
                className="h-[54px] w-24 shrink-0 rounded-lg object-cover sm:h-[63px] sm:w-28"
              />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-[15px] font-semibold text-[#f3f5ff]">
                    {pillar.title}
                  </span>
                  <VerificationBadge status={pillar.verificationStatus} />
                </span>
                <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-ink-400)]">
                  {pillar.description}
                </span>
              </span>
              <ArrowRightIcon size={16} className="mt-1 shrink-0 text-[var(--color-ink-400)]" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
