import { DestroyRef, Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';
import { SectionSpy } from './section-spy.service';

/**
 * Registers the host as a navigation target with SectionSpy. The key defaults
 * to the host's `id`; pass one explicitly to make several sections light up
 * the same link.
 *
 * ```html
 * <section id="about" appSpyTarget>…</section>
 * <section appSpyTarget="consulting">…</section>   <!-- part of "Consulting" -->
 * ```
 */
@Directive({
  selector: '[appSpyTarget]',
  standalone: true,
})
export class SpyTargetDirective {
  @Input() appSpyTarget = '';

  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const spy = inject(SectionSpy);

    afterNextRender(() => spy.register(element, this.appSpyTarget || element.id));
    inject(DestroyRef).onDestroy(() => spy.unregister(element));
  }
}
