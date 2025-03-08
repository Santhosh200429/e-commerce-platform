let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - ₹${item.price.toLocaleString("en-IN")}`;
        cartItems.appendChild(listItem);
    });

    cartTotal.innerText = total.toLocaleString("en-IN"); // Display total in ₹
    cartCount.innerText = cart.length;
}

function toggleCart() {
    let cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function checkout() {
    alert(`Thank you for your purchase! Total Amount: ₹${total.toLocaleString("en-IN")}`);
    cart = [];
    total = 0;
    updateCart();
    toggleCart();
}