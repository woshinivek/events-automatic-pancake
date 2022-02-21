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

  add(newToDo) {
    this.list = [...this.list, newToDo];
  }

  remove() {}
}

class ToDo {
  constructor({ id, title, description } = {}) {
    this.id = id;
    this.title = title;
    this.descrption = description;
  }
}

const first = new ToDo({ id: Date.now(), title: "Hi", description: "Hello" });

console.log(first);
