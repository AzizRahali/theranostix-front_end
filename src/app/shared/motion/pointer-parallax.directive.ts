import { DestroyRef, Directive, ElementRef, Input, NgZone, afterNextRender, inject } from '@angular/core';

/**
 * Shifts the host slightly against the pointer for a sense of depth. Writes
 * `--parallax-x` / `--parallax-y` (px) on the host; the host's styles decide
 * how to use them. Runs outside Angular's zone and once per animation frame,
 * and only for fine pointers with motion allowed.
 *
 * ```html
 * <img appPointerParallax [parallaxStrength]="16" … />
 * ```
 */
@Directive({
  selector: '[appPointerParallax]',
  standalone: true,
})
export class PointerParallaxDirective {
  /** Maximum travel in px at the viewport edge; negative moves with the pointer. */
  @Input() parallaxStrength = 14;

  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
        return;
      }

      let frame = 0;
      const onMove = (event: PointerEvent): void => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const x = event.clientX / innerWidth - 0.5;
          const y = event.clientY / innerHeight - 0.5;
          element.style.setProperty('--parallax-x', `${(-x * this.parallaxStrength).toFixed(2)}px`);
          element.style.setProperty('--parallax-y', `${(-y * this.parallaxStrength).toFixed(2)}px`);
        });
      };

      zone.runOutsideAngular(() => addEventListener('pointermove', onMove, { passive: true }));
      destroyRef.onDestroy(() => {
        removeEventListener('pointermove', onMove);
        cancelAnimationFrame(frame);
      });
    });
  }
}
