/*
Author:       Danko Milutinovic
Desctiption:  functionality for http://danko-m.github.io/sample-02/
Contact:      dankomilutinovic@gmail.com, 
              https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778, 
              http://danko-m.github.io/
Design:       EnzoLiVolti:  http://enzolivolti.com/ , 
              https://www.behance.net/gallery/12680703/FREE-FooseShoes-eCommerce-PSD
*/
$(function() {
  $('.fa-search').on('click', function() {
    if ($(window).width() < 768) {
      $('.user-area-bg').toggleClass('new-height');
    }
    $('.user-area input').animate({
      width: 'toggle'
    }, 100).focus();
  });

  $('a')
    .not('.flickr_badge_wrapper a')
    .not('.copy > div a')
    .on('click', function(e) {
      e.preventDefault();
    });
});
