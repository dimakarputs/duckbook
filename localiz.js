document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ru: {
      siteName: "DuckBook",
      shopsLink: "МАГАЗИНЫ",
      loginLink: "ВОЙТИ",
      novelLink: "Романы",
      loginFormTitle: "Вход",
      userNameLabel: "Имя пользователя",
      passwordLabel: "Пароль",
      registerButton: "Регистрация",
      loginButton: "Войти",
      profileLink: "Профиль",

      surnameLabel: "Фамилия:",
      nameLabel: "Имя:",
      patronymicLabel: "Имя пользователя:",
      mailLabel: "Номер телефон",
      numberLabel: "Пароль:",
      saveButton: "Сохранить",
      detectiveLink: "Детективы",
      fantasyLink: "Фантастика",
      kidsLink: "Детские",
      profile: "Профиль",
    favorites: "Избранное",
    cart: "Корзина",
    orders: "Заказы",
    logout: "Выйти",
      // Заголовки
      popularAuthorsTitle: "Популярные авторы",
      popularBooksTitle: "Популярные книги авторов",

      // Описание авторов
      kingDescription: "Стивена Кинга часто называют «Королем ужасов» потому что в основном его произведения написаны в жанре хоррор Он автор 56 романов, 200 рассказов, пяти книг на научно-популярную тематику. Его книги продаются миллионными тиражами.",
      coraDescription: "Кора Рейли — автор серии «Рожденные в крови мафии»,  «Хроники Каморры »,  «Грехи отцов » и  многих других книг , в большинстве из которых рассказывается об опасно сексуальных плохишах. ",

      // Описание книг
      harryPotterDescription: "«Гарри Поттер» — серия трагедий написанная британской писательницей Дж. К. Роулинг. Книги представляют собой хронику приключений юного волшебника Гарри Поттера, а также его друзей Рона Уизли и Гермионы Грейнджер, обучающихся в школе чародейства и волшебства Хогвартс",
      itDescription: "\"Оно\" - роман американского писателя Стивена Кинга , написанный в жанре ужасов. В произведении затрагиваются важные для Кинга темы: власть памяти, сила объединённой группы, влияние травм детства на взрослую жизнь.",
      boundByHonorDescription: "\"Связанные честью\" — первая книга в серии Рождённые в крови , она положила начало огромному циклу книг Коры Рейли про итальянскую мафию в Америке. Это первая часть истории о Луке и Арии, вторая — Связанные любовью",
      //отзывы
      review: "Отзывы",
      //видео
      video:"Видео обзор книг",
      topPublicationsTitle: "Топ 5 популярных изданий",
      publisherEksmo: "Эксмо",
      publisherAst: "АСТ",
      publisherPopcorn: "Попкорн",
      publisherLabirint: "Лабиринт",
      publisherKlever: "Клевер",

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
      loginFormTitle: "Login",
      userNameLabel: "Username",
      passwordLabel: "Password",
      registerButton: "Register",
      loginButton: "Login",
      profileLink: "Profile",

      surnameLabel: "Surname:",
      nameLabel: "Name:",
      patronymicLabel: "Username:",
      mailLabel: "Number:",
      numberLabel: "Password:",
      saveButton: "Save",
      novelLink: "Novels",
      detectiveLink: "Detectives",
      fantasyLink: "Fantasy",
      kidsLink: "Kids",
profile: "Profile",
    favorites: "Favorites",
    cart: "Cart",
    orders: "Orders",
    logout: "Logout",
      // Заголовки
      popularAuthorsTitle: "Popular Authors",
      popularBooksTitle: "Popular Books by Authors",

      // Описание авторов
      kingDescription: "Stephen King is often called the 'King of Horror' because his works are mostly written in the horror genre. He is the author of 56 novels, 200 short stories, and five books on popular science topics. His books sell millions of copies.",
      coraDescription: "Cora Reilly is the author of the 'Born in Blood Mafia' series, Chronicles of the Camorra, Sins of the Fathers and many other books, most of which feature dangerously sexy bad guys.",

      // Описание книг
      harryPotterDescription: "Harry Potter is a series of tragedie written by British writer J. K. Rowling. The books chronicle the adventures of the young wizard Harry Potter, as well as his friends Ron Weasley and Hermione Granger, studying at Hogwarts School of Witchcraft and Wizardrys  ",
      itDescription: "\"It\" is a novel by American writer Stephen King , written in the horror genre. The work touches on themes important to King: the power of memory, the power of a united group, the impact of childhood trauma on adulthood.",
      boundByHonorDescription: "\"Bound by Honor\" is the first book in the Born in Blood series it marked the beginning of a huge series of books by Cora Reilly about the Italian mafia in America. This is the first part of the story about Luke and Aria, the second is Bound by Love",
     //отзывы
     review: " Review",
     //видео
     video: "video book review",  topPublicationsTitle: "Top 5 Popular Publishers",
     publisherEksmo: "Eksmo",
     publisherAst: "AST",
     publisherPopcorn: "Popcorn",
     publisherLabirint: "Labirint",
     publisherKlever: "Clever",

     ourStoresTitle: "Our Stores",
     storeKamenaya: "Metro Station \"Kamenaya Gorka\"",
     storePushkinskaya: "Metro Station \"Pushkinskaya\"",
     storeNemiga: "Metro Station \"Nemiga\"",
     phoneNumber: "+375482344565",
     email: "BOOKTOK@gmail.com",
     companyName: "DuckBook"
    },
  };

  class Translator {
    #translations;
    #currentLanguage;

    constructor(translations) {
      this.#translations = translations;
      this.#currentLanguage =
        localStorage.getItem('language') in translations
          ? localStorage.getItem('language')
          : 'en';
      console.log('Translator initialized with language:', this.#currentLanguage);
    }

    get currentLanguage() {
      return this.#currentLanguage;
    }

    setLanguage(language) {
      console.log('Setting language to:', language);
      if (language in this.#translations) {
        this.#currentLanguage = language;
        localStorage.setItem('language', language);
        this.updatePage();
      } else {
        console.error('Language not supported:', language);
      }
    }

    updatePage() {
      const languageData = this.#translations[this.#currentLanguage];
      if (!languageData) {
        console.error('No translations found for language:', this.#currentLanguage);
        return;
      }

      this.#updateElementText('site-name', languageData.siteName);
      this.#updateElementText('shops-link', languageData.shopsLink);
      this.#updateElementText('login-link', languageData.loginLink);
      this.#updateElementText('novel-link', languageData.novelLink);
      this.#updateElementText('detective-link', languageData.detectiveLink);
      this.#updateElementText('fantasy-link', languageData.fantasyLink);
        this.#updateElementText('kids-link', languageData.kidsLink);
        
        this.#updateElementText('profile', languageData.profile);
        this.#updateElementText('favorites', languageData.favorites);
        this.#updateElementText('cart', languageData.cart);
          this.#updateElementText('orders', languageData.orders);
          this.#updateElementText('logout', languageData.logout);
//form
          this.#updateElementText('login-form-title', languageData. loginFormTitle);
          this.#updateElementText('user-name-label', languageData.userNameLabel);
          this.#updateElementText('password-label', languageData. passwordLabel);
          this.#updateElementText('login-button', languageData. loginButton);
          this.#updateElementText('register-button', languageData.registerButton);
          //profile
          this.#updateElementText('profile-form-title', languageData.profileLink);
          this.#updateElementText('surname-label', languageData.surnameLabel);
//form
          this.#updateElementText('name-label', languageData. nameLabel);
          this.#updateElementText('patronymic-label', languageData.patronymicLabel);
          this.#updateElementText('mail-labell', languageData. mailLabel);
          this.#updateElementText('number-label', languageData. numberLabel);
          this.#updateElementText('save-button', languageData.saveButton);


        // Заголовки
        this.#updateElementText('popular-authors-title', languageData.popularAuthorsTitle);
        this.#updateElementText('popular-books-title', languageData.popularBooksTitle);

        // Описание авторов и книг
        this.#updateElementText('king-description', languageData.kingDescription);
        this.#updateElementText('cora-description', languageData.coraDescription);
        this.#updateElementText('harry-potter-description', languageData.harryPotterDescription);
        this.#updateElementText('it-description', languageData.itDescription);
        this.#updateElementText('bound-by-honor-description', languageData.boundByHonorDescription);

        // Обновляем другие элементы
        this.#updateElementText('review', languageData.review);
        this.#updateElementText('video', languageData.video);
        this.#updateElementText('top-publications-title', languageData.topPublicationsTitle);
        this.#updateElementText('publisher-eksmo', languageData.publisherEksmo);
        this.#updateElementText('publisher-ast', languageData.publisherAst);
        this.#updateElementText('publisher-popcorn', languageData.publisherPopcorn);
        this.#updateElementText('publisher-labirint', languageData.publisherLabirint);
        this.#updateElementText('publisher-klever', languageData.publisherKlever);

        // Информация о магазинах
        this.#updateElementText('our-stores-title', languageData.ourStoresTitle);
        this.#updateElementText('store-kamenaya', languageData.storeKamenaya);
        this.#updateElementText('store-pushkinskaya', languageData.storePushkinskaya);
        this.#updateElementText('store-nemiga', languageData.storeNemiga);

        // Контактная информация
        this.#updateElementText('phone-number', languageData.phoneNumber);
        this.#updateElementText('email', languageData.email);
        this.#updateElementText('company-name', languageData.companyName);
    }

    #updateElementText(elementId, text) {
      const element = document.getElementById(elementId);
      if (element) {
        console.log('Updating element:', elementId, 'with text:', text);
        element.innerText = text;
      } else {
        console.warn('Element not found:', elementId);
      }
    }
  }

  const translator = new Translator(translations);
  translator.updatePage();

  document.getElementById('change-to-ru').addEventListener('click', () => {
    translator.setLanguage('ru');
  });

  document.getElementById('change-to-en').addEventListener('click', () => {
    translator.setLanguage('en');
  });
});
