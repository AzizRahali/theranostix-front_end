import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONSULTING } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { SpyTargetDirective } from '../../../../shared/navigation/spy-target.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { ExpertiseAccordionComponent } from '../../components/expertise-accordion/expertise-accordion.component';

/** Theranostix Consulting: positioning and the five areas of expertise. */
@Component({
  selector: 'app-consulting-section',
  standalone: true,
  imports: [
    AccentHeadingComponent,
    EyebrowComponent,
    ExpertiseAccordionComponent,
    RevealDirective,
    SpyTargetDirective,
  ],
  templateUrl: './consulting-section.component.html',
  styleUrl: './consulting-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultingSectionComponent {
  protected readonly consulting = CONSULTING;
}
