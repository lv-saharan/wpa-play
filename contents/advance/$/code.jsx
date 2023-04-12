import {
  h,
  render,
  Component,
  define,
  createRef,
} from "http://wpa.flatweb.net/wpa/latest/wpa.js";

define(
  "app-main",
  class extends Component {
    h1Ref = createRef();

    render() {
      return (
        <>
          <button
            onClick={(evt) => {
              if (this.h1Ref.current == this.$("h1")) {
                this.$$("h2,h3,h4,h5").forEach((el) => {
                  el.innerHTML += "$ is equal to createRef ；";
                });
              }
            }}
          >
            test
          </button>
          <h1 ref={this.h1Ref}>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
        </>
      );
    }
  }
);

render(<app-main />, "body");
