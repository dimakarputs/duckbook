fetch('ARINA.xml')
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
    const tours = xmlDOM.getElementsByTagName('block');
    
    const toursContainer = document.getElementById('row');
    for (let i = 0; i < tours.length; i++) {
      const tour = tours[i];
      const image = tour.getElementsByTagName('img')[0].textContent;
      const age = tour.getElementsByTagName('age')[0].textContent;
      const name = tour.getElementsByTagName('name')[0].textContent;
      const author = tour.getElementsByTagName('author')[0].textContent;
      const button = tour.getElementsByTagName('button')[0].textContent;

      const tourElement = document.createElement('div');
      tourElement.className = 'item';
      tourElement.innerHTML = `
          <img src="${image}" alt="${name}" class='bookImg'>
          <div class="description">
            <p class="filmAge">${age}</p>
            <h2 class="filmName">${name}</h2>
            <p class="Аuthor">${author}</p>
          </div>
          <div class="buyBotton">
            <a href="">${button}</a>
          </div>
      `;
      
      toursContainer.appendChild(tourElement);
    }
  })
  .catch(error => console.error(error));