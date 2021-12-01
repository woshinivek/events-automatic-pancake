const refs = {
  btnClear: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output"),
};

window.addEventListener("keypress", onOutputChange);

function onOutputChange(event) {
  console.log("code: ", event.code);
}
