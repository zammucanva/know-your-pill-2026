"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardPrimitive, CardBody, CardFooter } from "@/components/kyp/ui/card-primitive";
import { drugClasses } from "@/lib/kyp/data";
import type { Substance } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

interface ClinicalCardProps {
  substance: Substance;
  index?: number;
  className?: string;
}

export function ClinicalCard({ substance, index = 0, className }: ClinicalCardProps) {
  const drugClass = drugClasses[substance.drugClass];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive href={substance.href} variant="flat" interactive className={cn("h-full overflow-hidden border-l-4", drugClass.accentClass)}>
        {/* Image area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
          {substance.artwork ? (
            <Image
              src={substance.artwork}
              alt={substance.artworkAlt ?? `${substance.name} molecule artwork`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br from-muted/40 to-muted/10")}>
              <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 bg-background/60", drugClass.accentClass)}>
                <span className="h-3 w-3 rounded-full bg-current" />
              </span>
            </div>
          )}
          {/* Neurotransmitter overlay — slides in on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 to-transparent px-4 pb-3 pt-8 transition-transform duration-300 ease-out group-hover:translate-y-0">
            <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Neurotransmitter</p>
            <p className={cn("text-xs font-semibold", drugClass.accentClass)}>
              {substance.neurotransmitter}
            </p>
          </div>
        </div>

        {/* Content */}
        <CardBody className="flex h-full flex-col">
          <div className="mt-4">
            <p className="text-overline text-muted-foreground">{drugClass.name}</p>
            <h3 className="mt-1 font-sans text-h3 leading-tight">{substance.name}</h3>
          </div>

          <p className="mt-2 flex-1 text-body-sm text-muted-foreground leading-relaxed line-clamp-3">
            {substance.description}
          </p>
        </CardBody>

        <CardFooter className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              Neurotransmitter
            </p>
            <p className={cn("mt-0.5 truncate text-xs font-medium", drugClass.accentClass)}>
              {substance.neurotransmitter}
            </p>
          </div>
        </CardFooter>
      </CardPrimitive>
    </motion.div>
  );
}
