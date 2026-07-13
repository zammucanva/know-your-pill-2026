"use client";

import * as React from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { ClinicalCard } from "@/components/kyp/ui/clinical-card";
import { Callout } from "@/components/kyp/ui/callout";
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
    <Section id="substances">
      <Container>
        <SectionHeader
          eyebrow="Substance Use Education"
          title="Psychoactive Substances, Visualised"
          description="Twelve deep-dive modules covering how each substance alters brain chemistry — from receptor-level mechanisms to withdrawal, complications, and emergency warning signs."
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
                    "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    active === f.id
                      ? "border-brand bg-brand text-primary-foreground"
                      : "border-border/80 bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          }
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((sub, i) => (
            <ClinicalCard key={sub.id} substance={sub} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Callout variant="info" title="Clinical modules (ICD-10 aligned)">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="/acute-intoxication.html" className="text-brand underline-offset-4 hover:underline">
                Acute Intoxication →
              </a>
              <a href="/withdrawal-state.html" className="text-brand underline-offset-4 hover:underline">
                Withdrawal State →
              </a>
              <a href="/substance-use.html" className="text-brand underline-offset-4 hover:underline">
                Substance Use Hub →
              </a>
            </div>
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
