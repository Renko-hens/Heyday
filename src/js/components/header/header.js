const header = document.querySelector('.header');
const heroImage = document.querySelector('.hero-image');
const socialGallery = document.querySelector('.social-gallery');
const mobileMenuButton = document.querySelector(`.mobile-menu__button`);

const POSITION = {
  HERO_IMAGE: {
    start: -50,
    end: -900,
  },

  GALLERY: {
    start: -24,
    end: -1300
  },

  HEADER: {
    start: 100,
  },
}


// mobileMenu
mobileMenuButton.addEventListener(`click`, () => {
  const navigationMenu = document.querySelector(`.header__navigation`);
  const mobileLogotypeSvg = document.querySelector(`.header__mobile-svg`);
  const basketLogotypeSvg = document.querySelector(`.basket-logo`);

  basketLogotypeSvg.classList.toggle(`basket-logo--active`)
  mobileLogotypeSvg.classList.toggle(`header__mobile-svg--active`);
  mobileMenuButton.classList.toggle(`mobile-menu__button--active`);
  navigationMenu.classList.toggle(`header__navigation--active`);
});

// header
if (heroImage && socialGallery && window.innerWidth > 1024) {  
  document.addEventListener(`scroll`, () => {
    let headerCoords = header.getBoundingClientRect();
    let heroImageCoords = heroImage.getBoundingClientRect();
    let socialGalleryCoords = socialGallery.getBoundingClientRect();

    if (headerCoords.top + pageYOffset > POSITION.HEADER.start) {
      header.classList.add('header--active-scroll');
    } else {
      header.classList.remove('header--active-scroll');
    }
  
    if (heroImageCoords.y < POSITION.HERO_IMAGE.start && heroImageCoords.y > POSITION.HERO_IMAGE.end) {
      header.classList.add(`header--light`);
    } else if (socialGalleryCoords.y < POSITION.GALLERY.start && socialGalleryCoords.y > POSITION.GALLERY.end) {
      header.classList.add(`header--light`);
    } else {
      header.classList.remove(`header--light`);
    }
  });    
};