const url = "https://juannpariente.github.io/wdd231/finalproject/data/games.json"

export async function getGameData(url, callback) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json()
      callback(data);
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error);
  }
};

const bestCard = document.querySelector('#best-card');

const displayGames = (games) => {
    const descGames = games.sort((a, b) => b.rating - a.rating);
    const bestGames = descGames.slice(0, 2);

    bestGames.forEach(game => {
        const card = document.createElement('div');
        const name = document.createElement('h3');
        const rating = document.createElement('p');
        const image = document.createElement('img');



        name.textContent = game.name;
        rating.innerHTML = `<strong>Rating:</strong> ${game.rating}⭐`;

        image.setAttribute("src", `images/${game.image}`);
        image.setAttribute("alt", `${game.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "300");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(rating);

        bestCard.appendChild(card);
    });
}

getGameData(url, displayGames)