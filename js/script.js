$(document).ready(function(){



// smoove
$('.block_c').smoove({
  offset:'40%'
});


	
});

// slick
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  // speed: 600,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 7000,
  focusOnSelect: true
});


// wow js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

