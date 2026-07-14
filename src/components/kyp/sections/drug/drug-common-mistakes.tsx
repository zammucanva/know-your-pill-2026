import { X, Check, AlertCircle } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugCommonMistakes — simplified "What NOT to do" section.
 *
 * Uses compact lists instead of nested cards.
 * Mistakes and corrections are inline — no borders, just typography.
 *
 * Server Component.
 */
interface DrugCommonMistakesProps {
  drug: Drug;
}

export function DrugCommonMistakes({ drug }: DrugCommonMistakesProps) {
  const mistakes = drug.commonMistakes;
  if (!mistakes?.length) return null;

  return (
    <Section id="common-mistakes">
      <Container>
        <SectionHeader
          eyebrow="Common Mistakes"
          title="What NOT to do."
          description="Learn from the errors that students and interns commonly make."
          tone="emergency"
        />

        <div className="mt-8 space-y-3">
          {mistakes.map((m, i) => (
            <div key={i} className="grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-3">
              {/* Mistake number + text */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emergency/10 text-emergency">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium text-foreground">{m.mistake}</p>
              </div>

              {/* Why + correction — inline, no card */}
              <div className="sm:pl-7">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <AlertCircle className="inline h-3 w-3 -mt-0.5 mr-1 text-warning" />
                  {m.why}
                </p>
                <p className="mt-0.5 text-xs text-foreground/90 leading-relaxed">
                  <Check className="inline h-3 w-3 -mt-0.5 mr-1 text-success" />
                  {m.correction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
