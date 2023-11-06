import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-accord",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "tables",
      "accordion",
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
                pane: (
                  <>
                    <wp-accordion
                      first-open
                      items={[
                        {
                          header: "Accordion #1",
                          body: "hello,body",
                        },
                        {
                          header: "Accordion #2",
                          body: "body 2",
                        },
                        {
                          header: (
                            <span>
                              <wp-icon name="home" /> HOME
                            </span>
                          ),
                          body: (item, setting, accordion) => {
                            if (!item.__body) {
                              setTimeout(() => {
                                item.__body = <h1>Function Callback</h1>;
                                accordion.update();
                              }, 10000);

                              return <wp-loading name="ball-fall" size=".5" />;
                            } else {
                              return item.__body;
                            }
                          },
                        },
                      ]}
                    />
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
render(<wp-accord />, "body");