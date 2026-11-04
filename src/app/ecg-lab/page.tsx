import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { EcgLabIsland } from "@/components/ecg-lab/ecg-lab-island";

/**
 * /ecg-lab: calibrated ECG simulator with guided exercises, a rhythm challenge, virtual patients and
 * an academy. Server page inside the shared KYP shell; the lab itself is a client-only island.
 */
export const metadata: Metadata = {
  title: "ECG Lab · Know Your Pill",
  description:
    "Explore a calibrated, synthetic ECG: change rhythm, lead, paper speed and gain, measure intervals, and practise with guided exercises. Educational simulation, not for clinical use.",
  openGraph: {
    title: "ECG Lab · Know Your Pill",
    description: "A calibrated, synthetic ECG simulator with guided exercises and a rhythm challenge.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function EcgLabPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main id="main-content" className="flex-1 pt-16">
        <header className="mx-auto w-full max-w-[96rem] px-4 pb-4 pt-4 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-brand">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden />
              <span aria-current="page" className="text-foreground">ECG Lab</span>
            </nav>
            <h1
              className="font-serif font-semibold tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              ECG Lab
            </h1>
          </div>
          <p className="mt-2 max-w-xl text-body-sm text-muted-foreground lg:mt-0 lg:pb-1 lg:text-right">
            Read a calibrated, synthetic ECG, measure it by hand and practise. Simulation only, never for
            patient care.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[96rem] px-4 pb-12 sm:px-6 lg:px-8">
          <EcgLabIsland />
        </div>
      </main>

      <Footer />
    </div>
  );
}
