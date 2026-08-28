"use client";

import * as React from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { ClinicalCard } from "@/components/kyp/ui/clinical-card";
import { Callout } from "@/components/kyp/ui/callout";
import { Reveal, RevealGroup } from "@/components/kyp/ui/reveal";
import { substances, drugClassFilters } from "@/lib/kyp/data";
import type { DrugClassId } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

export function SubstanceUseSection() {
  const [active, setActive] = React.useState<DrugClassId | "all">("all");

  const filtered = React.useMemo(() => {
    if (active === "all") return substances;
    return substances.filter((s) => s.drugClass === active);
  }, [active]);

  return (
    <Section id="substances" className="bg-muted/20">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Substance Use Education"
            title="How psychoactive substances alter the brain"
            description="Each module covers receptor pharmacology, intoxication features, withdrawal timelines, complications, and emergency guidance. Three modules are fully built; the rest are being migrated."
            tone="neural"
            align="between"
            action={
              <div className="flex items-center gap-2 overflow-x-auto kyp-scroll pb-1">
                {drugClassFilters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActive(f.id)}
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200",
                      active === f.id
                        ? "border-brand bg-brand text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "border-border/60 bg-card/40 text-muted-foreground hover:border-brand/40 hover:text-foreground"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((sub, i) => (
            <Reveal key={sub.id} delay={Math.min(i * 0.06, 0.3)}>
              <ClinicalCard substance={sub} index={i} />
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <Callout variant="info" title="Also in development">
              <p className="text-xs text-muted-foreground">
                ICD-10 clinical pattern pages for acute intoxication and withdrawal states are planned. They will cover diagnosis, symptom timelines, and management across all substance classes.
              </p>
            </Callout>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
