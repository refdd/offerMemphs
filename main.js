// vars
const headerSection = document.querySelector(".headerSection");
const contantHeader = document.querySelector(".contantHeader");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    headerSection && headerSection.classList.add("active");
    contantHeader && contantHeader.classList.add("active");
  }, 500);
});
