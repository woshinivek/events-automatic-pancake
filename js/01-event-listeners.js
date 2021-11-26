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

const onTargetButtonClick = () => {
  console.log("click-3");
};

// targetBtn.addEventListener("click", handleTargetButtonClick);
// targetBtn.addEventListener("click", targetButtonClickHandler);
targetBtn.addEventListener("click", onTargetButtonClick);

// ---------------------------------------------------------------------
