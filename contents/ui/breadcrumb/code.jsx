import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

const items = [
  {
    href: "#/home",
    label: (
      <>
        <wp-icon name="home"></wp-icon>HOME
      </>
    ),
  },
  {
    href: "#library",
    label: (
      <>
        <wp-icon name="local_library" color="green"></wp-icon>LIBRARY
      </>
    ),
  },
  {
    label: (
      <>
        <wp-icon name="data_object" color="blue"></wp-icon>DATA
      </>
    ),
  },
];

define(
  "wp-bread",
  class extends Component {
    static css = CSS.getCSSStyleSheets(
      "reboot",
      "breadcrumb",
      "utilities",
      "buttons"
    );
    render() {
      return (
        <>
          <wp-tab
            items={[
              {
                pane: (
                  <>
                    <wp-breadcrumb items={items} />
                    <wp-breadcrumb items={items} divider="|" />
                    <wp-breadcrumb items={items} divider=">" />
                    <wp-breadcrumb items={items} divider="~" />
                    <wp-breadcrumb
                      items={items}
                      divider={<wp-icon name="keyboard_arrow_right" />}
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
render(<wp-bread />, "body");