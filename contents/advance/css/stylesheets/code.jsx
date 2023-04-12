import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

//parent window
const currRoot = new URL('./talks/advance/css/stylesheets/', parent.location.href).href

define(
  "a-tag",
  class extends Component {
    //可以函数、string，数组
    static stylesheets = new URL('./shared.css', currRoot).href

    //只是一个状态字段没有任何特殊作用
    state = 0

    stylesheets() {
      if (this.state === 0) {
        return new URL('./a.css', currRoot).href
      }
      if (this.state === 1) {
        return new URL('./b.css', currRoot).href
      }
      if (this.state === 2) {
        return [new URL('./a.css', currRoot).href, new URL('./b.css', currRoot).href]
      }
    }
    render() {
      return <div> <h1>
        这是一个 stylesheets demo
      </h1 >
        <button onClick={evt => {
          this.state = 1
          this.update()
        }}>
          更换样式</button> <button onClick={evt => {
            this.state = 2
            this.update()
          }}>添加样式</button></div>

    }
  }
);

render(<a-tag></a-tag>, 'body')
render(<hr />, 'body')
render(<a-tag style-sheets={new URL('./c.css', currRoot).href}></a-tag>, 'body')
