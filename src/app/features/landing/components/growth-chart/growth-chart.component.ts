import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartBar } from '../../../../core/models/landing.model';

/** Framed two-column bar chart illustrating projected market growth. */
@Component({
  selector: 'app-growth-chart',
  standalone: true,
  templateUrl: './growth-chart.component.html',
  styleUrl: './growth-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrowthChartComponent {
  @Input({ required: true }) bars: readonly ChartBar[] = [];
  @Input() caption?: string;
}
