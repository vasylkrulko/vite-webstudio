
// MODAL SERVISE

const openBtn = document.getElementById("heroOpenModal");
const modal = document.querySelector(".overlay__modal");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});.


// BURGER MENU
const openBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".mobile-menu-close");
const menu = document.querySelector(".mobile-menu");

openBtn.addEventListener("click", function () {
  menu.classList.add("is-open");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("is-open");
});
