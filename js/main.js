const form = document.querySelector('.header__search form');
const formValue = document.getElementById('value');
const formSubmit = document.getElementById('submit');
const formCleanBtn = document.querySelector('.header__search-close');
const itemPic = document.querySelectorAll('.main__items-item');




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
