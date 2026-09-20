import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatCard } from '../../../core/models/landing.model';

/** Filled statistic card used in the Problem section grid. */
@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
  @Input({ required: true }) stat!: StatCard;
}
