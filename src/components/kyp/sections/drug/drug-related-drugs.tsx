import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugRelatedDrugs — other medications that are clinically related.
 *
 * Renders the relatedDrugs array from the drug data. If a related drug has
 * a `slug`, it will link to its KYP drug page; otherwise it renders as
 * a static card (Coming Soon).
 *
 * Server Component.
 */
interface DrugRelatedDrugsProps {
  drug: Drug;
}

const relationshipTone = {
  "Same class": "brand" as const,
  "Alternative class": "neural" as const,
  "Augmentation partner": "success" as const,
};

function pickTone(relationship: string) {
  if (relationship.startsWith("Same class")) return "brand" as const;
  if (relationship.startsWith("Alternative") || relationship.startsWith("Augmentation")) return "neural" as const;
  if (relationship.includes("discontinuation") || relationship.includes("switch")) return "warning" as const;
  return "outline" as const;
}

export function DrugRelatedDrugs({ drug }: DrugRelatedDrugsProps) {
  return (
    <Section id="related-drugs">
      <Container>
        <SectionHeader
          eyebrow="Related Drugs"
          title="What else might your patient be prescribed?"
          description="The drugs below are either in the same class, work via alternative mechanisms, or are commonly used as augmentation partners when this drug alone is insufficient."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drug.relatedDrugs.map((rd, i) => {
            const href = rd.slug ? `/drugs/${rd.slug}` : undefined;
            return (
              <CardPrimitive
                key={rd.name}
                href={href}
                variant="flat"
                interactive={Boolean(href)}
                className="h-full"
              >
                <CardBody>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge variant={pickTone(rd.relationship)} size="sm">
                        {rd.drugClass}
                      </Badge>
                      <h3 className="mt-2 text-h3 leading-tight">{rd.name}</h3>
                    </div>
                    {href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </div>

                  {!href && (
                    <span className="mt-2 inline-block">
                      <Badge variant="outline" size="sm">Page coming soon</Badge>
                    </span>
                  )}

                  <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                    {rd.relationship}
                  </p>
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
