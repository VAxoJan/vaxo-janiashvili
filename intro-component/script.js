const firstName = document.querySelector('.section-1');
const lastName = document.querySelector('.section-2');
const email = document.querySelector('.section-3');
const pass = document.querySelector('.password-1');

const submit = document.querySelector('button');

const validateFirstName = () => {
    const val = firstName.value;
    const alert = document.querySelector('.email-alert');
    alert.innerText = 'First Name cannot be empty';
    alert.style.color = 'red';
    if ((val.length > 3) || (val.length >= 3)) {
        alert.innerText = '';
        firstName.style.borderColor = 'green';
    }
    else {
        firstName.style.borderColor = 'red';
    }
}
const validateLastName = () => {
    const val = lastName.value;
    const alerti = document.querySelector('.email-alert-2');
    alerti.innerText = 'Last Name cannot be empty';
    alerti.style.color = 'red';
    if ((val.length > 3) || (val.length >= 3)) {
        lastName.style.borderColor = 'green'
        alerti.innerText = '';
    }
    else (
        lastName.style.borderColor = 'red'

    )
}
const validateEmail = () => {
    const val = email.value;
    const lok = document.querySelector('.looks');
    lok.innerText = 'Looks like this is not an email';
    lok.style.color = 'red';
    if ((val.length > 3) || (val.length >= 3) && (val.includes('@'))) {
        lok.innerText = '';
        email.style.borderColor = 'green'
    }
    else (
        email.style.borderColor = 'red'

    )
}
const validatePassword = () => {
    const val = pass.value;
    const loki = document.querySelector('.passwordi');
    loki.innerText = 'Password cannot be empty';
    loki.style.color = 'red';
    if ((val.length > 5) || (val.length >= 3)) {
        pass.style.borderColor = 'green'
        loki.innerText = '';
    }
    else (
        pass.style.borderColor = 'red'

    )
}

submit.addEventListener('click', ()  => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
})
