import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugMonitoring — what to check, when, and why.
 *
 * Renders as a structured card grid (not a traditional table) to stay
 * consistent with the KYP design language and remain responsive.
 *
 * Server Component.
 */
interface DrugMonitoringProps {
  drug: Drug;
}

export function DrugMonitoring({ drug }: DrugMonitoringProps) {
  return (
    <Section id="monitoring">
      <Container>
        <SectionHeader
          eyebrow="Monitoring"
          title="What should be checked — and when?"
          description="The monitoring schedule below balances clinical safety with practicality. The single most important monitoring parameter is mood and suicidality — especially during the first month of therapy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drug.monitoring.map((m, i) => (
            <CardPrimitive key={m.parameter} variant="flat" interactive={false} showArrow={false}>
              <CardBody>
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Badge variant="brand" size="sm">{m.frequency}</Badge>
                </div>
                <h3 className="mt-2 text-h4 leading-tight">{m.parameter}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                  {m.rationale}
                </p>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>

        {/* Dose adjustments */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <h3 className="text-h4">Renal adjustment</h3>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {drug.renalAdjustment}
              </p>
            </CardBody>
          </CardPrimitive>
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <h3 className="text-h4">Hepatic adjustment</h3>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {drug.hepaticAdjustment}
              </p>
            </CardBody>
          </CardPrimitive>
        </div>

        {/* Pregnancy & lactation */}
        <div className="mt-8">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-h4">Pregnancy & lactation</h3>
                {drug.pregnancy.legacyCategory && (
                  <Badge variant="warning" size="sm">
                    {drug.pregnancy.legacyCategory}
                  </Badge>
                )}
              </div>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {drug.pregnancy.summary}
              </p>
              <div className="mt-4 rounded-lg border border-border/70 bg-muted/40 p-3">
                <p className="text-overline text-muted-foreground">Lactation</p>
                <p className="mt-1 text-body-sm text-foreground/90 leading-relaxed">
                  {drug.pregnancy.lactation}
                </p>
              </div>
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}
