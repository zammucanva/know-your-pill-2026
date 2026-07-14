import { Building2, Briefcase, GraduationCap, Stethoscope, Brain } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugEncounterContext — "What will I see in an Indian hospital?"
 *
 * Shows where this drug is commonly encountered across 5 Indian
 * healthcare settings: government hospitals, private hospitals,
 * medical colleges, primary care, psychiatry OPD.
 *
 * Server Component.
 */
interface DrugEncounterContextProps {
  drug: Drug;
}

const settings = [
  { key: "governmentHospitals" as const, label: "Government Hospitals", icon: Building2, tone: "text-brand" },
  { key: "privateHospitals" as const, label: "Private Hospitals", icon: Briefcase, tone: "text-neural" },
  { key: "medicalColleges" as const, label: "Medical Colleges", icon: GraduationCap, tone: "text-warning" },
  { key: "primaryCare" as const, label: "Primary Care", icon: Stethoscope, tone: "text-success" },
  { key: "psychiatryOPD" as const, label: "Psychiatry OPD", icon: Brain, tone: "text-emergency" },
];

export function DrugEncounterContext({ drug }: DrugEncounterContextProps) {
  const ctx = drug.indianEncounterContext;
  if (!ctx) return null;

  return (
    <Section id="encounter-context" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Indian Hospital Encounter"
          title="What will I see in an Indian hospital?"
          description="Where is this drug actually prescribed in India? Understanding the clinical setting helps you anticipate what you'll encounter as a student or practitioner."
          tone="brand"
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {settings.map(({ key, label, icon: Icon, tone }) => (
            <CardPrimitive key={key} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`h-4 w-4 ${tone}`} />
                  <p className="text-overline text-muted-foreground">{label}</p>
                </div>
                <p className="text-body-sm text-foreground/90 leading-relaxed">{ctx[key]}</p>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}
