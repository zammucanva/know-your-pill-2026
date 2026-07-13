import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugExamPearls — high-yield facts for MBBS / NEET-PG students.
 *
 * Server Component.
 */
interface DrugExamPearlsProps {
  drug: Drug;
}

export function DrugExamPearls({ drug }: DrugExamPearlsProps) {
  return (
    <Section id="exam-pearls" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="High-Yield Exam Facts"
          title="What they'll actually test you on."
          description="MBBS, NEET-PG, USMLE, PLAB — these are the facts that show up repeatedly in pharmacology and psychiatry exams."
          tone="neural"
        />

        <div className="mt-8">
          <Callout variant="tip" title="How to use this section">
            Read each pearl, then close the page and try to recall it from memory. If you can
            reproduce 80% of these facts unprompted, you have exam-level mastery of this drug.
          </Callout>
        </div>

        <ol className="mt-8 space-y-3">
          {drug.examPearls.map((pearl, i) => (
            <li key={i}>
              <CardPrimitive variant="flat" interactive={false} showArrow={false}>
                <CardBody className="flex items-start gap-4 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neural-soft/60 text-neural font-mono text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="text-body-sm text-foreground/90 leading-relaxed">{pearl}</p>
                  </div>
                </CardBody>
              </CardPrimitive>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-2">
          <Badge variant="neural" size="md">MBBS</Badge>
          <Badge variant="neural" size="md">NEET-PG</Badge>
          <Badge variant="neural" size="md">USMLE Step 1</Badge>
          <Badge variant="neural" size="md">Pharmacology</Badge>
          <Badge variant="neural" size="md">Psychiatry</Badge>
        </div>
      </Container>
    </Section>
  );
}
