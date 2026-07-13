"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { BrainCard } from "@/components/kyp/ui/brain-card";
import { PathwayCard } from "@/components/kyp/ui/pathway-card";
import { brainRegions, pathways } from "@/lib/kyp/data";

/**
 * BrainAtlasSection — teaser for Phase 6 (Brain Module) + Phase 7 (Pathways).
 * Shows a few brain regions and the four major dopamine pathways.
 */
export function BrainAtlasSection() {
  return (
    <Section id="brain-atlas" className="bg-muted/20">
      <Container>
        {/* Brain regions */}
        <SectionHeader
          eyebrow="Brain Atlas · Phase 6 Preview"
          title="Hover a region. See what it does."
          description="An interactive brain map where every region reveals its functions, related disorders, and the drugs that act on it. Below is a static preview of the data model — animation comes in Phase 6."
          tone="neural"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brainRegions.slice(0, 6).map((region, i) => (
            <BrainCard key={region.id} region={region} index={i} />
          ))}
        </div>

        {/* Pathways */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Dopamine Pathways · Phase 7 Preview"
            title="The four highways of the brain."
            description="Every psychiatric drug acts somewhere on these four dopamine pathways. Learn the origin, termination, and clinical relevance of each — animated in Phase 7."
            tone="neural"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pathways.map((p, i) => (
              <PathwayCard key={p.id} pathway={p} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
