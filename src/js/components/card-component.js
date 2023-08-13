import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class CardStoryComponent extends LitNoShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
    class: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.id = '';
    this.photoUrl = '';
    this.name = '';
    this.description = '';
    this.date = '';
    this.class = 'h-100';
  }

  render() {
    return html`
      <div class="grid-item ${this.class}">
        <div class="card ${this.class}" style="width: 18rem id=${this.id}">
          <img src=${this.photoUrl} class="card-img-top ${this.class}" alt=${this.name} />
          <div class="card-body">
            <h5 class="card-title fw-bold">${this.name}</h5>
            <p class="card-text opacity-50">${this.date}</p>
            <p class="card-text ${this.class}">${this.description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStoryComponent);
