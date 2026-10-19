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
      this.vb = { x: BrainScene.VB.x, y: BrainScene.VB.y, w: BrainScene.VB.w, h: BrainScene.VB.h };
      svg.setAttribute("viewBox", this.vb.x + " " + this.vb.y + " " + this.vb.w + " " + this.vb.h);
      this.drug = null;
      this.showAll = false;
    }

    /* Match the drawing's shape to the stage (e.g. full screen on a wide monitor) so the
     * label cards use the whole width instead of leaving empty side margins. */
    setAspect(a) {
      if (!(a > 0.2)) return;
      const w = Math.max(BrainScene.VB.w, Math.round(BrainScene.VB.h * a));
      if (w === this.vb.w) return;
      this.vb = { x: Math.round(BrainScene.VB.x + BrainScene.VB.w / 2 - w / 2), y: BrainScene.VB.y, w: w, h: BrainScene.VB.h };
      this.svg.setAttribute("viewBox", this.vb.x + " " + this.vb.y + " " + this.vb.w + " " + this.vb.h);
      if (this.drug) this.build();
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
      el("rect", { x: this.vb.x, y: this.vb.y, width: this.vb.w, height: this.vb.h, fill: "url(#bbg)" }, svg);

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
      // marker positions: nudged apart so the rings never sit on top of each other
      // (the hover extent stays at the true region centre; the markers are approximate anyway)
      const P = {};
      const shown = Object.keys(C.REGIONS).filter((id) => reg[id] || this.showAll);
      shown.forEach((id) => { P[id] = { x: C.REGIONS[id].cx, y: C.REGIONS[id].cy, ox: C.REGIONS[id].cx, oy: C.REGIONS[id].cy }; });
      const MIN_GAP = 25, MAX_MOVE = 40;
      for (let pass = 0; pass < 80; pass++) {
        let moved = false;
        for (let i = 0; i < shown.length; i++) {
          for (let j = i + 1; j < shown.length; j++) {
            const a = P[shown[i]], b = P[shown[j]];
            let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
            if (d >= MIN_GAP) continue;
            if (d < 0.01) { dx = 1; dy = 0; d = 1; }
            const push = (MIN_GAP - d) / 2 + 0.01, ux = dx / d, uy = dy / d;
            a.x -= ux * push; a.y -= uy * push; b.x += ux * push; b.y += uy * push; moved = true;
          }
        }
        shown.forEach((id) => {
          const q = P[id], dx = q.x - q.ox, dy = q.y - q.oy, d = Math.hypot(dx, dy);
          if (d > MAX_MOVE) { q.x = q.ox + (dx / d) * MAX_MOVE; q.y = q.oy + (dy / d) * MAX_MOVE; }
        });
        if (!moved) break;
      }
      this.mpos = P;

      Object.keys(C.REGIONS).forEach((id) => {
        const R = C.REGIONS[id], aff = reg[id];
        if (!aff && !this.showAll) {
          // unaffected regions: a faint context dot only (no outlines floating over the brain)
          el("circle", { cx: R.cx, cy: R.cy, r: 2.6, fill: "#ffffff", opacity: 0.28 }, this.gReg);
          return;
        }
        const col = aff ? COL[aff.effect] : "#7e92b4";
        const g = el("g", { class: "region", "data-id": id, style: "cursor:pointer" }, this.gReg);
        el("title", null, g).textContent = R.name;
        // approximate extent of the region: hidden until you hover the marker or its label card
        el("ellipse", { class: "area", cx: R.cx, cy: R.cy, rx: R.rx, ry: R.ry, transform: "rotate(" + R.rot + " " + R.cx + " " + R.cy + ")", fill: col, "fill-opacity": 0, stroke: col, "stroke-opacity": 0, "stroke-width": 1.6, "stroke-dasharray": "5 4" }, g);
        // one uniform marker per region: soft halo + ring + centre dot
        const mp = P[id];
        const halo = el("circle", { cx: mp.x, cy: mp.y, r: 19, fill: col, opacity: 0, filter: "url(#bglow)" }, g);
        const body = el("circle", { cx: mp.x, cy: mp.y, r: 10.5, fill: "#070d19", "fill-opacity": 0.55, stroke: col, "stroke-width": 2.2 }, g);
        el("circle", { cx: mp.x, cy: mp.y, r: 4, fill: col }, g);
        el("circle", { cx: mp.x, cy: mp.y, r: 12.5, fill: "transparent" }, g); // hit area (not larger than the marker spacing)
        g.addEventListener("click", () => this.onRegion(id));
        this.regEls[id] = { g, halo, body, col, aff };
      });

      this.buildLabels();
    }

    buildLabels() {
      const svg = this.svg, VB = this.vb;
      const g = (this.gLabels = el("g", { class: "labels" }, svg));
      const large = !!(global.KYP_GFX && global.KYP_GFX.get().labelSize === "large");
      const BW = large ? 206 : 176;            // card width
      const occ = [];                           // occupied rectangles (collision avoidance)
      const hit = (r) => occ.some((o) => r.x < o.x + o.w + 3 && r.x + r.w + 3 > o.x && r.y < o.y + o.h + 3 && r.y + r.h + 3 > o.y);
      const free = (x, y, w, h) => {            // nearest free slot by moving vertically
        const tries = [0, -18, 18, -36, 36, -54, 54, -72, 72];
        for (let k = 0; k < tries.length; k++) {
          const r = { x: x, y: Math.min(Math.max(y + tries[k], VB.y + 4), VB.y + VB.h - h - 4), w: w, h: h };
          if (!hit(r)) { occ.push(r); return r; }
        }
        const r0 = { x: x, y: y, w: w, h: h }; occ.push(r0); return r0;
      };

      /* ---- region cards: two tidy columns that always fit inside the frame */
      const items = Object.keys(this.regEls).map((id) => ({ id: id, R: C.REGIONS[id], aff: this.reg[id] }));
      const MP = this.mpos;
      const byCy = (p, q) => MP[p.id].y - MP[q.id].y;
      const left = items.filter((i) => MP[i.id].x <= 400).sort(byCy), right = items.filter((i) => MP[i.id].x > 400).sort(byCy);
      while (left.length - right.length > 2) { left.sort((p, q) => MP[q.id].x - MP[p.id].x); right.push(left.shift()); right.sort(byCy); left.sort(byCy); }
      while (right.length - left.length > 2) { right.sort((p, q) => MP[p.id].x - MP[q.id].x); left.push(right.shift()); right.sort(byCy); left.sort(byCy); }

      const chars = large ? 22 : 26;
      const wrapC = (name) => {
        if (name.length <= chars) return [name];
        const i = name.indexOf(" (");
        if (i > 0 && i <= chars) return [name.slice(0, i), name.slice(i + 1)];
        const j = name.lastIndexOf(" ", chars);
        return j > 0 ? [name.slice(0, j), name.slice(j + 1)] : [name];
      };
      const lh = large ? 17 : 14.5;
      const place = (list, side) => {
        const n = list.length;
        if (!n) return;
        const compact = n > 9;
        const cards = list.map((it) => {
          const lines = wrapC(it.R.name);
          const sub = it.aff ? ARROW[it.aff.effect] : "";
          const h = compact ? 14 + lines.length * lh + 4 : 12 + lines.length * lh + (sub ? lh : 0) + 6;
          return { it: it, lines: lines, sub: sub, h: h };
        });
        const top = VB.y + 10, bottom = VB.y + VB.h - 10 - (side === "L" ? 84 : 46); // keep clear of the legend (left) and the zoom button (right)
        const sumH = cards.reduce((t, c) => t + c.h, 0);
        let gap = 7;
        if (sumH + gap * (n - 1) > bottom - top) gap = Math.max(3, (bottom - top - sumH) / Math.max(1, n - 1));
        const ys = cards.map((c) => Math.min(Math.max(MP[c.it.id].y - c.h / 2, top), bottom - c.h));
        for (let i = 1; i < n; i++) ys[i] = Math.max(ys[i], ys[i - 1] + cards[i - 1].h + gap);
        const over = ys[n - 1] + cards[n - 1].h - bottom;
        if (over > 0) { ys[n - 1] -= over; for (let i = n - 2; i >= 0; i--) ys[i] = Math.min(ys[i], ys[i + 1] - cards[i].h - gap); }
        if (ys[0] < top) { let yy = top; for (let i = 0; i < n; i++) { ys[i] = yy; yy += cards[i].h + gap; } }
        const x0 = side === "L" ? VB.x + 10 : VB.x + VB.w - 10 - BW;
        cards.forEach((c, i) => {
          const it = c.it, y = ys[i], col = it.aff ? COL[it.aff.effect] : "#7e92b4";
          occ.push({ x: x0, y: y, w: BW, h: c.h });
          const mk = MP[it.id], ex = side === "L" ? mk.x - 11 : mk.x + 11; // leader meets the marker ring
          const cx = side === "L" ? x0 + BW : x0, cy = y + c.h / 2, mx = (ex + cx) / 2;
          el("path", { d: "M " + ex + " " + mk.y + " C " + mx + " " + mk.y + ", " + mx + " " + cy + ", " + cx + " " + cy, fill: "none", class: "lead", stroke: col, "stroke-opacity": 0.55 }, g);
          const card = el("g", { class: "rcard", "data-id": it.id, style: "cursor:pointer" }, g);
          el("rect", { x: x0, y: y, width: BW, height: c.h, rx: 9, fill: "#0a1426", "fill-opacity": 0.9, stroke: col, "stroke-opacity": 0.8, "stroke-width": 1.3 }, card);
          el("rect", { x: x0, y: y + 5, width: 4, height: c.h - 10, rx: 2, fill: col }, card);
          const t = el("text", { x: x0 + 14, y: y + 6 + lh * 0.82, class: "lbl-card", fill: "#eaf3ff" }, card);
          c.lines.forEach((ln, q) => {
            const ts = el("tspan", { x: x0 + 14, dy: q ? lh : 0 }, t);
            ts.textContent = ln + (compact && q === c.lines.length - 1 && c.sub ? "  " + c.sub.charAt(0) : "");
          });
          if (!compact && c.sub) {
            const st = el("text", { x: x0 + 14, y: y + 6 + lh * c.lines.length + lh * 0.82, class: "lbl-cardsub", fill: col }, card);
            st.textContent = c.sub;
          }
          card.addEventListener("click", () => this.onRegion(it.id));
          const reg = this.regEls[it.id];
          card.addEventListener("mouseenter", () => { if (reg) reg.g.classList.add("hot"); });
          card.addEventListener("mouseleave", () => { if (reg) reg.g.classList.remove("hot"); });
        });
      };
      place(left, "L");
      place(right, "R");

      /* ---- anatomical landmarks of the section: small pills, nudged apart */
      if (global.KYP_GFX && global.KYP_GFX.get().anatomy) {
        BrainScene.LANDMARKS.forEach((m) => {
          const grp = el("g", { class: "anat" + (m[6] ? "" : " anat-extra") }, g);
          const w = m[0].length * 5.4 + 12, h = 16;
          const bx = m[5] === "end" ? m[3] - w + 3 : m[3] - 3;
          const r = free(bx, m[4] - 12, w, h);
          const ty = r.y + h / 2, ex = r.x > m[1] ? r.x : r.x + w;
          if (Math.abs(ex - m[1]) > 8 || Math.abs(ty - m[2]) > 8) el("path", { d: "M " + m[1] + " " + m[2] + " L " + ex + " " + ty, class: "lead" }, grp);
          el("rect", { x: r.x, y: r.y, width: w, height: h, rx: 8, fill: "#070d19", "fill-opacity": 0.8, stroke: "#c9b98a", "stroke-opacity": 0.55, "stroke-width": 0.8 }, grp);
          el("circle", { cx: m[1], cy: m[2], r: 2.6, fill: "#f3e9c9", stroke: "#070d19", "stroke-width": 1 }, grp);
          const t = el("text", { x: r.x + w / 2, y: r.y + h / 2 + 3.6, "text-anchor": "middle", class: "lbl-anat-pill" }, grp);
          t.textContent = m[0];
        });
      }

      /* ---- pathway names: pills placed on their curves, kept clear of everything else */
      this.pathList.forEach((p) => {
        if (!p.aff) return;
        const cv = p.P.curves[0], m = bez(cv[0], cv[1], cv[2], cv[3], 0.5);
        const label = p.P.name + (p.aff.effect === "up" ? " ↑" : p.aff.effect === "down" ? " ↓" : " ⇄");
        const w = label.length * 5.6 + 16, h = 18;
        const r = free(m.x - w / 2, m.y - 24, w, h);
        el("rect", { x: r.x, y: r.y, width: w, height: h, rx: 9, fill: "#070d19", "fill-opacity": 0.85, stroke: p.color, "stroke-opacity": 0.65, "stroke-width": 0.9 }, g);
        const t = el("text", { x: r.x + w / 2, y: r.y + h / 2 + 3.8, "text-anchor": "middle", class: "lbl-path-pill", fill: p.color }, g);
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
