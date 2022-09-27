// By Najika Yoo @najikahalsema

import {
  LitElement,
  html,
  css,
  customElement,
  TemplateResult,
} from "lit-element";
import "@spectrum-web-components/action-button/sp-action-button.js";
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/popover/sp-popover.js';
import headingStyles from "@spectrum-web-components/styles/heading.js";

@customElement("my-menu")
export default class Menu extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      sp-popover {
        position: relative;
      }
    `, headingStyles,
  ];
  protected render(): TemplateResult {
    return html`
      <h4 class="spectrum-Heading spectrum-Heading--sizeS">Default</h4>
      <sp-menu>
        <sp-menu-item>
          Deselect
        </sp-menu-item>
        <sp-menu-item>
          Invert Selection
        </sp-menu-item>
        <sp-menu-item>
          Feather...
        </sp-menu-item>
        <sp-menu-item>
          Select and Mask...
        </sp-menu-item>
        <sp-menu-item>
          Save Selection
        </sp-menu-item>
        <sp-menu-item disabled>
          Make Work Path
        </sp-menu-item>
      </sp-menu>
      <div></div>
      <h4 class="spectrum-Heading spectrum-Heading--sizeS">Popover Menu</h4>
      <sp-popover open>
        <sp-menu>
            <sp-menu-group>
                <span slot="header">New York</span>
                <sp-menu-item>
                    Central Park
                </sp-menu-item>
                <sp-menu-item>
                    Prospect Park
                </sp-menu-item>
            </sp-menu-group>
            <sp-menu-group>
                <span slot="header">San Fransisco</span>
                <sp-menu-item>
                    Golden Gate Park
                </sp-menu-item>
                <sp-menu-item>
                    Lake Merced Park
                </sp-menu-item>
            </sp-menu-group>
        </sp-menu>
      </sp-popover>
    `;
  }
}
