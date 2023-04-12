import { h, render, define, Component, createRef, html } from "wpa";
import "wpa-ui";
import css from "./index.scss";
import node_css from "./node.scss";
import highlightCSS from "./highlight.min.css";
import hljs from "./highlight.min.js";
const esbuildService="http://wpa.pir2.top:30088/build"
const {
  css: { getCSSStyleSheets, getCSSStyleSheet },
} = wpa.ui;

define(
  "app-index",
  class extends Component {
    static css = [
      getCSSStyleSheets(
        "reboot",
        "tables",
        "utilities",
        "forms",
        "buttons",
        "grid",
        "scrollbar"
      ),
      css,
      highlightCSS,
    ];
    layoutRef = createRef();
    htmlRef = createRef();
    cssRef = createRef();
    jsxRef = createRef();
    previewRef = createRef();

    #talk = {};
    async loadTalk(path, init = false) {
      this.currPath = path;
      const [store, content, css, html, jsx] = await Promise.all([
        import(`./contents${path}/store.js`)
          .then(({ default: store }) => {
            this.store.content = store;
            return store;
          })
          .catch((exc) => {
            console.error(exc);
            return null;
          }),
        fetch(`./contents${path}/content.html`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.css`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.html`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
        fetch(`./contents${path}/code.jsx`)
          .then((r) => (r.status == 200 ? r.text() : null))
          .catch(() => null),
      ]);

      this.#talk = {
        content,
        css,
        html,
        jsx,
      };

      if (!init && this.#talk.content) {
        await this.$("#content").update();
        this.$("#content").parentNode.scrollTop = 0;
        this.highlight();
        this.cssRef.current.value = css;
        this.htmlRef.current.value = html;
        this.jsxRef.current.value = jsx;
      }
    }

    highlight() {
      this.$("#content")
        .querySelectorAll("pre code")
        .forEach((el) => {
          this.hljs.highlightElement(el);
        });
    }
    run() {
      const html = this.htmlRef.current.value;
      const css = this.cssRef.current.value;
      const jsx = this.jsxRef.current.value;
      const iframe = this.previewRef.current;
      iframe.contentWindow.location = "about:blank";
      fetch(esbuildService, {
        method: "POST",
        body:
          `const css =\`${css}\`;
          ` + jsx,
      })
        .then((r) => r.text())
        .then((js) => {
          const doc = iframe.contentWindow.document;
          doc.body.innerHTML = html;
          let scriptModule = doc.createElement("script");
          scriptModule.setAttribute("type", "module");
          scriptModule.text = js;
          doc.body.appendChild(scriptModule);
        });
    }
    #navs;
    async install() {
      this.#navs = await fetch(
        new URL("./contents/nav.json", import.meta.url).href
      ).then((r) => r.json());
      this.path = location.hash && location.hash.substring(1);
      let keys = this.path.split("/").filter((key) => key);
      if (keys.length == 0) keys = ["home"];
      this.selectedKey = keys.pop();
      this.expandedKeys = keys;
      await this.loadTalk(
        ["", ...this.expandedKeys, this.selectedKey].join("/"),
        true
      );
    }
    installed() {
      this.hljs = hljs;
      this.highlight();
      setTimeout(() => {
        this.run();
      }, 3000);
    }
    render() {
      return (
        <wp-layout ref={this.layoutRef}>
          <div slot="header" class="position-relative">
            <ul>
              <li>
                <a href="javascript:">
                  <wp-icon name="code"></wp-icon> wpa
                </a>
              </li>
            </ul>
            <ul class="position-absolute top-0 end-0">
              <li
                onClick={(evt) => {
                  this.run();
                }}
              >
                <a href="javascript:">
                  <wp-icon name="arrow_right"></wp-icon>Run
                </a>
              </li>
              <li
                title="click to toggle"
                onClick={(evt) => {
                  this.layoutRef.current.toggleRight();
                }}
              >
                <a href="javascript:">
                  <wp-icon name="file_copy" /> Toggle
                </a>
              </li>
            </ul>
          </div>
          <div slot="left">
            <wp-tree
              node-css={node_css}
              nodes={this.#navs}
              selectedKey={this.selectedKey}
              expandedKeys={this.expandedKeys}
              onNodeSelect={(evt) => {
                const {
                  node,
                  treeNode: { path },
                } = evt.detail;
                location.hash = "#" + path;
                this.loadTalk(path).then(() => {
                  this.run();
                });
              }}
            ></wp-tree>
            <div class="tools">
              <ul>
                <li title="click to toggle">
                  <wp-icon
                    name="file_copy"
                    onClick={(evt) => {
                      this.layoutRef.current.toggleLeft();
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div slot="content">
            {() => {
              return <div id="content" unsafeHTML={this.#talk.content}></div>;
            }}
          </div>

          <div slot="right">
            <div class="code">
              <wp-tab
                items={[
                  {
                    key: "jsx",
                    pane: (
                      <wp-coder
                        ref={this.jsxRef}
                        language="javascript"
                        codes={this.#talk.jsx}
                      ></wp-coder>
                    ),
                  },
                  {
                    key: "css",
                    pane: (
                      <wp-coder
                        ref={this.cssRef}
                        language="css"
                        codes={this.#talk.css}
                      ></wp-coder>
                    ),
                  },
                  {
                    key: "html",
                    pane: (
                      <wp-coder
                        ref={this.htmlRef}
                        language="html"
                        codes={this.#talk.html}
                      ></wp-coder>
                    ),
                  },
                ]}
              ></wp-tab>
            </div>
            <div class="preview">
              <iframe
                frameborder="0"
                id="preview"
                src="about:blank"
                ref={this.previewRef}
              ></iframe>
            </div>
          </div>
        </wp-layout>
      );
    }
  }
);
getCSSStyleSheet("root").then((cssss) => {
  document.adoptedStyleSheets = [cssss];
});

render(<app-index></app-index>, "body");
