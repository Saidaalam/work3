$(".slider").slick({
    autoplay: true,
    prevArrow: ' <button class="leftArrow"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button class="rightArrow"><i class="fa-solid fa-arrow-right"></i></button>',
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(function(){
          $('input[type="number"]').niceNumber();
        });
        

  $(".topSlider").slick({
    arrows: false,
    asNavFor: ".bottomSlider",
    fade: true,
  });
  $(".bottomSlider").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: ".topSlider",
    focusOnSelect: true,
  });



  

  
