var requestBooking = new XMLHttpRequest();

requestBooking.open('GET', "https://api.myjson.com/bins/bx1mu", true);
requestBooking.onload = function () {

  var data = JSON.parse(this.response).map(function (location) {
    return (location.country + "," + " " + location.name);
  });
  new Awesomplete(document.querySelector("#where"), {
    list: data,
    maxItems: 5
  })
};

requestBooking.send();

//Date Range
const start = datepicker('.start', {
  id: 1,
  onSelect: (instance, selectedDate) => {
    instance.setMin(selectedDate);
  }
});

const end = datepicker('.end', {
  id: 1,
  onSelect: (instance, selectedDate) => {
    instance.setMax(selectedDate);
  }
});

//Guest Modal
const guestInput = document.querySelector('#guest');
const guestWrapper = document.querySelector('#guest-wrapper');
const guestContainer = document.querySelector('#guest-container');
let isOpen = false;

guestInput.onclick = function () {

  if (isOpen == false) {
    guestWrapper.style.display = 'block';
    isOpen = true;

  } else if (isOpen == true) {
    guestWrapper.style.display = '';
    isOpen = false;
  }

  window.addEventListener('mouseup', function (e) {
    if (e.target != guestContainer && e.target.parentNode.parentNode != guestContainer
      && e.target.parentNode.parentNode.parentNode.parentNode != guestContainer) {
      guestWrapper.style.display = 'none';
    }
  })
};

//Guest Count
let guestCounter = document.querySelector('.guest-label')
guestCounter.textContent = 0;

/*  Adult guest counter*/
let adultCounter = document.querySelector('#ad-counter');
var adultBtn1 = document.querySelector("#ad-btn1");
var adultBtn2 = document.querySelector('#ad-btn2');

adultCounter.textContent = 0;

adultBtn1.onclick = function () {
  if (adultCounter.textContent > 0) {
    adultCounter.textContent--;
    guestCounter.textContent--;
  }
};

adultBtn2.onclick = function () {
  adultCounter.textContent++;
  guestCounter.textContent++;
};

/* Child guest counter */
let childCounter = document.querySelector('#ch-counter');
var chBtn1 = document.querySelector("#ch-btn1");
var chBtn2 = document.querySelector('#ch-btn2');

childCounter.textContent = 0;

chBtn1.onclick = function () {
  if (childCounter.textContent > 0) {
    childCounter.textContent--;
    guestCounter.textContent--;
  }
};

chBtn2.onclick = function () {
  childCounter.textContent++;
  guestCounter.textContent++;
  };

/* Infant guest counter */
let infantCounter = document.querySelector('#in-counter');
var inBtn1 = document.querySelector("#in-btn1");
var inBtn2 = document.querySelector('#in-btn2');

infantCounter.textContent = 0;

inBtn1.onclick = function () {
  if (infantCounter.textContent > 0) {
    infantCounter.textContent--;
    guestCounter.textContent--;
  }
};

inBtn2.onclick = function () {
  infantCounter.textContent++;
  guestCounter.textContent++;
};


    //Display result on guestInput..
    //    function calc () {
    // var total = adultCounter.textContent + childCounter.textContent;

    // guests = Number(document.getElementById('guests'))
    //    }

