"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/kyp/data";

export function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border/70 bg-card p-5 text-center sm:text-left"
            >
              <p className="font-sans text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
