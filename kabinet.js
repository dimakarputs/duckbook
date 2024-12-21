const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.help');
const closeModalBtn = document.querySelector('.close-modal-btn');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
