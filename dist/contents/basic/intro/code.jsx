import { h, render } from "http://wpa.flatweb.net/wpa/latest/wpa.js"
render(<style>{css}</style>, "head")
render(<h1>hello,world!</h1>, "#container");
let count = 0
function Counter(props, { update }) {
    return <div><button>-</button>{count} <button>+</button></div>
}

render(<Counter></Counter>, "body")