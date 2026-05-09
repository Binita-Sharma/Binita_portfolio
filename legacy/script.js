async function loadSection(id, file) {
    const el = document.getElementById(id);
    if (!el) return; // Skip if container doesn't exist on this page
    try {
        const response = await fetch(`sections/${file}`);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const html = await response.text();
        el.innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

async function init() {
    // Load all sections concurrently
    await Promise.all([
        loadSection('navbar-container', 'navbar.html'),
        loadSection('hero-container', 'hero.html'),
        loadSection('quick-links-container', 'quick-links.html'),
        loadSection('services-container', 'services.html'),
        loadSection('about-container', 'about.html'),
        loadSection('capabilities-container', 'capabilities.html'),
        loadSection('quotes-container', 'quotes.html'),
        loadSection('footer-container', 'footer.html')
    ]);

    // Initialize interactive cursor
    initCursor();

    // Initialize cloud background parallax
    initClouds();

    // Initialize animations after DOM is fully constructed
    initAnimations();
}

document.addEventListener('DOMContentLoaded', init);

function initClouds() {
    const clouds = document.querySelectorAll('.cloud');
    if (!clouds.length) return;

    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        clouds.forEach((cloud, index) => {
            const factor = (index + 1) * 30;
            cloud.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });

    // Scroll effect (parallax)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const cloudWrapper = document.querySelector('.cloud-wrapper');
        if (cloudWrapper) {
            cloudWrapper.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .link-card, .project-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Optional navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
