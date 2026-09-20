import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AskSectionComponent } from './sections/ask-section/ask-section.component';
import { EdgeSectionComponent } from './sections/edge-section/edge-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { MarketSectionComponent } from './sections/market-section/market-section.component';
import { ProblemSectionComponent } from './sections/problem-section/problem-section.component';
import { SolutionSectionComponent } from './sections/solution-section/solution-section.component';
import { VisionSectionComponent } from './sections/vision-section/vision-section.component';

/**
 * Investor landing page. Composes the independent, self-contained sections in
 * narrative order; each section owns its own data and layout.
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProblemSectionComponent,
    SolutionSectionComponent,
    MarketSectionComponent,
    VisionSectionComponent,
    EdgeSectionComponent,
    AskSectionComponent,
  ],
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
