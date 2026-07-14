"use client";

import Image from "next/image";
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

        {/* Custom artwork — contained, not cropped, with soft background */}
        <div className="mt-8 mb-10 flex justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-brand-soft/30 to-neural-soft/20">
            <Image
              src="/artwork/med-library.png"
              alt="Medication Library — visual guide to psychiatric medications, drug classes, and neuroscience education"
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-contain p-4"
              priority={false}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {medicationClasses.map((med, i) => (
            <MedicationCard key={med.id} med={med} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
