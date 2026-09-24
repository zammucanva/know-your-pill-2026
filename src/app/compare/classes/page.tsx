import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { ClassComparisonClient } from "@/components/kyp/sections/class-comparison/class-comparison-client";

/* ============================================================
   /compare/classes — Class Comparison / Choose by Concern
   (Stahl's Phase 5).
   ------------------------------------------------------------
   An educational comparison of how medications within a class
   DIFFER across clinically relevant concerns (weight/metabolic,
   sedation, prolactin, EPS…). NOT a prescribing algorithm and
   NOT a "best medication" selector: rows are registry order, no
   scoring, no ranking — every cell traces back verbatim to the
   medication's own documented profile, and missing data renders
   as "Data not available".

   Data-first architecture: this route consumes the normalized
   concern layer (src/lib/kyp/concerns) derived from the locked
   canonical registry — no medical data lives in this file.
   ============================================================ */

export const metadata: Metadata = {
  title: "Class Comparison · Know Your Pill",
  description:
    "Compare medications within a class across clinical concerns — weight and metabolic effects, sedation, prolactin, EPS, QT and more. Every value is documented data from the medication pages; nothing is scored or ranked.",
  keywords: [
    "antipsychotic comparison",
    "antidepressant comparison",
    "choose by concern",
    "medication side effects comparison",
    "weight gain antipsychotics",
    "prolactin antipsychotics",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Class Comparison — Choose by Concern · Know Your Pill",
    description:
      "How medications in a class differ across documented concerns — an educational comparison, not a prescribing algorithm.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function ClassComparisonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
              >
                <Link href="/study" className="hover:text-brand">
                  Study Mode
                </Link>
                <span aria-hidden>›</span>
                <Link href="/compare" className="hover:text-brand">
                  Compare
                </Link>
                <span aria-hidden>›</span>
                <span className="font-medium text-foreground">Class comparison</span>
              </nav>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Choose by concern
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                How do medications in the same class differ across the concerns
                that matter — weight and metabolic effects, sedation, prolactin,
                EPS, QT, monitoring burden? Pick a class, pick your concerns,
                and read the documented differences side by side. Every value is
                the medication&apos;s own reviewed data; nothing is scored,
                ranked or invented.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-8 max-w-3xl rounded-xl border border-brand/40 bg-brand-soft/20 p-5">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  <span>
                    This is an <strong>educational comparison</strong> — it shows
                    how medications <em>differ</em> across selected concerns so
                    you can inspect the differences yourself. It is not a
                    prescribing algorithm and never names a &ldquo;best&rdquo;
                    medication: rows appear in registry order, concerns carry
                    documented frequency bands instead of scores, and cells with
                    no documented data say &ldquo;Data not available&rdquo;.
                    Prescribing decisions belong with a clinician.
                  </span>
                </p>
              </div>
            </Reveal>

            <ClassComparisonClient />
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
