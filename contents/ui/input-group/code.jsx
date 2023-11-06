import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-group",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "tables",
      "utilities",
      "forms",
      "buttons",
      "grid",
      "scrollbar"
    );
    render() {
      return (
        <>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>

          <label for="basic-url" class="form-label">
            Your vanity URL
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
            />
            <span class="input-group-text">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Server"
              aria-label="Server"
            />
          </div>

          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
            />
          </div>

          <div class="input-group">
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="radio"
                value=""
                aria-label="Radio button for following text input"
              />
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with radio button"
            />
          </div>
        </>
      );
    }
  }
);
render(<wp-group />, "body");