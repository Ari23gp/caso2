let cart = [];
const cartIcon = document.querySelector('.cart-icon');
const cartDiv = document.getElementById('cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');

function addToCart(productName, productPrice) {
  const item = { name: productName, price: productPrice };
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

function toggleCart() {
  cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  alert('¡Gracias por tu compra!');
  cart = [];
  updateCart();
  cartDiv.style.display = 'none';
}
