import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

let count = 0;
define(
  "a-tag",
  class extends Component {
    static css = css; //css 文件
    updated() {
      console.log("updated");
    }
    render() {
      return (
        <h1>
          {count}
          <button
            onClick={(evt) => {
              for (let i = 0; i < 10; i++) {
                count++;
                this.lazyUpdate();
              }
            }}
          >
            lazyUpdate
          </button>
        </h1>
      );
    }
  }
);
render(
  <fieldset>
    <legend>lazyUpdate </legend>
    <a-tag></a-tag>
  </fieldset>,
  "body"
);

define(
  "b-tag",
  class extends Component {
    render() {
      return (
        <div>
          <a-tag></a-tag>
          <div>
            <button
              onClick={(evt) => {
                this.updateTargets(".some-tag");
              }}
            >
              update .some-tag
            </button>
          </div>
          <div className="some-tag">
            <a-tag></a-tag>
            <a-tag></a-tag>
            <a-tag></a-tag>
            <a-tag></a-tag>
          </div>
        </div>
      );
    }
  }
);
render(
  <fieldset>
    <legend>updateTargets </legend>
    <b-tag></b-tag>
  </fieldset>,
  "body"
);
