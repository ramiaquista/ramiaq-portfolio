const hamButton = document.getElementById('hamb-icon');
const menuSection = document.getElementById('m-menu');
const cancelButton = document.getElementById('cancel-icon');
const menuOptions = document.querySelectorAll('#options-list > li > a');

menuOptions[0].addEventListener('click', () => {
  menuSection.classList.add('d-none');
});

hamButton.addEventListener('click', () => {
  menuSection.classList.remove('d-none');
});

cancelButton.addEventListener('click', () => {
  menuSection.classList.add('d-none');
});
