let cart = [];

function toggleCartItem(button, productName, productPrice) {
  const index = cart.findIndex(item => item.name === productName);

  if (index === -1) {
    // Añadir producto al carrito
    cart.push({ name: productName, price: productPrice });
    $(button).addClass('btn-added').removeClass('btn-primary').text("Añadido");
  } else {
    // Remover producto del carrito
    cart.splice(index, 1);
    $(button).removeClass('btn-added').addClass('btn-primary').text("Añadir al Carrito");
  }

  console.log("Carrito actual:", cart);
  updateCartButton(); 
}

function updateCartButton() {
  const $cartLink = $('#cart-link');
  if (cart.length > 0) {
    $cartLink.removeClass('disabled').removeAttr('aria-disabled');
  } else {
    $cartLink.addClass('disabled').attr('aria-disabled', 'true');
  }
}
