import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRAND } from '../../core/data/landing-content';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { PulseDotComponent } from '../../shared/ui/pulse-dot/pulse-dot.component';

/** Sticky top navigation: brand mark, development status and primary CTA. */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, PulseDotComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly brand = BRAND;
}
