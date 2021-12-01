const refs = {
  btnClear: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output"),
};

window.addEventListener("keypress", onOutputChange);
refs.btnClear.addEventListener("click", onClearOutput);

function onOutputChange(event) {
  console.log("code: ", event.code);
  console.log("Key: ", event.key);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = "";
}
