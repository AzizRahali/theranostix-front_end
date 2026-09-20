import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDGE } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { EdgeColumnComponent } from '../../../../shared/ui/edge-column/edge-column.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

/** Competitive edge: legacy suppliers versus the Theranostix approach. */
@Component({
  selector: 'app-edge-section',
  standalone: true,
  imports: [SectionHeadingComponent, EdgeColumnComponent, RevealDirective],
  templateUrl: './edge-section.component.html',
  styleUrl: './edge-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdgeSectionComponent {
  protected readonly edge = EDGE;
}
