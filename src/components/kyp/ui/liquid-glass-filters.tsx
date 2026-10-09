/**
 * LiquidGlassFilters: the one shared SVG filter behind .kyp-glass-refract
 * (see globals.css). Rendered once in the root layout; every glass button
 * references it by id instead of carrying its own copy, so a page with many
 * buttons still has a single filter definition.
 *
 * A soft fractal-noise map displaces the backdrop slightly, which gives the
 * refractive "liquid" edge. Purely decorative: hidden from assistive tech.
 */
export function LiquidGlassFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <defs>
        <filter
          id="kyp-liquid-glass"
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}
