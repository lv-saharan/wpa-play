import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";

render(<style>{css}</style>, "head");

function AComponent() {
  return <h1>这是一个函数标签</h1>;
}

render(<AComponent />, "body");

//带逻辑的标签
function BComponent(props, { update, vnode, children }) {
  let times = vnode.times ?? 0;
  return (
    <h1>
      这是一个函数标签,hello {props.name} !,
      <button
        onClick={(e) => {
          vnode.times = times + 1;
          console.log(vnode.times);
          update();
        }}
      >
        click {times} times
      </button>
      {children}
    </h1>
  );
}

render(<BComponent name="saharan" />, "body");

render(<BComponent name="tom" />, "body");

render(
  <BComponent name="jerry">
    <div>a child</div>
  </BComponent>,
  "body"
);
