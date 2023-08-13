import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class NavbarComponents extends LitNoShadowDom {
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
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">${this.brandName}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${this.brandName}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 gap-3 align-items-center pe-3">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/add.html">Add Your Story</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavbarComponents);
