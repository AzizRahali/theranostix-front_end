import { Injectable } from '@angular/core';

/**
 * One IntersectionObserver shared by every RevealDirective (instead of one per
 * element). Each element's callback fires once, the first time it enters view.
 * Only ever called in the browser (from `afterNextRender`).
 */
@Injectable({ providedIn: 'root' })
export class RevealObserver {
  private readonly callbacks = new Map<Element, () => void>();
  private observer?: IntersectionObserver;

  observe(element: Element, onEnter: () => void): void {
    if (typeof IntersectionObserver === 'undefined') {
      onEnter();
      return;
    }

    this.callbacks.set(element, onEnter);
    this.observer ??= new IntersectionObserver((entries) => this.handle(entries), {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    });
    this.observer.observe(element);
  }

  unobserve(element: Element): void {
    this.callbacks.delete(element);
    this.observer?.unobserve(element);
  }

  private handle(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      const onEnter = this.callbacks.get(entry.target);
      this.unobserve(entry.target);
      onEnter?.();
    }
  }
}
