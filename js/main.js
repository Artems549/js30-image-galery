const CLIENT_ID = 'FqkZusGNQh0MW3EUVo_ON8IPSd2IxaZep58zBlw8uDs'

const form = document.querySelector('.header__search form');
const formValue = document.getElementById('value');
const formSubmit = document.getElementById('submit');
const formCleanBtn = document.querySelector('.header__search-close');
const itemsPic = document.querySelectorAll('.main__items-item img');
const modal = document.querySelector('.modal');
const modalPic = document.querySelector('.modal__pic > img');
const modalCloseBtn = document.querySelector('.modal__close')
const overlay = document.querySelector('.overlay');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})
function cleanForm() {
    formCleanBtn.addEventListener('click', function() {
        formValue.value = ''
    })
}
cleanForm()

async function sendRequest() {
    const requestUser = formValue.value;
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=9&query=${requestUser}`;
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok) {
            for(let i = 0; i < data.length; i++) {
                itemsPic[i].src = data[i].urls.regular;
                itemsPic[i].addEventListener('click', function() {
                    modalPic.src = data[i].urls.regular
                    openModal()
                })
            }
        }

    } catch (error) {
        console.log(error)
        for(let i = 0; i < itemsPic.length; i++) {
            itemsPic[i].src = 'img/pic.jpg';
            itemsPic[i].addEventListener('click', function() {
                modalPic.src = 'img/pic.jpg';
                openModal()
            })
        }
    }
}
sendRequest()
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
overlay.addEventListener('click', closeModal)
modalCloseBtn.addEventListener('click', closeModal)
formSubmit.addEventListener('click', sendRequest)