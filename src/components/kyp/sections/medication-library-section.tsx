"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { MedicationCard } from "@/components/kyp/ui/medication-card";
import { medicationClasses } from "@/lib/kyp/data";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-soft/40 via-transparent to-transparent" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Medication Library"
          title="Explore Medications"
          description="Browse medications by class and understand how different treatments affect the brain and body through simplified explanations and visual guidance."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {medicationClasses.map((med, i) => (
            <MedicationCard key={med.id} med={med} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
