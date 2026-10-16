import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { THERION } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { CheckListComponent } from '../../../../shared/ui/check-list/check-list.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';
import { HudFrameComponent } from '../../../../shared/ui/hud-frame/hud-frame.component';

/** THERION: the first robot — milestone, capabilities and intended benefits. */
@Component({
  selector: 'app-therion-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AccentHeadingComponent,
    CheckListComponent,
    EyebrowComponent,
    HudFrameComponent,
    RevealDirective,
  ],
  templateUrl: './therion-section.component.html',
  styleUrl: './therion-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TherionSectionComponent {
  protected readonly therion = THERION;
}
