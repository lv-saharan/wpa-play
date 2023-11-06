import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";
const themeColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

define(
  "wp-notification",
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
          <wp-tab
            items={[
              {
                nav: "wp-alter",
                pane: (
                  <>
                    <wp-alert closeable theme-color="success">
                      A simple alert—check it out!
                      <span className="aaa">style test</span>
                    </wp-alert>
                    {themeColors.map((color) => (
                      <wp-alert theme-color={color}>
                        A simple {color} alert—check it out!
                      </wp-alert>
                    ))}
                  </>
                ),
              }
            ]}
          />
        </>
      );
    }
  }
);
render(<wp-notification />, "body");