import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugFamilyNavigator — visual drug family tree.
 *
 * Shows all drugs in the same class (e.g., all SSRIs) with their
 * key distinguishing features. Each member links to their drug page
 * if a slug is available.
 *
 * Server Component.
 */
interface DrugFamilyNavigatorProps {
  drug: Drug;
}

export function DrugFamilyNavigator({ drug }: DrugFamilyNavigatorProps) {
  const family = drug.drugFamilyNav;
  if (!family) return null;

  return (
    <Section id="drug-family" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Drug Family"
          title={family.familyName}
          description={`All drugs in the ${family.familyName.split("(")[0].trim()} family. Each has a unique profile — click to explore.`}
          tone="brand"
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {family.members.map((member) => {
            const isCurrent = member.name === drug.genericName;
            const hasPage = Boolean(member.slug);

            const content = (
              <CardBody className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-body-sm font-semibold text-foreground">{member.name}</p>
                    <p className="text-[0.65rem] text-muted-foreground">{member.relationship}</p>
                  </div>
                  {isCurrent && (
                    <Badge variant="brand" size="sm">Current</Badge>
                  )}
                  {hasPage && !isCurrent && (
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  )}
                </div>
                <p className="mt-2 text-xs text-foreground/80 leading-relaxed">
                  {member.distinguishing}
                </p>
              </CardBody>
            );

            if (hasPage && !isCurrent) {
              return (
                <Link key={member.name} href={`/drugs/${member.slug}`}>
                  <CardPrimitive
                    variant="flat"
                    interactive
                    showArrow={false}
                    className="h-full hover:border-brand/40"
                  >
                    {content}
                  </CardPrimitive>
                </Link>
              );
            }

            return (
              <CardPrimitive
                key={member.name}
                variant={isCurrent ? "featured" : "flat"}
                interactive={false}
                showArrow={false}
                className={cn("h-full", isCurrent && "ring-1 ring-brand/20")}
              >
                {content}
              </CardPrimitive>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
