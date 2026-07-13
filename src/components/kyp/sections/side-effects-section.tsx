"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { SideEffectCard } from "@/components/kyp/ui/side-effect-card";
import { sideEffects } from "@/lib/kyp/data";

/**
 * SideEffectsSection — teaser for Phase 8 (Side Effect Library).
 * Shows a few of the most clinically important side effects.
 */
export function SideEffectsSection() {
  return (
    <Section id="side-effects">
      <Container>
        <SectionHeader
          eyebrow="Side Effect Library · Phase 8 Preview"
          title="Not just a name. A whole story."
          description="Instead of a flat list, every side effect gets a full page — the receptor it acts on, the pathway it disrupts, the drugs that cause it, and step-by-step management. Below is a preview of six high-yield clinical side effects."
          tone="brand"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sideEffects.map((se, i) => (
            <SideEffectCard key={se.id} sideEffect={se} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
