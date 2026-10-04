import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/sections/PageHeader";
import ContentSection from "../../components/sections/ContentSection";
import BulletList from "../../components/sections/BulletList";
import Callout from "../../components/sections/Callout";
import ComparisonTable from "../../components/sections/ComparisonTable";
import FAQSection from "../../components/sections/FAQSection";
import RelatedLinks from "../../components/sections/RelatedLinks";
import GuideImage from "../../components/sections/GuideImage";
import ScheduledLink from "../../components/sections/ScheduledLink";

const TITLE = "Yono Arcade Login Problem? Causes, Fixes & Account Help";
const DESCRIPTION =
  "Yono Arcade login not working? Tell an app-side problem from a phone problem, fix OTP and password issues, and recover your account without falling for fake login pages.";

// Re-render hourly so links to scheduled posts switch on after they publish.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/login" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://allyonoarcade.com/login" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Login"
        title="Yono Arcade Login Help"
        answer="Most Yono Arcade login failures are either on the app's side (an old APK, a server problem, an account hold) or on your phone (no signal for the OTP, wrong date and time, a battery saver blocking the app). The table below tells you which one you have."
      />

      <RelatedLinks />

      <ContentSection heading="Is it the app or your phone?">
        <ComparisonTable
          headers={["What you see", "Likely cause", "What to do"]}
          rows={[
            ["OTP never arrives", "Weak signal, SMS blocked, or DND on promotional SMS", "Move to better signal, check the SMS spam folder, wait 2 minutes before resending"],
            ["\"Network error\" on every screen", "Your connection, a VPN, or the app's servers", "Switch Wi-Fi/mobile data, turn off VPN; if it persists for everyone, it's the server"],
            ["App asks you to update, or crashes at login", "Old APK the server no longer accepts", "Install the current APK from YonoArcade.com only"],
            ["\"Account frozen\" or \"under review\"", "An account hold on the operator's side", "Contact support by email; no one else can lift it"],
            ["Login works, then logs you out", "Battery saver or wrong date/time on the phone", "Set automatic date and time; exempt the app from battery optimisation"],
            ["Password rejected after a reset", "Autofill of an old password", "Type it manually; clear saved passwords for the app"],
          ]}
        />
      </ContentSection>

      <ContentSection heading="Things to try first">
        <BulletList
          items={[
            "Force-stop the app and open it again (a full restart, not just switching away).",
            "Clear the app's cache in Settings → Apps → Yono Arcade → Storage. Clearing data will log you out, so try cache first.",
            "Check your phone's date and time are set automatically; wrong time breaks secure sign-in.",
            "If an update is needed, get it from YonoArcade.com, not from a \"latest APK\" site.",
          ]}
        />
        <p>
          If the app won&apos;t open at all, see{" "}
          <ScheduledLink href="/blog/yono-arcade-not-opening-not-installing" date="2026-10-02">Yono Arcade not opening or not installing</ScheduledLink>.
        </p>
      </ContentSection>

      <ContentSection heading="Resetting your password or account access">
        <p>
          Account recovery should always go through the option built into the app (usually a
          &quot;Forgot password&quot; link or OTP login on the sign-in screen). If that fails, email
          the operator at support@yonoarcade.com from the phone number or email on your account.
          We don&apos;t publish any other recovery route, because recovery steps that bypass the app
          are a common phishing pattern. See{" "}
          <Link href="/customer-care">Yono Arcade customer care</Link> for the contacts the operator
          publishes.
        </p>
        <GuideImage
          src="/images/guides/login-screen.webp"
          alt="A typical sign-in screen showing where the Forgot password option sits"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="Be careful with “login help” links and forms outside the app">
        <p>
          Never enter your Yono Arcade credentials, OTP or UPI PIN on a page other than the app
          itself. Login searches are a common target for phishing pages and fake &quot;support
          agents&quot; that imitate the real sign-in screen.
        </p>
      </Callout>

      <FAQSection
        heading="Login questions"
        items={[
          {
            question: "Why is my Yono Arcade OTP not coming?",
            answer:
              "Usually weak signal, an SMS filter, or requesting the OTP several times in a row. Move to better signal, check the SMS spam folder, and wait two minutes before resending. If it never arrives, contact support@yonoarcade.com.",
          },
          {
            question: "I forgot my Yono Arcade password — what do I do?",
            answer:
              "Use the recovery option on the app's own login screen. Avoid any third-party site offering to recover or reset your account for you.",
          },
          {
            question: "Why does Yono Arcade say my account is frozen?",
            answer:
              "An account hold is set by the operator, so only its support can explain or lift it. Contact support@yonoarcade.com in writing and keep a copy.",
          },
          {
            question: "Why does login keep failing after I update my password?",
            answer:
              "Check for autofilled old passwords and a switched keyboard language. If it still fails after a fresh install, it's likely a server-side problem rather than something you can fix on the phone.",
          },
        ]}
      />
    </>
  );
}
