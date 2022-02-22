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
    this.list = [...this.list, newToDo];
  }

  remove(id) {
    this.list = [...this.list].filter((toDo) => toDo.id !== id);
  }
}

class ToDo {
  constructor({ title, description } = {}) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
  }
}

const first = new ToDo({ title: "Hi", description: "Hello" });

console.log(first);
