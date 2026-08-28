"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { MedicationCard } from "@/components/kyp/ui/medication-card";
import { OrganicGradient } from "@/components/kyp/ui/organic-gradient";
import { Reveal, RevealGroup } from "@/components/kyp/ui/reveal";
import { medicationClasses, categories } from "@/lib/kyp/data";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative overflow-hidden">
      <OrganicGradient variant="section" />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="Medication Library"
            title="Twelve psychiatric medications, structured the same way"
            description="Each drug page covers mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, patient education, and a real clinical case."
          />
        </Reveal>

        {/* Editorial asymmetric layout: featured cards get more space */}
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {/* Psychiatric Medications — primary, spans wider */}
          <Reveal className="lg:col-span-7" delay={0}>
            <MedicationCard med={medicationClasses[0]} index={0} />
          </Reveal>
          {/* Substance Use — secondary, narrower */}
          <Reveal className="lg:col-span-5" delay={0.08}>
            <MedicationCard med={medicationClasses[3]} index={1} />
          </Reveal>
          {/* Pain Management + Antibiotics — side by side, smaller */}
          <Reveal className="lg:col-span-6" delay={0.16}>
            <MedicationCard med={medicationClasses[1]} index={2} />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.24}>
            <MedicationCard med={medicationClasses[2]} index={3} />
          </Reveal>
        </RevealGroup>

        {/* Clinical subcategories — filter chips */}
        <Reveal delay={0.3}>
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border/40" />
              <p className="text-overline text-muted-foreground">
                Browse psychiatric medications by clinical area
              </p>
              <span className="h-px flex-1 bg-border/40" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href="#library"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2 text-sm font-medium text-foreground/70 transition-all duration-200 hover:border-brand/40 hover:bg-brand-soft/20 hover:text-brand"
                >
                  <cat.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand" />
                  {cat.title}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              These clinical areas map to neurotransmitter systems within psychiatric pharmacology.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
