"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  DownloadIcon,
  GamepadIcon,
  StoreIcon,
  ShieldCheckIcon,
  LogInIcon,
  GiftIcon,
  PhoneIcon,
  SwapIcon,
} from "../icons/Icons";
import { CLUSTER_PAGES, TOP_NAV_SLUGS, type IconKey } from "../../lib/site-data";

const ICONS: Record<IconKey, (props: { size?: number; className?: string }) => React.ReactElement> = {
  download: DownloadIcon,
  gamepad: GamepadIcon,
  store: StoreIcon,
  shield: ShieldCheckIcon,
  login: LogInIcon,
  gift: GiftIcon,
  phone: PhoneIcon,
  swap: SwapIcon,
};

const topLinks = CLUSTER_PAGES.filter((p) => TOP_NAV_SLUGS.includes(p.slug));
const moreLinks = CLUSTER_PAGES.filter((p) => !TOP_NAV_SLUGS.includes(p.slug));

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[1000] transition-[background,border-color] duration-300"
        style={{
          background: isScrolled || isMobileOpen || moreOpen ? "rgba(5,6,12,0.92)" : "transparent",
          backdropFilter: isScrolled || isMobileOpen || moreOpen ? "blur(18px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-14 sm:h-16 max-w-[1240px] items-center justify-between px-4 sm:px-6"
        >
          {/* Logo — wordmark + persistent "unofficial" disclosure, stacked so it never competes for horizontal space */}
          <Link href="/" aria-label="AllYonoArcade — Home" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Yono Arcade logo"
              width={36}
              height={36}
              priority
              sizes="36px"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display font-semibold text-[15px] sm:text-base tracking-tight text-[#f3f5ff]">
                Yono<span className="text-neon">Arcade</span>
              </span>
              <span className="mt-0.5 text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-wider text-[var(--color-ink-400)]">
                Unofficial Guide
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul role="list" className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {topLinks.map((link) => {
              const Icon = ICONS[link.icon];
              const active = pathname === link.slug;
              return (
                <li key={link.slug}>
                  <Link
                    href={link.slug}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors"
                    style={{ color: active ? "var(--color-cyan-400)" : "var(--color-ink-200)" }}
                  >
                    <Icon size={15} />
                    {link.navLabel}
                  </Link>
                </li>
              );
            })}

            <li ref={moreRef} className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((p) => !p)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors"
                style={{ color: moreOpen ? "var(--color-magenta-400)" : "var(--color-ink-200)" }}
              >
                More
                <ChevronDownIcon size={14} className={moreOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="cabinet !absolute right-0 top-[calc(100%+10px)] z-10 w-72 max-h-[70vh] overflow-y-auto p-2"
                  >
                    {moreLinks.map((link) => {
                      const Icon = ICONS[link.icon];
                      return (
                        <Link
                          key={link.slug}
                          href={link.slug}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-[13px] hover:bg-white/[0.04] transition-colors"
                        >
                          <Icon size={16} className="mt-0.5 shrink-0 text-[var(--color-cyan-400)]" />
                          <span>
                            <span className="block font-medium text-[#f3f5ff]">{link.label}</span>
                            <span className="block text-[12px] text-[var(--color-ink-400)] leading-snug">
                              {link.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/blog"
                      className="mt-1 flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-[var(--color-ink-200)] hover:bg-white/[0.04] transition-colors border-t border-white/[0.06]"
                    >
                      Blog
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* CTA (desktop) */}
          <Link
            href="/download"
            className="btn-brand hidden lg:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
              color: "#1a0e00",
            }}
          >
            <DownloadIcon size={14} />
            Download Guide
          </Link>

          {/* Mobile hamburger — 44px min touch target */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((p) => !p)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-[#f3f5ff]"
          >
            {isMobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>
      </header>

      {/* Backdrop behind the "More" dropdown — guarantees page content never
          shows through around it, regardless of scroll/header state. */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[998]"
            style={{ background: "rgba(5,6,12,0.6)" }}
            onClick={() => setMoreOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] lg:hidden"
            style={{ background: "rgba(5,6,12,0.98)", paddingTop: "56px" }}
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="h-full overflow-y-auto px-4 pb-10 pt-4"
            >
              <Link
                href="/download"
                className="btn-brand mb-4 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))",
                  color: "#1a0e00",
                }}
              >
                <DownloadIcon size={17} />
                Download Guide
              </Link>

              <ul role="list" className="list-none m-0 p-0 space-y-1">
                {CLUSTER_PAGES.map((link) => {
                  const Icon = ICONS[link.icon];
                  const active = pathname === link.slug;
                  return (
                    <li key={link.slug}>
                      <Link
                        href={link.slug}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium"
                        style={{
                          color: active ? "var(--color-cyan-400)" : "#f3f5ff",
                          background: active ? "rgba(53,242,255,0.06)" : "transparent",
                        }}
                      >
                        <Icon size={18} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#f3f5ff] border-t border-white/[0.08] mt-2 pt-4"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
