$(document).ready(function () {
  $('.fb-cards-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const previousArrow = `
  <button class="slick-arrow slick-prev" aria-label="previous">
    <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 12.905">
      <path id="Path_587" data-name="Path 587" d="M1357.756,2523.809l1.83,1.83,6.452-6.452-6.452-6.452-1.83,1.83,3.444,3.446h-40.162v2.353H1361.2Z" transform="translate(1366.038 2525.64) rotate(180)" />
    </svg>
  </button>
`;

  const nextArrow = `
  <button class="slick-arrow slick-next" aria-label="next">
    <svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 12.905">
      <path id="Path_586" data-name="Path 586" d="M1357.756,2523.809l1.83,1.83,6.452-6.452-6.452-6.452-1.83,1.83,3.444,3.446h-40.162v2.353H1361.2Z" transform="translate(-1321.038 -2512.735)"/>
    </svg>
  </button>
`;

  const previousArrowSmall = `
  <button class="slick-arrow slick-prev" aria-label="previous">
    <svg id="arrow-left-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <path id="Path_1367" data-name="Path 1367" d="M1311.423,309.433l1.418,1.418,5-5-5-5-1.418,1.418,2.669,2.67h-6.251v1.823h6.251Z" transform="translate(1317.841 310.851) rotate(180)"/>
    </svg>
  </button>
`;

  const nextArrowSmall = `
  <button class="slick-arrow slick-next" aria-label="next">
    <svg id="arrow-right-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
      <path id="Path_1355" data-name="Path 1355" d="M1375.6,3740.5l1.7,1.7,6-6-6-6-1.7,1.7,3.2,3.2h-7.5v2.188h7.5Z" transform="translate(-1371.301 -3730.203)" />
    </svg>
  </button>
`;

  $('.address-slider').slick({
    arrows: true,
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.associated-media-slider').slick({
    arrows: true,
    prevArrow: previousArrowSmall,
    nextArrow: nextArrowSmall,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.hero__slider').slick({
    arrows: true,
    dots: true,
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  });

  $('.foreign-press-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });

  $('.publications-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: previousArrowSmall,
    nextArrow: nextArrowSmall,
  });

  $('.slider-images').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: previousArrowSmall,
    nextArrow: nextArrowSmall,
  });

  // Autoplay active hero slider video
  // On slide change, pause all videos
  $('.hero__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.hero__item video').each(function () {
      $(this).get(0).pause();
    });
  });

  // On slide chnage, play a video inside the current slide
  $('.hero__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    if ($('.hero__item.slick-current').find('video').length !== 0) {
      $('.hero__slider .slick-current video')[0].play();
    }
  });
});
