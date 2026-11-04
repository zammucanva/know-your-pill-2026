import * as React from "react";
import { cn } from "@/lib/utils";
import { EXPLANATION_COPY as EC, originLabel, type ExplanationSegment } from "@/lib/kyp/modes/explanation-copy";

/** Provenance-labelled sentences. No hooks and no registry import, so server and client components can use it. */

/** Consecutive sentences with the same provenance are shown together under one label. */
export function groupSegments(segments: ExplanationSegment[]): { key: string; origin: ExplanationSegment["origin"]; label: string; sentences: ExplanationSegment[] }[] {
  const out: { key: string; origin: ExplanationSegment["origin"]; label: string; sentences: ExplanationSegment[] }[] = [];
  for (const s of segments) {
    if (s.handling === "withhold") continue; // withheld sentences are never grouped as guidance
    const label = s.rule?.kind === "direction" ? EC.directionLabel : originLabel(s);
    const last = out[out.length - 1];
    if (last && last.label === label) last.sentences.push(s);
    else out.push({ key: `${out.length}-${label}`, origin: s.origin, label, sentences: [s] });
  }
  return out;
}

const tone: Record<ExplanationSegment["origin"], string> = {
  "authored-guide": "border-success/40",
  "registry-specific": "border-border",
  "class-shared": "border-amber-500/40",
  template: "border-amber-500/40 bg-amber-500/5",
};

export function ExplanationText({ segments, id }: { segments: ExplanationSegment[]; id?: string }) {
  const withheld = segments.filter((s) => s.handling === "withhold");
  return (
    <div id={id} className="space-y-3">
      {groupSegments(segments).map((g) => (
        <div key={g.key} data-origin={g.origin} className={cn("rounded-lg border p-3", tone[g.origin])}>
          <p className="text-body leading-relaxed">
            {g.sentences.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 ? " " : null}
                {s.text}
              </React.Fragment>
            ))}
          </p>
          <p data-origin-label className="mt-1.5 text-xs text-muted-foreground">
            {g.label}
          </p>
          {g.sentences.map((s, i) =>
            s.indicationCheck ? (
              <p key={`c${i}`} data-indication-check={s.indicationCheck} className="mt-1 text-xs text-muted-foreground">
                {s.indicationCheck === "matches-registry-indication" ? EC.indicationMatches : EC.indicationNotMatched}
              </p>
            ) : null
          )}
        </div>
      ))}
      {withheld.length > 0 && (
        <details data-withheld className="rounded-lg border border-dashed border-amber-500/50 p-3 text-sm">
          <summary className="cursor-pointer font-medium">{EC.withheldSummary(withheld.length)}</summary>
          <p className="mt-2 text-xs text-muted-foreground">{EC.withheldNote}</p>
          <ul className="mt-2 space-y-2">
            {withheld.map((s, i) => (
              <li key={i} data-withheld-rule={s.rule?.id} className="rounded-md bg-muted/40 p-2">
                <p>{s.text}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {EC.withheldLabel}
                  {s.sharedBy ? `. Same wording on ${s.sharedBy} medicines.` : "."} {s.rule?.why}
                </p>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
