import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FeatureItem } from '../../../core/models/landing.model';

/** Numbered, top-ruled feature entry used in the Solution grid. */
@Component({
  selector: 'app-feature-item',
  standalone: true,
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureItemComponent {
  @Input({ required: true }) feature!: FeatureItem;
}
