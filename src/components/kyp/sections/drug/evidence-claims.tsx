import * as React from "react";
import { EXPLANATION_COPY as EC } from "@/lib/kyp/modes/explanation-copy";
import type { EvidenceClaimView } from "@/lib/kyp/evidence/types";
import { sourceIdLabel, sourceKind } from "@/lib/kyp/evidence/source-label";
import { formOf } from "@/lib/kyp/evidence/label-form";

/**
 * Source-backed statements for one part of the Patient explanation. Each card shows the statement, a one-line
 * source with date and jurisdiction, the review status, and (in a disclosure) who it applies to, what must not
 * be assumed, and the label's exact words for restated claims. Long quoted text shows its first lines and keeps
 * the rest behind a disclosure. Server Component, no registry import.
 */

const LEAD_LINES = 4;

function Wording({ text }: { text: string }) {
  const lines = text.split("\n");
  if (lines.length <= LEAD_LINES + 1 && text.length < 700) return <p className="whitespace-pre-line leading-relaxed">{text}</p>;
  const lead = lines.slice(0, LEAD_LINES).join("\n");
  const rest = lines.slice(LEAD_LINES).join("\n");
  return (
    <>
      <p className="whitespace-pre-line leading-relaxed">{lead}</p>
      <details data-long-text="" className="mt-2">
        <summary className="cursor-pointer text-xs underline underline-offset-2">{EC.part.longRest}</summary>
        <p className="mt-2 whitespace-pre-line leading-relaxed">{rest}</p>
      </details>
    </>
  );
}

export function EvidenceClaimCards({ views }: { views: EvidenceClaimView[] }) {
  if (!views.length) return null;
  return (
    <ul data-evidence-claims="" className="mt-3 space-y-3">
      {views.map(({ claim, source }) => (
        <li key={claim.id} data-claim={claim.id} data-claim-category={claim.category} data-claim-kind={claim.wordingKind} className="rounded-lg border border-sky-500/30 p-3 text-sm">
          <p className="text-xs font-medium text-muted-foreground">{EC.evidence.group[claim.category]}</p>
          <div className="mt-1">
            <Wording text={claim.patientWording} />
          </div>
          <p data-claim-source="" className="mt-2 text-xs text-muted-foreground">
            {EC.evidence.sourcePrefix} <a href={source.url} rel="noopener noreferrer" className="underline underline-offset-2">{source.title}</a>. {sourceKind(source)}.
          </p>
          {(() => {
            const form = formOf(source.formulation ?? source.title);
            return form.plainOral ? null : (
              <p data-claim-form={form.label} className="mt-1 rounded border border-amber-500/50 px-2 py-1 text-xs">
                {EC.evidence.formNote(form.label)}
              </p>
            );
          })()}
          <p data-claim-review="" className="mt-1 inline-block rounded-full border border-border px-2 text-xs">
            {EC.evidence.notReviewed}
          </p>
          <details className="mt-2">
            <summary className="cursor-pointer text-xs underline underline-offset-2">About this statement</summary>
            <p data-claim-source-detail="" className="mt-1 text-xs text-muted-foreground">
              {source.organisation}
              {source.publishedDate ? `, published ${source.publishedDate}` : ""}. {sourceIdLabel(source)}. Accessed {source.accessedAt}.
            </p>
            <p data-jurisdiction-note="" className="mt-1 text-xs">
              {EC.evidence.jurisdiction[source.jurisdiction === "UK" || source.jurisdiction === "IN" ? source.jurisdiction : "US"]}
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
              {[...claim.applicability, ...claim.limitations].map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            {claim.replacesRule && <p className="mt-1 text-xs text-muted-foreground">{EC.evidence.replaces}</p>}
            {claim.wordingKind === "paraphrase" && (
              <>
                <p className="mt-2 text-xs font-medium">{EC.evidence.exactWords}</p>
                <blockquote data-claim-passage="" className="mt-1 border-l-2 border-border pl-3 text-xs">
                  {claim.passage}
                </blockquote>
              </>
            )}
            {claim.wordingKind === "exact-quote" && <p className="mt-1 text-xs text-muted-foreground">This statement is the label's own text, quoted exactly.</p>}
          </details>
        </li>
      ))}
    </ul>
  );
}
