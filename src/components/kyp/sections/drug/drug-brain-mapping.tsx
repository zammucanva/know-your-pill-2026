import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { BrainCard } from "@/components/kyp/ui/brain-card";
import { PathwayCard } from "@/components/kyp/ui/pathway-card";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { brainRegions, pathways } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugBrainMapping — reuses the global BrainCard + PathwayCard components.
 *
 * Looks up brain regions and pathways by ID from the global registries,
 * so every drug page stays consistent with the platform-wide brain atlas.
 *
 * Server Component.
 */
interface DrugBrainMappingProps {
  drug: Drug;
}

export function DrugBrainMapping({ drug }: DrugBrainMappingProps) {
  const regions = drug.brainRegionIds
    .map((id) => brainRegions.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const relatedPathways = drug.pathwayIds
    .map((id) => pathways.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <Section id="brain-mapping">
      <Container>
        <SectionHeader
          eyebrow="Brain & Neurotransmitter Mapping"
          title="Where does it act in the brain?"
          description="Sertraline's effects are not localised to one region — serotonin neurons project from the raphe nuclei throughout the brain. The regions below are those most clinically relevant to sertraline's effects."
          tone="neural"
        />

        {/* Neurotransmitters */}
        <div className="mt-8">
          <p className="text-overline text-muted-foreground">Primary neurotransmitters</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {drug.neurotransmitters.map((nt) => (
              <Badge key={nt} variant="neural" size="lg">{nt}</Badge>
            ))}
          </div>
        </div>

        {/* Brain regions */}
        <div className="mt-10">
          <h3 className="text-h3">Key brain regions</h3>
          <p className="mt-2 text-body text-muted-foreground">
            Each region below reveals its functions, related disorders, and the drugs that act on it.
            In Phase 6 these will become an interactive brain atlas.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, i) => (
              <BrainCard key={region.id} region={region} index={i} />
            ))}
          </div>
        </div>

        {/* Neural pathways */}
        {relatedPathways.length > 0 ? (
          <div className="mt-12">
            <h3 className="text-h3">Neural pathways involved</h3>
            <p className="mt-2 text-body text-muted-foreground">
              The four major dopamine pathways are shown when relevant. SSRIs primarily act on the
              diffuse serotonergic projection system rather than these discrete dopamine circuits.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPathways.map((p, i) => (
                <PathwayCard key={p.id} pathway={p} index={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <Callout variant="tip" title="Why no dopamine pathways listed?">
              Sertraline is a selective serotonin reuptake inhibitor — it acts on the diffuse
              serotonergic projection system that originates in the raphe nuclei and innervates
              virtually the entire CNS. It does not directly target the four discrete dopamine
              pathways (mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular), although
              downstream serotonergic-dopaminergic interactions are clinically important —
              particularly in the mesolimbic pathway where 5-HT2C stimulation inhibits dopamine
              release (relevant to SSRI-induced emotional blunting and the mechanism of action of
              atypical antipsychotics like aripiprazole).
            </Callout>
          </div>
        )}
      </Container>
    </Section>
  );
}
