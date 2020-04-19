import { LitElement, customElement, html, css } from "lit-element";
import style from "../css/shared.css";
import { cssVars } from '../css/css-vars'

declare global {
  interface HTMLElementTagNameMap {
    "view-shell": AppShellElement;
  }
}

@customElement("app-shell")
export class AppShellElement extends LitElement {
  render() {
    return html`
          <h1>u, there</h1>
          <h2>me, here</h2>
          <p>us, around everywhere</p>

          <p class="something">This should be pretty close to the MVP: minimum viable codebase for consuming a separate CSS stylesheet inside a Lit WC, using Benny Power's lit-css package</p>
          <p>See the README for more details.</p>
    `;
  }

  static get styles() {
    return [
      cssVars,
      style,
      css`
        :host {
          display: flexbox;
          text-align: center;
        }
      `
    ];
  }
}
