import * as React from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { cn } from "@/lib/utils";
import { EXPLANATION_COPY as EC, type PatientExplanation } from "@/lib/kyp/modes/explanation-copy";
import type { LensBlock } from "@/lib/kyp/modes/types";
import type { EvidenceClaimView } from "@/lib/kyp/evidence/types";
import { PART_CATEGORIES, PART_ORDER, PART_TITLE, partStates, questionsFor, usesStatedInWhat, type PartId, type PartState } from "@/lib/kyp/evidence/patient-sections";
import { ExplanationText } from "./explanation-text";
import { EvidenceClaimCards } from "./evidence-claims";
import { LensBlockView } from "./lens-blocks";

/**
 * Patient explanation for ONE medication, in nine parts that are the same for every medication:
 * what it is, what it is used for, how to take it, precautions, side effects, other medicines,
 * when to get help, questions to ask, and sources. What differs is only which parts have supported
 * content, and the page says which: every part carries a state chip, and a part with nothing supported
 * says so and who to ask. Nothing is reviewed, and the page never says it is.
 *
 * Server Component (the personal interaction list is a client block passed as plain data).
 */

const chipTone: Record<PartState, string> = {
  "authored-guide": "border-success/50",
  "source-backed": "border-sky-500/50",
  "registry-wording": "border-border",
  "standard-wording": "border-amber-500/50",
  "general-direction": "border-border",
  unavailable: "border-dashed border-amber-500/60",
};

function PartHeader({ id, state }: { id: PartId; state: PartState }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <h3 id={`pe-${id}-h`} className="text-h3">
        {PART_TITLE[id]}
      </h3>
      <span data-part-state={state} className={cn("rounded-full border px-2 py-0.5 text-xs", chipTone[state])}>
        {EC.part.chip[state]}
      </span>
    </div>
  );
}

function Unavailable({ part }: { part: keyof typeof EC.part.unavailable }) {
  return (
    <p data-state="unavailable" className="mt-3 rounded-lg border border-dashed border-amber-500/60 p-3 text-sm">
      {EC.part.unavailable[part]}
    </p>
  );
}

export function PatientExplainer({
  drugName,
  explanation,
  interactions,
  evidence = [],
  hasGuide = false,
}: {
  drugName: string;
  explanation: PatientExplanation;
  interactions?: LensBlock | null;
  evidence?: EvidenceClaimView[];
  hasGuide?: boolean;
}) {
  const e = explanation;
  const claims = evidence.map((v) => v.claim);
  const statement = interactions && interactions.kind === "patient-interactions" ? interactions.statement?.origin ?? "missing" : "missing";
  const names = interactions && interactions.kind === "patient-interactions" ? interactions.names.length : 0;
  const states = partStates({ explanation: e, claims, hasGuide, interactionsStatement: statement, interactionNames: names });
  const forPart = (p: PartId) => evidence.filter((v) => PART_CATEGORIES[p].includes(v.claim.category));
  const questions = questionsFor(states);
  const distinctSources = Array.from(new Map(evidence.map((v) => [v.source.identifier, v.source])).values());

  return (
    <Section id="patient-education" className="bg-muted/20" data-patient-explainer="" data-level={e.level}>
      <Container>
        <SectionHeader eyebrow="Patient Education" title={EC.heading} description={`About ${drugName}. Nine short parts, in the same order for every medicine. Each part says where its information comes from, or that none is available.`} tone="success" />
        <nav aria-label="In this section" className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {PART_ORDER.map((p) => (
            <a key={p} href={`#pe-${p}`} className="underline underline-offset-2">
              {PART_TITLE[p]}
            </a>
          ))}
        </nav>
        <p role="note" data-review-notice="" className="mt-4 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
          {EC.reviewNotice}
        </p>
        <details data-legend="" className="mt-3 text-sm">
          <summary className="cursor-pointer underline underline-offset-2">{EC.part.legendHeading}</summary>
          <ul className="mt-2 space-y-1">
            {(Object.keys(EC.part.legend) as PartState[]).map((k) => (
              <li key={k}>
                <span className={cn("mr-2 rounded-full border px-2 py-0.5 text-xs", chipTone[k])}>{EC.part.chip[k]}</span>
                {EC.part.legend[k]}
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-8 space-y-10">
          {/* 1. What it is */}
          <section id="pe-what" aria-labelledby="pe-what-h" className="scroll-mt-24">
            <PartHeader id="what" state={states.what} />
            <EvidenceClaimCards views={forPart("what")} />
            {e.level === "missing" && states.what === "unavailable" ? (
              <Unavailable part="what" />
            ) : (
              <>
                {e.level === "template-only" && states.what !== "source-backed" && (
                  <p data-state="template-only" className="mt-3 rounded-lg border border-amber-500/40 p-3 text-sm">
                    {EC.templateOnly}
                  </p>
                )}
                {forPart("what").length > 0 && <p className="mt-4 text-sm font-medium">Other wording in this guide</p>}
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

          {/* 2. Used for */}
          <section id="pe-uses" aria-labelledby="pe-uses-h" className="scroll-mt-24">
            <PartHeader id="uses" state={states.uses} />
            <EvidenceClaimCards views={forPart("uses")} />
            {forPart("uses").length === 0 && usesStatedInWhat(claims) && (
              <p data-uses-from-what="" className="mt-3 rounded-lg border border-sky-500/30 p-3 text-sm">
                {EC.part.usesFromWhat}
              </p>
            )}
            {e.uses.state === "listed" ? (
              <>
                <p className="mt-3 text-sm text-muted-foreground">{EC.usesIntro}</p>
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
              <p data-state={e.uses.state} className="mt-3 rounded-lg border border-dashed border-amber-500/60 p-3 text-sm">
                {e.uses.state === "empty" ? EC.usesEmpty : EC.usesAbsent}
              </p>
            )}
          </section>

          {/* 3. How to take it */}
          <section id="pe-how" aria-labelledby="pe-how-h" className="scroll-mt-24">
            <PartHeader id="how" state={states.how} />
            <EvidenceClaimCards views={forPart("how")} />
            {e.reminders.length > 0 && (
              <>
                {forPart("how").length > 0 && <p className="mt-4 text-sm font-medium">{EC.remindersHeading}</p>}
                <div className="mt-3">
                  <ExplanationText segments={e.reminders} />
                </div>
              </>
            )}
            {states.how === "unavailable" && <Unavailable part="how" />}
          </section>

          {/* 4. Precautions */}
          <section id="pe-precautions" aria-labelledby="pe-precautions-h" className="scroll-mt-24">
            <PartHeader id="precautions" state={states.precautions} />
            <EvidenceClaimCards views={forPart("precautions")} />
            {states.precautions === "unavailable" && <Unavailable part="precautions" />}
          </section>

          {/* 5. Side effects */}
          <section id="pe-side-effects" aria-labelledby="pe-side-effects-h" className="scroll-mt-24">
            <PartHeader id="side-effects" state={states["side-effects"]} />
            <EvidenceClaimCards views={forPart("side-effects")} />
            {e.sideEffects.length > 0 && (
              <>
                {forPart("side-effects").length > 0 && <p className="mt-4 text-sm font-medium">Other wording in this guide</p>}
                <div className="mt-3">
                  <ExplanationText segments={e.sideEffects} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{EC.sideEffectsNote}</p>
              </>
            )}
            {states["side-effects"] === "unavailable" && <Unavailable part="side-effects" />}
          </section>

          {/* 6. Other medicines */}
          <section id="pe-interactions" aria-labelledby="pe-interactions-h" className="scroll-mt-24">
            <PartHeader id="interactions" state={states.interactions} />
            <EvidenceClaimCards views={forPart("interactions")} />
            {states.interactions === "unavailable" && <Unavailable part="interactions" />}
            <p data-personal-note="" className="mt-3 text-xs text-muted-foreground">
              {EC.part.personalNote}
            </p>
            {interactions ? (
              <div className="mt-3">
                <LensBlockView block={interactions} />
              </div>
            ) : null}
          </section>

          {/* 7. When to get help */}
          <section id="pe-seek-help" aria-labelledby="pe-seek-help-h" className="scroll-mt-24">
            <PartHeader id="seek-help" state={states["seek-help"]} />
            <EvidenceClaimCards views={forPart("seek-help")} />
            <p data-seek-help-general="" className="mt-3 rounded-lg border border-border/70 p-3 text-sm">
              {EC.part.seekHelpGeneral}
            </p>
          </section>

          {/* 8. Questions to ask */}
          <section id="pe-questions" aria-labelledby="pe-questions-h" className="scroll-mt-24">
            <PartHeader id="questions" state={states.questions} />
            {questions.length > 0 ? (
              <>
                <p className="mt-2 text-sm text-muted-foreground">{EC.part.questionsIntro}</p>
                <ul data-questions="" className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  {questions.map((q) => (
                    <li key={q.part} data-question-for={q.part}>
                      {q.question}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-3 text-sm">{EC.ask}</p>
            )}
          </section>

          {/* 9. Sources and review status */}
          <section id="pe-sources" aria-labelledby="pe-sources-h" className="scroll-mt-24 rounded-lg border border-border/70 p-4">
            <PartHeader id="sources" state={states.sources} />
            {distinctSources.length > 0 ? (
              <ul data-source-list="" className="mt-3 space-y-2 text-sm">
                {distinctSources.map((s) => (
                  <li key={s.identifier}>
                    <a href={s.url} rel="noopener noreferrer" className="underline underline-offset-2">
                      {s.title}
                    </a>
                    . {s.organisation}, {s.jurisdiction === "US" ? "US product label" : "source"}
                    {s.publishedDate ? `, published ${s.publishedDate}` : ""}. DailyMed set id {s.identifier}. Accessed {s.accessedAt}.
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm">{EC.part.sourcesNone}</p>
            )}
            <p data-india-note="" className="mt-3 text-sm">
              {EC.part.sourcesIndia}
            </p>
            <p data-review-line="" className="mt-2 text-sm font-medium">
              {EC.part.reviewLine}
            </p>
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
