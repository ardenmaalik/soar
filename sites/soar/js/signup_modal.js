const modal = document.querySelector('#sign-up-modal');
const signUp = document.querySelector('.nav-sign-up');
const loginModal = document.querySelector('#login-modal');
const login = document.querySelector('.nav-login');
const body = document.querySelector('.body');
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  
  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }
  
  function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
    body.style.overflow = 'hidden';
  }
  
  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null; 
      body.style.overflow = '';
  }

signUp.onclick = function () {
    modal.style.display = 'block';
    disableScroll();
    
}

modal.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        enableScroll();
    }
};

login.onclick = function () {
    loginModal.style.display = 'block';
    disableScroll();
    
}

loginModal.onclick = function (e) {
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
        enableScroll();
    }
};

