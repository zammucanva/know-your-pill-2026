"use client";

import * as React from "react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import type { Drug } from "@/lib/kyp/data";

/**
 * PatientQuickFacts — the plain-language version of the quick-facts
 * strip shown in Patient mode. Every other mode keeps the canonical
 * clinical DrugQuickFacts rendering.
 *
 * Client component (reads the guided-learning mode), receiving only
 * serializable data as props.
 */
interface PatientQuickFactsProps {
  drug: Drug;
  guide?: PatientGuide;
}

export function PatientQuickFacts({ drug, guide }: PatientQuickFactsProps) {
  const mode = useGuidedLearning((s) => s.mode);
  const isPatient = mode === "patient" && guide !== undefined;

  if (!isPatient) {
    // Medical variant — the canonical clinical quick facts.
    const facts = [
      {
        label: "Drug class",
        value: drug.drugClassLabel,
        text: drug.drugClassFullName,
      },
      {
        label: "Primary uses",
        value: drug.indications
          .filter((i) => i.status === "fda-approved")
          .slice(0, 3)
          .map((i) => i.name.split(" (")[0])
          .join(", "),
        text: `${drug.indications.length} total indications (${drug.indications.filter((i) => i.status === "fda-approved").length} FDA-approved)`,
      },
      {
        label: "Typical onset",
        value: "4–6 weeks",
        text: "Full antidepressant effect. Anxiety disorders may take 8–12 weeks.",
      },
      {
        label: "Key side effects",
        value: drug.commonSideEffects
          .slice(0, 3)
          .map((s) => s.name.split(" & ")[0])
          .join(", "),
        text: `${drug.commonSideEffects.length} common, ${drug.seriousSideEffects.length} serious — see full list below.`,
      },
    ];

    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <CardPrimitive key={f.label} variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <p className="text-overline text-muted-foreground">{f.label}</p>
              <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
                {f.value}
              </p>
              <p className="mt-2 text-caption text-muted-foreground leading-relaxed">{f.text}</p>
            </CardBody>
          </CardPrimitive>
        ))}
      </div>
    );
  }

  // Patient variant — plain language, per-drug timing from the guide.
  const g = guide!;
  const facts = [
    {
      label: "What type of medicine",
      value: drug.drugClassLabel,
      text: g.classInPlainWords,
    },
    {
      label: "What it's used for",
      value: g.usedFor.uses
        .slice(0, 3)
        .map((u) => u.name.split(" (")[0])
        .join(", "),
      text: "Full list with plain-language explanations in the guide below.",
    },
    {
      label: "Time to notice a difference",
      value: g.timelineShort,
      text: g.usuallyTaken,
    },
    {
      label: "Most common side effects",
      value: g.commonSideEffects.list
        .slice(0, 3)
        .map((s) => s.split(" — ")[0])
        .join(", "),
      text: "Usually settle in the first 1–2 weeks as your body adapts.",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f) => (
        <CardPrimitive key={f.label} variant="flat" interactive={false} showArrow={false}>
          <CardBody>
            <p className="text-overline text-muted-foreground">{f.label}</p>
            <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
              {f.value}
            </p>
            <p className="mt-2 text-caption text-muted-foreground leading-relaxed">{f.text}</p>
          </CardBody>
        </CardPrimitive>
      ))}
    </div>
  );
}
