import { SVG_UNITS_PER_MM } from '../engine/calibration';

function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

/** Shared SVG paper grid; offset is expressed in logical SVG units, never CSS pixels. */
export function EcgGridDefinitions({ id, paperOffsetUnits = 0 }: { id: string; paperOffsetUnits?: number }) {
  const majorUnits = SVG_UNITS_PER_MM * 5;
  const phase = positiveModulo(paperOffsetUnits, majorUnits);
  const transform = phase === 0 ? undefined : `translate(${-phase} 0)`;

  return <defs>
    <pattern id={`minor-${id}`} width={SVG_UNITS_PER_MM} height={SVG_UNITS_PER_MM} patternUnits="userSpaceOnUse">
      <path d={`M ${SVG_UNITS_PER_MM} 0 L 0 0 0 ${SVG_UNITS_PER_MM}`} fill="none" stroke="var(--grid-minor)" strokeWidth="0.45" />
    </pattern>
    <pattern id={`major-${id}`} width={majorUnits} height={majorUnits} patternUnits="userSpaceOnUse" patternTransform={transform}>
      <rect width={majorUnits} height={majorUnits} fill={`url(#minor-${id})`} />
      <path d={`M ${majorUnits} 0 L 0 0 0 ${majorUnits}`} fill="none" stroke="var(--grid-major)" strokeWidth="0.8" />
    </pattern>
  </defs>;
}

