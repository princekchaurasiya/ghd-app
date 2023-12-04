/* smooth scroll */
$('.navlink[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
     scrollTop: ($($(this).attr('href')).offset().top - 91)
  }, 500, 'linear');
});

/* end of smooth scroll*/


// smooth scorll for other links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
     e.preventDefault();

     $('html, body').animate({
        scrollTop: ($($(this).attr('href')).offset().top - 91)
     }, 500, 'linear');
  });
});

/* smooth scroll for footer link */
$('.footerlink[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
     scrollTop: ($($(this).attr('href')).offset().top - 91)
  }, 500, 'linear');
});

/* end of smooth scroll for footer link*/