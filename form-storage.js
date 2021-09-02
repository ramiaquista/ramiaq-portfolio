const formStorage = document.getElementById('contact-form');
const nameStorage = formStorage.elements.name;
const emailStorage = formStorage.elements.email;
const msgStorage = formStorage.elements.msg;

function populateStorage() {
  const formData = {
    name: nameStorage.value,
    email: emailStorage.value,
    msg: msgStorage.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

nameStorage.onchange = populateStorage;
emailStorage.onchange = populateStorage;
msgStorage.onchange = populateStorage;

var storageData = JSON.parse(localStorage.getItem('formData'));

nameStorage.value = storageData.name;
emailStorage.value = storageData.email;
msgStorage.value = storageData.msg;
