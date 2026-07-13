import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { MechanismFlow } from "@/components/kyp/ui/mechanism-flow";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugMechanismOfAction — the science of how the drug works.
 *
 * Renders:
 *   - Summary callout
 *   - Ordered steps (the mechanism chain)
 *   - Pharmacokinetics grid (half-life, metabolism, excretion, active metabolite)
 *
 * Server Component.
 */
interface DrugMechanismOfActionProps {
  drug: Drug;
}

export function DrugMechanismOfAction({ drug }: DrugMechanismOfActionProps) {
  const m = drug.mechanism;

  const pkItems = [
    { label: "Molecular target", value: m.molecularTarget },
    { label: "Half-life", value: m.halfLife },
    { label: "Metabolism", value: m.metabolism },
    { label: "Excretion", value: m.excretion },
    ...(m.activeMetabolite ? [{ label: "Active metabolite", value: m.activeMetabolite }] : []),
  ];

  return (
    <Section id="mechanism" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Mechanism of Action"
          title="How does it actually work?"
          description={m.summary}
        />

        <div className="mt-8">
          <Callout variant="info" title="Net effect">
            {m.effect}
          </Callout>
        </div>

        {/* Visual flow diagram (NEW — replaces text-only steps as primary visual) */}
        <div className="mt-10">
          <h3 className="text-h3">Visual mechanism flow</h3>
          <p className="mt-2 text-body text-muted-foreground">
            Each node below represents a key step in the drug's action — from acute molecular target
            to chronic clinical effect. Follow the chain top to bottom.
          </p>
          <MechanismFlow flow={drug.mechanismFlow} />
        </div>

        {/* Step-by-step mechanism (text version — kept for depth) */}
        <div className="mt-12">
          <h3 className="text-h3">Step-by-step explanation</h3>
          <p className="mt-2 text-body text-muted-foreground">
            Understanding the delay between acute pharmacology (hours) and clinical effect (weeks)
            is the single most important concept in SSRI pharmacology.
          </p>
          <ol className="mt-6 space-y-3">
            {m.steps.map((step, i) => (
              <li key={i}>
                <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="flex items-start gap-4 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground font-mono text-sm font-semibold">
                      {i + 1}
                    </span>
                    <p className="text-body-sm text-foreground/90 leading-relaxed pt-1">{step}</p>
                  </CardBody>
                </CardPrimitive>
              </li>
            ))}
          </ol>
        </div>

        {/* Pharmacokinetics */}
        <div className="mt-12">
          <h3 className="text-h3">Pharmacokinetics</h3>
          <p className="mt-2 text-body text-muted-foreground">{m.pharmacokinetics}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pkItems.map((pk) => (
              <div key={pk.label} className="rounded-xl border border-border/70 bg-card p-4">
                <p className="text-overline text-muted-foreground">{pk.label}</p>
                <p className="mt-1 text-body-sm font-medium text-foreground leading-relaxed">
                  {pk.value}
                </p>
              </div>
            ))}
          </div>

          {/* Receptors */}
          <div className="mt-6">
            <p className="text-overline text-muted-foreground">Receptor activity</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {drug.receptors.map((r) => (
                <Badge key={r} variant="outline" size="md">{r}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
