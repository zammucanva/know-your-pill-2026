import { Star, FileQuestion } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, ExamFrequency, PYQMetadata } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugExamFrequency — star ratings showing how frequently this drug
 * is tested in each Indian examination.
 *
 * Rendered as a compact callout (not a full section) — placed in the
 * Exam Lens section header so students immediately know importance.
 *
 * Server Component.
 */
interface DrugExamFrequencyProps {
  drug: Drug;
}

const examLabels: { key: keyof ExamFrequency; label: string }[] = [
  { key: "neetPg", label: "NEET PG" },
  { key: "inicet", label: "INICET" },
  { key: "fmge", label: "FMGE" },
  { key: "mbbsViva", label: "MBBS Viva" },
];

export function DrugExamFrequency({ drug }: DrugExamFrequencyProps) {
  const freq = drug.examFrequency;
  if (!freq) return null;

  return (
    <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-neural/20 bg-neural-soft/10">
      <CardBody className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="h-4 w-4 text-neural" />
          <p className="text-overline text-neural">Exam Frequency</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {examLabels.map(({ key, label }) => {
            const stars = freq[key];
            return (
              <div key={key} className="rounded-md border border-border/50 bg-background/60 p-2 text-center">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3 w-3",
                        i < stars ? "fill-neural text-neural" : "text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </CardPrimitive>
  );
}

/**
 * DrugPYQ — Previous Year Question metadata.
 *
 * Shows concept-level PYQ metadata (exam, year, concept tested).
 * No copyrighted questions — just the concepts and frequency.
 *
 * Server Component.
 */
interface DrugPYQProps {
  drug: Drug;
}

export function DrugPYQ({ drug }: DrugPYQProps) {
  const pyqs = drug.pyqMetadata;
  if (!pyqs || pyqs.length === 0) return null;

  // Group by exam
  const byExam = pyqs.reduce((acc, pyq) => {
    if (!acc[pyq.exam]) acc[pyq.exam] = [];
    acc[pyq.exam].push(pyq);
    return acc;
  }, {} as Record<string, PYQMetadata[]>);

  return (
    <div className="mt-6">
      <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-neural/20">
        <CardBody>
          <div className="flex items-center gap-2 mb-3">
            <FileQuestion className="h-4 w-4 text-neural" />
            <p className="text-overline text-neural">Previous Year Questions (Concept-Level)</p>
            <Badge variant="neural" size="sm">{pyqs.length} PYQs</Badge>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Concepts tested in previous exams — not the actual copyrighted questions.
            Use these to identify high-yield topics for your preparation.
          </p>
          <div className="space-y-3">
            {Object.entries(byExam).map(([exam, items]) => (
              <div key={exam}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">{exam}</p>
                <div className="space-y-1">
                  {items.map((pyq, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-md border border-border/50 bg-background/60 p-2">
                      <Badge variant="outline" size="sm" className="shrink-0 tabular-nums">{pyq.year}</Badge>
                      <div>
                        <p className="text-xs font-medium text-foreground">{pyq.concept}</p>
                        <p className="text-[0.65rem] text-muted-foreground">{pyq.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </CardPrimitive>
    </div>
  );
}
