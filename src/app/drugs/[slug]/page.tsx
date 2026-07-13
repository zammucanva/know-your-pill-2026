import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { StickyLearningNav, LearningProgress } from "@/components/kyp/ui/sticky-learning-nav";
import { DifficultyToggle } from "@/components/kyp/ui/difficulty-toggle";
import { PatientModeVisibility } from "@/components/kyp/ui/patient-mode-visibility";

import {
  DrugHero,
  DrugQuickFacts,
  DrugLearningObjectives,
  DrugClinicalUses,
  DrugMechanismOfAction,
  DrugBrainRegions,
  DrugNeurotransmitters,
  DrugNeuralPathways,
  DrugSideEffects,
  DrugMonitoring,
  DrugContraindications,
  DrugInteractions,
  DrugPatientEducation,
  DrugClinicalPearls,
  DrugExamPearls,
  DrugMemoryTricks,
  DrugHighYieldSummary,
  DrugClinicalCases,
  DrugComparisonTables,
  DrugRelatedDrugs,
  DrugFAQ,
  DrugKnowledgeGraph,
  DrugReferences,
} from "@/components/kyp/sections/drug";

import { Timeline } from "@/components/kyp/ui/timeline";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";

import { getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";

/**
 * KYP Canonical Drug Template v1.0
 *
 * This is the frozen reference architecture. Every psychiatric medication
 * page uses exactly this structure.
 *
 * Sprint 4 additions:
 *   - Learning Path breadcrumb (Psychiatry → Antidepressants → SSRIs → X)
 *   - Difficulty levels (Patient / Medical Student / Resident / Clinician)
 *   - Estimated read time + yield rating + audience badges in hero
 *   - Manual section completion (persisted per-drug to localStorage)
 *   - Progressive disclosure via PatientModeVisibility wrapper
 *   - Clinical Cases (plural — supports multiple cases per drug)
 */

type Slug = string;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllDrugSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) {
    return { title: "Drug not found · Know Your Pill" };
  }

  const title = `${drug.genericName} (${drug.drugClassLabel}) · Know Your Pill`;
  const description = drug.tagline;

  return {
    title,
    description,
    keywords: [
      drug.genericName,
      ...drug.brandNames,
      drug.drugClassLabel,
      drug.drugClassFullName,
      ...drug.indications.map((i) => i.name),
      ...drug.neurotransmitters,
      "pharmacology",
      "mechanism of action",
      "side effects",
      "Know Your Pill",
    ],
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Know Your Pill",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function getNavItems(): NavItem[] {
  return [
    { id: "top", label: "Hero", group: "Start here" },
    { id: "quick-facts", label: "Quick Facts", group: "Start here" },
    { id: "learning-objectives", label: "Learning Objectives", group: "Start here" },
    { id: "knowledge-graph", label: "Knowledge Graph", group: "Foundations" },
    { id: "mechanism", label: "Mechanism", group: "Foundations" },
    { id: "brain-regions", label: "Brain Regions", group: "Foundations" },
    { id: "neurotransmitters", label: "Neurotransmitters", group: "Foundations" },
    { id: "neural-pathways", label: "Neural Pathways", group: "Foundations" },
    { id: "timeline", label: "Timeline", group: "Foundations" },
    { id: "clinical-uses", label: "Clinical Uses", group: "Clinical" },
    { id: "side-effects", label: "Side Effects", group: "Clinical" },
    { id: "monitoring", label: "Monitoring", group: "Clinical" },
    { id: "contraindications", label: "Contraindications", group: "Clinical" },
    { id: "interactions", label: "Drug Interactions", group: "Clinical" },
    { id: "patient-education", label: "Patient Guide", group: "Clinical" },
    { id: "clinical-pearls", label: "Clinical Pearls", group: "Learning" },
    { id: "exam-pearls", label: "Exam Pearls", group: "Learning" },
    { id: "memory-tricks", label: "Memory Tricks", group: "Learning" },
    { id: "clinical-case", label: "Clinical Cases", group: "Learning" },
    { id: "comparison", label: "Comparison", group: "Learning" },
    { id: "related-drugs", label: "Related Drugs", group: "Learning" },
    { id: "high-yield-summary", label: "High-Yield Summary", group: "Learning" },
    { id: "faq", label: "FAQ", group: "Learning" },
    { id: "references", label: "References", group: "Learning" },
  ];
}

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function DrugPage({ params }: PageProps) {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) {
    notFound();
  }

  const navItems = getNavItems();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Difficulty toggle — fixed top-right, below navbar (replaces PatientModeToggle) */}
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <DifficultyToggle />
      </div>

      {/* Sticky learning navigator — desktop left rail + mobile sheet */}
      <StickyLearningNav items={navItems} drugSlug={drug.slug} />

      <main className="flex-1">
        {/* 1. Hero */}
        <DrugHero drug={drug} />

        {/* 2. Quick Facts */}
        <DrugQuickFacts drug={drug} />

        {/* 3. Learning Objectives */}
        <DrugLearningObjectives drug={drug} />

        {/* 4. Knowledge Graph (centerpiece) */}
        <DrugKnowledgeGraph drug={drug} />

        {/* 5. Mechanism of Action */}
        <DrugMechanismOfAction drug={drug} />

        {/* 6. Brain Regions */}
        <DrugBrainRegions drug={drug} />

        {/* 7. Neurotransmitters */}
        <DrugNeurotransmitters drug={drug} />

        {/* 8. Neural Pathways — hidden in Patient mode */}
        <PatientModeVisibility sectionId="neural-pathways">
          <DrugNeuralPathways drug={drug} />
        </PatientModeVisibility>

        {/* 9. Timeline of Effects */}
        <Section id="timeline" className="bg-muted/20">
          <Container width="narrow">
            <SectionHeader
              eyebrow="Timeline of Effects"
              title="What happens, hour by hour, week by week."
              description="The delay between acute pharmacology (hours) and clinical benefit (weeks) is the most important concept for patients to understand."
              align="center"
            />
            <div className="mt-10">
              <Timeline events={drug.timeline} />
            </div>
          </Container>
        </Section>

        {/* 10. Clinical Uses */}
        <DrugClinicalUses drug={drug} />

        {/* 11. Side Effects */}
        <DrugSideEffects drug={drug} />

        {/* 12. Monitoring */}
        <DrugMonitoring drug={drug} />

        {/* 13. Contraindications & Warnings */}
        <DrugContraindications drug={drug} />

        {/* 14. Drug Interactions */}
        <DrugInteractions drug={drug} />

        {/* 15. Patient Education */}
        <DrugPatientEducation drug={drug} />

        {/* 16. Clinical Pearls — hidden in Patient mode */}
        <PatientModeVisibility sectionId="clinical-pearls">
          <DrugClinicalPearls drug={drug} />
        </PatientModeVisibility>

        {/* 17. Exam Pearls — hidden in Patient mode */}
        <PatientModeVisibility sectionId="exam-pearls">
          <DrugExamPearls drug={drug} />
        </PatientModeVisibility>

        {/* 18. Memory Tricks — hidden in Patient mode */}
        <PatientModeVisibility sectionId="memory-tricks">
          <DrugMemoryTricks drug={drug} />
        </PatientModeVisibility>

        {/* 19. Clinical Cases — hidden in Patient mode */}
        <PatientModeVisibility sectionId="clinical-case">
          <DrugClinicalCases drug={drug} />
        </PatientModeVisibility>

        {/* 20. Comparison Tables — hidden in Patient mode */}
        <PatientModeVisibility sectionId="comparison">
          <DrugComparisonTables drug={drug} />
        </PatientModeVisibility>

        {/* 21. Related Drugs — hidden in Patient mode */}
        <PatientModeVisibility sectionId="related-drugs">
          <DrugRelatedDrugs drug={drug} />
        </PatientModeVisibility>

        {/* 22. High-Yield Summary — hidden in Patient mode */}
        <PatientModeVisibility sectionId="high-yield-summary">
          <DrugHighYieldSummary drug={drug} />
        </PatientModeVisibility>

        {/* 23. FAQ */}
        <DrugFAQ drug={drug} />

        {/* 24. References — hidden in Patient mode */}
        <PatientModeVisibility sectionId="references">
          <DrugReferences drug={drug} />
        </PatientModeVisibility>

        {/* Learning progress — end of page */}
        <Section spacing="tight">
          <Container width="narrow">
            <LearningProgress items={navItems} drugSlug={drug.slug} />
          </Container>
        </Section>

        {/* Emergency (always present) */}
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
