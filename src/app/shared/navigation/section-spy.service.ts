import { Injectable, NgZone, inject, signal } from '@angular/core';

/**
 * Tracks which registered page section is currently being read, i.e. which
 * one crosses a thin "reading line" 40% down the viewport. Navigation reads
 * `active` to highlight the matching link. Sections register themselves via
 * SpyTargetDirective; registration only ever happens in the browser.
 */
@Injectable({ providedIn: 'root' })
export class SectionSpy {
  /** Navigation key of the section under the reading line, or null (e.g. the hero). */
  readonly active = signal<string | null>(null);

  private readonly zone = inject(NgZone);
  private readonly keys = new Map<Element, string>();
  private readonly crossing = new Set<Element>();
  private observer?: IntersectionObserver;

  register(element: Element, key: string): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.keys.set(element, key);
    this.observer ??= new IntersectionObserver((entries) => this.handle(entries), {
      rootMargin: '-40% 0px -59% 0px',
    });
    this.observer.observe(element);
  }

  unregister(element: Element): void {
    this.keys.delete(element);
    this.crossing.delete(element);
    this.observer?.unobserve(element);
  }

  private handle(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.crossing.add(entry.target);
      } else {
        this.crossing.delete(entry.target);
      }
    }

    // At a boundary two sections can briefly overlap the line; the newest wins.
    const current = [...this.crossing].at(-1);
    const key = current ? (this.keys.get(current) ?? null) : null;
    if (key !== this.active()) {
      this.zone.run(() => this.active.set(key));
    }
  }
}
