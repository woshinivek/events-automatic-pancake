const colorPrewievRef = document.querySelector(".js-color-preview");
const colorButtons = document.querySelectorAll("button[data-color]");
const actionButtons = document.querySelectorAll("button[data-action]");
const outputRef = document.querySelector(".js-output");

colorButtons.forEach((button) =>
  button.addEventListener("click", onChooseColorBtn)
);

actionButtons.forEach((button) =>
  button.addEventListener("click", onActionBtnClick)
);

function onChooseColorBtn(evt) {
  const element = evt.target;
  colorPrewievRef.style.backgroundColor = element.dataset.color;
}

function onActionBtnClick(evt) {
  switch (evt.target.dataset.action) {
    case "approve":
      outputRef.textContent = `Заказ подтвержден`;
      break;

    case "edit":
      outputRef.textContent = `Заказ редактируется`;
      break;

    case "delete":
      outputRef.textContent = `Заказ удален`;
      break;

    default:
      console.log("Ting bu dong");
  }
}
