"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { DrugClassCard } from "@/components/kyp/ui/drug-class-card";
import { categories } from "@/lib/kyp/data";

export function CategoriesSection() {
  return (
    <Section id="categories">
      <Container>
        <SectionHeader
          eyebrow="Browse by category"
          title="Clinical areas and the neurotransmitter systems behind them"
          description="Each category connects a clinical area to its underlying receptor pharmacology. Pick one to start learning."
          align="between"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => (
            <DrugClassCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
