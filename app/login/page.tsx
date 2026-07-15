import type { Metadata } from "next";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import Callout from "../components/sections/Callout";
import FAQSection from "../components/sections/FAQSection";
import RelatedLinks from "../components/sections/RelatedLinks";
import GuideImage from "../components/sections/GuideImage";

export const metadata: Metadata = {
  title: "Yono Arcade Login Help",
  description:
    "General troubleshooting steps for Yono Arcade login and sign-in issues.",
  alternates: { canonical: "https://allyonoarcade.com/login" },
  openGraph: {
    title: "Yono Arcade Login Help",
    description: "General troubleshooting steps for Yono Arcade login and sign-in issues.",
    url: "https://allyonoarcade.com/login",
  },
  twitter: {
    title: "Yono Arcade Login Help",
    description: "General troubleshooting steps for Yono Arcade login and sign-in issues.",
  },
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Login"
        title="Yono Arcade Login Help"
        answer="Most login issues on apps like this come down to a handful of common causes: an outdated app version, a connectivity problem, or a password reset that needs to go through the app's own recovery flow rather than a third party."
      />

      <RelatedLinks />

      <ContentSection heading="Things to try first">
        <BulletList
          items={[
            "Update the app to the latest version you can verify — login systems are one of the first things a stale build breaks.",
            "Check your connection; some login flows depend on an SMS or OTP step that silently fails on weak signal.",
            "Restart the app fully (not just switch away from it) before retrying.",
            "If you use a password manager, confirm it's not autofilling an outdated saved password.",
          ]}
        />
      </ContentSection>

      <ContentSection heading="Resetting your password or account access">
        <p>
          Account recovery should always go through the option built into the app itself (usually
          a "Forgot password" or "Trouble logging in" link on the sign-in screen). We don't
          publish a separate recovery process here, because any account-recovery step that
          bypasses the app's own flow is a common phishing pattern.
        </p>
        <GuideImage
          src="/images/guides/login-screen.webp"
          alt="A typical sign-in screen showing where the Forgot password option sits"
          className="mt-4"
        />
      </ContentSection>

      <Callout tone="warning" title="Be careful with “login help” links and forms outside the app">
        <p>
          Never enter your Yono Arcade credentials into a page other than the app itself or its
          verified official site. Login-related searches are a common target for phishing pages
          that imitate the real sign-in screen.
        </p>
      </Callout>

      <FAQSection
        heading="Login questions"
        items={[
          {
            question: "I forgot my Yono Arcade password — what do I do?",
            answer:
              "Use the password recovery option inside the app's own login screen. Avoid any third-party site offering to \"recover\" or \"reset\" your account on your behalf.",
          },
          {
            question: "Why does login keep failing after I update my password?",
            answer:
              "Double-check for autofilled old passwords, and confirm caps lock or a keyboard language switch isn't altering what you're typing. If the issue persists after a fresh install, it's likely a server-side issue on the app's end rather than something fixable locally.",
          },
        ]}
      />
    </>
  );
}
