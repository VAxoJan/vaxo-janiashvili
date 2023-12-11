const firstName = document.querySelector('.section-1');
const lastName = document.querySelector('.section-2');
const email = document.querySelector('.section-3');
const pass = document.querySelector('.password-1');

const submit = document.querySelector('button');

const validateFirstName = () => {
    const val = firstName.value;
    if ((val.length > 3) || (val.length >= 3)) {
        firstName.style.borderColor = 'green';
    }
    else {
        firstName.style.borderColor = 'red';

    }
}
const validateLastName = () => {
    const val = lastName.value;
    if ((val.length > 3) || (val.length >= 3)) {
        lastName.style.borderColor = 'green'
    }
    else (
        lastName.style.borderColor = 'red'

    )
}

submit.addEventListener('click', ()  => {
    validateFirstName();
    validateLastName();
})
