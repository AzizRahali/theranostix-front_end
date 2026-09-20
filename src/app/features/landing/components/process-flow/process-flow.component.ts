import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FlowNode } from '../../../../core/models/landing.model';

/**
 * Horizontal (desktop) / vertical (mobile) process pipeline rendered on a dark
 * panel. Each node's icon is resolved from its `FlowIcon` key to an inline SVG.
 */
@Component({
  selector: 'app-process-flow',
  standalone: true,
  templateUrl: './process-flow.component.html',
  styleUrl: './process-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessFlowComponent {
  @Input({ required: true }) nodes: readonly FlowNode[] = [];
}
