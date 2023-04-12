import {
  h,
  render,
  Component,
  define,
  createRef,
  apis,
} from "http://wpa.flatweb.net/wpa/latest/wpa.js";

define(
  "app-main",
  class extends Component {
    ctler = apis.createController("./talks/nav.json", import.meta.url, () => {
      //自定义header，可以设置token
      return {};
    });
    async install() {
      this.data = await this.ctler.get();
    }
    render() {
      return (
        <ul>
          {this.data.map((node) => (
            <li>{node.label ?? node.key}</li>
          ))}
        </ul>
      );
    }
  }
);

render(<app-main />, "body");
