import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

define(
  "a-child",
  class AChild extends Component {
    static defaultProps = {
      count: 0,
    };
    static propTypes = {
      count: Number,
    };
    render(props) {
      return (
        <div>
          A count is :{props.count}
          <button
            onClick={(evt) => {
              //这里会有不符合预期的结果
              this.updateProps({ count: props.count + 1 });
            }}
          >
            +
          </button>
        </div>
      );
    }
  }
);

define(
  "b-child",
  class extends Component {
    static defaultProps = {
      count: 0,
    };
    static propTypes = {
      count: Number,
    };
    render() {
      return (
        <div>
          B count is :{this.$props.count}
          <button
            onClick={(evt) => {
            
              this.update$Props({ count: this.$props.count + 1 });
            }}
          >
            +
          </button>
        </div>
      );
    }
  }
);

define(
  "a-tag",
  class extends Component {
    count = 100;

    childProps = { count: 101 };

    render() {
      return (
        <div>
          <a-child count={this.count}></a-child>
          <b-child props={this.childProps}></b-child>

          <button
            onClick={(evt) => {
              //虽然只更新自己，但是相关的子节点也会更新props，
              //默认情况下receiveProps不返回false 子控件就会更新
              this.updateSelf();
            }}
          >
            update
          </button>
        </div>
      );
    }
  }
);

render(<a-tag></a-tag>, "body");
