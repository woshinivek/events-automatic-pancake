const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseover", onMouseEnter);
boxRef.addEventListener("mouseout", onMouseLeave);
// boxRef.addEventListener("mouseover", onMouseOver);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
}

function onMouseOver(event) {
  const box = event.currentTarget;
  //   box.classList.add("box--active");
}
