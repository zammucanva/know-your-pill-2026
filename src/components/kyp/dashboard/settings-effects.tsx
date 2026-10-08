"use client";

import * as React from "react";

import { useDashboardSettings } from "@/lib/kyp/dashboard/settings-store";

/**
 * SettingsEffects — applies the accessibility-level dashboard settings
 * as attributes on <html>, where CSS can act on them globally:
 *
 *   data-font-scale        sm | md | lg       (root font size)
 *   data-reduced-motion    true | false      (animation guard)
 *   data-high-contrast     true | false      (stronger borders/text)
 *   data-focus-indicators  true | false      (thicker focus rings)
 *
 * Renders nothing. Mounted once in the root layout (inside ThemeProvider)
 * so the attributes persist across route changes. Waits for the store to
 * rehydrate before touching the DOM (defaults match the no-JS markup).
 */
export function SettingsEffects() {
  const fontScale = useDashboardSettings((s) => s.fontScale);
  const reducedMotion = useDashboardSettings((s) => s.reducedMotion);
  const highContrast = useDashboardSettings((s) => s.highContrast);
  const focusIndicators = useDashboardSettings((s) => s.focusIndicators);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-font-scale", fontScale);
    root.setAttribute("data-reduced-motion", String(reducedMotion));
    root.setAttribute("data-high-contrast", String(highContrast));
    root.setAttribute("data-focus-indicators", String(focusIndicators));
  }, [fontScale, reducedMotion, highContrast, focusIndicators]);

  return null;
}
