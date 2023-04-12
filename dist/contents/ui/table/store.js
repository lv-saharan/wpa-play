const { html } = wpa

const rows = Array.from({ length: 20 }).map((v, index) => {
    return {
        id: index,
        name:
            index == 10 ? (
                html`<b style=${{ color: "red" }}>${"user-" + index}</b>`
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


export default {
    rows,
    columns
}