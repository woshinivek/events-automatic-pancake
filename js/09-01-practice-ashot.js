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
  if (inputRef.value !== "") {
    newLiItem.textContent = inputRef.value;
  }

  if (inputRef.value === "") {
    window.alert("тута");
    return;
  }

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

// --------------------------------------------------
// --------------------------------------------------

// const cars = ["Mercedes", "BMW", "Volvo"];

// const ulList = document.createElement("ul");

// ulList.id = "carsContainer";

// const parentContainer = document.getElementById("container");

// parentContainer.append(ulList);

// const renderPage = (newItem = null) => {
//   if (newItem) {
//     const carsContainer = document.getElementById("carsContainer");
//     const newItemLi = document.createElement("li");
//     newItemLi.textContent = newItem;
//     newItemLi.classList.add((cars.length - 1) % 2 === 0 ? "even" : "odd");
//     carsContainer.appendChild(newItemLi);
//   } else {
//     cars.forEach((car, index) => {
//       const liItem = document.createElement("li");
//       liItem.textContent = car;
//       if (index % 2 === 0) {
//         liItem.classList.add("even");
//       } else {
//         liItem.classList.add("odd");
//       }

//       ulList.append(liItem);
//     });
//   }
// };

// renderPage();

// const buttonContainer = document.createElement("div");

// // buttonContainer.setAttribute("id", "btnContainer");
// buttonContainer.id = "btnContainer";

// parentContainer.append(buttonContainer);

// const btnContainer = document.getElementById("btnContainer");

// const addInput = document.createElement("input");

// addInput.id = "addInput";

// btnContainer.append(addInput);

// addInput.style.display = "block";
// addInput.style.marginBottom = "10px";

// const btnAdd = document.createElement("button");

// btnContainer.append(btnAdd);

// btnAdd.style.marginRight = "10px";

// btnAdd.textContent = "Добавить";

// const btnRemove = document.createElement("button");

// btnContainer.append(btnRemove);
// btnRemove.textContent = "Удалить";

// btnAdd.addEventListener("click", (event) => {
//   const input = document.getElementById("addInput");
//   if (input.value) {
//     cars.push(input.value);
//     renderPage(input.value);
//     input.value = "";
//   }
// });

// btnRemove.addEventListener("click", () => {
//   const ulList = document.getElementById("carsContainer");
//   ulList.removeChild(ulList.lastElementChild);
// });

// // --------------------------------------------------
// // --------------------------------------------------
