"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PLATFORMS, CATEGORY_COLORS, type PlatformCategory } from "../../lib/platforms";
import { SearchIcon, XIcon, DownloadIcon, GamepadIcon, ExternalLinkIcon } from "../icons/Icons";
import Reveal from "./Reveal";

const CATEGORY_ORDER: PlatformCategory[] = [
  "Arcade",
  "Rummy",
  "Slots",
  "Spin",
  "Bingo",
  "Jackpot",
  "Betting",
  "Games",
];

const FILTERS: ("All" | PlatformCategory)[] = ["All", ...CATEGORY_ORDER];

export default function PlatformGrid() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | PlatformCategory>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLATFORMS.filter((p) => {
      const matchesCategory = activeFilter === "All" || p.category === activeFilter;
      const matchesQuery = q === "" || p.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeFilter]);

  return (
    <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-8 sm:py-10">
      <Reveal className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="font-display text-[20px] sm:text-[26px] font-semibold tracking-tight">
            Similarly branded apps
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14px] text-[var(--color-ink-400)] leading-relaxed">
            {PLATFORMS.length} separately named apps from the same visual family. None are
            confirmed to be affiliated with Yono Arcade — search, filter, or tap any of them for
            what we know.
          </p>
        </div>

        <Link
          href="/download"
          className="btn-brand inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold w-full sm:w-auto"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
            color: "#1a0e00",
          }}
        >
          <DownloadIcon size={15} />
          Download Yono Arcade Guide
        </Link>
      </Reveal>

      {/* Search */}
      <div className="relative mb-3">
        <SearchIcon
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-400)]"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by app name…"
          aria-label="Search apps by name"
          className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-10 text-[13.5px] text-[#f3f5ff] placeholder:text-[var(--color-ink-400)] outline-none transition-colors focus:border-[var(--color-cyan-400)]/50"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-ink-400)] hover:text-[#f3f5ff]"
          >
            <XIcon size={14} />
          </button>
        )}
      </div>

      {/* Category filter pills */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => {
          const count = f === "All" ? PLATFORMS.length : PLATFORMS.filter((p) => p.category === f).length;
          const active = activeFilter === f;
          const dotColor = f === "All" ? null : CATEGORY_COLORS[f];
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-colors"
              style={
                active
                  ? { background: "rgba(53,242,255,0.12)", color: "var(--color-cyan-400)", border: "1px solid rgba(53,242,255,0.4)" }
                  : { background: "rgba(255,255,255,0.03)", color: "var(--color-ink-400)", border: "1px solid rgba(255,255,255,0.08)" }
              }
            >
              {dotColor && <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: dotColor }} aria-hidden="true" />}
              {f} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + query}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filtered.length === 0 ? (
            <div className="cabinet relative flex flex-col items-center gap-2 p-10 text-center">
              <GamepadIcon size={22} className="text-[var(--color-ink-400)]" />
              <p className="text-[13.5px] font-medium text-[#f3f5ff]">No apps match “{query}”</p>
              <p className="text-[12.5px] text-[var(--color-ink-400)]">Try a different name or clear the filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filtered.map((platform) => {
                const infoHref = `/all-games/${platform.slug}`;
                const isExternal = Boolean(platform.downloadUrl);
                const downloadHref = platform.downloadUrl ?? infoHref;
                const categoryColor = CATEGORY_COLORS[platform.category];
                return (
                  <div
                    key={platform.slug}
                    className="cabinet cabinet-interactive relative flex flex-col items-center gap-2 p-3 text-center"
                  >
                    <span
                      className="absolute top-2 left-2 h-2 w-2 rounded-full"
                      style={{ background: categoryColor, boxShadow: `0 0 6px ${categoryColor}` }}
                      title={platform.category}
                      aria-hidden="true"
                    />
                    <Link href={infoHref} className="flex flex-col items-center gap-1.5">
                      <Image
                        src={platform.image}
                        alt={`${platform.name} app icon`}
                        width={64}
                        height={64}
                        sizes="64px"
                        className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover"
                        style={{ boxShadow: `0 0 0 2px ${categoryColor}33` }}
                      />
                      <span className="min-h-[2rem] text-[12px] sm:text-[12.5px] font-medium leading-tight text-[#f3f5ff] line-clamp-2">
                        {platform.name}
                      </span>
                    </Link>
                    {platform.comingSoon ? (
                      <span
                        className="mt-1 inline-flex w-full items-center justify-center gap-1.5 rounded-md py-1.5 text-[11px] font-semibold"
                        style={{ background: "rgba(139,107,255,0.12)", color: "var(--color-violet-400)" }}
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <a
                        href={downloadHref}
                        {...(isExternal ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                        className="mt-1 inline-flex w-full items-center justify-center gap-1.5 rounded-md py-1.5 text-[11px] font-semibold transition-colors hover:bg-[rgba(53,242,255,0.16)]"
                        style={{ background: "rgba(53,242,255,0.08)", color: "var(--color-cyan-400)" }}
                      >
                        <DownloadIcon size={12} />
                        Download
                        {isExternal && <ExternalLinkIcon size={10} />}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
