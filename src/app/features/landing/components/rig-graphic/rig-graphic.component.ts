import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Decorative hero illustration: a slowly-rotating orbital ring around an
 * abstract robotic injector arm. Purely presentational (aria-hidden).
 */
@Component({
  selector: 'app-rig-graphic',
  standalone: true,
  templateUrl: './rig-graphic.component.html',
  styleUrl: './rig-graphic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RigGraphicComponent {}
