
// Reveal sections as they enter the screen

const revealElements = document.querySelectorAll(
    '.about, .menu-card, .contact'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});

// Smooth navigation when clicking menu links

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log("Welcome to The Saffron Table!");
