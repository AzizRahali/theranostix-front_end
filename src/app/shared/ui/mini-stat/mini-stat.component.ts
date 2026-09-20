import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MiniStat } from '../../../core/models/landing.model';

/** Compact value + label pair used beside the market readout. */
@Component({
  selector: 'app-mini-stat',
  standalone: true,
  templateUrl: './mini-stat.component.html',
  styleUrl: './mini-stat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniStatComponent {
  @Input({ required: true }) stat!: MiniStat;
}
