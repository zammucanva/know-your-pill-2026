"use client";

import * as React from "react";
import { Check, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { MODE_SPECS, MODE_TASKS, REVIEW_NOTICE } from "@/lib/kyp/modes/specs";
import { FLOW_COPY as FC } from "@/lib/kyp/modes/flow-copy";
import type { BlockKind, ModeId, ModeLens, ModeLensSet } from "@/lib/kyp/modes/types";
import { FlowContext, renderBlock } from "./lens-blocks";
import { PATIENT_INTERACTION_COPY as PIC } from "@/lib/kyp/modes/patient-interactions";

/**
 * ModeLensSection: the mode-specific learning TASK for one medication.
 *
 * Switching mode changes the task, the ordered steps and the interaction (not just what is
 * visible): Patient learns to use the medicine safely in five steps, MBBS studies pharmacology
 * and rehearses exam tasks, NEET PG runs an active-recall question session, and Resident works
 * through clinical reasoning with explicit absent / empty / listed data states.
 *
 * All medical text is the verbatim registry text carried by the lens blocks (src/lib/kyp/modes).
 * Every mode shows a visible review notice: nothing here is clinically approved.
 */

interface Props {
  drugName: string;
  lenses: ModeLensSet;
}

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

/** Where a patient step's wording comes from, only where the block itself records it. */
function patientSourceLine(blocks: ModeLens["blocks"]): string | null {
  const parts: string[] = [];
  for (const b of blocks) {
    if (b.kind === "patient-how-to-take" || b.kind === "urgent-help" || b.kind === "tell-your-doctor") parts.push(FC.shell.sourceGuide);
    if (b.kind === "patient-side-effects") parts.push(b.source === "guide" ? FC.shell.sourceGuide : FC.shell.sourceRegistry);
    if (b.kind === "patient-interactions" && b.statement) parts.push(PIC.originLabel[b.statement.origin]);
  }
  return parts.length ? Array.from(new Set(parts)).join(" ") : null;
}

const REVISION_ORDER: { key: string; step: string }[] = [
  { key: "mechanism", step: "mechanism" },
  { key: "safety", step: "safety" },
  { key: "viva", step: "viva" },
  { key: "exam", step: "exam" },
];

/** MBBS revision path: mechanism recall, safety self-test, viva and exam prompts as one tracked sequence. */
export function RevisionPath({
  progress,
  steps,
  onGo,
}: {
  progress: Record<string, { label: string; done: number; total: number }>;
  steps: { id: string; label: string }[];
  onGo: (id: string) => void;
}) {
  const rows = REVISION_ORDER.filter((r) => progress[r.key]).map((r) => ({ ...r, ...progress[r.key], stepLabel: steps.find((x) => x.id === r.step)?.label ?? r.step }));
  if (!rows.length) return null;
  const done = rows.reduce((n, r) => n + r.done, 0);
  const total = rows.reduce((n, r) => n + r.total, 0);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const next = rows.find((r) => r.done < r.total);
  return (
    <section data-session-progress data-revision-path aria-label={FC.mbbs.revisionHeading} className="mt-3 rounded-xl border border-border/70 p-3 text-sm">
      <h3 className="font-semibold">{FC.mbbs.revisionHeading}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{FC.mbbs.revisionHint}</p>
      <div role="progressbar" aria-label={FC.mbbs.revisionHeading} aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-foreground/70" style={{ width: `${pct}%` }} />
      </div>
      <p role="status" data-revision-overall className="mt-1 text-xs">{FC.mbbs.revisionOverall(pct)}</p>
      <ul className="mt-2 space-y-1">
        {rows.map((r) => (
          <li key={r.key} data-revision-row={r.key} className="flex flex-wrap items-center justify-between gap-2">
            <span>
              {r.label}: {r.done} of {r.total}
            </span>
            <button type="button" onClick={() => onGo(r.step)} className="inline-flex min-h-9 items-center px-1 text-xs underline underline-offset-2" aria-label={`${FC.mbbs.revisionGo}: ${r.stepLabel}`}>
              {FC.mbbs.revisionGo}
            </button>
          </li>
        ))}
      </ul>
      {next ? (
        <button type="button" data-action="revision-continue" onClick={() => onGo(next.step)} className="mt-2 inline-flex min-h-9 items-center rounded-md border border-border px-3 text-sm">
          {FC.mbbs.revisionContinue(next.stepLabel)}
        </button>
      ) : (
        <p data-revision-done className="mt-2 text-xs">{FC.mbbs.revisionAllDone}</p>
      )}
    </section>
  );
}

function ModeFlow({ mode, lens }: { mode: ModeId; lens: ModeLens }) {
  const task = MODE_TASKS[mode];
  const baseId = React.useId();
  const steps = task.steps.map((s) => ({
    ...s,
    built: s.blocks.flatMap((k) => lens.blocks.filter((b) => b.kind === k)),
    missing: lens.unavailable.filter((u) => (s.blocks as readonly BlockKind[]).includes(u.kind)),
  }));
  const [active, setActive] = React.useState(0);
  const [visited, setVisited] = React.useState<ReadonlySet<number>>(new Set([0]));
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const flowRef = React.useRef<HTMLDivElement | null>(null);
  const moved = React.useRef(false);
  const [progress, setProgress] = React.useState<Record<string, { label: string; done: number; total: number }>>({});
  const [picked, setPicked] = React.useState<Record<string, string[]>>({});
  const report = React.useCallback((key: string, label: string, done: number, total: number) => {
    setProgress((p) => (p[key] && p[key].done === done && p[key].total === total && p[key].label === label ? p : { ...p, [key]: { label, done, total } }));
  }, []);
  const pick = React.useCallback((key: string, items: string[]) => {
    setPicked((p) => (JSON.stringify(p[key] ?? []) === JSON.stringify(items) ? p : { ...p, [key]: items }));
  }, []);

  const go = React.useCallback(
    (i: number, focus = false) => {
      const n = Math.max(0, Math.min(i, steps.length - 1));
      moved.current = !focus;
      setActive(n);
      setVisited((v) => new Set(v).add(n));
      if (focus) tabRefs.current[n]?.focus();
    },
    [steps.length]
  );
  // After Back / Next / a jump link, bring the new step into view and move focus to it, so a keyboard
  // or screen-reader user lands on the new content instead of staying on a control that has gone.
  React.useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    panelRefs.current[active]?.focus({ preventScroll: true });
    const top = flowRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) flowRef.current?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [active]);

  const goTo = React.useCallback((id: string) => go(Math.max(0, steps.findIndex((s) => s.id === id)), false), [go, steps]);

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const last = steps.length - 1;
    const next = e.key === "ArrowRight" || e.key === "ArrowDown" ? (i === last ? 0 : i + 1) : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i === 0 ? last : i - 1) : e.key === "Home" ? 0 : e.key === "End" ? last : null;
    if (next === null) return;
    e.preventDefault();
    go(next, true);
  };

  return (
    <FlowContext.Provider value={{ goTo, report, pick }}>
      <div ref={flowRef} className="mt-4 scroll-mt-24" data-flow-mode={mode}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p data-flow-progress role="status" className="text-xs font-medium text-muted-foreground">
            <span>{FC.shell.stepOf(active + 1, steps.length)}</span> · <span>{FC.shell.visited(visited.size, steps.length)}</span>
          </p>
          {mode !== "mbbs" && Object.keys(progress).length > 0 && (
            <div data-session-progress role="status" className="w-full text-xs text-muted-foreground">
              <span className="font-medium">{FC.shell.sessionProgress}: </span>
              {Object.values(progress)
                .map((p) => `${p.label} ${p.done} of ${p.total}`)
                .join(" · ")}
            </div>
          )}
          {visited.size === steps.length && (
            <p data-flow-complete role="status" className="w-full text-xs text-muted-foreground">
              <Check className="mr-1 inline h-3.5 w-3.5" aria-hidden />
              {FC.shell.complete(steps.length)}
            </p>
          )}
          {mode === "patient" && lens.blocks.some((b) => b.kind === "urgent-help") && (
            <button type="button" data-nav="urgent" onClick={() => goTo("watch")} className="inline-flex min-h-9 items-center rounded-md border border-destructive/40 px-3 text-sm">
              {FC.patient.urgentLink}
            </button>
          )}
        </div>
        {mode === "mbbs" && (
          <RevisionPath
            progress={progress}
            steps={steps.map((x) => ({ id: x.id, label: x.label }))}
            onGo={(id) => goTo(id)}
          />
        )}
        {mode === "resident" && (
          <p data-not-validation className="mt-2 rounded-md bg-muted/50 p-2 text-xs text-muted-foreground">
            {FC.resident.notValidation}
          </p>
        )}
        <div role="tablist" aria-label={FC.shell.stepsLabel} className="mt-2 flex flex-wrap gap-2">
          {steps.map((s, i) => {
            const selected = i === active;
            const available = s.built.length > 0;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                data-step={s.id}
                data-available={available}
                onClick={() => go(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={cn(
                  "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3 text-sm",
                  selected ? "border-foreground bg-foreground text-background" : "border-border",
                  !available && !selected && "text-muted-foreground"
                )}
              >
                {visited.has(i) && !selected ? <Check className="h-3.5 w-3.5" aria-hidden /> : null}
                {s.label}
              </button>
            );
          })}
        </div>

        {steps.map((s, i) => (
          <div
            key={s.id}
            role="tabpanel"
            id={`${baseId}-panel-${s.id}`}
            aria-labelledby={`${baseId}-tab-${s.id}`}
            hidden={i !== active}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            data-step-panel={s.id}
            tabIndex={-1}
            className="mt-4 space-y-4"
          >
            <h3 className="text-lg font-semibold">{s.label}</h3>
            {mode === "patient" && patientSourceLine(s.built) && (
              <p data-source-line className="text-xs text-muted-foreground">
                <span className="font-medium">{FC.shell.sourceLabel} </span>
                {patientSourceLine(s.built)}
              </p>
            )}
            {s.built.map((b) => (
              <React.Fragment key={b.kind}>{renderBlock(b)}</React.Fragment>
            ))}
            {s.built.length === 0 && (
              <p data-step-unavailable className="rounded-lg border border-border/70 p-4 text-sm">
                {FC.shell.stepUnavailable}
                {mode === "patient" ? ` ${FC.shell.patientUnavailableDirection}` : ""}
              </p>
            )}
            <Unavailable items={s.missing} />
            {mode === "patient" && s.built.length > 0 && s.missing.length > 0 && (
              <p data-patient-direction className="text-xs text-muted-foreground">
                {FC.shell.patientUnavailableDirection}
              </p>
            )}
          </div>
        ))}

        {mode === "patient" && (steps[active]?.id === "ask" || steps[active]?.id === "others") && (
          <section data-patient-list aria-label={FC.shell.listHeading} className="mt-5 rounded-xl border border-border/70 p-4 text-sm">
            <h3 className="font-semibold">{FC.shell.listHeading}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{FC.shell.listHint}</p>
            {Object.values(picked).flat().length === 0 ? (
              <p className="mt-2">{FC.shell.listEmpty}</p>
            ) : (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {Object.values(picked)
                  .flat()
                  .map((t, k) => (
                    <li key={`${k}-${t}`}>{t}</li>
                  ))}
              </ul>
            )}
          </section>
        )}
        <div className="mt-5 flex items-center justify-between gap-2 max-lg:pl-24">
          <button type="button" data-nav="back" disabled={active === 0} onClick={() => go(active - 1)} className="inline-flex min-h-9 items-center gap-1 rounded-md border border-border px-3 text-sm disabled:opacity-40">
            <ChevronLeft className="h-4 w-4" aria-hidden /> {FC.shell.back}
          </button>
          {active === steps.length - 1 ? (
            <button type="button" data-nav="restart" onClick={() => go(0)} className="inline-flex min-h-9 items-center gap-1 rounded-md border border-border px-3 text-sm">
              {FC.shell.restart}
            </button>
          ) : (
            <button type="button" data-nav="next" onClick={() => go(active + 1)} className="inline-flex min-h-9 items-center gap-1 rounded-md border border-border px-3 text-sm">
              {FC.shell.next} <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
      </div>
    </FlowContext.Provider>
  );
}

/** Store-free view: renders the lens for an explicit mode (also used by tests). */
export function ModeLensView({ drugName, lenses, mode }: Props & { mode: ModeId }) {
  const lens = lenses[mode];
  const spec = MODE_SPECS[mode];
  const task = MODE_TASKS[mode];
  return (
    <section
      id="mode-lens"
      data-mode-lens={mode}
      aria-label={`${spec.label} view of ${drugName}`}
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-8 sm:px-6"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{spec.label} view</p>
      <h2 className="mt-1 text-xl font-semibold">{task.title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{task.summary}</p>
      <ReviewNotice />
      <ModeFlow key={mode} mode={mode} lens={lens} />
    </section>
  );
}

export function ModeLensSection(props: Props) {
  const mode = useGuidedLearning((s) => s.mode);
  return <ModeLensView {...props} mode={mode} />;
}
