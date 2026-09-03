import { FileText, Calendar } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugEducationalPrescription — Indian OPD prescription template.
 *
 * Shows a typical prescription with Rx format, follow-up schedule,
 * and educational disclaimer. Not a real prescription — a teaching tool.
 *
 * Server Component.
 */
interface DrugEducationalPrescriptionProps {
  drug: Drug;
}

export function DrugEducationalPrescription({ drug }: DrugEducationalPrescriptionProps) {
  const rx = drug.educationalPrescription;
  if (!rx) return null;

  return (
    <Section id="educational-prescription">
      <Container width="narrow">
        <SectionHeader
          eyebrow="🇮🇳 Educational Prescription"
          title="How it's prescribed in an Indian OPD."
          description={rx.scenario}
          tone="brand"
        />

        <CardPrimitive variant="elevated" interactive={false} showArrow={false} className="mt-10 border-brand/20">
          <CardBody className="p-0">
            {/* Prescription header */}
            <div className="border-b border-border/70 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand" />
                <p className="font-sans text-lg font-semibold text-foreground">Rx</p>
              </div>
            </div>

            {/* Prescription lines */}
            <div className="p-5 sm:p-6">
              <div className="space-y-1">
                {rx.lines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line === ""
                        ? "h-3"
                        : line.startsWith("Then") || line.startsWith("Advice")
                          ? "mt-3 text-body-sm font-medium text-muted-foreground"
                          : "font-mono text-body-sm text-foreground"
                    }
                  >
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>
            </div>

            {/* Follow-up schedule */}
            <div className="border-t border-border/70 bg-muted/20 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-brand" />
                <p className="text-overline text-brand">Follow-up Schedule</p>
              </div>
              <ul className="space-y-1.5">
                {rx.followUp.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-foreground/90 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </CardPrimitive>

        {/* Disclaimer */}
        <div className="mt-6">
          <Callout variant="warning" title="Disclaimer">
            {rx.disclaimer}
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
