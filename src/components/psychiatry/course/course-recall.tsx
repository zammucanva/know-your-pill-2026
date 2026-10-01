"use client";

import { ExternalLink, ArrowLeft, ArrowRight, Library } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Accordion } from "@/components/kyp/ui/accordion";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { PsychiatryCourse } from "./course-types";
import type { CategorisedReferences } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/** An adjacent course in the learner-facing curriculum order. */
export interface AdjacentCourseRef {
  slug: string;
  title: string;
  tagline: string;
  groupLetter: string;
  groupName: string;
}

/* ============================================================
   Lesson 6 (Active Recall layer, minus the shared
   ActiveRecallSection which the course view composes) —
   FAQ and clean user-facing references.

   FAQ reuses the shared <Accordion /> (the drug FAQ oracle)
   for accessibility; references use the drug numbered-row
   treatment with mono number chips and "Open source" links.
   ============================================================ */

/** Lesson 6 — FAQ (shared Accordion, drug FAQ oracle). */
export function CourseFaq({ course }: { course: PsychiatryCourse }) {
  if (course.faqs.length === 0) return null;
  const items = course.faqs.map((faq, i) => ({
    id: `faq-${i}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <Section id="faq">
      <Container width="narrow">
        <SectionHeader
          eyebrow="FAQ"
          title="The questions people actually ask."
          align="center"
        />
        <div className="mt-10">
          <Accordion
            type="single"
            collapsible
            defaultValue={items[0]?.id}
            items={items}
          />
        </div>
      </Container>
    </Section>
  );
}

/** Lesson 6 — references (clean, user-facing; provenance stays internal). */
export function CourseReferences({ course }: { course: PsychiatryCourse }) {
  const categories: { key: keyof CategorisedReferences; label: string }[] = [
    { key: "guidelines", label: "Guidelines" },
    { key: "textbooks", label: "Textbooks" },
    { key: "trials", label: "Landmark trials" },
    { key: "reviews", label: "Key reviews" },
    { key: "patientResources", label: "Patient resources" },
  ];
  const hasAny = categories.some(({ key }) => (course.references[key] as unknown[]).length > 0);
  if (!hasAny) return null;

  return (
    <Section id="references">
      <Container width="narrow">
        <SectionHeader
          eyebrow="References"
          title="Sources — clean and checkable."
          description={`KYP content review: ${course.lastReviewed}. Each course is an original rewrite of its mapped source chapter, supplemented by KYP-researched references (guidelines, trials, surveys) — every claim is internally mapped to these sources.`}
          align="start"
        />
        <div className="mt-10 space-y-6">
          {categories.map(({ key, label }) => {
            const refs = course.references[key] as { source: string; section?: string; url?: string }[];
            if (refs.length === 0) return null;
            return (
              <div key={key}>
                <p className="mb-3 text-overline text-brand-ink">{label}</p>
                <ul className="space-y-2">
                  {refs.map((reference, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs font-semibold text-muted-foreground">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-body-sm font-medium leading-snug text-foreground">
                          {reference.source}
                        </p>
                        {reference.section && (
                          <p className="mt-0.5 text-caption text-muted-foreground">{reference.section}</p>
                        )}
                        {reference.url && (
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-0.5 text-caption text-brand underline-offset-4 hover:underline"
                          >
                            Open source <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="rounded-xl border border-border/70 bg-muted/30 p-4 text-center">
            <p className="text-caption leading-relaxed text-muted-foreground">
              Educational content only — not medical advice. Clinical decisions belong to treating
              clinicians with their patients. Full provenance (per-claim source mapping, editions,
              review dates) is maintained internally in the KYP content registry.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   Curriculum continuation — the closed end of every course.
   Adjacency comes from the learner-facing curriculum order
   (same authority as the library: Q first, then A–P, R; tier
   order within groups) — computed on the server, never guessed.
   ============================================================ */

function AdjacentCard({
  neighbor,
  direction,
}: {
  neighbor: AdjacentCourseRef;
  direction: "prev" | "next";
}) {
  return (
    <Link href={`/psychiatry/${neighbor.slug}`} className="group block h-full">
      <CardPrimitive className="h-full" interactive>
        <CardBody className="flex h-full flex-col p-5">
          <p
            className={cn(
              "text-overline",
              direction === "next" ? "text-brand-ink" : "text-muted-foreground"
            )}
          >
            {direction === "next" ? "Next lesson" : "Previous lesson"}
          </p>
          <p className="mt-2.5 text-body font-semibold leading-snug text-foreground group-hover:text-brand">
            {neighbor.title}
          </p>
          <p className="mt-1.5 line-clamp-2 text-caption leading-relaxed text-muted-foreground">
            {neighbor.tagline}
          </p>
          <p className="mt-auto pt-4 text-caption text-muted-foreground/90">
            <span className="font-mono">{neighbor.groupLetter}.</span> {neighbor.groupName}
          </p>
        </CardBody>
      </CardPrimitive>
    </Link>
  );
}

/** Curriculum continuation block (id="next-course"). */
export function CourseNextStep({
  course,
  adjacent,
}: {
  course: PsychiatryCourse;
  adjacent: { prev: AdjacentCourseRef | null; next: AdjacentCourseRef | null };
}) {
  const hasAny = adjacent.prev || adjacent.next;
  return (
    <Section id="next-course" className="border-t border-border/60 bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Continue"
          title={hasAny ? "Where the curriculum goes next." : "You have reached the end."}
          tone="brand-ink"
          align="start"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {adjacent.prev ? (
            <AdjacentCard neighbor={adjacent.prev} direction="prev" />
          ) : (
            <Link href="/psychiatry/library" className="group block h-full">
              <CardPrimitive className="h-full" interactive>
                <CardBody className="flex h-full flex-col p-5">
                  <p className="text-overline text-muted-foreground">Start of the curriculum</p>
                  <p className="mt-2.5 inline-flex items-center gap-1.5 text-body font-semibold text-foreground group-hover:text-brand">
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Back to the Library
                  </p>
                  <p className="mt-1.5 text-caption leading-relaxed text-muted-foreground">
                    Browse all 109 lessons across the 18 clinical domains.
                  </p>
                </CardBody>
              </CardPrimitive>
            </Link>
          )}
          {adjacent.next ? (
            <AdjacentCard neighbor={adjacent.next} direction="next" />
          ) : (
            <Link href="/psychiatry/self-test" className="group block h-full">
              <CardPrimitive className="h-full" interactive>
                <CardBody className="flex h-full flex-col p-5">
                  <p className="text-overline text-brand-ink">Curriculum complete</p>
                  <p className="mt-2.5 inline-flex items-center gap-1.5 text-body font-semibold text-foreground group-hover:text-brand">
                    Test yourself <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </p>
                  <p className="mt-1.5 text-caption leading-relaxed text-muted-foreground">
                    719 authored self-test questions with explanations — mixed across the whole
                    curriculum.
                  </p>
                </CardBody>
              </CardPrimitive>
            </Link>
          )}
        </div>
        <p className="mt-6 text-caption text-muted-foreground">
          <Library className="mr-1 inline h-3 w-3" aria-hidden />
          Order follows the KYP Psychiatry curriculum —{" "}
          <Link
            href={`/psychiatry/library#group-${course.groupLetter}`}
            className="text-brand-ink underline underline-offset-4 hover:opacity-80"
          >
            {course.groupLetter}. {course.groupName}
          </Link>{" "}
          and onward.
        </p>
      </Container>
    </Section>
  );
}
