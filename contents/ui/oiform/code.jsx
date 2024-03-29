import { h, render, define, Component, classNames, uniqueTag, createRef} from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";
const {
  css: { getCSSStyleSheets },
  form,
} = wpa.ui;

define(
  "wp-oiform",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot", 
      "buttons", 
      "forms", 
      "grid", 
      "utilities"
    );

    render() {
      return (
        <form is="wp-form" class="row">
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              value="Mark"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              value="Otto"
              pattern="[a-zA-Z]+"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              Username
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      );
    }
  }
);
render(<wp-oiform />, "body");

define(
  "wp-oiform1",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot", 
      "buttons", 
      "forms", 
      "grid", 
      "utilities"
    );
    #formRef = createRef();
    installed() {
      form.validate(this.#formRef.current);
    }

    render() {
      return (
        <form class="row g-3" ref={this.#formRef}>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              value="Mark"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip02"
              value="Otto"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltipUsername" class="form-label">
              Username
            </label>
            <div class="input-group has-validation">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              required
            />
            <div class="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationTooltip04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div class="invalid-tooltip">Please select a valid state.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip05"
              required
            />
            <div class="invalid-tooltip">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      );
    }
  }
);
render(<wp-oiform1 />, "body");