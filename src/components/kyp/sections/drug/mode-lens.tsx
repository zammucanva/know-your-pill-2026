"use client";

import * as React from "react";
import { AlertTriangle, ChevronRight, ChevronLeft, ClipboardCheck, ShieldAlert, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { MODE_SPECS, REVIEW_NOTICE } from "@/lib/kyp/modes/specs";
import { PATIENT_INTERACTION_COPY as PIC, summarizeTicks } from "@/lib/kyp/modes/patient-interactions";
import type { LensBlock, ModeId, ModeLens, ModeLensSet } from "@/lib/kyp/modes/types";
import {
  CASE_STAGES,
  chooseMcq,
  filterInteractions,
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
    <aside
      role="note"
      data-review-state="pending-clinical-review"
      className="mt-4 flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p>
        <span className="font-medium">{REVIEW_NOTICE.heading}</span> {REVIEW_NOTICE.body}
      </p>
    </aside>
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

const STATUS_LABEL = { "fda-approved": "FDA-approved", "off-label": "Off-label", guideline: "Guideline" } as const;
const SEVERITY_LABEL = { mild: "mild", moderate: "moderate", severe: "severe", "life-threatening": "life-threatening" } as const;
const FREQUENCY_LABEL = { "very-common": "very common", common: "common", uncommon: "uncommon", rare: "rare", unknown: "frequency unknown" } as const;

function EffectList({ items }: { items: Extract<LensBlock, { kind: "adverse-effects" }>["serious"] }) {
  return (
    <ul className="mt-2 space-y-2.5 text-sm">
      {items.map((e) => (
        <li key={e.name.source}>
          <p>
            <span className="font-medium">{e.name.text}</span>{" "}
            <span className="text-xs text-muted-foreground">
              ({SEVERITY_LABEL[e.severity]}, {FREQUENCY_LABEL[e.frequency]})
            </span>
          </p>
          <p className="text-muted-foreground">{e.description.text}</p>
          {e.management && <p>{e.management.text}</p>}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Patient ---------------- */
function PatientInteractionsPanel({ block }: { block: Extract<LensBlock, { kind: "patient-interactions" }> }) {
  const [ticked, setTicked] = React.useState<Record<string, boolean>>({});
  const names = block.names.map((n) => n.text);
  const keys = block.names.map((n) => n.source);
  const sum = summarizeTicks(names, ticked, keys);
  return (
    <div data-block="patient-interactions" data-origin={block.statement?.origin ?? "missing"} className={card}>
      <h3 className="font-semibold">{PIC.heading}</h3>
      {block.statement ? (
        <>
          <p className="mt-2 text-sm leading-relaxed">{block.statement.text.text}</p>
          <p data-origin-label className="mt-2 text-xs text-muted-foreground">
            {PIC.originLabel[block.statement.origin]}
          </p>
        </>
      ) : (
        <p data-statement-missing className="mt-2 text-sm">
          {PIC.missingStatement}
        </p>
      )}
      <p data-limitation className="mt-3 rounded-md bg-muted/50 p-2 text-sm">
        {PIC.limitation}
      </p>
      <h4 className="mt-5 text-sm font-semibold">{PIC.listHeading}</h4>
      {names.length === 0 ? (
        <p data-names-missing className="mt-1 text-sm">
          {PIC.noList}
        </p>
      ) : (
        <>
          <p className="mt-1 text-xs text-muted-foreground">{PIC.listIntro}</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {block.names.map((n) => (
              <li key={n.source}>
                <label className="flex min-h-9 cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={!!ticked[n.source]}
                    onChange={() => setTicked((t) => ({ ...t, [n.source]: !t[n.source] }))}
                    className="mt-1 h-4 w-4 shrink-0"
                  />
                  <span>{n.text}</span>
                </label>
              </li>
            ))}
          </ul>
          <p role="status" data-ticked-summary className="mt-3 text-sm">
            {sum.count === 0 ? "Nothing ticked yet." : `You ticked ${sum.count}. Show this list to your pharmacist.`}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{PIC.listCaveat}</p>
        </>
      )}
    </div>
  );
}

function PatientBlocks({ blocks }: { blocks: LensBlock[] }) {
  const [ticked, setTicked] = React.useState<Record<string, boolean>>({});
  // Urgent help leads: patients should see what to act on before the explanation.
  const order = ["urgent-help", "plain-summary", "key-points", "patient-interactions", "tell-your-doctor"];
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
        if (b.kind === "patient-interactions") return <PatientInteractionsPanel key={b.kind} block={b} />;
        if (b.kind === "tell-your-doctor")
          return (
            <div key={b.kind} data-block="tell-your-doctor" className={card}>
              <h3 className="font-semibold">Tell your doctor or pharmacist</h3>
              <p className="mt-1 text-xs text-muted-foreground">Tick the items you want to remember to mention.</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {b.items.map((p) => (
                  <li key={p.source}>
                    <label className="flex min-h-9 cursor-pointer items-start gap-2">
                      <input
                        type="checkbox"
                        checked={!!ticked[p.source]}
                        onChange={() => setTicked((t) => ({ ...t, [p.source]: !t[p.source] }))}
                        className="mt-1 h-4 w-4 shrink-0"
                      />
                      <span>{p.text}</span>
                    </label>
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

/* ---------------- MBBS ---------------- */
function MbbsBlocks({ blocks }: { blocks: LensBlock[] }) {
  const [step, setStep] = React.useState(0);
  const [open, setOpen] = React.useState<Record<string, boolean>>({});
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
        if (b.kind === "indications")
          return (
            <div key={b.kind} data-block="indications" className={card}>
              <h3 className="font-semibold">Indications</h3>
              <ul className="mt-2 space-y-2.5 text-sm">
                {b.items.map((x) => (
                  <li key={x.name.source}>
                    <p>
                      <span className="font-medium">{x.name.text}</span>{" "}
                      <span className="text-xs text-muted-foreground">({STATUS_LABEL[x.status]})</span>
                    </p>
                    <p className="text-muted-foreground">{x.description.text}</p>
                    {x.ageGroup && <p className="text-xs text-muted-foreground">{x.ageGroup.text}</p>}
                  </li>
                ))}
              </ul>
            </div>
          );
        if (b.kind === "adverse-effects")
          return (
            <div key={b.kind} data-block="adverse-effects" className={card}>
              <h3 className="font-semibold">Serious adverse effects</h3>
              <EffectList items={b.serious} />
              {b.common.length > 0 && (
                <>
                  <h3 className="mt-5 font-semibold">Common adverse effects</h3>
                  <EffectList items={b.common} />
                </>
              )}
            </div>
          );
        if (b.kind === "contraindications")
          return (
            <div key={b.kind} data-block="contraindications" className={card}>
              <h3 className="font-semibold">Contraindications</h3>
              <ul className="mt-2 space-y-2.5 text-sm">
                {b.items.map((c) => (
                  <li key={c.name.source}>
                    <p>
                      <span className="font-medium">{c.name.text}</span>{" "}
                      <span className="text-xs text-muted-foreground">({c.severity})</span>
                    </p>
                    <p className="text-muted-foreground">{c.rationale.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        if (b.kind === "viva") {
          const qa = b.items.filter((x): x is Extract<typeof x, { type: "qa" }> => x.type === "qa");
          const facts = b.items.filter((x) => x.type === "statement");
          const review = b.items.filter((x) => x.type === "needs-review");
          return (
            <div key={b.kind} data-block="viva" className={card}>
              {qa.length > 0 && (
                <div data-viva-type="qa">
                  <h3 className="font-semibold">Viva questions</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Answer aloud first, then reveal.</p>
                  <ol className="mt-3 space-y-3">
                    {qa.map((q) => (
                      <li key={q.full.source} className="text-sm">
                        <p>{q.question}</p>
                        {open[q.full.source] ? (
                          <p className="mt-1 rounded-md bg-muted/50 p-2">{q.answer}</p>
                        ) : (
                          <button type="button" onClick={() => setOpen((o) => ({ ...o, [q.full.source]: true }))} className="mt-1 inline-flex min-h-9 items-center px-1 text-xs underline underline-offset-2">
                            Reveal answer
                          </button>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {facts.length > 0 && (
                <div data-viva-type="statement" className={qa.length > 0 ? "mt-5" : undefined}>
                  <h3 className="font-semibold">Key facts for viva</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                    {facts.map((f) => (
                      <li key={f.full.source}>{f.full.text}</li>
                    ))}
                  </ul>
                </div>
              )}
              {review.length > 0 && (
                <div data-viva-type="needs-review" className="mt-5">
                  <p className="text-xs text-muted-foreground">Display format under review:</p>
                  <ul className="mt-1 list-disc space-y-1.5 pl-5 text-sm">
                    {review.map((f) => (
                      <li key={f.full.source}>{f.full.text}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }
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
        <p role="status" data-mcq-result={result ? "correct" : "incorrect"} className="mt-2 rounded-md bg-muted/50 p-2">
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
              <h3 className="font-semibold">Exam concepts noted in this guide</h3>
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

const INTERACTION_SEVERITIES = ["contraindicated", "major", "moderate", "minor"] as const;
const SEVERITY_STYLE: Record<(typeof INTERACTION_SEVERITIES)[number], string> = {
  contraindicated: "border-destructive/50 bg-destructive/10",
  major: "border-amber-500/50 bg-amber-500/10",
  moderate: "border-border bg-muted/40",
  minor: "border-border bg-muted/20",
};

function InteractionsPanel({ block }: { block: Extract<LensBlock, { kind: "interactions" }> }) {
  const [sev, setSev] = React.useState<ReadonlySet<string>>(new Set());
  const [query, setQuery] = React.useState("");
  const shown = filterInteractions(block.items, sev, query);
  const counts = INTERACTION_SEVERITIES.map((s) => [s, block.items.filter((i) => i.severity === s).length] as const);
  const inputId = React.useId();
  return (
    <div data-block="interactions" data-interactions-state={block.state} className={card}>
      <h3 className="font-semibold">Drug interactions</h3>
      {block.state === "empty" ? (
        <p data-interactions-empty className="mt-2 text-sm">
          No interaction records are listed for this medicine in this guide. An empty list does not mean it has no interactions.
        </p>
      ) : (
        <>
          <p className="mt-1 text-xs text-muted-foreground">Filter by severity or search by drug name.</p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter interactions by severity">
            {counts.map(([s, n]) =>
              n === 0 ? null : (
                <button
                  key={s}
                  type="button"
                  aria-pressed={sev.has(s)}
                  onClick={() => setSev((cur) => { const nx = new Set(cur); if (nx.has(s)) nx.delete(s); else nx.add(s); return nx; })}
                  className={cn("min-h-9 rounded-full border px-3 text-sm", sev.has(s) ? "border-foreground bg-foreground text-background" : "border-border")}
                >
                  {s} ({n})
                </button>
              )
            )}
          </div>
          <label htmlFor={inputId} className="mt-3 block text-xs text-muted-foreground">
            Search by interacting drug
          </label>
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 min-h-9 w-full rounded-md border border-border bg-background px-3 text-sm"
          />
          <p role="status" data-interactions-count className="mt-3 text-xs text-muted-foreground">
            Showing {shown.length} of {block.items.length} interactions
          </p>
          <ul className="mt-2 space-y-3 text-sm">
            {shown.map((i) => (
              <li key={i.drug.source} data-severity={i.severity} className={cn("rounded-lg border p-3", SEVERITY_STYLE[i.severity])}>
                <p>
                  <span className="font-medium">{i.drug.text}</span>{" "}
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{i.severity}</span>
                </p>
                <p className="mt-1 text-muted-foreground">{i.mechanism.text}</p>
                <p className="mt-1">{i.action.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {block.incomplete > 0 && (
        <p data-interactions-incomplete className="mt-3 text-xs text-muted-foreground">
          {block.incomplete} record(s) are incomplete in the guide and are not shown.
        </p>
      )}
    </div>
  );
}

/* ---------------- Resident ---------------- */
function ResidentBlocks({ blocks }: { blocks: LensBlock[] }) {
  const [revealed, setRevealed] = React.useState(2); // presentation + history + examination shown first
  const [node, setNode] = React.useState<string | null>(null);
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});
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
                <button type="button" onClick={() => setNode(null)} className="mt-3 inline-flex min-h-9 items-center px-1 text-xs underline underline-offset-2">
                  Back to start
                </button>
              )}
            </div>
          );
        }
        if (b.kind === "prescribing-checks") {
          const done = b.items.filter((c) => checked[c.name.source]).length;
          return (
            <div key={b.kind} data-block="prescribing-checks" className={card}>
              <h3 className="font-semibold">Pre-prescribing checks</h3>
              <p className="mt-1 text-xs text-muted-foreground">Check each item as you clear it. Absolute contraindications come first.</p>
              <ul className="mt-3 space-y-2 text-sm">
                {b.items.map((c) => (
                  <li key={c.name.source}>
                    <label className="flex min-h-9 cursor-pointer items-start gap-2">
                      <input
                        type="checkbox"
                        checked={!!checked[c.name.source]}
                        onChange={() => setChecked((t) => ({ ...t, [c.name.source]: !t[c.name.source] }))}
                        className="mt-1 h-4 w-4 shrink-0"
                      />
                      <span>
                        <span className="font-medium">{c.name.text}</span>{" "}
                        <span className="text-xs text-muted-foreground">({c.severity})</span>
                        <span className="block text-muted-foreground">{c.rationale.text}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
              <p role="status" data-checks-progress className="mt-3 text-xs text-muted-foreground">
                {done} of {b.items.length} checks cleared
              </p>
            </div>
          );
        }
        if (b.kind === "interactions") return <InteractionsPanel key={b.kind} block={b} />;
        if (b.kind === "monitoring-plan")
          return (
            <div key={b.kind} data-block="monitoring-plan" className={card}>
              <h3 className="font-semibold">Monitoring plan</h3>
              <ul className="mt-2 space-y-2.5 text-sm">
                {b.monitoring.map((m) => (
                  <li key={m.parameter.source}>
                    <p>
                      <span className="font-medium">{m.parameter.text}</span>{" "}
                      <span className="text-xs text-muted-foreground">{m.frequency.text}</span>
                    </p>
                    <p className="text-muted-foreground">{m.rationale.text}</p>
                  </li>
                ))}
              </ul>
              {b.boxedWarnings.length > 0 && (
                <div className="mt-5">
                  <h3 className="font-semibold">Boxed warnings</h3>
                  <ul className="mt-2 space-y-2.5 text-sm">
                    {b.boxedWarnings.map((w) => (
                      <li key={w.title.source}>
                        <p className="font-medium">{w.title.text}</p>
                        <p className="text-muted-foreground">{w.text.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
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
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-8 sm:px-6"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{spec.label} view</p>
      <h2 className="mt-1 text-xl font-semibold">{spec.objective}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{spec.interaction}</p>
      <ReviewNotice />
      <div className="mt-5">
        {mode === "patient" && <PatientBlocks blocks={lens.blocks} />}
        {mode === "mbbs" && <MbbsBlocks blocks={lens.blocks} />}
        {mode === "neetPg" && <NeetBlocks blocks={lens.blocks} />}
        {mode === "resident" && <ResidentBlocks blocks={lens.blocks} />}
      </div>
      <Unavailable items={lens.unavailable} />
    </section>
  );
}

export function ModeLensSection(props: Props) {
  const mode = useGuidedLearning((s) => s.mode);
  return <ModeLensView {...props} mode={mode} />;
}
