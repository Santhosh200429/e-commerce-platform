// 🛒 Cart Data
let cart = [];

// 🎯 Function to Add Items to Cart
function addToCart(productName, productPrice) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

// 🛍️ Update Cart UI
function updateCart() {
    let cartItemsList = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartTotal = document.getElementById("cart-total");

    cartItemsList.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        let listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - ₹${item.price} x ${item.quantity} 
            <button onclick="removeFromCart(${index})">❌</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    cartTotal.textContent = total.toLocaleString(); // Format total price
    cartCount.textContent = itemCount;
}

// ❌ Remove Item from Cart
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}

// 🔄 Toggle Cart Modal
function toggleCart() {
    let cartModal = document.getElementById("cart-modal");
    cartModal.style.display = (cartModal.style.display === "block") ? "none" : "block";
}

// ✅ Checkout Functionality (Can be expanded)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your purchase! 🎉");
    cart = []; // Clear cart after checkout
    updateCart();
    toggleCart();
}