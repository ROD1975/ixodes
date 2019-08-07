const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu__btn--open");
  menu.classList.toggle("menu__nav--open");
});
