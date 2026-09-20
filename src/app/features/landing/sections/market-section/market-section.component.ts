import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MARKET } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MiniStatComponent } from '../../../../shared/ui/mini-stat/mini-stat.component';
import { ReadoutComponent } from '../../../../shared/ui/readout/readout.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';
import { GrowthChartComponent } from '../../components/growth-chart/growth-chart.component';

/** Market: headline growth figures beside the projected-market bar chart. */
@Component({
  selector: 'app-market-section',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    ReadoutComponent,
    MiniStatComponent,
    GrowthChartComponent,
    RevealDirective,
  ],
  templateUrl: './market-section.component.html',
  styleUrl: './market-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketSectionComponent {
  protected readonly market = MARKET;
}
