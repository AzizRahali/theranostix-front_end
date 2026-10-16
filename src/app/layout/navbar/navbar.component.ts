import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV } from '../../core/data/landing-content';
import { BrandMarkComponent } from '../../shared/ui/brand-mark/brand-mark.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

/**
 * Fixed glass navigation. Desktop shows an inline pill; below the `xl`
 * breakpoint the same links open from a toggle button (Escape closes it).
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BrandMarkComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly nav = NAV;
  protected readonly menuOpen = signal(false);

  protected toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
