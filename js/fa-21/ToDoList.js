export default class ToDoList {
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
