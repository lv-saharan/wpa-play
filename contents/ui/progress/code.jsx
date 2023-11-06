import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-prog",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "progress",
      "utilities",
      "transitions"
    );
    percent = 26
    installed() {
      setInterval(() => {
        if (this.percent < 100) {
          this.percent++
          this.update()
        }
      }, 1000);
    }
    render() {
      return (
        <>
          hello,world!
          <wp-progress value={this.percent} style="height:1px;width:200px"></wp-progress>
          <hr />
          <wp-progress value={this.percent} class="bg-success"></wp-progress>
          <hr />
          <wp-progress value={this.percent} class="bg-danger" striped></wp-progress>



          <hr />
          <wp-progress value={this.percent} class="bg-danger" striped animated></wp-progress>
        </>
      );
    }
  }
);
render(<wp-prog />, "body");