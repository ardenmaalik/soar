const logo = document.getElementById('logo');
const nav = document.getElementById('nav-drop-down-container');
const close = document.getElementById('closebtn');

logo.onclick = function () {
    nav.style.display = 'block';
    nav.style.height = '100%';
    nav.style.overflow = 'hidden';
}

close.onclick = function () {
    nav.style.display = 'none';
    nav.style.height = '0';
    nav.style.overflow = '';
}