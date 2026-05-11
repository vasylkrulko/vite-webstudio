const modal = document.querySelector('.service__modal');
const openBtn = document.querySelector('.btn__service');
const closeBtn = document.querySelector('.service__modal-close');

openBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
