$(document).ready(function() {
  // Показать меню при наведении на контейнер
  $('#language-menu-container').mouseenter(function() {
    $('#language-menu').stop(true, true).fadeIn(200);  // Плавное появление меню
  });

  // Скрыть меню, когда убираем курсор с контейнера
  $('#language-menu-container').mouseleave(function() {
    $('#language-menu').stop(true, true).fadeOut(200);  // Плавное исчезновение меню
  });

  // Получаем текущий выбранный язык из localStorage
  const currentLanguage = localStorage.getItem('language') || 'en';
  setLanguageButton(currentLanguage);

  // Действие при клике на кнопку "RU"
  $('#change-to-ru').click(function() {
    localStorage.setItem('language', 'ru');  // Сохраняем выбранный язык в localStorage
    setLanguageButton('ru');
    $('#language-menu').fadeOut(200);  // Меню исчезает после выбора
  });

  // Действие при клике на кнопку "EN"
  $('#change-to-en').click(function() {
    localStorage.setItem('language', 'en');  // Сохраняем выбранный язык в localStorage
    setLanguageButton('en');
    $('#language-menu').fadeOut(200);  // Меню исчезает после выбора
  });

  // Функция для обновления текста на кнопке "Язык" в зависимости от выбранного языка
  function setLanguageButton(language) {
    if (language === 'ru') {
      $('#language-menu-button').text('Русский');
    } else {
      $('#language-menu-button').text('English');
    }
  }
});
