const openBtn = document.querySelector('.burger_menu'); //Отримати кнопку в JS//
const menu = document.querySelector('.mobile__menu'); //Отримати меню//
const closeBtn = document.querySelector('.mobile__menu-close');

if (openBtn && menu && closeBtn) {
  openBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
  });

  // закриття меню
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
}
