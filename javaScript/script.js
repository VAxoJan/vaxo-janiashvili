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


/* karoche listebi unda gavaketot gverdze trash da temebi mere display none romaq add-ze klikis dros eventit unda gavxado display inherit da remove-ze dacherit 
   iseve unda gaxdes display none
*/