import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VISION } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { SpyTargetDirective } from '../../../../shared/navigation/spy-target.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { OrbitComponent } from '../../../../shared/ui/orbit/orbit.component';

/** Vision: technology shaped by nuclear medicine technologists in hot labs. */
@Component({
  selector: 'app-vision-section',
  standalone: true,
  imports: [
    AccentHeadingComponent,
    EyebrowComponent,
    OrbitComponent,
    RevealDirective,
    SpyTargetDirective,
  ],
  templateUrl: './vision-section.component.html',
  styleUrl: './vision-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisionSectionComponent {
  protected readonly vision = VISION;
}
