
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", inputValidation);

function inputValidation() {
    if (event.currentTarget.getAttribute('data-length') <= event.currentTarget.value.length) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else{
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
};
