$(document).ready(function () {
  $('.fb-cards-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const previousArrow = `
  <button class="slick-arrow slick-prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="12.905" viewBox="0 0 45 12.905">
      <path id="Path_587" data-name="Path 587" d="M1357.756,2523.809l1.83,1.83,6.452-6.452-6.452-6.452-1.83,1.83,3.444,3.446h-40.162v2.353H1361.2Z" transform="translate(1366.038 2525.64) rotate(180)" fill="#1a1a1a"/>
    </svg>
  </button>
`;

  const nextArrow = `
  <button class="slick-arrow slick-next">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="12.905" viewBox="0 0 45 12.905">
      <path id="Path_586" data-name="Path 586" d="M1357.756,2523.809l1.83,1.83,6.452-6.452-6.452-6.452-1.83,1.83,3.444,3.446h-40.162v2.353H1361.2Z" transform="translate(-1321.038 -2512.735)" fill="#1a1a1a"/>
    </svg>
  </button>
`;

  $('.address-slider').slick({
    arrows: true,
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
