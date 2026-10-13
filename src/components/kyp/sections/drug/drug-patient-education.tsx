import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";
import { EXPLANATION_COPY as EC } from "@/lib/kyp/modes/explanation-copy";
import { segmentRegistryText } from "@/lib/kyp/modes/patient-explanation";

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
  // Sentences that are the same claim for dozens of unrelated medicines are not shown as guidance here either;
  // the original wording stays visible, unchanged, under a "needs review" disclosure (see modes/shared-claims).
  const explanation = segmentRegistryText(drug.patientExplanation, drug);
  const points = (Array.isArray(drug.patientEducationPoints) ? drug.patientEducationPoints : []).map((p) => segmentRegistryText(p, drug));
  const explanationShown = explanation.filter((x) => x.handling === "show").map((x) => x.text).join(" ");
  const pointsShown = points.map((segs) => segs.filter((x) => x.handling === "show").map((x) => x.text).join(" ")).filter(Boolean);
  const withheld = [...explanation, ...points.flat()].filter((x) => x.handling === "withhold");
  return (
    <Section id="patient-education" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Patient Education"
          title="In plain language: what you need to know."
          description="This section is written for someone picking up their first prescription. The same content can be printed as a patient leaflet."
          tone="success"
        />

        {/* Plain-language explanation */}
        <div className="mt-10">
          <Callout variant="success" title="What this medicine does (in plain language)">
            {explanationShown || EC.unavailable}
          </Callout>
        </div>

        {/* Patient education points */}
        <div className="mt-10">
          <h3 className="text-h3">Key things to remember</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {pointsShown.map((point, i) => (
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

        {withheld.length > 0 && (
          <details data-withheld className="mt-8 rounded-lg border border-dashed border-amber-500/50 p-4 text-sm">
            <summary className="cursor-pointer font-medium">{EC.withheldSummary(withheld.length)}</summary>
            <p className="mt-2 text-xs text-muted-foreground">{EC.withheldNote}</p>
            <ul className="mt-2 space-y-2">
              {withheld.map((x, i) => (
                <li key={i} data-withheld-rule={x.rule?.id} className="rounded-md bg-muted/40 p-2">
                  <p>{x.text}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {EC.withheldLabel}
                    {x.sharedBy ? `. Same wording on ${x.sharedBy} medicines.` : "."} {x.rule?.why}
                  </p>
                </li>
              ))}
            </ul>
          </details>
        )}
      </Container>
    </Section>
  );
}
