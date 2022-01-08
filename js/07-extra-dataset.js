const colorPrewievRef = document.querySelector("#colors");

const buttons = document.querySelectorAll("button[data-color]");

buttons.forEach((button) => button.addEventListener("click", onChooseBtnClick));

function onChooseBtnClick(evt) {
  console.log(evt);
}
