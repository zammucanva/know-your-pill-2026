/* KYP Synapse Studio — app shell: search, views, playback, gauges, drug panel, custom drugs. */
(function () {
  "use strict";
  const { clamp, esc } = KYPU;
  const C = KYP_CORE, LIB = KYP_DRUGS, ACTIONS = KYP_ACTIONS, TXT = KYP_TEXT;
  const $ = (id) => document.getElementById(id);
  const LOOP = SYN_LOOP;
  const LS_KEY = "kyp-synapse-custom-v1";

  const syn = new SynapseScene($("svgSyn"));
  const brain = new BrainScene($("svgBrain"), (rid) => go("synapse", rid));
  const S = { drug: null, view: "brain", region: null, t: 0, playing: true, speed: 1, lastPhase: "" };

  /* ----------------------------------------------------------- custom drug storage */
  function validateDrug(o) {
    const err = [];
    const need = (c, m) => { if (!c) err.push(m); };
    need(o && typeof o === "object", "Entry must be a JSON object.");
    if (!o || typeof o !== "object") return err;
    need(typeof o.id === "string" && /^[a-z0-9_-]+$/.test(o.id), 'id: lowercase letters/digits/-/_ (e.g. "my-drug").');
    need(typeof o.name === "string" && o.name.trim(), "name: required.");
    need(typeof o.class === "string", "class: required (e.g. \"SSRI\").");
    need(Array.isArray(o.species) && o.species.length > 0 && o.species.every((s) => C.SPECIES[s]), "species: array of: " + Object.keys(C.SPECIES).join(", "));
    need(Array.isArray(o.receptors) && o.receptors.every((r) => C.RECEPTORS[r]), "receptors: array of: " + Object.keys(C.RECEPTORS).join(", "));
    need(typeof o.action === "string" && ACTIONS[o.action], "action: one of: " + Object.keys(ACTIONS).join(", "));
    need(Array.isArray(o.actsOn) && o.actsOn.length > 0, "actsOn: non-empty array of target labels (e.g. [\"SERT\"], [\"D2\"], [\"MAO\"], [\"GABA-A\"], [\"Nav\"], [\"VGCC\"]).");
    need(Array.isArray(o.regions) && o.regions.every((r) => C.REGIONS[r.id] && ["up", "down", "mixed"].includes(r.effect)), "regions: [{id, effect: up|down|mixed, note}] with ids from: " + Object.keys(C.REGIONS).join(", "));
    need(Array.isArray(o.pathways) && o.pathways.every((p) => C.PATHWAYS[p.id] && ["up", "down", "mixed"].includes(p.effect)), "pathways: [{id, effect}] with ids from: " + Object.keys(C.PATHWAYS).join(", "));
    if (!err.length) {
      // actsOn must resolve to something the scene can draw
      const known = new Set(Object.keys(C.RECEPTORS).concat(Object.keys(C.ENZYMES), ["Nav", "VGCC"], Object.values(C.SPECIES).map((s) => s.clear.label)));
      o.actsOn.forEach((a) => { if (!known.has(a)) err.push('actsOn: unknown target "' + a + '".'); });
    }
    return err;
  }
  function loadCustom() {
    try {
      const arr = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      arr.forEach((o) => { if (!validateDrug(o).length) { o.custom = true; o.evidence = o.evidence || "User-added entry — not reviewed."; o.aliases = o.aliases || []; LIB[o.id] = o; } });
    } catch (e) { /* ignore */ }
  }
  function saveCustom(o) {
    let arr = [];
    try { arr = JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch (e) { arr = []; }
    arr = arr.filter((x) => x.id !== o.id); arr.push(o);
    try { localStorage.setItem(LS_KEY, JSON.stringify(arr)); } catch (e) { /* ignore */ }
  }

  /* --------------------------------------------------------------------- search */
  const q = $("q"), sug = $("suggest");
  function matches(text) {
    text = text.trim().toLowerCase();
    const all = Object.values(LIB);
    if (!text) return all.slice().sort((a, b) => a.name.localeCompare(b.name)).slice(0, 12);
    return all.filter((d) => (d.name + " " + d.aliases.join(" ") + " " + d.class + " " + d.id).toLowerCase().includes(text))
      .sort((a, b) => (a.name.toLowerCase().startsWith(text) ? 0 : 1) - (b.name.toLowerCase().startsWith(text) ? 0 : 1) || a.name.localeCompare(b.name)).slice(0, 10);
  }
  let selIdx = -1, cur = [];
  function showSuggest() {
    cur = matches(q.value); selIdx = -1;
    sug.innerHTML = cur.length ? cur.map((d, i) => '<li data-i="' + i + '"><span>' + esc(d.name) + '</span><small>' + esc(d.class) + '</small></li>').join("") : '<li><span>No match in the library</span><small>Use "+ Add a medication"</small></li>';
    sug.hidden = false;
  }
  q.addEventListener("input", showSuggest);
  q.addEventListener("focus", showSuggest);
  q.addEventListener("keydown", (e) => {
    const items = sug.querySelectorAll("li[data-i]");
    if (e.key === "ArrowDown") { selIdx = Math.min(items.length - 1, selIdx + 1); e.preventDefault(); }
    else if (e.key === "ArrowUp") { selIdx = Math.max(0, selIdx - 1); e.preventDefault(); }
    else if (e.key === "Enter") { const d = cur[selIdx >= 0 ? selIdx : 0]; if (d) pick(d.id); return; }
    else if (e.key === "Escape") { sug.hidden = true; return; }
    items.forEach((li, i) => li.classList.toggle("sel", i === selIdx));
  });
  sug.addEventListener("mousedown", (e) => { const li = e.target.closest("li[data-i]"); if (li) pick(cur[+li.dataset.i].id); });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) sug.hidden = true; });
  function pick(id) { sug.hidden = true; q.value = LIB[id].name; setDrug(id); }

  /* ------------------------------------------------------------------ drug / views */
  function setDrug(id) {
    const d = LIB[id];
    if (!d) return;
    S.drug = d; S.region = null; S.t = 0;
    $("empty").hidden = true;
    brain.setDrug(d);
    syn.setDrug(d, {});
    renderPanel(d);
    go("brain");
    history.replaceState(null, "", "#" + id);
  }

  function go(view, regionId) {
    if (!S.drug) return;
    S.view = view; S.region = regionId || null; S.lastPhase = "";
    const isSyn = view === "synapse";
    $("tabBrain").classList.toggle("active", !isSyn); $("tabBrain").setAttribute("aria-selected", String(!isSyn));
    $("tabSyn").classList.toggle("active", isSyn); $("tabSyn").setAttribute("aria-selected", String(isSyn));
    if (isSyn) {
      const R = regionId ? C.REGIONS[regionId] : null;
      if (R) {
        const box = $("svgBrain").getBoundingClientRect();
        const VB = BrainScene.VB;
        const sc = Math.min(box.width / VB.w, box.height / VB.h);
        const ox = (box.width - VB.w * sc) / 2, oy = (box.height - VB.h * sc) / 2;
        $("svgBrain").style.transformOrigin = (ox + (R.cx - VB.x) * sc) + "px " + (oy + (R.cy - VB.y) * sc) + "px";
      }
      $("svgBrain").classList.add("zoomed");
      $("svgBrain").classList.remove("on");
      $("svgSyn").classList.add("on");
    } else {
      $("svgBrain").classList.remove("zoomed");
      $("svgBrain").classList.add("on");
      $("svgSyn").classList.remove("on");
    }
    const ctx = $("ctxbar");
    if (isSyn && regionId) {
      const aff = S.drug.regions.find((r) => r.id === regionId);
      ctx.hidden = false;
      ctx.innerHTML = "Zoomed into <b>" + esc(C.REGIONS[regionId].name) + "</b>" + (aff && aff.note ? " — " + esc(aff.note) : "");
    } else ctx.hidden = true;
    $("btnBack").hidden = !isSyn;
    $("btnZoom").hidden = isSyn;
    $("lblAll").style.display = isSyn ? "none" : "";
    $("gauges").hidden = !isSyn;
    $("brainNote").hidden = isSyn;
    renderLegend(); renderPhases(); updateGauges(); tick(0, true);
    $("stage").classList.toggle("nolabels", !$("chkLabels").checked);
    $("stage").classList.toggle("v-syn", isSyn); $("stage").classList.toggle("v-brain", !isSyn);
  }

  function active() { return S.view === "synapse" ? syn : brain; }

  function renderLegend() {
    const items = active().legend();
    $("legend").innerHTML = items.map((i) => '<span><i class="' + (i.hex ? "hex" : "") + '" style="background:' + i.color + '"></i>' + esc(i.text) + "</span>").join("");
  }
  function phases() { return S.view === "synapse" ? SYN_PHASES : BRAIN_PHASES; }
  function renderPhases() {
    $("phases").innerHTML = phases().map((p) => '<button type="button" class="chip" data-id="' + p.id + '">' + esc(p.name) + "</button>").join("");
    $("phases").querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
      const p = phases().find((x) => x.id === b.dataset.id); S.t = p.t0 + 0.05; tick(0, true);
    }));
  }

  /* -------------------------------------------------------------------- panel */
  const EFF = { up: ["u", "↑ more signalling"], down: ["d", "↓ less signalling"], mixed: ["m", "⇄ modulated"] };
  function renderPanel(d) {
    const A = ACTIONS[d.action];
    const aka = d.aliases && d.aliases.length ? "Also known as: " + d.aliases.join(", ") : "";
    const regs = d.regions.map((r) => {
      const e = EFF[r.effect];
      return '<li data-r="' + r.id + '"><b>' + esc(C.REGIONS[r.id].name) + ' <span class="' + e[0] + '">' + e[1] + "</span></b>" + (r.note ? "<small>" + esc(r.note) + "</small>" : "") + "</li>";
    }).join("");
    $("panel").innerHTML =
      "<h2>" + esc(d.name) + "</h2>" + (aka ? '<p class="aka">' + esc(aka) + "</p>" : "") +
      '<span class="tag">' + esc(d.class) + '</span><span class="tag amber">' + esc(A.label) + "</span>" + (d.custom ? '<span class="tag">your entry</span>' : "") +
      (d.uses ? '<h3>Used for</h3><p>' + esc(d.uses) + "</p>" : "") +
      "<h3>What it does (plain words)</h3><p>" + esc(d.effectText || A.effect(d)) + "</p>" + (d.extra ? '<p class="small">' + esc(d.extra) + "</p>" : "") +
      "<h3>Brain regions (click to zoom in)</h3><ul class=\"rlist\">" + regs + "</ul>" +
      (d.onset ? "<h3>Timing</h3><p>" + esc(d.onset) + "</p>" : "") +
      (d.simplifications ? '<h3>What this animation simplifies</h3><p class="small">' + esc(d.simplifications) + "</p>" : "") +
      '<h3>Basis</h3><p class="small">' + esc(d.evidence) + "</p>";
    $("panel").querySelectorAll(".rlist li").forEach((li) => li.addEventListener("click", () => go("synapse", li.dataset.r)));
  }

  /* ------------------------------------------------------------------- gauges */
  function updateGauges() {
    if (S.view !== "synapse" || !S.drug) return;
    const g = syn.gauges(S.t);
    $("gL2").textContent = syn.responseLabel();
    const c = clamp(g.cleft / 3, 0, 1), r = clamp(g.resp / 2.2, 0, 1);
    $("g1").style.width = (c * 100) + "%"; $("g2").style.width = (r * 100) + "%";
    const ticks = document.querySelectorAll("#gauges .tick");
    ticks[0].style.left = (100 / 3) + "%"; ticks[1].style.left = (100 / 2.2) + "%";
    $("gV1").textContent = Math.round(g.cleft * 100) + "%"; $("gV2").textContent = Math.round(g.resp * 100) + "%";
  }

  /* ----------------------------------------------------------------- playback */
  let last = 0;
  function tick(now, force) {
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    if (S.drug) {
      if (S.playing && !force) S.t = (S.t + dt * S.speed) % LOOP;
      const sc = active();
      sc.render(S.t);
      const ph = sc.phaseAt(S.t);
      if (ph.id !== S.lastPhase || force) {
        S.lastPhase = ph.id;
        $("caption").textContent = sc.caption(ph.id);
        $("phases").querySelectorAll(".chip").forEach((b) => b.classList.toggle("active", b.dataset.id === ph.id));
      }
      $("scrub").value = S.t;
      if (S.view === "synapse" && (!force || true)) updateGauges();
    }
  }
  let lastDraw = 0;
  function loop(now) {
    if (!fpsCap || now - lastDraw >= 1000 / fpsCap - 2) { lastDraw = now; tick(now, false); }
    requestAnimationFrame(loop);
  }

  /* --------------------------------------------------------------- UI wiring */
  $("btnPlay").addEventListener("click", () => { S.playing = !S.playing; $("btnPlay").innerHTML = S.playing ? "&#10074;&#10074;" : "&#9654;"; });
  $("scrub").addEventListener("input", () => { S.t = parseFloat($("scrub").value); tick(0, true); });
  $("speed").addEventListener("change", () => (S.speed = parseFloat($("speed").value)));
  $("tabBrain").addEventListener("click", () => go("brain"));
  $("tabSyn").addEventListener("click", () => go("synapse", S.region || (S.drug && S.drug.regions[0] && S.drug.regions[0].id) || null));
  $("btnBack").addEventListener("click", () => go("brain"));
  $("btnZoom").addEventListener("click", () => go("synapse", S.drug.regions[0] && S.drug.regions[0].id));
  $("chkLabels").addEventListener("change", () => $("stage").classList.toggle("nolabels", !$("chkLabels").checked));
  $("chkAll").addEventListener("change", () => { brain.setShowAll($("chkAll").checked); tick(0, true); });
  document.addEventListener("keydown", (e) => { if (e.code === "Space" && !/INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ""))) { e.preventDefault(); $("btnPlay").click(); } });

  const dlg = $("dlg");
  const TEMPLATE = JSON.stringify({
    id: "my-drug", name: "My drug", aliases: [], class: "SSRI (example)", uses: "Example use",
    species: ["serotonin"], receptors: ["5-HT1A"], action: "reuptake_inhibitor", actsOn: ["SERT"],
    regions: [{ id: "pfc", effect: "up", note: "Example note" }], pathways: [{ id: "serotonergic", effect: "up" }],
    onset: "Example timing", simplifications: "What this animation leaves out", evidence: "Source you used",
  }, null, 2);
  $("btnAdd").addEventListener("click", () => { $("dlgText").value = TEMPLATE; $("dlgErr").hidden = true; dlg.showModal(); });
  $("dlgCancel").addEventListener("click", (e) => { e.preventDefault(); dlg.close(); });
  $("dlgSave").addEventListener("click", () => {
    let o;
    try { o = JSON.parse($("dlgText").value); } catch (e) { $("dlgErr").hidden = false; $("dlgErr").textContent = "Not valid JSON: " + e.message; return; }
    const errs = validateDrug(o);
    if (errs.length) { $("dlgErr").hidden = false; $("dlgErr").textContent = errs.join("\n"); return; }
    o.custom = true; o.aliases = o.aliases || []; o.evidence = o.evidence || "User-added entry — not reviewed.";
    LIB[o.id] = o; saveCustom(o); dlg.close(); pick(o.id);
  });

  loadCustom();
  window.__app = { setDrug, go, S, syn, brain, validateDrug, LIB };
  // full screen page + controls
  const col = $("stageCol"), fsSel = $("fsDrug");
  function fillFsSelect() {
    const all = Object.keys(LIB).sort((x, y) => LIB[x].name.localeCompare(LIB[y].name));
    fsSel.innerHTML = all.map((id) => '<option value="' + id + '">' + esc(LIB[id].name) + "</option>").join("");
    if (S.drug) fsSel.value = S.drug.id;
  }
  function pick(id) {
    if (!LIB[id]) return;
    const view = S.view;
    setDrug(id);
    if (view === "synapse") go("synapse", LIB[id].regions[0] && LIB[id].regions[0].id);
    fsSel.value = id;
  }
  function setFs(on) {
    if (on === col.classList.contains("fs")) return;
    col.classList.toggle("fs", on); document.body.classList.toggle("fs-open", on);
    $("fsbar").hidden = !on;
    if (on) { fillFsSelect(); try { const r = col.requestFullscreen && col.requestFullscreen(); if (r && r.catch) r.catch(() => {}); } catch (e) {} }
    else if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) {} }
    requestAnimationFrame(() => tick(0, true));
  }
  $("btnFs").addEventListener("click", () => setFs(true));
  $("fsExit").addEventListener("click", () => setFs(false));
  $("fsPrev").addEventListener("click", () => { const l = Object.keys(LIB).sort((x, y) => LIB[x].name.localeCompare(LIB[y].name)); pick(l[(l.indexOf(S.drug.id) - 1 + l.length) % l.length]); });
  $("fsNext").addEventListener("click", () => { const l = Object.keys(LIB).sort((x, y) => LIB[x].name.localeCompare(LIB[y].name)); pick(l[(l.indexOf(S.drug.id) + 1) % l.length]); });
  fsSel.addEventListener("change", () => pick(fsSel.value));
  $("fsGfx").addEventListener("click", () => $("dlgGfx").showModal());
  $("fsTheme").addEventListener("click", () => $("btnTheme").click());
  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && col.classList.contains("fs")) setFs(false); });
  document.addEventListener("keydown", (e) => {
    if (/INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ""))) return;
    if (e.key === "f" || e.key === "F") { e.preventDefault(); setFs(!col.classList.contains("fs")); }
    else if (e.key === "Escape" && col.classList.contains("fs")) setFs(false);
    else if (col.classList.contains("fs") && e.key === "ArrowRight") $("fsNext").click();
    else if (col.classList.contains("fs") && e.key === "ArrowLeft") $("fsPrev").click();
  });

  // graphics settings
  const GFX = global_gfx();
  function global_gfx() { return window.KYP_GFX; }
  const gfxEls = { quality: $("gQuality"), detail: $("gDetail"), anatomy: $("gAnatomy"), texture: $("gTexture"), shadows: $("gShadows"), glow: $("gGlow"), pulses: $("gPulses"), fps: $("gFps"), labelSize: $("gLabel"), reduceMotion: $("gMotion") };
  let fpsCap = 60, baseSpeed = null;
  function applyGfx(changed) {
    const g = GFX.get(), st = $("stage");
    st.classList.toggle("gfx-notexture", !g.texture); st.classList.toggle("gfx-noshadow", !g.shadows); st.classList.toggle("gfx-noglow", !g.glow);
    st.classList.toggle("ls-large", g.labelSize === "large");
    fpsCap = g.fps;
    if (g.reduceMotion) { if (baseSpeed === null) baseSpeed = S.speed; S.speed = Math.min(S.speed, 0.5); $("speed").value = String(S.speed); }
    else if (baseSpeed !== null) { S.speed = baseSpeed; $("speed").value = String(S.speed); baseSpeed = null; }
    gfxEls.quality.value = g.quality;
    ["detail", "pulses", "labelSize"].forEach((k) => (gfxEls[k].value = g[k]));
    gfxEls.fps.value = String(g.fps);
    ["anatomy", "texture", "shadows", "glow", "reduceMotion"].forEach((k) => (gfxEls[k].checked = !!g[k]));
    if (S.drug && changed && (changed.includes("detail") || changed.includes("anatomy"))) { brain.setDrug(S.drug); syn.setDrug(S.drug, {}); go(S.view, S.region); }
  }
  GFX.subscribe((g, changed) => applyGfx(changed));
  gfxEls.quality.addEventListener("change", () => GFX.preset(gfxEls.quality.value));
  ["detail", "pulses", "labelSize"].forEach((k) => gfxEls[k].addEventListener("change", () => GFX.set({ [k]: gfxEls[k].value })));
  gfxEls.fps.addEventListener("change", () => GFX.set({ fps: parseInt(gfxEls.fps.value, 10) }));
  ["anatomy", "texture", "shadows", "glow", "reduceMotion"].forEach((k) => gfxEls[k].addEventListener("change", () => GFX.set({ [k]: gfxEls[k].checked })));
  $("gReset").addEventListener("click", () => GFX.reset());
  $("btnGfx").addEventListener("click", () => $("dlgGfx").showModal());
  applyGfx(null);

  // dark / light toggle (remembered per browser; the diagram stage stays dark in both themes)
  const themeBtn = $("btnTheme");
  const applyTheme = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    themeBtn.textContent = t === "dark" ? "☾" : "☀";
    themeBtn.setAttribute("aria-checked", t === "dark" ? "true" : "false");
    themeBtn.setAttribute("aria-label", t === "dark" ? "Dark mode (switch to light)" : "Light mode (switch to dark)");
  };
  let theme = "dark";
  try { theme = localStorage.getItem("kyp-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); } catch (e) {}
  applyTheme(theme);
  themeBtn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("kyp-theme", theme); } catch (e) {}
  });

  const start = (location.hash || "").slice(1);
  setDrug(LIB[start] ? start : "clonazepam");
  q.value = "";
  requestAnimationFrame(loop);
})();
