import { Globe, MapPin } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug, GuidelineComparison } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugGuidelineComparison — side-by-side international vs Indian guidelines.
 *
 * Renders a table-like comparison showing how international guidelines
 * (FDA, APA, NICE) compare to Indian guidelines (IPS) for key clinical
 * decisions.
 *
 * When no dedicated Indian guideline exists, displays an honest note
 * rather than inventing one.
 *
 * Server Component.
 */
interface DrugGuidelineComparisonProps {
  drug: Drug;
}

export function DrugGuidelineComparison({ drug }: DrugGuidelineComparisonProps) {
  const comparisons = drug.guidelineComparisons;
  if (!comparisons || comparisons.length === 0) return null;

  return (
    <Section id="guideline-comparison">
      <Container>
        <SectionHeader
          eyebrow="🇮🇳 Guideline Comparison"
          title="International vs Indian practice."
          description="How do international guidelines (FDA, APA, NICE) compare to Indian guidelines (IPS)? When they differ, both are presented clearly. When no dedicated Indian guideline exists, we say so honestly."
          tone="brand"
        />

        <div className="mt-10 space-y-3">
          {comparisons.map((c, i) => (
            <GuidelineRow key={i} comparison={c} />
          ))}
        </div>

        <div className="mt-8">
          <Callout variant="info" title="Academic honesty principle">
            KYP presents both international and Indian guidance side by side. When no dedicated
            Indian guideline exists for a topic, we label it clearly rather than inventing a
            consensus. Always verify recommendations against the current edition of the relevant
            guideline and local institutional protocols.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}

function GuidelineRow({ comparison }: { comparison: GuidelineComparison }) {
  const hasIndianGuideline = comparison.indianSource !== null;

  return (
    <CardPrimitive variant="flat" interactive={false} showArrow={false}>
      <CardBody>
        {/* Topic */}
        <p className="text-overline text-muted-foreground mb-3">{comparison.topic}</p>

        {/* Two-column comparison */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* International */}
          <div className="rounded-lg border border-border/50 bg-background/60 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Globe className="h-3.5 w-3.5 text-brand" />
              <span className="text-xs font-semibold text-brand">{comparison.internationalSource}</span>
            </div>
            <p className="text-xs text-foreground/90 leading-relaxed">{comparison.internationalRecommendation}</p>
          </div>

          {/* Indian */}
          <div className={cn(
            "rounded-lg border p-3",
            hasIndianGuideline
              ? "border-brand/20 bg-brand-soft/10"
              : "border-dashed border-border/60 bg-muted/20"
          )}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span className="text-xs font-semibold text-brand">
                {hasIndianGuideline ? comparison.indianSource : "No dedicated Indian guideline"}
              </span>
            </div>
            <p className="text-xs text-foreground/90 leading-relaxed">{comparison.indianRecommendation}</p>
          </div>
        </div>
      </CardBody>
    </CardPrimitive>
  );
}
