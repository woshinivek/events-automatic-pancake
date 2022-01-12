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

const parrentContainer = document.getElementById("container");
const ulRef = document.createElement("ul");

cars.forEach(({ make, model }, index) => {
  const liItem = document.createElement("li");
  liItem.textContent = `${make}: ${model}`;

  //   if ((index + 1) % 2 === 0) {
  //     liItem.classList.add("even");
  //   }

  //   if ((index + 1) % 2 === 1) {
  //     liItem.classList.add("odd");
  //   }

  (index + 1) % 2 === 0
    ? liItem.classList.add("even")
    : liItem.classList.add("odd");

  ulRef.append(liItem);
});

ulRef.id = "carsContainer";

// document.body.firstElementChild.append(ulRef);
parrentContainer.append(ulRef);
