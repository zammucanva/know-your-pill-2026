import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugRelatedCases — placeholder for future clinical case library.
 *
 * Phase 4 of the roadmap calls for related clinical cases per drug.
 * Until that library is built, this section renders a tasteful
 * "Coming Soon" state with the related conditions as a starting point.
 *
 * Server Component.
 */
interface DrugRelatedCasesProps {
  drug: Drug;
}

const relationshipVariant = {
  primary: "success" as const,
  alternative: "brand" as const,
  adjunct: "neural" as const,
  "off-label": "outline" as const,
};

const relationshipLabel = {
  primary: "Primary treatment",
  alternative: "Alternative",
  adjunct: "Adjunct",
  "off-label": "Off-label",
};

export function DrugRelatedCases({ drug }: DrugRelatedCasesProps) {
  return (
    <Section id="related-cases" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Related Clinical Cases · Coming in Phase 5"
          title="See this drug in real clinical context."
          description="Clinical cases will let you walk through a real patient encounter — presentation, decision points, and how this drug fits the broader treatment plan. Until that library launches, here are the conditions this drug is primarily used to treat."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drug.relatedConditions.map((c) => (
            <CardPrimitive key={c.name} variant="flat" interactive={false} showArrow={false}>
              <CardBody>
                <Badge variant={relationshipVariant[c.relationship]} size="sm">
                  {relationshipLabel[c.relationship]}
                </Badge>
                <h3 className="mt-2 text-h3 leading-tight">{c.name}</h3>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>

        <div className="mt-8">
          <Callout variant="info" title="Clinical case library — coming soon">
            Phase 5 will introduce a clinical case library where each case links to the drugs,
            conditions, side effects, and brain regions involved. The first cases will focus on
            treatment-resistant depression, SSRI-induced sexual dysfunction, and serotonin syndrome
            management.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
