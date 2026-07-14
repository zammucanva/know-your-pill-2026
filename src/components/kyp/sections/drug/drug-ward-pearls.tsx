import { GraduationCap, Stethoscope, Award, AlertTriangle } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugWardPearls — Indian ward pearls.
 *
 * Hierarchical teaching pearls:
 *   - What your professor may ask
 *   - What the resident expects you to know
 *   - What consultants commonly do
 *   - What interns commonly miss
 *
 * Makes KYP feel like an Indian teaching hospital.
 *
 * Server Component.
 */
interface DrugWardPearlsProps {
  drug: Drug;
}

const sections = [
  { key: "professorMayAsk" as const, label: "Professor May Ask", icon: GraduationCap, tone: "text-neural", bg: "bg-neural-soft/30", border: "border-neural/20", badge: "neural" as const },
  { key: "residentExpects" as const, label: "Resident Expects", icon: Stethoscope, tone: "text-brand", bg: "bg-brand-soft/30", border: "border-brand/20", badge: "brand" as const },
  { key: "consultantsDo" as const, label: "Consultants Do", icon: Award, tone: "text-success", bg: "bg-success-soft/30", border: "border-success/20", badge: "success" as const },
  { key: "internsMiss" as const, label: "Interns Miss", icon: AlertTriangle, tone: "text-emergency", bg: "bg-emergency-soft/30", border: "border-emergency/20", badge: "emergency" as const },
];

export function DrugWardPearls({ drug }: DrugWardPearlsProps) {
  const pearls = drug.wardPearls;
  if (!pearls) return null;

  return (
    <Section id="ward-pearls">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Indian Ward Pearls"
          title="What your teaching hospital expects you to know."
          description="What your psychiatry professor may ask in viva, what the resident expects you to know, what consultants commonly do, and what interns commonly miss — the four levels of ward learning."
          tone="neural"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {sections.map(({ key, label, icon: Icon, tone, bg, border, badge }) => {
            const items = pearls[key];
            if (!items || items.length === 0) return null;
            return (
              <CardPrimitive key={key} variant="flat" interactive={false} showArrow={false} className={`${border} ${bg}`}>
                <CardBody className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${tone}`} />
                      <h3 className="text-h4">{label}</h3>
                    </div>
                    <Badge variant={badge} size="sm">{items.length}</Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                        <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${tone.replace("text-", "bg-")}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </CardPrimitive>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
