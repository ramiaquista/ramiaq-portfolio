const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email-input');
const msg = document.getElementById('error-msg');
const ERROR_MSG = 'The email address has to be in lowercase.';

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    msg.innerText = ERROR_MSG;
    emailInput.classList.add('error-border');
    event.preventDefault();
  } else {
    msg.innerText = '';
    emailInput.classList.remove('error-border');
  }
});

nameStorage.onchange = populateStorage;
emailStorage.onchange = populateStorage;
msgStorage.onchange = populateStorage;

var storageData = JSON.parse(localStorage.getItem('formData'));

nameStorage.value = storageData.name;
emailStorage.value = storageData.email;
msgStorage.value = storageData.msg;
