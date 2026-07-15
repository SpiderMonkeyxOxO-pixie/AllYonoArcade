import Reveal from "./Reveal";

export type FAQItem = { question: string; answer: string };

export default function FAQSection({
  items,
  heading = "Frequently asked questions",
}: {
  items: FAQItem[];
  heading?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-[760px] px-4 sm:px-6 py-10 sm:py-16">
      <Reveal>
        <h2 className="font-display text-[22px] sm:text-[28px] font-semibold tracking-tight mb-6">
          {heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="cabinet cabinet-interactive group relative overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            {/* Padding lives on <summary> itself, not the parent — it's the
                actually-interactive element, so this is what must meet the
                44px touch-target minimum, not just look like it does. */}
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[16px] font-medium text-[#f3f5ff]">
              {item.question}
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[15px] leading-none text-[var(--color-cyan-400)] transition-transform duration-200 group-open:rotate-45"
                style={{ background: "rgba(53,242,255,0.08)" }}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="accordion-content px-5 pb-4 -mt-1 text-[15px] leading-relaxed text-[var(--color-ink-400)]">
              {item.answer}
            </p>
          </details>
        ))}
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
