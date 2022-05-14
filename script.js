"use strict";

const showNav = document.querySelector(".showNav");
const navbar = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");

const openNav = function () {
  navbar.classList.add("showNav");
  overlay.classList.remove("hidden");
};

const closeNav = function () {
  navbar.classList.remove("showNav");
  overlay.classList.add("hidden");
};

navBtn.addEventListener("click", function () {
  openNav();
});

closeBtn.addEventListener("click", function () {
  closeNav();
});

overlay.addEventListener("click", function () {
  closeNav();
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (navbar.classList.contains("showNav") && e.key === "Escape") {
    closeNav();
  }
});
