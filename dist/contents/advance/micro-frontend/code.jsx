import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

import componentA from "./talks/advance/micro-frontend/component-a.js";
import componentB from "./talks/advance/micro-frontend/component-b.js";

define("c-a", componentA);
define("c-b", componentB);

define(
  "app-main",
  class extends Component {
    render() {
      return (
        <>
          <c-b id="cb"></c-b>
          <c-a id="ca"></c-a>
          <button
            onClick={(evt) => {
              const { paramA, paramB } = this.$("#cb");
              this.$("#ca").add(paramA, paramB);
            }}
          >
            calc
          </button>
          <hr></hr>
          <button
            onClick={async (evt) => {
              const { default: component } = await import(
                "./talks/advance/micro-frontend/component-c.js"
              );
              this.remoteComponent = component;
              this.update();
            }}
          >
            load remote component{" "}
          </button>
          {this.remoteComponent}
        </>
      );
    }
  }
);
render(
  <fieldset>
    <legend>微前端</legend>
    <app-main />
  </fieldset>,
  "body"
);
