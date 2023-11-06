import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-range",
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
          <label for="customRange1" class="form-label">
            Example range1
          </label>
          <input type="range" class="form-range" id="customRange1">

          </input>
          <label for="customRange2" class="form-label">
            Example range2
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            id="customRange2"
          ></input>
        </>
      );
    }
  }
);
render(<wp-range />, "body");