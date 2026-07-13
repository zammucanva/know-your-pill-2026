"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CardPrimitive — the shared visual chassis for every card on KYP.
 *
 * Cards across the site differ in *content*, but their borders, shadows,
 * hover behaviour, and corner radius must be identical. This component
 * encodes that contract.
 *
 * Variants:
 *   - flat      : plain border, no shadow (default)
 *   - elevated  : shadow-soft always on
 *   - featured  : brand-tinted border + decorative glow
 *   - outline   : transparent background, border only
 *
 * Optional `interactive` prop adds hover lift + arrow indicator
 * for cards that act as links.
 */
const cardVariants = cva(
  "group relative overflow-hidden rounded-2xl border bg-card transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
  {
    variants: {
      variant: {
        flat: "border-border/70",
        elevated: "border-border/70 shadow-[var(--shadow-soft)]",
        featured: "border-brand/30 shadow-[var(--shadow-glow)]",
        outline: "border-border bg-transparent",
      },
      interactive: {
        true: "hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-lift)] cursor-pointer",
        false: "",
      },
    },
    defaultVariants: { variant: "flat", interactive: false },
  }
);

export interface CardPrimitiveProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** When true, renders as <a> if href provided, with arrow indicator */
  href?: string;
  /** Show the ArrowUpRight indicator in top-right (only if interactive) */
  showArrow?: boolean;
}

export const CardPrimitive = React.forwardRef<HTMLDivElement, CardPrimitiveProps>(
  ({ variant, interactive, href, showArrow = true, className, children, ...props }, ref) => {
    const content = (
      <>
        {interactive && showArrow && (
          <ArrowUpRight
            className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
            aria-hidden
          />
        )}
        {children}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(cardVariants({ variant, interactive: true }), className)}
        >
          {content}
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, interactive }), className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);
CardPrimitive.displayName = "CardPrimitive";

/**
 * CardHeader — top region of a card with consistent padding.
 * CardBody / CardFooter follow the same pattern.
 */
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pb-0", className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("border-t border-border/60 p-5 pt-4", className)}
      {...props}
    />
  );
}
