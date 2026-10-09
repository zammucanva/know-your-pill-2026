"use client";

import * as React from "react";
import { imgPath } from "@/lib/kyp/image-path";
import { STUDIO_HTML } from "@/components/synapse/studio-markup";
import "@/components/synapse/synapse-studio.css";

/**
 * SynapseStudio: mounts the Synapse Studio engine (plain scripts in
 * /public/synapse-studio/js) into this React tree. The scripts are loaded
 * once, in order, the first time the route is opened (never on other KYP
 * pages); every visit mounts a fresh instance and tears it down on leave
 * (animation loop, document listeners, fullscreen state).
 *
 * Theme: the studio's colours are mapped to the site's design tokens in
 * synapse-studio.css, so it follows the global light/dark theme.
 */
const SCRIPTS = [
  "util.js",
  "gfx.js",
  "brain-geometry.js",
  "data-brain.js",
  "data-drugs.js",
  "data-drugs-extra.js",
  "data-drugs-types.js",
  "data-drugs-more.js",
  "data-links.js",
  "synapse-scene.js",
  "brain-scene.js",
  "extras.js",
  "app.js",
];

type StudioWindow = Window & {
  KYP_ASSET_BASE?: string;
  KYP_SITE_BASE?: string;
  KYPStudioMount?: (root: HTMLElement) => () => void;
  __kypStudioScripts?: Promise<void>;
};

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error("Failed to load " + src));
    document.head.appendChild(el);
  });
}

function loadStudioScripts(): Promise<void> {
  const w = window as StudioWindow;
  if (!w.__kypStudioScripts) {
    w.KYP_ASSET_BASE = imgPath("/synapse-studio/");
    w.KYP_SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH || ""; // for the studio's links to other KYP pages
    w.__kypStudioScripts = SCRIPTS.reduce<Promise<void>>(
      (p, f) => p.then(() => loadScript(imgPath("/synapse-studio/js/" + f))),
      Promise.resolve()
    ).catch((e) => {
      w.__kypStudioScripts = undefined; // allow a retry on the next visit
      throw e;
    });
  }
  return w.__kypStudioScripts;
}

export function SynapseStudio() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [attempt, setAttempt] = React.useState(0);

  React.useEffect(() => {
    let destroy: (() => void) | undefined;
    let cancelled = false;
    loadStudioScripts()
      .then(() => {
        const w = window as StudioWindow;
        if (cancelled || !rootRef.current || !w.KYPStudioMount) return;
        destroy = w.KYPStudioMount(rootRef.current);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message);
      });
    return () => {
      cancelled = true;
      if (destroy) destroy();
    };
  }, [attempt]);

  if (error) {
    return (
      <div role="alert" className="rounded-xl border border-border bg-card p-6 text-sm">
        <p className="font-medium text-foreground">The Synapse Studio could not be loaded.</p>
        <p className="mt-1 text-muted-foreground">{error}</p>
        <button
          type="button"
          className="mt-4 inline-flex min-h-[44px] items-center rounded-md bg-brand px-4 text-sm font-semibold text-primary-foreground"
          onClick={() => {
            setError(null);
            setAttempt((n) => n + 1);
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="syn-studio"
      // static, authored markup (see studio-markup.ts); the engine wires it up after mount
      dangerouslySetInnerHTML={{ __html: STUDIO_HTML }}
    />
  );
}
