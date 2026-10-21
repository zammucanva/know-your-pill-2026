"use client";

import { Globe } from "lucide-react";
import { REGION_OPTIONS, useRegion, type Region } from "@/lib/kyp/region";
import { cn } from "@/lib/utils";

/**
 * RegionPicker: choose the country whose emergency numbers are shown.
 *
 *   compact: small pill for the header / menus
 *   field:   full-width form field (sign-up)
 *
 * A native <select> keeps it keyboard and screen-reader friendly.
 */
interface RegionPickerProps {
  variant?: "compact" | "field";
  id?: string;
  className?: string;
}

export function RegionPicker({ variant = "compact", id, className }: RegionPickerProps) {
  const { region, setRegion } = useRegion();

  return (
    <div
      className={cn(
        "relative flex items-center",
        variant === "field" ? "w-full" : "w-auto",
        className
      )}
    >
      <Globe
        className={cn(
          "pointer-events-none absolute text-muted-foreground",
          variant === "field" ? "left-3 h-4 w-4" : "left-2 h-3 w-3"
        )}
        aria-hidden
      />
      <select
        id={id}
        value={region}
        onChange={(e) => setRegion(e.target.value as Region)}
        aria-label="Country, used to show the right emergency numbers"
        className={cn(
          "cursor-pointer appearance-none border border-border/60 bg-background text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
          variant === "field"
            ? "h-11 w-full rounded-xl pl-9 pr-8 text-sm"
            : "h-8 rounded-full pl-6 pr-6 text-[11px] font-semibold hover:bg-accent/60"
        )}
      >
        {REGION_OPTIONS.map((r) => (
          <option key={r.id} value={r.id}>
            {r.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute text-muted-foreground",
          variant === "field" ? "right-3 text-xs" : "right-2 text-[9px]"
        )}
      >
        ▾
      </span>
    </div>
  );
}
