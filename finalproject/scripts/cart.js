const cartList = document.querySelector("#cart-list");
const total = document.querySelector("#sum");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(item => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.innerHTML = `<img src="images/${item.image}" alt="${item.name}" width="100" height="150"> ${item.name} - ${item.price}$`;
    deleteButton.textContent = "X";
    li.append(deleteButton);
    cartList.append(li);
    deleteButton.addEventListener("click", function(){
        cartList.removeChild(li);
        const index = cart.findIndex(product => product.name == item.name);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        getSum();
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});

function getSum(){
    let sum = 0;
    cart.forEach(item => {
        sum = sum + item.price;
    })

    total.textContent = `Total Price: ${sum} $`;
}

getSum();

const buyButton = document.querySelector('#buy');

const formDialog = document.querySelector("#form-dialog");

buyButton.addEventListener('click', () => {
    formDialog.showModal();

    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener('click', () => {
        formDialog.close();
    });
});

document.querySelector('.sub').addEventListener('click', () => {
    cart = [];
    cartList.innerHTML = '';

    localStorage.setItem("cart", JSON.stringify(cart));

    getSum();
});