"use client";

import * as React from "react";

/**
 * SkipToContentLink — the first focusable element on every page.
 *
 * Keyboard and screen-reader users would otherwise start their tab
 * journey inside the fixed navbar on every page. This link, visible
 * only when focused, jumps straight to the page's <main> landmark —
 * every KYP page renders exactly one <main>.
 *
 * Focus (not just scroll) is moved, so screen readers announce the
 * main content region; the temporary tabIndex is cleaned up on blur.
 */
export function SkipToContentLink() {
  const skip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.querySelector("main");
    if (!main) return;
    main.setAttribute("tabindex", "-1");
    main.focus({ preventScroll: false });
    const cleanup = () => {
      main.removeAttribute("tabindex");
      main.removeEventListener("blur", cleanup);
    };
    main.addEventListener("blur", cleanup);
  };

  return (
    <a
      href="#main-content"
      onClick={skip}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand/40"
    >
      Skip to main content
    </a>
  );
}
