/*  Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 */

const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", () => {
//   console.log("click");
// });

// const handleTargetButtonClick = () => {
//   console.log("click-1");
// };

// const targetButtonClickHandler = () => {
//   console.log("click-2");
// };

// const onTargetButtonClick = () => {
//   console.log("click-3");
// };

// const onAddListenerBtnClick = () => {
//   console.log("Click on add event listener btn");
// };

// targetBtn.addEventListener("click", handleTargetButtonClick);
// targetBtn.addEventListener("click", targetButtonClickHandler);
// targetBtn.addEventListener("click", onTargetButtonClick);

// ---------------------------------------------------------------------

// addListenerBtn.addEventListener("click", () => {
//   console.log("added event listener on target btn");

//   targetBtn.addEventListener("click", onTargetButtonClick);
// });

// removeListenerBtn.addEventListener("click", () => {
//   console.log("remove event listener from target btn");

//   targetBtn.removeEventListener("click", onTargetButtonClick);
// });

// ---------------------------------------------------------------------

// targetBtn.addEventListener("click", onTargetButtonClick);

// function onTargetButtonClick(event, tupang) {
//   event.preventDefault();
//   console.log("click-3");
//   console.log("event", event);
//   tupang = 23;
//   console.log("tupang", tupang);

//   console.log("onTargetButtonClick ~ event.currentTarget", event.currentTarget);
// }

// console.dir(Event);

// ---------------------------------------------------------------------

targetBtn.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick(event, tupang) {
  event.preventDefault();
  console.log("click-3");
  console.log("event", event);

  console.log("onTargetButtonClick ~ event.currentTarget", event.currentTarget);
}
