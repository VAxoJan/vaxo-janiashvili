const firstName = document.querySelector('.section-1');
const lastName = document.querySelector('.section-2');
const email = document.querySelector('.section-3');
const pass = document.querySelector('.password-1');

const submit = document.querySelector('button');

const validateEmail = () => {
    console.log(email.value);
}

submit.addEventListener('click', ()  => {
    console.log(':)');
})