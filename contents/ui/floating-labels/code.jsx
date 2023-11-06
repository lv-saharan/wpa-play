import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-floating",
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
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </>
      );
    }
  }
);
render(<wp-floating />, "body");