// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// Sticky Header on Scroll
// ============================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
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

// ============================================
// Active Navigation Link Highlighting
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ============================================
// Scroll Animations
// ============================================
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

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-card, .education-card, .cert-card, .stat-card, .language-item, .concept-badge'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// ============================================
// Skill Progress Bars Animation
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Animate skill bars when skills page is loaded
if (window.location.pathname.includes('skills.html') || window.location.pathname.endsWith('skills.html')) {
    window.addEventListener('load', () => {
        setTimeout(animateSkillBars, 300);
    });
}

// ============================================
// Contact Form Handling with Formspree (Free)
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        // Set reply-to field dynamically
        const emailInput = document.getElementById('email');
        const replyToField = contactForm.querySelector('input[name="_replyto"]');
        if (replyToField && emailInput) {
            replyToField.value = emailInput.value;
        }

        // Prepare form data
        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
                formMessage.className = 'form-message success';
                
                // Reset form
                contactForm.reset();

                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.className = 'form-message';
                    formMessage.textContent = '';
                }, 8000);
            } else {
                // Handle Formspree validation errors
                const data = await response.json();
                if (data.errors) {
                    formMessage.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    throw new Error('Form submission failed');
                }
                formMessage.className = 'form-message error';
                
                setTimeout(() => {
                    formMessage.className = 'form-message';
                    formMessage.textContent = '';
                }, 8000);
            }
        } catch (error) {
            console.error('Form Error:', error);
            // Show error message
            formMessage.textContent = 'Oops! Something went wrong. Please try again or contact me directly at ayeshashabbir82701@gmail.com';
            formMessage.className = 'form-message error';
            
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 8000);
        } finally {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

// ============================================
// Chat Widget Interaction
// ============================================
const chatWidget = document.querySelector('.chat-widget');

if (chatWidget) {
    chatWidget.addEventListener('click', () => {
        // Scroll to contact form or open chat
        const contactPage = 'contact.html';
        if (window.location.pathname.includes('contact.html')) {
            // If already on contact page, scroll to form
            const form = document.querySelector('.contact-form');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Navigate to contact page
            window.location.href = contactPage;
        }
    });
}

// ============================================
// Typing Animation for Hero Text (Optional Enhancement)
// ============================================
const heroName = document.querySelector('.name-highlight');

if (heroName) {
    const isHomePage = window.location.pathname.includes('index.html') || 
                      window.location.pathname.endsWith('/') || 
                      window.location.pathname === '' ||
                      window.location.pathname.endsWith('index.html');
    
    if (isHomePage) {
        const text = heroName.textContent.trim();
        heroName.textContent = '';
        let index = 0;

        const typeWriter = () => {
            if (index < text.length) {
                heroName.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation after a delay
        setTimeout(typeWriter, 1500);
    }
}

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%c👋 Welcome to Ayesha Shabbir\'s Portfolio!', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c💻 Computer Science Student | Web & Software Enthusiast', 'color: #b0b0b0; font-size: 14px;');
console.log('%c📧 Contact: ayeshashabbir82701@gmail.com', 'color: #4a9eff; font-size: 12px;');
