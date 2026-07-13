import { FileText, Download } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugHighYieldSummary — one-page revision for exams.
 *
 * A compact, scannable summary of everything on the page.
 * Designed to be the last thing a student reads before an exam.
 *
 * Server Component.
 */
interface DrugHighYieldSummaryProps {
  drug: Drug;
}

export function DrugHighYieldSummary({ drug }: DrugHighYieldSummaryProps) {
  return (
    <Section id="high-yield-summary">
      <Container width="narrow">
        <SectionHeader
          eyebrow="High-Yield Summary"
          title="One-page revision."
          description="Everything you need to know about this drug in 12 lines. Perfect for the night before an exam."
          tone="neural"
          align="center"
        />

        <CardPrimitive variant="elevated" interactive={false} showArrow={false} className="mt-10 border-neural/20">
          <CardBody className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-neural" />
                  <h3 className="text-h3">{drug.genericName}</h3>
                </div>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  {drug.drugClassLabel} · {drug.drugClassFullName}
                </p>
              </div>
              <Badge variant="neural" size="md">Revision sheet</Badge>
            </div>

            <ol className="mt-6 space-y-2.5">
              {drug.highYieldSummary.map((line, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neural-soft/60 text-neural font-mono text-xs font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-body-sm text-foreground/90 leading-relaxed pt-0.5">{line}</p>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-lg">
                <Download className="h-3.5 w-3.5" />
                Download as PDF
              </Button>
              <Button variant="ghost" size="sm" className="rounded-lg">
                Print this summary
              </Button>
            </div>
          </CardBody>
        </CardPrimitive>
      </Container>
    </Section>
  );
}
