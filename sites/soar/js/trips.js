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

            const link = document.createElement('a');
            link.setAttribute('href', 'destination.html');

            const img = document.createElement('img');
            img.src = trip.image;
            img.setAttribute('class', 'trip_img');

            const info = document.createElement('div');
            info.setAttribute('class', 'info');

            const destination = document.createElement('h1');
            destination.textContent = trip.location + ' ' + '.' + ' ' + trip.flight;

            const price = document.createElement('h2');
            price.textContent = trip.price + ' ' + 'CAD' + ' ' + 'per person';

            const rating = document.createElement('h2');
            rating.textContent = trip.rating;

            listing.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(info);
            cardImg.appendChild(link);
            link.appendChild(img);
            info.appendChild(destination);
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

