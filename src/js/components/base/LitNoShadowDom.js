import { LitElement } from 'lit';

class LitNoShadowDom extends LitElement {
  createRenderRoot() {
    return this;
  }
}

export default LitNoShadowDom;
