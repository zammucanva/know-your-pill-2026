import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs } from "@/lib/kyp/data";

/**
 * /drugs — Medication Library index.
 *
 * The primary browse surface for KYP's 12 canonical psychiatric
 * medications, derived entirely from the canonical drug registry
 * (src/lib/kyp/data/drugs/index.ts) — never a second medication array.
 *
 * Class groups are computed from the registry's own drugClassLabel
 * order (SSRI → SNRI → NDRI → NaSSA → TCA), so a registry change
 * re-flows this page automatically.
 */

export const metadata: Metadata = {
  title: "Medication Library · Know Your Pill",
  description:
    "Twelve psychiatric medications, structured the same way — mechanism, receptors, indications, side effects, monitoring, interactions, and clinical cases. Browse the full KYP medication library.",
  keywords: [
    "medication library",
    "psychiatric medications",
    "SSRI",
    "SNRI",
    "TCA",
    "antidepressants",
    "pharmacology",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Medication Library · Know Your Pill",
    description:
      "Twelve psychiatric medications, structured the same way — from mechanism to clinical cases.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

/** Class groups derived from the registry's natural order. */
const classGroups = Array.from(new Set(drugs.map((d) => d.drugClassLabel)));

/** Registry position (1-based) — used for the global 01–12 numbering.
 *  Groups and rows both follow registry order, so this matches the visual order. */
const drugNumber = (slug: string): number =>
  drugs.findIndex((d) => d.slug === slug) + 1;

const totalQuestions = drugs.reduce(
  (sum, d) => sum + (d.microQuizzes?.length || 0),
  0
);

export default function MedicationLibraryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <p className="text-overline text-brand mb-6">Medication Library</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
              >
                Medication Library
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Twelve psychiatric medications, structured the same way. Every
                guide covers mechanism of action, receptor pharmacology,
                clinical indications, side effects with management, monitoring
                parameters, drug interactions, patient education, and a real
                clinical case.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Practice MCQs
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Real stats — one inline line, no cards */}
            <Reveal delay={0.2}>
              <p className="mt-12 text-sm text-muted-foreground">
                <span className="font-serif text-lg font-bold text-foreground">
                  {drugs.length}
                </span>{" "}
                medications ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">
                  {classGroups.length}
                </span>{" "}
                classes ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">
                  {totalQuestions}
                </span>{" "}
                practice questions
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* ===== CLASS-GROUPED MEDICATION LIST ===== */}
        {classGroups.map((classLabel, gi) => {
          const group = drugs.filter((d) => d.drugClassLabel === classLabel);
          const fullName = group[0]?.drugClassFullName ?? classLabel;

          return (
            <Section
              key={classLabel}
              spacing="relaxed"
              className={
                gi === 0
                  ? "border-t border-border/30"
                  : "border-t border-border/30 bg-muted/10"
              }
            >
              <Container>
                <Reveal>
                  <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-overline text-muted-foreground mb-2">
                        {classLabel} · {group.length}{" "}
                        {group.length === 1 ? "medication" : "medications"}
                      </p>
                      <h2
                        className="font-serif font-semibold tracking-[-0.02em] text-foreground"
                        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                      >
                        {fullName}
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="space-y-px">
                  {group.map((drug) => {
                    const questionCount = drug.microQuizzes?.length || 0;
                    return (
                      <Reveal key={drug.slug}>
                        <Link
                          href={`/drugs/${drug.slug}`}
                          className="group flex items-start gap-6 border-b border-border/15 py-5 transition-all last:border-0 hover:pl-2 sm:items-center"
                        >
                          <span className="w-8 shrink-0 pt-1 font-mono text-xs text-muted-foreground/30 sm:pt-0">
                            {String(drugNumber(drug.slug)).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-serif text-lg font-semibold text-foreground">
                              {drug.genericName}
                            </h3>
                            <p className="mt-1 line-clamp-2 max-w-2xl text-body-sm text-muted-foreground/70 leading-relaxed">
                              {drug.tagline}
                            </p>
                            <p className="mt-1.5 text-xs text-muted-foreground/50">
                              {drug.brandNames.slice(0, 3).join(" · ")}
                            </p>
                          </div>
                          <div className="hidden shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground/60 sm:flex">
                            <span>{drug.estimatedReadTime}</span>
                            <span>
                              {questionCount} practice questions
                            </span>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1 sm:mt-0" />
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              </Container>
            </Section>
          );
        })}

        {/* ===== BOTTOM CTA ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border/40 pb-10">
                <div className="max-w-xl">
                  <h2
                    className="font-serif font-semibold tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    Read one. Then test yourself on it.
                  </h2>
                  <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                    Every medication guide embeds practice questions after key
                    sections. The Practice hub pulls all {totalQuestions} of
                    them into one place.
                  </p>
                </div>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Practice MCQs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
