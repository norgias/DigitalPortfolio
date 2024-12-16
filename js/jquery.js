$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.carousel-container img');
  const leftArrow = document.querySelector('.carousel-left');
  const rightArrow = document.querySelector('.carousel-right');
  let currentIndex = 0;

  // Display the first image initially
  function updateCarousel() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  updateCarousel();

  // Navigate to the next image
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  // Navigate to the previous image
  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  // Add event listeners to navigation arrows
  leftArrow.addEventListener('click', showPrevImage);
  rightArrow.addEventListener('click', showNextImage);

  // Automatically cycle through images every 5 seconds
  setInterval(showNextImage, 5000);
});
