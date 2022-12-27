import { html, nothing, type PropertyValues } from 'lit';
import type { TemplateResult, CSSResultArray } from 'lit';
import { property, query } from 'lit/decorators';
import { coachmarkStyles } from './pharos-coachmark.css';
import { PharosIcon, type IconName } from '../icon/pharos-icon';
import { PharosButton } from '../button/pharos-button';
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  OverlayElement,
  type Placement,
  shift,
  type Side,
} from '../base/overlay-element';
import deepSelector from '../../utils/deepSelector';
import { ifDefined } from 'lit/directives/if-defined';
import { PharosHeading } from '../heading/pharos-heading';

/**
 * Pharos coachmark component.
 *
 * @tag pharos-coachmark
 *
 * @slot - Content inside the coachmark (default slot)
 * @slot footer - Content at the bottom of the coachmark
 *
 */
export class PharosCoachmark extends OverlayElement {
  static elementDefinitions = {
    'pharos-icon': PharosIcon,
    'pharos-button': PharosButton,
    'pharos-heading': PharosHeading,
  };

  /**
   * The custom boundary that the tooltip should stay within.
   * @attr boundary
   */
  @property({ type: String, reflect: true })
  public boundary = 'clippingAncestors';

  /**
   * Indicates the heading of the coachmark.
   * @attr heading
   */
  @property({ type: String, reflect: true })
  public heading?: string = '';

  /**
   * The icon to be shown in the heading of the coachmark.
   * @attr icon
   * @type {IconName | undefined}
   */
  @property({ type: String, reflect: true })
  public icon?: IconName;

  /**
   * Indicates thate the icon should be shown at the beginning of the heading (default).
   * @attr icon-left
   */
  @property({ type: Boolean })
  public iconLeft = true;

  /**
   * Indicates that the icon should be shown at the end of the heading.
   * @attr icon-right
   */
  @property({ type: Boolean })
  public iconRight = false;

  /**
   * The caret element on the coachmark.
   */
  @query('.coachmark__caret')
  private _caret!: HTMLSpanElement;

  /**
   * The root of the coachmark element.
   */
  @query('.coachmark__container')
  private _coachmark!: HTMLDivElement;

  /**
   * The elelemnt that the coachmark will be anchored to.
   */
  private _anchorElement: Element | null = null;

  private _cleanup?: { (): void } = undefined;

  public static override get styles(): CSSResultArray {
    return [coachmarkStyles];
  }

  constructor() {
    super();
    this._handleClose = this._handleClose.bind(this);
  }

  //#region Lifecycle hooks

  protected override firstUpdated(): void {
    const id = this.getAttribute('id') || '';
    // To support triggers within other ShadowRoots such as the tooltip for comboboxes
    const root = this.getRootNode() as Document | ShadowRoot;

    this._anchorElement = root.querySelector(`[data-tooltip-id="${id}"]`);
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    document.addEventListener('pharos-tooltip-close', this._handleClose as EventListener);
  }

  override disconnectedCallback(): void {
    document.removeEventListener('pharos-tooltip-close', this._handleClose as EventListener);
    super.disconnectedCallback && super.disconnectedCallback();
  }

  protected override update(changedProperties: PropertyValues): void {
    super.update && super.update(changedProperties);
  }

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        // may not want?
        this._closeOpenCoachmarks();
        this._positionElements();
      } else if (this._cleanup) {
        this._cleanup();
      }
    }

    super.updated(changedProperties);
  }

  //#endregion

  //#region Event handlers

  private _handleClose(event: CustomEvent): void {
    if (event.detail !== this) {
      this.open = false;
    }
  }

  //#endregion

  private _renderHeading(): TemplateResult {
    const iconHeadingHtml = this._renderIcon();
    return this.icon && iconHeadingHtml !== nothing ? iconHeadingHtml : html`${this.heading}`;
  }

  private _renderIcon(): TemplateResult | typeof nothing {
    let icon;
    if (this.iconLeft) {
      icon = html`
        <pharos-icon name="${ifDefined(this.icon)}"></pharos-icon>
        ${this.heading}
      `;
    } else if (this.iconRight) {
      icon = html`
        ${this.heading}
        <pharos-icon name="${ifDefined(this.icon)}"> </pharos-icon>
      `;
    }
    return icon ?? nothing;
  }

  private _closeOpenCoachmarks(): void {
    const details = {
      bubbles: true,
      composed: true,
      detail: this,
    };
    this.dispatchEvent(new CustomEvent('pharos-coachmark-close', details));
  }

  private _positionCaret(
    placement: Placement,
    arrowX: number | undefined,
    arrowY: number | undefined
  ): void {
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0] as Side];

    Object.assign(this._caret.style, {
      left: arrowX ? `${arrowX}px` : '',
      top: arrowY ? `${arrowY}px` : '',
      right: '',
      bottom: '',
      [staticSide]: '-4px',
    });
  }

  private _positionTooltip(x: number, y: number): void {
    Object.assign(this._coachmark.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  private _positionElements() {
    if (this._anchorElement && this._bubble) {
      this._cleanup = autoUpdate(this._anchorElement, this._coachmark, () => {
        if (this._anchorElement && this._bubble) {
          computePosition(this._anchorElement, this._coachmark, {
            placement: this.placement === 'auto' ? 'top' : this.placement,
            strategy: this.strategy,
            middleware: [
              offset(10),
              flip({
                fallbackPlacements: this._filteredFallbackPlacements,
              }),
              shift({
                boundary:
                  this.boundary === 'clippingAncestors'
                    ? this.boundary
                    : deepSelector(`#${this.boundary}`) || undefined,
              }),
              arrow({ element: this._caret }),
            ],
          }).then(({ middlewareData, placement, x, y }) => {
            if (middlewareData.arrow) {
              const { x: arrowX, y: arrowY } = middlewareData.arrow;
              this._positionCaret(placement, arrowX, arrowY);
            }
            this._positionTooltip(x, y);
          });
        }
      });
    }
  }

  protected override render(): TemplateResult {
    return html`
      <div class="coachmark__container" role="dialog" aria-hidden="${!this.open}">
        <div class="coachmark__header">
          <pharos-heading class="coachmark__heading" level="2" preset="1--bold">
            ${this._renderHeading()}
          </pharos-heading>
          <pharos-button
            id="close-button"
            type="button"
            variant="subtle"
            icon="close"
            label="Close coachmark"
            @click="${() => (this.open = false)}"
          ></pharos-button>
        </div>
        <div class="coachmark__body">
          <slot></slot>
        </div>
        <div class="coachmark__footer">
          <slot name="footer"></slot>
        </div>
        <div class="coachmark__caret"></div>
      </div>
    `;
  }
}
