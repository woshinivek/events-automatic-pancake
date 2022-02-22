import ToDoList from "./ToDoList.js";
import ToDo from "./ToDo.js";
import toDoView from "./toDoView.js";

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

const firstOne = toDoView(firstTask);
const secondOne = toDoView(secondTask);

console.log(firstOne);
console.log(secondOne);
