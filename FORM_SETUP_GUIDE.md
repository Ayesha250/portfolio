# Contact Form Setup Guide

You have **TWO options** to receive contact form submissions. Choose the one that's easier for you!

---

## Option 1: Formspree (EASIEST - Recommended) ⭐

### Setup Steps:

1. **Go to [https://formspree.io/](https://formspree.io/)**
2. **Sign up** (free account)
3. **Create a new form:**
   - Click "New Form"
   - Form name: "Portfolio Contact"
   - Your email: `ayeshashabbir8970@gmail.com`
   - Click "Create Form"
4. **Copy your Form ID** (looks like: `xrgkqjpn` or `https://formspree.io/f/xrgkqjpn`)

### Update Your Code:

**In `contact.html`, change the form tag:**
```html
<!-- Change this line: -->
<form class="contact-form" id="contactForm">

<!-- To this: -->
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Replace `YOUR_FORM_ID` with your actual Formspree form ID**

**In `script.js`, update the form handler:**
```javascript
// Replace the entire contact form section with this simpler version:
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        formMessage.className = 'form-message';
        formMessage.textContent = '';

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
                formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
                formMessage.className = 'form-message success';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.className = 'form-message';
                    formMessage.textContent = '';
                }, 8000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.textContent = 'Oops! Something went wrong. Please try again or contact me directly at ayeshashabbir8970@gmail.com';
            formMessage.className = 'form-message error';
            
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 8000);
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}
```

**Also update the form fields in `contact.html` to match Formspree format:**
```html
<input type="text" id="name" name="name" required>
<input type="email" id="email" name="email" required>
<input type="text" id="subject" name="subject" required>
<textarea id="message" name="message" rows="6" required></textarea>
```

**That's it!** Formspree will automatically send emails to your inbox.

---

## Option 2: EmailJS (More Customizable)

Follow the instructions in `EMAILJS_SETUP.md` file.

### Quick Setup:
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Connect your Gmail account
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Update `script.js` with your credentials (see EMAILJS_SETUP.md)

---

## Which Should You Choose?

- **Formspree**: Easier setup, works immediately, free tier: 50 submissions/month
- **EmailJS**: More customizable, free tier: 200 emails/month

**Recommendation:** Start with Formspree for simplicity!

---

## Testing

After setup:
1. Open your contact page
2. Fill out the form
3. Submit it
4. Check your email inbox (and spam folder)

---

## Need Help?

- Formspree Docs: [https://help.formspree.io/](https://help.formspree.io/)
- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
