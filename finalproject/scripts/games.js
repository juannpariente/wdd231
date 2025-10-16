import { getGameData } from "./home.js";

const url = "https://juannpariente.github.io/wdd231/finalproject/data/games.json"

const gameCards = document.querySelector('#game-cards');

const displayGames = (games) => {
    games.forEach(game => {
        const card = document.createElement('div');
        const name = document.createElement('h3');
        const genre = document.createElement('p');
        const year = document.createElement('p');
        const rating = document.createElement('p');
        const price = document.createElement('p');
        const image = document.createElement('img');
        const buttonCart = document.createElement('button');
        const buttonMore = document.createElement('button');

        name.textContent = game.name;
        genre.innerHTML = `<strong>Genre:</strong> ${game.genre}`;
        year.innerHTML = `<strong>Year:</strong> ${game.year}`;
        rating.innerHTML = `<strong>Rating:</strong> ${game.rating}⭐`;
        price.innerHTML = `<strong>Price:</strong> ${game.price}$`;
        buttonCart.innerHTML = `Add 🛒`;
        buttonMore.textContent = `Details`

        image.setAttribute("src", `images/${game.image}`);
        image.setAttribute("alt", `${game.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "300");

        buttonMore.addEventListener('click', () => {
            displayGameDetails(game);
        });

        buttonCart.addEventListener("click", () => addToCart(game.name, game.price, game.image));

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(price);
        card.appendChild(buttonMore);
        card.appendChild(buttonCart);

        gameCards.appendChild(card);
    });
}

getGameData(url, displayGames)

const gameDetails = document.querySelector("#game-details");

function displayGameDetails (game) {
    gameDetails.innerHTML = "";
    gameDetails.innerHTML = `
        <button id="closeModal"></button>
        <h2>${game.name}</h2>
        <p><strong>Genre</strong>: ${game.genre}</p>
        <p><strong>Year</strong>: ${game.year}</p>
        <p><strong>rating</strong>: ${game.rating}⭐</p>
    `;
    
    gameDetails.showModal();

    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener('click', () => {
        gameDetails.close();
    });
}

function addToCart(name, price, image){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.some(item => item.name === name)) {
        alert(`${name} is already in the cart`);
        return;
    }

    cart.push({name, price, image});

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to the cart`);
}