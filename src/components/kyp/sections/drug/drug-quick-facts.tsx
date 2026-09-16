import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { PatientQuickFacts } from "./patient-quick-facts";
import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";

/**
 * DrugQuickFacts — 4-card grid of the most important facts.
 *
 * Server Component shell. The grid itself is a patient-aware client
 * component: clinical quick facts in MBBS / NEET PG / Resident modes,
 * plain-language patient quick facts (from the PatientGuide layer) in
 * Patient mode.
 */
interface DrugQuickFactsProps {
  drug: Drug;
  /** Patient language layer for this drug (enables patient quick facts). */
  patientGuide?: PatientGuide;
}

export function DrugQuickFacts({ drug, patientGuide }: DrugQuickFactsProps) {
  return (
    <Section id="quick-facts" spacing="tight">
      <Container>
        <PatientQuickFacts drug={drug} guide={patientGuide} />
      </Container>
    </Section>
  );
}
