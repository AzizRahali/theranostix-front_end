import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO } from '../../../../core/data/landing-content';
import { PointerParallaxDirective } from '../../../../shared/motion/pointer-parallax.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { CircleLinkComponent } from '../../../../shared/ui/circle-link/circle-link.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { HudFrameComponent } from '../../../../shared/ui/hud-frame/hud-frame.component';
import { OrbitComponent } from '../../../../shared/ui/orbit/orbit.component';

/**
 * Full-height hero. Plays a "system boot" sequence on load: grid fades up,
 * the render materializes, the copy assembles, the viewfinder locks on.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PointerParallaxDirective,
    AccentHeadingComponent,
    CircleLinkComponent,
    EyebrowComponent,
    HudFrameComponent,
    OrbitComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly hero = HERO;
}
