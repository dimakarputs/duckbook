const translations = {
  "ru": {
    "stores": "МАГАЗИНЫ",
    "login": "ВОЙТИ",
    "profile": "Профиль",
    "favorites": "Избранное",
    "cart": "Корзина",
    "orders": "Заказы",
    "logout": "Выйти",
    "newBooks": "Новинки",
    "izbranoe":"Избранное",
    "buyBook": "Купить книгу",
    "delivery": "Доставка",
    "deliveryText": `DuckBook осуществляет доставку по России через Boxberry, Почту России и Dostavista.
      Международные заказы отправляем почтой и DHL (по всему миру).<br>Заказ собирают и передают на доставку в течение 2 рабочих дней после 
      оформления и оплаты заказа. В дни рассылки предзаказов срок может быть увеличен. Заказы, сделанные в пятницу, мы передаем на отправку в понедельник.
      <br>Доставьте себе удовольствие от прочтения своих любимых книг!`,
      "store-kamenaya": " Cт. метро Каменная горка",
      "store-pushkinskaya":"Ст. метро Пушкинская",
      "store-nemiga":"Ст. метро Немига"

  },
  "en": {
    "stores": "STORES",
    "login": "LOGIN",
    "profile": "Profile",
    "favorites": "Favorites",
    "cart": "Cart",
    "orders": "Orders",
    "logout": "Logout",
    "newBooks": "New Arrivals",
    "izbranoe":"Favourites",
    "buyBook": "Buy Book",
    "delivery": "Delivery",
    "deliveryText": `DuckBook delivers across Russia via Boxberry, Russian Post, and Dostavista.
      International orders are sent by mail and DHL (worldwide).<br>Orders are prepared and shipped within 2 business days after 
      confirmation and payment. During pre-order shipping periods, this timeframe may be extended. Orders placed on Friday are dispatched on Monday.
      <br>Enjoy reading your favorite books!`,
      "store-kamenaya": " Metro Station Kamenaya Gorka",
      "store-pushkinskaya":"Metro Station Pushkinskaya",
      "store-nemiga":"Metro Station Pushkinskaya"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = translations[lang][key];
  });
}