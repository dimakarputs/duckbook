// Отображение товаров в корзине
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Ваша корзина пуста!</p>";
    document.getElementById("total-price").innerHTML = "Общая сумма: 0 руб.";  // Если корзина пуста, отображаем сумму 0
    return;
  }

  let totalPrice = 0; // Переменная для общей суммы

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // Вычисляем общую цену для данного товара
    const itemTotalPrice = item.price * item.quantity;
    totalPrice += itemTotalPrice;

    cartItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>Автор: ${item.author}</p>
        <p>Возрастное ограничение: ${item.age}</p>
        <p>Цена: ${item.price} руб.</p>
        <p>Количество: 
          <button class="decrease-quantity" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-quantity" data-index="${index}">+</button>
        </p>
        <p>Общая цена: ${itemTotalPrice} руб.</p> <!-- Отображаем общую цену для этого товара -->
        <button class="remove-item" data-index="${index}">Удалить</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Отображаем общую сумму корзины
  const totalPriceContainer = document.getElementById("total-price");
  totalPriceContainer.innerHTML = `Общая сумма: ${totalPrice} руб.`; // Обновляем сумму

  attachCartEventListeners();
}

// Добавление событий для кнопок корзины
function attachCartEventListeners() {
  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeItemFromCart(index);
    });
  });

  document.querySelectorAll(".increase-quantity").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      updateQuantity(index, 1);
    });
  });

  document.querySelectorAll(".decrease-quantity").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      updateQuantity(index, -1);
    });
  });
}

// Удаление товара из корзины
function removeItemFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);  // Удаляем товар из корзины
  localStorage.setItem("cart", JSON.stringify(cart));  // Сохраняем обновленную корзину в localStorage

  renderCart();  // Перерисовываем корзину с актуальными данными
}

// Обновление количества товаров
function updateQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);  // Если количество становится 0 или меньше, удаляем товар
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();  // Перерисовываем корзину
}

// Очистка корзины
document.getElementById("clear-cart").addEventListener("click", () => {
  localStorage.removeItem("cart");  // Удаляем корзину из localStorage
  renderCart();  // Перерисовываем корзину
});

// Инициализация
renderCart();
