const form = document.querySelector('.header__search form');
const formValue = document.getElementById('value');
const formSubmit = document.getElementById('submit');
const formCleanBtn = document.querySelector('.header__search-close');
const itemsPic = document.querySelectorAll('.main__items-item');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close')
const overlay = document.querySelector('.overlay');




function openModal() {
    modal.style.display = 'flex';
    modal.style.animation = 'on-modal 1s forwards';
    overlay.style.display = 'block';
    overlay.style.animation = 'on-modal 1s forwards'
}

function closeModal() {
    modal.style.animation = 'off-modal 1s forwards';
    overlay.style.animation = 'off-modal 1s forwards'
}
for(let i = 0; i < itemsPic.length; i++) {
    itemsPic[i].addEventListener('click', openModal)
}
overlay.addEventListener('click', closeModal)
modalCloseBtn.addEventListener('click', closeModal)



form.addEventListener('submit', function(e) {
    e.preventDefault();
})
function cleanForm() {
    formCleanBtn.addEventListener('click', function() {
        formValue.value = ''
    })
}
cleanForm()

function sendValue() {
    formSubmit.addEventListener('click', function() {
        const value = formValue.value;
        console.log(value)
    })
}
sendValue()
