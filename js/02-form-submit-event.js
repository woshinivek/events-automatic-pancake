// const formEl = document.querySelector(".js-register-form");
// const butnEl = document.querySelector(".magic-button");

// formEl.addEventListener("submit", onFormSubmit);
// // butnEl.addEventListener("mouseup", onMouseUpChangeColor);
// // butnEl.removeEventListener("mouseup", onMouseUpChangeColor);

// function onFormSubmit(event) {
//   event.preventDefault();

//   console.dir(event.currentTarget);
//   //   console.log(event.currentTarget.elements.email.value);
//   //   console.log(event.currentTarget.password.value);
//   const formElements = event.currentTarget.elements;
//   console.log(formElements);

//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;

//   const values = {
//     mail,
//     password,
//     subscription,
//   };

//   console.log(values);
// }

// function onMouseUpChangeColor(event) {
//   butnEl.classList.add("magic-btn-clicked");
// }

// -------------------------------------------------------------------

const formEl = document.querySelector(".js-register-form");
const butnEl = document.querySelector(".magic-button");

formEl.addEventListener("submit", onFormSubmit);
// butnEl.addEventListener("mouseup", onMouseUpChangeColor);
// butnEl.removeEventListener("mouseup", onMouseUpChangeColor);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.dir(formData);

  //   const entries = formData.entries();

  //   for (const entrie of entries) {
  //     console.log(entrie);
  //   }

  formData.forEach((value, name) => {
    console.log("name:", name);
    console.log("value:", value);
  });
}
