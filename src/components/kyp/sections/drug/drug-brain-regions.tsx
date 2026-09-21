import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { BrainCard } from "@/components/kyp/ui/brain-card";
import { brainRegions } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugBrainRegions — section 1 of 3 of the neuroscience mapping.
 *
 * Shows the brain regions this drug acts on, using the shared <BrainCard />.
 *
 * Server Component.
 */
interface DrugBrainRegionsProps {
  drug: Drug;
}

/**
 * Section intro, derived from this drug's own canonical data. The
 * raphe-nuclei projection clause renders only when the drug's data
 * carries BOTH serotonin modulation and the raphe nuclei among its
 * regions; the neutral form serves everything else. The copy never
 * names another drug.
 */
export function brainRegionsIntro(drug: Drug): string {
  const serotonergic =
    drug.brainRegionIds.includes("raphe-nuclei") &&
    drug.neurotransmitters.some((nt) => /serotonin/i.test(nt));
  return serotonergic
    ? `${drug.genericName}'s effects are not localised to one region — serotonin neurons project from the raphe nuclei throughout the brain. The regions below are those most clinically relevant to ${drug.genericName}'s effects.`
    : `${drug.genericName}'s effects are not localised to one region. The regions below are those most clinically relevant to ${drug.genericName}'s effects.`;
}

export function DrugBrainRegions({ drug }: DrugBrainRegionsProps) {
  const regions = drug.brainRegionIds
    .map((id) => brainRegions.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <Section id="brain-regions">
      <Container>
        <SectionHeader
          eyebrow="Brain Regions · Neuroscience Mapping (1 of 3)"
          title="Where does it act in the brain?"
          description={brainRegionsIntro(drug)}
          tone="neural"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <BrainCard key={region.id} region={region} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
