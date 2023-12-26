$("#banner").slick({
    arrows: false,
    dots: true,
    dotsClass: "container bannerDots",
  });
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  $(".CountDown").countdown("2023/12/30", function (event) {
    // $(this).text(event.strftime("%D days %H:%M:%S"));
    $(".days").html(event.strftime("%D"));
    $(".hours").html(event.strftime("%H"));
    $(".mins").html(event.strftime("%M"));
    $(".secs").html(event.strftime("%S"));
    
  });
  
  new VenoBox({
    selector: ".venobox",
    spinner: "grid",
    share: true,
    
  });  

  $("#latest").slick({
    arrows: false,
    dots: true,
    slidesToShow:3,
    dotsClass: "container bannerDots",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  
  $(".productSlider").slick({
    arrows: false,
    slidesToShow:4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".lgdiv").slick({
    arrows: false,
    dots: true,
    slidesToShow:2,
    dotsClass: "container bannerDots",

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

