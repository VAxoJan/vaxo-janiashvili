const add = document.querySelector('.add');
const ul = document.querySelector('.ul');
const check = document.querySelector('#src');
const rmv = document.querySelector('.trashi');

let counter = 0;

const generateListItem = val => {
    const li = document.createElement('li');
    li.classList.add(`li-${counter++}`);
    li.innerHTML = `${val}  <img class="trashi" src="./images/akar-icons_trash-can.svg" alt="">`;
    ul.appendChild(li);
    check.style.display = "inherit";
}


ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('trashi')) {
        const listItem = event.target.closest('li');
        listItem.remove();
    }
});

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    generateListItem(input.value);
});

rmv.addEventListener('click', () => {
    check.remove();
});
