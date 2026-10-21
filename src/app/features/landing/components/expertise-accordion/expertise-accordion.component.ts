import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ExpertiseArea } from '../../../../core/models/landing.model';
import { ToggleIconComponent } from '../../../../shared/ui/toggle-icon/toggle-icon.component';

let nextId = 0;

/**
 * Practice areas as a single-open accordion. Each row discloses the area's
 * summary beside its list of services; the services slide in on every open.
 * Collapsed panels stay in the DOM (searchable) but are inert.
 */
@Component({
  selector: 'app-expertise-accordion',
  standalone: true,
  imports: [ToggleIconComponent],
  templateUrl: './expertise-accordion.component.html',
  styleUrl: './expertise-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseAccordionComponent {
  @Input({ required: true }) areas: readonly ExpertiseArea[] = [];
  /** Heading level of each row, to fit the surrounding document outline. */
  @Input() headingLevel: 3 | 4 = 3;

  protected readonly uid = `expertise-${nextId++}`;
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
