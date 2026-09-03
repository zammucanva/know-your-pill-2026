"use client";

import * as React from "react";
import { User, Stethoscope, Activity, Pill, ClipboardCheck, Brain, Target } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug, ClinicalCase } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugClinicalCases — multiple real patient cases (NOT placeholders).
 *
 * Supports a tabbed interface so each drug can have multiple cases:
 * adult, paediatric, geriatric, pregnancy, emergency, psychiatry.
 *
 * Client Component — uses useState for active tab.
 */
interface DrugClinicalCasesProps {
  drug: Drug;
}

const sectionMeta = [
  { key: "history", label: "History", icon: User },
  { key: "examination", label: "Examination", icon: Stethoscope },
  { key: "diagnosis", label: "Diagnosis", icon: Target },
  { key: "rationale", label: "Why this drug?", icon: Pill },
  { key: "management", label: "Management", icon: ClipboardCheck },
  { key: "outcome", label: "Outcome", icon: Activity },
] as const;

export function DrugClinicalCases({ drug }: DrugClinicalCasesProps) {
  const cases = drug.clinicalCases;
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeCase = cases[activeIdx] ?? cases[0];

  if (!activeCase) return null;

  return (
    <Section id="clinical-case">
      <Container>
        <SectionHeader
          eyebrow="Clinical Cases"
          title="See it in practice."
          description="Real patient encounters showing how this drug fits the broader treatment plan. Read the history, predict the diagnosis, then compare your reasoning with the case."
        />

        {/* Case selector tabs (only if multiple cases) */}
        {cases.length > 1 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {cases.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                  i === activeIdx
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border/80 bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                )}
              >
                Case {i + 1}: {c.title.split(" in ")[0]}
              </button>
            ))}
          </div>
        )}

        <CardPrimitive variant="elevated" interactive={false} showArrow={false} className="mt-6">
          <CardBody className="p-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft/60 text-brand">
                  <Brain className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <Badge variant="brand" size="sm">Real case · de-identified</Badge>
                  <h3 className="mt-1.5 text-h2 leading-tight">{activeCase.title}</h3>
                </div>
              </div>
              {cases.length > 1 && (
                <span className="text-caption text-muted-foreground">
                  Case {activeIdx + 1} of {cases.length}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-8 pb-0">
              <Callout variant="info" title="Presentation">
                {activeCase.presentation}
              </Callout>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 sm:grid-cols-2">
              {sectionMeta.map(({ key, label, icon: Icon }) => (
                <div key={key} className="rounded-xl border border-border/70 bg-muted/30 p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-brand" strokeWidth={2} />
                    <p className="text-overline text-muted-foreground">{label}</p>
                  </div>
                  <p className="mt-2 text-body-sm text-foreground/90 leading-relaxed">
                    {activeCase[key as keyof ClinicalCase] as string}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border/70 bg-brand-soft/20 p-6 sm:p-8">
              <p className="text-overline text-brand">Teaching Points</p>
              <ul className="mt-3 space-y-2.5">
                {activeCase.teachingPoints.map((tp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-[0.65rem] font-bold">
                      {i + 1}
                    </span>
                    <p className="text-body-sm text-foreground/90 leading-relaxed">{tp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </CardPrimitive>
      </Container>
    </Section>
  );
}
