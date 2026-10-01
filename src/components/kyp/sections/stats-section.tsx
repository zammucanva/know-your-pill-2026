import * as React from "react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { stats } from "@/lib/kyp/data";

/**
 * StatsSection — the homepage stats strip.
 *
 * Server Component (static content only — `stats` is a tiny curated
 * platform array, consumed at request/build time).
 */
export function StatsSection() {
  return (
    <Section spacing="tight">
      <Container>
        <Reveal>
          <p className="text-center text-sm text-muted-foreground leading-relaxed">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <span className="font-serif text-lg font-bold text-foreground">{s.value}</span>{" "}
                <span className="text-brand font-medium">{s.label}</span>
                {i < stats.length - 1 && <span className="text-muted-foreground/30 mx-2">·</span>}
              </React.Fragment>
            ))}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
