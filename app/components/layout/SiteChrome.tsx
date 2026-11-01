import Script from "next/script";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GA_MEASUREMENT_ID = "G-HBLWX8X6FG";

/**
 * Public-site frame (analytics, navbar, footer). Kept out of the root layout
 * so the admin area on code.allyonoarcade.com renders without it.
 *
 * LazyMotion + the `domAnimation` feature bundle (not the full
 * `motion`/`AnimatePresence` import graph) is what every client component
 * under here must use — see Navbar, Reveal, PlatformGrid, all importing
 * `m` instead of `motion`. This alone cuts framer-motion's shipped weight
 * roughly in half versus the default import.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LazyMotion>
  );
}
