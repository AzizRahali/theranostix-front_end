import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  afterNextRender,
  afterRender,
  computed,
  inject,
} from '@angular/core';
import { Link } from '../../../core/models/landing.model';
import { SectionSpy } from '../../../shared/navigation/section-spy.service';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

/**
 * Desktop navigation pill. A glowing indicator slides beneath the link of the
 * section currently being read (from SectionSpy).
 */
@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopNavComponent {
  @Input({ required: true }) links: readonly Link[] = [];
  @Input({ required: true }) cta!: Link;

  private readonly spy = inject(SectionSpy);
  protected readonly activeHref = computed(() => {
    const key = this.spy.active();
    return key ? `#${key}` : null;
  });

  constructor() {
    const host: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    // Re-place the indicator after each render (active link changed) and on
    // resize (e.g. web fonts swapping in change link widths).
    afterRender(() => this.placeIndicator(host));
    afterNextRender(() => {
      const resize = new ResizeObserver(() => this.placeIndicator(host));
      resize.observe(host);
      destroyRef.onDestroy(() => resize.disconnect());
    });
  }

  private placeIndicator(host: HTMLElement): void {
    const indicator = host.querySelector<HTMLElement>('.dnav__indicator');
    const active = host.querySelector<HTMLElement>('.dnav__link.is-active');
    if (!indicator) return;

    indicator.classList.toggle('is-visible', !!active);
    if (active) {
      indicator.style.setProperty('--x', `${active.offsetLeft}px`);
      indicator.style.setProperty('--w', `${active.offsetWidth}px`);
    }
  }
}
