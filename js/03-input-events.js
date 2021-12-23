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

const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const licenseRef = document.querySelector(".js-license");
const labelRef = document.querySelector(".js-button > span");

inputRef.addEventListener("focus", onFocusChange);
inputRef.addEventListener("blur", onBlurChange);
inputRef.addEventListener("input", onInputChange);
licenseRef.addEventListener("change", onLicenseChange);

function onFocusChange(ev) {
  console.dir(ev.target);
  console.log("FOCUS");
}

function onBlurChange(ev) {
  console.dir(ev.target);
  console.log("BLUR");
}

function onInputChange(ev) {
  labelRef.textContent = ev.target.value;
}

function onLicenseChange(ev) {
  // console.dir(evt.target);
  // console.dir(btnRef);

  btnRef.disabled = !ev.target.checked;
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
