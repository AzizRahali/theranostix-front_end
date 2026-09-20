import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO } from '../../../../core/data/landing-content';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { PulseDotComponent } from '../../../../shared/ui/pulse-dot/pulse-dot.component';
import { RigGraphicComponent } from '../../components/rig-graphic/rig-graphic.component';

/** Hero: headline, positioning statement, CTAs and the animated rig graphic. */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, PulseDotComponent, RigGraphicComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly hero = HERO;
}
