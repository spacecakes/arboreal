/* Fixes menubar to top */

jQuery("document").ready(function($) {
  const nav = $("#nav-bar");
  const navOffset = $("#mission");  


  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      nav.addClass("nav-bar-fixed");
      navOffset.addClass("nav-bar-offset");
      
    } else {
      nav.removeClass("nav-bar-fixed");
      navOffset.removeClass("nav-bar-offset");
      
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