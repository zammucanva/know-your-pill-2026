"use client";

import { assetManifest } from "@/lib/anatomy/asset-manifest";

/**
 * ModelStatusBadge — shows whether the placeholder or a real GLB is loaded.
 * Always visible in the header so the asset state is transparent.
 */
export function ModelStatusBadge() {
  const isPlaceholder = assetManifest.kind === "placeholder";
  return (
    <div
      className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs"
      title={assetManifest.statusLabel}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: isPlaceholder ? "var(--warning)" : "var(--success)" }}
        aria-hidden
      />
      <span className="text-[var(--muted-foreground)]">
        {isPlaceholder ? "Demo asset" : "BP3D atlas"}
      </span>
    </div>
  );
}
