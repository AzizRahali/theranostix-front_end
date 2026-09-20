import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROBLEM } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';
import { StatCardComponent } from '../../../../shared/ui/stat-card/stat-card.component';

/** Problem: the cost and risk of manual radioactive-dose handling. */
@Component({
  selector: 'app-problem-section',
  standalone: true,
  imports: [SectionHeadingComponent, StatCardComponent, RevealDirective],
  templateUrl: './problem-section.component.html',
  styleUrl: './problem-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemSectionComponent {
  protected readonly problem = PROBLEM;
}
