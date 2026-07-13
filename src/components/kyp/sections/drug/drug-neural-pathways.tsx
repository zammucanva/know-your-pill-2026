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
 * nigrostriatal, tuberoinfundibular) when relevant. For SSRIs that
 * don't directly target these, shows an educational explainer instead.
 *
 * Server Component.
 */
interface DrugNeuralPathwaysProps {
  drug: Drug;
}

export function DrugNeuralPathways({ drug }: DrugNeuralPathwaysProps) {
  const relatedPathways = drug.pathwayIds
    .map((id) => pathways.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
            <Callout variant="tip" title="Why no dopamine pathways listed for sertraline?">
              Sertraline is a selective serotonin reuptake inhibitor — it acts on the diffuse
              serotonergic projection system that originates in the raphe nuclei and innervates
              virtually the entire CNS. It does not directly target the four discrete dopamine
              pathways (mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular), although
              downstream serotonergic-dopaminergic interactions are clinically important —
              particularly in the mesolimbic pathway where 5-HT2C stimulation inhibits dopamine
              release (relevant to SSRI-induced emotional blunting and the mechanism of action of
              atypical antipsychotics like aripiprazole).
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
