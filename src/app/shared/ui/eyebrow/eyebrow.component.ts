import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Section eyebrow: a short accent rule above a small, letter-spaced label. */
@Component({
  selector: 'app-eyebrow',
  standalone: true,
  template: `
    <span class="eyebrow__rule" aria-hidden="true"></span>
    <span class="eyebrow__label"><ng-content /></span>
  `,
  styleUrl: './eyebrow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyebrowComponent {}
