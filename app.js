let hamButton = document.getElementById("hamb-icon");
let menuSection = document.getElementById("m-menu");
let cancelButton = document.getElementById("cancel-icon");
let menuOptions = document.querySelectorAll("#options-list > li");

for (let option of menuOptions) {
  option.addEventListener("click", function () {
    menuSection.classList.add("d-none");
  });
}

hamButton.addEventListener("click", function () {
  menuSection.classList.remove("d-none");
});

cancelButton.addEventListener("click", function () {
  menuSection.classList.add("d-none");
});
