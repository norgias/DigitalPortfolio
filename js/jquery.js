$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Auto-slide every 5 seconds
    },
    breakpoints: {
      // Make it responsive
      768: {
        slidesPerView: 2, // Show 2 slides at a time on tablets
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3, // Show 3 slides at a time on desktops
        spaceBetween: 40,
      },
    },
  });


