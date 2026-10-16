import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';

/** About: who Theranostix is and what it is building. */
@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [AccentHeadingComponent, EyebrowComponent, RevealDirective],
  template: `
    <section id="about" class="th-section th-surface-paper">
      <div class="th-container th-split">
        <div appReveal>
          <app-eyebrow>{{ about.eyebrow }}</app-eyebrow>
          <app-accent-heading [parts]="about.heading" />
        </div>
        <div class="th-prose" appReveal [revealDelay]="200">
          @for (paragraph of about.paragraphs; track $index) {
            <p>{{ paragraph }}</p>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  protected readonly about = ABOUT;
}
