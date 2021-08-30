let hamButton = document.getElementById("hamb-icon");
let menuSection = document.getElementById("m-menu");
let cancelButton = document.getElementById("cancel-icon");

hamButton.addEventListener("click", function () {
  menuSection.classList.remove("d-none");
});

cancelButton.addEventListener("click", function () {
  menuSection.classList.add("d-none");
});
