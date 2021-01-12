"use-strict";
const snap = document.querySelector(".main-nav__toggle");
const nav = document.querySelector(".main-nav__list");
snap.onclick = function(evt) {
  evt.preventDefault();
  nav.classList.toggle('site-list');
};
