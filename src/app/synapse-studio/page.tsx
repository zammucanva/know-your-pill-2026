import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { SynapseStudio } from "@/components/synapse/synapse-studio";
import { STUDIO_DRUG_COUNT } from "@/lib/kyp/synapse-studio";

/**
 * /synapse-studio: labelled 2D brain and synapse animations for any
 * medication in the studio library. Server page inside the shared KYP shell;
 * the engine is a client island that loads its scripts on demand.
 */
export const metadata: Metadata = {
  title: "Synapse Studio · Know Your Pill",
  description:
    "Pick a medication and watch a labelled 2D animation of where it acts in the brain and what happens at the synapse. Educational schematic, not medical advice.",
  openGraph: {
    title: "Synapse Studio · Know Your Pill",
    description: "Labelled 2D animations of how medications act in the brain and at the synapse.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function SynapseStudioPage() {
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
              <span aria-current="page" className="text-foreground">Synapse Studio</span>
            </nav>
            <h1
              className="font-serif font-semibold tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Synapse Studio
            </h1>
          </div>
          <p className="mt-2 max-w-xl text-body-sm text-muted-foreground lg:mt-0 lg:pb-1 lg:text-right">
            Search any of {STUDIO_DRUG_COUNT} medications and watch where it acts in the brain, then zoom into
            the synapse. Every part is named on screen.
          </p>
        </header>

        <div className="mx-auto w-full max-w-[96rem] px-4 pb-12 sm:px-6 lg:px-8">
          <SynapseStudio />
        </div>
      </main>

      <Footer />
    </div>
  );
}
