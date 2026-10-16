import {
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  afterNextRender,
  inject,
} from '@angular/core';
import { RevealObserver } from './reveal-observer.service';

export type RevealVariant = '' | 'rise' | 'fade' | 'wipe';

/**
 * Plays an element's entrance the first time it scrolls into view by adding
 * `th-play` (see the motion contract in `styles/_animations.scss`). Child
 * components choreograph their own parts off that class.
 *
 * ```html
 * <div appReveal>…</div>                       <!-- rise -->
 * <figure appReveal="wipe" [revealDelay]="150">…</figure>
 * ```
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'th-reveal',
    '[class.th-reveal--fade]': "appReveal === 'fade'",
    '[class.th-reveal--wipe]': "appReveal === 'wipe'",
    '[style.--reveal-delay]': 'revealDelay + "ms"',
  },
})
export class RevealDirective {
  /** Entrance style; the bare attribute means the default rise. */
  @Input() appReveal: RevealVariant = '';
  /** Stagger offset in milliseconds, inherited by child choreography. */
  @Input() revealDelay = 0;

  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const renderer = inject(Renderer2);
    const observer = inject(RevealObserver);

    afterNextRender(() => {
      observer.observe(element, () => renderer.addClass(element, 'th-play'));
    });
    inject(DestroyRef).onDestroy(() => observer.unobserve(element));
  }
}
