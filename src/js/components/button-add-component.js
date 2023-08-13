import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class ButtonAddComponent extends LitNoShadowDom {
  static properties = {
    to: { type: String, reflect: true },
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkProperties();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`The "to" attribute must be applied to the element ${this.localName}`);
    }

    if (!this.hasAttribute('content')) {
      throw new Error(`The "content" attribute must be applied to the element ${this.localName}`);
    }
  }

  render() {
    return html`
      <button type="button" class="btn btn-primary fs-6">
        <a href=${this.to} class="text-decoration-none">${this.content}</a>
      </button>
    `;
  }
}
