let navMain = document.querySelector('.main-nav')
let navToggle = document.querySelector('.main-header__toggle')

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed')
    navMain.classList.add('main-nav--opened')
  } else {
    navMain.classList.remove('main-nav--closed')
    navMain.classList.add('main-nav--opened')
  }
})
