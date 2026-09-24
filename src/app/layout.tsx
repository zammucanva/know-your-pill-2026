import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/kyp/theme-provider";
import { SkipToContentLink } from "@/components/kyp/ui/skip-to-content";
import { ContentProtection } from "@/lib/contentProtection";
import { imgPath } from "@/lib/kyp/image-path";
import { getSiteUrl } from "@/lib/kyp/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Canonical site origin (Phase 7): resolves relative metadata URLs
  // (canonical links, OG URLs) across every route. Single source of
  // truth in src/lib/kyp/site-url.ts — overridable per deployment via
  // NEXT_PUBLIC_SITE_URL; never localhost.
  metadataBase: new URL(getSiteUrl()),
  title: "Know Your Pill — Medication Education Made Visual",
  description:
    "Premium neuroscience-inspired psychiatric medication and substance education platform. Understand how your medicines work in the brain, what to expect, side effects, and how to stay safe.",
  keywords: [
    "Know Your Pill",
    "KYP",
    "psychiatric medication",
    "substance use",
    "pharmacology",
    "neuroscience education",
    "SSRI",
    "mental health",
    "medication safety",
  ],
  authors: [{ name: "Zamaan Ali Shamji" }],
  // Copyright attribution — rendered as <meta name="copyright"> on every page.
  other: {
    copyright:
      "© 2026 Zamaan Ali Shamji. All content on this site — including drug pages, disease modules, and educational text — is protected by copyright and may not be reproduced, republished, or redistributed without written permission. Terms: /legal/terms",
    // Lightweight provenance watermark (Task 4): invisible meta tag, zero
    // impact on users, SEO, or screen readers — but survives in the HTML
    // source of every exported page so copied HTML retains attribution.
    rights:
      "© 2026 Zamaan Ali Shamji · Know Your Pill · Source: https://github.com/zammucanva/know-your-pill-2026 · Unauthorized reproduction prohibited.",
  },
  icons: {
    // Prefixed with the GitHub Pages basePath — Next does not prefix
    // metadata icon hrefs automatically, and a root-absolute "/favicon.png"
    // would resolve to the domain root and 404 on Pages.
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-navy-512.png`,
  },
  // PWA manifest — icons + theme colour; relative icon paths resolve
  // against the manifest URL, so the same file serves both the
  // standalone build (/manifest.webmanifest) and the GitHub Pages
  // export (/know-your-pill-2026/manifest.webmanifest).
  manifest: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/manifest.webmanifest`,
  openGraph: {
    title: "Know Your Pill — Medication Education Made Visual",
    description:
      "Visual medicine guides with mechanism animations, timelines, side effect clarity, and safety direction.",
    siteName: "Know Your Pill",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Know Your Pill",
    description: "Medication education made visual.",
  },
};

export const viewport: Viewport = {
  // PWA/browser chrome colour — the brand teal (light-mode token
  // value), identical in both themes.
  themeColor: "#007677",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ "--font-playfair": playfair.style.fontFamily } as React.CSSProperties}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        {/* Skip-to-content — first focusable element on every page,
            so keyboard users can jump past the fixed navbar to <main>. */}
        <SkipToContentLink />

        {/* rel="license" — points crawlers and tools at the reuse terms
            page. Rendered once here in the root layout; React hoists it
            into <head> on every page. imgPath() makes the href
            basePath-aware for the GitHub Pages static export. */}
        <link rel="license" href={imgPath("/legal/terms")} />

        {/* Content-protection deterrent (cosmetic only — see module docs) */}
        <ContentProtection />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
