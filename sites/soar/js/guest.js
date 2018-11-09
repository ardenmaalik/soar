const guestInput = document.querySelector('#guest');
const guestWrapper = document.querySelector('#guest-wrapper');
const guestContainer = document.querySelector('#guest-container');
let isOpen = false;

guestInput.onclick = function (e) {
        guestWrapper.style.display = 'block';
};

window.addEventListener ('mouseup', function (e){
    if (e.target != guestContainer && e.target.parentNode.parentNode != guestContainer 
        && e.target.parentNode.parentNode.parentNode != guestContainer) {
        guestWrapper.style.display = 'none';
    }
});