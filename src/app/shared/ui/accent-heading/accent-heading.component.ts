import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeadingPart } from '../../../core/models/landing.model';

interface HeadingWord {
  readonly text: string;
  readonly accent: boolean;
}

/**
 * Light-weight display heading whose `accent` runs render in italic accent
 * color. `level` sets the semantic element; level 1 also uses the hero scale.
 * Words are individually masked so they rise in sequence when an ancestor
 * plays its entrance (`.th-play`). Parts are expected to split on whole words.
 *
 * ```html
 * <app-accent-heading [level]="1" [parts]="[{ text: 'The ' }, { text: 'future', accent: true }]" />
 * ```
 */
@Component({
  selector: 'app-accent-heading',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './accent-heading.component.html',
  styleUrl: './accent-heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccentHeadingComponent {
  @Input() level: 1 | 2 = 2;

  @Input({ required: true })
  set parts(parts: readonly HeadingPart[]) {
    this.words = parts.flatMap((part) =>
      part.text
        .split(/\s+/)
        .filter(Boolean)
        .map((text) => ({ text, accent: !!part.accent })),
    );
  }

  protected words: readonly HeadingWord[] = [];
}
