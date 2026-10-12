"use client";

import * as React from "react";
import { AlertTriangle, ChevronLeft, ChevronRight, ClipboardCheck, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLOW_COPY as FC } from "@/lib/kyp/modes/flow-copy";
import { PATIENT_INTERACTION_COPY as PIC, summarizeTicks } from "@/lib/kyp/modes/patient-interactions";
import type { BlockKind, LensBlock } from "@/lib/kyp/modes/types";
import {
  CASE_STAGES,
  clampStep,
  filterInteractions,
  followBranch,
  nextCaseStage,
  recallCurrent,
  recallNext,
  recallProgress,
  recallRetryMissed,
  recallScore,
  recallSelect,
  recallStart,
  recallSubmit,
  type RecallState,
} from "@/lib/kyp/modes/interactions";

/**
 * One panel component per block kind. Each keeps its own interaction state, so a learner's ticks,
 * reveals and answers survive moving between steps (panels stay mounted; the shell hides them).
 * All medical text is the verbatim registry text carried by the block. Nothing here generates
 * content, answer keys or advice.
 */

type B<K extends BlockKind> = Extract<LensBlock, { kind: K }>;
export const card = "rounded-xl border border-border/70 bg-card/80 p-4 sm:p-5";
const btn = "inline-flex min-h-9 items-center gap-1 rounded-md border border-border px-3 text-sm disabled:opacity-40";
const linkBtn = "inline-flex min-h-9 items-center px-1 text-xs underline underline-offset-2";

/** The shell lets resident panels jump to another step. */
export const FlowContext = React.createContext<{ goTo: (stepId: string) => void }>({ goTo: () => {} });

/* ====================== shared pieces ====================== */
const STATUS_LABEL = { "fda-approved": "FDA-approved", "off-label": "Off-label", guideline: "Guideline" } as const;
const SEVERITY_LABEL = { mild: "mild", moderate: "moderate", severe: "severe", "life-threatening": "life-threatening" } as const;
const FREQUENCY_LABEL = { "very-common": "very common", common: "common", uncommon: "uncommon", rare: "rare", unknown: "frequency unknown" } as const;

function TickList({ items, ticked, setTicked, label }: { items: { key: string; node: React.ReactNode }[]; ticked: Record<string, boolean>; setTicked: React.Dispatch<React.SetStateAction<Record<string, boolean>>>; label?: string }) {
  return (
    <ul className="mt-2 space-y-1.5 text-sm" aria-label={label}>
      {items.map((it) => (
        <li key={it.key}>
          <label className="flex min-h-9 cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={!!ticked[it.key]}
              onChange={() => setTicked((t) => ({ ...t, [it.key]: !t[it.key] }))}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <span>{it.node}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

/* ====================== Patient ====================== */
function PlainSummary({ b }: { b: B<"plain-summary"> }) {
  return (
    <div data-block="plain-summary" className={card}>
      <h3 className="font-semibold">In plain words</h3>
      <p className="mt-2 text-sm leading-relaxed">{b.summary.text}</p>
    </div>
  );
}
function KeyPoints({ b }: { b: B<"key-points"> }) {
  return (
    <div data-block="key-points" className={card}>
      <h3 className="font-semibold">Key points</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {b.points.map((p) => (
          <li key={p.source}>{p.text}</li>
        ))}
      </ul>
    </div>
  );
}
function HowToTake({ b }: { b: B<"patient-how-to-take"> }) {
  const rows: [string, typeof b.usuallyTaken][] = [
    [FC.patient.howToTake, b.usuallyTaken],
    [FC.patient.missedDose, b.missedDose],
    [FC.patient.stopping, b.stopping],
    [FC.patient.checkIns, b.monitoring],
    [FC.patient.timeline, b.timeline],
  ];
  return (
    <div data-block="patient-how-to-take" className={card}>
      <dl className="space-y-4 text-sm">
        {rows.map(([label, v]) =>
          v ? (
            <div key={v.source}>
              <dt className="font-semibold">{label}</dt>
              <dd className="mt-1 leading-relaxed">{v.text}</dd>
            </div>
          ) : null
        )}
      </dl>
      <p data-origin-label className="mt-4 text-xs text-muted-foreground">
        {FC.patient.guideLabel}
      </p>
    </div>
  );
}
function PatientSideEffects({ b }: { b: B<"patient-side-effects"> }) {
  return (
    <div data-block="patient-side-effects" data-origin={b.source} className={card}>
      {b.source === "guide" ? (
        <>
          {b.intro && <p className="text-sm leading-relaxed">{b.intro.text}</p>}
          {b.common.length > 0 && (
            <>
              <h3 className="mt-4 font-semibold">{FC.patient.commonSideEffects}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {b.common.map((c) => (
                  <li key={c.source}>{c.text}</li>
                ))}
              </ul>
            </>
          )}
          {b.note && <p className="mt-2 text-sm text-muted-foreground">{b.note.text}</p>}
          {b.important.length > 0 && (
            <>
              <h3 className="mt-5 font-semibold">{FC.patient.importantSideEffects}</h3>
              {b.importantIntro && <p className="mt-1 text-sm">{b.importantIntro.text}</p>}
              <ul className="mt-2 space-y-3 text-sm">
                {b.important.map((x) => (
                  <li key={x.name.source} className="rounded-lg border border-border/70 p-3">
                    <p className="font-medium">{x.name.text}</p>
                    <p className="mt-1">
                      <span className="text-muted-foreground">{FC.patient.whatItMeans} </span>
                      {x.whatItMeans.text}
                    </p>
                    <p className="mt-1">
                      <span className="text-muted-foreground">{FC.patient.whatToDo} </span>
                      {x.whatToDo.text}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p data-origin-label className="mt-4 text-xs text-muted-foreground">
            {FC.patient.guideLabel}
          </p>
        </>
      ) : (
        <>
          <h3 className="font-semibold">{FC.patient.commonSideEffects}</h3>
          <p className="mt-2 text-sm leading-relaxed">{b.registryText?.text}</p>
          <p data-origin-label className="mt-3 text-xs text-muted-foreground">
            {FC.patient.registrySideEffectsLabel}
          </p>
        </>
      )}
    </div>
  );
}
function UrgentHelp({ b }: { b: B<"urgent-help"> }) {
  return (
    <div data-block="urgent-help" className={cn(card, "border-destructive/40")}>
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
}
function PatientInteractionsPanel({ b }: { b: B<"patient-interactions"> }) {
  const [ticked, setTicked] = React.useState<Record<string, boolean>>({});
  const names = b.names.map((n) => n.text);
  const keys = b.names.map((n) => n.source);
  const sum = summarizeTicks(names, ticked, keys);
  return (
    <div data-block="patient-interactions" data-origin={b.statement?.origin ?? "missing"} className={card}>
      <h3 className="font-semibold">{PIC.heading}</h3>
      {b.statement ? (
        <>
          <p className="mt-2 text-sm leading-relaxed">{b.statement.text.text}</p>
          <p data-origin-label className="mt-2 text-xs text-muted-foreground">
            {PIC.originLabel[b.statement.origin]}
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
          <TickList items={b.names.map((n) => ({ key: n.source, node: n.text }))} ticked={ticked} setTicked={setTicked} />
          <p role="status" data-ticked-summary className="mt-3 text-sm">
            {sum.count === 0 ? "Nothing ticked yet." : `You ticked ${sum.count}. Show this list to your pharmacist.`}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{PIC.listCaveat}</p>
        </>
      )}
    </div>
  );
}
function TellDoctor({ b }: { b: B<"tell-your-doctor"> }) {
  const [ticked, setTicked] = React.useState<Record<string, boolean>>({});
  return (
    <div data-block="tell-your-doctor" className={card}>
      <h3 className="font-semibold">Tell your doctor or pharmacist</h3>
      <p className="mt-1 text-xs text-muted-foreground">Tick the items you want to remember to mention.</p>
      <TickList items={b.items.map((p) => ({ key: p.source, node: p.text }))} ticked={ticked} setTicked={setTicked} />
    </div>
  );
}

/* ====================== MBBS ====================== */
function MechanismWalkthrough({ b }: { b: B<"mechanism-walkthrough"> }) {
  const [step, setStep] = React.useState(0);
  const i = clampStep(step, b.steps.length);
  return (
    <div data-block="mechanism-walkthrough" className={card}>
      <h3 className="font-semibold">Mechanism, step by step</h3>
      <p className="mt-1 text-xs text-muted-foreground">Target: {b.target.text}</p>
      <p className="mt-3 text-sm leading-relaxed" aria-live="polite">
        <span className="font-mono text-xs text-muted-foreground">
          Step {i + 1} of {b.steps.length}.{" "}
        </span>
        {b.steps[i].text}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setStep(clampStep(i - 1, b.steps.length))} disabled={i === 0} className={btn}>
          <ChevronLeft className="h-4 w-4" aria-hidden /> Back
        </button>
        <button type="button" onClick={() => setStep(clampStep(i + 1, b.steps.length))} disabled={i === b.steps.length - 1} className={btn}>
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
function PharmacologyCard({ b }: { b: B<"pharmacology-card"> }) {
  return (
    <dl data-block="pharmacology-card" className={cn(card, "grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[10rem_1fr]")}>
      {b.rows.map((r) => (
        <React.Fragment key={r.value.source}>
          <dt className="text-muted-foreground">{r.label}</dt>
          <dd>{r.value.text}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
function Indications({ b }: { b: B<"indications"> }) {
  return (
    <div data-block="indications" className={card}>
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
}
function EffectList({ items, cover, open, setOpen }: { items: B<"adverse-effects">["serious"]; cover: boolean; open: Record<string, boolean>; setOpen: React.Dispatch<React.SetStateAction<Record<string, boolean>>> }) {
  return (
    <ul className="mt-2 space-y-2.5 text-sm">
      {items.map((e) => {
        const hidden = cover && !open[e.name.source];
        return (
          <li key={e.name.source}>
            <p>
              <span className="font-medium">{e.name.text}</span>{" "}
              <span className="text-xs text-muted-foreground">
                ({SEVERITY_LABEL[e.severity]}, {FREQUENCY_LABEL[e.frequency]})
              </span>
            </p>
            {hidden ? (
              <button type="button" className={linkBtn} onClick={() => setOpen((o) => ({ ...o, [e.name.source]: true }))}>
                {FC.mbbs.reveal}
              </button>
            ) : (
              <>
                <p className="text-muted-foreground">{e.description.text}</p>
                {e.management && <p>{e.management.text}</p>}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
function AdverseEffects({ b }: { b: B<"adverse-effects"> }) {
  const [cover, setCover] = React.useState(false);
  const [open, setOpen] = React.useState<Record<string, boolean>>({});
  return (
    <div data-block="adverse-effects" data-cover={cover || undefined} className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">Serious adverse effects</h3>
        <button type="button" aria-pressed={cover} onClick={() => { setCover((c) => !c); setOpen({}); }} className={btn}>
          {cover ? FC.mbbs.showDescriptions : FC.mbbs.hideDescriptions}
        </button>
      </div>
      <EffectList items={b.serious} cover={cover} open={open} setOpen={setOpen} />
      {b.common.length > 0 && (
        <>
          <h3 className="mt-5 font-semibold">Common adverse effects</h3>
          <EffectList items={b.common} cover={cover} open={open} setOpen={setOpen} />
        </>
      )}
    </div>
  );
}
function Contraindications({ b }: { b: B<"contraindications"> }) {
  return (
    <div data-block="contraindications" className={card}>
      <h3 className="font-semibold">Contraindications</h3>
      <ul className="mt-2 space-y-2.5 text-sm">
        {b.items.map((c) => (
          <li key={c.name.source}>
            <p>
              <span className="font-medium">{c.name.text}</span> <span className="text-xs text-muted-foreground">({c.severity})</span>
            </p>
            <p className="text-muted-foreground">{c.rationale.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
function ExamPrep({ b }: { b: B<"exam-prep"> }) {
  const [ticked, setTicked] = React.useState<Record<string, boolean>>({});
  const all = [...b.practical, ...b.longAnswer];
  const done = all.filter((x) => ticked[x.source]).length;
  const group = (title: string, items: typeof b.practical) =>
    items.length ? (
      <div className="mt-4 first:mt-0">
        <h3 className="font-semibold">{title}</h3>
        <TickList items={items.map((x) => ({ key: x.source, node: x.text }))} ticked={ticked} setTicked={setTicked} label={title} />
      </div>
    ) : null;
  return (
    <div data-block="exam-prep" className={card}>
      <p className="text-xs text-muted-foreground">{FC.mbbs.practiceHint}</p>
      <div className="mt-3">
        {group(FC.mbbs.practical, b.practical)}
        {group(FC.mbbs.longAnswer, b.longAnswer)}
      </div>
      <p role="status" data-practice-progress className="mt-4 text-sm">
        {FC.mbbs.practised(done, all.length)}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{FC.mbbs.noKeys}</p>
    </div>
  );
}
function Viva({ b }: { b: B<"viva"> }) {
  const [open, setOpen] = React.useState<Record<string, boolean>>({});
  const qa = b.items.filter((x): x is Extract<typeof x, { type: "qa" }> => x.type === "qa");
  const facts = b.items.filter((x) => x.type === "statement");
  const review = b.items.filter((x) => x.type === "needs-review");
  const revealed = qa.filter((q) => open[q.full.source]).length;
  return (
    <div data-block="viva" className={card}>
      {qa.length > 0 && (
        <div data-viva-type="qa">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold">Viva questions</h3>
            <div className="flex gap-2">
              <button type="button" className={btn} onClick={() => setOpen(Object.fromEntries(qa.map((q) => [q.full.source, true])))}>
                {FC.mbbs.revealAll}
              </button>
              <button type="button" className={btn} onClick={() => setOpen({})}>
                {FC.mbbs.hideAll}
              </button>
            </div>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Answer aloud first, then reveal.</p>
          <p role="status" data-viva-progress className="mt-1 text-xs text-muted-foreground">
            {FC.mbbs.revealedCount(revealed, qa.length)}
          </p>
          <ol className="mt-3 space-y-3">
            {qa.map((q) => (
              <li key={q.full.source} className="text-sm">
                <p>{q.question}</p>
                {open[q.full.source] ? (
                  <p className="mt-1 rounded-md bg-muted/50 p-2">{q.answer}</p>
                ) : (
                  <button type="button" onClick={() => setOpen((o) => ({ ...o, [q.full.source]: true }))} className={linkBtn}>
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

/* ====================== NEET PG ====================== */
function RecallList({ kind, title, items, ordered }: { kind: "high-yield-recall" | "pyq-concepts"; title: string; items: { source: string; text: string }[]; ordered?: boolean }) {
  const [cover, setCover] = React.useState(false);
  const [open, setOpen] = React.useState<Record<string, boolean>>({});
  const revealed = items.filter((i) => open[i.source]).length;
  return (
    <div data-block={kind} data-cover={cover || undefined} className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">{title}</h3>
        <button type="button" aria-pressed={cover} onClick={() => { setCover((c) => !c); setOpen({}); }} className={btn}>
          {cover ? FC.mbbs.showDescriptions : FC.mbbs.coverFacts}
        </button>
      </div>
      {cover && (
        <p role="status" className="mt-1 text-xs text-muted-foreground">
          {FC.mbbs.revealedCount(revealed, items.length)}
        </p>
      )}
      <ul className={cn("mt-2 space-y-2 text-sm", !ordered && "list-none")}>
        {items.map((it, n) => (
          <li key={it.source}>
            {cover && !open[it.source] ? (
              <button type="button" className={btn} onClick={() => setOpen((o) => ({ ...o, [it.source]: true }))}>
                {FC.mbbs.reveal} {n + 1}
              </button>
            ) : (
              it.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecallSession({ b }: { b: B<"mcq-drill"> }) {
  const qs = b.questions;
  const [state, setState] = React.useState<RecallState>(() => recallStart(qs.length));
  const [round, setRound] = React.useState<"all" | "retry">("all");
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const optRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const cur = recallCurrent(state);
  const q = cur === null ? null : qs[cur];
  const prog = recallProgress(state);
  const submitted = cur !== null && !!state.submitted[cur];
  const chosen = cur !== null ? state.chosen[cur] : undefined;
  const isLast = state.pos + 1 >= state.queue.length;
  const score = recallScore(state, qs);

  // Move focus to the question when it changes so the 1-4 shortcuts work from the keyboard.
  React.useEffect(() => {
    if (state.phase === "question") headingRef.current?.focus({ preventScroll: true });
  }, [state.pos, state.phase, round]);

  const onKey = (e: React.KeyboardEvent) => {
    if (!q || submitted) return;
    const n = Number(e.key);
    if (Number.isInteger(n) && n >= 1 && n <= q.options.length) {
      e.preventDefault();
      setState((s) => recallSelect(s, n - 1, qs));
    }
  };

  if (state.phase === "summary") {
    return (
      <div data-block="mcq-drill" data-phase="summary" className={card}>
        <h3 className="flex items-center gap-2 font-semibold">
          <ClipboardCheck className="h-4 w-4" aria-hidden /> {FC.recall.resultsHeading}
        </h3>
        <p role="status" data-recall-score className="mt-2 text-sm font-medium">
          {FC.recall.score(score.correct, score.asked)}
        </p>
        {score.missed.length === 0 && <p className="mt-1 text-sm">{FC.recall.allCorrect}</p>}
        <h4 className="mt-4 text-sm font-semibold">{FC.recall.reviewHeading}</h4>
        <ol className="mt-2 space-y-3 text-sm">
          {state.queue.map((i) => {
            const ok = state.chosen[i] === qs[i].correctIndex;
            return (
              <li key={qs[i].id} data-review-result={ok ? "correct" : "incorrect"} className="rounded-lg border border-border/70 p-3">
                <p className="font-medium">{qs[i].stem}</p>
                <p className="mt-1">
                  <span className="text-muted-foreground">{FC.recall.yourAnswer} </span>
                  {qs[i].options[state.chosen[i]]} <span className="text-xs">({ok ? FC.recall.correct : FC.recall.incorrect})</span>
                </p>
                {!ok && (
                  <p className="mt-1">
                    <span className="text-muted-foreground">{FC.recall.correctAnswer} </span>
                    {qs[i].options[qs[i].correctIndex]}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-4 flex flex-wrap gap-2">
          {score.missed.length > 0 && (
            <button type="button" className={btn} onClick={() => { setState((s) => recallRetryMissed(s, qs)); setRound("retry"); }}>
              {FC.recall.retryMissed(score.missed.length)}
            </button>
          )}
          <button type="button" className={btn} onClick={() => { setState(recallStart(qs.length)); setRound("all"); }}>
            {FC.recall.startAgain}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div data-block="mcq-drill" data-phase="question" className={card} onKeyDown={onKey}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 font-semibold">
          <ClipboardCheck className="h-4 w-4" aria-hidden /> Question session
        </h3>
        <p data-recall-progress role="status" className="text-xs text-muted-foreground">
          {FC.recall.progress(prog.position, prog.total)}
        </p>
      </div>
      <div role="progressbar" aria-label="Session progress" aria-valuemin={0} aria-valuemax={prog.total} aria-valuenow={prog.answered} className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-foreground/70 transition-[width]" style={{ width: `${prog.total ? (prog.answered / prog.total) * 100 : 0}%` }} />
      </div>
      {round === "retry" && <p className="mt-2 text-xs text-muted-foreground">{FC.recall.retryNote(prog.total)}</p>}
      {q && (
        <div data-mcq={q.id} data-origin={q.origin} className="mt-4 text-sm">
          <p className="text-xs text-muted-foreground">{FC.recall.originLabel[q.origin]}</p>
          <h4 ref={headingRef} tabIndex={-1} className="mt-1 whitespace-pre-line font-medium leading-relaxed outline-none">
            {q.stem}
          </h4>
          <p className="mt-2 text-xs text-muted-foreground">{FC.recall.hint}</p>
          <div role="radiogroup" aria-label={`Options for question ${prog.position}`} className="mt-2 grid gap-1.5">
            {q.options.map((o, i) => {
              const picked = chosen === i;
              const right = submitted && i === q.correctIndex;
              const wrong = submitted && picked && i !== q.correctIndex;
              return (
                // Buttons with role="radio" (not native radios): native radios share a `name` across the
                // document, which collides with the hidden server-rendered copy of the page that streaming
                // can leave in the DOM. Arrow keys, Space and Enter work as for a radio group.
                <button
                  key={o}
                  ref={(el) => {
                    optRefs.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={picked}
                  disabled={submitted}
                  tabIndex={picked || (chosen === undefined && i === 0) ? 0 : -1}
                  data-option={i + 1}
                  onClick={() => setState((s) => recallSelect(s, i, qs))}
                  onKeyDown={(e) => {
                    const last = q.options.length - 1;
                    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? (i === last ? 0 : i + 1) : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i === 0 ? last : i - 1) : null;
                    if (next === null) return;
                    e.preventDefault();
                    setState((s) => recallSelect(s, next, qs));
                    optRefs.current[next]?.focus();
                  }}
                  className={cn(
                    "flex min-h-10 w-full items-start gap-2 rounded-md border px-3 py-2 text-left",
                    picked && !submitted && "border-foreground",
                    right && "border-emerald-500/60 bg-emerald-500/10",
                    wrong && "border-destructive/60 bg-destructive/10",
                    submitted && "cursor-default"
                  )}
                >
                  <span aria-hidden className={cn("mt-1 h-4 w-4 shrink-0 rounded-full border", picked ? "border-foreground bg-foreground" : "border-muted-foreground")} />
                  <span>
                    <span className="mr-1 text-xs text-muted-foreground">{i + 1}.</span>
                    {o}
                  </span>
                </button>
              );
            })}
          </div>
          {submitted ? (
            <div role="status" data-mcq-result={chosen === q.correctIndex ? "correct" : "incorrect"} className="mt-3 rounded-md bg-muted/50 p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{FC.recall.locked}</p>
              <p className="mt-1 font-medium">{chosen === q.correctIndex ? FC.recall.correct : FC.recall.incorrect}</p>
              {chosen !== q.correctIndex && (
                <p className="mt-1">
                  <span className="text-muted-foreground">{FC.recall.correctAnswer} </span>
                  {q.options[q.correctIndex]}
                </p>
              )}
              <p className="mt-2 text-xs font-semibold">{FC.recall.rationale}</p>
              <p className="mt-0.5 leading-relaxed">{q.explanation ?? FC.recall.noRationale}</p>
            </div>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {!submitted ? (
              <button type="button" data-action="submit" disabled={chosen === undefined} onClick={() => setState((s) => recallSubmit(s))} className={btn}>
                {FC.recall.submit}
              </button>
            ) : (
              <button type="button" data-action="next" onClick={() => setState((s) => recallNext(s))} className={btn}>
                {isLast ? FC.recall.seeResults : FC.recall.next}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ====================== Resident ====================== */
function Count({ label, state, count, extra, step }: { label: string; state: "listed" | "empty" | "absent"; count: number; extra?: string; step: string }) {
  const ctx = React.useContext(FlowContext);
  return (
    <li data-summary-item={label} data-state={state} className="rounded-lg border border-border/70 p-3 text-sm">
      <p className="font-medium">{label}</p>
      <p className="mt-1">
        {state === "listed" ? (
          <>
            {FC.resident.listed(count)}
            {extra ? <span className="text-muted-foreground"> ({extra})</span> : null}
          </>
        ) : state === "empty" ? (
          FC.resident.emptyList
        ) : (
          FC.resident.absent
        )}
      </p>
      {state === "listed" && (
        <button type="button" className={linkBtn} onClick={() => ctx.goTo(step)} aria-label={`${FC.resident.goToStep}: ${label}`}>
          {FC.resident.goToStep}
        </button>
      )}
    </li>
  );
}
function Presence({ label, present, step }: { label: string; present: boolean; step: string }) {
  const ctx = React.useContext(FlowContext);
  return (
    <li data-summary-item={label} data-state={present ? "present" : "absent"} className="rounded-lg border border-border/70 p-3 text-sm">
      <p className="font-medium">{label}</p>
      <p className="mt-1">{present ? FC.resident.present : FC.resident.notPresent}</p>
      {present && (
        <button type="button" className={linkBtn} onClick={() => ctx.goTo(step)} aria-label={`${FC.resident.goToStep}: ${label}`}>
          {FC.resident.goToStep}
        </button>
      )}
    </li>
  );
}
function ClinicalSummary({ b }: { b: B<"clinical-summary"> }) {
  return (
    <div data-block="clinical-summary" className={card}>
      <h3 className="font-semibold">{FC.resident.overviewHeading}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{FC.resident.overviewNote}</p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        <Count label="Contraindications" {...b.contraindications} extra={FC.resident.ofWhichAbsolute(b.contraindications.absolute)} step="prescribe" />
        <Count label="Interactions" {...b.interactions} extra={FC.resident.ofWhichContraindicated(b.interactions.contraindicated)} step="prescribe" />
        <Count label="Monitoring parameters" {...b.monitoring} step="monitor" />
        <Count label="Boxed warnings" {...b.boxedWarnings} step="monitor" />
        <Presence label="Decision path" present={b.decisionPath.state === "present"} step="decide" />
        <Presence label="Common errors" present={b.pitfalls.state === "present"} step="errors" />
      </ul>
    </div>
  );
}
function CaseReasoner({ b }: { b: B<"case-reasoner"> }) {
  const [revealed, setRevealed] = React.useState(2); // presentation, history and examination first
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
    <div data-block="case-reasoner" className={card}>
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
        <button type="button" onClick={() => setRevealed((r) => nextCaseStage(r))} className={cn(btn, "mt-3")}>
          Reveal {label[CASE_STAGES[revealed + 1]].toLowerCase()}
        </button>
      )}
    </div>
  );
}
function DecisionPath({ b }: { b: B<"decision-path"> }) {
  const [node, setNode] = React.useState<string | null>(null);
  const current = b.nodes.find((n) => n.id === (node ?? b.startNodeId)) ?? b.nodes[0];
  return (
    <div data-block="decision-path" className={card}>
      <h3 className="font-semibold">{b.title.text}</h3>
      <p className="mt-3 text-sm font-medium">{current.question.text}</p>
      {current.recommendation && <p className="mt-2 text-sm">{current.recommendation.text}</p>}
      {current.reasoning && <p className="mt-1 text-sm text-muted-foreground">{current.reasoning.text}</p>}
      {current.branches.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {current.branches.map((br) => (
            <button key={br.label} type="button" onClick={() => setNode(followBranch(b.nodes, current.id, br.label))} className={btn}>
              {br.label}
            </button>
          ))}
        </div>
      )}
      {current.id !== b.startNodeId && (
        <button type="button" onClick={() => setNode(null)} className={cn(linkBtn, "mt-3")}>
          Back to start
        </button>
      )}
    </div>
  );
}
function PrescribingChecks({ b }: { b: B<"prescribing-checks"> }) {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});
  const done = b.items.filter((c) => checked[c.name.source]).length;
  return (
    <div data-block="prescribing-checks" className={card}>
      <h3 className="font-semibold">Pre-prescribing checks</h3>
      <p className="mt-1 text-xs text-muted-foreground">Check each item as you clear it. Absolute contraindications come first.</p>
      <TickList
        items={b.items.map((c) => ({
          key: c.name.source,
          node: (
            <>
              <span className="font-medium">{c.name.text}</span> <span className="text-xs text-muted-foreground">({c.severity})</span>
              <span className="block text-muted-foreground">{c.rationale.text}</span>
            </>
          ),
        }))}
        ticked={checked}
        setTicked={setChecked}
      />
      <p role="status" data-checks-progress className="mt-3 text-xs text-muted-foreground">
        {done} of {b.items.length} checks cleared
      </p>
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
function InteractionsPanel({ b }: { b: B<"interactions"> }) {
  const [sev, setSev] = React.useState<ReadonlySet<string>>(new Set());
  const [query, setQuery] = React.useState("");
  const shown = filterInteractions(b.items, sev, query);
  const counts = INTERACTION_SEVERITIES.map((s) => [s, b.items.filter((i) => i.severity === s).length] as const);
  const inputId = React.useId();
  return (
    <div data-block="interactions" data-interactions-state={b.state} className={card}>
      <h3 className="font-semibold">Drug interactions</h3>
      {b.state === "empty" ? (
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
          <input id={inputId} type="search" value={query} onChange={(e) => setQuery(e.target.value)} className="mt-1 min-h-9 w-full rounded-md border border-border bg-background px-3 text-sm" />
          <p role="status" data-interactions-count className="mt-3 text-xs text-muted-foreground">
            Showing {shown.length} of {b.items.length} interactions
          </p>
          <ul className="mt-2 space-y-3 text-sm">
            {shown.map((i) => (
              <li key={i.drug.source} data-severity={i.severity} className={cn("rounded-lg border p-3", SEVERITY_STYLE[i.severity])}>
                <p>
                  <span className="font-medium">{i.drug.text}</span> <span className="text-xs uppercase tracking-wide text-muted-foreground">{i.severity}</span>
                </p>
                <p className="mt-1 text-muted-foreground">{i.mechanism.text}</p>
                <p className="mt-1">{i.action.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {b.incomplete > 0 && (
        <p data-interactions-incomplete className="mt-3 text-xs text-muted-foreground">
          {b.incomplete} record(s) are incomplete in the guide and are not shown.
        </p>
      )}
    </div>
  );
}
function MonitoringPlan({ b }: { b: B<"monitoring-plan"> }) {
  return (
    <div data-block="monitoring-plan" className={card}>
      <h3 className="font-semibold">Monitoring plan</h3>
      <ul className="mt-2 space-y-2.5 text-sm">
        {b.monitoring.map((m) => (
          <li key={m.parameter.source}>
            <p>
              <span className="font-medium">{m.parameter.text}</span> <span className="text-xs text-muted-foreground">{m.frequency.text}</span>
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
}
function Pitfalls({ b }: { b: B<"pitfalls"> }) {
  return (
    <div data-block="pitfalls" className={card}>
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
}

/** One renderer per block kind. Adding a block kind without a renderer is a type error. */
export function renderBlock(b: LensBlock): React.ReactNode {
  switch (b.kind) {
    case "plain-summary": return <PlainSummary b={b} />;
    case "key-points": return <KeyPoints b={b} />;
    case "patient-how-to-take": return <HowToTake b={b} />;
    case "patient-side-effects": return <PatientSideEffects b={b} />;
    case "urgent-help": return <UrgentHelp b={b} />;
    case "patient-interactions": return <PatientInteractionsPanel b={b} />;
    case "tell-your-doctor": return <TellDoctor b={b} />;
    case "mechanism-walkthrough": return <MechanismWalkthrough b={b} />;
    case "pharmacology-card": return <PharmacologyCard b={b} />;
    case "indications": return <Indications b={b} />;
    case "adverse-effects": return <AdverseEffects b={b} />;
    case "contraindications": return <Contraindications b={b} />;
    case "exam-prep": return <ExamPrep b={b} />;
    case "viva": return <Viva b={b} />;
    case "high-yield-recall": return <RecallList kind="high-yield-recall" title="High-yield recall" items={b.items} />;
    case "pyq-concepts": return <RecallList kind="pyq-concepts" title="Exam concepts noted in this guide" items={b.items} />;
    case "mcq-drill": return <RecallSession b={b} />;
    case "clinical-summary": return <ClinicalSummary b={b} />;
    case "case-reasoner": return <CaseReasoner b={b} />;
    case "decision-path": return <DecisionPath b={b} />;
    case "prescribing-checks": return <PrescribingChecks b={b} />;
    case "interactions": return <InteractionsPanel b={b} />;
    case "monitoring-plan": return <MonitoringPlan b={b} />;
    case "pitfalls": return <Pitfalls b={b} />;
  }
}
