$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 74
        }, 700);
        return false;
      }
    }
  });
});

$(document).ready(function(){

    if (window.location.hash == '#mail' ) {
      $('.toast').addClass('animate');
      setTimeout( function() {
        $('.toast').removeClass('animate');
        window.location.hash = "";
      }, 3000);
    }

    // $("h1, h2, h3, p, .panel__list > li, label, .topic ul li").wrapInner( "<span class='text--mock'></span>" );

    //Animation on scroll
    var root = document.documentElement;
    root.className += ' js';

    function boxTop(idBox) {
      var boxOffset = $(idBox).offset().top;
      return boxOffset;
    }
    var $target = $('.path, .text--mock, .panel__image, .panel, .form__control'),
        windowHeight = $(window).height(),
        offset = windowHeight;

    function animeScroll() {
      var documentTop = $(document).scrollTop();
      $target.each(function() {

        if ( $(this).hasClass('path') ) {
          if (documentTop > boxTop(this) - offset) {
              $(this).addClass('path--animation');
          } else {
              $(this).removeClass('path--animation');
          }
        } if ( $(this).hasClass('panel__image') ) {
          if (documentTop > boxTop(this) - offset) {
              $(this).addClass('animate');
          } else {
              $(this).removeClass('animate');
          }
        } if ( $(this).hasClass('text--mock') ) {
          if (documentTop > boxTop(this) - offset) {
              $(this).addClass('animate');
          } else {
              $(this).removeClass('animate');
          }
        } if ( $(this).hasClass('panel') ) {
          if (documentTop > boxTop(this) - offset) {
              $(this).addClass('animate');
          } else {
              $(this).removeClass('animate');
          }
        } if ( $(this).hasClass('form__control') ) {
          if (documentTop > boxTop(this) - offset) {
              $(this).addClass('animate');
          } else {
              $(this).removeClass('animate');
          }
        }


      });
    }
    animeScroll();

    $(document).scroll(function() {
      setTimeout(animeScroll(), 150);
    });
});