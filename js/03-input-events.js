const refs = {
  input: document.querySelector(".js-input"),
  licenseCheckbox: document.querySelector(".js-license"),
  nameLabel: document.querySelector(".js-button > span"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus(event) {
  console.log("Input got focus");
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
