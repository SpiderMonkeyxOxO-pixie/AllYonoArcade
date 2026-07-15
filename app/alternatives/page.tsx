import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "Yono Arcade vs. Jaiho Arcade vs. Arcade 91: What's the Difference?",
  description:
    "Yono Arcade, Jaiho Arcade, Arcade 91, and Spin Arcade are separate, similarly named apps. Here's how to tell them apart before you download anything.",
  alternates: { canonical: "https://allyonoarcade.com/alternatives" },
  openGraph: {
    title: "Yono Arcade vs. Jaiho Arcade vs. Arcade 91: What's the Difference?",
    description:
      "Yono Arcade, Jaiho Arcade, Arcade 91, and Spin Arcade are separate, similarly named apps. Here's how to tell them apart before you download anything.",
    url: "https://allyonoarcade.com/alternatives",
  },
  twitter: {
    title: "Yono Arcade vs. Jaiho Arcade vs. Arcade 91: What's the Difference?",
    description:
      "Yono Arcade, Jaiho Arcade, Arcade 91, and Spin Arcade are separate, similarly named apps. Here's how to tell them apart before you download anything.",
  },
};

export default function AlternativesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Alternatives"
        title="Yono Arcade vs. Similarly Named Apps"
        answer="Yono Arcade shows up in search alongside several separately named apps — Jaiho Arcade, Arcade 91, Spin Arcade among them. They are not the same product, and search-result overlap is exactly what causes people to install the wrong one."
      />

      <RelatedLinks exclude="all-games" />

      <ContentSection heading="Names that get confused with Yono Arcade">
        <BulletList
          items={[
            <><strong>Jaiho Arcade</strong> — a separate app name that pairs with "yono" in a large number of related searches.</>,
            <><strong>Arcade 91</strong> — another distinctly branded app appearing in the same search cluster.</>,
            <><strong>Spin Arcade</strong> — shows up specifically around spin/wheel-game searches.</>,
            <><strong>Yono Rummy</strong> — a rummy-specific naming variant that may or may not refer to the same product as "Yono Arcade" itself.</>,
          ]}
        />
        <p>
          We haven't independently confirmed the relationship (if any) between these apps and
          Yono Arcade — whether they're built by the same developer, unrelated competitors, or
          simply similarly named for search visibility. Don't assume they're interchangeable.
        </p>
      </ContentSection>

      <ContentSection heading="Browse the full list">
        <p>
          We track {"55+"} similarly branded apps from this same visual family — logos, categories,
          and what we know about each. Rather than duplicate that directory here, it lives on one
          page:
        </p>
        <Link
          href="/all-games"
          className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-cyan-400)]"
        >
          See the searchable directory on All Games →
        </Link>
      </ContentSection>

      <ContentSection heading="How to confirm you're installing the right one">
        <BulletList
          items={[
            "Check the publisher/developer name on the store listing or install screen, not just the app's display name.",
            "Compare the app icon and screenshots against what you expect — icon spoofing is common when names are this similar.",
            "If a promo code, login, or support number was shared with you, confirm it's for the specific app you're about to install, not a similarly named one.",
          ]}
        />
      </ContentSection>

      <Callout tone="info" title="Why this matters more than it sounds">
        <p>
          Confusing similarly named apps isn't just an inconvenience in this category — if
          real-money features are involved, installing the wrong app could mean depositing money
          into an account you didn't intend to use, with a different company's terms and support
          channel entirely.
        </p>
      </Callout>

      <FAQSection
        heading="Alternatives questions"
        items={[
          {
            question: "Is Jaiho Arcade the same company as Yono Arcade?",
            answer:
              "We don't have confirmation either way. Treat them as separate apps until you can verify the publisher information yourself on each one's store listing.",
          },
          {
            question: "Which one should I use?",
            answer:
              "That's your call, and it depends on which app you originally intended to find. This page exists to help you confirm you're installing the one you actually meant to.",
          },
        ]}
      />
    </>
  );
}
