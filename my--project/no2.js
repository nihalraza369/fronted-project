/*
const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
    const circle = container.querySelector(".circle");
    const circleText = circle.querySelector(".circle-text");
    const description = container.querySelector(".description");

    let isAnimating = false;

    // Reveal animation when the page loads
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.classList.add("visible"); // Adding class for reveal effect

                    if (!isAnimating) {
                        isAnimating = true;
                        let progress = 0;
                        const interval = setInterval(() => {
                            if (progress <= 90) {
                                circleText.textContent = `${progress}%`;
                                circle.style.background = `conic-gradient(
                                    rgb(231, 231, 231) 0%, 
                                    #636363 ${progress * 3.6}deg, 
                                    rgb(231, 231, 231) ${progress * 3.6}deg
                                )`;
                                progress++;
                            } else {
                                clearInterval(interval);
                            }
                        }, 20);
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(container);

    // Hover event to start animation
    circle.addEventListener("mouseenter", () => {
        let progress = 0;
        const interval = setInterval(() => {
            if (progress <= 90) {
                circleText.textContent = `${progress}%`;
                circle.style.background = `conic-gradient(
                    rgb(231, 231, 231) 0%, 
                    #636363 ${progress * 3.6}deg, 
                    rgb(231, 231, 231) ${progress * 3.6}deg
                )`;
                progress++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});
*/



const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
    const circle = container.querySelector(".circle");
    const circleText = circle.querySelector(".circle-text");
    const description = container.querySelector(".description");

    let progress = 0;
    let end = 0;

    // Customize progress for each language
    if (description.textContent.includes("HTML and CSS")) {
        end = 90; // HTML & CSS (fixed to 90%)
    } else if (description.textContent.includes("Python")) {
        end = 85; // Python (fixed to 85%)
    } else if (description.textContent.includes("JavaScript") || description.textContent.includes("TypeScript")) {
        end = 70; // JavaScript and TypeScript (fixed to 70%)
    }

    // Reveal animation when the page loads
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.classList.add("visible"); // Adding class for reveal effect

                    // Start progress animation
                    let currentProgress = 0;
                    const interval = setInterval(() => {
                        if (currentProgress <= end) {
                            circleText.textContent = `${currentProgress}%`;
                            circle.style.background = `conic-gradient(
                                rgb(231, 231, 231) 0%, 
                                #636363 ${currentProgress * 3.6}deg, 
                                rgb(231, 231, 231) ${currentProgress * 3.6}deg
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

    // Hover event to start animation
    circle.addEventListener("mouseenter", () => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            if (currentProgress <= end) {
                circleText.textContent = `${currentProgress}%`;
                circle.style.background = `conic-gradient(
                    rgb(231, 231, 231) 0%, 
                    #636363 ${currentProgress * 3.6}deg, 
                    rgb(231, 231, 231) ${currentProgress * 3.6}deg
                )`;
                currentProgress++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});


const video = document.getElementById("animationVideo");
    const text = document.getElementById("text");

    // Add event listener for video ending
    video.addEventListener("ended", () => {
      video.style.display = "none"; // Hide video
      text.style.display = "block"; // Show text
    });


