import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "../icons/Icons";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  answer,
  icon,
}: {
  eyebrow: string;
  title: string;
  answer: string;
  /** Optional app-icon badge shown next to the title (stacks above on mobile). */
  icon?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-10">
      <div className="pointer-events-none absolute inset-0 arcade-grid-bg opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-16 left-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-cyan), transparent 70%)" }}
        aria-hidden="true"
      />

      <Reveal mode="mount" className="relative mx-auto max-w-[760px] px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-[var(--color-ink-400)] mb-4">
          <Link href="/" className="hover:text-[var(--color-cyan-400)] transition-colors">
            Home
          </Link>
          <ChevronRightIcon size={12} />
          <span className="text-[var(--color-ink-200)]">{eyebrow}</span>
        </nav>

        <div className={icon ? "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5" : undefined}>
          {icon && (
            <span
              className="cabinet relative shrink-0 overflow-hidden p-0"
              style={{ width: 64, height: 64, borderRadius: 16 }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={64}
                height={64}
                sizes="64px"
                className="h-full w-full object-cover"
                priority
              />
            </span>
          )}
          <h1 className="font-display text-[28px] sm:text-[40px] font-semibold tracking-tight leading-[1.12]">
            {title}
          </h1>
        </div>

        <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink-200)] max-w-[720px]">
          {answer}
        </p>
      </Reveal>
    </section>
  );
}
