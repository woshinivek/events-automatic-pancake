import cars from "./vehicles.js";

/* 
1. С использованием значений массива создать 
маркированный список.

 Создать кнопки 'добавить' и 'удалить', 
 которые будут 
 менять состав списка.

 Для оптимизации списка нужно добавить кастомный 
 атрибут id. 

 В списке четное значение должно красится красным 
 а не четные в синим цветом.
*/

const parrentContainerRef = document.getElementById("container");

const ulRef = document.createElement("ol");
ulRef.id = "cars-container";

const btnContainer = document.createElement("div");
btnContainer.id = "btn-container";

const createBtnRef = document.createElement("button");
createBtnRef.classList.add("js-create-btn");
createBtnRef.textContent = "CREATE";

const removeBtnRef = document.createElement("button");
removeBtnRef.classList.add("js-remove-btn");
removeBtnRef.textContent = "REMOVE";

const inputRef = document.createElement("input");
inputRef.classList.add("input", "js-input");
inputRef.placeholder = `Enter make and model`;
inputRef.style.marginBottom = "10px";

createBtnRef.addEventListener("click", onCreateBtnClick);
removeBtnRef.addEventListener("click", onButtonRemoveClick);

cars.forEach(({ make, model }, index) => {
  const liItem = document.createElement("li");
  liItem.textContent = `${make}: ${model}`;

  (index + 1) % 2 === 0
    ? liItem.classList.add("even")
    : liItem.classList.add("odd");

  ulRef.append(liItem);
});

function onCreateBtnClick(evt) {
  const newLiItem = document.createElement("li");
  newLiItem.textContent = inputRef.value;
  inputRef.value = "";

  ulRef.children.length % 2 === 0
    ? newLiItem.classList.add("odd")
    : newLiItem.classList.add("even");

  ulRef.appendChild(newLiItem);
}

function onButtonRemoveClick(evt) {
  ulRef.lastElementChild.remove();
}

// document.body.firstElementChild.append(ulRef);
parrentContainerRef.append(ulRef, inputRef);
btnContainer.append(createBtnRef, removeBtnRef);
parrentContainerRef.append(btnContainer);
