document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button-right');
  const prevButton = document.querySelector('.carousel-button-left');

  let currentSlideIndex = 0;

  function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel(currentSlideIndex);
  });

  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentSlideIndex);
  });
});
