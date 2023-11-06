import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";
import layoutCSS from "./layout.scss";
console.log(layoutCSS);
define(
  "wp-lay",
  class extends Component {
    static css = 
    [
        CSS.getCSSStyleSheets(
        "reboot",
        "utilities",
        "scrollbar"
      ),
      layoutCSS
    ]
    render() {
      return (
        <wp-layout ref={this.layoutRef}>
          <div slot="header">
            <ul>
              <li>
                <wp-icon name="code" />
              </li>
              <li>文件</li>
              <li>编辑</li>
              <li>选择</li>
              <li>查看</li>
            </ul>
            <div
              class="position-absolute  top-100 start-50 translate-middle-x"
              style={{ "z-index": 1 }}
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleHeader();
                }}
              >
                close header
              </button>
            </div>
          </div>
          <div slot="content">内容部分！</div>
          <div slot="left">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div class="tools">
              <ul>
                <li>
                  <wp-icon
                    name="file_copy"
                    onClick={(evt) => {
                      this.layoutRef.current.toggleLeft();
                    }}
                  />
                </li>
                <li>
                  <wp-icon name="search" />
                </li>
                <li>
                  <wp-icon name="lock_person" />
                </li>
                <li>
                  <wp-icon name="access_alarm" />
                </li>
                <li>
                  <wp-icon name="adf_scanner" />
                </li>
                <li>
                  <wp-icon name="apps" />
                </li>
              </ul>
            </div>
          </div>
          <div slot="right">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div
              class="position-absolute top-50 end-100 translate-middle-y"
              style="z-index:10"
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleRight();
                }}
              >
                close right
              </button>
            </div>
          </div>
        </wp-layout>
      );
    }
  }
);
render(<wp-lay />, "body");