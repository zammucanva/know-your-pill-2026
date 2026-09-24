"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileQuestion, Quote } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import type { PsychiatryCourse } from "./course-types";
import type { CategorisedReferences } from "@/lib/kyp/data";

/* ============================================================
   Lesson 6 (Active Recall layer, minus the shared
   ActiveRecallSection which the course view composes) —
   FAQ and clean user-facing references.
   ============================================================ */

/** Lesson 6 — FAQ (expandable disclosure cards). */
export function CourseFaq({ course }: { course: PsychiatryCourse }) {
  if (course.faqs.length === 0) return null;
  return (
    <Section id="faq">
      <Container width="narrow">
        <SectionHeader
          eyebrow="FAQ"
          title="The questions people actually ask."
          align="start"
        />
        <div className="mt-8 space-y-2">
          {course.faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FaqItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId();
  return (
    <div className="rounded-xl border border-border/70 bg-card">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex min-w-0 items-start gap-2">
          <FileQuestion className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
          <span className="text-sm font-medium leading-snug text-foreground">{question}</span>
        </span>
        <span
          aria-hidden
          className="mt-0.5 shrink-0 text-muted-foreground transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          ▾
        </span>
      </button>
      {open && (
        <div id={panelId} className="border-t border-border/50 px-4 py-3">
          <p className="text-xs leading-relaxed text-foreground/80">{answer}</p>
        </div>
      )}
    </div>
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
    <Section id="references" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="References"
          title="Sources — clean and checkable."
          description={`KYP content review: ${course.lastReviewed}. Every claim is internally mapped to these sources.`}
          align="start"
        />
        <div className="mt-8 space-y-5">
          {categories.map(({ key, label }) => {
            const refs = course.references[key] as { source: string; section?: string; url?: string }[];
            if (refs.length === 0) return null;
            return (
              <div key={key}>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">{label}</p>
                <ul className="mt-2 space-y-1.5">
                  {refs.map((reference, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                      <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand/50" aria-hidden />
                      <span>
                        {reference.source}
                        {reference.url && (
                          <>
                            {" "}
                            <a
                              href={reference.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 font-medium text-brand hover:underline"
                            >
                              source
                              <ExternalLink className="h-2.5 w-2.5" aria-hidden />
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <p className="rounded-lg border border-border/60 bg-card px-3 py-2 text-[0.65rem] leading-relaxed text-muted-foreground">
            <Quote className="mr-1 inline h-3 w-3 -mt-0.5" aria-hidden />
            Educational content only — not medical advice. Clinical decisions belong to treating
            clinicians with their patients. Full provenance (per-claim source mapping, editions,
            review dates) is maintained internally in the KYP content registry.
          </p>
        </div>
      </Container>
    </Section>
  );
}
