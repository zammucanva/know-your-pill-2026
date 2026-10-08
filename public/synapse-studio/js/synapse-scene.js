/* KYP Synapse Studio — 2D synapse close-up.
 *
 * The whole animation is a PURE FUNCTION OF TIME (no accumulated state): scrubbing, looping
 * and speed changes are exact. Neurotransmitter release events are enumerated per vesicle per
 * cycle and resolved with deterministic hashes, using the drug's engagement at the moment of
 * release (so the effect of the drug appears gradually as it arrives and binds).
 */
(function (global) {
  "use strict";
  const { el, clamp, lerp, smooth, ramp, hash, esc } = global.KYPU;
  const C = global.KYP_CORE;
  const ACTIONS = global.KYP_ACTIONS;
  const TXT = global.KYP_TEXT;

  const W = 1000, H = 640, PRE_Y = 250, POST_Y = 360;
  const LOOP = 40, CYCLE = 3.4, FUSE = 0.45, LIFE = 11;
  const T_ARRIVE = 10;
  const DRUG = "#e0a03a";
  const PHASES = [
    { id: "baseline", t0: 0, t1: 10, name: "1 · Normal signalling" },
    { id: "arrive", t0: 10, t1: 14, name: "2 · Drug arrives" },
    { id: "bind", t0: 14, t1: 19, name: "3 · Drug binds its target" },
    { id: "effect", t0: 19, t1: LOOP, name: "4 · Effect on signalling" },
  ];

  function pathPoint(pts, u) {
    u = clamp(u, 0, 1);
    const seg = [0];
    for (let i = 1; i < pts.length; i++) seg.push(seg[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const target = seg[seg.length - 1] * u;
    for (let i = 1; i < pts.length; i++) {
      if (seg[i] >= target) {
        const f = (target - seg[i - 1]) / ((seg[i] - seg[i - 1]) || 1);
        return [lerp(pts[i - 1][0], pts[i][0], f), lerp(pts[i - 1][1], pts[i][1], f)];
      }
    }
    return pts[pts.length - 1].slice();
  }

  class SynapseScene {
    constructor(svg) {
      this.svg = svg;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      this.drug = null;
    }

    setDrug(drug, ctx) {
      this.drug = drug;
      this.ctx = ctx || {};
      this.build();
      this.computeRefs();
    }

    /* ------------------------------------------------------------------ build */
    build() {
      const d = this.drug, svg = this.svg;
      svg.innerHTML = "";
      this.species = Array.from(new Set(d.species));
      const Ns = this.species.length;

      // --- components -------------------------------------------------------
      this.vesicles = [];
      const vx = [260, 380, 500, 620, 740];
      vx.forEach((x, i) => this.vesicles.push({ i, x, y: 168 + 10 * Math.sin(i * 1.7), species: this.species[i % Ns], off: hash(i, 3, 5, 7) * CYCLE }));

      const postKeys = d.receptors.filter((k) => !(C.RECEPTORS[k] && C.RECEPTORS[k].loc === "pre"));
      const preKeys = d.receptors.filter((k) => C.RECEPTORS[k] && C.RECEPTORS[k].loc === "pre");
      this.species.forEach((s) => {
        if (!postKeys.some((k) => C.RECEPTORS[k] && C.RECEPTORS[k].species === s)) postKeys.push(C.DEFAULT_RECEPTOR[s]);
      });
      const postX = [250, 410, 590, 750];
      this.post = postX.map((x, k) => {
        const key = postKeys[k % postKeys.length];
        return Object.assign({ key, x, idx: k }, C.RECEPTORS[key]);
      });
      const preX = [440, 680];
      this.pre = preKeys.length ? preX.map((x, k) => Object.assign({ key: preKeys[k % preKeys.length], x, idx: k }, C.RECEPTORS[preKeys[k % preKeys.length]])) : [];

      const tspecies = this.species.filter((s) => C.SPECIES[s].clear.kind === "transporter");
      const slots = [170, 830, 215, 785].concat(!preKeys.length && this.species.length > 1 ? [440, 680] : []);
      this.transporters = [];
      if (tspecies.length) slots.forEach((x, k) => {
        const s = tspecies[k % tspecies.length];
        this.transporters.push(Object.assign({ x, species: s, idx: k }, C.SPECIES[s].clear));
      });
      this.cleftEnzymes = [];
      this.species.filter((s) => C.SPECIES[s].clear.kind === "enzyme").forEach((s, j) => {
        [340, 660].forEach((x, q) => this.cleftEnzymes.push(Object.assign({ x, y: 306, species: s, idx: j * 2 + q }, C.SPECIES[s].clear)));
      });
      this.vgcc = [{ x: 320 }, { x: 560 }];
      this.nav = [{ x: 470, y: 32 }, { x: 530, y: 32 }];
      this.kv = [{ x: 400, y: PRE_Y }, { x: 700, y: PRE_Y }];
      // second-messenger cascade nodes inside the spine (drawn only for intracellular modulators)
      this.casc = { plc: { x: 655, y: 432 }, IMPase: { x: 612, y: 468, key: "IMPase" }, GSK3B: { x: 812, y: 446, key: "GSK3B" } };
      this.mito = { x: 225, y: 122, label: C.ENZYMES.MAO.label };
      this.aadc = { x: 640, y: 118 };

      this.buildSites();
      this.buildStatic();
      this.buildDynamic();
      this.buildLabels();
    }

    /** Where the drug molecules go (one site per target component). */
    buildSites() {
      const d = this.drug;
      const act = new Set(d.actsOn);
      const sites = [];
      const act0 = d.action;
      if (act0 === "reuptake_inhibitor" || act0 === "releaser") {
        this.transporters.filter((t) => act.has(t.label)).forEach((t) => sites.push({ x: t.x, y: PRE_Y + 14, kind: "transporter", ref: t, inside: false }));
      } else if (["receptor_antagonist", "receptor_agonist", "partial_agonist", "channel_blocker", "pam"].includes(act0)) {
        const mk = (r, isPre) => {
          if (isPre) return { x: r.x, y: PRE_Y + 12, kind: "receptor", ref: r, inside: false };
          if (act0 === "channel_blocker") return { x: r.x, y: POST_Y - 16, kind: "receptor", ref: r, inside: false };
          if (act0 === "pam") return { x: r.x + 18, y: POST_Y - 14, kind: "receptor", ref: r, inside: false };
          return { x: r.x, y: POST_Y - 10, kind: "receptor", ref: r, inside: false };
        };
        let cand = this.post.filter((r) => act.has(r.key));
        if (act0 === "receptor_antagonist") {
          // ~75% occupancy per receptor type (never 100%)
          const byKey = {};
          cand.forEach((r) => (byKey[r.key] = (byKey[r.key] || []).concat(r)));
          cand = [].concat.apply([], Object.keys(byKey).map((k) => byKey[k].slice(0, Math.max(1, Math.round(byKey[k].length * 0.75)))));
        }
        cand.forEach((r) => sites.push(mk(r, false)));
        this.pre.filter((r) => act.has(r.key)).forEach((r) => sites.push(mk(r, true)));
      } else if (act0 === "enzyme_inhibitor") {
        if (act.has("AChE")) this.cleftEnzymes.forEach((e) => sites.push({ x: e.x, y: e.y, kind: "enzyme", ref: e, inside: false }));
        else [[205, 116], [227, 138], [250, 120]].forEach((p) => sites.push({ x: p[0], y: p[1], kind: "enzyme", ref: this.mito, inside: true }));
      } else if (act0 === "precursor") {
        [[618, 104], [640, 132], [664, 112]].forEach((p) => sites.push({ x: p[0], y: p[1], kind: "enzyme", ref: this.aadc, inside: true }));
      } else if (act0 === "na_channel_blocker") {
        this.nav.forEach((n) => sites.push({ x: n.x, y: n.y, kind: "channel", ref: n, inside: true, axon: true }));
      } else if (act0 === "vesicle_protein_ligand" || act0 === "vesicle_loading_inhibitor") {
        this.vesicles.slice(0, 3).forEach((v) => sites.push({ x: v.x, y: v.y + 14, kind: "vesicle", ref: v, inside: true }));
      } else if (act0 === "k_channel_modulator") {
        this.kv.forEach((c) => sites.push({ x: c.x, y: PRE_Y - 8, kind: "channel", ref: c, inside: true }));
      } else if (act0 === "intracellular_modulator") {
        ["IMPase", "GSK3B"].filter((k) => act.has(k)).forEach((k) => sites.push({ x: this.casc[k].x, y: this.casc[k].y, kind: "enzyme", ref: this.casc[k], inside: true, post: true }));
      } else if (act0 === "ca_channel_ligand") {
        this.vgcc.forEach((c) => sites.push({ x: c.x, y: PRE_Y - 8, kind: "channel", ref: c, inside: true }));
      }
      sites.forEach((s, j) => { s.j = j; s.tb = T_ARRIVE + 0.35 * j + 3.3; });
      this.sites = sites;
      // drug molecules: one per site + two free ones
      this.drugMols = [];
      const n = sites.length + 2;
      for (let i = 0; i < n; i++) this.drugMols.push({ i, site: sites[i] || null });
    }

    /** Engagement of one site by the drug (0..1), smooth after the molecule has arrived. */
    siteE(s, t) { return ramp(t, s.tb, s.tb + 2.2); }
    avgE(t) {
      if (!this.sites.length) return 0;
      let a = 0;
      this.sites.forEach((s) => (a += this.siteE(s, t)));
      return a / this.sites.length;
    }
    /** Engagement of the sites of a given component list (e.g. transporters of one species). */
    eFor(pred, t) {
      let a = 0, n = 0;
      this.sites.forEach((s) => { if (pred(s)) { a += this.siteE(s, t); n++; } });
      return n ? a / n : 0;
    }

    /* -------------------------------------------------------------- static art
     * Illustrated like a textbook / electron-micrograph figure: textured cytoplasm, real
     * phospholipid bilayers (shaded heads, wavy tails), shaded membrane proteins. */
    buildStatic() {
      const svg = this.svg, d = this.drug;
      const defs = el("defs", null, svg);
      const grad = (id, type, attrs, stops) => {
        const g = el(type, Object.assign({ id }, attrs), defs);
        stops.forEach((s) => el("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] == null ? 1 : s[2] }, g));
        return g;
      };
      const rad = { cx: "0.35", cy: "0.3", r: "0.85" };
      grad("bgGrad", "radialGradient", { cx: "50%", cy: "45%", r: "75%" }, [["0%", "#0d1822"], ["100%", "#04090f"]]);
      grad("preGrad", "linearGradient", { x1: 0, y1: 0, x2: 0, y2: 1 }, [["0%", "#0e4047"], ["60%", "#10464e"], ["100%", "#17565e"]]);
      grad("postGrad", "linearGradient", { x1: 0, y1: 1, x2: 0, y2: 0 }, [["0%", "#24284f"], ["60%", "#272b58"], ["100%", "#30356a"]]);
      grad("vigGrad", "radialGradient", { cx: "50%", cy: "50%", r: "62%" }, [["55%", "#000", 0], ["100%", "#000", 0.5]]);
      grad("hdPre", "radialGradient", rad, [["0%", "#e3f1f0"], ["45%", "#8fc4c2"], ["100%", "#2f7c7e"]]);
      grad("hdPost", "radialGradient", rad, [["0%", "#eceefb"], ["45%", "#a3a7e6"], ["100%", "#5a5fb8"]]);
      grad("prot", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 0 }, [["0%", "#98a6cf"], ["40%", "#5f6faa"], ["100%", "#2b3566"]]);
      grad("protV", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 1 }, [["0%", "#a7a2dd"], ["55%", "#6f6bb8"], ["100%", "#363370"]]);
      grad("protY", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 0 }, [["0%", "#e2c98a"], ["45%", "#b9923f"], ["100%", "#5e4716"]]);
      grad("protO", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 0 }, [["0%", "#e8b995"], ["45%", "#c07a4a"], ["100%", "#6a3a1c"]]);
      grad("mitoG", "radialGradient", { cx: "0.4", cy: "0.3", r: "0.9" }, [["0%", "#6fa383"], ["100%", "#264638"]]);
      grad("vesG", "radialGradient", { cx: "0.38", cy: "0.32", r: "0.78" }, [["0%", "#fff", 0.38], ["50%", "#fff", 0.05], ["100%", "#000", 0.3]]);
      grad("drugG", "radialGradient", rad, [["0%", "#f6e7c4"], ["50%", "#e0a03a"], ["100%", "#9a6208"]]);
      const glow = el("filter", { id: "glow", x: "-80%", y: "-80%", width: "260%", height: "260%" }, defs);
      el("feGaussianBlur", { stdDeviation: "3.2" }, glow);
      const ds = el("filter", { id: "ds", x: "-30%", y: "-30%", width: "160%", height: "170%" }, defs);
      el("feDropShadow", { dx: 0, dy: 2, stdDeviation: 2, "flood-color": "#000", "flood-opacity": 0.55 }, ds);
      const gr = el("filter", { id: "grain", x: 0, y: 0, width: "100%", height: "100%" }, defs);
      el("feTurbulence", { type: "fractalNoise", baseFrequency: "0.8", numOctaves: 2, seed: 7, result: "n" }, gr);
      el("feColorMatrix", { in: "n", type: "matrix", values: "0 0 0 0 0.85  0 0 0 0 0.93  0 0 0 0 1  1.5 0 0 0 -0.62" }, gr);
      const gr2 = el("filter", { id: "blotch", x: 0, y: 0, width: "100%", height: "100%" }, defs);
      el("feTurbulence", { type: "fractalNoise", baseFrequency: "0.012 0.02", numOctaves: 3, seed: 3, result: "n" }, gr2);
      el("feColorMatrix", { in: "n", type: "matrix", values: "0 0 0 0 0.6  0 0 0 0 0.85  0 0 0 0 1  1.6 0 0 0 -0.6" }, gr2);

      grad("rimPre", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 1 }, [["0%", "#ffffff", 0.7], ["35%", "#bfe9ff", 0.15], ["100%", "#ffffff", 0]]);
      grad("rimPost", "linearGradient", { x1: 0, y1: 1, x2: 1, y2: 0 }, [["0%", "#ffffff", 0.0], ["55%", "#d9d0ff", 0.12], ["100%", "#ffffff", 0.55]]);
      grad("cleftGrad", "linearGradient", { x1: 0, y1: 0, x2: 0, y2: 1 }, [["0%", "#08121c"], ["50%", "#0d1d2c"], ["100%", "#08121c"]]);
      const og = el("filter", { id: "organic", x: "-8%", y: "-8%", width: "116%", height: "116%" }, defs);
      el("feTurbulence", { type: "fractalNoise", baseFrequency: "0.010 0.016", numOctaves: 2, seed: 11, result: "t" }, og);
      el("feDisplacementMap", { in: "SourceGraphic", in2: "t", scale: 12, xChannelSelector: "R", yChannelSelector: "G" }, og);
      el("feGaussianBlur", { stdDeviation: "9" }, el("filter", { id: "soft", x: "-40%", y: "-40%", width: "180%", height: "180%" }, defs));
      el("feGaussianBlur", { stdDeviation: "3.5" }, el("filter", { id: "soft2", x: "-100%", y: "-100%", width: "300%", height: "300%" }, defs));
      const PRE = "M 130 250 C 108 130 200 40 500 36 C 800 40 892 130 870 250 Z";
      const POST = "M 130 360 C 112 500 210 628 500 632 C 790 628 888 500 870 360 Z";
      el("clipPath", { id: "clipPre" }, defs).appendChild(el("path", { d: PRE }));
      el("clipPath", { id: "clipPost" }, defs).appendChild(el("path", { d: POST }));

      el("rect", { x: 0, y: 0, width: W, height: H, fill: "url(#bgGrad)" }, svg);

      // neighbouring tissue, out of focus: gives depth around the synapse
      const bgt = el("g", { class: "deco" }, svg);
      [["M -30 70 C 90 100 60 210 -20 240", "#12383d", 78], ["M 1030 90 C 920 120 950 230 1030 262", "#222550", 84], ["M -30 430 C 80 410 70 520 -20 565", "#201f48", 80],
       ["M 1030 440 C 930 420 950 545 1030 590", "#143b40", 82], ["M 250 -30 C 330 -6 420 -10 520 -34", "#12383d", 60], ["M 300 668 C 420 640 560 650 700 672", "#201f48", 70]].forEach((t) => {
        el("path", { d: t[0], fill: "none", stroke: t[1], "stroke-width": t[2], "stroke-linecap": "round", opacity: 0.55, filter: "url(#soft)" }, bgt);
      });
      for (let i = 0; i < 30; i++) {
        const x = hash(i, 31, 1, 2) * W, y = hash(i, 32, 3, 4) * H;
        if (x > 120 && x < 880 && y > 30 && y < 640) continue;
        el("circle", { cx: x, cy: y, r: 2 + hash(i, 33, 5, 6) * 6, fill: i % 2 ? "#6fb3b3" : "#8b8fd8", opacity: 0.22 + 0.2 * hash(i, 34, 7, 8), filter: "url(#soft2)" }, bgt);
      }

      // synaptic cleft: dark extracellular space with faint glycocalyx fuzz
      el("rect", { x: 0, y: PRE_Y, width: W, height: POST_Y - PRE_Y, fill: "url(#cleftGrad)" }, svg);
      const fz = el("g", { opacity: 0.5 }, svg);
      for (let i = 0; i < 70; i++) {
        const x = 20 + hash(i, 1, 2, 3) * 960, y = PRE_Y + 14 + hash(i, 4, 5, 6) * (POST_Y - PRE_Y - 28);
        el("circle", { cx: x, cy: y, r: 0.7 + hash(i, 7, 8, 9) * 1.2, fill: "#6f8fc4", opacity: 0.35 }, fz);
      }

      // presynaptic terminal + axon (cytoplasm texture, rim shading)
      const pre = el("g", null, svg);
      el("path", { d: PRE, fill: "url(#preGrad)", filter: "url(#organic)" }, pre);
      const preTex = el("g", { "clip-path": "url(#clipPre)" }, pre);
      el("rect", { x: 100, y: 20, width: 800, height: 240, filter: "url(#blotch)", opacity: 0.35 }, preTex);
      el("rect", { x: 100, y: 20, width: 800, height: 240, filter: "url(#grain)", opacity: 0.55 }, preTex);
      el("rect", { x: 100, y: 20, width: 800, height: 240, fill: "url(#vigGrad)" }, preTex);
      el("rect", { x: 470, y: -10, width: 60, height: 62, rx: 8, fill: "#1b5470" }, pre);
      el("rect", { x: 470, y: -10, width: 60, height: 62, rx: 8, filter: "url(#grain)", opacity: 0.5 }, pre);
      el("path", { d: PRE, fill: "none", stroke: "#6fb7b4", "stroke-width": 2.4, opacity: 0.85, filter: "url(#organic)" }, pre);
      el("path", { d: PRE, fill: "none", stroke: "url(#rimPre)", "stroke-width": 3.6, filter: "url(#organic)" }, pre);
      el("rect", { x: 470, y: -10, width: 60, height: 62, rx: 8, fill: "none", stroke: "#6fb7b4", "stroke-width": 2.2, opacity: 0.85 }, pre);
      // postsynaptic spine
      const post = el("g", null, svg);
      el("path", { d: POST, fill: "url(#postGrad)", filter: "url(#organic)" }, post);
      const postTex = el("g", { "clip-path": "url(#clipPost)" }, post);
      el("rect", { x: 100, y: 350, width: 800, height: 290, filter: "url(#blotch)", opacity: 0.3 }, postTex);
      el("rect", { x: 100, y: 350, width: 800, height: 290, filter: "url(#grain)", opacity: 0.5 }, postTex);
      el("rect", { x: 100, y: 350, width: 800, height: 290, fill: "url(#vigGrad)" }, postTex);
      // postsynaptic density: dark protein scaffold under the membrane
      el("path", { d: "M 142 372 L 858 372 L 846 392 L 154 392 Z", fill: "#0d0e26", opacity: 0.8 }, post);
      for (let i = 0; i < 90; i++) {
        el("circle", { cx: 156 + hash(i, 2, 4, 6) * 688, cy: 374 + hash(i, 8, 1, 5) * 16, r: 0.9 + hash(i, 3, 3, 3) * 1.2, fill: "#40448f", opacity: 0.55 }, post);
      }
      // spine organelles: smooth endoplasmic reticulum (tube) and a mitochondrion
      const er = el("g", { filter: "url(#ds)" }, post);
      el("path", { d: "M 250 488 C 290 462 330 520 380 492 C 430 466 470 520 520 488 C 545 474 560 482 575 494", fill: "none", stroke: "#4b4f9e", "stroke-width": 15, "stroke-linecap": "round", opacity: 0.9 }, er);
      el("path", { d: "M 250 488 C 290 462 330 520 380 492 C 430 466 470 520 520 488 C 545 474 560 482 575 494", fill: "none", stroke: "#7e82cf", "stroke-width": 9, "stroke-linecap": "round", opacity: 0.55 }, er);
      for (let i = 0; i < 16; i++) el("circle", { cx: 262 + i * 19.5, cy: 478 + 20 * Math.sin(i * 1.3), r: 1.8, fill: "#d2d4f2", opacity: 0.55 }, er);
      const pm = el("g", { filter: "url(#ds)" }, post);
      el("ellipse", { cx: 735, cy: 520, rx: 52, ry: 25, fill: "url(#mitoG)", stroke: "#7fb894", "stroke-width": 2 }, pm);
      el("ellipse", { cx: 735, cy: 520, rx: 46, ry: 20, fill: "none", stroke: "#a8d0b6", "stroke-width": 1.1, opacity: 0.7 }, pm);
      let pc = "";
      for (let k = -4; k <= 4; k++) { const cx = 735 + k * 10; pc += k % 2 ? "M " + cx + " 502 q 4 9 -1 14 q -3 4 1 8 " : "M " + cx + " 538 q -4 -9 1 -14 q 3 -4 -1 -8 "; }
      el("path", { d: pc, fill: "none", stroke: "#c2e0cc", "stroke-width": 1.3, opacity: 0.75, "stroke-linecap": "round" }, pm);
      el("path", { d: POST, fill: "none", stroke: "#8084d6", "stroke-width": 2.4, opacity: 0.85, filter: "url(#organic)" }, post);
      el("path", { d: POST, fill: "none", stroke: "url(#rimPost)", "stroke-width": 3.6, filter: "url(#organic)" }, post);

      // lipid bilayers: shaded heads + wavy double tails
      const bilayer = (y, head) => {
        const g = el("g", null, svg);
        let tails = "";
        for (let x = 136; x <= 864; x += 7.2) {
          const j = (hash(x | 0, y, 1, 2) - 0.5) * 1.6;
          tails += "M " + (x - 1.6) + " " + (y - 5.4) + " q " + (1.6 + j) + " 2.7 0 5.4 M " + (x + 1.6) + " " + (y - 5.4) + " q " + (-1.6 + j) + " 2.7 0 5.4 ";
          tails += "M " + (x - 1.6) + " " + (y + 5.4) + " q " + (1.6 + j) + " -2.7 0 -5.4 M " + (x + 1.6) + " " + (y + 5.4) + " q " + (-1.6 + j) + " -2.7 0 -5.4 ";
        }
        el("path", { d: tails, fill: "none", stroke: head === "hdPre" ? "#d6f3ff" : "#e4deff", "stroke-width": 0.9, opacity: 0.7 }, g);
        for (let x = 136; x <= 864; x += 7.2) {
          const j = (hash(x | 0, y, 3, 4) - 0.5) * 1.2;
          el("circle", { cx: x, cy: y - 7.4 + j, r: 3.5, fill: "url(#" + head + ")" }, g);
          el("circle", { cx: x, cy: y + 7.4 - j, r: 3.5, fill: "url(#" + head + ")" }, g);
        }
      };
      bilayer(PRE_Y, "hdPre");
      bilayer(POST_Y, "hdPost");

      // mitochondrion: double membrane, cristae, MAO on the outer surface
      const m = this.mito;
      const mg = el("g", { filter: "url(#ds)" }, svg);
      el("ellipse", { cx: m.x, cy: m.y, rx: 44, ry: 22, fill: "url(#mitoG)", stroke: "#7fb894", "stroke-width": 2 }, mg);
      el("ellipse", { cx: m.x, cy: m.y, rx: 39, ry: 18, fill: "none", stroke: "#a8d0b6", "stroke-width": 1.1, opacity: 0.7 }, mg);
      let cr = "";
      for (let k = -3; k <= 3; k++) {
        const cx = m.x + k * 10.5;
        cr += k % 2 ? "M " + cx + " " + (m.y - 17) + " q 4 9 -1 14 q -3 4 1 8 " : "M " + cx + " " + (m.y + 17) + " q -4 -9 1 -14 q 3 -4 -1 -8 ";
      }
      el("path", { d: cr, fill: "none", stroke: "#c2e0cc", "stroke-width": 1.3, opacity: 0.75, "stroke-linecap": "round" }, mg);
      for (let k = 0; k < 14; k++) {
        const a = (k / 14) * Math.PI * 2;
        el("circle", { cx: m.x + Math.cos(a) * 46, cy: m.y + Math.sin(a) * 24, r: 2.6, fill: "#d99a5e", stroke: "#efe0cc", "stroke-width": 0.6 }, mg);
      }

      // extra organelles and filaments (graphics setting: scene detail = rich)
      this.rich = !!(global.KYP_GFX && global.KYP_GFX.get().detail === "rich");
      if (this.rich) {
        const fil = el("g", null, svg);
        el("path", { d: "M 300 142 C 420 128 560 152 790 138", fill: "none", stroke: "#a9cfcf", "stroke-width": 7, "stroke-linecap": "round", opacity: 0.22 }, fil);
        el("path", { d: "M 300 142 C 420 128 560 152 790 138", fill: "none", stroke: "#d4eaea", "stroke-width": 1.2, "stroke-dasharray": "2 7", "stroke-linecap": "round", opacity: 0.7 }, fil);
        for (let i = 0; i < 46; i++) {
          const x = 190 + hash(i, 11, 3, 5) * 620, y = 150 + hash(i, 12, 4, 6) * 58, a = (hash(i, 13, 5, 7) - 0.5) * 1.8, l = 10 + hash(i, 14, 6, 8) * 18;
          el("line", { x1: x, y1: y, x2: x + Math.cos(a) * l, y2: y + Math.sin(a) * l, stroke: "#9bc4c4", "stroke-width": 1, opacity: 0.22, "stroke-linecap": "round" }, fil);
        }
        // glycocalyx: branched sugar chains on both outer membrane faces
        const gly = el("g", { opacity: 0.55 }, svg);
        for (let x = 150; x < 860; x += 34) {
          const j = hash(x, 21, 2, 3) * 8;
          el("path", { d: "M " + (x + j) + " " + (PRE_Y + 11) + " l 0 11 m 0 -5 l -4 -5 m 4 5 l 4 -5", fill: "none", stroke: "#85b8b6", "stroke-width": 1.1, "stroke-linecap": "round" }, gly);
          el("circle", { cx: x + j, cy: PRE_Y + 23, r: 1.7, fill: "#b6d6d4" }, gly);
          const k = hash(x, 22, 2, 3) * 8;
          el("path", { d: "M " + (x + 12 + k) + " " + (POST_Y - 11) + " l 0 -11 m 0 5 l -4 5 m 4 -5 l 4 5", fill: "none", stroke: "#9a9edb", "stroke-width": 1.1, "stroke-linecap": "round" }, gly);
          el("circle", { cx: x + 12 + k, cy: POST_Y - 23, r: 1.7, fill: "#c9cbf0" }, gly);
        }
        // polyribosomes in the spine
        const rib = el("g", null, svg);
        [[660, 440], [700, 462], [240, 548], [470, 548], [820, 452]].forEach((c, q) => {
          for (let i = 0; i < 6; i++) el("circle", { cx: c[0] + (hash(q, i, 1, 2) - 0.5) * 34, cy: c[1] + (hash(q, i, 3, 4) - 0.5) * 18, r: 2.8, fill: "#bcbfe8", opacity: 0.7 }, rib);
        });
      }

      // cell-adhesion proteins (neurexin-neuroligin) bridging the cleft, and a reserve pool of vesicles
      const adh = el("g", { opacity: 0.8 }, svg);
      [292, 470, 520, 705].forEach((x, i) => {
        const bow = (i % 2 ? 1 : -1) * 4;
        el("path", { d: "M " + x + " " + (PRE_Y + 9) + " q " + bow + " 36 0 " + (POST_Y - PRE_Y - 18), fill: "none", stroke: "#6d8896", "stroke-width": 3.2, "stroke-linecap": "round", opacity: 0.55 }, adh);
        el("path", { d: "M " + x + " " + (PRE_Y + 9) + " q " + bow + " 36 0 " + (POST_Y - PRE_Y - 18), fill: "none", stroke: "#c3d6dc", "stroke-width": 1, "stroke-linecap": "round", opacity: 0.5 }, adh);
        el("circle", { cx: x, cy: PRE_Y + 12, r: 3.6, fill: "url(#hdPre)" }, adh);
        el("circle", { cx: x, cy: POST_Y - 12, r: 3.6, fill: "url(#hdPost)" }, adh);
      });
      const pool = el("g", { opacity: 0.55 }, svg);
      [[205, 128], [335, 138], [445, 120], [560, 136], [690, 122], [785, 140]].forEach((c, i) => {
        const r = 14 + hash(i, 41, 1, 1) * 4;
        el("circle", { cx: c[0], cy: c[1], r, fill: "#9aa8b8", "fill-opacity": 0.12, stroke: "#b6c3cf", "stroke-width": 1.6 }, pool);
        el("circle", { cx: c[0], cy: c[1], r, fill: "url(#vesG)" }, pool);
        for (let k = 0; k < 4; k++) el("circle", { cx: c[0] + (hash(i, k, 2, 2) - 0.5) * r, cy: c[1] + (hash(i, k, 3, 3) - 0.5) * r, r: 2.2, fill: "#c9d3dc", opacity: 0.7 }, pool);
      });

      // voltage-gated Ca2+ channels (presynaptic membrane): shaded protein with a pore
      this.vgccEls = this.vgcc.map((c) => {
        const g = el("g", { filter: "url(#ds)" }, svg);
        el("rect", { x: c.x - 10, y: PRE_Y - 22, width: 20, height: 44, rx: 7, fill: "url(#protY)", stroke: "#d9b862", "stroke-width": 1.2 }, g);
        el("path", { d: "M " + (c.x - 10) + " " + (PRE_Y - 8) + " h 20 M " + (c.x - 10) + " " + (PRE_Y + 8) + " h 20", stroke: "#ecd9a0", "stroke-width": 0.8, opacity: 0.5 }, g);
        el("rect", { x: c.x - 2.6, y: PRE_Y - 20, width: 5.2, height: 40, rx: 2.5, fill: "#0a131d" }, g);
        el("ellipse", { cx: c.x - 4, cy: PRE_Y - 15, rx: 3, ry: 6, fill: "#fff", opacity: 0.25 }, g);
        return g;
      });
      // Na+ channels on the axon
      this.navEls = this.nav.map((n) => {
        const g = el("g", { filter: "url(#ds)" }, svg);
        el("rect", { x: n.x - 8, y: n.y - 13, width: 16, height: 26, rx: 5, fill: "url(#protO)", stroke: "#d79a6e", "stroke-width": 1.2 }, g);
        el("rect", { x: n.x - 2.4, y: n.y - 12, width: 4.8, height: 24, rx: 2, fill: "#0a131d" }, g);
        el("ellipse", { cx: n.x - 4, cy: n.y - 7, rx: 2.6, ry: 5, fill: "#fff", opacity: 0.25 }, g);
        return g;
      });

      // K+ channels on the terminal membrane (only for potassium-channel drugs)
      this.kvEls = [];
      if (d.action === "k_channel_modulator") {
        grad("protK", "linearGradient", { x1: 0, y1: 0, x2: 1, y2: 0 }, [["0%", "#a9d6cf"], ["45%", "#5f9f98"], ["100%", "#244b47"]]);
        this.kvEls = this.kv.map((c) => {
          const g = el("g", { filter: "url(#ds)" }, svg);
          el("rect", { x: c.x - 11, y: PRE_Y - 22, width: 22, height: 44, rx: 8, fill: "url(#protK)", stroke: "#8fc7bf", "stroke-width": 1.2 }, g);
          el("rect", { x: c.x - 2.6, y: PRE_Y - 20, width: 5.2, height: 40, rx: 2.5, fill: "#0a131d" }, g);
          el("path", { d: "M " + (c.x - 11) + " " + (PRE_Y - 6) + " h 22 M " + (c.x - 11) + " " + (PRE_Y + 8) + " h 22", stroke: "#d4eeea", "stroke-width": 0.8, opacity: 0.5 }, g);
          const x = el("g", { opacity: 0 }, g);
          el("line", { x1: c.x - 13, y1: PRE_Y - 13, x2: c.x + 13, y2: PRE_Y + 13, stroke: "#d4756e", "stroke-width": 4, "stroke-linecap": "round" }, x);
          el("line", { x1: c.x + 13, y1: PRE_Y - 13, x2: c.x - 13, y2: PRE_Y + 13, stroke: "#d4756e", "stroke-width": 4, "stroke-linecap": "round" }, x);
          return { g, x };
        });
      }

      // second-messenger cascade in the spine (only for intracellular modulators)
      this.cascEls = null;
      if (d.action === "intracellular_modulator") {
        const cg = el("g", null, svg);
        const node = (cx, cy, rx, ry, fill, stroke) => {
          const n = el("g", { filter: "url(#ds)" }, cg);
          el("ellipse", { cx, cy, rx, ry, fill, stroke, "stroke-width": 1.6 }, n);
          el("ellipse", { cx: cx - rx * 0.3, cy: cy - ry * 0.35, rx: rx * 0.35, ry: ry * 0.3, fill: "#fff", opacity: 0.22 }, n);
          return n;
        };
        const R3 = this.post[Math.min(2, this.post.length - 1)], R4 = this.post[Math.min(3, this.post.length - 1)];
        this.cascPaths = [
          { id: "plc", pts: [[R3.x + 6, POST_Y + 44], [R3.x + 30, POST_Y + 62], [this.casc.plc.x - 12, this.casc.plc.y - 8]], blocked: false },
          { id: "ip3", pts: [[this.casc.plc.x - 14, this.casc.plc.y + 8], [this.casc.IMPase.x + 10, this.casc.IMPase.y - 14], [572, 494]], blocked: "IMPase" },
          { id: "gsk", pts: [[R4.x + 8, POST_Y + 44], [R4.x + 40, POST_Y + 62], [this.casc.GSK3B.x - 14, this.casc.GSK3B.y - 8]], blocked: "GSK3B" },
        ];
        this.cascPaths.forEach((cp) => {
          const q = cp.pts;
          el("path", { d: "M " + q[0].join(" ") + " Q " + q[1].join(" ") + " " + q[2].join(" "), fill: "none", stroke: "#8a8fd2", "stroke-width": 2, "stroke-dasharray": "5 5", opacity: 0.55 }, cg);
        });
        node(this.casc.plc.x, this.casc.plc.y, 20, 13, "#4d5099", "#aeb2ee");
        this.cascEls = { x: {} };
        ["IMPase", "GSK3B"].forEach((k) => {
          const c = this.casc[k];
          node(c.x, c.y, 24, 14, "#5b4f94", "#c0b6ee");
          const xg = el("g", { opacity: 0 }, cg);
          el("line", { x1: c.x - 16, y1: c.y - 12, x2: c.x + 16, y2: c.y + 12, stroke: "#d4756e", "stroke-width": 3.6, "stroke-linecap": "round" }, xg);
          el("line", { x1: c.x + 16, y1: c.y - 12, x2: c.x - 16, y2: c.y + 12, stroke: "#d4756e", "stroke-width": 3.6, "stroke-linecap": "round" }, xg);
          this.cascEls.x[k] = xg;
        });
        this.gCascPulse = el("g", null, svg);
      }

      // transporters: 12-helix proteins with an outward-open substrate pocket
      this.transEls = this.transporters.map((t) => {
        const col = C.SPECIES[t.species].color;
        const g = el("g", null, svg);
        const body = el("g", { filter: "url(#ds)" }, g);
        el("rect", { x: t.x - 15, y: PRE_Y - 22, width: 30, height: 44, rx: 10, fill: "url(#prot)", stroke: col, "stroke-width": 1.8 }, body);
        let hx = "";
        for (let k = -2; k <= 2; k++) hx += "M " + (t.x + k * 5.6) + " " + (PRE_Y - 17) + " q 2 17 0 34 ";
        el("path", { d: hx, fill: "none", stroke: "#cfd9ff", "stroke-width": 1.3, opacity: 0.45, "stroke-linecap": "round" }, body);
        el("path", { d: "M " + (t.x - 8) + " " + (PRE_Y + 22) + " L " + (t.x - 3.5) + " " + (PRE_Y + 3) + " L " + (t.x + 3.5) + " " + (PRE_Y + 3) + " L " + (t.x + 8) + " " + (PRE_Y + 22) + " Z", fill: "#0a131d" }, body);
        el("ellipse", { cx: t.x - 8, cy: PRE_Y - 14, rx: 3.4, ry: 7, fill: "#fff", opacity: 0.22 }, body);
        const x = el("g", { opacity: 0 }, g);
        el("line", { x1: t.x - 12, y1: PRE_Y - 12, x2: t.x + 12, y2: PRE_Y + 12, stroke: "#ff5d5d", "stroke-width": 4, "stroke-linecap": "round" }, x);
        el("line", { x1: t.x + 12, y1: PRE_Y - 12, x2: t.x - 12, y2: PRE_Y + 12, stroke: "#ff5d5d", "stroke-width": 4, "stroke-linecap": "round" }, x);
        const rev = el("g", { opacity: 0 }, g);
        el("path", { d: "M " + t.x + " " + (PRE_Y + 28) + " l 0 20 m -5 -6 l 5 6 l 5 -6", stroke: col, "stroke-width": 2.4, fill: "none", "stroke-linecap": "round" }, rev);
        return { g, x, rev };
      });

      // AChE / peptidase enzymes in the cleft: globular protein with an active-site gorge
      this.enzEls = this.cleftEnzymes.map((e) => {
        const g = el("g", null, svg);
        const body = el("g", { filter: "url(#ds)" }, g);
        el("path", { d: "M " + (e.x - 15) + " " + e.y + " a 15 15 0 1 1 30 0 l -15 0 z", fill: "url(#protV)", stroke: "#bdb8ea", "stroke-width": 1.4 }, body);
        el("path", { d: "M " + (e.x - 3) + " " + (e.y - 16) + " q 3 9 0 16 l 6 0 q -3 -7 0 -16 z", fill: "#0a131d" }, body);
        el("ellipse", { cx: e.x - 7, cy: e.y - 10, rx: 3.6, ry: 4.6, fill: "#fff", opacity: 0.25 }, body);
        const x = el("g", { opacity: 0 }, g);
        el("line", { x1: e.x - 12, y1: e.y - 15, x2: e.x + 12, y2: e.y + 6, stroke: "#ff5d5d", "stroke-width": 3.4, "stroke-linecap": "round" }, x);
        el("line", { x1: e.x + 12, y1: e.y - 15, x2: e.x - 12, y2: e.y + 6, stroke: "#ff5d5d", "stroke-width": 3.4, "stroke-linecap": "round" }, x);
        return { g, x };
      });

      // receptors
      this.recEls = this.post.map((r) => this.drawReceptor(svg, r, POST_Y, false));
      this.preEls = this.pre.map((r) => this.drawReceptor(svg, r, PRE_Y, true));
    }

    /** Receptor drawn in local coordinates (cleft side = up), flipped for presynaptic receptors. */
    drawReceptor(parent, r, y, isPre) {
      const col = C.SPECIES[r.species].color;
      const g = el("g", { transform: "translate(" + r.x + " " + y + ")" + (isPre ? " scale(1 -1)" : "") }, parent);
      const halo = el("circle", { cx: 0, cy: 0, r: 36, fill: col, opacity: 0, filter: "url(#glow)" }, g);
      const body = el("g", { filter: "url(#ds)" }, g);
      if (r.kind === "ionotropic") {
        // pentameric ligand-gated channel: extracellular vestibule + 5 transmembrane helices
        el("path", { d: "M -23 -9 C -25 -23 -18 -35 -11 -37 L 11 -37 C 18 -35 25 -23 23 -9 Z", fill: "url(#prot)", stroke: col, "stroke-width": 1.5 }, body);
        el("path", { d: "M -11 -36 L -11 -9 M 11 -36 L 11 -9", stroke: "#0a131d", "stroke-width": 0.8, opacity: 0.5 }, body);
        el("rect", { x: -3.2, y: -35, width: 6.4, height: 26, rx: 3, fill: "#0a131d" }, body);
        [-18, -9.5, 9.5, 18].forEach((hx) => el("rect", { x: hx - 4, y: -9, width: 8, height: 18, rx: 4, fill: "url(#prot)", stroke: col, "stroke-width": 1 }, body));
        [-13, 13].forEach((hx) => el("rect", { x: hx - 5, y: 9, width: 10, height: 11, rx: 5, fill: "url(#prot)", stroke: col, "stroke-width": 1, opacity: 0.9 }, body));
        el("ellipse", { cx: -13, cy: -27, rx: 4, ry: 7, fill: "#fff", opacity: 0.2 }, body);
      } else {
        // GPCR: seven transmembrane helices, extracellular loops, N-terminus
        for (let k = -3; k <= 3; k++) {
          el("rect", { x: k * 7 - 3.4, y: -11 + (k % 2) * 1.5, width: 6.8, height: 22, rx: 3.4, fill: "url(#prot)", stroke: col, "stroke-width": 1 }, body);
        }
        el("path", { d: "M -21 -11 q 3.5 -11 7 0 M -7 -10 q 3.5 -11 7 0 M 7 -10 q 3.5 -11 7 0 M -21 -11 q -4 -14 -1 -22", fill: "none", stroke: col, "stroke-width": 1.6, "stroke-linecap": "round", opacity: 0.85 }, body);
        el("path", { d: "M -14 11 q 3.5 9 7 0 M 0 11 q 3.5 9 7 0 M 14 11 q 3.5 9 7 0", fill: "none", stroke: col, "stroke-width": 1.4, "stroke-linecap": "round", opacity: 0.7 }, body);
      }
      // intracellular G-protein / scaffold (dimmed until the receptor is active)
      const gp = el("g", { opacity: 0.55 }, g);
      if (r.kind === "ionotropic") {
        el("ellipse", { cx: 0, cy: 36, rx: 20, ry: 8, fill: "#383a86", stroke: col, "stroke-width": 1, opacity: 0.8 }, gp);
      } else {
        el("circle", { cx: -3, cy: 35, r: 10, fill: "url(#protV)", stroke: col, "stroke-width": 1.2 }, gp);
        el("circle", { cx: 12, cy: 41, r: 6.5, fill: "url(#protV)", stroke: col, "stroke-width": 1 }, gp);
        el("circle", { cx: 19, cy: 31, r: 5, fill: "url(#protV)", stroke: col, "stroke-width": 1 }, gp);
      }
      const xmark = el("g", { opacity: 0 }, g);
      el("line", { x1: -17, y1: -20, x2: 17, y2: -4, stroke: "#ff5d5d", "stroke-width": 3.4, "stroke-linecap": "round" }, xmark);
      el("line", { x1: 17, y1: -20, x2: -17, y2: -4, stroke: "#ff5d5d", "stroke-width": 3.4, "stroke-linecap": "round" }, xmark);
      return { g, halo, gp, xmark, r };
    }

    /* ------------------------------------------------------------ dynamic layers */
    buildDynamic() {
      const svg = this.svg;
      this.gVes = el("g", null, svg);
      this.vesEls = this.vesicles.map((v) => {
        const col = C.SPECIES[v.species].color;
        const g = el("g", null, this.gVes);
        const c = el("circle", { r: 24, fill: col, "fill-opacity": 0.16, stroke: col, "stroke-width": 2.4 }, g);
        el("circle", { r: 24, fill: "url(#vesG)" }, g);
        el("circle", { r: 21, fill: "none", stroke: "#ffffff", "stroke-width": 0.8, opacity: 0.35 }, g);
        for (let k = 0; k < 3; k++) {
          const a = k * 2.1 + 0.6;
          el("rect", { x: Math.cos(a) * 25 - 2.4, y: Math.sin(a) * 25 - 2.4, width: 4.8, height: 4.8, rx: 1.6, fill: "#d9c9ff", stroke: "#6a5bd0", "stroke-width": 0.8, transform: "rotate(" + (a * 57.3) + " " + Math.cos(a) * 25 + " " + Math.sin(a) * 25 + ")" }, g);
        }
        const dots = [];
        for (let k = 0; k < 9; k++) {
          const a = (k / 9) * Math.PI * 2, rr = k < 3 ? 6 : 13;
          const dg = el("g", { transform: "translate(" + Math.cos(a) * rr + " " + Math.sin(a) * rr + ")" }, g);
          el("circle", { r: 3.6, fill: col, stroke: "#ffffff66", "stroke-width": 0.6 }, dg);
          el("circle", { cx: -1.1, cy: -1.2, r: 1.2, fill: "#fff", opacity: 0.7 }, dg);
          dots.push(dg);
        }
        return { g, c, dots };
      });
      this.gIons = el("g", null, svg);
      this.gMol = el("g", null, svg);
      this.molPool = [];
      this.gDrug = el("g", null, svg);
      this.drugEls = this.drugMols.map((m) => {
        const g = el("g", { opacity: 0 }, this.gDrug);
        el("circle", { r: 15, fill: DRUG, opacity: 0.35, filter: "url(#glow)" }, g);
        el("polygon", { points: "0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5", fill: "url(#drugG)", stroke: "#f0deb0", "stroke-width": 1.4 }, g);
        el("circle", { r: 5.2, fill: "none", stroke: "#6a4410", "stroke-width": 1, opacity: 0.55 }, g);
        return g;
      });
      this.gAp = el("g", null, svg);
      this.apEl = el("circle", { r: 9, fill: "#fff7c2", opacity: 0, filter: "url(#glow)" }, this.gAp);
      this.gIonLabels = el("g", null, svg);
    }

    mol(i) {
      let m = this.molPool[i];
      if (!m) {
        m = { g: el("g", null, this.gMol) };
        m.glow = el("circle", { r: 9, opacity: 0.4, filter: "url(#glow)" }, m.g);
        m.dot = el("circle", { r: 5.6, stroke: "#ffffffaa", "stroke-width": 1 }, m.g);
        el("circle", { cx: -1.8, cy: -1.9, r: 1.7, fill: "#fff", opacity: 0.65 }, m.g);
        this.molPool[i] = m;
      }
      return m;
    }

    /* --------------------------------------------------------------------- labels */
    buildLabels() {
      const svg = this.svg, d = this.drug;
      const g = (this.gLabels = el("g", { class: "labels" }, svg));
      const lab = (text, x, y, opt) => {
        opt = opt || {};
        const t = el("text", { x, y, "text-anchor": opt.anchor || "start", class: "lbl" + (opt.cls ? " " + opt.cls : "") }, g);
        t.textContent = text;
        if (opt.color) t.setAttribute("fill", opt.color);
        return t;
      };
      const line = (x1, y1, x2, y2) => el("line", { x1, y1, x2, y2, class: "lead" }, g);

      lab("Presynaptic terminal (axon bouton)", 175, 62, { cls: "lbl-big" });
      lab("Axon — action potential arrives", 545, 24);
      line(530, 24, 540, 20);
      const v1 = this.vesicles[1];
      const spN = C.SPECIES[v1.species].name.replace(/ \(.*\)$/, "");
      lab("Synaptic vesicle (stores " + spN.toLowerCase() + ")", 330, 108);
      line(v1.x - 6, v1.y - 22, 372, 114);
      const mem = (txt1, txt2, y) => {
        const t = lab(txt1, 994, y, { anchor: "end", cls: "lbl-mem" });
        lab(txt2, 994, y + 14, { anchor: "end", cls: "lbl-mem" });
        return t;
      };
      mem("Presynaptic", "membrane", 230);
      lab("Synaptic cleft", 22, 304, { cls: "lbl-big" });
      mem("Postsynaptic", "membrane", 340);
      lab("Postsynaptic neuron (dendritic spine)", 330, 560, { cls: "lbl-big" });
      lab("Postsynaptic density", 330, 385, { anchor: "middle", cls: "lbl-mini" });
      if (d.action === "vesicle_protein_ligand" || d.action === "vesicle_loading_inhibitor") {
        const tk = d.actsOn[0], tl = C.TARGETS[tk] ? C.TARGETS[tk].label : tk;
        lab(tl + (d.action === "vesicle_protein_ligand" ? " on the vesicle membrane" : " (loads transmitter into vesicles)"), 228, 204, { anchor: "end", cls: "lbl-mini" });
      }
      if (d.action === "k_channel_modulator") lab("Voltage-gated K⁺ channel (Kv)", 722, 208, { cls: "lbl-mini" });
      if (d.action === "intracellular_modulator") {
        lab("Second-messenger cascade (PLC → IP3)", this.casc.plc.x + 2, this.casc.plc.y - 20, { anchor: "middle", cls: "lbl-mini" });
        lab("IMPase (inositol recycling)", this.casc.IMPase.x - 4, this.casc.IMPase.y + 30, { anchor: "middle", cls: "lbl-mini" });
        lab("GSK-3β", this.casc.GSK3B.x, this.casc.GSK3B.y + 30, { anchor: "middle", cls: "lbl-mini" });
      }
      lab("Adhesion proteins (neurexin–neuroligin)", 22, 320, { cls: "lbl-mini" });
      lab("Reserve pool of vesicles", 600, 100, { cls: "lbl-mini" });
      lab("Smooth endoplasmic reticulum", 412, 520, { anchor: "middle", cls: "lbl-mini" });
      if (this.rich) {
        lab("Microtubule (vesicle track)", 800, 160, { cls: "lbl-mini" });
        lab("Actin filaments", 150, 222, { cls: "lbl-mini" });
        lab("Glycocalyx (sugar coat)", 22, 334, { cls: "lbl-mini" });
        if (d.action !== "intracellular_modulator") lab("Ribosomes (protein synthesis)", 690, 425, { anchor: "middle", cls: "lbl-mini" });
      }
      lab("Mitochondrion (ATP supply)", 735, 566, { anchor: "middle", cls: "lbl-mini" });
      lab("Voltage-gated Ca²⁺ channel", 330, 214);
      line(this.vgcc[0].x + 6, PRE_Y - 20, 336, 218);
      lab(d.actsOn.includes("COX") ? "Mitochondrion · COX enzymes (drug target)" : "Mitochondrion (MAO on its surface)", 160, 160, { cls: "lbl-mini" });
      if (d.action === "precursor") lab("AADC converts L-DOPA to dopamine", 560, 82, { cls: "lbl-mini" });
      if (d.action === "na_channel_blocker") lab("Voltage-gated Na⁺ channel", 548, 44);

      // transporter labels (first of each species)
      const seen = {};
      this.transporters.forEach((t) => {
        if (seen[t.species]) return;
        seen[t.species] = 1;
        lab(t.label + " — " + t.full.toLowerCase(), t.x, 283, { anchor: t.x < 500 ? "start" : "end", cls: "lbl-mini" });
        line(t.x, PRE_Y + 22, t.x, 276);
      });
      // cleft enzyme labels
      const es = {};
      this.cleftEnzymes.forEach((e) => {
        if (es[e.species]) return;
        es[e.species] = 1;
        lab(e.full, e.x, 332, { anchor: "middle", cls: "lbl-mini" });
      });
      // receptor labels
      const seenR = {};
      this.post.forEach((r) => {
        if (seenR[r.key]) return;
        seenR[r.key] = 1;
        lab(r.label, r.x, 340, { anchor: "middle" });
        line(r.x, POST_Y - 26, r.x, 344);
        if (r.allosteric && this.drug.action === "pam") lab(r.allosteric, r.x + 36, POST_Y + 52, { cls: "lbl-mini", color: "#e6b866" });
      });
      const seenP = {};
      this.pre.forEach((r) => {
        if (seenP[r.key]) return;
        seenP[r.key] = 1;
        lab(r.label, r.x, 232, { anchor: "middle" });
        line(r.x, PRE_Y - 24, r.x, 238);
      });

      // moving drug label
      this.drugLabel = lab(d.name, 0, 0, { anchor: "middle", cls: "lbl-drug" });
      this.drugLabel.setAttribute("opacity", 0);
      // ion labels (charge symbols are drawn with the ions)
      this.kLabel = lab("K⁺ leaves the cell (hyperpolarisation)", 0, 0, { cls: "lbl-mini", color: "#e6b866" });
      this.kLabel.setAttribute("opacity", 0);
    }

    /* ----------------------------------------------------------- NT molecule model */
    /** All visible neurotransmitter molecules at time t. Pure function. */
    nt(t) {
      const d = this.drug, out = [];
      const act = d.action;
      const clearFactor = (sp) => {
        if (act === "reuptake_inhibitor") {
          return 1 - 0.93 * this.eFor((s) => s.kind === "transporter" && s.ref.species === sp, t);
        }
        if (act === "releaser") return 1 - 0.8 * this.eFor((s) => s.kind === "transporter" && s.ref.species === sp, t);
        if (act === "enzyme_inhibitor" && d.actsOn.includes("AChE")) return 1 - 0.92 * this.eFor((s) => s.kind === "enzyme", t);
        return 1;
      };
      const flow = (tE) => {
        const e = this.avgE(tE);
        let rel = 0.82;
        const inhib = this.inhibitoryRelease();
        if (inhib) rel *= 1 - inhib * e;
        let load = 1;
        if (act === "precursor" || (act === "enzyme_inhibitor" && (d.actsOn.includes("MAO") || d.actsOn.includes("GABA-T")))) load = 1 + 0.75 * e;
        if (act === "vesicle_loading_inhibitor") load = 1 - 0.65 * e;
        if (act === "k_channel_modulator" && d.kdir === "block") { load = 1 + 0.5 * e; rel = Math.min(0.97, rel * (1 + 0.15 * e)); }
        return { rel, load };
      };
      const occupied = (r, tt) => {
        if (!["receptor_antagonist", "receptor_agonist", "partial_agonist"].includes(act)) return false;
        const s = this.sites.find((q) => q.ref === r);
        return !!s && this.siteE(s, tt) > 0.55;
      };

      this.vesicles.forEach((v) => {
        const sp = v.species, spInfo = C.SPECIES[sp];
        const kMax = Math.floor((t - v.off) / CYCLE - FUSE);
        const kMin = Math.floor((t - v.off - LIFE) / CYCLE - FUSE);
        for (let k = kMin; k <= kMax; k++) {
          const tE = v.off + (k + FUSE) * CYCLE;
          const tau = t - tE;
          if (tau < 0) continue;
          const fl = flow(tE);
          if (hash(v.i, k, 11, 3) >= fl.rel) continue;
          const M = Math.round(3 * fl.load);
          for (let m = 0; m < M; m++) {
            const rnd = (n) => hash(v.i, k, m, n);
            const pb = 0.42, pc = 0.42 * clearFactor(sp);
            const u = rnd(1);
            const S = [v.x + (rnd(2) - 0.5) * 26, PRE_Y + 12];
            const myRecs = this.post.filter((r) => r.species === sp);
            let outcome = u < pb ? "bind" : u < pb + pc ? "clear" : "linger";
            let R = null, late = null;
            if (outcome === "bind") {
              if (!myRecs.length) outcome = "linger";
              else { R = myRecs[Math.floor(rnd(12) * myRecs.length) % myRecs.length]; if (occupied(R, tE)) outcome = "bounce"; }
            }
            if (outcome === "linger" && myRecs.length && rnd(15) < 0.7) {
              const R2 = myRecs[Math.floor(rnd(16) * myRecs.length) % myRecs.length];
              if (!occupied(R2, tE + 3.5)) late = R2;
            }
            this.placeNT(out, t, tau, outcome, sp, spInfo, S, R, rnd, v, late);
          }
        }
      });

      // releasing agent: extra efflux through reversed transporters
      if (act === "releaser") {
        this.sites.forEach((s) => {
          if (s.kind !== "transporter") return;
          const per = 1.5, off = hash(s.j, 4, 6, 8) * per;
          const kMax = Math.floor((t - off) / per), kMin = Math.floor((t - off - LIFE) / per);
          for (let k = kMin; k <= kMax; k++) {
            const tE = off + k * per;
            if (hash(s.j, k, 99, 5) >= 0.95 * this.siteE(s, tE)) continue;
            const rnd = (n) => hash(s.j + 40, k, 0, n);
            this.placeNT(out, t, t - tE, "linger", s.ref.species, C.SPECIES[s.ref.species], [s.x, PRE_Y + 30], null, rnd, null);
          }
        });
      }
      return out;
    }

    inhibitoryRelease() {
      const d = this.drug;
      if (d.action === "na_channel_blocker") return 0.55;
      if (d.action === "ca_channel_ligand") return 0.5;
      if (d.action === "vesicle_protein_ligand") return 0.55;
      if (d.action === "k_channel_modulator" && d.kdir !== "block") return 0.5;
      if (d.action === "receptor_agonist" && d.actsOn.some((k) => C.RECEPTORS[k] && C.RECEPTORS[k].loc === "pre")) return 0.5;
      if (d.action === "partial_agonist" && d.actsOn.some((k) => C.RECEPTORS[k] && C.RECEPTORS[k].loc === "pre")) return 0.5 * (d.efficacy || 0.5);
      return 0;
    }

    placeNT(out, t, tau, outcome, sp, spInfo, S, R, rnd, v, late) {
      const color = spInfo.color;
      const push = (x, y, r, a, extra) => out.push(Object.assign({ x, y, r, a, color, sp }, extra || {}));
      const wob = (amp, f, ph) => [Math.sin(tau * f + ph) * amp, Math.cos(tau * f * 0.8 + ph * 1.7) * amp * 0.7];
      if (outcome === "bind" || outcome === "bounce") {
        const tb = 1.0 + 0.5 * rnd(3), hold = 0.9;
        const T = [R.x + (rnd(13) - 0.5) * 10, POST_Y - 28];
        if (tau < tb) {
          const f = smooth(tau / tb), w = wob(10 * (1 - f), 7, rnd(4) * 6);
          push(lerp(S[0], T[0], f) + w[0], lerp(S[1], T[1], f) + w[1], 5.6, 1);
        } else if (outcome === "bind") {
          if (tau < tb + hold) push(T[0], T[1], 6.2, 1, { bound: R.idx });
          else if (tau < tb + hold + 0.35) push(T[0], T[1] - (tau - tb - hold) * 20, 6.2 * (1 - (tau - tb - hold) / 0.35), 1);
        } else {
          const tr = tau - tb, dest = [R.x + (rnd(8) - 0.5) * 120, POST_Y - 75 - 30 * rnd(9)];
          const L = 3.2 + 2.5 * rnd(5);
          if (tr < 0.8) { const f = smooth(tr / 0.8); push(lerp(T[0], dest[0], f), lerp(T[1], dest[1], f), 5.6, 1, { cleft: 1 }); }
          else if (tr < L) { const w = wob(12, 3, rnd(6) * 6); push(dest[0] + w[0], dest[1] + w[1], 5.6, tr > L - 0.8 ? (L - tr) / 0.8 : 1, { cleft: 1 }); }
        }
      } else if (outcome === "clear") {
        const kind = spInfo.clear.kind;
        if (kind === "transporter") {
          const list = this.transporters.filter((q) => q.species === sp);
          const Tp = list[Math.floor(rnd(12) * list.length) % list.length];
          const tc = 1.5 + 0.8 * rnd(4), T = [Tp.x, PRE_Y + 24];
          if (tau < tc) { const f = smooth(tau / tc), w = wob(9 * (1 - f), 6, rnd(4) * 6); push(lerp(S[0], T[0], f) + w[0], lerp(S[1], T[1], f) + w[1], 5.6, 1, { cleft: 1 }); }
          else if (tau < tc + 0.5) { const f = (tau - tc) / 0.5; push(T[0], T[1] - 16 * f, 5.6 * (1 - f), 1); }
        } else if (kind === "enzyme") {
          const list = this.cleftEnzymes.filter((q) => q.species === sp);
          const E = list[Math.floor(rnd(12) * list.length) % list.length];
          const tc = 1.7 + 0.8 * rnd(4), T = [E.x, E.y - 10];
          if (tau < tc) { const f = smooth(tau / tc), w = wob(9 * (1 - f), 6, rnd(4) * 6); push(lerp(S[0], T[0], f) + w[0], lerp(S[1], T[1], f) + w[1], 5.6, 1, { cleft: 1 }); }
          else if (tau < tc + 0.8) { const f = (tau - tc) / 0.8; push(T[0] - 12 * f, T[1] - 4 * f, 3.4, 1 - f); push(T[0] + 12 * f, T[1] + 6 * f, 3.4, 1 - f); }
        } else {
          const dir = rnd(5) < 0.5 ? -1 : 1, L = 3.2;
          if (tau < L) push(S[0] + dir * (40 + 90 * tau), S[1] + 50 * smooth(tau / L), 5.6, 1 - tau / L, { cleft: 1 });
        }
      } else if (late) {
        // wanders in the cleft, then finds a receptor and binds late (re-binding)
        const dest = [(v ? v.x : S[0]) + (rnd(6) - 0.5) * 240, PRE_Y + 38 + 62 * rnd(7)];
        const tw = 1.3 + 0.8 + 2.2 * rnd(17), tt = 0.9, hold = 0.8;
        const T = [late.x + (rnd(13) - 0.5) * 10, POST_Y - 28];
        if (tau < tw) {
          const f = smooth(Math.min(1, tau / 1.3)), w = wob(14, 3, rnd(8) * 6);
          push(lerp(S[0], dest[0], f) + w[0] * f, lerp(S[1], dest[1], f) + w[1] * f, 5.6, 1, { cleft: 1 });
        } else if (tau < tw + tt) {
          const f = smooth((tau - tw) / tt);
          push(lerp(dest[0], T[0], f), lerp(dest[1], T[1], f), 5.6, 1, { cleft: 1 });
        } else if (tau < tw + tt + hold) push(T[0], T[1], 6.2, 1, { bound: late.idx });
        else if (tau < tw + tt + hold + 0.35) push(T[0], T[1] - (tau - tw - tt - hold) * 20, 6.2 * (1 - (tau - tw - tt - hold) / 0.35), 1);
      } else {
        const L = 3.5 + 3 * rnd(5);
        const dest = [(v ? v.x : S[0]) + (rnd(6) - 0.5) * 240, PRE_Y + 38 + 62 * rnd(7)];
        if (tau < L) {
          const f = smooth(Math.min(1, tau / 1.3)), w = wob(14, 3, rnd(8) * 6);
          const a = tau > L - 0.8 ? (L - tau) / 0.8 : 1;
          push(lerp(S[0], dest[0], f) + w[0] * f, lerp(S[1], dest[1], f) + w[1] * f, 5.6, a, { cleft: 1 });
        }
      }
    }

    /** Receptor activation levels, cleft count and response at time t (reuses nt()). */
    sample(t, mols) {
      mols = mols || this.nt(t);
      const d = this.drug, act = d.action;
      const act_r = this.post.map(() => 0);
      let cleft = 0, resp = 0;
      mols.forEach((m) => {
        if (m.cleft) cleft++;
        if (m.bound !== undefined) {
          let w = 1;
          const s = this.sites.find((q) => q.ref === this.post[m.bound]);
          if (act === "pam" && s) w = 1 + 1.4 * this.siteE(s, t);
          if (act === "channel_blocker" && s) w = 1 - 0.9 * this.siteE(s, t);
          act_r[m.bound] += w;
          resp += w;
        }
      });
      const eff = act === "partial_agonist" ? (d.efficacy || 0.5) : 1;
      if (act === "receptor_agonist" || act === "partial_agonist") {
        this.sites.forEach((s) => {
          if (s.kind === "receptor" && this.post.includes(s.ref)) {
            const a = 0.75 * eff * this.siteE(s, t);
            act_r[s.ref.idx] += a;
            resp += a;
          }
        });
      }
      if (act === "intracellular_modulator") {
        const f = 1 - 0.5 * this.avgE(t);
        resp *= f;
        for (let i = 0; i < act_r.length; i++) act_r[i] *= f;
      }
      return { cleft, resp, act_r };
    }

    computeRefs() {
      let c = 0, r = 0, n = 0;
      for (let t = 4.5; t <= 9.8; t += 0.1) { const s = this.sample(t); c += s.cleft; r += s.resp; n++; }
      this.refCleft = Math.max(1, c / n);
      this.refResp = Math.max(0.25, r / n);
    }

    gauges(t) {
      let c = 0, r = 0;
      for (let i = 0; i < 6; i++) { const s = this.sample(Math.max(0, t - i * 0.4)); c += s.cleft; r += s.resp; }
      return { cleft: c / 6 / this.refCleft, resp: r / 6 / this.refResp };
    }

    responseLabel() {
      if (this.drug.action === "intracellular_modulator") return "Downstream (second-messenger) signal";
      const sp = this.drug.receptors.map((k) => C.RECEPTORS[k] && C.RECEPTORS[k].species);
      if (sp.some((s) => s === "gaba" || s === "opioid")) return "Inhibitory signal received";
      if (sp.some((s) => s === "glutamate" || s === "acetylcholine")) return "Excitatory signal received";
      return "Signal received by the postsynaptic neuron";
    }

    /* -------------------------------------------------------------------- render */
    render(t) {
      t = ((t % LOOP) + LOOP) % LOOP;
      const d = this.drug, act = d.action;
      const mols = this.nt(t);
      const s = this.sample(t, mols);

      // vesicles
      this.vesicles.forEach((v, idx) => {
        const ph = (((t - v.off) / CYCLE) % 1 + 1) % 1;
        const k = Math.floor((t - v.off) / CYCLE);
        const gated = hash(v.i, k, 11, 3) < (0.82 * (1 - this.inhibitoryRelease() * this.avgE(v.off + (k + FUSE) * CYCLE)));
        let y = v.y, sc = 1, alpha = 1, dots = true;
        const yMem = PRE_Y - 27;
        if (ph < 0.28) y = v.y;
        else if (ph < FUSE) y = lerp(v.y, yMem, smooth((ph - 0.28) / (FUSE - 0.28)));
        else if (gated) {
          if (ph < 0.70) { y = yMem; sc = lerp(1, 0.25, smooth((ph - FUSE) / 0.25)); alpha = lerp(1, 0.3, smooth((ph - FUSE) / 0.25)); dots = false; }
          else { y = lerp(yMem, v.y, smooth((ph - 0.70) / 0.3)); sc = lerp(0.25, 1, smooth((ph - 0.70) / 0.3)); alpha = lerp(0.3, 1, smooth((ph - 0.70) / 0.3)); dots = ph > 0.88; }
        } else {
          y = lerp(yMem, v.y, smooth((ph - FUSE) / 0.3));
        }
        const e = this.vesEls[idx];
        e.g.setAttribute("transform", "translate(" + v.x + " " + y + ") scale(" + sc + ")");
        e.g.setAttribute("opacity", alpha);
        const boost = (act === "precursor" || (act === "enzyme_inhibitor" && (d.actsOn.includes("MAO") || d.actsOn.includes("GABA-T"))) || (act === "k_channel_modulator" && d.kdir === "block")) ? this.avgE(t) : 0;
        const depleted = (act === "releaser" || act === "vesicle_loading_inhibitor") ? this.avgE(t) : 0;
        const nShow = Math.round(Math.max(2, 5 + 4 * boost - 4 * depleted));
        e.dots.forEach((dot, q) => dot.setAttribute("opacity", dots && q < nShow ? 1 : 0));
      });

      // molecules
      mols.forEach((m, i) => {
        const p = this.mol(i);
        p.g.setAttribute("opacity", m.a);
        p.g.setAttribute("transform", "translate(" + m.x + " " + m.y + ")");
        p.dot.setAttribute("r", m.r); p.dot.setAttribute("fill", m.color);
        p.glow.setAttribute("fill", m.color); p.glow.setAttribute("r", m.r * 1.8);
      });
      for (let i = mols.length; i < this.molPool.length; i++) if (this.molPool[i]) this.molPool[i].g.setAttribute("opacity", 0);

      // receptors
      this.recEls.forEach((re, i) => {
        const a = clamp(s.act_r[i], 0, 3);
        re.halo.setAttribute("opacity", clamp(a * 0.35, 0, 0.85));
        re.gp.setAttribute("opacity", 0.45 + clamp(a, 0, 1) * 0.55);
        const site = this.sites.find((q) => q.ref === this.post[i]);
        let x = 0;
        if (site && act === "receptor_antagonist") x = this.siteE(site, t);
        if (site && act === "channel_blocker") x = 0;
        re.xmark.setAttribute("opacity", x);
      });
      this.preEls.forEach((re, i) => {
        const site = this.sites.find((q) => q.ref === this.pre[i]);
        const e = site ? this.siteE(site, t) : 0;
        re.halo.setAttribute("opacity", act === "receptor_agonist" || act === "partial_agonist" ? e * 0.5 : 0);
        re.xmark.setAttribute("opacity", site && act === "receptor_antagonist" ? e : 0);
      });

      // transporters / enzymes blocked markers
      this.transEls.forEach((te, i) => {
        const site = this.sites.find((q) => q.ref === this.transporters[i]);
        const e = site ? this.siteE(site, t) : 0;
        te.x.setAttribute("opacity", act === "reuptake_inhibitor" ? e : 0);
        te.rev.setAttribute("opacity", act === "releaser" ? e : 0);
      });
      this.enzEls.forEach((ee, i) => {
        const site = this.sites.find((q) => q.ref === this.cleftEnzymes[i]);
        ee.x.setAttribute("opacity", site && act === "enzyme_inhibitor" ? this.siteE(site, t) : 0);
      });

      if (this.kvEls.length) this.kvEls.forEach((k, i) => {
        const site = this.sites.find((q) => q.ref === this.kv[i]);
        k.x.setAttribute("opacity", site && d.kdir === "block" ? this.siteE(site, t) : 0);
      });
      if (this.cascEls) this.renderCascade(t, s);
      this.renderIons(t, s);
      this.renderDrug(t);
      this.renderAP(t);
    }

    /** Second-messenger cascade: pulses travel down each branch; a blocked branch dims and thins. */
    renderCascade(t, s) {
      const g = this.gCascPulse;
      g.innerHTML = "";
      const act = clamp((s.act_r[Math.min(2, this.post.length - 1)] || 0) + (s.act_r[Math.min(3, this.post.length - 1)] || 0), 0, 3);
      const drive = 0.35 + 0.65 * clamp(act, 0, 1);
      ["IMPase", "GSK3B"].forEach((k) => {
        const site = this.sites.find((q) => q.ref === this.casc[k]);
        this.cascEls.x[k].setAttribute("opacity", site ? this.siteE(site, t) : 0);
      });
      this.cascPaths.forEach((cp, ci) => {
        const site = cp.blocked ? this.sites.find((q) => q.ref === this.casc[cp.blocked]) : null;
        const block = site ? this.siteE(site, t) : 0;
        const n = Math.max(1, Math.round(3 * drive * (1 - 0.7 * block)));
        for (let q = 0; q < n; q++) {
          const f = (((t * 0.28 + q / n + hash(ci, q, 5, 5) * 0.2) % 1) + 1) % 1;
          // a pulse stalls part-way along the branch when its enzyme is blocked
          const ff = cp.blocked ? Math.min(f, lerp(1, 0.62, block)) : f;
          const p = pathPoint(cp.pts, ff);
          const a = (1 - 0.65 * block * (f > 0.62 ? 1 : 0)) * Math.min(1, f * 5, (1 - f) * 5 + 0.2);
          el("circle", { cx: p[0], cy: p[1], r: 4, fill: "#b9bdf5", opacity: clamp(a, 0, 1) * 0.95 }, g);
        }
      });
    }

    renderIons(t, s) {
      const g = this.gIons;
      g.innerHTML = "";
      const act = this.drug.action;
      // Ca2+ through VGCC just before fusion; reduced by Ca-channel ligands
      const caF = act === "ca_channel_ligand" ? 1 - 0.65 * this.avgE(t) : 1;
      this.vgcc.forEach((c, j) => {
        const per = CYCLE * 0.5, ph = (t / per + hash(j, 2, 2, 2)) % 1, kk = Math.floor(t / per + hash(j, 2, 2, 2));
        if (ph < 0.5 && hash(j, kk, 7, 1) < 0.9 * caF) {
          const f = ph / 0.5, y = lerp(PRE_Y + 40, PRE_Y - 30, f);
          this.ion(g, c.x + 0, y, "Ca²⁺", "#d9b862", 1 - Math.abs(f - 0.5));
        }
      });
      // ions through ionotropic receptors (and K+ efflux for inhibitory agonists)
      this.post.forEach((r, i) => {
        const a = clamp(s.act_r[i], 0, 3);
        if (r.kind === "ionotropic" && a > 0.12) {
          const n = Math.min(4, Math.round(a * 2 + 0.4));
          const inward = r.ion;
          for (let q = 0; q < n; q++) {
            const f = ((t * 0.9 + q / n + hash(i, q, 1, 1)) % 1);
            this.ion(g, r.x + (q % 2 ? 3 : -3), lerp(POST_Y - 30, POST_Y + 62, f), inward, "#e8f1ff", 1 - Math.abs(f - 0.5) * 0.9);
          }
        }
        if (r.inhibitory && (act === "receptor_agonist" || act === "partial_agonist")) {
          const site = this.sites.find((q) => q.ref === r);
          const e = site ? this.siteE(site, t) * (act === "partial_agonist" ? (this.drug.efficacy || 0.5) : 1) : 0;
          if (e > 0.1) {
            const f = ((t * 0.7 + hash(i, 5, 1, 1)) % 1);
            this.ion(g, r.x + 36, lerp(POST_Y + 70, POST_Y - 6, f), "K⁺", "#e6b866", e * (1 - Math.abs(f - 0.5)));
          }
        }
      });
      // K+ channel openers: K+ leaves through the open channels
      if (act === "k_channel_modulator" && this.drug.kdir !== "block") {
        this.kv.forEach((c, j) => {
          const site = this.sites.find((q) => q.ref === c);
          const e = site ? this.siteE(site, t) : 0;
          if (e < 0.1) return;
          for (let q = 0; q < 2; q++) {
            const f = ((t * 0.8 + q / 2 + hash(j, q, 6, 1)) % 1);
            this.ion(g, c.x + (q ? 4 : -4), lerp(PRE_Y - 26, PRE_Y + 52, f), "K⁺", "#e6b866", e * (1 - Math.abs(f - 0.5) * 1.2));
          }
        });
      }
      // Na+ channel / axon: no ions drawn (action potential drawn separately)
      const kvis = this.drug.action.includes("agonist") && this.post.some((r) => r.inhibitory) ? clamp(this.avgE(t), 0, 1) : 0;
      const kr = this.post.find((r) => r.inhibitory);
      if (kr) { this.kLabel.setAttribute("x", kr.x + 54); this.kLabel.setAttribute("y", POST_Y + 40); }
      this.kLabel.setAttribute("opacity", kvis > 0.3 ? kvis : 0);
    }

    ion(g, x, y, label, color, a) {
      const n = el("g", { transform: "translate(" + x + " " + y + ")", opacity: clamp(a, 0, 1) }, g);
      el("circle", { r: 8.5, fill: "#0b1426", stroke: color, "stroke-width": 1.4 }, n);
      const t = el("text", { y: 3.4, "text-anchor": "middle", class: "ion" }, n);
      t.textContent = label;
      t.setAttribute("fill", color);
    }

    renderDrug(t) {
      const sites = this.sites;
      let first = null;
      this.drugMols.forEach((m, i) => {
        const g = this.drugEls[i];
        const t0 = T_ARRIVE + 0.35 * i, dur = 3.3;
        const site = m.site;
        const u = (t - t0) / dur;
        if (u < 0) { g.setAttribute("opacity", 0); return; }
        let x, y, a = 1;
        if (site) {
          const through = site.inside;
          const pts = site.post
            ? [[1040, 300 + 25 * hash(i, 1, 1, 1)], [site.x + 160, 320], [site.x, POST_Y - 30], [site.x, POST_Y + 34], [site.x, site.y]]
            : through
            ? [[1040, 300 + 25 * hash(i, 1, 1, 1)], [site.x + 160, 306], [site.x, PRE_Y + 40], [site.x, PRE_Y - 30], [site.x, site.y]]
            : [[1040, 280 + 40 * hash(i, 1, 1, 1)], [site.x + 170, 300 + 10 * Math.sin(i)], [site.x, site.y]];
          if (site.axon) pts.splice(3, 0, [site.x + (site.x < 500 ? 40 : -40), 90]);
          const p = pathPoint(pts, smooth(u));
          x = p[0]; y = p[1];
          if (through && !site.post && y > PRE_Y - 16 && y < PRE_Y + 16 && u < 1) a = 0.55;
          if (site.post && y > POST_Y - 16 && y < POST_Y + 16 && u < 1) a = 0.55;
          if (u >= 1) { x += 1.5 * Math.sin(t * 2 + i); y += 1.5 * Math.cos(t * 2.3 + i); }
        } else {
          const home = [880 - 38 * (i % 3), 300 + 18 * (i % 2) + 6 * Math.sin(t + i)];
          const p = pathPoint([[1040, 280 + 30 * (i % 3)], [home[0] + 100, 300], home], smooth(u));
          x = p[0] + (u >= 1 ? 4 * Math.sin(t * 1.3 + i) : 0); y = p[1] + (u >= 1 ? 4 * Math.cos(t * 1.1 + i) : 0);
        }
        g.setAttribute("opacity", a);
        g.setAttribute("transform", "translate(" + x + " " + y + ")");
        if (!first) first = { x, y };
      });
      if (first) {
        this.drugLabel.setAttribute("x", first.x);
        this.drugLabel.setAttribute("y", first.y - 24);
        this.drugLabel.setAttribute("opacity", clamp((t - T_ARRIVE) / 1.2, 0, 1));
      } else this.drugLabel.setAttribute("opacity", 0);
    }

    renderAP(t) {
      const per = CYCLE, ph = ((t / per) % 1 + 1) % 1;
      const k = Math.floor(t / per);
      let f = ph / 0.30;
      let alpha = ph < 0.30 ? 1 : 0;
      if (this.drug.action === "na_channel_blocker") {
        const e = this.avgE(t);
        alpha *= 1 - 0.75 * e * (f > 0.35 ? 1 : 0.2);
      }
      const y = lerp(-6, 48, clamp(f, 0, 1));
      this.apEl.setAttribute("cx", 500);
      this.apEl.setAttribute("cy", y);
      this.apEl.setAttribute("opacity", alpha);
    }

    /* ------------------------------------------------------------------- captions */
    phaseAt(t) {
      t = ((t % LOOP) + LOOP) % LOOP;
      return PHASES.find((p) => t >= p.t0 && t < p.t1) || PHASES[PHASES.length - 1];
    }

    caption(phaseId) {
      const d = this.drug, A = ACTIONS[d.action];
      const sp = TXT.names(d);
      const recs = Array.from(new Set(this.post.map((r) => r.label)));
      const clr = this.species.map((s) => {
        const c = C.SPECIES[s].clear;
        return c.kind === "diffusion" ? "diffusion" : c.kind === "enzyme" ? c.full : c.full.toLowerCase();
      });
      switch (phaseId) {
        case "baseline":
          return "Before the drug: nerve impulses make vesicles fuse with the presynaptic membrane and release " + sp + " into the synaptic cleft. It binds " + TXT.join(recs) + " on the postsynaptic membrane, and what is left is cleared by " + TXT.join(Array.from(new Set(clr))) + ".";
        case "arrive":
          return d.name + " (" + A.label.toLowerCase() + ") reaches the synapse.";
        case "bind":
          return d.bindText || A.bind(d);
        default:
          return d.effectText || A.effect(d);
      }
    }

    legend() {
      const items = this.species.map((s) => ({ color: C.SPECIES[s].color, text: C.SPECIES[s].name }));
      items.push({ color: DRUG, text: this.drug.name + " (drug)", hex: true });
      return items;
    }
  }

  global.SynapseScene = SynapseScene;
  global.SYN_PHASES = PHASES;
  global.SYN_LOOP = LOOP;
})(window);
