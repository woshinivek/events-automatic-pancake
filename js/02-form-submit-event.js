const formEl = document.querySelector(".js-register-form");
const butnEl = document.querySelector(".magic-button");

formEl.addEventListener("submit", onFormSubmit);
// butnEl.addEventListener("mouseup", onMouseUpChangeColor);
// butnEl.removeEventListener("mouseup", onMouseUpChangeColor);

function onFormSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget);
  console.log(event.currentTarget.elements.email.value);
  console.log(event.currentTarget.password.value);
}

// function onMouseUpChangeColor(event) {
//   butnEl.classList.add("magic-btn-clicked");
// }
