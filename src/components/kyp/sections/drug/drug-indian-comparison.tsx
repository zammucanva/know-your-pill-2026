import { GitCompare, CheckCircle2, X, Building2 } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugIndianComparison — how this drug compares in specific Indian scenarios.
 *
 * Instead of just "Sertraline vs Fluoxetine", shows which drug is preferred
 * in specific Indian contexts: government setup, private practice, pregnancy,
 * adolescents, older adults, cost-sensitive settings.
 *
 * Server Component.
 */
interface DrugIndianComparisonProps {
  drug: Drug;
}

export function DrugIndianComparison({ drug }: DrugIndianComparisonProps) {
  const contexts = drug.indianComparisonContexts;
  if (!contexts || contexts.length === 0) return null;

  return (
    <Section id="indian-comparison" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Indian Comparison"
          title="Which drug, in which Indian setting?"
          description="Drug selection isn't universal — it depends on the clinical setting, patient population, and resources. Here's how this drug compares in specific Indian scenarios."
          tone="brand"
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {contexts.map((ctx, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false}>
              <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitCompare className="h-3.5 w-3.5 text-brand" />
                  <p className="text-overline text-muted-foreground">{ctx.scenario}</p>
                </div>
                <p className="text-body-sm text-foreground/90 leading-relaxed">{ctx.recommendation}</p>
                {ctx.alternative && (
                  <div className="mt-2 rounded-md border border-border/50 bg-muted/30 p-2">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Alternative</p>
                    <p className="mt-0.5 text-xs text-foreground/80">{ctx.alternative}</p>
                  </div>
                )}
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/**
 * JanAushadhiBadge — compact badge showing Jan Aushadhi availability.
 * Rendered inside the Indian Practice section, not as a standalone section.
 */
interface JanAushadhiBadgeProps {
  drug: Drug;
}

export function JanAushadhiBadge({ drug }: JanAushadhiBadgeProps) {
  const ja = drug.janAushadhi;
  if (!ja) return null;

  return (
    <div className="mt-3 flex items-start gap-2 rounded-md border border-brand/20 bg-brand-soft/10 p-2.5">
      <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-brand">Jan Aushadhi</span>
          {ja.available ? (
            <CheckCircle2 className="h-3 w-3 text-success" />
          ) : (
            <X className="h-3 w-3 text-emergency" />
          )}
        </div>
        <p className="mt-0.5 text-xs text-foreground/80 leading-relaxed">
          {ja.available ? "Available at Jan Aushadhi Kendras" : "Not available at Jan Aushadhi Kendras"}
          {ja.note && <span className="block mt-0.5 text-muted-foreground">{ja.note}</span>}
        </p>
      </div>
    </div>
  );
}
