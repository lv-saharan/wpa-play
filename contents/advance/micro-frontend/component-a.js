import { h, render, Component, define, html } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

export default class extends Component {
    /**
     * 提供的add方法
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    add(a, b) {
        this.paramA = a;
        this.paramB = b;
        this.update()
        return a + b
    }

    render() {
        return html`<div>
            <ul>
                <li>paramA:${this.paramA}</li>
                <li>paramB:${this.paramB}</li>
                <li>result:${this.paramB + this.paramA}</li>
            </ul>
        </div>`
    }
}