const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const ul = document.querySelector('ul');
const rgoli = document.querySelector('.check');
const chek = document.querySelector('.chek');
const ed = document.querySelector('#add');

remove.addEventListener('click', () => {
    const vaxo = document.querySelector('li');
    vaxo.remove();
    console.log(remove.style.display = 'none');
    console.log(rgoli.style.display = 'none');
    console.log(chek.style.display = 'none');
});


add.addEventListener('click', () => {
    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    console.log(remove.style.display = 'inherit');
    console.log(rgoli.style.display = 'inherit');
    console.log(chek.style.display = 'inherit');
    console.log(ed.style.paddingLeft = '34px');
});


rgoli.addEventListener('click', () => {
    console.log(rgoli.style.backgroundColor = '#20EEB0') (rgoli.style.borderRadius = '50%');
});

rgoli.addEventListener('mouseover', () => {
    console.log(rgoli.style.backgroundColor = '#fff');
});