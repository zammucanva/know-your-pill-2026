import * as React from "react";
import { cn } from "@/lib/utils";
import { EXPLANATION_COPY as EC, originLabel, type ExplanationSegment } from "@/lib/kyp/modes/explanation-copy";

/** Provenance-labelled sentences. No hooks and no registry import, so server and client components can use it. */

/** Consecutive sentences with the same provenance are shown together under one label. */
export function groupSegments(segments: ExplanationSegment[]): { key: string; origin: ExplanationSegment["origin"]; label: string; sentences: ExplanationSegment[] }[] {
  const out: { key: string; origin: ExplanationSegment["origin"]; label: string; sentences: ExplanationSegment[] }[] = [];
  for (const s of segments) {
    const label = originLabel(s);
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
    </div>
  );
}

