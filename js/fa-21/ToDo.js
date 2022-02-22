export default class ToDo {
  constructor({ title } = {}) {
    this.id = Date.now();
    this.title = title;
  }
}
