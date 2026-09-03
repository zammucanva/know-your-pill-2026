"use client";

import * as React from "react";
import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/**
 * Thin wrapper over shadcn/ui Accordion with KYP styling.
 * Keeps a single visual definition for collapsible Q&A / sections.
 */

export interface AccordionItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps extends React.ComponentProps<typeof AccordionPrimitive> {
  items: AccordionItem[];
}

export function Accordion({ items, className, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive className={cn("w-full", className)} {...props}>
      {items.map((item) => (
        <AccordionItemPrimitive
          key={item.id}
          value={item.id}
          className="border-b border-border/70 last:border-b-0"
        >
          <AccordionTriggerPrimitive className="py-5 text-left font-sans text-lg font-semibold hover:no-underline hover:text-brand">
            {item.question}
          </AccordionTriggerPrimitive>
          <AccordionContentPrimitive className="pb-5 text-muted-foreground leading-relaxed">
            {item.answer}
          </AccordionContentPrimitive>
        </AccordionItemPrimitive>
      ))}
    </AccordionPrimitive>
  );
}
