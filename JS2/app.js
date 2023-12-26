$(function () {
$('.count').counterUp({
    delay:20,
    time: 1000
});

new VenoBox({
    selector: ".venobox",
    spinner: "grid",
    share: true,
}); 

$("#Shape").slick({
  arrows: false,
  dots: true,
  slidesToShow:1,
  dotsClass: "container bannerDots",
});

  $("#latest").slick({
    arrows: false,
    dots: true,
    slidesToShow:6,
    dotsClass: "container bannerDots",
  });

});