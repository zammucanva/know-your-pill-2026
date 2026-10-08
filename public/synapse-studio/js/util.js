/* KYP Synapse Studio — small shared helpers (classic script, no build step). */
(function (global) {
  "use strict";

  const SVGNS = "http://www.w3.org/2000/svg";

  /** Create an SVG element with attributes. */
  function el(tag, attrs, parent) {
    const node = document.createElementNS(SVGNS, tag);
    if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
  /** 0 before a, 1 after b, smooth in between. */
  function ramp(t, a, b) { return smooth((t - a) / (b - a)); }

  /** Deterministic hash -> [0,1). Used so animation is a pure function of time. */
  function hash(a, b, c, d) {
    let h = 2166136261 >>> 0;
    const xs = [a | 0, b | 0, c | 0, d | 0];
    for (let i = 0; i < 4; i++) {
      h ^= xs[i] + 0x9e3779b9 + ((h << 6) >>> 0) + (h >>> 2);
      h = Math.imul(h, 16777619) >>> 0;
      h ^= h >>> 13;
    }
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    h = Math.imul(h ^ (h >>> 13), 3266489909) >>> 0;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(hexA, hexB, t) {
    const a = hexToRgb(hexA), b = hexToRgb(hexB);
    const c = a.map((v, i) => Math.round(lerp(v, b[i], t)));
    return "rgb(" + c.join(",") + ")";
  }

  /** Point on a cubic bezier. */
  function bez(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return {
      x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
      y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
    };
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  global.KYPU = { SVGNS, el, clamp, lerp, smooth, ramp, hash, mix, hexToRgb, bez, esc };
})(window);
