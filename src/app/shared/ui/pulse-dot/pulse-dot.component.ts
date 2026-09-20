import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Small pulsing "live system" indicator dot. Decorative by default. */
@Component({
  selector: 'app-pulse-dot',
  standalone: true,
  template: `<span class="dot" [style.width.px]="size" [style.height.px]="size"
              aria-hidden="true"></span>`,
  styleUrl: './pulse-dot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PulseDotComponent {
  @Input() size = 7;
}
