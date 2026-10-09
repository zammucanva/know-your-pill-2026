/** Static markup of the Synapse Studio workspace (ids are used by public/synapse-studio/js/app.js). */
export const STUDIO_HTML = `<div class="syn-toolbar">
  <div class="search">
    <input id="q" type="search" autocomplete="off" placeholder="Search a medication (e.g. fluoxetine, Xanax, naloxone)&hellip;" aria-label="Search a medication">
    <ul id="suggest" class="suggest" hidden></ul>
  </div>
  <button id="btnAdd" class="ghost" type="button">+ Add a medication</button>
  <button id="btnGfx" class="ghost" type="button" aria-label="Graphics settings" title="Graphics settings">&#9881; Graphics</button>
</div>

<div class="layout">
  <section class="stage-col" id="stageCol">
    <div class="tabs" role="tablist">
      <button id="tabBrain" class="tab active" role="tab" aria-selected="true" type="button">Brain overview</button>
      <button id="tabSyn" class="tab" role="tab" aria-selected="false" type="button">Synapse close-up</button>
      <span class="spacer"></span>
      <label class="check"><input type="checkbox" id="chkLabels" checked> Labels</label>
      <label class="check" id="lblAll"><input type="checkbox" id="chkAll"> Show all regions</label>
      <button id="btnFs" class="ghost fsbtn" type="button" aria-label="Full screen (F)" title="Full screen (F)">&#9974; Full screen</button>
    </div>

    <div class="fsbar" id="fsbar" hidden>
      <button id="fsPrev" class="ghost" type="button" aria-label="Previous medication" title="Previous medication">&#9664;</button>
      <select id="fsDrug" aria-label="Medication"></select>
      <button id="fsNext" class="ghost" type="button" aria-label="Next medication" title="Next medication">&#9654;</button>
      <span class="spacer"></span>
      <button id="fsGfx" class="ghost" type="button" title="Graphics settings">&#9881; Graphics</button>
      <button id="fsExit" class="primary" type="button" title="Exit full screen (Esc)">Exit full screen</button>
    </div>
    <div id="stage" class="stage">
      <svg id="svgBrain" class="scene on" role="img" aria-label="Labelled brain overview animation"></svg>
      <svg id="svgSyn" class="scene" role="img" aria-label="Labelled synapse animation"></svg>
      <div class="legend" id="legend"></div>
      <div class="ctxbar" id="ctxbar" hidden></div>
      <button class="back" id="btnBack" type="button" hidden>&larr; Back to brain overview</button>
      <button class="zoomhint" id="btnZoom" type="button">Zoom into the synapse &rarr;</button>
      <div class="empty" id="empty">Search a medication to begin.</div>
    </div>

    <p class="brainnote" id="brainNote">Mid-sagittal section of the brain (3D model: Z-Anatomy / BodyParts3D, CC BY-SA 4.0). Region markers are approximate.</p>
    <div class="controls">
      <button id="btnPlay" class="play" type="button" aria-label="Play / pause">&#10074;&#10074;</button>
      <input id="scrub" type="range" min="0" max="40" step="0.01" value="0" aria-label="Timeline">
      <select id="speed" aria-label="Speed">
        <option value="0.5">0.5&times;</option><option value="1" selected>1&times;</option><option value="1.5">1.5&times;</option><option value="2">2&times;</option>
      </select>
    </div>
    <div class="phases" id="phases"></div>
    <p class="caption" id="caption"></p>
    <div class="gauges" id="gauges" hidden>
      <div class="gauge"><span id="gL1">Neurotransmitter in the cleft</span><div class="bar"><i id="g1"></i><b class="tick"></b></div><em id="gV1"></em></div>
      <div class="gauge"><span id="gL2">Signal received</span><div class="bar"><i id="g2"></i><b class="tick"></b></div><em id="gV2"></em></div>
      <p class="gnote">Bars compare the current moment with this synapse&rsquo;s own normal baseline (tick = normal).</p>
    </div>
  </section>

  <aside class="panel" id="panel"></aside>
</div>

<p class="syn-note">Schematic teaching animation , not to scale, simplified on purpose. Mechanisms follow standard pharmacology references; always confirm against current prescribing information. Not medical advice.</p>


<dialog id="dlgGfx">
  <form method="dialog" class="dlgbox">
    <h2>Graphics settings</h2>
    <p class="small">Saved in this browser. Lower the quality if the animation stutters on your device.</p>
    <div class="setgrid">
      <label for="gQuality">Quality preset</label>
      <select id="gQuality"><option value="low">Low (fastest)</option><option value="medium">Medium</option><option value="high">High (most detail)</option><option value="custom" disabled>Custom</option></select>
      <label for="gDetail">Scene detail</label>
      <select id="gDetail"><option value="standard">Standard</option><option value="rich">Rich (extra organelles, filaments, glycocalyx)</option></select>
      <label for="gAnatomy">Anatomy labels (brain)</label>
      <input type="checkbox" id="gAnatomy">
      <label for="gTexture">Cell texture and grain</label>
      <input type="checkbox" id="gTexture">
      <label for="gShadows">Soft shadows on proteins</label>
      <input type="checkbox" id="gShadows">
      <label for="gGlow">Glow effects</label>
      <input type="checkbox" id="gGlow">
      <label for="gPulses">Signal pulses</label>
      <select id="gPulses"><option value="few">Few</option><option value="normal">Normal</option><option value="many">Many</option></select>
      <label for="gFps">Frame rate</label>
      <select id="gFps"><option value="30">30 fps</option><option value="60">60 fps</option></select>
      <label for="gLabel">Label size</label>
      <select id="gLabel"><option value="normal">Normal</option><option value="large">Large</option></select>
      <label for="gMotion">Reduce motion (slower, calmer)</label>
      <input type="checkbox" id="gMotion">
    </div>
    <div class="dlgbtn">
      <button id="gReset" type="button" class="ghost">Reset to defaults</button>
      <button value="close" class="primary">Done</button>
    </div>
  </form>
</dialog>

<dialog id="dlg">
  <form method="dialog" class="dlgbox">
    <h2>Add a medication</h2>
    <p>Paste a short JSON entry. It is checked, saved in this browser, and animated automatically. See <code>README.md</code> for every field.</p>
    <textarea id="dlgText" spellcheck="false" rows="18"></textarea>
    <p id="dlgErr" class="err" hidden></p>
    <div class="dlgbtn">
      <button id="dlgCancel" value="cancel" class="ghost">Cancel</button>
      <button id="dlgSave" type="button" class="primary">Validate &amp; add</button>
    </div>
  </form>
</dialog>
`;
