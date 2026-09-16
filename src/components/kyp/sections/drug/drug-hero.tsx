import { Container } from "@/components/kyp/ui/container";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { learningPathLinks } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import { HeroCopy, HeroIdentityCard } from "./patient-hero";

/**
 * DrugHero — the canonical hero for every drug page.
 *
 * Server Component shell. The copy column and the identity card are
 * patient-aware client components: they render the clinical hero in
 * MBBS / NEET PG / Resident modes and the plain-language patient hero
 * in Patient mode (driven by the PatientGuide layer).
 */
interface DrugHeroProps {
  drug: Drug;
  /** Patient language layer for this drug (enables the patient hero). */
  patientGuide?: PatientGuide;
}

export function DrugHero({ drug, patientGuide }: DrugHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* Ambient decoration — subtle, not dominant */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl kyp-drift" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-neural/15 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />

      <Container className="relative">
        {/* Learning path breadcrumb — every segment links to the
            collection that browses it (Psychiatry → /drugs/#psychiatry,
            Antidepressants → /drugs/#antidepressants, NDRIs →
            /drugs/class/ndri); the final segment is the current page. */}
        <div className="mb-4">
          <LearningPath path={drug.learningPath} links={learningPathLinks(drug)} />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Main copy — patient-aware (clinical in medical modes) */}
          <div>
            <HeroCopy drug={drug} guide={patientGuide} />
          </div>

          {/* Side card — clinical identity or patient at-a-glance */}
          <HeroIdentityCard drug={drug} guide={patientGuide} />
        </div>
      </Container>
    </section>
  );
}
