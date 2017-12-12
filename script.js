/* Hamburger menu */
$(".menu-button").click(function(){
  $(".nav-bar ul").slideToggle('open');
});

/* Smooth scrolling */
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});