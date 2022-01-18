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

const newForm = document.createElement("div");
// newForm.style.cssText = forms[0];
// newForm.style.backgroundColor = `${colors[2]}`;

document.body.firstElementChild.append(newForm);
