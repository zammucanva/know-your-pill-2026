import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugClinicalPearls — high-yield insights for practising clinicians.
 *
 * Server Component.
 */
interface DrugClinicalPearlsProps {
  drug: Drug;
}

export function DrugClinicalPearls({ drug }: DrugClinicalPearlsProps) {
  return (
    <Section id="clinical-pearls">
      <Container>
        <SectionHeader
          eyebrow="Clinical Pearls"
          title="What every prescriber should know."
          description="Distilled clinical wisdom — the kind of insights that separate a competent prescriber from an excellent one."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {drug.clinicalPearls.map((pearl, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="flex items-start gap-3 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft/60 text-brand font-mono text-xs font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body-sm text-foreground/90 leading-relaxed pt-0.5">{pearl}</p>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}
