const translations = {
  ru: {
    siteName: "DuckBook",
      shopsLink: "МАГАЗИНЫ",
      loginLink: "ВОЙТИ",
      profileLink: "Профиль",

      surnameLabel: "Фамилия:",
      nameLabel: "Имя:",
      patronymicLabel: "Имя пользователя:",
      mailLabel: "Номер телефон",
      numberLabel: "Пароль:",
      saveButton: "Сохранить",
      ourStoresTitle: "Наши магазины",
      storeKamenaya: "Ст. метро \"Каменная горка\"",
      storePushkinskaya: "Ст. метро \"Пушкинская\"",
      storeNemiga: "Ст. метро \"Немига\"",
      phoneNumber: "+375482344565",
      email: "BOOKTOK@gmail.com",
      companyName: "DuckBook"
      
  },
  en: {
    siteName: "DuckBook",
    shopsLink: "SHOPS",
    loginLink: "LOGIN",
    profileLink: "Profile",

    surnameLabel: "Surname:",
    nameLabel: "Name:",
    patronymicLabel: "Username:",
    mailLabel: "Number:",
    numberLabel: "Password:",
    saveButton: "Save",
      ourStoresTitle: "Our Stores",
      storeKamenaya: "Metro Station \"Kamenaya Gorka\"",
      storePushkinskaya: "Metro Station \"Pushkinskaya\"",
      storeNemiga: "Metro Station \"Nemiga\"",
      phoneNumber: "+375482344565",
      email: "BOOKTOK@gmail.com",
      companyName: "DuckBook"

  }
  
};// Функция для обновления текста на странице
function updateText(language) {
  document.getElementById('site-name').innerText = translations[language].siteName;
  document.getElementById('shops-link').innerText = translations[language].shopsLink;
  document.getElementById('login-link').innerText = translations[language].loginLink;
  //профиль
  document.getElementById('profile-form-title').innerText = translations[language].profileLink;
  document.getElementById('surname-label').innerText = translations[language].surnameLabel;
  document.getElementById('name-label').innerText = translations[language].nameLabel;
  document.getElementById('patronymic-label').innerText = translations[language].patronymicLabel; 
  document.getElementById('mail-label').innerText = translations[language].mailLabel;
  document.getElementById('number-label').innerText = translations[language].numberLabel;
  document.getElementById('save-button').innerText = translations[language].saveButton;
    // Информация о магазинах
    document.getElementById('our-stores-title').innerText = translations[language].ourStoresTitle;
    document.getElementById('store-kamenaya').innerText = translations[language].storeKamenaya;
    document.getElementById('store-pushkinskaya').innerText = translations[language].storePushkinskaya;
    document.getElementById('store-nemiga').innerText = translations[language].storeNemiga;

    // Контактная информация
    document.getElementById('phone-number').innerText = translations[language].phoneNumber;
    document.getElementById('email').innerText = translations[language].email;
    document.getElementById('company-name').innerText = translations[language].companyName;

 
}

// Функция для переключения языка и сохранения его в localStorage
function changeLanguage(language) {
  localStorage.setItem('language', language); // Сохраняем язык
  updateText(language); // Обновляем текст
}