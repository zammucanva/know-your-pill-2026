import { ClipboardCheck, Activity, Calendar, AlertTriangle } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugPrescriptionWorkflow — Indian prescription workflow.
 *
 * Structure:
 *   1. Before Prescribing — what to check
 *   2. During Treatment — what to monitor
 *   3. Follow-Up — when to see the patient again
 *   4. When to Refer — escalation criteria
 *
 * Much more useful than isolated monitoring notes.
 *
 * Server Component.
 */
interface DrugPrescriptionWorkflowProps {
  drug: Drug;
}

const phases = [
  { key: "beforePrescribing" as const, label: "Before Prescribing", icon: ClipboardCheck, tone: "text-brand", bg: "bg-brand-soft/30", border: "border-brand/20" },
  { key: "duringTreatment" as const, label: "During Treatment", icon: Activity, tone: "text-neural", bg: "bg-neural-soft/30", border: "border-neural/20" },
  { key: "followUp" as const, label: "Follow-Up", icon: Calendar, tone: "text-warning", bg: "bg-warning-soft/30", border: "border-warning/20" },
  { key: "whenToRefer" as const, label: "When to Refer", icon: AlertTriangle, tone: "text-emergency", bg: "bg-emergency-soft/30", border: "border-emergency/20" },
];

export function DrugPrescriptionWorkflow({ drug }: DrugPrescriptionWorkflowProps) {
  const wf = drug.prescriptionWorkflow;
  if (!wf) return null;

  return (
    <Section id="prescription-workflow">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Prescription Workflow"
          title="Before → During → Follow-up → Refer."
          description="The complete Indian prescribing workflow — what to check before starting, what to monitor during treatment, when to follow up, and when to refer to a specialist."
          tone="brand"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {phases.map(({ key, label, icon: Icon, tone, bg, border }) => {
            const items = wf[key];
            if (!items || items.length === 0) return null;
            return (
              <CardPrimitive key={key} variant="flat" interactive={false} showArrow={false} className={`${border} ${bg}`}>
                <CardBody>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${tone}`} />
                      <h3 className="text-h4">{label}</h3>
                    </div>
                    <Badge variant="outline" size="sm">{items.length} items</Badge>
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
