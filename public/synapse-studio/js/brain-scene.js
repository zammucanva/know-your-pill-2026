/* KYP Synapse Studio — 2D labelled brain overview (schematic sagittal brain).
 * Stateless animation: regions glow / dim and projection pathways carry pulses
 * according to the drug's effect (up / down / modulated). Clicking a region zooms
 * into the synapse view for that region. */
(function (global) {
  "use strict";
  const { el, clamp, lerp, smooth, ramp, hash, bez } = global.KYPU;
  const C = global.KYP_CORE;

  const LOOP = 40;
  const COL = { up: "#e08a2e", down: "#6f95e0", mixed: "#9193ff" };
  const ARROW = { up: "↑ more signalling", down: "↓ less signalling", mixed: "⇄ modulated" };
  const PHASES = [
    { id: "baseline", t0: 0, t1: 10, name: "1 · Normal activity" },
    { id: "arrive", t0: 10, t1: 18, name: "2 · Drug reaches the brain" },
    { id: "effect", t0: 18, t1: LOOP, name: "3 · Effect on brain circuits" },
  ];

  function wrap(name) {
    if (name.length <= 22) return [name];
    const i = name.indexOf(" (");
    if (i > 0) return [name.slice(0, i), name.slice(i + 1)];
    const j = name.lastIndexOf(" ", 22);
    return j > 0 ? [name.slice(0, j), name.slice(j + 1)] : [name];
  }

  class BrainScene {
    constructor(svg, onRegion) {
      this.svg = svg;
      this.onRegion = onRegion || function () {};
      svg.setAttribute("viewBox", BrainScene.VB.x + " " + BrainScene.VB.y + " " + BrainScene.VB.w + " " + BrainScene.VB.h);
      this.drug = null;
      this.showAll = false;
    }

    setDrug(drug) { this.drug = drug; this.build(); }
    setShowAll(v) { this.showAll = v; if (this.drug) this.build(); }

    build() {
      const svg = this.svg, d = this.drug;
      svg.innerHTML = "";
      const defs = el("defs", null, svg);
      const bg = el("radialGradient", { id: "bbg", cx: "50%", cy: "45%", r: "70%" }, defs);
      el("stop", { offset: "0%", "stop-color": "#10213a" }, bg);
      el("stop", { offset: "100%", "stop-color": "#070d19" }, bg);
      const glow = el("filter", { id: "bglow", x: "-80%", y: "-80%", width: "260%", height: "260%" }, defs);
      el("feGaussianBlur", { stdDeviation: "5" }, glow);
      const glow2 = el("filter", { id: "bglow2", x: "-80%", y: "-80%", width: "260%", height: "260%" }, defs);
      el("feGaussianBlur", { stdDeviation: "2.6" }, glow2);
      el("rect", { x: BrainScene.VB.x, y: BrainScene.VB.y, width: BrainScene.VB.w, height: BrainScene.VB.h, fill: "url(#bbg)" }, svg);

      // real mid-sagittal brain section (Z-Anatomy, CC BY-SA 4.0)
      const img = el("image", { x: 0, y: 0, width: 800, height: 560, preserveAspectRatio: "xMidYMid meet", style: "filter: drop-shadow(0 8px 24px rgba(0,0,0,.6))" }, svg);
      img.setAttribute("href", (global.KYP_ASSET_BASE || "") + "assets/brain_sagittal.png");

      // affected map
      const reg = {};
      d.regions.forEach((r) => (reg[r.id] = r));
      const pth = {};
      d.pathways.forEach((p) => (pth[p.id] = p));
      this.reg = reg; this.pth = pth;

      // pathways
      this.gPaths = el("g", null, svg);
      this.pathList = [];
      Object.keys(C.PATHWAYS).forEach((id) => {
        const P = C.PATHWAYS[id], aff = pth[id];
        if (!aff && !this.showAll) return;
        const color = C.SPECIES[P.species].color;
        const g = el("g", null, this.gPaths);
        P.curves.forEach((cv) => {
          const dd = "M " + cv[0].x + " " + cv[0].y + " C " + cv[1].x + " " + cv[1].y + " " + cv[2].x + " " + cv[2].y + " " + cv[3].x + " " + cv[3].y;
          el("path", { d: dd, fill: "none", stroke: color, "stroke-width": aff ? 2.6 : 1.4, opacity: aff ? 0.5 : 0.18, "stroke-linecap": "round" }, g);
        });
        this.pathList.push({ id, P, aff, color, g, pulses: [] });
      });
      this.gPulse = el("g", null, svg);

      // regions
      this.gReg = el("g", null, svg);
      this.regEls = {};
      Object.keys(C.REGIONS).forEach((id) => {
        const R = C.REGIONS[id], aff = reg[id];
        if (!aff && !this.showAll) {
          // faint outline for context
          el("ellipse", { cx: R.cx, cy: R.cy, rx: R.rx, ry: R.ry, transform: "rotate(" + R.rot + " " + R.cx + " " + R.cy + ")", fill: "none", stroke: "#ffffff", "stroke-width": 1, opacity: 0.25, "stroke-dasharray": "3 3" }, this.gReg);
          return;
        }
        const col = aff ? COL[aff.effect] : "#7e92b4";
        const g = el("g", { class: "region", "data-id": id, style: "cursor:pointer" }, this.gReg);
        const halo = el("ellipse", { cx: R.cx, cy: R.cy, rx: R.rx * 1.12, ry: R.ry * 1.12, transform: "rotate(" + R.rot + " " + R.cx + " " + R.cy + ")", fill: col, opacity: 0, filter: "url(#bglow)" }, g);
        const body = el("ellipse", { cx: R.cx, cy: R.cy, rx: R.rx, ry: R.ry, transform: "rotate(" + R.rot + " " + R.cx + " " + R.cy + ")", fill: col, "fill-opacity": 0.25, stroke: col, "stroke-width": 2 }, g);
        g.addEventListener("click", () => this.onRegion(id));
        g.addEventListener("mouseenter", () => body.setAttribute("fill-opacity", 0.55));
        g.addEventListener("mouseleave", () => body.setAttribute("fill-opacity", 0.25));
        this.regEls[id] = { g, halo, body, col, aff };
      });

      this.buildLabels();
    }

    buildLabels() {
      const svg = this.svg, d = this.drug;
      const g = (this.gLabels = el("g", { class: "labels" }, svg));
      const items = Object.keys(this.regEls).map((id) => ({ id, R: C.REGIONS[id], aff: this.reg[id] }));
      const left = items.filter((i) => i.R.cx <= 400).sort((a, b) => a.R.cy - b.R.cy);
      const right = items.filter((i) => i.R.cx > 400).sort((a, b) => a.R.cy - b.R.cy);
      const place = (list, side) => {
        let last = -999;
        list.forEach((it) => {
          const y = Math.max(it.R.cy, last + 40);
          last = y;
          const x = side === "L" ? 62 : 748;
          const ex = side === "L" ? it.R.cx - it.R.rx * 0.85 : it.R.cx + it.R.rx * 0.85;
          el("path", { d: "M " + ex + " " + it.R.cy + " L " + (side === "L" ? 86 : 724) + " " + y + " L " + (side === "L" ? 70 : 740) + " " + y, fill: "none", class: "lead" }, g);
          const col = it.aff ? COL[it.aff.effect] : "#9fb4d9";
          const lines = wrap(it.R.name);
          const t = el("text", { x, y: y - 2 - (lines.length - 1) * 8, "text-anchor": side === "L" ? "end" : "start", class: "lbl lbl-region", fill: "#e8f1ff" }, g);
          lines.forEach((ln, q) => { const ts = el("tspan", { x, dy: q ? 15 : 0 }, t); ts.textContent = ln; });
          if (it.aff) {
            const a = el("text", { x, y: y + 13 + (lines.length - 1) * 8, "text-anchor": side === "L" ? "end" : "start", class: "lbl-mini", fill: col }, g);
            a.textContent = ARROW[it.aff.effect];
          }
        });
      };
      place(left, "L");
      place(right, "R");
      // anatomical landmarks of the section (graphics setting: anatomy labels)
      if (global.KYP_GFX && global.KYP_GFX.get().anatomy) {
        BrainScene.LANDMARKS.forEach((m) => {
          const grp = el("g", { class: "anat" + (m[6] ? "" : " anat-extra") }, g);
          if (Math.abs(m[3] - m[1]) > 12 || Math.abs(m[4] - m[2]) > 12) el("path", { d: "M " + m[1] + " " + m[2] + " L " + (m[3] + (m[5] === "end" ? 3 : -3)) + " " + (m[4] - 3), class: "lead" }, grp);
          el("circle", { cx: m[1], cy: m[2], r: 2.3, fill: "#f3e9c9", stroke: "#070d19", "stroke-width": 1 }, grp);
          const t = el("text", { x: m[3], y: m[4], "text-anchor": m[5], class: "lbl-anat" }, grp);
          t.textContent = m[0];
        });
      }
      // pathway names near their curves
      this.pathList.forEach((p) => {
        if (!p.aff) return;
        const cv = p.P.curves[0], m = bez(cv[0], cv[1], cv[2], cv[3], 0.5);
        const label = p.P.name + (p.aff.effect === "up" ? " ↑" : p.aff.effect === "down" ? " ↓" : " ⇄");
        const w = label.length * 5.5 + 12;
        el("rect", { x: m.x - w / 2, y: m.y - 20, width: w, height: 16, rx: 8, fill: "#070d19", "fill-opacity": 0.78, stroke: p.color, "stroke-opacity": 0.5, "stroke-width": 0.8 }, g);
        const t = el("text", { x: m.x, y: m.y - 8, "text-anchor": "middle", class: "lbl-path", fill: p.color }, g);
        t.textContent = label;
      });
    }

    render(t) {
      t = ((t % LOOP) + LOOP) % LOOP;
      const e = ramp(t, 12, 22);
      // region glow
      Object.keys(this.regEls).forEach((id) => {
        const r = this.regEls[id];
        if (!r.aff) return;
        const pulse = 0.5 + 0.5 * Math.sin(t * 2.2 + hash(id.length, id.charCodeAt(0), 1, 1) * 6);
        const base = 0.0;
        let a = base;
        if (r.aff.effect === "up") a = e * (0.28 + 0.24 * pulse);
        else if (r.aff.effect === "down") a = e * 0.18;
        else a = e * (0.2 + 0.18 * Math.sin(t * 1.4 + 1));
        r.halo.setAttribute("opacity", a);
        const fo = r.aff.effect === "down" ? lerp(0.25, 0.1, e) : lerp(0.25, 0.42, e);
        r.body.setAttribute("fill-opacity", fo);
        r.body.setAttribute("stroke-width", r.aff.effect === "down" ? lerp(2, 1.2, e) : lerp(2, 3.2, e * pulse + 0.2));
      });
      // pulses along pathways
      this.gPulse.innerHTML = "";
      this.pathList.forEach((p) => {
        const eff = p.aff ? p.aff.effect : null;
        let n = 2, size = 3.6, alpha = 0.85, speed = 0.16;
        if (p.aff) {
          if (eff === "up") { n = Math.round(lerp(2, 5, e)); size = lerp(3.6, 5.2, e); alpha = 0.95; speed = lerp(0.16, 0.26, e); }
          else if (eff === "down") { n = Math.max(1, Math.round(lerp(2, 1, e))); size = lerp(3.6, 2.6, e); alpha = lerp(0.85, 0.35, e); speed = lerp(0.16, 0.1, e); }
          else { n = 3; size = 4; alpha = 0.7 + 0.25 * Math.sin(t * 2); speed = 0.17; }
        } else { alpha = 0.3; size = 2.6; }
        p.P.curves.forEach((cv, ci) => {
          const PF = global.KYP_GFX ? global.KYP_GFX.pulseFactor() : 1;
          const nn = Math.max(1, Math.round(n * PF));
          for (let q = 0; q < nn; q++) {
            const f = (((t * speed + q / nn + hash(ci, q, p.id.length, 3) * 0.3) % 1) + 1) % 1;
            const pt = bez(cv[0], cv[1], cv[2], cv[3], f);
            const fade = Math.min(1, f * 6, (1 - f) * 6);
            el("circle", { cx: pt.x, cy: pt.y, r: size * 1.9, fill: p.color, opacity: alpha * 0.35 * fade, filter: "url(#bglow2)" }, this.gPulse);
            el("circle", { cx: pt.x, cy: pt.y, r: size, fill: p.color, opacity: alpha * fade }, this.gPulse);
          }
        });
      });
    }

    phaseAt(t) {
      t = ((t % LOOP) + LOOP) % LOOP;
      return PHASES.find((p) => t >= p.t0 && t < p.t1) || PHASES[PHASES.length - 1];
    }

    caption(phaseId) {
      const d = this.drug;
      const aff = d.regions.filter((r) => r.effect !== "mixed" || r.note).slice(0, 3).map((r) => C.REGIONS[r.id].name);
      if (phaseId === "baseline") return "Normal activity: neurotransmitter pathways carry signals between brain regions. Click a highlighted region to zoom into its synapse.";
      if (phaseId === "arrive") return d.name + " reaches the brain through the bloodstream (it must cross the blood–brain barrier) and begins to act at its target.";
      const first = d.regions.filter((r) => r.note).slice(0, 2).map((r) => C.REGIONS[r.id].name + (r.note ? ", " + r.note.charAt(0).toLowerCase() + r.note.slice(1) : "")).join("; ");
      return "Effect on circuits: " + (first || "signalling in the highlighted regions changes") + ".";
    }

    legend() {
      return [
        { color: COL.up, text: "More signalling" },
        { color: COL.down, text: "Less signalling" },
        { color: COL.mixed, text: "Modulated / mixed" },
      ];
    }
  }

  BrainScene.LANDMARKS = [
    // name, dot x, dot y, label x, label y, anchor, core (always shown) / extra (shown on hover)
    ["Corpus callosum", 388, 217, 395, 214, "start", true],
    ["Precentral gyrus", 384, 113, 352, 24, "end", true],
    ["Postcentral gyrus", 450, 109, 482, 24, "start", true],
    ["Pons", 403, 380, 397, 383, "end", true],
    ["Fourth ventricle", 455, 405, 449, 420, "end", true],
    ["Culmen (cerebellar vermis)", 502, 333, 509, 336, "start", true],
    ["Cingulate gyrus", 504, 256, 511, 259, "start", false],
    ["Lingual gyrus", 596, 309, 603, 312, "start", false],
    ["Gyrus rectus", 208, 276, 201, 279, "end", false],
  ];
  BrainScene.VB = { x: -90, y: 0, w: 1000, h: 560 };
  global.BrainScene = BrainScene;
  global.BRAIN_PHASES = PHASES;
})(window);
