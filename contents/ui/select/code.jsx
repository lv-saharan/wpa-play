import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

const options = Array.from({ length: 20 }).map((v, index) => {
  return {
    value: index,
    text:
      index == 10 ? (
        <b style={{ color: "red" }}>{"option-" + index}</b>
      ) : (
        "option-" + index
      ),
  };
});

define(
  "demo-select",
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
        <form is="wp-form">
          <div class="mb-3">
            <label for="post" class="form-label">
              Options
            </label>
            <wp-select
              max="10"
              min="2"
              options={options}
              required
              class="form-control"
            ></wp-select>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">提交</button>
          </div>
        </form>
      );
    }
  }
);
render(<demo-select />, "body");
