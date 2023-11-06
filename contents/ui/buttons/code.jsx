import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-buttons",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "breadcrumb",
      "utilities",
      "buttons",
      "button-group",
      "close"
    );
    render() {
      return (
        <div>
          <div>
            <a href="https://getbootstrap.com/docs/5.2/components/buttons/">
              参考Bootstrap
            </a>
          </div>
          <wp-tab cssss={CSS.getCSSStyleSheets("buttons", "button-group", "close")}
            items={[
              {
                nav: "颜色",
                pane: (
                  <div>
                    <button class="btn">default</button>
                    <button class="btn btn-primary btn-primary2">
                      primary
                    </button>
                    <button class="btn btn-danger">danger</button>
                    <button class="btn btn-info">info</button>
                    <button class="btn btn-warning">
                      <wp-icon name="person" />
                      info
                    </button>
                  </div>
                ),
              },
              {
                nav: "基本",
                pane: (
                  <div>
                    <button type="button" class="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" class="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" class="btn btn-success">
                      Success
                    </button>
                    <button type="button" class="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" class="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" class="btn btn-info">
                      Info
                    </button>
                    <button type="button" class="btn btn-light">
                      Light
                    </button>
                    <button type="button" class="btn btn-dark">
                      Dark
                    </button>

                    <button type="button" class="btn btn-link">
                      Link
                    </button>
                  </div>
                ),
              },
              {
                nav: "其他",
                pane: (
                  <div>
                    <a class="btn btn-primary" href="#" role="button">
                      Link
                    </a>
                    <button class="btn btn-primary" type="submit">
                      Button
                    </button>
                    <input
                      class="btn btn-primary"
                      type="button"
                      value="Input"
                    />
                    <input
                      class="btn btn-primary"
                      type="submit"
                      value="Submit"
                    />
                    <input class="btn btn-primary" type="reset" value="Reset" />
                  </div>
                ),
              },
              {
                nav: "Outerline",
                pane: (
                  <div>
                    <button type="button" class="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" class="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Danger
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" class="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" class="btn btn-outline-light">
                      Light
                    </button>
                    <button type="button" class="btn btn-outline-dark">
                      Dark
                    </button>
                  </div>
                ),
              },
              {
                nav: "Size",
                pane: (
                  <div>
                    <button type="button" class="btn btn-primary btn-lg">
                      Large button
                    </button>
                    <button type="button" class="btn btn-secondary btn-lg">
                      Large button
                    </button>
                    <button type="button" class="btn btn-primary btn-sm">
                      Small button
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm">
                      Small button
                    </button>
                  </div>
                ),
              },
              {
                nav: "disable",
                pane: (
                  <div>
                    <button type="button" class="btn btn-primary" disabled>
                      Primary button
                    </button>
                    <button type="button" class="btn btn-secondary" disabled>
                      Button
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      disabled
                    >
                      Primary button
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      disabled
                    >
                      Button
                    </button>
                  </div>
                ),
              },
              {
                nav: "group",
                pane: (
                  <>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-primary">
                        Left
                      </button>
                      <button type="button" class="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" class="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </>
                ),
              },
              {
                nav: "close",
                pane: (
                  <>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>

                    <button
                      type="button"
                      class="btn-close"
                      disabled
                      aria-label="Close"
                    ></button>
                  </>
                ),
              },
            ]}
          ></wp-tab>
          <slot></slot>
        </div>
      );
    }
  }
);
render(<wp-buttons />, "body");