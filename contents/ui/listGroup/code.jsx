import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-list",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot", 
      "forms", 
      "list-group"
    );
    render() {
      return (
        <div>
          <ul class="list-group">
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label class="form-check-label" for="firstCheckbox">
                First checkbox
              </label>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="secondCheckbox"
              />
              <label class="form-check-label" for="secondCheckbox">
                Second checkbox
              </label>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="thirdCheckbox"
              />
              <label class="form-check-label" for="thirdCheckbox">
                Third checkbox
              </label>
            </li>
          </ul>
        </div>
      );
    }
  }
);
render(<wp-list />, "body");