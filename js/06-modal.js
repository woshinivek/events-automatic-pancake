const refs = {
  openBtn: document.querySelector('[data-action="open-modal"]'),
  closeBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
  //   body: document.querySelector("body"),
};

refs.openBtn.addEventListener("click", onModalOpen);
refs.closeBtn.addEventListener("click", onModalClose);

function onModalOpen(event) {
  document.body.classList.add("show-modal");
  //   refs.body.classList.add("show-modal");
}

function onModalClose(event) {
  document.body.classList.remove("show-modal");
  //   refs.body.classList.remove("show-modal");
}
