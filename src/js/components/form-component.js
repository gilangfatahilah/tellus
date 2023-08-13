import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class FormComponents extends LitNoShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container mt-5 p-3">
        <header>
          <h3 class="form-title text-center color-secondary">Share your story here!</h3>
        </header>
        <div class="content">
          <form
            class="row g-3 needs-validation justify-content-center color-secondary"
            id="addForm"
            novalidate
          >
            <div class="col-12">
              <label for="validationName" class="form-label fw-bold">Name</label>
              <input
                type="text"
                class="form-control"
                id="validationName"
                placeholder="Your Name..."
                required
              />
              <div class="invalid-feedback">Name is required!</div>
            </div>

            <div class="col-12">
              <label for="validationStory" class="form-label fw-bold">Story</label>
              <textarea
                id="validationStory"
                class="form-control"
                rows="6"
                placeholder="Your Story..."
                required
                style="resize: none"
              ></textarea>
              <div class="invalid-feedback">Story is required!</div>
            </div>

            <div class="col-12">
              <label for="validationImage" class="form-label fw-bold">Photo</label>
              <div style="width: 100%; height: 10rem" class="mb-5">
                <img class="img-fluid h-100" src="" alt="Photo Preview" id="templatePreview" />
                <div
                  class="w-100 h-100 d-none"
                  style="
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                  id="validationImageChange"
                ></div>
              </div>
              <input
                type="file"
                class="form-control"
                id="validationImage"
                accept="image/*"
                required
              />
              <div class="invalid-feedback">Image is required!</div>
            </div>

            <div class="col-12 text-center">
              <button class="btn btn-primary text-light px-5" type="submit">Share Story!</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('form-component', FormComponents);
