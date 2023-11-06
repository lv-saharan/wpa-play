import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-pop",
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
          <wp-popover
            placement="right"
            css={`
              .popover {
                --wp-popover-bg: black;
              }

              .popover-body {
                --wp-popover-body-color: white;
                width: 20rem;
              }
            `}
          >
            <button class="btn  btn-primary">slot 一个button</button>

            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-popover>

          <wp-popover
            placement="right"
            header="test"
            body={
              <p style="width:20rem;">
                hello....，Each of these base placements has an alignment in the
                form -start and -end. For example, 'right-start', or
                'bottom-end'. These allow you to align the tooltip to the edges
                of the button, rather than centering it
              </p>
            }
          >
            <button class="btn  btn-primary">slot 一个button2 </button>
          </wp-popover>

          <hr />
          <button class="btn btn1 btn-primary">show tip bottom</button>
          <wp-popover
            reference="button.btn1"
            header="tip title"
            placement="bottom-end"
            strategy="fixed"
          >
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-popover>

          <button class="btn btn3 btn-primary">show tip right</button>
          <wp-popover
            reference="button.btn3"
            header="tip title"
            placement="right"
          >
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-popover>

          <button class="btn btn4 btn-primary">show tip top</button>
          <wp-popover
            reference="button.btn4"
            header="tip title"
            placement="top"
          >
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-popover>
          <button class="btn btn2 btn-primary">show tip left</button>
          <wp-popover
            reference="button.btn2"
            header="tip title"
            placement="left"
          >
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </wp-popover>
        </>
      );
    }
  }
);
render(<wp-pop />, "body");