import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/kyp/theme-provider";

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
  icons: {
    icon: "/favicon.png",
    apple: "/logo-navy-512.png",
  },
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
