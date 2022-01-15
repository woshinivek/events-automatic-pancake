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

// const parrentContainerRef = document.getElementById("container");

// const ulRef = document.createElement("ol");
// ulRef.id = "cars-container";

// const btnContainer = document.createElement("div");
// btnContainer.id = "btn-container";

// const createBtnRef = document.createElement("button");
// createBtnRef.classList.add("js-create-btn");
// createBtnRef.textContent = "CREATE";

// const removeBtnRef = document.createElement("button");
// removeBtnRef.classList.add("js-remove-btn");
// removeBtnRef.textContent = "REMOVE";

// const inputRef = document.createElement("input");
// inputRef.classList.add("input", "js-input");
// inputRef.style.marginBottom = "10px";
// inputRef.placeholder = `Enter make and model`;

// createBtnRef.addEventListener("click", onCreateBtnClick);
// removeBtnRef.addEventListener("click", onButtonRemoveClick);

// cars.forEach(({ make, model }, index) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = `${make}: ${model}`;

//   (index + 1) % 2 === 0
//     ? liItem.classList.add("even")
//     : liItem.classList.add("odd");

//   ulRef.append(liItem);
// });

// function onCreateBtnClick(evt) {
//   const newLiItem = document.createElement("li");
//   if (inputRef.value !== "") {
//     newLiItem.textContent = inputRef.value;
//   }

//   if (inputRef.value === "") {
//     window.alert("тута");
//     return;
//   }

//   inputRef.value = "";

//   ulRef.children.length % 2 === 0
//     ? newLiItem.classList.add("odd")
//     : newLiItem.classList.add("even");

//   ulRef.appendChild(newLiItem);
// }

// function onButtonRemoveClick(evt) {
//   ulRef.lastElementChild.remove();
// }

// document.body.firstElementChild.append(ulRef);
// btnContainer.append(createBtnRef, removeBtnRef);
// parrentContainerRef.append(ulRef, inputRef, btnContainer);

// --------------------------------------------------
// --------------------------------------------------

const parentContainerRef = document.getElementById("container");

const ulListRef = document.createElement("ul");
ulListRef.id = "carsContainer";

const buttonContainerRef = document.createElement("div");
buttonContainerRef.id = "buttonContainer";

const addInputRef = document.createElement("input");
addInputRef.id = "addInput";
addInputRef.style.display = "block";
addInputRef.style.marginBottom = "10px";

const btnAddRef = document.createElement("button");
btnAddRef.style.marginRight = "10px";
btnAddRef.textContent = "Добавить";

const btnRemoveRef = document.createElement("button");
btnRemoveRef.textContent = "Удалить";

const renderPage = (newItem = null) => {
  if (newItem) {
    const newItemLi = document.createElement("li");
    newItemLi.textContent = newItem;
    newItemLi.classList.add((cars.length - 1) % 2 === 0 ? "even" : "odd");

    ulListRef.appendChild(newItemLi);
  } else {
    cars.forEach(({ make, model }, index) => {
      const liItem = document.createElement("li");
      liItem.textContent = `${make}: ${model}`;
      if (index % 2 === 0) {
        liItem.classList.add("even");
      } else {
        liItem.classList.add("odd");
      }

      ulListRef.append(liItem);
    });
  }
};

renderPage();

btnAddRef.addEventListener("click", (event) => {
  if (addInputRef.value) {
    cars.push(addInputRef.value);
    renderPage(addInputRef.value);
    addInputRef.value = "";
  }
});

btnRemoveRef.addEventListener("click", () => {
  const ulList = document.getElementById("carsContainer");
  ulList.removeChild(ulList.lastElementChild);
});

buttonContainerRef.append(addInputRef, btnAddRef, btnRemoveRef);
parentContainerRef.append(ulListRef, buttonContainerRef);

// // --------------------------------------------------
// // --------------------------------------------------
