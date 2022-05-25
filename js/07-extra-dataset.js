// function addEventListener(eventType, callBack) {
//   callBack({});
// }

// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// const colorPrewievRef = document.querySelector(".js-color-preview");
// const colorButtons = document.querySelectorAll("button[data-color]");
// const actionButtons = document.querySelectorAll("button[data-action]");
// const outputRef = document.querySelector(".js-output");

// colorButtons.forEach((button) =>
//   button.addEventListener("click", onChooseColorBtn)
// );

// actionButtons.forEach((button) =>
//   button.addEventListener("click", onActionBtnClick)
// );

// function onChooseColorBtn(evt) {
//   const element = evt.currentTarget;
//   colorPrewievRef.style.backgroundColor = element.dataset.color;
// }

// function onActionBtnClick(evt) {
//   switch (evt.target.dataset.action) {
//     case "approve":
//       outputRef.textContent = `Заказ подтвержден`;
//       break;

//     case "edit":
//       outputRef.textContent = `Заказ редактируется`;
//       break;

//     case "delete":
//       outputRef.textContent = `Заказ удален`;
//       break;

//     default:
//       console.log("Ting bu dong");
//   }
// }

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// const refs = {
//   colorsPrev: document.querySelector(".js-color-preview"),

//   colorButtons: document.querySelectorAll("button[data-color]"),
//   // colorButtons: Array.from(document.querySelectorAll("button[data-color]")),

//   actionButtons: document.querySelectorAll("button[data-action]"),
//   output: document.querySelector(".js-output"),
// };

// refs.colorButtons.forEach((button) => {
//   button.addEventListener("click", onColorBtnClick);
// });

// refs.actionButtons.forEach((button) => {
//   button.addEventListener("click", onActionBtnClick);
// });

// function onColorBtnClick(evt) {
//   refs.colorsPrev.style.backgroundColor = evt.currentTarget.dataset.color;
//   //   console.log(evt.currentTarget.dataset.color);
// }

// function onActionBtnClick(evt) {
//   refs.output.textContent = evt.currentTarget.dataset.action;

//   switch (evt.currentTarget.dataset.action) {
//     case "approve":
//       refs.output.textContent = "Заказ подтвержден";
//       break;

//     case "edit":
//       refs.output.textContent = "Заказ Редактируется";
//       break;

//     case "delete":
//       refs.output.textContent = "Заказ удален";
//       break;

//     default:
//       console.log("Ting bu dong");
//   }
// }

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const refs = {
  colorsContainer: document.querySelector("#colors"),
  colorPreview: document.querySelector(".js-color-preview"),
};

refs.colorsContainer.addEventListener("click", onColorsBtnClick);

function onColorsBtnClick(evt) {
  if (evt.target.nodeName !== "BUTTON" && !evt.target.dataset.color) {
    console.log("not");
    return;
  }

  console.log("target: ", evt.target);
  console.log("evt.target.dataset.color: ", evt.target.dataset.color);

  refs.colorPreview.style.backgroundColor = evt.target.dataset.color;
}

console.log("BUTTON" !== "BUTTON");
