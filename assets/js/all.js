"use strict";

//聽聽他們怎麼說
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper('.mySwiper2', {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
}); //日曆

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn primary'
});
//# sourceMappingURL=all.js.map
