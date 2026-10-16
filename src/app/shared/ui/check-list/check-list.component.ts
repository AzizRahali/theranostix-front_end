import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Ruled list of short statements, each led by an accent marker. On entrance
 * the items slide in one after another and each marker "powers on".
 */
@Component({
  selector: 'app-check-list',
  standalone: true,
  template: `
    <ul class="list">
      @for (item of items; track item) {
        <li class="list__item" [style.--i]="$index">
          <span class="list__mark" aria-hidden="true"></span>{{ item }}
        </li>
      }
    </ul>
  `,
  styleUrl: './check-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckListComponent {
  @Input({ required: true }) items: readonly string[] = [];
}
