// vars
const headerSection = document.querySelector(".headerSection");
const contantHeader = document.querySelector(".contantHeader");
const closeButton = document.querySelector(".closeOffer");
const boxOffer = document.querySelector(".buttonOfferSection");
const buttonView = document.querySelector(".buttonView");
// close offer box
closeButton &&
  closeButton.addEventListener("click", () => {
    boxOffer.classList.add("hidden");
    buttonView.classList.add("move");
  });
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    headerSection && headerSection.classList.add("active");
    contantHeader && contantHeader.classList.add("active");
  }, 500);
});
