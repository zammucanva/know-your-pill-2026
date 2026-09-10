import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs } from "@/lib/kyp/data";

/**
 * /medicine — Medicine information hub.
 *
 * Information-first presentation of the 12 canonical medicines:
 * what each medicine is, what it treats, and how it works — in
 * plain language — before any exam- or study-oriented framing.
 *
 * All content is derived from the canonical drug registry's
 * patient-facing fields (patientMode, indications, brandNames).
 * No second medication array, no new medical claims.
 */

export const metadata: Metadata = {
  title: "Medicine · Know Your Pill",
  description:
    "Plain-language medicine information — what each of the 12 psychiatric medicines is, what it treats, and how it works, with full guides covering side effects, timelines, and safety.",
  keywords: [
    "medicine information",
    "antidepressant guides",
    "how SSRIs work",
    "medication side effects",
    "patient education",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Medicine · Know Your Pill",
    description:
      "Plain-language medicine information for patients, caregivers, and students.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

/** Class groups derived from the registry's natural order. */
const classGroups = Array.from(new Set(drugs.map((d) => d.drugClassLabel)));

export default function MedicinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <p className="text-overline text-brand mb-6">Medicine</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
              >
                Medicine
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Information first. What each medicine is, what it treats, and
                how it works — in plain language, before anything else. Every
                entry opens a full guide with side effects, what to expect
                week by week, and safety information.
              </p>
            </Reveal>

            {/* Real stats — one inline line, no cards */}
            <Reveal delay={0.16}>
              <p className="mt-12 text-sm text-muted-foreground">
                <span className="font-serif text-lg font-bold text-foreground">
                  {drugs.length}
                </span>{" "}
                medicines ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">
                  {classGroups.length}
                </span>{" "}
                classes · full guides with timelines, side effects, and
                patient counselling
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* ===== MEDICINE LIST (information-first) ===== */}
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
                  <p className="text-overline text-muted-foreground mb-2">
                    {classLabel} · {group.length}{" "}
                    {group.length === 1 ? "medicine" : "medicines"}
                  </p>
                  <h2
                    className="mb-10 font-serif font-semibold tracking-[-0.02em] text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                  >
                    {fullName}
                  </h2>
                </Reveal>

                <div className="space-y-px">
                  {group.map((drug) => (
                    <Reveal key={drug.slug}>
                      <Link
                        href={`/drugs/${drug.slug}`}
                        className="group flex items-start gap-6 border-b border-border/15 py-6 transition-all last:border-0 hover:pl-2"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h3 className="font-serif text-xl font-semibold text-foreground">
                              {drug.genericName}
                            </h3>
                            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground/60">
                              {drug.drugClassLabel}
                            </span>
                          </div>
                          <p className="mt-2 max-w-3xl text-body text-muted-foreground/80 leading-relaxed">
                            {drug.patientMode?.tagline ?? drug.tagline}
                          </p>
                          <p className="mt-2.5 text-xs text-muted-foreground/50">
                            Treats:{" "}
                            {drug.indications
                              .slice(0, 3)
                              .map((i) => i.name)
                              .join(", ")}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground/50">
                            Brands: {drug.brandNames.slice(0, 4).join(" · ")}
                          </p>
                        </div>
                        <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </Container>
            </Section>
          );
        })}

        {/* ===== PATIENT GUIDANCE ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <h2
                  className="font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Reading a medicine guide
                </h2>
                <p className="mt-4 text-body text-muted-foreground leading-relaxed">
                  Each full guide explains the medicine the same way: how it
                  works in the brain, what it is approved to treat, what side
                  effects to expect in the first weeks and which ones fade,
                  what to monitor, and what to do in an emergency. The
                  information is the same guide your doctor reads — written
                  so you can actually use it.
                </p>
                <p className="mt-4 text-body-sm text-muted-foreground/70 leading-relaxed">
                  Medicine guides are education, not prescriptions. Decisions
                  about starting, stopping, or changing any medicine belong
                  with your clinician — and if you are in crisis, use the
                  emergency help below.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/#emergency"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-emergency/30 bg-emergency-soft/60 px-4 py-2.5 text-sm font-semibold text-emergency transition-colors hover:bg-emergency/10"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                Emergency help
              </Link>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
