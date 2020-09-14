import Swiper from 'swiper';

const reviewSlider = new Swiper('.review-slider__container', {
  direction: 'vertical',
  effect: 'fade',
  centeredSlides: true,
  autoplay: 1600,
  loop: true,
  parallax: true,
  grabCursor: true,
  speed: 900,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
