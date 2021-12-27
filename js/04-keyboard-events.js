// const refs = {
//   btnClear: document.querySelector(".js-clear"),
//   output: document.querySelector(".js-output"),
// };

// window.addEventListener("keydown", onKeydown);
// refs.btnClear.addEventListener("click", onClearOutput);

// function onKeydown(event) {
//   refs.output.textContent += event.key;

//   console.log("event.code: ", event.code);
//   console.log("event.key: ", event.key);
// }

// function onClearOutput(event) {
//   refs.output.textContent = "";

//   //   location.reload();
// }

// const refs = {
//   clearBtn: document.querySelector(".js-clear"),
//   output: document.querySelector(".js-output"),
// };

// window.addEventListener("keypress", onKeyPress);
// // window.addEventListener("keydown", onKeyDown);

// refs.clearBtn.addEventListener("click", onClearOutput);

// function onKeyPress(event) {
//   console.log(event);
//   refs.output.textContent += event.key;
// }

// // function onKeyDown(event) {
// //   console.log(event);
// //   refs.output.textContent += event.key;
// // }

// function onClearOutput(event) {
//   refs.output.textContent = "";
//   location.reload();
// }

// -------------------------------------------------------------------
// -------------------------------------------------------------------

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

function onKeyDown(ev) {
  document.body.classList.add("show-backdrop");
  // console.dir(ev.target);
}

function onKeyUp() {
  document.body.classList.remove("show-backdrop");
  // location.reload();
}

// console.dir(document.body);

// // console.log(document.body.innerHTML);

// -------------------------------------------------------------------
// -------------------------------------------------------------------

// const refs = {
//   clearBtn: document.querySelector(".js-clear"),
//   otputRef: document.querySelector(".js-output"),
// };

// window.addEventListener("keypress", onKeyPress);
// refs.clearBtn.addEventListener("click", onClearBtn);

// function onKeyPress(ev) {
//   refs.otputRef.textContent += ev.key;
// }

// function onClearBtn() {
//   refs.otputRef.textContent = "";
// }

// -------------------------------------------------------------------
// -------------------------------------------------------------------
