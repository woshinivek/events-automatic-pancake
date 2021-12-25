// const refs = {
//   input: document.querySelector(".js-input"),
//   licenseCheckbox: document.querySelector(".js-license"),
//   nameLabel: document.querySelector(".js-button > span"),
//   btn: document.querySelector(".js-button"),
// };

// // refs.input.addEventListener("focus", onInputFocus);

// refs.input.addEventListener("input", onInputChange);
// refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// function onInputFocus(event) {
//   console.log("Input got focus");
// }

// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// const btnRef = document.querySelector(".js-button");
// const inputRef = document.querySelector(".js-input");
// const licenseRef = document.querySelector(".js-license");
// const labelRef = document.querySelector(".js-button > span");
// const formRef = document.querySelector(".form-input-events");

// inputRef.addEventListener("focus", onFocusChange);
// inputRef.addEventListener("blur", onBlurChange);
// inputRef.addEventListener("input", onInputChange);
// licenseRef.addEventListener("change", onLicenseChange);
// formRef.addEventListener("submit", onFormSubmit);

// function onFocusChange(ev) {
//   console.dir(ev.target);
//   console.log("FOCUS");
// }

// function onBlurChange(ev) {
//   console.dir(ev.target);
//   console.log("BLUR");
// }

// function onInputChange(ev) {
//   labelRef.textContent = ev.target.value;
// }

// function onLicenseChange(ev) {
//   // console.dir(evt.target);
//   // console.dir(btnRef);

//   btnRef.disabled = !ev.target.checked;
// }

// function onFormSubmit(ev) {
//   ev.preventDefault();

//   const formData = new FormData(ev.target);

//   const submittedData = {};

//   formData.forEach((value, key) => {
//     console.log("key: ", key);
//     console.log("value: ", value);

//     submittedData[key] = value;
//   });

//   console.log(submittedData);
// }

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

const inputRef = document.querySelector(".js-input");
const licenseRef = document.querySelector(".js-license");
const labelRef = document.querySelector(".js-button > span");
const btnRef = document.querySelector(".js-button");

inputRef.addEventListener("input", onInputChange);
licenseRef.addEventListener("change", onLicenseChange);
inputRef.addEventListener("focus", onInputFocus);
inputRef.addEventListener("blur", onInputBlur);

function onInputChange(ev) {
  labelRef.textContent = ev.target.value;
}

function onLicenseChange(ev) {
  console.dir(ev.target);
  btnRef.disabled = !ev.target.checked;
}

function onInputFocus() {
  console.log("IN FOCUS!");
}

function onInputBlur() {
  console.log("IN BLUR!");
}



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
