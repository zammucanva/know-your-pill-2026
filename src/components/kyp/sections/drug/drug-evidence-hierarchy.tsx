import { Globe, MapPin, Stethoscope } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugEvidenceHierarchy — separates global evidence from Indian practice.
 *
 * Structure:
 *   1. International Guidelines (FDA, NICE, APA, WHO)
 *   2. Indian Guidelines (IPS, NMC) — or honest "no dedicated guideline"
 *   3. Indian Clinical Practice — how it's actually done in India
 *
 * Students immediately know: "What is evidence?" vs "What is Indian practice?"
 * Those are not always identical.
 *
 * Server Component.
 */
interface DrugEvidenceHierarchyProps {
  drug: Drug;
}

export function DrugEvidenceHierarchy({ drug }: DrugEvidenceHierarchyProps) {
  const eh = drug.evidenceHierarchy;
  if (!eh) return null;

  return (
    <Section id="evidence-hierarchy">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Evidence & Indian Practice"
          title="Global evidence → Indian practice."
          description="What does international evidence say? What do Indian guidelines recommend? How is it actually practiced in India? These are related but not identical — presented clearly so you understand the context."
          tone="brand"
        />

        <div className="mt-10 space-y-4">
          {/* Layer 1: International Guidelines */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20">
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-brand" />
                <h3 className="text-h4">International Guidelines</h3>
                <Badge variant="brand" size="sm">Global Evidence</Badge>
              </div>
              <div className="space-y-2">
                {eh.international.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-md border border-border/50 bg-background/60 p-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft/60 text-brand font-mono text-[0.6rem] font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-brand">{item.source}</p>
                      <p className="mt-0.5 text-xs text-foreground/90 leading-relaxed">{item.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </CardPrimitive>

          {/* Layer 2: Indian Guidelines */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20 bg-brand-soft/5">
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-brand" />
                <h3 className="text-h4">Indian Guidelines</h3>
                <Badge variant="brand" size="sm">IPS / NMC</Badge>
              </div>
              <div className="space-y-2">
                {eh.indian.map((item, i) => (
                  <div key={i} className={cn(
                    "flex items-start gap-2 rounded-md border p-2.5",
                    item.source
                      ? "border-brand/20 bg-brand-soft/10"
                      : "border-dashed border-border/60 bg-muted/20"
                  )}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft/60 text-brand font-mono text-[0.6rem] font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className={cn("text-xs font-semibold", item.source ? "text-brand" : "text-muted-foreground")}>
                        {item.source ?? "No dedicated Indian guideline"}
                      </p>
                      <p className="mt-0.5 text-xs text-foreground/90 leading-relaxed">{item.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </CardPrimitive>

          {/* Layer 3: Indian Clinical Practice */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/30 bg-brand-soft/10">
            <CardBody>
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="h-4 w-4 text-brand" />
                <h3 className="text-h4">Indian Clinical Practice</h3>
                <Badge variant="brand" size="sm">How it's actually done</Badge>
              </div>
              <p className="text-body-sm text-foreground/90 leading-relaxed">{eh.indianClinicalPractice}</p>
            </CardBody>
          </CardPrimitive>
        </div>

        <div className="mt-6">
          <Callout variant="info" title="Why this hierarchy matters">
            International guidelines are based on global evidence. Indian guidelines adapt this
            evidence to Indian populations, healthcare infrastructure, and cost considerations.
            Indian clinical practice is how it's actually done in Indian hospitals — which may
            differ from both when resources are limited. Understanding all three layers makes
            you a better prescriber in the Indian context.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
