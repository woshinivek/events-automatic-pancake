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
  if (evt.currentTarget.value) return;

  refs.label.classList.remove("focused");
}
