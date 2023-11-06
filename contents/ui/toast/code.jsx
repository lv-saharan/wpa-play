import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import { css as CSS } from "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

define(
  "wp-toas",
  class extends Component {
    static css = [
      CSS.getCSSStyleSheets(
        "reboot",
        "popover",
        "toasts",
        "utilities",
        "transitions",
        "close"
      ),
      `:host{
        display:block;
        height:200px;
      }`,
    ];
    render() {
      return (
        <>
          <wp-toast visible>
            <span slot="header">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="rounded me-2"
                style="height:3rem;"
                alt="..."
              />
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </span>
            hello!
          </wp-toast>
          <wp-toast class="show position-fixed bottom-0 start-0 p-6">
            <span slot="header" className="d-flex align-items-center">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="rounded me-2"
                style="height:3rem;"
                alt="..."
              />
              <strong class="me-auto">Bootstrap</strong>
              <small>22 mins ago</small>
            </span>
            hello!
          </wp-toast>
          {({ update, vnode }) => {
            vnode.index = vnode.index ?? -1;
            vnode.index++;
            let $toast = [];
            setTimeout(() => {
              update();
            }, 10 * 1000);
            for (let i = 0; i < vnode.index; i++) {
              $toast.push(
                <wp-toast visible key={`key-${i}`}>
                  <span slot="header" className="d-flex align-items-center">
                    <img
                      src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                      class="rounded me-2"
                      style="height:3rem;"
                      alt="..."
                    />
                    <strong class="me-auto">消息</strong>
                    <small>11 mins ago</small>
                  </span>
                  hello! 第{i + 1}次
                </wp-toast>
              );
            }
            return <div class="position-fixed bottom-0 end-0 p-3">{$toast}</div>;
          }}
        </>
      );
    }
  }
);
render(<wp-toas />, "body");