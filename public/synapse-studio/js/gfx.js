/* KYP Synapse Studio — graphics settings (classic script). Settings are stored per browser. */
(function (global) {
  "use strict";
  const KEY = "kyp-gfx-v1";
  const PRESETS = {
    low:    { texture: false, shadows: false, glow: false, detail: "standard", anatomy: false, pulses: "few",    fps: 30, labelSize: "normal", reduceMotion: false },
    medium: { texture: true,  shadows: false, glow: true,  detail: "standard", anatomy: false, pulses: "normal", fps: 60, labelSize: "normal", reduceMotion: false },
    high:   { texture: true,  shadows: true,  glow: true,  detail: "rich",     anatomy: true,  pulses: "many",   fps: 60, labelSize: "normal", reduceMotion: false },
  };
  const reduced = (() => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } })();
  let state = Object.assign({ quality: "high" }, PRESETS.high);
  if (reduced) state.reduceMotion = true;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && typeof saved === "object") state = Object.assign(state, saved);
  } catch (e) {}
  const subs = [];

  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function emit(changed) { subs.forEach((f) => f(state, changed)); }

  global.KYP_GFX = {
    PRESETS,
    get: () => state,
    /** Apply a preset ("low"|"medium"|"high"). */
    preset(name) {
      if (!PRESETS[name]) return;
      const keepMotion = state.reduceMotion;
      state = Object.assign({}, state, PRESETS[name], { quality: name, reduceMotion: keepMotion || PRESETS[name].reduceMotion });
      save(); emit(Object.keys(PRESETS[name]));
    },
    /** Change single settings (marks the preset as "custom"). */
    set(patch) {
      state = Object.assign({}, state, patch, { quality: "custom" });
      save(); emit(Object.keys(patch));
    },
    reset() { state = Object.assign({ quality: "high" }, PRESETS.high, { reduceMotion: reduced }); save(); emit(Object.keys(state)); },
    subscribe(f) { subs.push(f); },
    pulseFactor() { return { few: 0.5, normal: 1, many: 1.6 }[state.pulses] || 1; },
  };
})(window);
