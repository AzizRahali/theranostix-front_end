import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Decorative orbit: a thin ring that draws itself on entrance, with a glowing
 * node that keeps circling it. The parent sizes and positions the host.
 *
 * ```html
 * <app-orbit class="hero__orbit" />   <!-- .hero__orbit { width; height; top; right } -->
 * ```
 */
@Component({
  selector: 'app-orbit',
  standalone: true,
  host: { 'aria-hidden': 'true' },
  template: `
    <span class="orbit__ring"></span>
    <span class="orbit__node"></span>
  `,
  styleUrl: './orbit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrbitComponent {}
