// vars
const headerSection = document.querySelector(".headerSection");
const contantHeader = document.querySelector(".contantHeader");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    headerSection.classList.add("active");
    contantHeader.classList.add("active");
  }, 500);
});
