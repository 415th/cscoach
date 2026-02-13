/* ========================================
   ELITE CS2 COACHING - JAVASCRIPT
   ======================================== */

// ============ Language System ============
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = window.translations || {};
        this.init();
    }

    init() {
        this.setupLanguageButtons();
        this.applyLanguage(this.currentLanguage);
    }

    setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage(lang);
    }

    applyLanguage(lang) {
        // Update active button
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update all text elements
        if (lang === 'ru') {
            this.translateToRussian();
        } else {
            this.translateToEnglish();
        }

        // Animate page transition
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    translateToRussian() {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            const englishText = el.dataset.en;
            const russianText = this.translations.ru[englishText] || englishText;
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                el.placeholder = russianText;
            } else if (el.tagName === 'LABEL') {
                el.textContent = russianText;
            } else {
                el.textContent = russianText;
            }
        });
    }

    translateToEnglish() {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            el.textContent = el.dataset.en;
        });
    }
}

// ============ Testimonials Slider ============
class TestimonialsSlider {
    constructor() {
        this.currentIndex = 0;
        this.cards = document.querySelectorAll('.testimonial-card');
        this.totalCards = this.cards.length;
        this.init();
    }

    init() {
        this.createDots();
        this.setupButtons();
        this.showSlide(0);
        this.autoPlay();
    }

    createDots() {
        const dotsContainer = document.getElementById('sliderDots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    setupButtons() {
        document.getElementById('prevBtn').addEventListener('click', () => this.prevSlide());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        this.currentIndex = (index + this.totalCards) % this.totalCards;
        
        this.cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === this.currentIndex) {
                card.classList.add('active');
            }
        });

        // Update dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === this.currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    nextSlide() {
        this.showSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.showSlide(this.currentIndex - 1);
    }

    autoPlay() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// ============ Mobile Menu Toggle ============
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.init();
    }

    init() {
        this.menuToggle.addEventListener('click', () => this.toggle());
        
        // Close menu when clicking on a link
        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
    }

    toggle() {
        this.navLinks.classList.toggle('active');
    }

    close() {
        this.navLinks.classList.remove('active');
    }
}

// ============ Smooth Scroll ============
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============ Scroll Animations ============
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.benefit-card, .pricing-card, .process-step, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// ============ Contact Form Handler ============
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            discord: document.getElementById('discord').value,
            package: document.getElementById('package').value,
            message: document.getElementById('message').value
        };

        // Validate
        if (!this.validate(formData)) {
            alert('Please fill in all required fields');
            return;
        }

        // Show success message (in production, send to backend)
        console.log('Form submitted:', formData);
        this.showSuccess();
        this.form.reset();
    }

    validate(data) {
        return data.name && data.email && data.package;
    }

    showSuccess() {
        const btn = this.form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = '✓ Sent! We\'ll contact you soon';
        btn.style.background = 'linear-gradient(135deg, #00D4FF 0%, #00FF88 100%)';
        btn.style.color = '#0A0E27';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
    }
}

// ============ Header Scroll Effect ============
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                this.header.style.background = 'rgba(10, 14, 39, 0.98)';
            } else {
                this.header.style.boxShadow = 'none';
                this.header.style.background = 'rgba(10, 14, 39, 0.95)';
            }
        });
    }
}

// ============ Form Input Animation ============
class FormInputAnimation {
    constructor() {
        this.init();
    }

    init() {
        const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
        
        inputs.forEach(input => {
            // Handle initial state
            if (input.value) {
                input.parentElement.querySelector('label').classList.add('active');
            }

            input.addEventListener('focus', () => {
                input.parentElement.querySelector('label').classList.add('active');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.querySelector('label').classList.remove('active');
                }
            });
        });
    }
}

// ============ Initialize App ============
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new LanguageManager();
    new TestimonialsSlider();
    new MobileMenu();
    new SmoothScroll();
    new ScrollAnimations();
    new ContactForm();
    new HeaderScrollEffect();
    new FormInputAnimation();

    // Add smooth transition for body
    document.body.style.transition = 'opacity 0.2s ease';

    // Log initialization
    console.log('Elite CS2 Coaching - App Initialized ✓');
});

// ============ Utility Functions ============

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Adjust any responsive behaviors here
}, 250));

// Prevent console errors in production
if (typeof console === 'undefined') {
    console = {
        log: function() {},
        error: function() {},
        warn: function() {}
    };
}

// Add event tracking (optional - for analytics)
function trackEvent(eventName, data = {}) {
    console.log(`Event: ${eventName}`, data);
    // Send to analytics service (GTM, Mixpanel, etc.)
}

// Button clicks tracking
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('button_click', { 
            button_text: this.textContent,
            button_type: this.classList.contains('btn-primary') ? 'primary' : 'secondary'
        });
    });
});

// Link clicks tracking
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            trackEvent('navigation', { target: href });
        }
    });
});
