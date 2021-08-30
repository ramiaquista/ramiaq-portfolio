let hamButton = document.getElementById('hamb-icon');
let menuSection = document.getElementById('m-menu');

hamButton.addEventListener('click', function() {
    menuSection.classList.remove('d-none');
});