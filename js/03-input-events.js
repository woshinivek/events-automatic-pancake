const refs = {
  input: document.querySelector(".js-input"),
  license: document.querySelector(".js-button > span"),
  nameLabel: document.querySelector(".js-button > span"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);

refs.input.addEventListener("input", onInputChange);

function onInputFocus(event) {
  console.log("Input got focus");
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
}
