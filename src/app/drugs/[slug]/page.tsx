import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { StickyLearningNav, LearningProgress } from "@/components/kyp/ui/sticky-learning-nav";
import { PatientModeToggle } from "@/components/kyp/ui/patient-mode-toggle";

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
  DrugClinicalCase,
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
 * Canonical Drug Page — Sertraline (Phase 4 reference template, polished).
 *
 * This is a Server Component. All sections consume the structured `Drug`
 * object from the data layer — no medical content is hardcoded in JSX.
 *
 * The 23 sections below appear in the order defined by the KYP product spec.
 * Every future drug page will reuse this exact sequence.
 *
 * New in Sprint 3 polish:
 *   - Knowledge Graph moved to position 4 (was 15)
 *   - Brain mapping split into 3 sections (regions, neurotransmitters, pathways)
 *   - Learning Objectives added at position 3
 *   - Memory Tricks + High-Yield Summary added near the end
 *   - Clinical Case (real, not placeholder) at position 19
 *   - Comparison Tables at position 20
 *   - Categorised references at position 23
 *   - Sticky Learning Navigator (desktop left rail + mobile sheet)
 *   - Patient Mode toggle (Medical / Patient vocabulary)
 *   - Visual mechanism flow, monitoring checklist, side-effect receptor map
 */

type Slug = string;

/** Pre-render every drug page at build time. */
export function generateStaticParams(): { slug: Slug }[] {
  return getAllDrugSlugs().map((slug) => ({ slug }));
}

/** Per-drug metadata for SEO + social sharing. */
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

/** Section list for the sticky learning navigator. */
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
    { id: "clinical-case", label: "Clinical Case", group: "Learning" },
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

      {/* Patient Mode toggle — fixed top-right, below navbar */}
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <PatientModeToggle />
      </div>

      {/* Sticky learning navigator — desktop left rail + mobile sheet */}
      <StickyLearningNav items={navItems} />

      <main className="flex-1">
        {/* 1. Hero */}
        <DrugHero drug={drug} />

        {/* 2. Quick Facts */}
        <DrugQuickFacts drug={drug} />

        {/* 3. Learning Objectives (NEW) */}
        <DrugLearningObjectives drug={drug} />

        {/* 4. Knowledge Graph (MOVED from 15 → 4) */}
        <DrugKnowledgeGraph drug={drug} />

        {/* 5. Mechanism of Action (with visual flow) */}
        <DrugMechanismOfAction drug={drug} />

        {/* 6. Brain Regions (split from Brain Mapping) */}
        <DrugBrainRegions drug={drug} />

        {/* 7. Neurotransmitters (split from Brain Mapping) */}
        <DrugNeurotransmitters drug={drug} />

        {/* 8. Neural Pathways (split from Brain Mapping) */}
        <DrugNeuralPathways drug={drug} />

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

        {/* 11. Side Effects (with receptor map) */}
        <DrugSideEffects drug={drug} />

        {/* 12. Monitoring (with interactive checklist) */}
        <DrugMonitoring drug={drug} />

        {/* 13. Contraindications & Warnings */}
        <DrugContraindications drug={drug} />

        {/* 14. Drug Interactions */}
        <DrugInteractions drug={drug} />

        {/* 15. Patient Education */}
        <DrugPatientEducation drug={drug} />

        {/* 16. Clinical Pearls */}
        <DrugClinicalPearls drug={drug} />

        {/* 17. Exam Pearls */}
        <DrugExamPearls drug={drug} />

        {/* 18. Memory Tricks (NEW) */}
        <DrugMemoryTricks drug={drug} />

        {/* 19. Clinical Case (NEW — real, not placeholder) */}
        <DrugClinicalCase drug={drug} />

        {/* 20. Comparison Tables (NEW) */}
        <DrugComparisonTables drug={drug} />

        {/* 21. Related Drugs (with educational comparisons) */}
        <DrugRelatedDrugs drug={drug} />

        {/* 22. High-Yield Summary (NEW) */}
        <DrugHighYieldSummary drug={drug} />

        {/* 23. FAQ */}
        <DrugFAQ drug={drug} />

        {/* 24. References (categorised) */}
        <DrugReferences drug={drug} />

        {/* Learning progress — at the end, Duolingo-style */}
        <Section spacing="tight">
          <Container width="narrow">
            <LearningProgress items={navItems} />
          </Container>
        </Section>

        {/* Emergency (always present on every KYP page) */}
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
