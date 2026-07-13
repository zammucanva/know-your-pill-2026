import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug, DrugContraindication, DrugWarning } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugContraindications — absolute & relative contraindications + black box warnings.
 *
 * Server Component.
 */
interface DrugContraindicationsProps {
  drug: Drug;
}

const severityVariant = {
  absolute: "emergency" as const,
  relative: "warning" as const,
};

export function DrugContraindications({ drug }: DrugContraindicationsProps) {
  const absolute = drug.contraindications.filter((c) => c.severity === "absolute");
  const relative = drug.contraindications.filter((c) => c.severity === "relative");

  return (
    <Section id="contraindications" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Contraindications & Warnings"
          title="When should this drug NOT be used?"
          description="Contraindications are split into absolute (never combine) and relative (use with caution). Black box warnings are the FDA's strongest warning level."
        />

        {/* Black box warning */}
        {drug.blackBoxWarnings.length > 0 && (
          <div className="mt-10 space-y-4">
            {drug.blackBoxWarnings.map((w) => (
              <BlackBoxWarning key={w.title} warning={w} />
            ))}
          </div>
        )}

        {/* Absolute contraindications */}
        <div className="mt-10">
          <h3 className="text-h3 flex items-center gap-2">
            Absolute contraindications
            <Badge variant="emergency" size="sm">Never combine</Badge>
          </h3>
          <div className="mt-4 space-y-3">
            {absolute.map((c) => (
              <ContraindicationRow key={c.name} c={c} />
            ))}
          </div>
        </div>

        {/* Relative contraindications */}
        {relative.length > 0 && (
          <div className="mt-10">
            <h3 className="text-h3 flex items-center gap-2">
              Relative contraindications
              <Badge variant="warning" size="sm">Use with caution</Badge>
            </h3>
            <div className="mt-4 space-y-3">
              {relative.map((c) => (
                <ContraindicationRow key={c.name} c={c} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

function BlackBoxWarning({ warning }: { warning: DrugWarning }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-emergency/40 bg-card">
      {/* Black box marker on left edge */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-emergency" aria-hidden />

      <div className="p-6 sm:p-8 pl-8 sm:pl-10">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75 kyp-pulse-dot" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emergency" />
          </span>
          <p className="text-overline text-emergency">Black Box Warning · FDA</p>
        </div>
        <h3 className="mt-3 text-h2 text-foreground">{warning.title}</h3>
        <p className="mt-3 text-body text-foreground/90 leading-relaxed">{warning.text}</p>
      </div>
    </div>
  );
}

function ContraindicationRow({ c }: { c: DrugContraindication }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-4",
        c.severity === "absolute" ? "border-emergency/20" : "border-warning/20"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h4 className="text-h4">{c.name}</h4>
        <Badge variant={severityVariant[c.severity]} size="sm">
          {c.severity}
        </Badge>
      </div>
      <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
        {c.rationale}
      </p>
    </div>
  );
}
