import 'waypoints/lib/noframework.waypoints.min.js';
import anime from 'animejs';


if (document.querySelector('.calculator__list-size')) {
  const waypoint = new Waypoint({
    element: document.querySelector('#scrollLabelTarget'),
    handler: function(direction) {
      const labelText = document.querySelector(`.hero-image__label`);
      labelText.classList.add(`hero-image__label--hide`)
    },
  });
}

const feature = document.querySelector(`.features`); 

if (feature) {
  const waypoint = new Waypoint({
    element: document.querySelector('.features'),
    handler: function(direction) {
      if (direction === `down`) {
        anime({
          targets: `.features__item`,
          opacity: [0, 1],
          translateY: [40, 0],
          easing: 'easeInOutExpo',
          delay: anime.stagger(120)
        })
      } else {
        anime({
          targets: `.features__item`,
          opacity: 0,
          easing: 'easeInOutExpo',
          delay: anime.stagger(120)
        })
      }
    },
    offset: '80%'
  });
}


const shipping = document.querySelector(`.shipping`); 

if (shipping) {
  const waypoint = new Waypoint({
    element: document.querySelector('.shipping'),
    handler: function(direction) {
      if (direction === `down`) {
        anime({
          targets: `.shipping__description`,
          opacity: [0, 1],
          translateY: [40, 0],
          easing: 'easeInOutExpo',
          delay: anime.stagger(120)
        })
      } else {
        anime({
          targets: `.shipping__description`,
          opacity: 0,
          easing: 'easeInOutExpo',
          delay: anime.stagger(120)
        })
      }
    },
    offset: '80%'
  });
}
