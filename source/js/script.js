"use-strict";
var menuToggle = document.querySelector(".page-header__wrapper-toggle");
var nav = document.querySelector(".main-nav__list");
menuToggle.addEventListener("click", function() {
  if (nav.classList.contains("site-list--shadow")) {
    nav.classList.remove("site-list--shadow");
  } else {
    nav.classList.add("site-list--shadow");
  }
  if (menuToggle.classList.contains("page-header__wrapper-toggle--opened")) {
    menuToggle.classList.remove("page-header__wrapper-toggle--opened");
    menuToggle.classList.add("page-header__wrapper-toggle--closed");
  } else {
    menuToggle.classList.remove("page-header__wrapper-toggle--closed");
    menuToggle.classList.add("page-header__wrapper-toggle--opened");
  }
});
