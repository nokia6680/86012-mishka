
var headerWrap = document.querySelector(".main-nav__container");
var navToggle = document.querySelector(".main-nav__toggle");
var navMain = document.querySelector(".site-list");
var userList = document.querySelector(".user-list");

headerWrap.classList.remove("main-nav__container--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
navMain.classList.remove("site-list--nojs");
userList.classList.remove("user-list--nojs");

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("main-nav__toggle")) {
    navToggle.classList.remove("main-nav__toggle");
    navMain.classList.remove("site-list--hide");
    userList.classList.remove("user-list--hide");
  } else {
    navToggle.classList.add("main-nav__toggle");
    navMain.classList.add("site-list--hide");
    userList.classList.add("user-list--hide");
  }
});


var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__submit");
var buyButton = document.querySelectorAll(".btn-buy");

if (overlay) {
  for (var i = 0; i < buyButton.length; i++) buyButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay--on");
  });

  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--on");
  });

  modal.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  modalButton.addEventListener("submit", function() {
    overlay.classList.remove("overlay--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay.classList.remove("overlay--on");
    }
  });
}
