const add = document.querySelector('.tag-1');
const walk = document.querySelector('.tag-2');
const buy = document.querySelector('.tag-3');
const repair = document.querySelector('.tag-4');
const dinner = document.querySelector('.Dinner');
const trash = document.querySelector('.trash');
const pm = document.querySelector('.section-1');
const second = document.querySelector('.section-2');
const secondTrash = document.querySelector('.secondTrash');
const thirdTrash = document.querySelector('.thirdTrash');
const thirdSection = document.querySelector('.section-3');
const lastTrash = document.querySelector('.lastTrash');
const lastSection = document.querySelector('.section-4');

const submit = document.querySelector('button');

add.addEventListener('click', () => {
    console.log(add.style.backgroundColor = '#20EEB0', add.style.borderRadius = '50%');
});
walk.addEventListener('click', () => {
    console.log(walk.style.backgroundColor = '#20EEB0', walk.style.borderRadius = '50%');
});
buy.addEventListener('click', () => {
    console.log(buy.style.backgroundColor = '#20EEB0', buy.style.borderRadius = '50%');
});
repair.addEventListener('click', () => {
    console.log(repair.style.backgroundColor = '#20EEB0', repair.style.borderRadius = '50%');
});

trash.addEventListener('click', () => {
    console.log(pm.style.display = 'none')
} );

secondTrash.addEventListener('click', () => {
    console.log(second.style.display = 'none')
});

thirdTrash.addEventListener('click', () => {
    console.log(thirdSection.style.display = 'none')
});

lastTrash.addEventListener('click', () => {-
    console.log(lastSection.style.display = 'none')
});

submit.addEventListener('click', () => {
    console.log(pm.style.display = 'inherit')
    console.log(second.style.display = 'inherit')
    console.log(thirdSection.style.display = 'inherit')
    console.log(lastSection.style.display = 'inherit');
});
