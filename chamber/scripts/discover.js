const url = "https://juannpariente.github.io/wdd231/chamber/data/places.json"

const placeCards = document.querySelector("#place-cards");

async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data);
}

const displayPlaces = (places) => {
    places.forEach((place) => {
        const card = document.createElement("div");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const figure = document.createElement("figure");
        const description = document.createElement("p");
        const address = document.createElement("address");
        const button = document.createElement("button");

        name.textContent = place.name;
        address.textContent = place.address;
        description.textContent = place.description;
        button.innerHTML = `Learn More`;

        image.setAttribute("src", `images/${place.photo_url}`);
        image.setAttribute("alt", `Photo of ${place.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        figure.appendChild(image);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        placeCards.appendChild(card);
    });
}

getPlaceData();


const message = document.querySelector("#message");

let lastVisit = Number(localStorage.getItem("lastVisit"));
const currentVisit = Date.now();

if (lastVisit) {
    const msToDays = 86400000;
    const diff = Math.floor((currentVisit - lastVisit) / msToDays);

    if (diff < 1) {
        message.textContent = `Back so soon! Awesome!`;
    } else {
        message.textContent = `You last visited ${diff} day${diff > 1 ? "s" : ""} ago.`;
    }
} else {
    message.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("lastVisit", currentVisit);
