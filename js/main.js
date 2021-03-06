$(function () {
  $('.slider').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next.svg" alt="next.svg"></button>',
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: false,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});
