let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let saved = localStorage.getItem("cart");
    if (saved) {
        cart = JSON.parse(saved);
    }
}

function displayCart() {
    loadCart();
    let container = document.getElementById("cart-items");
    let total = 0;

    container.innerHTML = "";

    cart.forEach(item => {
        container.innerHTML += `<p>${item.name} - PKR ${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: PKR " + total;
}

function checkout() {
    alert("Checkout coming soon!");
}

if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
