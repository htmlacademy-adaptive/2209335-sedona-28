let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');
let mapElement = document.querySelector(".map")

navMain.classList.remove('main-nav--nojs');
mapElement && mapElement.classList.remove('map--nojs')

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
