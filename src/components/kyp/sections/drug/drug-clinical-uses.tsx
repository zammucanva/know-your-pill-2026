import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugClinicalUses — list of FDA-approved and off-label indications.
 *
 * Server Component.
 */
interface DrugClinicalUsesProps {
  drug: Drug;
}

const statusBadge = {
  "fda-approved": { variant: "success" as const, label: "FDA-approved" },
  "off-label": { variant: "warning" as const, label: "Off-label" },
  "guideline": { variant: "brand" as const, label: "Guideline" },
};

export function DrugClinicalUses({ drug }: DrugClinicalUsesProps) {
  return (
    <Section id="clinical-uses">
      <Container>
        <SectionHeader
          eyebrow="Clinical Uses"
          title="What is it prescribed for?"
          description="Each indication below is rated by its regulatory status — FDA-approved, off-label, or guideline-supported."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drug.indications.map((ind, i) => {
            const badge = statusBadge[ind.status];
            return (
              <CardPrimitive key={ind.name} variant="flat" interactive={false} showArrow={false}>
                <CardBody>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Badge variant={badge.variant} size="sm">{badge.label}</Badge>
                  </div>
                  <h3 className="mt-2 text-h3 leading-tight">{ind.name}</h3>
                  <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                    {ind.description}
                  </p>
                  {ind.ageGroup && (
                    <p className="mt-3 text-caption text-muted-foreground">
                      Age group: <span className="font-medium text-foreground">{ind.ageGroup}</span>
                    </p>
                  )}
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
