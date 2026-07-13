import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugPatientEducation — the patient-facing plain-language section.
 *
 * Distinct from Clinical Pearls (which are for MBBS students). This section
 * is what a pharmacist would say to a patient picking up their first
 * prescription.
 *
 * Server Component.
 */
interface DrugPatientEducationProps {
  drug: Drug;
}

export function DrugPatientEducation({ drug }: DrugPatientEducationProps) {
  return (
    <Section id="patient-education" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Patient Education"
          title="In plain language — what you need to know."
          description="This section is written for someone picking up their first prescription. The same content can be printed as a patient leaflet."
          tone="success"
        />

        {/* Plain-language explanation */}
        <div className="mt-10">
          <Callout variant="success" title="What this medicine does (in plain language)">
            {drug.patientExplanation}
          </Callout>
        </div>

        {/* Patient education points */}
        <div className="mt-10">
          <h3 className="text-h3">Key things to remember</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {drug.patientEducationPoints.map((point, i) => (
              <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
                <CardBody className="flex items-start gap-3 p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success font-mono text-xs font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-body-sm text-foreground/90 leading-relaxed pt-0.5">
                    {point}
                  </p>
                </CardBody>
              </CardPrimitive>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
