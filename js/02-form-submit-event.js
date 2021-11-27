const formEl = document.querySelector(".js-register-form");
const butnEl = document.querySelector(".magic-button");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget);
}
