import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { ArrowUpRight, Check, X } from "lucide-react";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugRelatedDrugs — Related Medications cross-links (NOW-N5).
 *
 * Every drug page renders a "Related medications" section from the
 * EXISTING related-drug schema fields: each card shows the explicit
 * relationship reason already stored in the data ("Same class",
 * "Alternative for X", switch partner…) — nothing is invented here.
 *
 * Degradation rule (commissioning spec): link targets degrade
 * gracefully — a related drug whose page is not built yet renders as a
 * non-clickable "Page coming soon" card, NEVER a dead link. The set
 * of built slugs is passed from the server page (the registry is the
 * single source of truth).
 *
 * The "when NOT to use" callout is data-driven from drug.whenNotToUse
 * (scenario / reason / alternative) — no per-drug hardcoding.
 *
 * Server Component.
 */
interface DrugRelatedDrugsProps {
  drug: Drug;
  /** Slugs that actually have a built page — from the drug registry. */
  builtDrugSlugs?: readonly string[];
}

function pickTone(relationship: string) {
  if (relationship.startsWith("Same class")) return "brand" as const;
  if (relationship.startsWith("Alternative") || relationship.startsWith("Augmentation")) return "neural" as const;
  if (relationship.includes("discontinuation") || relationship.includes("switch")) return "warning" as const;
  return "outline" as const;
}

export function DrugRelatedDrugs({ drug, builtDrugSlugs }: DrugRelatedDrugsProps) {
  const built = new Set(builtDrugSlugs ?? []);

  return (
    <Section id="related-medications">
      <Container>
        <SectionHeader
          eyebrow="Related Medications"
          title="Why choose one over the other?"
          description="Each card explains when you'd pick this medication instead of the current one — and when you wouldn't. Clinical reasoning, not just a list of names."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drug.relatedDrugs.map((rd) => {
            // Only link to drugs that actually have a built page —
            // unbuilt family members render as non-clickable
            // "coming soon" cards instead of dead 404 links.
            const href =
              rd.slug && built.has(rd.slug) ? `/drugs/${rd.slug}` : undefined;
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

                  {/* The explicit relationship reason from the data */}
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

        {/* When NOT to choose this drug — data-driven red card */}
        {drug.whenNotToUse && drug.whenNotToUse.length > 0 && (
          <div className="mt-10">
            <Callout variant="warning" title={`When NOT to choose ${drug.genericName}`}>
              <ul className="space-y-1.5">
                {drug.whenNotToUse.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" strokeWidth={3} />
                    <span>
                      <strong>{w.scenario}</strong> — {w.reason} Use{" "}
                      <span className="text-success">{w.alternative}</span> instead.
                    </span>
                  </li>
                ))}
              </ul>
            </Callout>
          </div>
        )}
      </Container>
    </Section>
  );
}
