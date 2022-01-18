/* 
3. Создать небольшую игру :)
// const rand = Math.floor(Math.random() * (9 - 2 + 1) + 2); 

- Изначально на экране пользователя будет отображаться какая 
    нибудь форма (круг, квадрат, прямоугольник)
  - при нажатии на нее в рандомном порядке форма должна 
  менятся на другую
  - форма каждый раз должна появляться в разных местах 
  а странице
  - цвет формы в рандомном порядке меняется, 
    используя цвета из заранее заготовленного массива
  
*/

const forms = [
  "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
  "width: 150px; height: 100px; border-width: 1px; border-color: #000000",
];

const colors = ["red", "blue", "green"];

const randomizer = (max) => {
  return Math.floor(Math.random() * max);
};

const renderForm = () => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const newForm = document.createElement("div");
  newForm.id = "form";
  newForm.style.cssText = forms[randomizer(forms.length)];
  newForm.style.backgroundColor = colors[randomizer(forms.length)];

  // newForm.style.cssText = `position: absolute; top: ${randomizer(
  //   100
  // )}%; left: ${randomizer(100)}%;`;

  newForm.style.position = "absolute";
  newForm.style.top = `${randomizer(100)}%`;
  newForm.style.left = `${randomizer(100)}%`;

  // document.body.firstElementChild.append(newForm);
  container.append(newForm);

  const formFun = document.getElementById("form");
  formFun.addEventListener("click", renderForm);
};

document.addEventListener("DOMContentLoaded", () => {
  renderForm();
});
