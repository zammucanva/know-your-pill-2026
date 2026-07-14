import { XCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugCommonMistakes — "What NOT to do" section.
 *
 * Each mistake shows: the mistake (✗), why it's wrong, and what to do instead (✓).
 * Teaches clinical thinking by showing common errors.
 *
 * Also renders "When NOT to Use" red cards.
 *
 * Server Component.
 */
interface DrugCommonMistakesProps {
  drug: Drug;
}

export function DrugCommonMistakes({ drug }: DrugCommonMistakesProps) {
  const mistakes = drug.commonMistakes;
  const whenNot = drug.whenNotToUse;
  if (!mistakes?.length && !whenNot?.length) return null;

  return (
    <Section id="common-mistakes" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Common Mistakes & Red Flags"
          title="What NOT to do."
          description="Learn from the errors that students and interns commonly make. Each mistake shows why it's wrong and what to do instead."
          tone="emergency"
        />

        {/* Common Mistakes */}
        {mistakes && mistakes.length > 0 && (
          <div className="mt-10">
            <h3 className="text-h3 mb-4">Common Mistakes</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {mistakes.map((m, i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="border-emergency/20">
                  <CardBody className="p-4">
                    {/* Mistake */}
                    <div className="flex items-start gap-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
                      <p className="text-body-sm font-medium text-foreground">{m.mistake}</p>
                    </div>

                    {/* Why */}
                    <div className="mt-2 flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" />
                      <p className="text-xs text-muted-foreground leading-relaxed">{m.why}</p>
                    </div>

                    {/* Correction */}
                    <div className="mt-2 flex items-start gap-2 rounded-md border border-success/20 bg-success-soft/20 p-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                      <p className="text-xs text-foreground/90 leading-relaxed">{m.correction}</p>
                    </div>
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
          </div>
        )}

        {/* When NOT to Use — red cards */}
        {whenNot && whenNot.length > 0 && (
          <div className="mt-12">
            <h3 className="text-h3 flex items-center gap-2">
              <span>When NOT to use {drug.genericName}</span>
              <Badge variant="emergency" size="sm">Red Flags</Badge>
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whenNot.map((w, i) => (
                <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="border-emergency/30 bg-emergency-soft/10">
                  <CardBody className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
                      <p className="text-body-sm font-semibold text-foreground">{w.scenario}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{w.reason}</p>
                    <div className="rounded-md border border-success/20 bg-success-soft/20 p-2">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-success">Instead</p>
                      <p className="mt-0.5 text-xs text-foreground/90 leading-relaxed">{w.alternative}</p>
                    </div>
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
