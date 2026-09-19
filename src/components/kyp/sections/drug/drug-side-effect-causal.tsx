"use client";

import * as React from "react";
import { Link2, Route } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Drug } from "@/lib/kyp/data/types";

/**
 * DrugSideEffectCausal — the "Why this effect" causal view (NEXT-X7).
 *
 * Given a side effect, walks the learner through the chain already
 * encoded in the drug's own data — target/receptor → documented
 * mechanism steps → net effect → the side effect — as a readable
 * explanation rather than a diagram alone.
 *
 * Content governance (same as the whole product):
 *   - every rendered sentence is a VERBATIM value from the drug's own
 *     locked fields (mechanism.molecularTarget / steps / effect, the
 *     side effect's own description and management);
 *   - the connective text is purely structural ("Target", "Next in
 *     the documented mechanism", "The side effect, as documented") —
 *     it presents linked fields together, it never states a new
 *     medical claim or an unmodelled cause;
 *   - plain-language variant: the patient-mode fields
 *     (patientMode.mechanism / patientMode.sideEffects) when the drug
 *     carries them — the toggle is hidden when it does not.
 */

export function DrugSideEffectCausal({ drug }: { drug: Drug }) {
  const all = React.useMemo(
    () => [
      ...drug.commonSideEffects.map((s) => ({ ...s, kind: "common" as const })),
      ...drug.seriousSideEffects.map((s) => ({ ...s, kind: "serious" as const })),
    ],
    [drug]
  );

  const [selected, setSelected] = React.useState(0);
  const [plain, setPlain] = React.useState(false);
  const hasPatientMode = Boolean(
    drug.patientMode?.mechanism && drug.patientMode?.sideEffects
  );

  if (all.length === 0) return null;
  const effect = all[Math.min(selected, all.length - 1)];

  return (
    <div className="mt-12 rounded-xl border border-border/60 bg-card/40 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-overline text-muted-foreground">
          <Route className="h-3.5 w-3.5" aria-hidden />
          Why this effect — the causal chain
        </p>
        {hasPatientMode && (
          <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={plain}
              onChange={(e) => setPlain(e.target.checked)}
              className="h-3.5 w-3.5 rounded border-border accent-[var(--brand)]"
            />
            Plain language
          </label>
        )}
      </div>

      {/* Side-effect picker */}
      <label className="mt-4 block">
        <span className="sr-only">Choose a side effect</span>
        <select
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
          className="w-full max-w-md rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground kyp-focus-ring"
        >
          {all.map((s, i) => (
            <option key={`${s.name}-${i}`} value={i}>
              {s.name} ({s.kind === "common" ? "common" : "serious"})
            </option>
          ))}
        </select>
      </label>

      {/* The chain */}
      <ol className="mt-6 space-y-0">
        {plain && hasPatientMode ? (
          <>
            <CausalStep
              label="How this medication works — plain language"
              body={drug.patientMode!.mechanism}
            />
            <CausalStep
              label="Its side effects — plain language"
              body={drug.patientMode!.sideEffects}
              last
            />
          </>
        ) : (
          <>
            <CausalStep
              label="Target / receptor"
              body={drug.mechanism.molecularTarget}
            />
            <CausalStep
              label="Documented mechanism, step by step"
              body={drug.mechanism.steps.join(" ")}
            />
            <CausalStep
              label="Net effect"
              body={drug.mechanism.effect}
            />
            <CausalStep
              label={`The side effect, as documented — ${effect.name}`}
              body={
                effect.management
                  ? `${effect.description} Management: ${effect.management}`
                  : effect.description
              }
              last
            />
          </>
        )}
      </ol>

      <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground/60 leading-relaxed">
        <Link2 className="mt-0.5 h-3 w-3 shrink-0" aria-hidden />
        Assembled from this medication&apos;s own reviewed fields and
        presented together — the connective structure is ours, every fact
        is the page&apos;s existing content.
      </p>
    </div>
  );
}

/** One link of the chain — a verbatim value under a structural label. */
function CausalStep({ label, body, last }: { label: string; body: string; last?: boolean }) {
  return (
    <li
      className={cn(
        "relative border-l border-brand/40 pb-5 pl-5",
        last && "border-transparent pb-0"
      )}
    >
      {!last && (
        <span
          className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full bg-brand/70"
          aria-hidden
        />
      )}
      {last && (
        <span
          className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full bg-brand"
          aria-hidden
        />
      )}
      <p className="text-overline text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/90 [overflow-wrap:anywhere]">
        {body}
      </p>
    </li>
  );
}
