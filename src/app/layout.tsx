import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { ScrollFX } from "@/components/ScrollFX";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} | SEO, Google Ads & Web Design`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "digital marketing agency Bengaluru",
    "SEO agency Bangalore",
    "digital marketing Banashankari",
    "Google Ads agency Bengaluru",
    "social media marketing Bangalore",
    "web design Bengaluru",
    "local SEO Bangalore",
    "PPC agency Karnataka",
    "branding agency Bengaluru",
    "lead generation India",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "Marketing",
  // Emits the full favicon set. Next only auto-links icons placed in app/,
  // so files in public/ have to be declared here.
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
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
  formatDetection: { telephone: true, address: true, email: true },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": `${site.address.locality}, ${site.address.city}`,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sora.variable} h-full antialiased`}>
      <head>
        {/* Warm up the map embed's origins without blocking the paint. */}
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        <WhatsAppFab />
        <ScrollFX />
        <SmoothScroll />

        {/* Site-wide structured data: who we are, where we are, how we rate. */}
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
      </body>
    </html>
  );
}
