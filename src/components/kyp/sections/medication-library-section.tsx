"use client";

import Image from "next/image";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { MedicationCard } from "@/components/kyp/ui/medication-card";
import { medicationClasses } from "@/lib/kyp/data";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative overflow-hidden">
      {/* Existing subtle neural background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-soft/40 via-transparent to-transparent" />

      {/* Background artwork — editorial watermark, NOT a hero banner */}
      <div
        className="pointer-events-none absolute select-none"
        style={{
          right: "-5%",
          bottom: "-10%",
          width: "70%",
          height: "auto",
          zIndex: 0,
          opacity: 0.18,
          filter: "brightness(0.9) contrast(0.9) saturate(0.9)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 70% 60%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 70% 60%, black 10%, transparent 75%)",
        }}
      >
        <div className="relative aspect-square w-full">
          <Image
            src="/artwork/med-library.png"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 70vw"
            className="object-contain"
            priority={false}
            role="presentation"
          />
        </div>
      </div>

      {/* Gradient overlay — ensures text readability over artwork */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--background) 20%, transparent 60%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Content layer — above artwork and overlay */}
      <Container className="relative" style={{ zIndex: 2 }}>
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
