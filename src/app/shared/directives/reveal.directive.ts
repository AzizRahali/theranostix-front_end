import { Directive } from '@angular/core';

/**
 * Marks an element to rise + fade in as it scrolls into view.
 *
 * The animation is driven entirely by CSS scroll-timeline (`th-reveal` in the
 * global stylesheet), so it needs no JavaScript, works under SSR, and degrades
 * to a static, fully-visible state where scroll-timeline or motion is
 * unavailable. This directive exists so the intent reads clearly in templates
 * (`<div appReveal>`) and the mechanism can evolve in one place.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'th-reveal' },
})
export class RevealDirective {}
