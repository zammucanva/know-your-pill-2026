import * as React from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { EXPLANATION_COPY as EC, type PatientExplanation } from "@/lib/kyp/modes/explanation-copy";
import { ExplanationText } from "./explanation-text";
import type { LensBlock } from "@/lib/kyp/modes/types";
import { LensBlockView } from "./lens-blocks";

/**
 * Patient explanation for ONE medication. The same structure renders for every medication; what differs
 * is only which content exists and where it comes from. Every sentence is verbatim; each run of sentences
 * says whether it comes from the Patient Guide, was written for this medicine, is class-level wording, or
 * is standard template wording. Nothing here is reviewed and the text never says it is.
 *
 * Server Component (the personal interaction list is a client block passed as plain data).
 */

export function PatientExplainer({ drugName, explanation, interactions }: { drugName: string; explanation: PatientExplanation; interactions?: LensBlock | null }) {
  const e = explanation;
  return (
    <Section id="patient-education" className="bg-muted/20" data-patient-explainer="" data-level={e.level}>
      <Container>
        <SectionHeader eyebrow="Patient Education" title={EC.heading} description={`About ${drugName}. Read each part in order, or jump to a heading.`} tone="success" />
        <nav aria-label="In this section" className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a href="#pe-what" className="underline underline-offset-2">What it is</a>
          <a href="#pe-uses" className="underline underline-offset-2">What it is for</a>
          <a href="#pe-watch" className="underline underline-offset-2">What to watch for</a>
          <a href="#pe-others" className="underline underline-offset-2">Other medicines</a>
          <a href="#pe-ask" className="underline underline-offset-2">If anything is unclear</a>
        </nav>
        <p role="note" data-review-notice="" className="mt-4 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
          {EC.reviewNotice}
        </p>

        <div className="mt-8 space-y-10">
          <section id="pe-what" aria-labelledby="pe-what-h" className="scroll-mt-24">
            <h3 id="pe-what-h" className="text-h3">What this medicine is</h3>
            {e.level === "missing" ? (
              <p data-state="unavailable" className="mt-3 rounded-lg border border-border p-3 text-sm">
                {EC.unavailable}
              </p>
            ) : (
              <>
                {e.level === "template-only" && (
                  <p data-state="template-only" className="mt-3 rounded-lg border border-amber-500/40 p-3 text-sm">
                    {EC.templateOnly}
                  </p>
                )}
                <div className="mt-3">
                  <ExplanationText segments={e.plainWords} />
                </div>
                {e.summary.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold">{EC.summaryHeading}</h4>
                    <div className="mt-2">
                      <ExplanationText segments={e.summary} />
                    </div>
                  </div>
                )}
              </>
            )}
          </section>

          <section id="pe-uses" aria-labelledby="pe-uses-h" className="scroll-mt-24">
            <h3 id="pe-uses-h" className="text-h3">{EC.usesHeading}</h3>
            {e.uses.state === "listed" ? (
              <>
                <p className="mt-2 text-sm text-muted-foreground">{EC.usesIntro}</p>
                <ul data-uses="" className="mt-3 space-y-2">
                  {e.uses.items.map((u) => (
                    <li key={u.name} className="rounded-lg border border-border/70 p-3 text-sm">
                      <p>
                        <span className="font-medium">{u.name}</span> <span className="text-xs text-muted-foreground">({u.status})</span>
                      </p>
                      {u.plain && <p className="mt-1 text-muted-foreground">{u.plain}</p>}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p data-state={e.uses.state} className="mt-3 rounded-lg border border-border p-3 text-sm">
                {e.uses.state === "empty" ? EC.usesEmpty : EC.usesAbsent}
              </p>
            )}
          </section>

          {e.reminders.length > 0 && (
            <section id="pe-remember" aria-labelledby="pe-remember-h" className="scroll-mt-24">
              <h3 id="pe-remember-h" className="text-h3">{EC.remindersHeading}</h3>
              <div className="mt-3">
                <ExplanationText segments={e.reminders} />
              </div>
            </section>
          )}

          <section id="pe-watch" aria-labelledby="pe-watch-h" className="scroll-mt-24">
            <h3 id="pe-watch-h" className="text-h3">{EC.sideEffectsHeading}</h3>
            {e.sideEffects.length > 0 ? (
              <>
                <div className="mt-3">
                  <ExplanationText segments={e.sideEffects} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{EC.sideEffectsNote}</p>
              </>
            ) : (
              <p data-state="side-effects-none" className="mt-3 rounded-lg border border-border p-3 text-sm">
                {EC.sideEffectsNone}
              </p>
            )}
          </section>

          <section id="pe-others" aria-label="Other medicines" className="scroll-mt-24">
            {interactions ? <LensBlockView block={interactions} /> : null}
          </section>

          <section id="pe-ask" aria-labelledby="pe-ask-h" className="scroll-mt-24 rounded-lg border border-border/70 p-4">
            <h3 id="pe-ask-h" className="text-h3">{EC.askHeading}</h3>
            <p className="mt-2 text-sm">{EC.ask}</p>
          </section>
        </div>
      </Container>
    </Section>
  );
}

/** Shown above an authored Patient Guide so its source and review status are stated, as for every other medicine. */
export function PatientProvenanceNote() {
  return (
    <Container>
      <p role="note" data-provenance-note="" className="mt-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
        <span className="font-medium">{EC.origin["authored-guide"]}.</span> {EC.reviewNotice}
      </p>
    </Container>
  );
}
