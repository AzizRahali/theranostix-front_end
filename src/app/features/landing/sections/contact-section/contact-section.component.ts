import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../../../core/data/landing-content';
import { RevealDirective } from '../../../../shared/motion/reveal.directive';
import { AccentHeadingComponent } from '../../../../shared/ui/accent-heading/accent-heading.component';
import { CircleLinkComponent } from '../../../../shared/ui/circle-link/circle-link.component';
import { EyebrowComponent } from '../../../../shared/ui/eyebrow/eyebrow.component';

/** Closing call to action with the contact address. */
@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [AccentHeadingComponent, CircleLinkComponent, EyebrowComponent, RevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  protected readonly contact = CONTACT;
}
