
/*
// Fade-in effect for posts on scroll
window.addEventListener('scroll', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const rect = post.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            post.classList.add('visible');
        }
    });
});/*
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
 */


window.addEventListener('scroll', () => {
    const animatedImage = document.querySelector('.profile-picture-about');
    console.log(animatedImage.classList)
    if (window.scrollY > 900){
        animatedImage.classList.add('show');
        console.log("I have scrolled")
    } else {
        console.log("Hello ", window.scrollY)
    }
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const rect = post.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            post.classList.add('visible');
        }
    });
});

/*
// Detect when the image is in the viewport

function handleScroll() {
    const rect = profile-picture-about.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
    }
}

window.addEventListener('scroll', handleScroll);
*/