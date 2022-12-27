import { PharosElement } from '../base/pharos-element';
import { html } from 'lit';
import type { TemplateResult, CSSResultArray } from 'lit';
import { coachmarkStyles } from './pharos-coachmark.css';

/**
 * Pharos coachmark component.
 *
 * @tag pharos-coachmark
 *
 */
export class PharosCoachmark extends PharosElement {
  public static override get styles(): CSSResultArray {
    return [coachmarkStyles];
  }

  protected override render(): TemplateResult {
    return html` <span>This is the Coachmark component!</span> `;
  }
}
