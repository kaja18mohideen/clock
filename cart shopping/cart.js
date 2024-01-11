document.addEventListener('DOMContentLoaded', function () {
  const cart = document.getElementById('cart');

  const cartItems = [
    { id: 1, name: 'Iphone 15 Plus', price: 99990, quantity: 1, image: 'iphone15.jpg' },
    { id: 2, name: 'Galaxy S23 Ultra', price: 100000, quantity: 1, image: 'galaxyS23.jpg' },
    // Add more items as needed
  ];

  function renderCart() {
    cart.innerHTML = '<h2>Your Cart</h2>';

    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;

      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <p>${item.name}</p>
        <img src="${item.image}" alt="${item.name}" width="100" height="100">
        <p>Price per unit: $${item.price}</p>
        <p>
          Quantity:
          <input
            type="number"
            value="${item.quantity}"
            />
        </p>
        <p class="itemTotal">Total Amount: $${itemTotal.toFixed(2)}</p>
      `;

      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.value = item.quantity;
      quantityInput.addEventListener('change', function () {
        updateQuantity(item.id, this.value);
      });

      itemElement.querySelector('p > input').replaceWith(quantityInput);

      cart.appendChild(itemElement);
    });
  }

  function updateQuantity(itemId, newQuantity) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity = parseInt(newQuantity, 10);
      renderCart();
    }
  }

  renderCart();
});
