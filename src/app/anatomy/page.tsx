import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { AnatomyWorkspace } from "@/components/anatomy/anatomy-workspace";

/**
 * /anatomy: KYP 3D Anatomy. Server page inside the shared KYP shell
 * (Navbar, Footer, theme); the interactive viewer is a client island that
 * loads the 3D engine lazily.
 */
export const metadata: Metadata = {
  title: "3D Anatomy · Know Your Pill",
  description:
    "Explore the human body in 3D: select and isolate structures, explore the brain and nervous system, and jump to related Know Your Pill lessons.",
  openGraph: {
    title: "3D Anatomy · Know Your Pill",
    description: "An interactive 3D human anatomy atlas with brain mode and links to KYP lessons.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function AnatomyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main id="main-content" className="flex-1 pt-16">
        <header className="mx-auto w-full max-w-[96rem] px-4 pb-3 pt-4 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-brand">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden />
              <span aria-current="page" className="text-foreground">3D Anatomy</span>
            </nav>
            <h1
              className="font-serif font-semibold tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              3D Anatomy
            </h1>
          </div>
          <p className="mt-2 max-w-xl text-body-sm text-muted-foreground lg:mt-0 lg:pb-1 lg:text-right">
            Select any structure to inspect it, hide or isolate systems, and switch on Brain Mode to explore
            the nervous system. Related KYP lessons appear where they exist.
          </p>
        </header>

        <AnatomyWorkspace />
      </main>

      <Footer />
    </div>
  );
}
