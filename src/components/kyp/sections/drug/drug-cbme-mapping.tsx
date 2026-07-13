import { BookMarked } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugCBMEMapping — NMC CBME competency mapping badge.
 *
 * Shows which NMC competency, subject, and MBBS year this drug maps to.
 * Rendered as a compact callout (not a full section) — placed near the
 * top of the page so students immediately know the curriculum context.
 *
 * Server Component.
 */
interface DrugCBMEMappingProps {
  drug: Drug;
}

export function DrugCBMEMapping({ drug }: DrugCBMEMappingProps) {
  const cbme = drug.cbmeMapping;
  if (!cbme) return null;

  return (
    <Section id="cbme-mapping" spacing="tight">
      <Container>
        <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20 bg-brand-soft/10">
          <CardBody className="p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
                <BookMarked className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-overline text-brand">NMC CBME Mapping</p>
                  <Badge variant="brand" size="sm">{cbme.subject}</Badge>
                  <Badge variant="outline" size="sm">{cbme.mbbsYear}</Badge>
                </div>
                <p className="mt-1 text-body-sm font-medium text-foreground">{cbme.topic}</p>

                {/* Competency codes */}
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {cbme.competencyCodes.map((code, i) => (
                    <div key={code} className="rounded-md border border-border/50 bg-background/60 p-2">
                      <p className="font-mono text-xs font-semibold text-brand">{code}</p>
                      {cbme.competencyDescriptions[i] && (
                        <p className="mt-0.5 text-[0.7rem] text-muted-foreground leading-snug">
                          {cbme.competencyDescriptions[i]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Integration subjects */}
                {cbme.integrationSubjects.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Integrates with:</span>
                    {cbme.integrationSubjects.map((s) => (
                      <Badge key={s} variant="outline" size="sm">{s}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </CardPrimitive>
      </Container>
    </Section>
  );
}
