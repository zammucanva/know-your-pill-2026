import { Pill, IndianRupee, Building2, MapPin, ClipboardCheck, MessageSquare, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { JanAushadhiBadge } from "@/components/kyp/sections/drug/drug-indian-comparison";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugIndianPractice — Indian clinical practice section.
 *
 * Renders: prescription status, Indian brand names, typical doses,
 * availability, cost category, Indian monitoring approach, and
 * India-specific patient counselling.
 *
 * Server Component.
 */
interface DrugIndianPracticeProps {
  drug: Drug;
}

const costConfig = {
  low: { color: "text-success", bg: "bg-success-soft/40", icon: "🟢", label: "Low cost" },
  moderate: { color: "text-warning", bg: "bg-warning-soft/40", icon: "🟡", label: "Moderate cost" },
  high: { color: "text-emergency", bg: "bg-emergency-soft/40", icon: "🔴", label: "High cost" },
};

export function DrugIndianPractice({ drug }: DrugIndianPracticeProps) {
  const ip = drug.indianPractice;
  if (!ip) return null;

  const cost = costConfig[ip.costCategory];

  return (
    <Section id="indian-practice" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Indian Clinical Practice"
          title="Prescribing in India."
          description="Indian brand names, prescription status, typical doses, availability, cost, and India-specific patient counselling. Sourced from CDSCO, CIMS India, and standard Indian clinical practice."
          tone="brand"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Prescription status + brands */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <Pill className="h-4 w-4 text-brand" />
                <h3 className="text-h4">Identity & Brands</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-overline text-muted-foreground">Generic name</p>
                  <p className="mt-0.5 font-medium text-foreground">{drug.genericName}</p>
                </div>

                <div>
                  <p className="text-overline text-muted-foreground">Prescription status</p>
                  <Badge variant="brand" size="sm" className="mt-1">{ip.prescriptionStatus}</Badge>
                </div>

                <div>
                  <p className="text-overline text-muted-foreground">Common Indian brands</p>
                  <div className="mt-1.5 space-y-1">
                    {ip.brands.map((b) => (
                      <div key={b.name} className="flex flex-wrap items-baseline justify-between gap-1 rounded-md border border-border/50 bg-background/60 px-2.5 py-1.5">
                        <div>
                          <span className="font-medium text-foreground">{b.name}</span>
                          {b.manufacturer && (
                            <span className="ml-1.5 text-muted-foreground">({b.manufacturer})</span>
                          )}
                        </div>
                        {b.strengths && (
                          <span className="text-muted-foreground">{b.strengths}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </CardPrimitive>

          {/* Doses + availability + cost */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <ClipboardCheck className="h-4 w-4 text-brand" />
                <h3 className="text-h4">Dosing & Availability</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-overline text-muted-foreground">Typical Indian doses</p>
                  <p className="mt-1 text-foreground/90 leading-relaxed">{ip.typicalDoses}</p>
                </div>

                <div>
                  <p className="text-overline text-muted-foreground">Availability</p>
                  <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                    <AvailabilityItem icon={Building2} label="Govt hospitals" available={ip.availability.governmentHospitals} />
                    <AvailabilityItem icon={Building2} label="Private pharmacies" available={ip.availability.privatePharmacies} />
                    <AvailabilityItem icon={MapPin} label="Urban" available={ip.availability.urban} />
                    <AvailabilityItem icon={MapPin} label="Rural" available={ip.availability.rural} />
                  </div>
                  {ip.availability.note && (
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">{ip.availability.note}</p>
                  )}
                </div>

                <div>
                  <p className="text-overline text-muted-foreground">Cost</p>
                  <div className={cn("mt-1 flex items-center gap-2 rounded-md p-2", cost.bg)}>
                    <span className="text-base">{cost.icon}</span>
                    <span className={cn("text-sm font-semibold", cost.color)}>{cost.label}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{ip.costNote}</p>
                </div>
              </div>

              {/* Jan Aushadhi availability (India Layer) */}
              <JanAushadhiBadge drug={drug} />
            </CardBody>
          </CardPrimitive>
        </div>

        {/* Indian monitoring */}
        <div className="mt-4">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <div className="flex items-center gap-2 mb-2">
                <ClipboardCheck className="h-4 w-4 text-brand" />
                <h3 className="text-h4">Indian Monitoring Approach</h3>
              </div>
              <p className="text-body-sm text-foreground/90 leading-relaxed">{ip.monitoring}</p>
            </CardBody>
          </CardPrimitive>
        </div>

        {/* Indian prescribing scenarios */}
        <div className="mt-4">
          <CardPrimitive variant="flat" interactive={false} showArrow={false}>
            <CardBody>
              <h3 className="text-h4 mb-3">Common Indian Prescribing Scenarios</h3>
              <ul className="space-y-1.5">
                {ip.prescribingScenarios.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-foreground/90 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
        </div>

        {/* India-specific patient counselling */}
        <div className="mt-4">
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20 bg-brand-soft/10">
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-4 w-4 text-brand" />
                <h3 className="text-h4">India-Specific Patient Counselling</h3>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {ip.patientCounselling.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5 text-xs text-foreground/90 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    {c}
                  </li>
                ))}
              </ul>
            </CardBody>
          </CardPrimitive>
        </div>
      </Container>
    </Section>
  );
}

function AvailabilityItem({
  icon: Icon,
  label,
  available,
}: {
  icon: typeof Building2;
  label: string;
  available: boolean;
}) {
  return (
    <div className={cn(
      "flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs",
      available ? "border-success/20 bg-success-soft/20 text-foreground" : "border-border/50 bg-muted/30 text-muted-foreground"
    )}>
      <Icon className="h-3 w-3 shrink-0" />
      <span className="truncate">{label}</span>
      {available ? (
        <CheckCircle2 className="ml-auto h-3 w-3 shrink-0 text-success" />
      ) : (
        <span className="ml-auto text-muted-foreground">✗</span>
      )}
    </div>
  );
}
