export default ({ id, title } = {}) => {
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
