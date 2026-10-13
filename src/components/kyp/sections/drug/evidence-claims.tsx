import * as React from "react";
import { EXPLANATION_COPY as EC } from "@/lib/kyp/modes/explanation-copy";
import type { ClaimCategory, EvidenceClaimView } from "@/lib/kyp/evidence/types";

/**
 * Source-backed statements for one medication. Each statement shows its plain wording, the exact source it
 * rests on (organisation, title, date, identifier, access date), who it applies to, what must not be assumed
 * from it, and the source's exact words on request. Server Component, no registry import.
 */

const ORDER: ClaimCategory[] = ["what-it-is", "used-for", "onset", "how-to-take", "precaution", "contraindication", "interactions", "side-effects", "monitoring", "stopping", "urgent-help"];

export function groupClaims(views: EvidenceClaimView[]): { category: ClaimCategory; label: string; items: EvidenceClaimView[] }[] {
  return ORDER.map((category) => ({ category, label: EC.evidence.group[category], items: views.filter((v) => v.claim.category === category) })).filter((g) => g.items.length > 0);
}

export function EvidenceClaims({ views }: { views: EvidenceClaimView[] }) {
  if (!views.length) return null;
  return (
    <section id="pe-source" aria-labelledby="pe-source-h" data-evidence-claims="" className="scroll-mt-24">
      <h3 id="pe-source-h" className="text-h3">
        {EC.evidence.heading}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{EC.evidence.intro}</p>
      <p data-jurisdiction-note="" className="mt-2 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
        {EC.evidence.jurisdiction}
      </p>
      <div className="mt-4 space-y-6">
        {groupClaims(views).map((g) => (
          <div key={g.category} data-claim-group={g.category}>
            <h4 className="text-sm font-semibold">{g.label}</h4>
            <ul className="mt-2 space-y-3">
              {g.items.map(({ claim, source }) => (
                <li key={claim.id} data-claim={claim.id} data-claim-category={claim.category} className="rounded-lg border border-border/70 p-3 text-sm">
                  <p className="leading-relaxed">{claim.patientWording}</p>
                  <p data-claim-source="" className="mt-2 text-xs text-muted-foreground">
                    {EC.evidence.sourcePrefix} {source.organisation}, <a href={source.url} rel="noopener noreferrer" className="underline underline-offset-2">{source.title}</a>
                    {source.publishedDate ? `, published ${source.publishedDate}` : ""}. DailyMed set id {source.identifier}. Accessed {source.accessedAt}.
                    {source.formulation ? ` Applies to: ${source.formulation}.` : ""}
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
                    {[...claim.applicability, ...claim.limitations].map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  {claim.replacesRule && <p className="mt-1 text-xs text-muted-foreground">{EC.evidence.replaces}</p>}
                  <p data-claim-review="" className="mt-1 inline-block rounded-full border border-border px-2 text-xs">
                    {EC.evidence.notReviewed}
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs underline underline-offset-2">{EC.evidence.exactWords}</summary>
                    <blockquote data-claim-passage="" className="mt-1 border-l-2 border-border pl-3 text-xs">
                      {claim.passage}
                    </blockquote>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
