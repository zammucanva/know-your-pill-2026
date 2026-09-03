import { Lightbulb } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugMemoryTricks — mnemonics for exam preparation.
 *
 * Server Component.
 */
interface DrugMemoryTricksProps {
  drug: Drug;
}

export function DrugMemoryTricks({ drug }: DrugMemoryTricksProps) {
  return (
    <Section id="memory-tricks" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Memory Tricks"
          title="Mnemonics that actually stick."
          description="Exam-tested memory aids for high-yield facts. Read each mnemonic, cover it, and see if you can recall what it represents."
          tone="neural"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drug.memoryTricks.map((trick, i) => (
            <CardPrimitive key={i} variant="flat" interactive={false} showArrow={false} className="border-neural/20">
              <CardBody>
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neural-soft/60 text-neural">
                    <Lightbulb className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <Badge variant="neural" size="sm">Mnemonic</Badge>
                </div>

                <h3 className="mt-4 text-h4 leading-tight">{trick.title}</h3>

                <div className="mt-3 rounded-lg border border-neural/20 bg-neural-soft/30 p-3">
                  <p className="font-sans text-base font-semibold text-brand-ink leading-snug">
                    {trick.trick}
                  </p>
                </div>

                <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                  {trick.remembers}
                </p>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}
