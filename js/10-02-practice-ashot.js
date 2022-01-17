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
  checkbox: document.getElementById("checkbox"),
  submitBtn: document.querySelector("#submitBtn"),
  msgBox: document.getElementById("msgBox"),
};

refs.loginInput.addEventListener("blur", onLoginBlur);
refs.passwordInput.addEventListener("blur", onPasswordBlur);

function onLoginBlur(evt) {
  let value = evt.currentTarget.value;

  if (value.length < 4) {
    console.log("hi, add more");
    refs.loginInput.classList.add("error");

    return;
  } else {
    console.log("Ok Good");
    refs.loginInput.classList.remove("error");
  }

  value = "";
}

function onPasswordBlur(evt) {
  let value = evt.currentTarget.value;

  if (value.length < 8) {
    console.log("hi, add more");
    refs.passwordInput.classList.add("error");

    return;
  } else {
    console.log("Ok Good");
    refs.passwordInput.classList.remove("error");
  }

  value = "";
}
