"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { stats } from "@/lib/kyp/data";

export function StatsSection() {
  return (
    <Section spacing="tight">
      <Container>
        <div className="flex flex-wrap items-stretch justify-center gap-0 rounded-2xl border border-border/40 bg-card/30 overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex-1 min-w-[140px] px-6 py-5 text-center relative
                [&:not(:last-child)]:border-r-0
                sm:[&:not(:last-child)]:border-r
                sm:[&:not(:last-child)]:border-border/40
                border-b border-border/40 last:border-b-0
                sm:border-b-0"
            >
              <p className="font-serif text-3xl font-bold text-foreground tabular-nums">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand">
                {s.label}
              </p>
              <p className="mt-1 text-[0.7rem] text-muted-foreground leading-snug">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
