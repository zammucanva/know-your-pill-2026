import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { ArrowUpRight, Check, X } from "lucide-react";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugRelatedDrugs — educational comparison, not just a list.
 *
 * Each related drug card answers three questions:
 *   - Why choose THIS alternative instead of sertraline?
 *   - When is this alternative preferred?
 *   - When should you AVOID sertraline in favour of this alternative?
 *
 * This makes the section educational rather than just a list of names.
 *
 * Server Component.
 */
interface DrugRelatedDrugsProps {
  drug: Drug;
}

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
          title="Why choose one over the other?"
          description="Each card below explains when you'd pick this alternative instead of the current drug — and when you wouldn't. This is clinical reasoning, not just a list of names."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drug.relatedDrugs.map((rd) => {
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

                  {/* Educational comparison */}
                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg border border-success/20 bg-success-soft/30 p-3">
                      <p className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-success">
                        <Check className="h-3 w-3" strokeWidth={3} />
                        Choose this when
                      </p>
                      <p className="mt-1 text-body-sm text-foreground/90 leading-relaxed">
                        {rd.relationship}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>

        {/* When NOT to choose sertraline */}
        <div className="mt-10">
          <Callout variant="warning" title="When NOT to choose sertraline">
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Bipolar depression (without mood stabiliser)</strong> — SSRI monotherapy can trigger a manic switch. Use a mood stabiliser first.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Active MAOI use (within 14 days)</strong> — risk of fatal serotonin syndrome. Wait the washout period.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Severe hepatic impairment (Child-Pugh C)</strong> — use fluoxetine (long half-life, easier to manage) or reduce sertraline dose drastically.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Concurrent pimozide</strong> — absolute contraindication due to QTc prolongation.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Known poor CYP2D6 metaboliser on a CYP2D6 substrate</strong> — consider escitalopram (lowest CYP interaction profile) instead.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                <span><strong>Severe sexual dysfunction history</strong> — switch to bupropion or mirtazapine (no serotonergic sexual side effects).</span>
              </li>
            </ul>
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
