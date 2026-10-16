import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonVariant } from '../../../core/models/landing.model';

/**
 * Pill button. Renders as an anchor when `href` is set, otherwise as a native
 * `<button>`. Ghost styling follows the surrounding surface tokens.
 *
 * ```html
 * <app-button href="#contact" variant="primary" size="sm">Contact us</app-button>
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

  get classes(): Record<string, boolean> {
    return {
      btn: true,
      [`btn--${this.variant}`]: true,
      'btn--sm': this.size === 'sm',
    };
  }
}
