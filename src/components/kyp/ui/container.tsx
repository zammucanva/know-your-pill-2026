import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — the canonical content wrapper.
 * Use everywhere a section needs consistent horizontal padding + max width.
 *
 * Widths:
 *   - default : 80rem (1280px) — standard page content
 *   - narrow  : 48rem (768px)  — long-form reading, FAQ
 *   - wide    : 96rem (1536px) — full-bleed gallery / dashboard
 */
type ContainerWidth = "narrow" | "default" | "wide";

const widthClass: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[96rem]",
};

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  as?: React.ElementType;
}

export function Container({
  width = "default",
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthClass[width], className)}
      {...props}
    />
  );
}
