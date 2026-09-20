import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EdgeColumn } from '../../../core/models/landing.model';

/**
 * One comparison column in the Competitive Edge section. The `legacy` tone is a
 * light card; the `us` tone is a filled brand-primary card.
 */
@Component({
  selector: 'app-edge-column',
  standalone: true,
  templateUrl: './edge-column.component.html',
  styleUrl: './edge-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdgeColumnComponent {
  @Input({ required: true }) column!: EdgeColumn;

  @HostBinding('class.edge--us') get isUs(): boolean {
    return this.column.tone === 'us';
  }
  @HostBinding('class.edge--legacy') get isLegacy(): boolean {
    return this.column.tone === 'legacy';
  }
}
