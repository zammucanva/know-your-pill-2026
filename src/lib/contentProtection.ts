"use client";

import { useEffect } from "react";

/**
 * CONTENT PROTECTION — COSMETIC DETERRENT ONLY. READ THIS BEFORE RELYING ON IT.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  This module is a *deterrent*, not security. It is trivially bypassed:
 *       • every browser's dev tools (disable JS, delete the listener, edit CSS)
 *       • curl / wget on the static HTML
 *       • "Save page as…", reader modes, archive services, browser extensions
 *     It must NEVER be relied on as actual protection. Real protection is
 *     copyright law (see /legal/terms) plus server-side rate limiting if the
 *     site ever grows a server.
 *
 * ⚠️  Deliberately NOT attempted, because each is unreliable and hostile to
 *     users and assistive technology:
 *       • blocking keyboard shortcuts (Ctrl+U / Ctrl+S / Ctrl+P / F12)
 *       • blocking browser dev tools
 *       • `alert()` on copy / clearclipboard handlers
 *       • infinite `debugger` statements
 *     Accessibility of this medical-education site takes priority over the
 *     deterrent — screen readers and keyboard users must be unaffected.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * What it does:
 *   1. Suppresses the default context menu for right-clicks on *plain content*
 *      inside <main> only ("Save image as…", "View selection source").
 *   2. The companion CSS in globals.css sets `user-select: none` on body
 *      text, with explicit exclusions (code, inputs, quiz answers, links,
 *      .selectable) so copying still works where it matters.
 *
 * What it deliberately leaves alone (exclusion list below):
 *   • input, textarea, select, option, [contenteditable] — typing/copy-paste
 *   • form — whole form regions keep their native context menu
 *   • button, label — quiz answer options are <button>s, so the quiz widgets
 *     (inline MicroQuiz and /quiz) keep their native context menu untouched
 *   • a[href] — "Open in new tab" / "Copy link address" are legitimate
 *     navigation for keyboard and switch users
 *   • code, pre, kbd, samp — reference / code blocks stay selectable
 *   • .selectable — explicit opt-out class for any future interactive tool
 *
 * Keyboard users: context menus opened with the Menu key / Shift+F10 report
 * `event.detail === 0` and are ALWAYS allowed through, so keyboard-only and
 * screen-reader workflows (NVDA/JAWS/VoiceOver browse from the a11y tree,
 * not from selection) keep working.
 *
 * Mount once from the root layout — never per page.
 */

/**
 * Elements/regions that always keep the native context menu.
 * `closest()` walks ancestors, so anything *inside* a form, a .selectable
 * container, or any listed element is exempt automatically.
 */
const CONTEXT_MENU_ALLOWLIST =
  [
    "input",
    "textarea",
    "select",
    "option",
    "form",
    "button",
    "a[href]",
    "label",
    "summary",
    "[contenteditable='true']",
    "[contenteditable='']",
    "code",
    "pre",
    "kbd",
    "samp",
    ".selectable",
    "[data-context-menu-allowed]",
  ].join(", ");

/**
 * ContentProtection — renders nothing; attaches one document-level
 * `contextmenu` listener while mounted. Mounted from the root layout so
 * every current and future page gets it for free.
 */
export function ContentProtection() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      // Keyboard-invoked context menu (Menu key / Shift+F10): always allow.
      // Mouse right-clicks carry detail >= 1 in all evergreen browsers.
      // This keeps keyboard + assistive-tech users fully unaffected.
      if (event.detail === 0) return;

      const target = event.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;

      // Only the main content area — never header, nav, or footer chrome.
      if (!target.closest("main")) return;

      // Interactive elements, forms, quiz answers, code, opt-outs: allow.
      if (target.closest(CONTEXT_MENU_ALLOWLIST)) return;

      // Plain content inside <main>: suppress the default menu.
      event.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return null;
}

export default ContentProtection;
