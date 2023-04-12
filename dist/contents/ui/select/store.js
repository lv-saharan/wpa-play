const { html } = wpa;
const options = Array.from({ length: 20 }).map((v, index) => {
  return {
    value: index,
    text: "option-" + index,
    element:
      index == 10
        ? html`<b style=${{ color: "red" }}>${"option-" + index}</b>`
        : "option-" + index,
  };
});

export default {
  options,
};
