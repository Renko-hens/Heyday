import 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs';

const saleBlock = document.querySelector('.sale-block');
if (saleBlock) {  
  const description = saleBlock.querySelector(`.sale-block__description`);

  const waypoint = new Waypoint({
    element: document.querySelector('.gallery-thumbs') || document.querySelector('.sale-block'),
    handler: function(direction) {
      if (direction === `down`) {
        anime({
          targets: description,
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutExpo'
        });
      } else {
        anime({
          targets: description,
          opacity: 0,
          duration: 1000,
          easing: 'easeInOutExpo'
        });
      }
    },
    offset: '20%'
  });


  if (window.innerWidth > 1261) {
    window.addEventListener(`scroll`, () => {
      const valueWindowScroll = window.scrollY;
      const saleImage = saleBlock.querySelector(`.sale-block__image`);
  
      saleImage.style.bottom = valueWindowScroll * 0.3 + 'px'
    });
  }
}

