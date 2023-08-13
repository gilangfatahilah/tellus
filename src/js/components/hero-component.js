import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class HeroComponents extends LitNoShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Must Contain "brandName" attribute for ${this.localName} !`);
    }
  }

  render() {
    return html`
      <section class="hero-container">
        <h1>${this.brandName}</h1>
        <p>Tell your own story here !</p>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponents);
