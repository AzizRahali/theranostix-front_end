import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonVariant } from '../../../core/models/landing.model';

/**
 * Brand button. Renders as an anchor when `href` is set (the landing page's
 * CTAs are all in-page links), otherwise as a native `<button>`.
 *
 * ```html
 * <app-button href="#ask" variant="primary">Request Investor Deck</app-button>
 * <app-button variant="ghost" size="sm" (pressed)="...">Book a Call</app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() href?: string;
  /** Style the ghost variant for placement on a dark surface. */
  @Input() onDark = false;

  get classes(): Record<string, boolean> {
    return {
      'btn': true,
      [`btn--${this.variant}`]: true,
      'btn--sm': this.size === 'sm',
      'btn--on-dark': this.onDark,
    };
  }
}
