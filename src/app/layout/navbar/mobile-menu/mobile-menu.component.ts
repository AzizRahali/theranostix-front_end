import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
} from '@angular/core';
import { Link } from '../../../core/models/landing.model';
import { SectionSpy } from '../../../shared/navigation/section-spy.service';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

/**
 * Full-screen mobile menu: large numbered section links that rise in when it
 * opens, plus the contact CTA and email. Inert (unfocusable) while closed.
 */
@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  @Input({ required: true }) menuId!: string;
  @Input({ required: true }) open = false;
  @Input({ required: true }) links: readonly Link[] = [];
  @Input({ required: true }) cta!: Link;
  @Input({ required: true }) email!: Link;

  /** Emitted when a link is followed, so the owner can close the menu. */
  @Output() readonly navigate = new EventEmitter<void>();

  private readonly spy = inject(SectionSpy);
  protected readonly activeHref = computed(() => {
    const key = this.spy.active();
    return key ? `#${key}` : null;
  });
}
