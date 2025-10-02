const url = "https://juannpariente.github.io/wdd231/chamber/data/members.json"

const cards = document.querySelector("#cards");

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("p");
        const image = document.createElement("img");
        const membershipLevel = document.createElement("p");
        const description = document.createElement("p");

        name.innerHTML = company.name;
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;
        phone.innerHTML = `<strong>Phone:</strong> ${company.phone}`;
        website.innerHTML = `<strong>Website:</strong> <a href="${company.website}">${company.website}</a>`;
        description.innerHTML = `<strong>Description:</strong> ${company.description}`;

        if (company.membershipLevel === 3) {
            membershipLevel.innerHTML = `<strong>Membership level:</strong> Gold`;
        } else if (company.membershipLevel === 2) {
            membershipLevel.innerHTML = `<strong>Membership level:</strong> silver`;
        } else {
            membershipLevel.innerHTML = `<strong>Membership level:</strong> member`;
        }

        image.setAttribute("src", `images/${company.image}`);
        image.setAttribute("alt", `Photo of ${company.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "250");
        image.setAttribute("height", "150");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(description);

        cards.appendChild(card);
    });
}

getCompanyData();


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener('click', () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener('click', () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});