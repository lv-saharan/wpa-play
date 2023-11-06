import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-imp",
  class extends Component {    
    render() {
      return (
        <fieldset style="height:500px">
          <legend>导入 </legend>
          <wp-import src={new URL("../remote/index.js", import.meta.url).href} module="welcome" />
          <hr />
          <wp-import src={new URL("../remote/index.js", import.meta.url).href} module="user" />
          <hr />
        </fieldset>
      );
    }
  }
);
render(<wp-imp />, "body");