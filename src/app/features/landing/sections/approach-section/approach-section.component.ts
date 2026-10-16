import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APPROACH } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { FeatureItemComponent } from '../../../../shared/ui/feature-item/feature-item.component';
import { OrbitComponent } from '../../../../shared/ui/orbit/orbit.component';

/** Approach: the three principles — automation, standardization, traceability. */
@Component({
  selector: 'app-approach-section',
  standalone: true,
  imports: [
    AccentHeadingComponent,
    EyebrowComponent,
    FeatureItemComponent,
    OrbitComponent,
    RevealDirective,
  ],
  templateUrl: './approach-section.component.html',
  styleUrl: './approach-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApproachSectionComponent {
  protected readonly approach = APPROACH;
}
