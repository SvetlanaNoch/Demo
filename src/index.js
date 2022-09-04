import $ from 'jquery';
import 'slick-carousel';
$(document).ready(function () {
  $('.customer-reviews__slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
  });
});
