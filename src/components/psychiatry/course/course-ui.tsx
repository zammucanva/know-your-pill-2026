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

/**
 * Numbered step chain — RETIRED from mechanism duty by the mechanism-system
 * replacement (KYPMechanismCanvas renders every mechanism now). Zero
 * consumers remain; the export was removed. Historical marker only.
 */
