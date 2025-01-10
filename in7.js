
// Detect section visibility and add 'visible' class
document.addEventListener('scroll', () => {
    const contactSection = document.querySelector('#contact');
    const sectionTop = contactSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && sectionTop > 0) {
        contactSection.classList.add('visible');
    } else {
        contactSection.classList.remove('visible');
    }
});
/*
// Intersection Observer for triggering animation only once
const contactSection = document.querySelector('#contact');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contactSection.classList.add('visible');
            } else {
                contactSection.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the section is visible
    }
);

// Observe the contact section
observer.observe(contactSection);
*/

/*

// Detect scroll position and toggle visibility of contact section
let contactSection = document.querySelector('.contact-section');
let footer = document.querySelector('.footer');

// Detect the scroll position of the page
window.addEventListener('scroll', function() {
    let contactPosition = contactSection.getBoundingClientRect().top;
    
    // When user scrolls to the contact section, make it visible
    if (contactPosition <= window.innerHeight && contactPosition > 0) {
        contactSection.classList.remove('hide');
        contactSection.classList.add('show');
    } else {
        contactSection.classList.add('hide');
        contactSection.classList.remove('show');
    }
});

// Smoothly hide contact section when scrolling upwards
contactSection.addEventListener('transitionend', function() {
    if (contactSection.classList.contains('hide')) {
        contactSection.style.display = 'none';
    }
});
*/

/*
// Select the contact section
let contactSection = document.querySelector('.contact-section');

// Detect when the contact section enters the viewport
window.addEventListener('scroll', function() {
    let contactPosition = contactSection.getBoundingClientRect().top;
    
    // When contact section enters the viewport, show it
    if (contactPosition <= window.innerHeight && contactPosition > 0) {
        contactSection.classList.add('show');
        contactSection.classList.remove('hide');
    } else {
        contactSection.classList.remove('show');
        contactSection.classList.add('hide');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
        const circle = container.querySelector(".circle");
        const circleText = circle.querySelector(".circle-text");
        const description = container.querySelector(".description");

        let progress = 0;
        let end = 0;

        // Customize progress for each language
        if (description.textContent.includes("HTML and CSS")) {
            end = 90;
        } else if (description.textContent.includes("Python")) {
            end = 85;
        } else if (description.textContent.includes("JavaScript") || description.textContent.includes("TypeScript")) {
            end = 70;
        }

        // Reveal animation when the page loads
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        container.classList.add("visible");

                        // Start progress animation
                        let currentProgress = 0;
                        const interval = setInterval(() => {
                            if (currentProgress <= end) {
                                circleText.textContent = `${currentProgress}%`;
                                circle.style.background = `conic-gradient(
                                     #007887  ${currentProgress * 3.6}deg,
                                      #ffffff ${currentProgress * 3.6}deg
                                )`;
                                currentProgress++;
                            } else {
                                clearInterval(interval);
                            }
                        }, 20);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(container);

        // Hover effect
        circle.addEventListener("mouseenter", () => {
            let currentProgress = 0;
            const interval = setInterval(() => {
                if (currentProgress <= end) {
                    circleText.textContent = `${currentProgress}%`;
                    circle.style.background = `conic-gradient(
                         #007887 ${currentProgress * 3.6}deg,
                         #ffffff ${currentProgress * 3.6}deg
                    )`;
                    currentProgress++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        });
    });
});
*/






/*
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle) => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        circle.style.animationPlayState = "running"; // Start animation
                    } else {
                        circle.style.animationPlayState = "paused"; // Pause animation
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(circle);
    });
});
*/




document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
        const circle = container.querySelector(".circle");
        const circleText = circle.querySelector(".circle-text");
        const description = container.querySelector(".description");

        let progress = 0;
        let end = 0;

        // Customize progress for each language
        if (description.textContent.includes("HTML and CSS")) {
            end = 90;
        } else if (description.textContent.includes("Python")) {
            end = 85;
        } else if (description.textContent.includes("JavaScript") || description.textContent.includes("TypeScript")) {
            end = 70;
        }

        // Reveal animation when the page loads
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        container.classList.add("visible");

                        // Start progress animation
                        let currentProgress = 0;
                        const interval = setInterval(() => {
                            if (currentProgress <= end) {
                                circleText.textContent = `${currentProgress}%`;
                                circle.style.background = `conic-gradient(
                                    #1aa5b7 ${currentProgress * 2.6}deg,
                                     rgb(231, 231, 231) ${currentProgress*3.1}deg
                                )`;
                                currentProgress++;
                            } else {
                                clearInterval(interval);
                            }
                        }, 20);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(container);

        // Hover effect
        circle.addEventListener("mouseenter", () => {
            let currentProgress = 0;
            const interval = setInterval(() => {
                if (currentProgress <= end) {
                    circleText.textContent = `${currentProgress}%`;
                    circle.style.background = `conic-gradient(
                         #1aa5b7 ${currentProgress * 2.6}deg,
                        rgb(231, 231, 231) ${currentProgress * 3.6}deg
                    )`;
                    currentProgress++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        });
    });
});




/*
// Wait for the page to load completely
window.onload = () => {
    // Get the loading screen and content elements
    const loadingScreen = document.getElementById('loadingScreen');
    const content = document.getElementById('content');
    
    // Simulate loading process (you can adjust the time as per your need)
    setTimeout(() => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
        
        // Show content
        content.style.display = 'block';
    }, 4000); // 3 seconds for demo, adjust as necessary
};
*/



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

function animateCount(id, targetValue, duration) {
    const element = document.getElementById(id);
    const target = parseInt(targetValue, 10); // Parse the target value
    const increment = Math.ceil(target / (duration / 50)); // Calculate increment step
    let currentValue = 0;

    // Start the counter animation
    const counter = setInterval(() => {
        currentValue += increment;

        if (currentValue >= target) {
            element.textContent = target; // Set the final value
            clearInterval(counter); // Stop the animation
        } else {
            element.textContent = currentValue; // Update the value
        }
    }, 200); // Update every 50ms
}

// Add individual delays for each counter
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => animateCount('projects-count', 400, 3000), 0); // Start immediately
    setTimeout(() => animateCount('users-count', 2000, 3000), 0); // Start after 3 seconds
});


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
  cursorArrow.style.transform = `translate(${x - 7.5}px, ${y - 7.5}px)`; // Center the arrow

  // Create trail at cursor position
  createTrail(x, y);
});
 