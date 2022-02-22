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

class ToDoList {
  constructor() {
    this.list = [];
  }

  add(toDo) {
    this.list = [...this.list, toDo];
  }

  remove(id) {
    this.list = [...this.list].filter((toDo) => toDo.id !== id);
  }

  get allTasks() {
    return this.list;
  }
}

class ToDo {
  constructor({ title } = {}) {
    this.id = Date.now();
    this.title = title;
  }
}

const toDoList = new ToDoList();

const firstTask = new ToDo({ title: "Hello tupangi" });
const secondTask = new ToDo({ title: "putin huilo" });

toDoList.add(firstTask);
toDoList.add(secondTask);

// console.log(toDoList.allTasks);

// console.log(toDoList);
