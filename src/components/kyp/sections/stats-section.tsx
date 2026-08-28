"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { stats } from "@/lib/kyp/data";

export function StatsSection() {
  return (
    <Section spacing="tight">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-stretch justify-center gap-0 overflow-hidden rounded-2xl border border-border/30 bg-card/20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-[140px] flex-1 px-6 py-6 text-center relative
                  border-b border-border/30 last:border-b-0
                  sm:border-b-0 sm:[&:not(:last-child)]:border-r sm:border-border/30"
              >
                <p className="font-serif text-4xl font-bold text-foreground tabular-nums tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[0.7rem] text-muted-foreground leading-snug max-w-[180px] mx-auto">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
