/**
 * Typed content model for the Theranostix site.
 * Every section renders from these shapes, keeping templates free of
 * hardcoded copy and making the content editable / localizable in one place.
 */

export type ButtonVariant = 'primary' | 'ghost';

export interface Link {
  readonly label: string;
  readonly href: string;
}

/**
 * One run of a display heading. `accent` runs render in italic accent color,
 * e.g. "Transforming the *future* of nuclear medicine".
 */
export interface HeadingPart {
  readonly text: string;
  readonly accent?: boolean;
}

export interface FeatureItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

/** One consulting practice area: what it covers and the services it includes. */
export interface ExpertiseArea {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly services: readonly string[];
}
