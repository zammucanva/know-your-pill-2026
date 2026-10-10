"use client";

import * as React from "react";
import { AlertTriangle, ChevronRight, ChevronLeft, ClipboardCheck, ShieldAlert, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { MODE_SPECS } from "@/lib/kyp/modes/specs";
import type { LensBlock, ModeId, ModeLens, ModeLensSet } from "@/lib/kyp/modes/types";
import {
  CASE_STAGES,
  chooseMcq,
  clampStep,
  followBranch,
  initialMcq,
  isCorrect,
  nextCaseStage,
  type McqState,
} from "@/lib/kyp/modes/interactions";

/**
 * ModeLensSection: the mode-specific learning experience for one medication.
 *
 * Unlike GuidedLearningVisibility (which only shows or hides sections of the
 * same monograph), each mode renders a different set of blocks with a
 * different interaction: patient = act-first safety read, MBBS = mechanism
 * stepper + viva reveal, NEET PG = committed MCQ drill, resident = staged
 * case reasoner + decision path.
 *
 * All text is copied verbatim from the canonical registry (see
 * src/lib/kyp/modes). Every block shows a visible review notice: content here
 * is NOT clinically approved.
 */

interface Props {
  drugName: string;
  lenses: ModeLensSet;
}

const card = "rounded-xl border border-border/70 bg-card/80 p-4 sm:p-5";

function ReviewNotice() {
  return (
    <p
      data-review-state="pending-clinical-review"
      className="mt-4 flex items-start gap-2 text-xs text-muted-foreground"
    >
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      Education only. This view reuses this guide&apos;s existing content and has not yet had qualified clinical
      review. It does not replace advice from your prescriber or pharmacist.
    </p>
  );
}

function Unavailable({ items }: { items: ModeLens["unavailable"] }) {
  if (!items.length) return null;
  return (
    <ul data-unavailable className="mt-3 space-y-1 text-xs text-muted-foreground">
      {items.map((u) => (
        <li key={u.kind}>
          Not available for this medicine yet: {u.kind.replace(/-/g, " ")}. {u.reason}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Patient ---------------- */
function PatientBlocks({ blocks }: { blocks: LensBlock[] }) {
  // Urgent help leads: patients should see what to act on before the explanation.
  const order = ["urgent-help", "plain-summary", "key-points", "tell-your-doctor"];
  const sorted = [...blocks].sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
  return (
    <div className="space-y-4">
      {sorted.map((b) => {
        if (b.kind === "urgent-help")
          return (
            <div key={b.kind} data-block="urgent-help" className={cn(card, "border-destructive/40")}>
              <h3 className="flex items-center gap-2 font-semibold">
                <ShieldAlert className="h-4 w-4 text-destructive" aria-hidden /> Get urgent help
              </h3>
              <p className="mt-2 text-sm">{b.intro.text}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {b.signs.map((s) => (
                  <li key={s.source}>{s.text}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-medium">{b.action.text}</p>
            </div>
          );
        if (b.kind === "plain-summary")
          return (
            <div key={b.kind} data-block="plain-summary" className={card}>
              <h3 className="font-semibold">In plain words</h3>
              <p className="mt-2 text-sm leading-relaxed">{b.summary.text}</p>
            </div>
          );
        if (b.kind === "key-points")
          return (
            <div key={b.kind} data-block="key-points" className={card}>
              <h3 className="font-semibold">Key points</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {b.points.map((p) => (
                  <li key={p.source}>{p.text}</li>
                ))}
              </ul>
            </div>
          );
        if (b.kind === "tell-your-doctor")
          return (
            <div key={b.kind} data-block="tell-your-doctor" className={card}>
              <h3 className="font-semibold">Tell your doctor or pharmacist</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {b.items.map((p) => (
                  <li key={p.source}>{p.text}</li>
                ))}
              </ul>
            </div>
          );
        return null;
      })}
    </div>
  );
}

/* ---------------- MBBS ---------------- */
function MbbsBlocks({ blocks }: { blocks: LensBlock[] }) {
  const [step, setStep] = React.useState(0);
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  return (
    <div className="space-y-4">
      {blocks.map((b) => {
        if (b.kind === "mechanism-walkthrough") {
          const i = clampStep(step, b.steps.length);
          return (
            <div key={b.kind} data-block="mechanism-walkthrough" className={card}>
              <h3 className="font-semibold">Mechanism, step by step</h3>
              <p className="mt-1 text-xs text-muted-foreground">Target: {b.target.text}</p>
              <p className="mt-3 text-sm leading-relaxed" aria-live="polite">
                <span className="font-mono text-xs text-muted-foreground">
                  Step {i + 1} of {b.steps.length}.{" "}
                </span>
                {b.steps[i].text}
              </p>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => setStep(clampStep(i - 1, b.steps.length))} disabled={i === 0} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-sm disabled:opacity-40">
                  <ChevronLeft className="h-4 w-4" aria-hidden /> Back
                </button>
                <button type="button" onClick={() => setStep(clampStep(i + 1, b.steps.length))} disabled={i === b.steps.length - 1} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-sm disabled:opacity-40">
                  Next <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
              {i === b.steps.length - 1 && (
                <p className="mt-3 text-sm">
                  <span className="font-medium">Net effect: </span>
                  {b.effect.text}
                </p>
              )}
            </div>
          );
        }
        if (b.kind === "pharmacology-card")
          return (
            <dl key={b.kind} data-block="pharmacology-card" className={cn(card, "grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[10rem_1fr]")}>
              {b.rows.map((r) => (
                <React.Fragment key={r.value.source}>
                  <dt className="text-muted-foreground">{r.label}</dt>
                  <dd>{r.value.text}</dd>
                </React.Fragment>
              ))}
            </dl>
          );
        if (b.kind === "viva-qa")
          return (
            <div key={b.kind} data-block="viva-qa" className={card}>
              <h3 className="font-semibold">Viva questions</h3>
              <p className="mt-1 text-xs text-muted-foreground">Answer aloud first, then reveal.</p>
              <ol className="mt-3 space-y-3">
                {b.items.map((q, idx) => (
                  <li key={q.full.source} className="text-sm">
                    <p>{q.question}</p>
                    {q.answer === null ? null : open[idx] ? (
                      <p className="mt-1 rounded-md bg-muted/50 p-2">{q.answer}</p>
                    ) : (
                      <button type="button" onClick={() => setOpen((o) => ({ ...o, [idx]: true }))} className="mt-1 text-xs underline underline-offset-2">
                        Reveal answer
                      </button>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          );
        return null;
      })}
    </div>
  );
}

/* ---------------- NEET PG ---------------- */
function McqCard({ q, n }: { q: Extract<LensBlock, { kind: "mcq-drill" }>["questions"][number]; n: number }) {
  const [state, setState] = React.useState<McqState>(initialMcq);
  const result = isCorrect(state, q.correctIndex);
  return (
    <li data-mcq={q.id} className="text-sm">
      <p className="font-medium">
        {n}. {q.stem}
      </p>
      <div className="mt-2 grid gap-1.5" role="group" aria-label={`Options for question ${n}`}>
        {q.options.map((o, i) => (
          <button
            key={o}
            type="button"
            disabled={state.chosen !== null}
            onClick={() => setState((s) => chooseMcq(s, i, q.options.length))}
            aria-pressed={state.chosen === i}
            className={cn(
              "rounded-md border px-3 py-1.5 text-left",
              state.chosen !== null && i === q.correctIndex && "border-emerald-500/60 bg-emerald-500/10",
              state.chosen === i && i !== q.correctIndex && "border-destructive/60 bg-destructive/10"
            )}
          >
            {o}
          </button>
        ))}
      </div>
      {result !== null && (
        <p data-mcq-result={result ? "correct" : "incorrect"} className="mt-2 rounded-md bg-muted/50 p-2">
          <span className="font-medium">{result ? "Correct. " : "Not quite. "}</span>
          {q.explanation}
        </p>
      )}
    </li>
  );
}

function NeetBlocks({ blocks }: { blocks: LensBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b) => {
        if (b.kind === "high-yield-recall")
          return (
            <div key={b.kind} data-block="high-yield-recall" className={card}>
              <h3 className="font-semibold">High-yield recall</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {b.items.map((it) => (
                  <li key={it.source}>{it.text}</li>
                ))}
              </ul>
            </div>
          );
        if (b.kind === "pyq-concepts")
          return (
            <div key={b.kind} data-block="pyq-concepts" className={card}>
              <h3 className="font-semibold">Previously tested concepts</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {b.items.map((it) => (
                  <li key={it.source}>{it.text}</li>
                ))}
              </ul>
            </div>
          );
        if (b.kind === "mcq-drill")
          return (
            <div key={b.kind} data-block="mcq-drill" className={card}>
              <h3 className="flex items-center gap-2 font-semibold">
                <ClipboardCheck className="h-4 w-4" aria-hidden /> MCQ drill
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">Pick an answer; it is final once chosen.</p>
              <ol className="mt-3 space-y-4">
                {b.questions.map((q, i) => (
                  <McqCard key={q.id} q={q} n={i + 1} />
                ))}
              </ol>
            </div>
          );
        return null;
      })}
    </div>
  );
}

/* ---------------- Resident ---------------- */
function ResidentBlocks({ blocks }: { blocks: LensBlock[] }) {
  const [revealed, setRevealed] = React.useState(2); // presentation + history + examination shown first
  const [node, setNode] = React.useState<string | null>(null);
  return (
    <div className="space-y-4">
      {blocks.map((b) => {
        if (b.kind === "case-reasoner") {
          const text = {
            presentation: b.presentation.text,
            history: b.history.text,
            examination: b.examination.text,
            diagnosis: b.diagnosis.text,
            rationale: b.rationale.text,
            management: b.management.text,
          };
          const label = { presentation: "Presentation", history: "History", examination: "Examination", diagnosis: "Diagnosis", rationale: "Reasoning", management: "Management" };
          return (
            <div key={b.kind} data-block="case-reasoner" className={card}>
              <h3 className="font-semibold">Case: {b.title.text}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Decide your diagnosis and plan before revealing each step.</p>
              <ol className="mt-3 space-y-3 text-sm">
                {CASE_STAGES.map((s, i) =>
                  i <= revealed ? (
                    <li key={s}>
                      <span className="font-medium">{label[s]}: </span>
                      {text[s]}
                    </li>
                  ) : null
                )}
              </ol>
              {revealed < CASE_STAGES.length - 1 && (
                <button type="button" onClick={() => setRevealed((r) => nextCaseStage(r))} className="mt-3 rounded-md border border-border px-3 py-1.5 text-sm">
                  Reveal {label[CASE_STAGES[revealed + 1]].toLowerCase()}
                </button>
              )}
            </div>
          );
        }
        if (b.kind === "decision-path") {
          const current = b.nodes.find((n) => n.id === (node ?? b.startNodeId)) ?? b.nodes[0];
          return (
            <div key={b.kind} data-block="decision-path" className={card}>
              <h3 className="font-semibold">{b.title.text}</h3>
              <p className="mt-3 text-sm font-medium">{current.question.text}</p>
              {current.recommendation && <p className="mt-2 text-sm">{current.recommendation.text}</p>}
              {current.reasoning && <p className="mt-1 text-sm text-muted-foreground">{current.reasoning.text}</p>}
              {current.branches.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.branches.map((br) => (
                    <button key={br.label} type="button" onClick={() => setNode(followBranch(b.nodes, current.id, br.label))} className="rounded-md border border-border px-2.5 py-1 text-sm">
                      {br.label}
                    </button>
                  ))}
                </div>
              )}
              {current.id !== b.startNodeId && (
                <button type="button" onClick={() => setNode(null)} className="mt-3 text-xs underline underline-offset-2">
                  Back to start
                </button>
              )}
            </div>
          );
        }
        if (b.kind === "pitfalls")
          return (
            <div key={b.kind} data-block="pitfalls" className={card}>
              <h3 className="flex items-center gap-2 font-semibold">
                <AlertTriangle className="h-4 w-4" aria-hidden /> Common errors and when not to use
              </h3>
              <ul className="mt-3 space-y-3 text-sm">
                {b.mistakes.map((m) => (
                  <li key={m.mistake.source}>
                    <p className="font-medium">{m.mistake.text}</p>
                    <p className="text-muted-foreground">{m.why.text}</p>
                    <p>{m.correction.text}</p>
                  </li>
                ))}
                {b.whenNotToUse.map((w) => (
                  <li key={w.scenario.source}>
                    <p className="font-medium">Avoid: {w.scenario.text}</p>
                    <p className="text-muted-foreground">{w.reason.text}</p>
                    {w.alternative && <p>{w.alternative.text}</p>}
                  </li>
                ))}
              </ul>
            </div>
          );
        return null;
      })}
    </div>
  );
}

/** Store-free view: renders the lens for an explicit mode (also used by tests). */
export function ModeLensView({ drugName, lenses, mode }: Props & { mode: ModeId }) {
  const lens = lenses[mode];
  const spec = MODE_SPECS[mode];
  return (
    <section
      id="mode-lens"
      data-mode-lens={mode}
      aria-label={`${spec.label} view of ${drugName}`}
      className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{spec.label} view</p>
      <h2 className="mt-1 text-xl font-semibold">{spec.objective}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{spec.interaction}</p>
      <div className="mt-5">
        {mode === "patient" && <PatientBlocks blocks={lens.blocks} />}
        {mode === "mbbs" && <MbbsBlocks blocks={lens.blocks} />}
        {mode === "neetPg" && <NeetBlocks blocks={lens.blocks} />}
        {mode === "resident" && <ResidentBlocks blocks={lens.blocks} />}
      </div>
      <Unavailable items={lens.unavailable} />
      <ReviewNotice />
    </section>
  );
}

export function ModeLensSection(props: Props) {
  const mode = useGuidedLearning((s) => s.mode);
  return <ModeLensView {...props} mode={mode} />;
}
