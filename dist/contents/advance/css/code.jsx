import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

define(
  "a-tag",
  class extends Component {
    static css = [
      () => {
        return Promise.resolve(`
        :host{
          display:block;
          border:solid 1px #ccc;
        }
      `);
      },
      css,
    ];
    render() {
      return <h1>css demo</h1>;
    }
  }
);

render(<a-tag></a-tag>, "body");

const cssss = new CSSStyleSheet();
cssss.replaceSync(`
:host{
  border:solid 3px #ee0088;
  
}
`);

render(<a-tag cssss={cssss} css="h1{color:blue}"></a-tag>, "body");

render(<a-tag cssss={cssss} css="h1{color:red}"></a-tag>, "body");

render(
  <a-tag
    cssss={[
      cssss,
      () => {
        return `:host h1::after{
         color:black;
         content:'clock:${new Date().getHours()}'
    }`;
      },
    ]}
    css="h1{color:yellow}"
  ></a-tag>,
  "body"
);
