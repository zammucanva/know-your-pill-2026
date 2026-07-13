import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { EmergencySection } from "@/components/kyp/sections/emergency-section";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";

import {
  DrugHero,
  DrugQuickFacts,
  DrugClinicalUses,
  DrugMechanismOfAction,
  DrugBrainMapping,
  DrugSideEffects,
  DrugMonitoring,
  DrugContraindications,
  DrugInteractions,
  DrugPatientEducation,
  DrugClinicalPearls,
  DrugExamPearls,
  DrugRelatedDrugs,
  DrugRelatedCases,
  DrugReferences,
  DrugFAQ,
  DrugKnowledgeGraph,
} from "@/components/kyp/sections/drug";

import { Timeline } from "@/components/kyp/ui/timeline";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";

import { getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data";

/**
 * Canonical Drug Page — Sertraline (Phase 4 reference template).
 *
 * This is a Server Component. All sections consume the structured `Drug`
 * object from the data layer — no medical content is hardcoded in JSX.
 *
 * The 16 canonical sections appear in the order defined by the KYP
 * product spec. Every future drug page will reuse this exact sequence.
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

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function DrugPage({ params }: PageProps) {
  const { slug } = await params;
  const drug = getDrugBySlug(slug);
  if (!drug) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <DrugHero drug={drug} />

        {/* 2. Quick Facts */}
        <DrugQuickFacts drug={drug} />

        {/* 3. Clinical Uses */}
        <DrugClinicalUses drug={drug} />

        {/* 4. Mechanism of Action */}
        <DrugMechanismOfAction drug={drug} />

        {/* 5. Brain & Neurotransmitter Mapping */}
        <DrugBrainMapping drug={drug} />

        {/* 6. Timeline of Effects */}
        <Section id="timeline" className="bg-muted/20">
          <Container width="narrow">
            <SectionHeader
              eyebrow="Timeline of Effects"
              title="What happens, hour by hour, week by week."
              description="The delay between acute pharmacology (hours) and clinical benefit (weeks) is the most important concept for patients to understand — it explains why they feel worse before they feel better."
              align="center"
            />
            <div className="mt-10">
              <Timeline events={drug.timeline} />
            </div>
          </Container>
        </Section>

        {/* 7. Side Effects */}
        <DrugSideEffects drug={drug} />

        {/* 8. Monitoring */}
        <DrugMonitoring drug={drug} />

        {/* 9. Contraindications & Warnings */}
        <DrugContraindications drug={drug} />

        {/* 10. Drug Interactions */}
        <DrugInteractions drug={drug} />

        {/* 11. Patient Education */}
        <DrugPatientEducation drug={drug} />

        {/* 12. Clinical Pearls */}
        <DrugClinicalPearls drug={drug} />

        {/* 13. High-Yield Exam Facts */}
        <DrugExamPearls drug={drug} />

        {/* 14. Related Clinical Cases (Phase 5 preview) */}
        <DrugRelatedCases drug={drug} />

        {/* 15. Related Drugs */}
        <DrugRelatedDrugs drug={drug} />

        {/* Knowledge Graph (cross-cutting — surface after context established) */}
        <DrugKnowledgeGraph drug={drug} />

        {/* 16. FAQ */}
        <DrugFAQ drug={drug} />

        {/* References */}
        <DrugReferences drug={drug} />

        {/* Emergency (always present on every KYP page) */}
        <EmergencySection />
      </main>
      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
