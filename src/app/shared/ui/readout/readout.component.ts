import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Readout } from '../../../core/models/landing.model';

/**
 * Dark instrument-style readout: a small uppercase label above a large,
 * glowing amber value. `deep` uses the darker chip background (Ask section).
 */
@Component({
  selector: 'app-readout',
  standalone: true,
  templateUrl: './readout.component.html',
  styleUrl: './readout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadoutComponent {
  @Input({ required: true }) readout!: Readout;
  @Input() deep = false;
}
