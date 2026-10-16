import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Theranostix logo: an orbit mark (ring, accent arc, core) plus the wordmark.
 * The accent arc makes one "boot" revolution on load.
 */
@Component({
  selector: 'app-brand-mark',
  standalone: true,
  template: `
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" />
      <path class="brand__arc" d="M16 3a13 13 0 0 1 13 13" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="16" cy="16" r="4" fill="var(--color-accent)" />
    </svg>
    <span class="brand__word">{{ name }}</span>
  `,
  styleUrl: './brand-mark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandMarkComponent {
  @Input({ required: true }) name!: string;
}
