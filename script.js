// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.activity-card, .benefit-item, .stat-box');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-menu');
    const navBrand = document.querySelector('.nav-brand');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            background: var(--primary-color);
            border: none;
            color: white;
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 5px;
            display: block;
        `;

        toggle.addEventListener('click', () => {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--darker-bg)';
                nav.style.padding = '1rem';
            }
        });

        navBrand.parentElement.appendChild(toggle);
    }
};

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add active state to navigation items
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;
            const value = parseInt(text.replace(/\D/g, ''));
            number.textContent = '0';
            animateCounter(number, value);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-box').forEach(stat => {
    statsObserver.observe(stat);
});
