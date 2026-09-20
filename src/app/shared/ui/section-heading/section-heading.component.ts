import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

/**
 * Standard section header: eyebrow tag, `<h2>` heading and an optional lede.
 * Used at the top of every content section for consistent rhythm.
 */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) heading!: string;
  @Input() lede?: string;
  /** Render heading/lede in the on-dark palette. */
  @Input() onDark = false;
  /** Optional eyebrow color override. */
  @Input() eyebrowColor?: string;
}
