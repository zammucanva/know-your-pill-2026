"use client";

import * as React from "react";

/**
 * useMagnetic — subtle cursor attraction for premium interactive elements.
 *
 * Returns a ref and handlers to attach to any element.
 * The element shifts 2-6px toward the cursor on hover.
 *
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function useMagnetic(strength: number = 0.3) {
  const ref = React.useRef<HTMLElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const reduceMotion = React.useRef(false);

  React.useEffect(() => {
    if (reduceMotion.current === false) {
      reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion.current || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      const maxOffset = 6;
      setOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
      });
    },
    [strength]
  );

  const handleMouseEnter = React.useCallback(() => {
    if (reduceMotion.current) return;
    setIsHovering(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    offset,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
