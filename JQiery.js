$(document).ready(function() {
  // Показать меню при наведении на контейнер
  $('#language-menu-container').mouseenter(function() {
    $('#language-menu').stop(true, true).fadeIn(200);  // Плавное появление меню
  });

  // Скрыть меню, когда убираем курсор с контейнера
  $('#language-menu-container').mouseleave(function() {
    $('#language-menu').stop(true, true).fadeOut(200);  // Плавное исчезновение меню
  });

  // Действие при клике на кнопки
  $('#change-to-ru').click(function() {
    // Заменим alert() на какую-то логику, например, смену текста страницы
    console.log('Язык изменен на русский');
    $('#language-menu').fadeOut(200);  // Меню исчезает после выбора
    // Здесь можно добавить код для смены языка, например, через переводы или другие методы
  });

  $('#change-to-en').click(function() {
    console.log('Language changed to English');
    $('#language-menu').fadeOut(200);  // Меню исчезает после выбора
    // Здесь можно добавить код для смены языка, например, через переводы или другие методы
  });
});
function loadBooks(lang) {
  const books = translations[lang].books || [];
  const rowElement = document.getElementById('row');
  rowElement.innerHTML = ''; // Очищаем блок

  books.forEach(({ imgSrc, age, name, author }) => {
      const book = new BookBlock(imgSrc, age, name, author);
      rowElement.appendChild(book.createBlock());
  });
}

