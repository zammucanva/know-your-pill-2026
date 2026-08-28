"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { stats } from "@/lib/kyp/data";

export function StatsSection() {
  return (
    <Section spacing="tight" className="border-y border-border/30">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "px-6 py-8 text-center",
                  i < stats.length - 1 && "border-r border-border/20",
                  i >= 2 && "border-t lg:border-t-0 border-border/20",
                  i === 1 && "border-t lg:border-t-0 border-border/20"
                )}
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground tabular-nums tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-brand">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[0.7rem] text-muted-foreground leading-snug max-w-[180px] mx-auto">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

import { cn } from "@/lib/utils";
