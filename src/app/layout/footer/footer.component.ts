import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER } from '../../core/data/landing-content';

/** Page footer: brand mark, attribution and investor contact. */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly footer = FOOTER;
}
