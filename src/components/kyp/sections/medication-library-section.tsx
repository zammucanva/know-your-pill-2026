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

      {/* Background artwork — spans the ENTIRE section behind all content */}
      <div
        className="pointer-events-none absolute select-none"
        style={{
          right: "-8%",
          top: "5%",
          width: "75%",
          height: "90%",
          zIndex: 0,
          opacity: 0.35,
          filter: "brightness(1) contrast(0.95) saturate(1.1)",
          maskImage:
            "radial-gradient(ellipse 75% 80% at 65% 50%, black 5%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 80% at 65% 50%, black 5%, transparent 70%)",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/artwork/med-library.png"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 75vw"
            className="object-contain"
            priority={false}
            role="presentation"
          />
        </div>
      </div>

      {/* Gradient overlay — left side solid for text readability, fades right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--background) 25%, transparent 55%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Content layer — above artwork and overlay */}
      <Container className="relative" style={{ zIndex: 2 }}>
        <SectionHeader
          eyebrow="Medication Library"
          title="Twelve psychiatric medications, structured the same way"
          description="Each drug page covers mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, patient education, and a real clinical case."
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
