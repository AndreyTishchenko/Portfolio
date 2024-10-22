new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: false,
  touchEventsTarget: 'container',
  autoplay: {
    delay: 2500
  },
  navigation: {
    nextEl: '.next_page',
    prevEl: '.previous_page',
  },
  allowTouchMove: true,
  breakpoints: {
    768: {
        allowTouchMove: false,
    },
  }
});