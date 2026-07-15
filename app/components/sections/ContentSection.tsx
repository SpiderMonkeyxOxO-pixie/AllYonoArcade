import Reveal from "./Reveal";

export default function ContentSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="mx-auto max-w-[760px] px-4 sm:px-6 py-6 sm:py-8">
      <section>
        <h2 className="font-display text-[19px] sm:text-[23px] font-semibold tracking-tight mb-3.5">
          {heading}
        </h2>
        <div className="text-[16px] leading-relaxed text-[var(--color-ink-200)] space-y-3.5 [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:m-0 [&_ul]:p-0 [&_li]:flex [&_li]:gap-2.5 [&_strong]:text-[#f3f5ff] [&_strong]:font-semibold [&_a]:text-[var(--color-cyan-400)] [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </section>
    </Reveal>
  );
}
