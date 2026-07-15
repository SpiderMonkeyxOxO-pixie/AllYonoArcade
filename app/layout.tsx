import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-HBLWX8X6FG";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05060c",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://allyonoarcade.com"),
  title: {
    default: "Yono Arcade — Download Guide, All Games & Safety Review",
    template: "%s | AllYonoArcade.com",
  },
  description:
    "Independent guide to Yono Arcade: how to download, the full games list, login help, promo codes, and an honest safety review. Not affiliated with the app developer.",
  authors: [{ name: "AllYonoArcade.com", url: "https://allyonoarcade.com" }],
  creator: "AllYonoArcade.com",
  publisher: "AllYonoArcade.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://allyonoarcade.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://allyonoarcade.com",
    siteName: "AllYonoArcade.com",
    title: "Yono Arcade — Download Guide, All Games & Safety Review",
    description:
      "Independent guide to Yono Arcade: download steps, the full games list, login help, promo codes, and an honest safety review.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yono Arcade — Download Guide, All Games & Safety Review",
    description:
      "Independent guide to Yono Arcade: download steps, the full games list, login help, promo codes, and an honest safety review.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <head />
      <body className="bg-[#05060c] text-[#f3f5ff] min-h-screen antialiased">
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
      </body>
    </html>
  );
}
