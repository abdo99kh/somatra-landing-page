// 1. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Language Toggle Logic (Conceptual)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const isEn = document.documentElement.lang === 'en';
    
    if (isEn) {
        // Toggle to Arabic
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        langToggle.innerHTML = '<i class="fas fa-globe me-1"></i> English';
        // Note: Real translation would involve a dictionary or separate HTML
        alert('Language switched to Arabic (Structure Only). Real localization would involve translation strings.');
    } else {
        // Toggle back to English
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        langToggle.innerHTML = '<i class="fas fa-globe me-1"></i> العربية';
    }
});

// 3. Simple Form Submission Alert
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting Somatra! Our team will get back to you shortly.');
    contactForm.reset();
});

// 4. Navbar Sticky Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-2');
    } else {
        nav.classList.remove('py-2');
    }
});
