import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { StickyLearningNav, LearningProgress } from "@/components/kyp/ui/sticky-learning-nav";
import { DifficultyToggle } from "@/components/kyp/ui/difficulty-toggle";
import { PatientModeVisibility } from "@/components/kyp/ui/patient-mode-visibility";

// Individual section components (unchanged)
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
  DrugClinicalCases,
  DrugClinicalDecisionPath,
  DrugCommonMistakes,
  DrugHighYieldSummary,
  DrugFAQ,
  DrugKnowledgeGraph,
  DrugReferences,
  DrugPrevNext,
} from "@/components/kyp/sections/drug";

// Merged modules (visual simplification pass)
import {
  HeroInfoStrip,
  EvidenceAndIndianPractice,
  IndianClinicalModule,
  LearningModule,
  DrugNavigationModule,
} from "@/components/kyp/sections/drug";

import { Timeline } from "@/components/kyp/ui/timeline";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";

import { getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";

/**
 * KYP Canonical Drug Template v2.0 — Visual Simplification Pass
 *
 * 35+ separate sections merged into ~18 unified modules.
 * 40% visual clutter reduction, 100% content preservation.
 *
 * Merges:
 *   - Learning Time + High Yield + CBME → HeroInfoStrip
 *   - Guideline Comparison + Evidence Hierarchy → EvidenceAndIndianPractice
 *   - Indian Practice + Encounter + Workflow + Educational Rx → IndianClinicalModule
 *   - Clinical Pearls + Exam Lens + Memory Tricks + Ward Pearls → LearningModule
 *   - Drug Family + Comparison + Indian Comparison + Related Drugs → DrugNavigationModule
 *   - Common Mistakes simplified (no nested cards)
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
  if (!drug) return { title: "Drug not found · Know Your Pill" };

  const title = `${drug.genericName} (${drug.drugClassLabel}) · Know Your Pill`;
  return {
    title,
    description: drug.tagline,
    keywords: [
      drug.genericName, ...drug.brandNames, drug.drugClassLabel,
      drug.drugClassFullName, ...drug.indications.map((i) => i.name),
      "pharmacology", "Know Your Pill",
    ],
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: { title, description: drug.tagline, type: "article", siteName: "Know Your Pill" },
  };
}

function getNavItems(): NavItem[] {
  return [
    { id: "top", label: "Hero", group: "Start" },
    { id: "quick-facts", label: "Quick Facts", group: "Start" },
    { id: "learning-objectives", label: "Objectives", group: "Start" },
    { id: "knowledge-graph", label: "Knowledge Graph", group: "Foundations" },
    { id: "mechanism", label: "Mechanism", group: "Foundations" },
    { id: "brain-regions", label: "Brain Regions", group: "Foundations" },
    { id: "neurotransmitters", label: "Neurotransmitters", group: "Foundations" },
    { id: "neural-pathways", label: "Pathways", group: "Foundations" },
    { id: "timeline", label: "Timeline", group: "Foundations" },
    { id: "clinical-uses", label: "Clinical Uses", group: "Clinical" },
    { id: "side-effects", label: "Side Effects", group: "Clinical" },
    { id: "monitoring", label: "Monitoring", group: "Clinical" },
    { id: "contraindications", label: "Contraindications", group: "Clinical" },
    { id: "evidence-practice", label: "Evidence & Practice", group: "Clinical" },
    { id: "interactions", label: "Interactions", group: "Clinical" },
    { id: "patient-education", label: "Patient Guide", group: "Clinical" },
    { id: "indian-clinical", label: "Indian Practice", group: "India" },
    { id: "decision-path", label: "Decision Path", group: "India" },
    { id: "common-mistakes", label: "Mistakes", group: "India" },
    { id: "learning-module", label: "Learning & Exam", group: "Learning" },
    { id: "clinical-case", label: "Clinical Case", group: "Learning" },
    { id: "drug-navigation", label: "Drug Navigation", group: "Learning" },
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
  if (!drug) notFound();

  const navItems = getNavItems();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <DifficultyToggle />
      </div>
      <StickyLearningNav items={navItems} drugSlug={drug.slug} />

      <main className="flex-1 lg:pl-52 xl:pl-56">
        {/* 1. Hero */}
        <DrugHero drug={drug} />

        {/* 2. Quick Facts + Learning Time + CBME (merged into compact strip) */}
        <DrugQuickFacts drug={drug} />
        <HeroInfoStrip drug={drug} />

        {/* 3. Learning Objectives */}
        <DrugLearningObjectives drug={drug} />

        {/* 4. Knowledge Graph */}
        <DrugKnowledgeGraph drug={drug} />

        {/* 5. Mechanism */}
        <DrugMechanismOfAction drug={drug} />

        {/* 6-8. Brain Regions + Neurotransmitters + Pathways */}
        <DrugBrainRegions drug={drug} />
        <DrugNeurotransmitters drug={drug} />
        <PatientModeVisibility sectionId="neural-pathways">
          <DrugNeuralPathways drug={drug} />
        </PatientModeVisibility>

        {/* 9. Timeline */}
        <Section id="timeline" className="bg-muted/20">
          <Container width="narrow">
            <SectionHeader
              eyebrow="Timeline of Effects"
              title="What happens, hour by hour, week by week."
              align="center"
            />
            <div className="mt-10">
              <Timeline events={drug.timeline} />
            </div>
          </Container>
        </Section>

        {/* 10-12. Clinical Uses + Side Effects + Monitoring */}
        <DrugClinicalUses drug={drug} />
        <DrugSideEffects drug={drug} />
        <DrugMonitoring drug={drug} />

        {/* 13. Contraindications */}
        <DrugContraindications drug={drug} />

        {/* 14. Evidence & Indian Practice (MERGED: Guideline Comparison + Evidence Hierarchy) */}
        <PatientModeVisibility sectionId="evidence-practice">
          <EvidenceAndIndianPractice drug={drug} />
        </PatientModeVisibility>

        {/* 15. Drug Interactions */}
        <DrugInteractions drug={drug} />

        {/* 16. Patient Education */}
        <DrugPatientEducation drug={drug} />

        {/* 17. Indian Clinical Module (MERGED: Indian Practice + Encounter + Workflow + Educational Rx) */}
        <IndianClinicalModule drug={drug} />

        {/* 18. Clinical Decision Path */}
        <PatientModeVisibility sectionId="decision-path">
          <DrugClinicalDecisionPath drug={drug} />
        </PatientModeVisibility>

        {/* 19. Common Mistakes (simplified — no nested cards) */}
        <PatientModeVisibility sectionId="common-mistakes">
          <DrugCommonMistakes drug={drug} />
        </PatientModeVisibility>

        {/* 20. Learning Module (MERGED: Clinical Pearls + Exam Lens + Memory Tricks + Ward Pearls) */}
        <PatientModeVisibility sectionId="learning-module">
          <LearningModule drug={drug} />
        </PatientModeVisibility>

        {/* 21. Clinical Cases */}
        <PatientModeVisibility sectionId="clinical-case">
          <DrugClinicalCases drug={drug} />
        </PatientModeVisibility>

        {/* 22. Drug Navigation Module (MERGED: Drug Family + Comparison + Indian Comparison + Related Drugs) */}
        <PatientModeVisibility sectionId="drug-navigation">
          <DrugNavigationModule drug={drug} />
        </PatientModeVisibility>

        {/* 23. High-Yield Summary */}
        <PatientModeVisibility sectionId="high-yield-summary">
          <DrugHighYieldSummary drug={drug} />
        </PatientModeVisibility>

        {/* 24. FAQ */}
        <DrugFAQ drug={drug} />

        {/* 25. References (Evidence Sources) */}
        <PatientModeVisibility sectionId="references">
          <DrugReferences drug={drug} />
        </PatientModeVisibility>

        {/* 26. Prev/Next */}
        <DrugPrevNext currentSlug={drug.slug} />

        {/* 27. Learning Progress */}
        <Section spacing="tight">
          <Container width="narrow">
            <LearningProgress items={navItems} drugSlug={drug.slug} />
          </Container>
        </Section>

        {/* 28. Emergency */}
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
