import { Check } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugLearningObjectives — "After reading this page you should be able to…"
 *
 * Placed early in the page so learners know what they're about to learn.
 *
 * Server Component.
 */
interface DrugLearningObjectivesProps {
  drug: Drug;
}

export function DrugLearningObjectives({ drug }: DrugLearningObjectivesProps) {
  return (
    <Section id="learning-objectives" spacing="tight">
      <Container>
        <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20 bg-brand-soft/20">
          <CardBody className="p-6 sm:p-8">
            <p className="text-overline text-brand">Learning Objectives</p>
            <h2 className="mt-2 text-h2 text-foreground">
              After reading this page you should be able to:
            </h2>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {drug.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-body-sm text-foreground/90 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </CardPrimitive>
      </Container>
    </Section>
  );
}
