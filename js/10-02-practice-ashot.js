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
  passwordInput: document.querySelector("#password"),
  checkbox: document.getElementById("checkbox"),
  submitBtn: document.querySelector("#submitBtn"),
  msgBox: document.getElementById("msgBox"),
};

refs.loginInput.addEventListener("blur", onLoginBlur);

function onLoginBlur(evt) {
  Number(evt.currentTarget.value.length) < 4
    ? console.log("hi, add more")
    : console.log("Ok Good");

  evt.currentTarget.value = "";
}
