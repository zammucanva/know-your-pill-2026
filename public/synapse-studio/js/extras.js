/* KYP Synapse Studio: extras wired into app.js. Browse, compare, share/save/print, cross-links to the site and the 3D atlas. */
window.KYPStudioExtras = function (env) {
  "use strict";
  const { root, $, S, LIB, C, ACTIONS, esc, pick, isDead } = env;
  const LINKS = window.KYP_STUDIO_LINKS || { drugPages: [], regionGroup: {} };
  const BASE = window.KYP_SITE_BASE || "";
  const pages = new Set(LINKS.drugPages);
  const all = () => Object.values(LIB).sort((a, b) => a.name.localeCompare(b.name));

  /* ----------------------------------------------------------------- toolbar buttons */
  function btn(id, text, label) {
    const b = document.createElement("button");
    b.id = id; b.type = "button"; b.className = "ghost"; b.textContent = text;
    if (label) b.setAttribute("aria-label", label);
    return b;
  }
  const bar = root.querySelector(".syn-toolbar");
  const bBrowse = btn("btnBrowse", "Browse", "Browse medications by class, target or region");
  const bCompare = btn("btnCompare", "Compare", "Compare two medications");
  bar.insertBefore(bCompare, $("btnAdd")); bar.insertBefore(bBrowse, bCompare);
  const tabs = root.querySelector(".tabs");
  const bShare = btn("btnShare", "Copy link", "Copy a link to this view");
  const bImg = btn("btnImg", "Save image", "Save the current view as an image");
  const bPrint = btn("btnPrint", "Print", "Print this medication");
  [bShare, bImg, bPrint].forEach((b) => { b.classList.add("sharebtn"); tabs.insertBefore(b, $("btnFs")); });

  /* ------------------------------------------------------------------------ dialogs */
  function dialog(id, title, body) {
    const d = document.createElement("dialog");
    d.id = id;
    d.innerHTML = '<div class="dlgbox"><h2>' + esc(title) + "</h2>" + body +
      '<div class="dlgbtn"><button type="button" class="ghost" data-close>Close</button></div></div>';
    d.querySelector("[data-close]").addEventListener("click", () => d.close());
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
    root.appendChild(d);
    return d;
  }

  /* browse */
  const dBrowse = dialog("dlgBrowse", "Browse medications",
    '<div class="brw-ctl"><label>Group by <select id="brwBy"><option value="class">Drug class</option><option value="target">Target</option><option value="species">Neurotransmitter</option><option value="region">Brain region</option></select></label>' +
    '<input id="brwQ" type="search" placeholder="Filter" aria-label="Filter the list"></div><div id="brwList" class="brw-list"></div>');
  const GROUP = {
    class: (d) => [d.class],
    target: (d) => d.actsOn,
    species: (d) => d.species.map((s) => C.SPECIES[s].name),
    region: (d) => d.regions.map((r) => C.REGIONS[r.id].name),
  };
  function renderBrowse() {
    const by = dBrowse.querySelector("#brwBy").value, q = dBrowse.querySelector("#brwQ").value.trim().toLowerCase();
    const groups = {};
    all().forEach((d) => GROUP[by](d).forEach((k) => { (groups[k] = groups[k] || []).push(d); }));
    const keys = Object.keys(groups).sort((a, b) => a.localeCompare(b)).filter((k) => !q || k.toLowerCase().includes(q) || groups[k].some((d) => d.name.toLowerCase().includes(q)));
    dBrowse.querySelector("#brwList").innerHTML = keys.length ? keys.map((k) =>
      "<section><h3>" + esc(k) + " <small>" + groups[k].length + "</small></h3><div class=\"chips\">" +
      groups[k].filter((d) => !q || k.toLowerCase().includes(q) || d.name.toLowerCase().includes(q)).map((d) => '<button type="button" data-id="' + esc(d.id) + '">' + esc(d.name) + "</button>").join("") + "</div></section>").join("")
      : "<p>No match.</p>";
  }
  dBrowse.querySelector("#brwBy").addEventListener("change", renderBrowse);
  dBrowse.querySelector("#brwQ").addEventListener("input", renderBrowse);
  dBrowse.querySelector("#brwList").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-id]"); if (!b) return;
    dBrowse.close(); pick(b.dataset.id);
  });
  bBrowse.addEventListener("click", () => { renderBrowse(); dBrowse.showModal(); });

  /* compare */
  const dCmp = dialog("dlgCompare", "Compare two medications",
    '<div class="cmp-ctl"><select id="cmpA" aria-label="First medication"></select><button type="button" class="ghost" id="cmpSwap" aria-label="Swap" title="Swap">&#8646;</button><select id="cmpB" aria-label="Second medication"></select></div><div id="cmpOut" class="cmp-out"></div>');
  const EFF = { up: "↑ more signalling", down: "↓ less signalling", mixed: "⇄ modulated" };
  function renderCompare() {
    const a = LIB[dCmp.querySelector("#cmpA").value], b = LIB[dCmp.querySelector("#cmpB").value];
    if (!a || !b) return;
    const rows = [
      ["Class", (d) => d.class],
      ["Mechanism shown", (d) => ACTIONS[d.action].label],
      ["Acts on", (d) => d.actsOn.join(", ")],
      ["Neurotransmitters", (d) => d.species.map((s) => C.SPECIES[s].name).join(", ")],
      ["Receptors drawn", (d) => d.receptors.map((r) => C.RECEPTORS[r].label).join(", ")],
      ["Used for", (d) => d.uses],
      ["Timing", (d) => d.onset],
    ];
    let h = "<table><thead><tr><th></th><th>" + esc(a.name) + "</th><th>" + esc(b.name) + "</th></tr></thead><tbody>";
    rows.forEach(([k, f]) => {
      const x = f(a) || "", y = f(b) || "";
      h += "<tr" + (x === y ? ' class="same"' : "") + "><th>" + k + "</th><td>" + esc(x || "Not listed") + "</td><td>" + esc(y || "Not listed") + "</td></tr>";
    });
    const ids = Object.keys(C.REGIONS).filter((r) => a.regions.some((x) => x.id === r) || b.regions.some((x) => x.id === r));
    h += '<tr class="grp"><th colspan="3">Brain regions</th></tr>';
    ids.forEach((r) => {
      const x = a.regions.find((o) => o.id === r), y = b.regions.find((o) => o.id === r);
      const t = (o) => (o ? '<span class="e-' + o.effect + '">' + EFF[o.effect] + "</span>" : "-");
      h += "<tr" + (x && y && x.effect === y.effect ? ' class="same"' : "") + "><th>" + esc(C.REGIONS[r].name) + "</th><td>" + t(x) + "</td><td>" + t(y) + "</td></tr>";
    });
    h += "</tbody></table>";
    h += '<p class="cmp-act"><button type="button" class="ghost" data-open="' + esc(a.id) + '">Animate ' + esc(a.name) + '</button> <button type="button" class="ghost" data-open="' + esc(b.id) + '">Animate ' + esc(b.name) + "</button></p>" +
      '<p class="small">Rows with a tinted background match. Schematic comparison from the studio library, not a dosing or switching guide.</p>';
    dCmp.querySelector("#cmpOut").innerHTML = h;
  }
  dCmp.querySelector("#cmpOut").addEventListener("click", (e) => { const b = e.target.closest("[data-open]"); if (b) { dCmp.close(); pick(b.dataset.open); } });
  dCmp.querySelector("#cmpA").addEventListener("change", renderCompare);
  dCmp.querySelector("#cmpB").addEventListener("change", renderCompare);
  dCmp.querySelector("#cmpSwap").addEventListener("click", () => {
    const A = dCmp.querySelector("#cmpA"), B = dCmp.querySelector("#cmpB"); const t = A.value; A.value = B.value; B.value = t; renderCompare();
  });
  bCompare.addEventListener("click", () => {
    const opts = all().map((d) => '<option value="' + esc(d.id) + '">' + esc(d.name) + "</option>").join("");
    const A = dCmp.querySelector("#cmpA"), B = dCmp.querySelector("#cmpB");
    A.innerHTML = opts; B.innerHTML = opts;
    const cur = S.drug || all()[0];
    const other = all().find((d) => d.id !== cur.id && d.class === cur.class) || all().find((d) => d.id !== cur.id);
    A.value = cur.id; B.value = other.id;
    renderCompare(); dCmp.showModal();
  });

  /* ---------------------------------------------------------------------- share */
  const flash = (b, text) => {
    const old = b.dataset.t || b.textContent; b.dataset.t = old; b.textContent = text;
    setTimeout(() => { if (!isDead()) b.textContent = old; }, 1600);
  };
  bShare.addEventListener("click", () => {
    const url = location.href;
    const done = () => flash(bShare, "Link copied");
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => flash(bShare, "Copy failed"));
    else {
      const t = document.createElement("textarea"); t.value = url; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (e) { flash(bShare, "Copy failed"); }
      t.remove();
    }
  });
  bPrint.addEventListener("click", () => window.print());

  const STYLE_PROPS = ["fill", "fill-opacity", "stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "stroke-linecap", "stroke-linejoin", "opacity", "display", "visibility", "font-family", "font-size", "font-weight", "font-style", "letter-spacing", "text-anchor", "dominant-baseline", "paint-order", "filter", "mix-blend-mode"];
  async function dataUrl(href) {
    const r = await fetch(href); const blob = await r.blob();
    return new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
  }
  async function saveImage() {
    const svg = S.view === "synapse" ? $("svgSyn") : $("svgBrain");
    const box = $("stage").getBoundingClientRect();
    const W = Math.round(box.width), H = Math.round(box.height);
    const clone = svg.cloneNode(true);
    const src = [svg, ...svg.querySelectorAll("*")], dst = [clone, ...clone.querySelectorAll("*")];
    src.forEach((el, i) => {
      const cs = getComputedStyle(el); let st = "";
      STYLE_PROPS.forEach((p) => { const v = cs.getPropertyValue(p); if (v) st += p + ":" + v + ";"; });
      dst[i].setAttribute("style", st);
    });
    clone.setAttribute("style", "display:block;opacity:1");
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg"); clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    clone.setAttribute("width", W); clone.setAttribute("height", H);
    for (const im of clone.querySelectorAll("image")) {
      const h = im.getAttribute("href") || im.getAttributeNS("http://www.w3.org/1999/xlink", "href");
      if (h && !h.startsWith("data:")) { try { im.setAttribute("href", await dataUrl(h)); } catch (e) { /* leave as is */ } }
    }
    const xml = new XMLSerializer().serializeToString(clone);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml); });
    const sc = 2, pad = 64, cv = document.createElement("canvas");
    cv.width = W * sc; cv.height = (H + pad) * sc;
    const g = cv.getContext("2d"); g.scale(sc, sc);
    g.fillStyle = "#070d19"; g.fillRect(0, 0, W, H + pad);
    g.drawImage(img, 0, 0, W, H);
    g.fillStyle = "#e6efff"; g.font = "600 15px system-ui, sans-serif";
    g.fillText(S.drug.name + " (" + S.drug.class + ")", 14, H + 24);
    g.fillStyle = "#9db0cc"; g.font = "12px system-ui, sans-serif";
    let cap = $("caption").textContent;
    if (cap.length > 140) cap = cap.slice(0, cap.lastIndexOf(" ", 137)) + "...";
    g.fillText(cap, 14, H + 44);
    g.fillText("Know Your Pill, Synapse Studio. Schematic teaching animation, not medical advice. Brain model: Z-Anatomy / BodyParts3D, CC BY-SA 4.0.", 14, H + 58);
    await new Promise((res) => cv.toBlob((blob) => {
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = "synapse-studio-" + S.drug.id + "-" + (S.view === "synapse" ? "synapse" : "brain") + ".png";
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); res();
    }, "image/png"));
  }
  bImg.addEventListener("click", () => {
    if (!S.drug) return;
    flash(bImg, "Saving...");
    saveImage().then(() => flash(bImg, "Saved"), () => flash(bImg, "Could not save"));
  });

  /* ------------------------------------------------------------ links and the hash */
  function decoratePanel(d) {
    const panel = $("panel");
    panel.querySelectorAll(".rlist li").forEach((li) => {
      const grp = LINKS.regionGroup[li.dataset.r];
      if (!grp) return;
      const a = document.createElement("a");
      a.className = "r3d"; a.href = BASE + "/anatomy?brain=" + grp; a.textContent = "View in 3D anatomy";
      a.addEventListener("click", (e) => e.stopPropagation());
      li.appendChild(a);
    });
    const links = [];
    if (pages.has(d.id)) links.push('<a href="' + BASE + "/drugs/" + encodeURIComponent(d.id) + '">' + esc(d.name) + " in the Medication Library</a>");
    links.push('<a href="' + BASE + '/psychiatry/neurotransmitters">Lesson: Neurotransmitters and signalling</a>');
    const first = d.regions[0] && LINKS.regionGroup[d.regions[0].id];
    if (first) links.push('<a href="' + BASE + "/anatomy?brain=" + first + '">Explore these regions in the 3D anatomy atlas</a>');
    panel.insertAdjacentHTML("beforeend", '<h3>Keep learning</h3><ul class="learn">' + links.map((l) => "<li>" + l + "</li>").join("") + "</ul>");
  }
  function writeHash() {
    if (!S.drug) return;
    const h = "#" + S.drug.id + (S.view === "synapse" ? "/synapse" + (S.region ? "/" + S.region : "") : "");
    if (location.hash !== h) history.replaceState(history.state, "", h);
  }
  function parseHash() {
    const parts = (location.hash || "").slice(1).split("/");
    return { id: parts[0], view: parts[1] === "synapse" ? "synapse" : "brain", region: parts[2] && C.REGIONS[parts[2]] ? parts[2] : null };
  }
  return { decoratePanel, writeHash, parseHash };
};
