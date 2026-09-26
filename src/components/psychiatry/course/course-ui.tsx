import * as React from "react";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { cn } from "@/lib/utils";
import {
  evidenceGradeMeta,
  type EvidenceGrade,
} from "@/lib/kyp/data/psychiatry-courses/types";

/**
 * Shared UI atoms for the Psychiatry learning-system course layer.
 *
 * EvidenceBadge — the four-grade honesty system (brief §10):
 * established / supported / proposed / uncertain, each with a stable
 * colour language so learners learn to READ the grade at a glance.
 */

const gradeStyles: Record<
  EvidenceGrade,
  { variant: "success" | "brand" | "warning" | "outline"; className: string }
> = {
  established: { variant: "success", className: "" },
  supported: { variant: "brand", className: "" },
  proposed: { variant: "warning", className: "" },
  uncertain: { variant: "outline", className: "" },
};

export function EvidenceBadge({ grade, className }: { grade: EvidenceGrade; className?: string }) {
  const config = gradeStyles[grade];
  return (
    <Badge
      variant={config.variant}
      size="sm"
      title={evidenceGradeMeta[grade].description}
      className={cn("cursor-help", className)}
    >
      {evidenceGradeMeta[grade].label}
    </Badge>
  );
}

/** Legend strip explaining the four evidence grades. Rendered once per
 *  course in Lesson 2 so the grading language is explicit, not folklore. */
export function EvidenceLegend({ className }: { className?: string }) {
  const grades: EvidenceGrade[] = ["established", "supported", "proposed", "uncertain"];
  return (
    <CardPrimitive variant="flat" interactive={false} showArrow={false} className={className}>
      <CardBody className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-4 py-3">
        <span className="text-xs font-medium text-muted-foreground">How to read the grades:</span>
        {grades.map((g) => (
          <span key={g} className="flex items-center gap-1.5">
            <EvidenceBadge grade={g} />
            <span className="text-caption text-muted-foreground">{evidenceGradeMeta[g].description}</span>
          </span>
        ))}
      </CardBody>
    </CardPrimitive>
  );
}

/** Numbered step chain used by mechanism steps and pathway chains. */
export function StepChain({
  steps,
  className,
}: {
  steps: { label: string; detail?: string }[];
  className?: string;
}) {
  return (
    <ol className={cn("relative space-y-0", className)}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <li className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden className="w-px flex-1 bg-border/70" />
              )}
            </div>
            <div className="min-w-0 flex-1 pb-6 last:pb-0">
              <p className="text-sm font-medium leading-snug text-foreground">{step.label}</p>
              {step.detail && (
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
              )}
            </div>
          </li>
        </React.Fragment>
      ))}
    </ol>
  );
}
