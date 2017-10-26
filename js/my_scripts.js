$(function(){

  $(window).ready(function(){

    var $toggleOverlayBtns = $('.toggle-overlay'),
        $clientCases = $('#client-cases'),
        $overlay = $('#overlay'),
        $caseItems = $('.case-item');


    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $('html, body').animate({scrollTop: $(_href).offset().top - 80 +"px"});
      return false;
    });


    $('.responsive').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.logo-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 8,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });


    $toggleOverlayBtns.on('click', function() {
      $clientCases.addClass('open');
      $overlay.addClass('show');
    });

    $(document).click(function(event) {
      if ($(event.target).closest($caseItems).length) return;
      $clientCases.removeClass('open');
      $overlay.removeClass('show');
    });

  });

}());

