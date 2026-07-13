"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Stat } from "@/components/kyp/ui/stat";
import { stats } from "@/lib/kyp/data";

export function StatsSection() {
  return (
    <Section spacing="tight">
      <Container>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Stat
                value={s.value}
                label={s.label}
                description={s.description}
                variant="default"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
