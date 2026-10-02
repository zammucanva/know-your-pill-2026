"use client";

import * as React from "react";
import { Info } from "lucide-react";
import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  evidenceGradeMeta,
  type EvidenceGrade,
} from "@/lib/kyp/data/psychiatry-courses/types";
import { clampSentences } from "@/lib/kyp/psychiatry-concept-visibility";

/* ============================================================
   Concept lesson template — shared atoms (redesign B).

   Visual contract (redesign F):
   - section headings are REAL TOPIC NAMES (h3 inside a lesson);
     the course layer's existing poetic lines render as the small
     lede paragraph under the heading, never as the heading itself
   - ONE card style and ONE callout style; border OR subtle
     shadow, never both
   - evidence grades: a small coloured dot + text label, with a
     single "i" tooltip explaining the scale — replacing the pill
     row, the per-card Established/Supported/Proposed pills and
     the "How to read the grades" legend
   ============================================================ */

const gradeDotClass: Record<EvidenceGrade, string> = {
  established: "bg-success",
  supported: "bg-brand",
  proposed: "bg-warning",
  uncertain: "bg-muted-foreground/60",
};

/** Small dot + label evidence grade (redesign F). */
export function EvidenceGradeDot({ grade, className }: { grade: EvidenceGrade; className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", className)}
      title={`${evidenceGradeMeta[grade].label} — ${evidenceGradeMeta[grade].description}`}
    >
      <span aria-hidden className={cn("h-2 w-2 rounded-full", gradeDotClass[grade])} />
      <span className="text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
        {evidenceGradeMeta[grade].label}
      </span>
      <span className="sr-only">{`Evidence grade: ${evidenceGradeMeta[grade].label}. ${evidenceGradeMeta[grade].description}`}</span>
    </span>
  );
}

/** The single "i" affordance that explains the grading scale —
 *  a collapsed native <details> (declutter mission): the scale
 *  legend renders ONLY when opened, works with keyboard (Enter /
 *  Space) and touch, and is one legend for the whole template. */
export function GradeScaleInfo() {
  return (
    <details className="group relative inline-flex align-middle">
      <summary
        aria-label="What the evidence grades mean"
        title="What the evidence grades mean"
        className="kyp-touch-full inline-flex cursor-pointer list-none items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden"
      >
        <Info className="h-2.5 w-2.5" aria-hidden />
      </summary>
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-64 -translate-x-1/2 rounded-lg border border-border bg-card p-3 text-left text-caption leading-relaxed text-foreground/85 shadow-[var(--shadow-lift)] group-open:block"
      >
        <span className="mb-1 block font-semibold text-foreground">Evidence grades</span>
        {(Object.keys(evidenceGradeMeta) as EvidenceGrade[]).map((g) => (
          <span key={g} className="mb-1 flex items-start gap-1.5 last:mb-0">
            <span aria-hidden className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", gradeDotClass[g])} />
            <span>
              <span className="font-medium text-foreground">{evidenceGradeMeta[g].label}:</span>{" "}
              {evidenceGradeMeta[g].description}
            </span>
          </span>
        ))}
      </div>
    </details>
  );
}

export interface ConceptSectionHeaderProps {
  /** Real topic name (renders as the h3 heading). */
  title: string;
  /** The course layer's existing line, rendered as the small lede. */
  lede?: string;
  /** Lesson eyebrow context, e.g. "Lesson 2". */
  eyebrow?: string;
  /** Optional evidence grade shown once beside the title. */
  grade?: EvidenceGrade;
  /** Right-aligned action (e.g. Print revision sheet). */
  action?: React.ReactNode;
  id?: string;
}

/**
 * Concept section header: h3 real-topic-name + small lede
 * (redesign F — the poetic line moves under the heading).
 */
export function ConceptSectionHeader({
  title,
  lede,
  eyebrow,
  grade,
  action,
  id,
}: ConceptSectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <div className="min-w-0">
        {eyebrow && (
          <p className="text-overline text-brand-ink">{eyebrow}</p>
        )}
        <h3 id={id} className="mt-1 text-h3 text-foreground">
          {title}
          {grade && (
            <>
              {" "}
              <EvidenceGradeDot grade={grade} className="ml-1 align-middle" />
              <GradeScaleInfo />
            </>
          )}
        </h3>
        {lede && (
          <p className="mt-1.5 max-w-[68ch] text-caption leading-relaxed text-muted-foreground">
            {lede}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/* ============================================================
   ConceptAccordion — accessible progressive disclosure
   (redesign C). Radix Accordion semantics (button trigger,
   aria-expanded, aria-controls, Enter/Space) with the first
   item open by default and Expand all / Collapse all controls.
   ============================================================ */

export interface ConceptAccordionEntry {
  id: string;
  /** Trigger text (the item's own title). */
  title: React.ReactNode;
  /** Optional small meta on the trigger row. */
  meta?: React.ReactNode;
  content: React.ReactNode;
}

export function ConceptAccordion({
  entries,
  label,
  className,
}: {
  entries: ConceptAccordionEntry[];
  /** Accessible Name for the accordion group. */
  label: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState<string[]>(() =>
    entries.length > 0 ? [entries[0].id] : []
  );
  const allOpen = open.length === entries.length;
  return (
    <div className={className}>
      {entries.length > 1 && (
        <div className="mb-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => setOpen(entries.map((e) => e.id))}
            className="rounded-md border border-border/70 bg-card px-2.5 py-1 text-caption font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={() => setOpen(allOpen ? [entries[0].id] : [])}
            className="rounded-md border border-border/70 bg-card px-2.5 py-1 text-caption font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {allOpen ? "Collapse all" : "Collapse all"}
          </button>
        </div>
      )}
      <AccordionPrimitive
        type="multiple"
        value={open}
        onValueChange={setOpen}
        aria-label={label}
        className="w-full"
      >
        {entries.map((entry) => (
          <AccordionItemPrimitive
            key={entry.id}
            value={entry.id}
            className="border-b border-border/70 last:border-b-0"
          >
            <AccordionTriggerPrimitive className="py-4 text-left text-body-sm font-semibold leading-snug hover:no-underline hover:text-brand [&>svg]:h-4 [&>svg]:w-4">
              <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4">
                <span className="min-w-0">{entry.title}</span>
                {entry.meta && <span className="shrink-0">{entry.meta}</span>}
              </span>
            </AccordionTriggerPrimitive>
            <AccordionContentPrimitive className="pb-5 leading-relaxed text-muted-foreground">
              {entry.content}
            </AccordionContentPrimitive>
          </AccordionItemPrimitive>
        ))}
      </AccordionPrimitive>
    </div>
  );
}

/* ============================================================
   InlineExpander — "More" / "+N more" disclosure for shortened
   display text (redesign C/D). Full text always remains in the
   DOM (visually hidden) for no-JS and print consumers.
   ============================================================ */

export function InlineExpander({
  short,
  rest,
  label = "More",
  className,
}: {
  short: React.ReactNode;
  rest: React.ReactNode;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const restId = React.useId();
  return (
    <span className={className}>
      {short}
      {open ? (
        <span id={restId}>{rest}</span>
      ) : (
        <>
          <span id={restId} className="sr-only concept-inline-rest">{rest}</span>
          <button
            type="button"
            aria-expanded={false}
            aria-controls={restId}
            onClick={() => setOpen(true)}
            className="ml-1 inline text-caption font-medium text-brand-ink underline underline-offset-2 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {label}
          </button>
        </>
      )}
    </span>
  );
}

/* ============================================================
   ConceptProse — the wall guard (declutter mission).

   Long prose fields render their first ~`maxWords` words as
   whole sentence/clause segments; the exact remainder sits behind
   an inline "More" disclosure (and stays in the DOM for no-JS
   and print). The clamp is a pure re-slicing of the source —
   visible + rest reconstructs the text (pinned by tests).
   ============================================================ */

export function ConceptProse({
  text,
  maxWords = 100,
  className,
}: {
  text: string;
  maxWords?: number;
  className?: string;
}) {
  const { visible, rest } = clampSentences(text, maxWords);
  if (!rest) {
    return <span className={className}>{visible}</span>;
  }
  return (
    <span className={className}>
      {visible}{" "}
      <InlineExpander short="" rest={rest} label="More" />
    </span>
  );
}
