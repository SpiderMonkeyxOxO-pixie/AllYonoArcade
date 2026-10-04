import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GA_MEASUREMENT_ID = "G-HBLWX8X6FG";

/**
 * Public-site frame (analytics, navbar, footer). Kept out of the root layout
 * so the admin area on code.allyonoarcade.com renders without it.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
