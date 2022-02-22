import ToDoList from "./ToDoList.js";
import ToDo from "./ToDo.js";

const refs = {
  label: document.querySelector(".input-label"),
  input: document.querySelector(".input"),
};

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);

function onInputFocus(evt) {
  refs.label.classList.add("focused");
}

function onInputBlur(evt) {
  if (evt.currentTarget.value) return;

  refs.label.classList.remove("focused");
}

const toDoList = new ToDoList();

const firstTask = new ToDo({ title: "Hello tupangi" });
const secondTask = new ToDo({ title: "putin huilo" });

toDoList.add(firstTask);
toDoList.add(secondTask);

const toDoView = ({ id, title } = {}) => {
  const toDoWrapperRef = document.createElement("div");
  toDoWrapperRef.classList.add("to-do");

  const titleRef = document.createElement("p");
  titleRef.textContent = title;
  titleRef.classList.add("to-do__description");

  const deleteBtnRef = document.createElement("button");
  deleteBtnRef.textContent = "Delete";
  deleteBtnRef.classList.add("btn", "btn-remove");

  toDoWrapperRef.append(titleRef, deleteBtnRef);

  return toDoWrapperRef;
};

const firstOne = toDoView(firstTask);
const secondOne = toDoView(secondTask);

console.log(firstOne);
console.log(secondOne);
