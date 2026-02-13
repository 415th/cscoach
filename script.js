// ============ LANGUAGE SWITCHER ============
let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang, btn) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.remove('active');
    });
    if (btn) {
        btn.classList.add('active');
    }
    
    // Update all text elements
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'ru' && element.getAttribute('data-ru')) {
            element.textContent = element.getAttribute('data-ru');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach((btn, index) => {
        if ((currentLanguage === 'en' && index === 0) || (currentLanguage === 'ru' && index === 1)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Apply initial language
    if (currentLanguage === 'ru') {
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute('data-ru') || element.getAttribute('data-en');
        });
    }
    
    // Form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLanguage === 'ru' ? 'Спасибо за ваш запрос!' : 'Thank you for your inquiry!');
            form.reset();
        });
    }
});
