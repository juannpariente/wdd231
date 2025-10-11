const openModalBtn1 = document.querySelector("#learn-more-btn1");
const openModalBtn2 = document.querySelector("#learn-more-btn2");
const openModalBtn3 = document.querySelector("#learn-more-btn3");
const openModalBtn4 = document.querySelector("#learn-more-btn4");
const dialogBox = document.querySelector("#dialog-box");
const closeModalBtn = document.querySelector("#close-modal");

const dialogTitle = document.querySelector("#dialog-box h3");
const dialogFee = document.querySelector("#dialog-box p")
const dialogList = document.querySelector("#dialog-box ul");

openModalBtn1.addEventListener("click", () => {
    dialogTitle.textContent = "Non Profit Membership";
    dialogFee.textContent = "Free"
    dialogList.innerHTML = `
        <li>Access to general events</li>
        <li>Listing in the member directory</li>
        <li>Monthly newsletter with updates</li>
        <li>Participation in collaborative networks</li>
    `;
    dialogBox.showModal();
});

openModalBtn2.addEventListener("click", () => {
    dialogTitle.textContent = "Bronze Membership";
    dialogFee.textContent = "USD 100"
    dialogList.innerHTML = `
        <li>All Non-Profit level benefits</li>
        <li>Discounted access to networking events</li>
        <li>Limited access to training sessions</li>
        <li>Social media mention (once per semester)</li>
    `;
    dialogBox.showModal();
});

openModalBtn3.addEventListener("click", () => {
    dialogTitle.textContent = "Silver Membership";
    dialogFee.textContent = "USD 250"
    dialogList.innerHTML = `
        <li>All Bronze level benefits</li>
        <li>Homepage advertising (1 week per year)</li>
        <li>Full access to training and workshops</li>
        <li>Greater discounts on exclusive events</li>
        <li>Priority access to booths at local fairs</li>
    `;
    dialogBox.showModal();
});

openModalBtn4.addEventListener("click", () => {
    dialogTitle.textContent = "Gold Membership";
    dialogFee.textContent = "USD 500"
    dialogList.innerHTML = `
        <li>All Silver level benefits</li>
        <li>Year-round featured advertising on the website (spotlight)</li>
        <li>Promotional interview featured on blog and social media</li>
        <li>VIP access to events</li>
        <li>Personalized consulting in legal, financial, or marketing areas</li>
        <li>Right to participate in strategic chamber decisions</li>
    `;
    dialogBox.showModal();
});

closeModalBtn.addEventListener ("click", () => {
    dialogBox.close();
});

const timestamp = document.querySelector("#timestamp");

const date = new Date().toLocaleString();

timestamp.value = date;