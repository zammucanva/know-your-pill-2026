import { Zap } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugNeurotransmitters — section 2 of 3 of the neuroscience mapping.
 *
 * Shows the neurotransmitters this drug modulates, with a visual chip
 * for each receptor.
 *
 * Server Component.
 */
interface DrugNeurotransmittersProps {
  drug: Drug;
}

export function DrugNeurotransmitters({ drug }: DrugNeurotransmittersProps) {
  return (
    <Section id="neurotransmitters" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Neurotransmitters · Neuroscience Mapping (2 of 3)"
          title="Which neurotransmitters are involved?"
          description="The neurotransmitters below are the chemical messengers this drug affects. Each receptor chip shows where the drug acts at the molecular level."
          tone="neural"
        />

        {/* Primary neurotransmitters */}
        <div className="mt-10">
          <p className="text-overline text-muted-foreground">Primary neurotransmitters</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {drug.neurotransmitters.map((nt) => (
              <span
                key={nt}
                className="inline-flex items-center gap-2 rounded-md border border-neural/30 bg-neural-soft/40 px-4 py-2 text-body-sm font-semibold text-neural"
              >
                <Zap className="h-3.5 w-3.5" />
                {nt}
              </span>
            ))}
          </div>
        </div>

        {/* Receptor activity */}
        <div className="mt-10">
          <p className="text-overline text-muted-foreground">Receptor activity</p>
          <p className="mt-2 text-body-sm text-muted-foreground">
            The receptors below are the molecular targets. The drug's effect depends on which
            receptor it binds, whether it activates or blocks it, and how the receptor adapts over time.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {drug.receptors.map((r, i) => (
              <CardPrimitive key={r} variant="flat" interactive={false} showArrow={false}>
                <CardBody className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Badge variant="neural" size="sm">Receptor</Badge>
                  </div>
                  <p className="mt-2 font-sans text-base font-semibold text-foreground leading-tight">
                    {r}
                  </p>
                </CardBody>
              </CardPrimitive>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Callout variant="tip" title="Why the σ1 receptor matters">
            Among SSRIs, sertraline has unique affinity for the σ1 (sigma-1) receptor as an agonist.
            This may explain why sertraline has particular efficacy in anxiety disorders — σ1 agonism
            is associated with anxiolytic and neuroprotective effects. Other SSRIs lack this property.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
