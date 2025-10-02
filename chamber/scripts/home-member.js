const url = "https://juannpariente.github.io/wdd231/chamber/data/members.json";

const memberCards = document.querySelector("#member-cards");

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const memberCardList = [];

    companies.forEach((company) => {
        if (company.membershipLevel === 3 || company.membershipLevel === 2) {
            const memberCard = document.createElement("div");
            const name = document.createElement("h3");
            const address = document.createElement("p");
            const phone = document.createElement("p");
            const website = document.createElement("p");
            const image = document.createElement("img");
            const membershipLevel = document.createElement("p");

            name.innerHTML = company.name;
            address.innerHTML = `<strong>Address:</strong> ${company.address}`;
            phone.innerHTML = `<strong>Phone:</strong> ${company.phone}`;
            website.innerHTML = `<strong>Website:</strong> <a href="${company.website}">${company.website}</a>`;
            membershipLevel.innerHTML = `<strong>Membership level:</strong> ${company.membershipLevel === 3 ? "Gold" : "Silver"}`;

            image.setAttribute("src", `images/${company.image}`);
            image.setAttribute("alt", `Photo of ${company.name}`);
            image.setAttribute("width", "250");
            image.setAttribute("height", "150");

            memberCard.appendChild(name);
            memberCard.appendChild(image);
            memberCard.appendChild(phone);
            memberCard.appendChild(address);
            memberCard.appendChild(website);
            memberCard.appendChild(membershipLevel);

            memberCardList.push(memberCard);
        }
    });

    for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * memberCardList.length);
        const randomCard = memberCardList[index];

        memberCards.appendChild(randomCard)
        memberCardList.splice(index, 1)
    }
}

getCompanyData();