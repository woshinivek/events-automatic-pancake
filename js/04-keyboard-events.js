const refs = {
  btnClear: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output"),
};

window.addEventListener("keydown", onKeydown);
refs.btnClear.addEventListener("click", onClearOutput);

function onKeydown(event) {
  refs.output.textContent += event.key;

  console.log("event.code: ", event.code);
  console.log("event.key: ", event.key);
}

function onClearOutput(event) {
  refs.output.textContent = "";

  //   location.reload();
}
