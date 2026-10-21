import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONCEPT } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { SpyTargetDirective } from '../../../../shared/navigation/spy-target.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { NodeTrackComponent } from '../../../../shared/ui/node-track/node-track.component';
import { OrbitComponent } from '../../../../shared/ui/orbit/orbit.component';

/** From concept to operation: the consulting mission and what a facility needs. */
@Component({
  selector: 'app-concept-section',
  standalone: true,
  imports: [
    AccentHeadingComponent,
    EyebrowComponent,
    NodeTrackComponent,
    OrbitComponent,
    RevealDirective,
    SpyTargetDirective,
  ],
  templateUrl: './concept-section.component.html',
  styleUrl: './concept-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConceptSectionComponent {
  protected readonly concept = CONCEPT;
}
