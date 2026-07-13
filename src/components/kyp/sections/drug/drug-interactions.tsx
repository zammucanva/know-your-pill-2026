import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug, DrugInteraction } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugInteractions — clinically important drug interactions.
 *
 * Server Component.
 */
interface DrugInteractionsProps {
  drug: Drug;
}

const severityVariant = {
  contraindicated: "emergency" as const,
  major: "danger" as const,
  moderate: "warning" as const,
  minor: "outline" as const,
};

const severityLabel = {
  contraindicated: "Contraindicated",
  major: "Major",
  moderate: "Moderate",
  minor: "Minor",
};

export function DrugInteractions({ drug }: DrugInteractionsProps) {
  // Sort by severity: contraindicated → major → moderate → minor
  const order = ["contraindicated", "major", "moderate", "minor"];
  const sorted = [...drug.interactions].sort(
    (a, b) => order.indexOf(a.severity) - order.indexOf(b.severity)
  );

  return (
    <Section id="interactions">
      <Container>
        <SectionHeader
          eyebrow="Drug Interactions"
          title="What should not be combined — and why."
          description="Interactions are sorted by severity. The most dangerous interactions are pharmacokinetic (CYP inhibition) and pharmacodynamic (additive serotonergic effect)."
        />

        <div className="mt-10 space-y-3">
          {sorted.map((int) => (
            <InteractionRow key={int.drug} interaction={int} />
          ))}
        </div>

        <div className="mt-8">
          <Callout variant="warning" title="Practical tip for clinicians">
            Always ask about over-the-counter products — particularly cough syrups containing
            dextromethorphan (serotonergic), herbal products like St John's Wort (SSRI), and
            weight-loss products containing sibutramine. These are commonly missed on standard
            medication reconciliation and are frequent causes of serotonin syndrome.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}

function InteractionRow({ interaction }: { interaction: DrugInteraction }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-4 sm:p-5",
        interaction.severity === "contraindicated" && "border-emergency/30",
        interaction.severity === "major" && "border-emergency/20",
        interaction.severity === "moderate" && "border-warning/20",
        interaction.severity === "minor" && "border-border/70"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-h4 leading-tight">{interaction.drug}</h3>
        <Badge variant={severityVariant[interaction.severity]} size="md">
          {severityLabel[interaction.severity]}
        </Badge>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-overline text-muted-foreground">Mechanism</p>
          <p className="mt-1 text-body-sm text-foreground/90 leading-relaxed">
            {interaction.mechanism}
          </p>
        </div>
        <div>
          <p className="text-overline text-muted-foreground">Action</p>
          <p className="mt-1 text-body-sm text-foreground/90 leading-relaxed">
            {interaction.action}
          </p>
        </div>
      </div>
    </div>
  );
}
