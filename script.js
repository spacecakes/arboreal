/* Hamburger menu */
$(".mobile-menu").click(function(){
  $(".nav-bar").toggleClass('open');
});

/* Smooth scrolling */
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});