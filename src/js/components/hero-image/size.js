import {flowers} from '../../../mocks/flower.js';

const sizesList = document.querySelector('.calculator__list-size');

if (sizesList) {
  const setCurrentInformation = (flowersData, activeButtonSize) => {
    const slideActive = document.querySelector(`.swiper-slide-active`);

    const activeInfoInput = slideActive.querySelector(`.information-item`);
    const mainImage = slideActive.querySelector(`.main-slider__image`);
    const mainNewPrice = slideActive.querySelector(`.main-slider__new-price`);
    const mainOldPrice = slideActive.querySelector(`.main-slider__old-price`);

    flowersData.forEach((flower) => {
      if (flower.id === activeInfoInput.id) {

        flower.sizes.forEach(size => {
          if (size.size === activeButtonSize.id) {
            mainImage.src = size.urlPicture ? `${size.urlPicture}` : `assets/img/icons/noimage.png`;
            
            mainOldPrice.textContent = size.price.oldPrice ? `${size.price.oldPrice} ₽` : ``;
            mainNewPrice.textContent = size.price.currentPrice ? `${size.price.currentPrice} ₽` : ``;
          }
          
        });

      }
      
    });
  };

  function sizesListClickHandler (evt) {
    let activeButton = evt.target.closest('.calculator__input-size');

    activeButton !== null ? setCurrentInformation(flowers, activeButton) : false;
  };

  sizesList.addEventListener('click', sizesListClickHandler);
}
