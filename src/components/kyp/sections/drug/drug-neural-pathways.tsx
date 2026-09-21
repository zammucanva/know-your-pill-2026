import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { PathwayCard } from "@/components/kyp/ui/pathway-card";
import { Callout } from "@/components/kyp/ui/callout";
import { pathways } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugNeuralPathways — section 3 of 3 of the neuroscience mapping.
 *
 * Shows the four major dopamine pathways (mesolimbic, mesocortical,
 * nigrostriatal, tuberoinfundibular) when relevant. For drugs whose
 * data maps to none of them, shows a data-derived educational
 * explainer instead.
 *
 * Server Component.
 */
interface DrugNeuralPathwaysProps {
  drug: Drug;
}

/**
 * Empty-state explainer for drugs whose data maps to none of the four
 * dopamine pathways this section tracks. Derived from the drug's own
 * class and neurotransmitter data — names THIS drug, never a
 * hardcoded one.
 */
export function pathwaysEmptyExplainer(drug: Drug): { title: string; body: string } {
  const systems = drug.neurotransmitters
    .map((nt) => nt.replace(/\s*\([^)]*\)\s*/g, "").trim())
    .join(", ");
  return {
    title: `Why no dopamine pathways listed for ${drug.genericName}?`,
    body: `${drug.genericName} is a ${drug.drugClassFullName}. Its effects are carried by the diffuse projection systems of the neurotransmitters it modulates (${systems}) rather than the four discrete dopamine pathways this section tracks (mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular).`,
  };
}

export function DrugNeuralPathways({ drug }: DrugNeuralPathwaysProps) {
  const relatedPathways = drug.pathwayIds
    .map((id) => pathways.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const pathwaysExplainer = pathwaysEmptyExplainer(drug);

  return (
    <Section id="neural-pathways">
      <Container>
        <SectionHeader
          eyebrow="Neural Pathways · Neuroscience Mapping (3 of 3)"
          title="The brain's highways."
          description="The four major dopamine pathways are the brain's primary circuits for reward, movement, cognition, and hormone regulation. Understanding them is essential for psychiatric pharmacology."
          tone="neural"
        />

        {relatedPathways.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {relatedPathways.map((p, i) => (
              <PathwayCard key={p.id} pathway={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <Callout
              variant="tip"
              title={pathwaysExplainer.title}
            >
              {pathwaysExplainer.body}
            </Callout>

            {/* Show all 4 pathways for educational reference */}
            <div className="mt-10">
              <p className="text-overline text-muted-foreground">The 4 dopamine pathways (educational reference)</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {pathways.map((p, i) => (
                  <PathwayCard key={p.id} pathway={p} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
