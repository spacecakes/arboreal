/* Fixes menubar to top */

jQuery("document").ready(function($) {
  const nav = $("#nav-bar");
  const home = $("#navbar");  


  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      nav.addClass("nav-bar-fixed");
    } else {
      nav.removeClass("nav-bar-fixed");
    }
  });
});

/* Smooth scrolling */
// Select all links with hashes
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});