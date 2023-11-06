import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-containers",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "containers"
    );
    render() {
      return (
        <>
          <div class="container">Content here</div>
          <div class="container-sm">100% wide until small breakpoint</div>
          <div class="container-md">100% wide until medium breakpoint</div>
          <div class="container-lg">100% wide until large breakpoint</div>
          <div class="container-xl">100% wide until extra large breakpoint</div>
          <div class="container-xxl">
            100% wide until extra extra large breakpoint
          </div>
        </>
      );
    }
  }
);
render(<wp-containers />, "body");