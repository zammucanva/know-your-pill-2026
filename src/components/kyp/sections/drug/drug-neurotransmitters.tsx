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

/**
 * σ1 (sigma-1) note — defined ONLY when this drug's own canonical
 * receptor profile documents σ1 activity. Never a class default:
 * drugs without σ1 data render no note here, and no generic
 * replacement claim is invented. The body quotes the drug's own
 * verbatim receptor entry.
 */
export function sigma1ReceptorNote(drug: Drug): string | undefined {
  const entry = drug.receptors.find((r) => /σ\s*1|sigma[-\s]?1/i.test(r));
  if (!entry) return undefined;
  return `${drug.genericName}'s own receptor profile documents σ1 (sigma-1) activity — “${entry}”. The Knowledge Chain section connects this target to ${drug.genericName}'s wider pharmacology.`;
}

export function DrugNeurotransmitters({ drug }: DrugNeurotransmittersProps) {
  const sigma1Note = sigma1ReceptorNote(drug);

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
                className="inline-flex items-center gap-2 rounded-full border border-neural/30 bg-neural-soft/40 px-4 py-2 text-body-sm font-semibold text-neural"
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
                  <p className="mt-2 font-serif text-base font-semibold text-foreground leading-tight">
                    {r}
                  </p>
                </CardBody>
              </CardPrimitive>
            ))}
          </div>
        </div>

        {/* σ1 note — data-gated: only drugs whose own receptor profile
            documents σ1 activity show this; no default, no other drug's
            explanation. */}
        {sigma1Note && (
          <div className="mt-8">
            <Callout variant="tip" title="Why the σ1 receptor matters">
              {sigma1Note}
            </Callout>
          </div>
        )}
      </Container>
    </Section>
  );
}
