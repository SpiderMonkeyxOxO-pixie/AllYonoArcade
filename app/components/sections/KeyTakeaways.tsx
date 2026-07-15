import Reveal from "./Reveal";

const POINTS = [
  "Yono Arcade is a coin-op style games app (slots, rummy, arcade titles) aimed at the Indian market.",
  "There are several similarly named apps (Jaiho Arcade, Arcade 91, Spin Arcade) — see our comparison before you download.",
  "\"Pure APK\" builds are typically distributed outside the Play Store — read the safety review before installing one.",
  "Promo codes change frequently; our promo codes page is checked weekly, not a one-time list.",
  "This site is independent and unofficial — we don't process payments, logins, or withdrawals.",
];

export default function KeyTakeaways() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-8 sm:py-10">
      <Reveal className="cabinet relative p-5 sm:p-7">
        <div className="cabinet-corner tl" />
        <div className="cabinet-corner br" />
        <h2 className="font-display text-[13px] font-semibold uppercase tracking-wider text-[var(--color-cyan-400)] mb-4">
          Key takeaways
        </h2>
        <ul className="list-none m-0 p-0 space-y-3">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-200)]">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))" }}
              />
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
