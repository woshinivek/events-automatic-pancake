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

const array = [];

const constainerRef = document.querySelector(".container");
const ulRef = document.createElement("ul");

ulRef.id = "carsContainer";

constainerRef.append(ulRef);
