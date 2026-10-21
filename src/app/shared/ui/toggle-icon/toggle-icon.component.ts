import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Plus inside a ring that turns into a minus on a filled accent disc when
 * `open`. Decorative: the owning control carries the state (aria-expanded).
 */
@Component({
  selector: 'app-toggle-icon',
  standalone: true,
  template: '',
  styleUrl: './toggle-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[class.is-open]': 'open',
  },
})
export class ToggleIconComponent {
  @Input() open = false;
}
