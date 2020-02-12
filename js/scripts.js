$(function () {
      $('a[href*="#"]:not([href="#"]):not(".section-dot")').click(function () {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 700);
                  return false;
              }
          }
      });
  });
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > $(window).height()){
$('.bg-left').addClass('active');
$('.bg-right').addClass('active');
} else{
$('.bg-left').removeClass('active');
$('.bg-right').removeClass('active');
}
});
$(document).ready(function () {

function Scroll_block(){
  var scroll_top = $(document).scrollTop() + $(window).height() - 200;
  $("#sidebar-right .section-dot").each(function(){
    var hash = $(this).attr("href");
    var target = $(hash);
    if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
    $("#sidebar-right .section-dot.active").parent().removeClass("active");
    $(this).addClass("active");
    } else {
    $(this).removeClass("active");
    }
    });
    }


  $(document).on("scroll", Scroll_block);

    $("#sidebar-right .section-dot").click(function(e){
    e.preventDefault();

    $(document).off("scroll");
    $("#sidebar-right .section-dot.active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);

    $("html, body").animate({
    scrollTop: target.offset().top
    }, 700, function(){
    window.location.hash = hash;
    $(document).on("scroll", Scroll_block);
  });

  });

});
// mobile-menu
$("#sidebar-left .burger svg").on('click', function(){
  $('#sidebar-left .burger').toggleClass("active");
  $('#sidebar-left .main-menu').toggleClass("active");
});
$(".main-menu a").on('click', function(){
  $('#sidebar-left .main-menu').removeClass("active");
  $('#sidebar-left .burger').removeClass("active");
  $('#sidebar-left .burger .icon').trigger('click');
});  
// mobile-menu end

$('#about-project .slider-wrap').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
     {
       breakpoint: 501,
       settings: {
        centerMode: false,
        variableWidth: false
       }
     }
   ]
});
$('#layout .slider-wrap').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
     {
       breakpoint: 501,
       settings: {
        centerMode: false,
        variableWidth: false
       }
     }
   ]
});
(function($){
    $(window).on("load",function(){
        $("#layout .slider-item .desc").mCustomScrollbar({
        	theme:"my-theme"
        });
    });
})(jQuery);
$(function() {
  $('#price .price-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     centerMode: true,
     variableWidth: true,
     arrows: true,
     prevArrow: '<img class="price-prev-arrow price-arrow" src="img/icons/slider-ar-left.svg">',
     nextArrow: '<img class="price-next-arrow price-arrow" src="img/icons/slider-ar-right.svg">',
      responsive: [
         {
           breakpoint: 501,
           settings: {
            centerMode: false,
            arrows: false,
            variableWidth: false
           }
         }
       ]
     // prevArrow: '<img class="portfolio-prevArrow" src="img/slider-ar-left.svg">',
     // nextArrow: '<img class="portfolio-nextArrow" src="img/slider-ar-right.svg">'
    });
  $("#price .price-nav__item").on('click', function(){
      var filter = $(this).data('filter');
       $("#price .price-slider").slick('slickUnfilter');
      
      if(filter == 'one'){
        $("#price .price-slider").slick('slickFilter','.one');
      }
      else if(filter == 'two'){
        $("#price .price-slider").slick('slickFilter','.two');
      }
      else if(filter == 'three'){
        $("#price .price-slider").slick('slickFilter','.three');
      }
      else if(filter == 'four'){
        $("#price .price-slider").slick('slickFilter','.four');
      }
      else if(filter == 'penthouse'){
        $("#price .price-slider").slick('slickfilter','.penthouse');
      }   
  })
});
$('#price .price-nav__item').on('click', function(){
	$('#price .price-nav__item').removeClass('active');
	$(this).addClass('active');
});
$(document).ready(function(){
	var button = $('.more-btn');
	var button2 = $('.circle-btn');
	var form = $('#popup-form');
	var overlay = $('.overlay');
	var close = $('#popup-form .close');
	var body = $('body');

	button.click(function(){
	  form.addClass("active");
	  overlay.css("display", "block");
	  body.css("overflow", "hidden");
	});
	button2.click(function(){
	  form.addClass("active");
	  overlay.css("display", "block");
	  body.css("overflow", "hidden");
	});
	close.click(function(){
	  form.removeClass("active");
	  overlay.css("display", "none");
	  body.css("overflow", "scroll");
	});
	overlay.click(function(){
	  form.removeClass("active")
	  overlay.css("display", "none");
	  body.css("overflow", "scroll");
	});
});
$(document).ready(function() {
  $('select').niceSelect();
});
$(function(){

$('.some_link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top + 100 }, 1000);
  e.preventDefault();
});

});