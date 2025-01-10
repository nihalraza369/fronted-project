
  
  // script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay before removing the hidden class
            setTimeout(() => {
              entry.target.classList.remove("hidden");
            }, 1000); // Delay in milliseconds (1 second here)
          } else {
            // Add hidden class immediately when leaving
            entry.target.classList.add("hidden");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 10% of the section is visible
    );
  
    sections.forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });
  