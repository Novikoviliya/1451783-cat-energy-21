"use-strict";
var menuToggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav__list");
var main = document.querySelector(".main-nav");
menuToggle.addEventListener("click", function() {
  if (nav.classList.contains("site-list")) {
    nav.classList.remove("site-list");
  } else { nav.classList.add("site-list"); }
  if (main.classList.contains("main-nav__menu--opened")) {
    main.classList.remove("main-nav__menu--opened");
    main.classList.add("main-nav__menu--closed");
  } else {
    main.classList.remove("main-nav__menu--closed");
    main.classList.add("main-nav__menu--opened");
  }
});
