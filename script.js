// Initialisation AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});


// Menu  responsive

const btnMenu = document.getElementById('btn-menu');
const navMenu = document.querySelector('.nav-menu');
if (btnMenu && navMenu) {
    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.querySelector('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        btn-menu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;




// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});




// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé ! (simulation)');
    contactForm.reset();
});

