import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, GitCompare, Zap } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { getPoolStats } from "@/lib/kyp/custom-test/engine";
import {
  drugs,
  getAllTaxonomyClassIds,
  getTaxonomyClass,
  getTaxonomyAncestry,
  drugTaxonomyClasses,
  DRUG_TAXONOMY_CATEGORY_HREF,
  DRUG_TAXONOMY_FAMILY_HREF,
} from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";

/**
 * /drugs/class/[classId] — medication class collection page.
 *
 * One page per antidepressant class (SSRIs, SNRIs, NDRIs, NaSSAs, TCAs),
 * derived entirely from the canonical drug registry through
 * src/lib/kyp/data/drug-taxonomy.ts. No medication data is duplicated
 * here — members are references to registry entries, so a registry
 * change re-flows these pages automatically at build time.
 *
 * Taxonomy navigation is bidirectional:
 *   - Breadcrumb: Medication Library → Psychiatry → Antidepressants → class
 *   - "Other classes" rows link sideways to sibling collections
 *   - Medication rows link forward into each drug guide
 *
 * All internal links go through next/link, which prepends the GitHub
 * Pages basePath automatically.
 */

type ClassId = string;

// All valid class ids come from generateStaticParams at build time.
// Unknown ids are rejected with a true 404.
export const dynamicParams = false;

export function generateStaticParams(): { classId: ClassId }[] {
  return getAllTaxonomyClassIds().map((classId) => ({ classId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ classId: ClassId }>;
}): Promise<Metadata> {
  const { classId } = await params;
  const cls = getTaxonomyClass(classId);
  if (!cls) return { title: "Class not found · Know Your Pill" };

  const ancestry = getTaxonomyAncestry(classId);
  const familyName = ancestry?.family.name ?? "Antidepressants";
  const title = `${cls.label} · ${familyName} · Know Your Pill`;
  return {
    title,
    description: `${cls.fullName} — ${cls.medications.length} medication ${
      cls.medications.length === 1 ? "guide" : "guides"
    }: ${cls.medications.map((m) => m.genericName).join(", ")}.`,
    keywords: [cls.label, cls.classLabel, cls.fullName, ...cls.medications.map((m) => m.genericName)],
    openGraph: {
      title,
      description: `${cls.fullName} medication guides in the KYP Medication Library.`,
      type: "website",
      siteName: "Know Your Pill",
    },
  };
}

/** Registry position (1-based) — matches the global 01–12 numbering in /drugs. */
const drugNumber = (slug: string): number =>
  drugs.findIndex((d) => d.slug === slug) + 1;

/* ============================================================
   Class at a glance (NOW-N7a) — a compare-able attribute list
   built ENTIRELY from existing per-drug data. Aggregation only:
   every cell is a verbatim value from the locked drug registry —
   no new medical claims are synthesised here.
   ============================================================ */

interface AttributeRow {
  label: string;
  values: string[];
}

/** First FDA-approved indication name (fallback: first indication). */
function primaryUse(drug: Drug): string {
  const approved = drug.indications.find((i) => i.status === "fda-approved");
  return (approved ?? drug.indications[0])?.name ?? "—";
}

function classAttributeRows(medications: Drug[]): AttributeRow[] {
  return [
    {
      label: "Primary target",
      values: medications.map((m) => m.mechanism.molecularTarget),
    },
    {
      label: "Half-life",
      values: medications.map((m) => m.mechanism.halfLife),
    },
    {
      label: "Metabolism",
      values: medications.map((m) => m.mechanism.metabolism),
    },
    {
      label: "Used for",
      values: medications.map((m) => primaryUse(m)),
    },
    {
      label: "Common side effects",
      values: medications.map((m) =>
        m.commonSideEffects.slice(0, 3).map((e) => e.name).join(", ")
      ),
    },
    {
      label: "Watch (monitoring)",
      values: medications.map((m) =>
        m.monitoring.slice(0, 2).map((p) => p.parameter).join(", ")
      ),
    },
  ];
}

export default async function DrugClassPage({
  params,
}: {
  params: Promise<{ classId: ClassId }>;
}) {
  const { classId } = await params;
  const cls = getTaxonomyClass(classId);
  if (!cls) notFound();

  const ancestry = getTaxonomyAncestry(classId);
  const categoryName = ancestry?.category.name ?? "Psychiatry";
  const familyName = ancestry?.family.name ?? "Antidepressants";
  const otherClasses = drugTaxonomyClasses.filter((c) => c.id !== cls.id);
  const classQuestionCount = cls.medications.reduce(
    (sum, m) => sum + (m.microQuizzes?.length || 0),
    0
  );
  // Real availability for a class test — computed from the same
  // deterministic engine the Custom Test builder uses (build-time,
  // server-side; the number shown is the real unique pool size).
  const classPool = getPoolStats(cls.medications.map((m) => m.slug));
  const attributeRows = classAttributeRows(cls.medications);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed" className="border-b border-border/30">
          <Container>
            {/* Taxonomy breadcrumb — every level above the current class
                links to the collection that browses it (backward
                navigation back up to the Medication Library). */}
            <div className="mb-6">
              <LearningPath
                path={["Medication Library", categoryName, familyName, cls.label]}
                links={[
                  "/drugs",
                  DRUG_TAXONOMY_CATEGORY_HREF,
                  DRUG_TAXONOMY_FAMILY_HREF,
                  undefined,
                ]}
              />
            </div>

            <Reveal>
              <p className="text-overline text-brand mb-2">
                {cls.classLabel} · {cls.medications.length}{" "}
                {cls.medications.length === 1 ? "medication" : "medications"}
              </p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
              >
                {cls.label}
              </h1>
              <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                {cls.fullNamePlural} within the {familyName} family. Each guide
                below follows the same structure — mechanism of action, receptor
                pharmacology, clinical indications, side effects with
                management, monitoring parameters, drug interactions, and a
                real clinical case.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/drugs"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  All medications
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {classPool.total > 0 && (
                  <Link
                    href={`/quiz/custom?class=${cls.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    <Zap className="h-4 w-4" />
                    Test this class
                    <span className="text-sm font-normal opacity-80">
                      · {classPool.total} questions
                    </span>
                  </Link>
                )}
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ===== MEDICATION LIST ===== */}
        <Section spacing="relaxed">
          <Container>
            <div className="space-y-px">
              {cls.medications.map((drug) => {
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
                        <h2 className="font-serif text-lg font-semibold text-foreground">
                          {drug.genericName}
                        </h2>
                        <p className="mt-1 line-clamp-2 max-w-2xl text-body-sm text-muted-foreground/70 leading-relaxed">
                          {drug.tagline}
                        </p>
                        <p className="mt-1.5 text-xs text-muted-foreground/50">
                          {drug.brandNames.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                      <div className="hidden shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground/60 sm:flex">
                        <span>{drug.estimatedReadTime}</span>
                        <span>{questionCount} practice questions</span>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1 sm:mt-0" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ===== CLASS AT A GLANCE (NOW-N7a) ===== */}
        <Section
          id="at-a-glance"
          spacing="relaxed"
          className="border-t border-border/30"
        >
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-overline text-brand mb-3 flex items-center gap-2">
                    <GitCompare className="h-3.5 w-3.5" aria-hidden />
                    Class at a glance
                  </p>
                  <h2
                    className="font-serif font-semibold tracking-[-0.02em] text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                  >
                    Compare the {cls.label} side by side
                  </h2>
                  <p className="mt-4 text-body-sm text-muted-foreground leading-relaxed">
                    All {cls.medications.length} {cls.label} members share the
                    class mechanism — {cls.fullName}. The differences that
                    matter clinically are below, aggregated from each
                    medication&apos;s own guide.
                  </p>
                </div>
                {classPool.total > 0 && (
                  <Link
                    href={`/quiz/custom?class=${cls.id}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/60"
                  >
                    <Zap className="h-4 w-4" />
                    Test this class · {classPool.total}
                  </Link>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 overflow-x-auto kyp-scroll rounded-xl border border-border/50">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <caption className="sr-only">
                    {cls.label} members compared on mechanism target,
                    half-life, metabolism, primary use, common side effects
                    and monitoring
                  </caption>
                  <thead>
                    <tr className="border-b border-border/60">
                      <th scope="col" className="p-3 text-left text-overline text-muted-foreground">
                        Attribute
                      </th>
                      {cls.medications.map((m) => (
                        <th
                          key={m.slug}
                          scope="col"
                          className="p-3 text-left"
                        >
                          <Link
                            href={`/drugs/${m.slug}`}
                            className="text-overline text-brand transition-colors hover:text-brand/80"
                          >
                            {m.genericName}
                          </Link>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {attributeRows.map((row, ri) => (
                      <tr
                        key={row.label}
                        className={ri % 2 === 1 ? "bg-muted/10" : undefined}
                      >
                        <th
                          scope="row"
                          className="border-b border-border/30 p-3 text-left text-xs font-semibold text-foreground"
                        >
                          {row.label}
                        </th>
                        {row.values.map((value, vi) => (
                          <td
                            key={vi}
                            className="border-b border-border/30 p-3 align-top text-xs leading-relaxed text-muted-foreground"
                          >
                            {value || "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/60">
                Aggregated from each medication&apos;s locked data — values are
                quoted verbatim from their guides, with no new claims.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* ===== OTHER CLASSES — sideways taxonomy navigation ===== */}
        <Section spacing="relaxed" className="border-t border-border/30 bg-muted/10">
          <Container>
            <Reveal>
              <p className="text-overline text-muted-foreground mb-2">
                {familyName} · {otherClasses.length + 1} classes
              </p>
              <h2
                className="font-serif font-semibold tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Other {familyName.toLowerCase()} classes
              </h2>
            </Reveal>

            <div className="mt-10 space-y-px">
              {otherClasses.map((other) => (
                <Reveal key={other.id}>
                  <Link
                    href={`/drugs/class/${other.id}`}
                    className="group flex items-start gap-6 border-b border-border/15 py-5 transition-all last:border-0 hover:pl-2 sm:items-center"
                  >
                    <span className="w-16 shrink-0 pt-1 font-mono text-xs text-muted-foreground/40 sm:pt-0">
                      {other.classLabel}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {other.label}
                      </h3>
                      <p className="mt-1 text-body-sm text-muted-foreground/70 leading-relaxed">
                        {other.fullName}
                      </p>
                      <p className="mt-1.5 text-xs text-muted-foreground/50">
                        {other.medications.map((m) => m.genericName).join(" · ")}
                      </p>
                    </div>
                    <div className="hidden shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground/60 sm:flex">
                      <span>
                        {other.medications.length}{" "}
                        {other.medications.length === 1 ? "medication" : "medications"}
                      </span>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1 sm:mt-0" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
