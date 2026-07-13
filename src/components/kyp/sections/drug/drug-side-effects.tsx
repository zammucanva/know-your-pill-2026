import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { SideEffectReceptorMap } from "@/components/kyp/ui/side-effect-receptor-map";
import { sideEffects } from "@/lib/kyp/data";
import type { Drug, DrugSideEffectEntry } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugSideEffects — common + serious side effects in one section.
 *
 * Reuses the global <SideEffectCard /> for entries that have a `sideEffectId`
 * pointing into the global side-effects registry.
 *
 * Server Component.
 */
interface DrugSideEffectsProps {
  drug: Drug;
}

const frequencyLabel: Record<DrugSideEffectEntry["frequency"], string> = {
  "very-common": "Very common (>10%)",
  "common": "Common (1–10%)",
  "uncommon": "Uncommon (0.1–1%)",
  "rare": "Rare (<0.1%)",
  "unknown": "Frequency unknown",
};

const frequencyVariant = {
  "very-common": "default" as const,
  "common": "default" as const,
  "uncommon": "warning" as const,
  "rare": "warning" as const,
  "unknown": "outline" as const,
};

const severityVariant = {
  "mild": "outline" as const,
  "moderate": "warning" as const,
  "severe": "danger" as const,
  "life-threatening": "emergency" as const,
};

export function DrugSideEffects({ drug }: DrugSideEffectsProps) {
  return (
    <Section id="side-effects" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Side Effects"
          title="What to expect — and what to worry about."
          description="Side effects are split into common (typically mild and self-limiting) and serious (require urgent attention). Knowing the difference is the most important skill for patients and clinicians alike."
        />

        {/* Common side effects */}
        <div className="mt-10">
          <h3 className="text-h3">Common side effects</h3>
          <p className="mt-2 text-body text-muted-foreground">
            Most of these appear in the first 1–2 weeks and resolve as the body adapts. Persistent
            or severe effects should be discussed with a clinician.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {drug.commonSideEffects.map((se, i) => (
              <SideEffectEntryCard key={se.name} entry={se} index={i} />
            ))}
          </div>
        </div>

        {/* Serious side effects */}
        <div className="mt-12">
          <h3 className="text-h3 flex items-center gap-2">
            Serious side effects
            <Badge variant="emergency" size="sm">Urgent</Badge>
          </h3>
          <p className="mt-2 text-body text-muted-foreground">
            These require immediate medical attention. Know the warning signs for each — early
            recognition is lifesaving.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {drug.seriousSideEffects.map((se, i) => (
              <SideEffectEntryCard key={se.name} entry={se} index={i} />
            ))}
          </div>
        </div>

        {/* Cross-link to side-effect library */}
        {drug.seriousSideEffects.some((se) => se.sideEffectId) && (
          <div className="mt-10">
            <Callout variant="tip" title="Learn more in the Side Effect Library">
              Several of these serious effects have dedicated library entries explaining the
              receptor, pathway, and management in depth:{" "}
              {drug.seriousSideEffects
                .filter((se) => se.sideEffectId)
                .map((se, i, arr) => {
                  const libraryEntry = sideEffects.find((l) => l.id === se.sideEffectId);
                  if (!libraryEntry) return null;
                  return (
                    <span key={se.sideEffectId}>
                      <a
                        href={`/#side-effects`}
                        className="text-brand underline-offset-4 hover:underline"
                      >
                        {libraryEntry.name}
                      </a>
                      {i < arr.length - 1 ? ", " : "."}
                    </span>
                  );
                })}
            </Callout>
          </div>
        )}

        {/* Visual receptor map — at a glance */}
        <div className="mt-12">
          <SideEffectReceptorMap
            sideEffects={drug.seriousSideEffects}
            title="Serious side effects → receptor map (at a glance)"
          />
        </div>
      </Container>
    </Section>
  );
}

function SideEffectEntryCard({ entry, index }: { entry: DrugSideEffectEntry; index: number }) {
  return (
    <CardPrimitive
      variant="flat"
      interactive={false}
      showArrow={false}
      className={cn(
        entry.severity === "life-threatening" && "border-emergency/30",
        entry.severity === "severe" && "border-warning/30"
      )}
    >
      <CardBody>
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-h4 leading-tight">{entry.name}</h4>
          <Badge variant={severityVariant[entry.severity]} size="sm">
            {entry.severity.replace("-", " ")}
          </Badge>
        </div>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          {entry.description}
        </p>

        <div className="mt-3">
          <Badge variant={frequencyVariant[entry.frequency]} size="sm">
            {frequencyLabel[entry.frequency]}
          </Badge>
        </div>

        {entry.management && (
          <div className="mt-4 rounded-lg border border-border/70 bg-muted/40 p-3">
            <p className="text-overline text-muted-foreground">Management</p>
            <p className="mt-1 text-caption text-foreground/90 leading-relaxed">
              {entry.management}
            </p>
          </div>
        )}
      </CardBody>
    </CardPrimitive>
  );
}
