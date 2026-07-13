import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, AlertTriangle, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Callout — inline alert-style box for highlighting important info.
 *
 * Variants:
 *   - info     : brand teal — neutral important info
 *   - warning  : amber — caution
 *   - danger   : emergency coral — high alert (non-emergency)
 *   - success  : green — positive confirmation
 *   - tip      : neural violet — helpful hint / clinical pearl
 *
 * Use <EmergencyAlert /> for actual crisis contact info — not this.
 */
const calloutVariants = cva(
  "relative flex gap-3 rounded-xl border p-4 text-sm",
  {
    variants: {
      variant: {
        info: "border-brand/25 bg-brand-soft/40 text-foreground",
        warning: "border-warning/30 bg-warning-soft/50 text-foreground",
        danger: "border-emergency/30 bg-emergency-soft/50 text-foreground",
        success: "border-success/30 bg-success-soft/50 text-foreground",
        tip: "border-neural/25 bg-neural-soft/40 text-foreground",
      },
    },
    defaultVariants: { variant: "info" },
  }
);

const calloutIcon = {
  info: Info,
  warning: AlertTriangle,
  danger: AlertCircle,
  success: CheckCircle2,
  tip: Lightbulb,
};

const calloutIconColor = {
  info: "text-brand",
  warning: "text-warning",
  danger: "text-emergency",
  success: "text-success",
  tip: "text-neural",
};

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  title?: string;
  icon?: boolean;
}

export function Callout({
  variant = "info",
  title,
  icon = true,
  className,
  children,
  ...props
}: CalloutProps) {
  const Icon = calloutIcon[variant!];
  const iconColor = calloutIconColor[variant!];

  return (
    <div className={cn(calloutVariants({ variant }), className)} {...props}>
      {icon && (
        <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", iconColor)} strokeWidth={2} aria-hidden />
      )}
      <div className="min-w-0 flex-1">
        {title && <p className="font-semibold">{title}</p>}
        <div className={cn(title && "mt-1", "text-muted-foreground leading-relaxed")}>
          {children}
        </div>
      </div>
    </div>
  );
}
