import { h, render, Component, define, html } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

export default class extends Component {

    get paramA() {
        return Number.parseInt(this.$("#paramA").value)
    }

    get paramB() {
        return Number.parseInt(this.$("#paramB").value)
    }


    render() {
        return html`<div>
            <ul>
                <li>paramA:<input id="paramA" type="number" /></li>
                <li>paramB:<input id="paramB"  type="number" /></li>
            </ul>
        </div>`
    }
}