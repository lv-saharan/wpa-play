import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js"

let component = "hello,world"
render(component, "body")

//plain object
render({
    nodeName: "h1",
    attributes: {
        style: {
            color: "red",
            border: "solid #ccc 1px"
        }
    },
    children: ["hello", ",", "world", "!"]
}, "body")

//h function
render(h("h1", {
    style: {
        color: "blue",
        border: "solid #ccc 1px"
    }
}, "hello", ",", "world", "!"), "body")


const vnode = <h1 style="color: blue; border: 1px solid rgb(204, 204, 204);">hello,world!</h1>

render(() => {
    return vnode
}, "body")


function AComponent() {
    return <h1 style="color: blue; border: 1px solid rgb(204, 104, 204);">这是一个函数标签</h1>
}

render(<AComponent />, "body")