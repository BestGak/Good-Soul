// Header menu 

const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu nav ul li a');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));
menuLinks.forEach((item) => item.addEventListener('click' , () =>  document.querySelector('html').classList.toggle('active')));

// Slick slider gallery and video gallery
$('.gallery__container').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.gallery-prev'),
    nextArrow: $('.gallery-next'),
    responsive: [
      {
        breakpoint: 1023,
        settings: "unslick"
      }
    ]
  });

  $('.gallery-video__container').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.gallery-video-prev'),
    nextArrow: $('.gallery-video-next'),
    responsive: [
      {
        breakpoint: 1023,
        settings: "unslick"
      }
    ]
  });

// Behavior Scroll to href
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
