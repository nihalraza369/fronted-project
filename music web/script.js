

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
let autoScrollInterval;

// Update carousel positions and styles
const updateCarousel = () => {
  images.forEach((image, index) => {
    const offset = (index - currentIndex + images.length) % images.length;

    if (offset === 0) {
      // Active image - center with a prominent size
      image.style.transform = 'translateZ(300px) scale(1.2)';
      image.style.opacity = '1';
      image.classList.remove('inactive');
    } else if (offset === 1 || offset === -1) {
      // Left/Right adjacent images
      image.style.transform = 'translateZ(150px) scale(1)';
      image.style.opacity = '0.8';
      image.classList.add('inactive');
    } else {
      // Background images - further back
      image.style.transform = 'translateZ(-100px) scale(0.8)';
      image.style.opacity = '0.5';
      image.classList.add('inactive');
    }
  });
};

// Next button
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  resetAutoScroll();
});

// Prev button
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  resetAutoScroll();
});

// Auto Scroll
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 3000); // Change every 3 seconds
};

// Reset Auto Scroll
const resetAutoScroll = () => {
  clearInterval(autoScrollInterval);
  startAutoScroll();
};

// Initialize carousel
updateCarousel();
startAutoScroll();
