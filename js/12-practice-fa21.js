const refs = {
  label: document.querySelector(".input-label"),
  input: document.querySelector(".input"),
};

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);

function onInputFocus(evt) {
  refs.label.classList.add("focused");
}

function onInputBlur(evt) {
  refs.label.classList.remove("focused");
}
