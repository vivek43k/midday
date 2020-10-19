$(document).ready(function(){
	var swiper = new Swiper('.breaking-news-swiper', {
      navigation: {
        nextEl: '.slider-right-arrow',
        prevEl: '.slider-left-arrow',
      },
    });
    
    var swiper1 = new Swiper('.small-slider-sidebar', {
      navigation: {
        nextEl: '.small-slider-sidebar .swiper-button-next',
        prevEl: '.small-slider-sidebar .swiper-button-prev',
      },
    });
   
   
    var swiper2 = new Swiper('.drLove-news-swiper .swiper-container', {
      navigation: {
        nextEl: '.drLove-news-swiper  .slider-right-arrow',
        prevEl: '.drLove-news-swiper  .slider-left-arrow',
      },
    }); 
    
     var swiper3 = new Swiper('.horoscope-slider-wrapper .swiper-container', {
      navigation: {
        nextEl: '.horoscope-slider-wrapper  .slider-right-arrow',
        prevEl: '.horoscope-slider-wrapper  .slider-left-arrow',
      },
    }); 
    
    
    var swiper4 = new Swiper('.recommended-slider .swiper-container', {
      navigation: {
        nextEl: '.recommended-slider .swiper-button-next',
        prevEl: '.recommended-slider .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    var swiper7 = new Swiper('.covid-slider .swiper-container', {
      navigation: {
        nextEl: '.covid-slider .swiper-button-next',
        prevEl: '.covid-slider .swiper-button-prev',
      },
    });
    
    
    var swiper5 = new Swiper('.timepass_slider_1 .swiper-container', {
      navigation: {
        nextEl: '.timepass_slider_1 .swiper-button-next',
        prevEl: '.timepass_slider_1 .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    var swiper6 = new Swiper('.timepass_slider_2 .swiper-container', {
      navigation: {
        nextEl: '.timepass_slider_2 .swiper-button-next',
        prevEl: '.timepass_slider_2 .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    var swiper_video = new Swiper('.videos-stip-slider .swiper-container', {
	  slidesPerView: 5,
	  spaceBetween: 30,
      navigation: {
        nextEl: '.l1',
        prevEl: '.l2',
      },
    });
    
    
});