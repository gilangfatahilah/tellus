import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class footerComponents extends LitNoShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <p class="text-center mt-5">
        A Simply Story App From
        <a class="text-decoration-none" href="https://github.com/gilangfatahilah" target="_blank">
          Gilang Fatahilah
        </a>
      </p>
      <p class="text-center">Dicoding - Belajar Tools Front End Web Intermediate</p>
    `;
  }
}

customElements.define('footer-component', footerComponents);
