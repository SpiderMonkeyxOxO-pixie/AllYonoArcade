import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import ComparisonTable from "../components/sections/ComparisonTable";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";
import ScheduledLink from "../components/sections/ScheduledLink";
import { OPERATOR_CHECKED } from "../lib/legal";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

const TITLE = "Yono Arcade Pure APK: APKPure, Pure 2.0 & Plus APK Checked";
const DESCRIPTION =
  "Is the Yono Arcade Pure APK the real app? We compared the APKPure listing, \"Pure 2.0\" and \"Plus\" APKs with the official file: different package, developer and version.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/pure-apk" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/pure-apk" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PureApkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pure APK"
        title="Yono Arcade Pure APK"
        answer={`"Yono Arcade Pure APK" usually means the Yono Arcade listing on APKPure, a third-party APK site. On ${OPERATOR_CHECKED} that listing was a different app: package com.yonoarcade.free by "Jhoni development", version 1.0.0. The official Yono Arcade APK is com.arcade.games.yo, version 1.1.9, from YonoArcade.com. There is no official "Pure", "Pure 2.0" or "Plus" edition.`}
      />

      <RelatedLinks />

      <ContentSection heading={`Official APK vs "Pure" and mod listings (checked ${OPERATOR_CHECKED})`}>
        <ComparisonTable
          headers={["Where", "What it says it is", "Does it match the official app?"]}
          rows={[
            ["YonoArcade.com (official)", "com.arcade.games.yo · v1.1.9 · ~34 MB · Android 5.0+", "This is the reference"],
            ["APKPure \"YONO ARCADE\"", "com.yonoarcade.free · v1.0.0 · 77.2 MB · Android 9.0+ · \"Jhoni development\" · casual game", "No: different package, developer and product"],
            ["APK mod site", "com.arcade.games.yo · \"v10.320\" · 47.6 MB · \"updated 12 May 2026\"", "No: right package name, but a version and size the official file doesn't have"],
            ["\"Pure 2.0\" / \"Plus\" APK", "Names used on download pages", "No official edition by these names exists"],
          ]}
        />
        <p>
          Two things to notice. A different package name means a different app, whatever the
          icon looks like. And a file that uses the official package name with a made-up version
          number has been rebuilt or relabelled by someone other than the operator. For the full
          breakdown of the genuine file, see our{" "}
          <ScheduledLink href="/blog/yono-arcade-apk-review" date="2026-09-30">Yono Arcade APK review</ScheduledLink>;
          for the lookalike Google Play apps, see{" "}
          <Link href="/blog/who-operates-yono-arcade">Who Operates Yono Arcade?</Link>
        </p>
      </ContentSection>

      <ContentSection heading="Why people search for “Pure APK”">
        <p>
          APKPure hosts Android installers outside the Play Store, and &quot;pure apk&quot; has
          become shorthand for &quot;a version I can download without the Play Store&quot;. For
          Yono Arcade that shortcut misleads, because the app was never on the Play Store to begin
          with: the official APK only comes from YonoArcade.com, and the APKPure listing is another
          developer&apos;s app that uses the same name.
        </p>
      </ContentSection>

      <ContentSection heading="What “Yono Arcade Pure games” and “Pure 2.0” pages offer">
        <BulletList
          items={[
            "Some pages use \"Pure\" or \"2.0\" to suggest a cleaner or newer build. The operator publishes neither; its current version on 28 September 2026 was 1.1.9.",
            "\"Plus\" and \"Plus old version\" pages usually relabel the same file, or offer a different app entirely.",
            "Many of these pages advertise sign-up bonuses (we have seen figures from ₹41 to ₹700 on different sites). The operator's own site makes different offers, so treat any bonus figure on a third-party page as unverified.",
          ]}
        />
        <GuideImage
          src="/images/guides/trusted-source-comparison.webp"
          alt="Comparison graphic of trustworthy download-source signals versus red flags to check before installing an APK"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="Three checks before installing any “Pure” file" badge="verified">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Package name must be <code>com.arcade.games.yo</code> (Settings → Apps → the app → App
            details). Anything else is a different app.
          </li>
          <li>Version 1.1.9 was current on 28 September 2026. A version like &quot;10.320&quot; is not from the operator.</li>
          <li>
            It must install as an update over the official app without uninstalling. If Android
            refuses because of the signature, it was signed by someone else.
          </li>
        </ul>
      </Callout>

      <FAQSection
        heading="Pure APK questions"
        items={[
          {
            question: "Is Yono Arcade Pure APK the same as the official app?",
            answer:
              "No. On 28 September 2026 the Yono Arcade listing on APKPure was package com.yonoarcade.free by \"Jhoni development\", version 1.0.0, a different app from the official com.arcade.games.yo from YonoArcade.com.",
          },
          {
            question: "What is Yono Arcade Pure 2.0 APK?",
            answer:
              "There is no official \"Pure 2.0\" edition. The operator's current version on 28 September 2026 was 1.1.9. A file sold as Pure 2.0 is relabelled or a different app.",
          },
          {
            question: "Is there a Yono Arcade Plus APK?",
            answer:
              "Not from the operator. \"Plus\" is a label used on third-party download pages; check the package name is com.arcade.games.yo before trusting any such file.",
          },
          {
            question: "Is a Pure APK safer than the official download?",
            answer:
              "No. A third-party copy adds another party you have to trust. If you use Yono Arcade at all, the only file that comes from the operator is the one on YonoArcade.com.",
          },
        ]}
      />
    </>
  );
}
