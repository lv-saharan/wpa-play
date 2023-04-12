import { h, render, Component, define } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

const rows   = Array.from({ length: 20 }).map((v, index) => {
  return {
    id: index,
    name:
      index == 10 ? (
        <b style={{ color: "red" }}>{"user-" + index}</b>
      ) : (
        "user-" + index
      ),
  };
});
const columns = [
  {
    type: "checkbox",
    field: "id",
    checked: [1, 2, 3],
  },
  {
    type: "index",
    title: "序号",
    style: {
      width: "2em",
      color: "blue",
    },
    titleStyle: {
      color: "red",
      "white-space": "nowrap",
    },
  },
  {
    field: "id",
  },
  { field: "name", title: "姓名" },
];
render(<wp-table class="table-hover" columns={columns} rows={rows} />, "body");
