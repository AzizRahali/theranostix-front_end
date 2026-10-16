import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Viewfinder overlay for imagery: four corner brackets that "lock on", a typed
 * label at the top, a live status label at the bottom and a periodic scan
 * sweep. The parent positions the host (default inset is 8%).
 */
@Component({
  selector: 'app-hud-frame',
  standalone: true,
  host: { 'aria-hidden': 'true' },
  templateUrl: './hud-frame.component.html',
  styleUrl: './hud-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HudFrameComponent {
  @Input({ required: true }) topLabel!: string;
  @Input({ required: true }) bottomLabel!: string;
}
