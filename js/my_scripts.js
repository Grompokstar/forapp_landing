$(function(){

  $(window).ready(function(){

    var $toggleOverlayBtns = $('.toggle-overlay'),
        $clientCases = $('#client-cases'),
        $overlay = $('#overlay'),
        $caseItems = $('.case-item'),
        $controlCircles = $('.control-circle'),
        $imgContainers = $('.img-container'),
        $benefits = $('.benefit');


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


    $controlCircles.on('click', function() {
      var key = $(this).attr('data-key');

      $controlCircles.removeClass('current');
      $(this).addClass('current');

      $imgContainers.each(function() {
        if ($(this).attr('data-key') === key) {
          $(this).addClass('current')
        } else {
          $(this).removeClass('current');
        }

      });

      $benefits.each(function() {
        if ($(this).attr('data-key') === key) {
          $(this).addClass('current')
        } else {
          $(this).removeClass('current');
        }

      })
    });

    var $form = $('.wpcf7-form');
    var $done_block = $('#done-block');

    console.log($form);
    console.log($done_block);

    var $submit = $('input[type="submit"]');
    var $agreement = $('input[type="checkbox"].agreement');

    $form.show();
    $done_block.hide();
    $('#name-required').hide();
    $('#surname-required').hide();
    $('#phone-required').hide();
    $('#email-required').hide();
    $('#position-required').hide();
    $('#company-required').hide();

    $submit.prop('disabled', true);

    $agreement.on('change', function(e) {
        $submit.prop('disabled', !$agreement.prop('checked'));
    });

    $('#try-it-modal').on('shown.bs.modal', function () {
        $('#name').focus();
    });


    $('#try-it-modal').on('hidden.bs.modal', function () {
        $('#name').val('');
        $('#phone').val('');
        $('#email').val('');
        $('#comment').val('');

        $form.show();
        $done_block.hide();

        $('#name-required').hide();
        $('#phone-required').hide();
        $('#email-required').hide();
    });

    $form.on('wpcf7submit', function() {
        console.log('SUBMIT!');
        $form.hide();
        $done_block.show();
    });

    $('#done').click(function() {
        $('#try-it-modal').modal('hide');
    });

  });

}());

