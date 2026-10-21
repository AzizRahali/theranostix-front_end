import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Numbered steps joined by a line — vertical on small screens, horizontal from
 * `md`. On entrance the line draws and the nodes switch on in sequence.
 */
@Component({
  selector: 'app-node-track',
  standalone: true,
  template: `
    <ol class="track">
      @for (step of steps; track step; let i = $index) {
        <li class="track__step" [style.--i]="i">
          <span class="track__node" aria-hidden="true">{{ i < 9 ? '0' + (i + 1) : i + 1 }}</span>
          <span class="track__label">{{ step }}</span>
        </li>
      }
    </ol>
  `,
  styleUrl: './node-track.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeTrackComponent {
  @Input({ required: true }) steps: readonly string[] = [];
}
