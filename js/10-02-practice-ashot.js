/*
2. В форме авторизации пользователь должен ввести 
логин и пароль для входа в систему.
  - кнопка 'Войти' становится активной только в том 
    случае когда заполнены оба поля и пользователь отметил 
    чекбокс
  - поле логин должно содержать значение минимум 4 символа
  - поле пароль от 8-30 символов
  - если условия не соответствуют требованиям то 
    при потере фокуса поле ввода показывает ошибку
  - после нажатия кнопки Войти надо вывести сообщение 
    об успешной авторизацие
*/

const refs = {
  loginInput: document.getElementById("login"),
  logInfo: document.querySelector("#loginInfo"),
  passwordInput: document.querySelector("#password"),
  passwordInfo: document.querySelector("#passwordInfo"),
  checkbox: document.getElementById("checkbox"),
  submitBtn: document.querySelector("#submitBtn"),
  msgBox: document.getElementById("msgBox"),
  formRef: document.querySelector(".form"),
};

refs.loginInput.addEventListener("focus", onLoginFocus);
refs.loginInput.addEventListener("blur", onLoginBlur);
refs.passwordInput.addEventListener("focus", onPasswordFocus);
refs.passwordInput.addEventListener("blur", onPasswordBlur);
refs.checkbox.addEventListener("change", onLicenseChange);
refs.formRef.addEventListener("submit", onFormSubmit);
refs.submitBtn.addEventListener("click", onBtnClick);

function onLoginFocus(evt) {
  refs.logInfo.style.display = "block";
}

function onLoginBlur(evt) {
  refs.logInfo.style.display = "none";

  if (evt.currentTarget.value.length < 4) {
    console.log("Login must contains more than 4 characters");
    refs.loginInput.classList.add("error");

    return;
  } else {
    console.log("Login ok");
    if (refs.loginInput.classList.contains("error")) {
      refs.loginInput.classList.remove("error");
    }
  }
}

function onPasswordFocus() {
  refs.passwordInfo.style.display = "block";
}

function onPasswordBlur(evt) {
  refs.passwordInfo.style.display = "none";

  if (evt.currentTarget.value.length < 8) {
    console.log("Password must contain more than 8 symbols");
    refs.passwordInput.classList.add("error");

    return;
  } else {
    console.log("Password OK");
    refs.passwordInput.classList.remove("error");
  }
}

function onLicenseChange() {
  if (refs.checkbox.checked) {
    console.log("Checked");
  }
}

function onBtnClick(evt) {
  if (
    refs.loginInput.classList.contains("error") ||
    refs.passwordInput.classList.contains("error") ||
    !refs.checkbox.checked
  ) {
    // window.alert("Register is not compleet");
    refs.msgBox.innerHTML = "Register is not compleet";
  } else {
    // window.alert("Register completed");
    refs.msgBox.innerHTML = "Register completed";
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
}
