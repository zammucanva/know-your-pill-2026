"use client";

import Image from "next/image";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { MedicationCard } from "@/components/kyp/ui/medication-card";
import { medicationClasses, categories } from "@/lib/kyp/data";

export function MedicationLibrarySection() {
  return (
    <Section id="library" className="relative overflow-hidden">
      {/* Existing subtle neural background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-soft/40 via-transparent to-transparent" />

      {/* Background artwork */}
      <div
        className="pointer-events-none absolute select-none"
        style={{
          right: "-8%",
          top: "5%",
          width: "75%",
          height: "90%",
          zIndex: 0,
          opacity: 0.35,
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

      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--background) 25%, transparent 55%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Content layer */}
      <Container className="relative" style={{ zIndex: 2 }}>
        <SectionHeader
          eyebrow="Medication Library"
          title="Twelve psychiatric medications, structured the same way"
          description="Each drug page covers mechanism of action, receptor pharmacology, clinical indications, side effects with management, monitoring parameters, drug interactions, patient education, and a real clinical case."
        />

        {/* Top-level medication categories */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {medicationClasses.map((med, i) => (
            <MedicationCard key={med.id} med={med} index={i} />
          ))}
        </div>

        {/* Clinical subcategories — nested within Psychiatric Medications */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-border/50" />
            <p className="text-overline text-muted-foreground">
              Browse psychiatric medications by clinical area
            </p>
            <span className="h-px flex-1 bg-border/50" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href="#library"
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-brand/40 hover:bg-brand-soft/20 hover:text-brand"
              >
                <cat.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand" />
                {cat.title}
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            These clinical areas map to neurotransmitter systems within psychiatric pharmacology. Each connects to the drug class it represents.
          </p>
        </div>
      </Container>
    </Section>
  );
}
