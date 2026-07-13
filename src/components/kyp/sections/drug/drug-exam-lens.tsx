import { GraduationCap, Award, Stethoscope, BookOpen, Brain } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, ExamLens as ExamLensType } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugExamLens — structured exam content by Indian examination.
 *
 * Replaces the flat examPearls array with organised content for:
 *   - MBBS (viva, practical, long answer)
 *   - NEET PG (high yield, PYQ concepts)
 *   - INICET (clinical reasoning)
 *   - FMGE (frequently tested facts)
 *   - Psychiatry Residency (advanced pearls)
 *
 * Falls back to the old examPearls array if examLens is not populated.
 *
 * Server Component.
 */
interface DrugExamLensProps {
  drug: Drug;
}

const examConfig = [
  {
    key: "mbbs" as const,
    label: "MBBS",
    icon: BookOpen,
    tone: "text-brand",
    bg: "bg-brand-soft/30",
    border: "border-brand/20",
    badge: "outline" as const,
    description: "Viva questions, practical skills, long-answer topics",
  },
  {
    key: "neetPg" as const,
    label: "NEET PG",
    icon: GraduationCap,
    tone: "text-neural",
    bg: "bg-neural-soft/30",
    border: "border-neural/20",
    badge: "neural" as const,
    description: "High-yield facts + previous year question concepts",
  },
  {
    key: "inicet" as const,
    label: "INICET",
    icon: Brain,
    tone: "text-warning",
    bg: "bg-warning-soft/30",
    border: "border-warning/20",
    badge: "warning" as const,
    description: "Clinical reasoning, mechanism-based questions",
  },
  {
    key: "fmge" as const,
    label: "FMGE",
    icon: Stethoscope,
    tone: "text-success",
    bg: "bg-success-soft/30",
    border: "border-success/20",
    badge: "success" as const,
    description: "Frequently tested facts for foreign medical graduates",
  },
  {
    key: "psychiatryResidency" as const,
    label: "Psychiatry Residency",
    icon: Award,
    tone: "text-emergency",
    bg: "bg-emergency-soft/30",
    border: "border-emergency/20",
    badge: "emergency" as const,
    description: "Advanced clinical pearls for postgraduates",
  },
];

export function DrugExamLens({ drug }: DrugExamLensProps) {
  // If examLens is populated, use the structured version
  if (drug.examLens) {
    return <StructuredExamLens drug={drug} />;
  }

  // Fall back to old examPearls if examLens is not yet populated
  if (drug.examPearls && drug.examPearls.length > 0) {
    return (
      <Section id="exam-pearls" className="bg-muted/20">
        <Container>
          <SectionHeader
            eyebrow="High-Yield Exam Facts"
            title="What they'll actually test you on."
            description="MBBS, NEET-PG, USMLE, PLAB — these are the facts that show up repeatedly in pharmacology and psychiatry exams."
            tone="neural"
          />
          <ol className="mt-10 space-y-3">
            {drug.examPearls.map((pearl, i) => (
              <li key={i}>
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="flex items-start gap-4 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neural-soft/60 text-neural font-mono text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body-sm text-foreground/90 leading-relaxed pt-1">{pearl}</p>
                  </CardBody>
                </CardPrimitive>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    );
  }

  return null;
}

function StructuredExamLens({ drug }: { drug: Drug }) {
  const lens = drug.examLens!;

  return (
    <Section id="exam-lens" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Exam Lens"
          title="What they'll actually test you on."
          description="Structured by Indian examination — MBBS viva and practical, NEET PG high-yield, INICET clinical reasoning, FMGE frequently tested, and psychiatry residency advanced pearls."
          tone="neural"
        />

        <div className="mt-10 space-y-6">
          {examConfig.map(({ key, label, icon: Icon, tone, bg, border, badge, description }) => {
            const section = lens[key];
            if (!section) return null;

            // Flatten the sub-sections into an array of { title, items }
            const subSections = Object.entries(section).map(([subKey, items]) => ({
              title: formatSubKey(key, subKey),
              items: items as string[],
            }));

            const totalItems = subSections.reduce((sum, s) => sum + s.items.length, 0);
            if (totalItems === 0) return null;

            return (
              <CardPrimitive key={key} variant="flat" interactive={false} showArrow={false} className={cn("border", border)}>
                <CardBody>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", bg, tone)}>
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-h3">{label}</h3>
                          <Badge variant={badge} size="sm">{totalItems} items</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-sections */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {subSections.map((sub) => (
                      <div key={sub.title}>
                        <p className="text-overline text-muted-foreground mb-2">{sub.title}</p>
                        <ul className="space-y-1.5">
                          {sub.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 rounded-md border border-border/50 bg-background/60 p-2 text-xs text-foreground/90 leading-relaxed">
                              <span className={cn("mt-1 h-1 w-1 shrink-0 rounded-full", tone.replace("text-", "bg-"))} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function formatSubKey(examKey: string, subKey: string): string {
  const labels: Record<string, string> = {
    viva: "Viva Questions",
    practical: "Practical",
    longAnswer: "Long Answer",
    highYield: "High-Yield Facts",
    pyqConcepts: "Previous Year Questions",
    clinicalReasoning: "Clinical Reasoning",
    frequentlyTested: "Frequently Tested",
    advancedPearls: "Advanced Pearls",
  };
  return labels[subKey] ?? subKey;
}
