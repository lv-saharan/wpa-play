import { h, render, Component, define, createRef } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-off",
  class extends Component {
    static css = [
      CSS.getCSSStyleSheets("reboot"),
      `
      :host{
        position:relative;
        display:block;
        height:2000px;
      }
      `,
    ];
    leftRef = createRef();
    rightRef = createRef();
    topRef = createRef();
    bottomRef = createRef();
    render() {
      return (
        <>
          <wp-offcanvas
            visible
            position="static"
            style="border-top:solid 1px #ccc;border-bottom:solid 1px #ccc"
            title="hello"
          >
            hello,do something
          </wp-offcanvas>

          <div>
            <button
              onClick={(evt) => {
                this.leftRef.current.toggle();
              }}
            >
              toggle left
            </button>
            <button
              onClick={(evt) => {
                this.rightRef.current.toggle();
              }}
            >
              toggle right
            </button>
            <button
              onClick={(evt) => {
                this.topRef.current.toggle();
              }}
            >
              toggle top
            </button>
            <button
              onClick={(evt) => {
                this.bottomRef.current.toggle();
              }}
            >
              toggle bottom
            </button>
          </div>
          <wp-offcanvas ref={this.leftRef}>
            <div slot="title">
              <wp-icon name="home" /> 文件
            </div>
            hello,do something
          </wp-offcanvas>

          <wp-offcanvas
            ref={this.rightRef}
            placement="end"
            use-backdrop="false"
            duration="1"
          >
            <div slot="title">
              <wp-icon name="home" /> 文件
            </div>
            hello,do something
          </wp-offcanvas>

          <wp-offcanvas ref={this.topRef} placement="top">
            <div slot="title">
              <wp-icon name="home" /> 文件
            </div>
            hello,do something
          </wp-offcanvas>

          <wp-offcanvas ref={this.bottomRef} placement="bottom">
            <div slot="title">
              <wp-icon name="home" /> 文件
            </div>
            hello,do something
          </wp-offcanvas>
        </>
      );
    }
  }
);
render(<wp-off />, "body");