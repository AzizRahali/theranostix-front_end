import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  Renderer2,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NAV } from '../../core/data/landing-content';
import { BrandMarkComponent } from '../../shared/ui/brand-mark/brand-mark.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

/** Distance scrolled (px) before the bar switches to its compact state. */
const SCROLLED_AT = 24;

/**
 * Fixed site navigation: brand, the desktop pill (`xl` and up) and, below
 * that, a toggle opening the full-screen mobile menu. Tightens once the page
 * scrolls; Escape closes the menu.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BrandMarkComponent, DesktopNavComponent, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'close()' },
})
export class NavbarComponent {
  protected readonly nav = NAV;
  protected readonly menuId = 'site-menu';
  protected readonly menuOpen = signal(false);

  constructor() {
    const host: HTMLElement = inject(ElementRef).nativeElement;
    const renderer = inject(Renderer2);
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    const root = inject(DOCUMENT).documentElement;

    // Freeze the page behind the open menu.
    effect(() => {
      if (this.menuOpen()) {
        renderer.addClass(root, 'th-menu-open');
      } else {
        renderer.removeClass(root, 'th-menu-open');
      }
    });

    // Compact state once scrolled; a class toggle, so no change detection.
    afterNextRender(() => {
      let scrolled: boolean | undefined;
      const onScroll = (): void => {
        const next = scrollY > SCROLLED_AT;
        if (next === scrolled) return;
        scrolled = next;
        if (next) {
          renderer.addClass(host, 'is-scrolled');
        } else {
          renderer.removeClass(host, 'is-scrolled');
        }
      };

      onScroll();
      zone.runOutsideAngular(() => addEventListener('scroll', onScroll, { passive: true }));
      destroyRef.onDestroy(() => removeEventListener('scroll', onScroll));
    });
  }

  protected toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
