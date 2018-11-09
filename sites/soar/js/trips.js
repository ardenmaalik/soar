const listing = document.querySelector('#listing-container');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/8nomk', true);
request.onload = function () {

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(trip => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const cardImg = document.createElement('div');
            cardImg.setAttribute('class', 'card-img');

            const img = document.createElement('img');
            img.src = trip.image;

            const info = document.createElement('div');
            info.setAttribute('class', 'info');

            const location = document.createElement('h1');
            location.textContent = trip.location + ' ' + '.' + ' ' + trip.flight;

            const price = document.createElement('h2');
            price.textContent = trip.price + ' ' + 'CAD' + ' ' + 'per person';

            const rating = document.createElement('h2');
            rating.textContent = trip.rating;

            listing.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(info);
            cardImg.appendChild(img);
            info.appendChild(location);
            info.appendChild(price);
            info.appendChild(rating);
        });
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Something went wrong!';
        console.log(errorMessage);
    }
}
request.send();