const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const ul = document.querySelector('ul');

remove.addEventListener('click', () => {
    const vaxo = document.querySelector('li');
    vaxo.remove();
});


add.addEventListener('click', () => {
    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
});
