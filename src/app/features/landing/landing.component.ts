import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ApproachSectionComponent } from './sections/approach-section/approach-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { TherionSectionComponent } from './sections/therion-section/therion-section.component';
import { VisionSectionComponent } from './sections/vision-section/vision-section.component';

/**
 * Home page. Composes self-contained sections that alternate deep and paper
 * surfaces; each section owns its own data and layout.
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ApproachSectionComponent,
    TherionSectionComponent,
    VisionSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-about-section />
    <app-approach-section />
    <app-therion-section />
    <app-vision-section />
    <app-contact-section />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
