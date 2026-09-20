import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pillar } from '../../../core/models/landing.model';

/** Bordered "why now" pillar card with an indexed badge. */
@Component({
  selector: 'app-pillar-card',
  standalone: true,
  templateUrl: './pillar-card.component.html',
  styleUrl: './pillar-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillarCardComponent {
  @Input({ required: true }) pillar!: Pillar;
}
