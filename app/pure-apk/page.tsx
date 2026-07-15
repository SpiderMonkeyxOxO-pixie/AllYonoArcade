import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Yono Arcade Pure APK: What It Means & Safety Notes",
  description:
    "What \"Pure APK\" naming usually means for apps like Yono Arcade, and the safety questions worth asking before installing one.",
  alternates: { canonical: "https://allyonoarcade.com/pure-apk" },
  openGraph: {
    title: "Yono Arcade Pure APK: What It Means & Safety Notes",
    description:
      "What \"Pure APK\" naming usually means for apps like Yono Arcade, and the safety questions worth asking before installing one.",
    url: "https://allyonoarcade.com/pure-apk",
  },
  twitter: {
    title: "Yono Arcade Pure APK: What It Means & Safety Notes",
    description:
      "What \"Pure APK\" naming usually means for apps like Yono Arcade, and the safety questions worth asking before installing one.",
  },
};

export default function PureApkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pure APK"
        title="Yono Arcade Pure APK"
        answer="“Pure APK” naming shows up across many Android games in this category and typically signals a third-party mirror distributed outside official app stores — not an official designation from the developer. Treat it as a distribution channel to evaluate, not a trust signal."
      />

      <RelatedLinks />

      <ContentSection heading="Why “Pure” specifically?">
        <p>
          Sites like APKPure host and re-distribute Android app installers outside the Play
          Store. Over time, "pure apk" has become shorthand in search behavior for "a version of
          this app I can download without the Play Store," regardless of which specific site is
          actually hosting it. That means a "Pure APK" isn't a single verified file — it's a
          category of similarly distributed files that vary in trustworthiness.
        </p>
      </ContentSection>

      <ContentSection heading="Questions worth asking before installing one">
        <BulletList
          items={[
            "Who's hosting this specific file, and do they publish a checksum or verification method?",
            "Does the permission list match what you'd expect for a games app, or does it ask for more (contacts, SMS, accessibility services)?",
            "Is this the same version number as any official listing you can find, or an unknown/older build?",
            "Does the site pressure you to disable security warnings to complete the install?",
          ]}
        />
        <GuideImage
          src="/images/guides/trusted-source-comparison.webp"
          alt="Comparison graphic of trustworthy download-source signals versus red flags to check before installing an APK"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="A “pure” or “official-sounding” name is not verification">
        <p>
          Naming a file "pure," "official," or "original" costs nothing and isn't independently
          checked by anyone. Judge the file by the questions above, not by what it's called.
        </p>
      </Callout>

      <FAQSection
        heading="Pure APK questions"
        items={[
          {
            question: "Is the Pure APK version different from the regular Yono Arcade app?",
            answer:
              "It should be the same underlying app, distributed through a different channel. \"Pure\" describes the distribution source, not a different product — but always verify the version matches what you expect.",
          },
          {
            question: "Is a Pure APK less safe than a Play Store install?",
            answer:
              "Generally, yes, by default — the Play Store applies automated scanning and developer verification that sideloaded sources don't guarantee. That doesn't make every sideloaded file unsafe, but it does mean more of the verification burden falls on you.",
          },
        ]}
      />
    </>
  );
}
