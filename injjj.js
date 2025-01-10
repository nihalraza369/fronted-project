const cursorArrow = document.getElementById('cursor-arrow');

// Function to create water trail
const createTrail = (x, y) => {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  document.body.appendChild(trail);

  // Remove the trail after animation ends
  setTimeout(() => {
    trail.remove();
  }, 1000); // Matches animation duration
};

// Function to update cursor position
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Update arrow position
  cursorArrow.style.left = `${x}px`;
  cursorArrow.style.top = `${y}px`;

  // Create trail at cursor position
  createTrail(x, y);
});
