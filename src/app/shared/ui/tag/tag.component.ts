import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Uppercase section eyebrow with a glowing accent lead-in rule. */
@Component({
  selector: 'app-tag',
  standalone: true,
  template: `<span class="tag" [style.color]="color"><ng-content /></span>`,
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  /** Override the eyebrow text color (defaults to the brand primary). */
  @Input() color?: string;
}
