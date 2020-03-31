$(document).ready(function() {
  $("#js-btn").on("click", function(event) {
    event.preventDefault();
    var top = $("#js-plan").offset().top;
    $("html, body").animate(
      {
        scrollTop: top
      },
      1000
    );
  });

  $("#js-btn-2").on("click", function(event) {
    event.preventDefault();
    var topp = $("#js-plan").offset().top;
    $("html, body").animate(
      {
        scrollTop: topp
      },
      1000
    );
  });

  $("#js-btn-3").on("click", function(event) {
    event.preventDefault();
    var bottom = $("#js-main").offset().top;
    $("html, body").animate(
      {
        scrollTop: bottom
      },
      1000
    );
  });

//slider

  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing:'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHocer: true,
    pauseOnDotHocer: true,
    draggable: false,
    waitForAnimate: false,
    fade: false,
    
    appendArrows:$('.reviews__arrows'),
    appendDots:$('.reviews__dots')
});

$('.advantages-slider').slick({
  asNavFor: '.advantages-slider-image',
  arrows: false,
  dots: true,
  fade: true,
  appendDots:$('.advantages__dots')
});

$('.advantages-slider-image').slick({
  asNavFor: '.advantages-slider',
  arrows: false,
  dots: false
});



});








