import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";
console.log(CSS);
define(
  "wp-bad",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "badge",
      "utilities",
      "buttons"
    );
    render() {
      return (
        <>
          <h1>
            Example heading{" "}
            <wp-badge class="bg-secondary">Badge Control New</wp-badge>
          </h1>
          <h1>
            Example heading <span class="badge bg-secondary">New</span>
          </h1>
          <h2>
            Example heading <span class="badge bg-secondary">New</span>
          </h2>
          <h3>
            Example heading <span class="badge bg-secondary">New</span>
          </h3>
          <h4>
            Example heading <span class="badge bg-secondary">New</span>
          </h4>
          <h5>
            Example heading <span class="badge bg-secondary">New</span>
          </h5>
          <h6>
            Example heading <span class="badge bg-secondary">New</span>
          </h6>

          <button type="button" class="btn btn-primary">
            Notifications <span class="badge text-bg-secondary">4</span>
          </button>
          <hr />
          <button type="button" class="btn btn-primary">
            Notifications - Badge Control{" "}
            <wp-badge class="bg-danger" text="99"></wp-badge>
          </button>
          <hr />

          <button type="button" class="btn btn-primary position-relative">
            Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>

          <hr />
          <button type="button" class="btn btn-primary position-relative">
            Badge Control
            <wp-badge position="bottom-right" class="bg-danger">
              <span style="color:black">999</span>
            </wp-badge>
          </button>
        </>
      );
    }
  }
);
render(<wp-bad />, "body");