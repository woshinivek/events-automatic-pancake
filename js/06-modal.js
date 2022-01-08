// const refs = {
//   openBtn: document.querySelector('[data-action="open-modal"]'),
//   closeBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector(".js-backdrop"),
// };

// refs.openBtn.addEventListener("click", onModalOpen);
// refs.closeBtn.addEventListener("click", onModalClose);
// refs.backdrop.addEventListener("click", onBackdropClick);

// function onModalOpen() {
//   window.addEventListener("keydown", onEscKey);
//   document.body.classList.add("show-modal");
// }

// function onModalClose() {
//   window.removeEventListener("keydown", onEscKey);
//   document.body.classList.remove("show-modal");
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onModalClose();
//   }
// }

// function onEscKey(event) {
//   console.log(event.code);
//   if (event.code === "Escape") {
//     onModalClose();
//   }
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------

// const refs = {
//   openBtn: document.querySelector("[data-action=open-modal]"),
//   closeBtn: document.querySelector("[data-action=close-modal]"),
//   backdrop: document.querySelector(".js-backdrop"),
// };

// refs.openBtn.addEventListener("click", onModalOpen);
// refs.closeBtn.addEventListener("click", onModalClose);
// refs.backdrop.addEventListener("click", onBackdropClick);

// function onModalOpen(event) {
//   window.addEventListener("keydown", onEscKey);
//   document.body.classList.add("show-modal");
// }

// function onModalClose(event) {
//   window.removeEventListener("keydown", onEscKey);
//   document.body.classList.remove("show-modal");
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onModalClose();
//   }
// }

// function onEscKey(event) {
//   console.log(event);
//   if (event.code === "Escape") {
//     onModalClose();
//   }
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------

const refs = {
  openModalBtn: document.querySelector('button[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('button[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal(ev) {
  document.body.classList.add("show-modal");

  window.addEventListener("keydown", onEscKey);
}

function onCloseModal(ev) {
  document.body.classList.remove("show-modal");
  
  window.removeEventListener("keydown", onEscKey);
}

function onBackdropClick(ev) {
  if (ev.target === ev.currentTarget) {
    onCloseModal();
  }
}

function onEscKey(ev) {
  if (ev.code === "Escape") {
    onCloseModal();
  }
}
