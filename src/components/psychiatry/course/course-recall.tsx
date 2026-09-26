"use client";

import { ExternalLink } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Accordion } from "@/components/kyp/ui/accordion";
import type { PsychiatryCourse } from "./course-types";
import type { CategorisedReferences } from "@/lib/kyp/data";

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
          description={`KYP content review: ${course.lastReviewed}. Every claim is internally mapped to these sources.`}
          align="start"
        />
        <div className="mt-10 space-y-6">
          {categories.map(({ key, label }) => {
            const refs = course.references[key] as { source: string; section?: string; url?: string }[];
            if (refs.length === 0) return null;
            return (
              <div key={key}>
                <p className="mb-3 text-overline text-brand">{label}</p>
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
