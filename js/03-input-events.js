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

inputRef.addEventListener("input", (evt) => {
  labelRef.textContent = evt.target.value;
});

licenseRef.addEventListener("change", (evt) => {
  console.dir(evt.target);
  console.dir(btnRef);

  btnRef.disabled = !evt.target.checked;
});
