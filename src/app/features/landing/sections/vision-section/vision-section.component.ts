import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VISION } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { PillarCardComponent } from '../../../../shared/ui/pillar-card/pillar-card.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

/** Why now: the three converging shifts behind the opportunity. */
@Component({
  selector: 'app-vision-section',
  standalone: true,
  imports: [SectionHeadingComponent, PillarCardComponent, RevealDirective],
  templateUrl: './vision-section.component.html',
  styleUrl: './vision-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisionSectionComponent {
  protected readonly vision = VISION;
}
