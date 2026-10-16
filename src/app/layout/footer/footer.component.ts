import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER } from '../../core/data/landing-content';
import { BrandMarkComponent } from '../../shared/ui/brand-mark/brand-mark.component';

/** Site footer: brand, section links, contact and attribution. */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BrandMarkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly footer = FOOTER;
  protected readonly year = new Date().getFullYear();
}
