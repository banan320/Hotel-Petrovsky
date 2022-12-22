"use strict";

// import modules ============
import "../../node_modules/swiper/swiper-bundle.min.js";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 700,
  spaceBetween: 100,
  simulateTouch: false,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper-slide",
  },
});

// burger ============
const burger = document.querySelector(".header__burger");
const menuLinks = document.querySelector(".menu__links");

burger.addEventListener("click", () => {
  burger.classList.toggle("open-menu");
  menuLinks.classList.toggle("open-menu");
});

// якорные ссылки ===========
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// якорные ссылки ===========
