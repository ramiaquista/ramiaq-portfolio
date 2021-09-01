let form = document.getElementById('contact-form');
let emailInput = document.getElementById('email-input');


form.addEventListener('submit', (event) => {
    if (emailInput.value !== emailInput.value.toLowerCase()) {
        alert('Email Incorrect');
        event.preventDefault();
    }
})