import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-tool",
  class extends Component {
    static css = [
      CSS.getCSSStyleSheets(
        "reboot",
        "buttons"
      ),
      `:host{
        display:block;
        height:200px;
      }`
    ]
    render() {
      return (
        <>
          <wp-tooltip placement="right">
            <button class="btn  btn-primary">作為父組件的子組件</button>
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-tooltip>

          <hr />
          <button class="btn btn1 btn-primary">show tip left-start</button>
          <wp-tooltip
            reference="button.btn1"
            placement="left-start"
            strategy="fixed"
            body=" this is a tip And here's some amazing content. It's very engaging.
            Right?"
          ></wp-tooltip>
          <button class="btn btn2 btn-primary">show tip left</button>
          <wp-tooltip
            reference="button.btn2"
            body={
              <b style="color:red">
                this is a tip And here's some amazing content. It's very
                engaging. Right?
                空间不够时只能自动显示
              </b>
            }
            placement="left"
          ></wp-tooltip>
          <button class="btn btn3 btn-primary">show tip right</button>
          <wp-tooltip reference="button.btn3" placement="right">
            <h1 slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </h1>
          </wp-tooltip>

          <button class="btn btn4 btn-primary">show tip top</button>
          <wp-tooltip reference="button.btn4" placement="top">
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              TOP?
            </div>
          </wp-tooltip>
        </>
      );
    }
  }
);
render(<wp-tool />, "body");