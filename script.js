document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartItems = document.getElementById('cart-items');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    // Recuperar el carrito de localStorage si existe
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }

    cartIcon.addEventListener('click', () => {
        cartItems.style.display = cartItems.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            const item = cart.find(product => product.name === name);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);

        // Guardar el carrito en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
