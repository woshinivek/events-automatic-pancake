const colorPrewievRef = document.querySelector(".js-color-preview");

const buttons = document.querySelectorAll("button[data-color]");

buttons.forEach((button) => button.addEventListener("click", onChooseBtnClick));

function onChooseBtnClick(evt) {
  const element = evt.target;
  colorPrewievRef.style.backgroundColor = element.dataset.color;
}
