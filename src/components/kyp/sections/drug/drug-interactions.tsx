import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug, DrugInteraction } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          description="Interactions are sorted by severity. The most clinically important are pharmacokinetic interactions (one drug altering the levels of another) and pharmacodynamic interactions (additive effects on the same system)."
        />

        <div className="mt-10 space-y-3">
          {sorted.map((int) => (
            <InteractionRow key={int.drug} interaction={int} />
          ))}
        </div>

        {/* Learning chain: continue into the pairwise Interaction Checker
            with this medication preselected — the user picks the second
            drug and sees every interaction both pages list, verbatim. */}
        <div className="mt-8">
          <Link
            href={`/interactions?drug=${drug.slug}`}
            prefetch={false}
            className="group inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/60"
          >
            Check {drug.genericName} against other medications
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-8">
          <Callout variant="warning" title="Practical tip for clinicians">
            Always ask about over-the-counter products and herbal supplements during
            medication reconciliation — cough syrups, herbal products such as St John&apos;s
            Wort, and weight-loss products are commonly missed on standard reconciliation
            and can interact meaningfully with psychiatric medications.
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
