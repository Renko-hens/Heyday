import anime from 'animejs';

if (document.querySelector('#scrollLabelTarget')) {
  var waypointArrow = new Waypoint({
    element: document.querySelector('#scrollLabelTarget'),
    handler: function(direction) {
      const arrowTop = document.querySelector(`.arrow-top`);
  
      if (direction === `up`) {
        arrowTop.style.pointerEvents = `none`;
        anime({
          targets: arrowTop,
          easing: `easeOutExpo`,
          opacity: [1, 0],
        });
      } else {
        arrowTop.style.pointerEvents = `auto`;
        anime({
          targets: arrowTop,
          easing: `easeOutExpo`,
          opacity: [0, 1],
        });
      }
    },
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);  
        const topOffset = 100; 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
  
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });
}
