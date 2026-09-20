import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASK } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { PulseDotComponent } from '../../../../shared/ui/pulse-dot/pulse-dot.component';
import { ReadoutComponent } from '../../../../shared/ui/readout/readout.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

/** Traction & ask: the raise, targets and closing calls to action (dark). */
@Component({
  selector: 'app-ask-section',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    ReadoutComponent,
    ButtonComponent,
    PulseDotComponent,
    RevealDirective,
  ],
  templateUrl: './ask-section.component.html',
  styleUrl: './ask-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskSectionComponent {
  protected readonly ask = ASK;
}
