//------------slider---------
let counter = 1;
setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//----slider-swiper
new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  autoHeight: true,
  watchOverfloy: true,
  autoplay: {
    delay: 3000,
  },
  speed: 300,
  effect: 'fade',
  breakpoints: {
    320: {
      slidePerView: 1,
    },
    480: {
      slidePerView: 1,
    },
    992: {
      slidePerView: 1,
    },
  },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
})