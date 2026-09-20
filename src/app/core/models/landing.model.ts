/**
 * Typed content model for the Theranostix investor landing page.
 * Every section renders from these shapes, keeping templates free of
 * hardcoded copy and making the content editable / localizable in one place.
 */

export type ButtonVariant = 'primary' | 'ghost';

export interface CtaLink {
  readonly label: string;
  readonly href: string;
  readonly variant: ButtonVariant;
}

export interface StatCard {
  readonly figure: string;
  readonly label: string;
  readonly description: string;
}

export interface FeatureItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

/** Icon keys resolved by the process-flow component to inline SVG marks. */
export type FlowIcon = 'isotopes' | 'hot-lab' | 'injector' | 'scanner';

export interface FlowNode {
  readonly icon: FlowIcon;
  readonly label: string;
}

export interface Readout {
  readonly label: string;
  readonly value: string;
}

export interface MiniStat {
  readonly value: string;
  readonly label: string;
}

export interface ChartBar {
  readonly value: string;
  readonly caption: string;
  /** Column height as a percentage of the chart frame (0–100). */
  readonly heightPct: number;
  readonly emphasis: boolean;
}

export interface Pillar {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export type EdgeTone = 'legacy' | 'us';

export interface EdgeColumn {
  readonly tone: EdgeTone;
  readonly title: string;
  readonly summary: string;
  readonly points: readonly string[];
  readonly names?: string;
}

export interface AskFigure {
  readonly value: string;
  readonly label: string;
  /** A `readout` renders on a dark chip; a `plain` figure is inline. */
  readonly style: 'readout' | 'plain';
}
