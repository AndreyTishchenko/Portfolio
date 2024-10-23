new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: false,
  touchEventsTarget: 'container',
  autoplay: {
    delay: 2500
  },
pagination: {
    el: ".swiper_pagination",
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<div class="progress"></div>' + "</span>";
    },
  },
  navigation: {
    nextEl: '.next_page',
    prevEl: '.previous_page',
  },
  allowTouchMove: true,
  on: {
    autoplayTimeLeft(s, time, progress) {
        const progressBar = document.querySelector('.swiper-pagination-bullet-active .progress');
        progressBar.style.width = `${100 - progress * 100}%`;
        console.log(progressBar.style.width)
    },
    slideChange: function () {
      const progressBars = document.querySelectorAll('.swiper_pagination .progress');
      console.log(progressBars)
      progressBars.forEach(progressBar => {
        progressBar.style.width = '0%'
      });
    }
  },
  breakpoints: {
    768: {
        allowTouchMove: false,
    },
  }
});
