import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js"

let component = "hello,world"
render(component, "body")

component = <hr />
render(component, "body")

component = 1000
render(component, "body")

//表达式
render(<h1>表达式：{component},{1 + 1} ,{9 * 9}</h1>, 'body')
//函数节点

render(() => {
    return <h1>这是一个函数节点</h1>
}, "body")

//函数标签

function AComponent() {
    return <h1>这是一个函数标签</h1>
}

render(<AComponent />, "body")

define("a-tag", class extends Component {
    render() {
        return <h1>这是一个WebComponent</h1>
    }
})
render(<a-tag />, "body")
