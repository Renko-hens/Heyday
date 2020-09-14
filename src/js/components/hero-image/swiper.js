import Swiper from 'swiper';
import anime from 'animejs';
import {flowers} from '../../../mocks/flower.js';

const mainSlider = document.querySelector('.main-slider');

if (mainSlider) {

  /* Gallery Top */
  const galleryTop = new Swiper(mainSlider, {
    speed: 1000,
    spaceBetween: 200,
    grabCursor: false,
    loop: true,
    loopedSlides: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function() {
        anime({
          targets: '.hero-image',
          opacity: 1,
          duration: 1500,
          easing: 'easeInQuad'
        });

        anime({
          targets: `.main-slider .swiper-slide-active`,
          opacity: 1,
          scale: 1,
          duration: 300,
          easing: 'linear'
        });

        const localColor = localStorage.getItem('--main-theme-color');
        const localGradient = localStorage.getItem('--main-theme-gradient');
        const activeIndex = localStorage.getItem('active-index');

        if (localColor === null && localGradient === null && activeIndex === null) {
          const activeSlide = document.querySelector('.gallery-thumbs .swiper-slide-active');
          if (activeSlide !== null) {
            const activeButton = activeSlide.querySelector(`.swiper-slide__pagination`);
            document.documentElement.style.setProperty('--main-theme-color', `var(--${activeButton.dataset.color})`);
            document.documentElement.style.setProperty('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);

            localStorage.setItem('--main-theme-color', `var(--${activeButton.dataset.color})`);
            localStorage.setItem('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);
            localStorage.setItem('active-index', `${this.activeIndex}`);
          }
        } else { 
          // this.slideTo(activeIndex);
          this.activeIndex = activeIndex;
          this.slideReset(100); 

          document.documentElement.style.setProperty('--main-theme-color', localColor);
          document.documentElement.style.setProperty('--main-theme-gradient', localGradient);
        }


        const inputSize = document.querySelector(`.calculator .calculator__input-size:checked`);
    
        const activeSlide = this.wrapperEl.querySelector('.swiper-slide-active');
        const mainImage = activeSlide.querySelector('.main-slider__image');
        const activeInfo = activeSlide.querySelector(`.information-item`);

        const mainOldPrice = activeSlide.querySelector('.main-slider__old-price');
        const mainNewPrice = activeSlide.querySelector('.main-slider__new-price');

        const sizeItems = document.querySelectorAll(`.calculator__item-size`);

        if (inputSize !== null) {

          flowers.forEach((flower) => {
            if (activeInfo.id === flower.id) {

              flower.sizes.forEach((size, index) => {
                const sizeItem = sizeItems[index];
                const sizeButton = sizeItem.querySelector(`.calculator__input-size`);

                if (!size.stock) {
                  sizeButton.disabled = true;
                } else {
                  sizeButton.disabled = false;
                }
                
                if (size.size === inputSize.id) {
                  mainImage.src = size.urlPicture ? `${size.urlPicture}` : `assets/img/icons/noimage.png`;

                  mainOldPrice.textContent =  size.price.oldPrice ? `${size.price.oldPrice} ₽` : ``
                  mainNewPrice.textContent =  size.price.currentPrice ? `${size.price.currentPrice} ₽` : ``
                }
              });
            }

          });
          
        }
      },

      slideChangeTransitionStart: function() {
        const inputSize = document.querySelector(`.calculator .calculator__input-size:checked`);
    
        const activeSlide = this.wrapperEl.querySelector('.swiper-slide-active');
        const mainImage = activeSlide.querySelector('.main-slider__image');
        const activeInfo = activeSlide.querySelector(`.information-item`);

        const mainOldPrice = activeSlide.querySelector('.main-slider__old-price');
        const mainNewPrice = activeSlide.querySelector('.main-slider__new-price');

        const sizeItems = document.querySelectorAll(`.calculator__item-size`);

        if (inputSize !== null) {

          flowers.forEach((flower) => {
            if (activeInfo.id === flower.id) {

              flower.sizes.forEach((size, index) => {
                const sizeItem = sizeItems[index];
                const sizeButton = sizeItem.querySelector(`.calculator__input-size`);

                if (!size.stock) {
                  sizeButton.disabled = true;
                } else {
                  sizeButton.disabled = false;
                }
                
                if (size.size === inputSize.id) {
                  mainImage.src = size.urlPicture ? `${size.urlPicture}` : `assets/img/icons/noimage.png`;

                  mainOldPrice.textContent =  size.price.oldPrice ? `${size.price.oldPrice} ₽` : ``
                  mainNewPrice.textContent =  size.price.currentPrice ? `${size.price.currentPrice} ₽` : ``
                }
              });
            }

          });
          
        }
      },

      slideChangeTransitionEnd: function() {
        const activeSlide = document.querySelector('.gallery-thumbs .swiper-slide-active');
        if (activeSlide !== null) {
          const activeButton = activeSlide.querySelector(`.swiper-slide__pagination`);
          document.documentElement.style.setProperty('--main-theme-color', `var(--${activeButton.dataset.color})`);
          document.documentElement.style.setProperty('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);

          localStorage.setItem('--main-theme-color', `var(--${activeButton.dataset.color})`);
          localStorage.setItem('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);
          localStorage.setItem('active-index', `${this.activeIndex}`);
        }
      }

    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });

  galleryTop.on(`slideChangeTransitionStart`, function () {
    anime.remove({
      targets: '.main-slider .swiper-slide-prev .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-prev .main-slider__image-wrapper',
      opacity: {
        value: 0,
        duration: 300,
      },
      scale: 0.6,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-active .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-active .main-slider__image-wrapper',
      opacity: {
        value: 1,
        duration: 700,
      },
      scale: 1,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-next .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-next .main-slider__image-wrapper',
      opacity: {
        value: 0,
        duration: 300,
      },
      scale: 0.6,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-duplicate-active .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-duplicate-active .main-slider__image-wrapper',
      opacity: {
        value: 1,
        duration: 700,
      },
      scale: 1,
      duration: 800,
      easing: 'linear',
    });
  });


  /* Gallery Thumbs */
  const addItemInBasket = () => { 
    const inputSize = document.querySelector(`.calculator .calculator__input-size:checked`);
    const galleryThumbs = document.querySelector(`.gallery-thumbs`);
    const activeButtonAdd = galleryThumbs.querySelector(`.wrapper-add-item .button-add-item`);

    console.log(inputSize);

    if (inputSize.disabled) {
      activeButtonAdd.disabled = true;
    } else {
      activeButtonAdd.disabled = false;    
      document.querySelector(`.popup-basket`).classList.remove(`popup-basket--hide`); 
    }
  };
  
  const galleryThumbs = new Swiper(".gallery-thumbs", {
    speed: 1000,
    grabCursor: true,
    touchRatio: 0.4,
    loop: true,
    loopedSlides: 8,
    centeredSlides: true,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    on: {
      init: function() {
        const activeSlide = this.wrapperEl.querySelector('.swiper-slide-active');
        const activeButton = activeSlide.querySelector(`.swiper-slide__pagination`);


        const localColor = localStorage.getItem('--main-theme-color');
        const localGradient = localStorage.getItem('--main-theme-gradient');
        const activeIndex = localStorage.getItem('active-index');

        if (localColor === null && localGradient === null && activeIndex === null) {
          document.documentElement.style.setProperty('--main-theme-color', `var(--${activeButton.dataset.color})`);
          document.documentElement.style.setProperty('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);

          localStorage.setItem('--main-theme-color', `var(--${activeButton.dataset.color})`);
          localStorage.setItem('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);
          localStorage.setItem('active-index', `${galleryTop.activeIndex}`);
        } else { 
          // this.slideTo(activeIndex);
          this.activeIndex = activeIndex;
          this.slideReset(100); 

          document.documentElement.style.setProperty('--main-theme-color', localColor);
          document.documentElement.style.setProperty('--main-theme-gradient', localGradient);
        }
        
        const buttonAddItem = document.querySelector(`.swiper-slide-active .button-add-item`);
        buttonAddItem.addEventListener(`click`, addItemInBasket);
      },

      slideChangeTransitionStart: function() {
        const buttonAddItem = document.querySelector(`.swiper-slide-active .button-add-item`);
        buttonAddItem.removeEventListener(`click`, addItemInBasket);
      },

      slideChangeTransitionEnd: function() {
        const buttonAddItem = document.querySelector(`.swiper-slide-active .button-add-item`);
        buttonAddItem.addEventListener(`click`, addItemInBasket);
      },

      touchEnd: function() {
        const activeSlide = this.wrapperEl.querySelector('.swiper-slide-active');
        const activeButton = activeSlide.querySelector(`.swiper-slide__pagination`);

        document.documentElement.style.setProperty('--main-theme-color', `var(--${activeButton.dataset.color})`);
        document.documentElement.style.setProperty('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);

        localStorage.setItem('--main-theme-color', `var(--${activeButton.dataset.color})`);
        localStorage.setItem('--main-theme-gradient', `var(--gradient-${activeButton.dataset.color})`);
        localStorage.setItem('active-index', `${this.activeIndex}`);
      }
    },
  });


  galleryThumbs.on(`slideChangeTransitionStart`, function () {
    anime.remove({
      targets: '.main-slider .swiper-slide-prev .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-prev .main-slider__image-wrapper',
      opacity: {
        value: 0,
        duration: 300,
      },
      scale: 0.6,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-active .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-active .main-slider__image-wrapper',
      opacity: {
        value: 1,
        duration: 700,
      },
      scale: 1,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-next .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-next .main-slider__image-wrapper',
      opacity: {
        value: 0,
        duration: 300,
      },
      scale: 0.6,
      duration: 800,
      easing: 'linear',
    });

    anime.remove({
      targets: '.main-slider .swiper-slide-duplicate-active .main-slider__image-wrapper'
    });

    anime({
      targets: '.main-slider .swiper-slide-duplicate-active .main-slider__image-wrapper',
      opacity: {
        value: 1,
        duration: 700,
      },
      scale: 1,
      duration: 800,
      easing: 'linear',
    });

  });

  /* set controller  */
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
}