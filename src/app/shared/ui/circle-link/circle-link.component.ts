import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Round call-to-action with a label and trailing arrow. Its ring draws itself
 * on entrance, ringed by a slowly turning dashed orbit.
 */
@Component({
  selector: 'app-circle-link',
  standalone: true,
  template: `
    <a class="circle" [href]="href">
      <svg class="circle__svg circle__orbit" viewBox="0 0 168 168" aria-hidden="true">
        <circle cx="84" cy="84" r="92" />
      </svg>
      <svg class="circle__svg circle__ring" viewBox="0 0 168 168" aria-hidden="true">
        <circle cx="84" cy="84" r="83.5" pathLength="1" />
      </svg>
      <span class="circle__content">
        <span>{{ label }}</span>
        <svg class="circle__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
          <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" stroke-width="1.4" />
        </svg>
      </span>
    </a>
  `,
  styleUrl: './circle-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleLinkComponent {
  @Input({ required: true }) href!: string;
  @Input({ required: true }) label!: string;
}
