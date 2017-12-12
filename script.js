<<<<<<< HEAD
/* Hamburger menu */
$(".menu-button").click(function(){
  $(".nav-bar ul").slideToggle('open');
});
=======
/* Fixes menubar to top 
No longer needed with position: sticky!
*/

/* jQuery("document").ready(function($) {
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
}); */
>>>>>>> parent of 9ea43a6... hamburger menu for mobile

/* Smooth scrolling */
// Select all links with hashes
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});