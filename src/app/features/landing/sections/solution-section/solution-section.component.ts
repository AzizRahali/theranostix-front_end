import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOLUTION } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { FeatureItemComponent } from '../../../../shared/ui/feature-item/feature-item.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';
import { ProcessFlowComponent } from '../../components/process-flow/process-flow.component';

/** Solution: the four integrated systems and the end-to-end process flow. */
@Component({
  selector: 'app-solution-section',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    FeatureItemComponent,
    ProcessFlowComponent,
    RevealDirective,
  ],
  templateUrl: './solution-section.component.html',
  styleUrl: './solution-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionSectionComponent {
  protected readonly solution = SOLUTION;
}
