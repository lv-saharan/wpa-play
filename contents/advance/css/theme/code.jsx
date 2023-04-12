import {
  h,
  render,
  Component,
  define,
  setTheme,
} from "http://wpa.flatweb.net/wpa/latest/wpa.js";

define(
  "a-tag",
  class extends Component {
    static css = css; //css 文件
    render() {
      return (
        <h1>
          css demo
          <button
            onClick={(evt) => {
              this.style.setProperty("--wp-h1-color", "blue");
            }}
          >
            set css var
          </button>
        </h1>
      );
    }
  }
);
render(
  <fieldset>
    <legend>css var </legend>
    <a-tag></a-tag>
  </fieldset>,
  "body"
);

define(
  "b-tag",
  class extends Component {
    render() {
      return (
        <>
          <a-tag></a-tag>
          <a-tag></a-tag>
          <a-tag></a-tag>
        </>
      );
    }
  }
);
render(
  <fieldset>
    <legend>theme-css 注入</legend>
    <b-tag
      theme-css={`
    h1{
      text-decoration: underline;
    }
  `}
    ></b-tag>
  </fieldset>,
  "body"
);

render(
  <fieldset>
    <legend>全局主题</legend>
    <button onClick={(evt) => {
      setTheme(`
      h1::after{
        content:'全局注入';
        color:black;
      }
      `)
    }}>setTheme</button>
  </fieldset>,
  "body"
);
